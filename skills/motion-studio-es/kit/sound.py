"""sound.py — trilha sintetizada e sincronizada aos cues da animação (kit Motion Studio)

uso:  python3 sound.py cues.json trilha.wav [--mood grave] [--key D] [--dur 9.5] [--seed 4]
      (cues.json sai de:  node render.mjs cena.html --cues cues.json)

Moods: grave (padrão aprovado: cinematográfico em Ré menor, pad quente, piano macio, impactos graves,
       risers de filtro, sem agudos e sem ruído de vento) | epico | tech | clean | ambient | pop
Cues que a cena pode registrar com M.cue(t, tipo, {...}):
  hit {s:0..1}      impacto + acorde (troca de cena)       big {s}        impacto forte (revelação de logo)
  rise {len:0.8}    riser que TERMINA em t                 whoosh {len}   passagem curta que termina em t
  pop               elemento surgindo                      tick           detalhe de UI / letra
  click             clique de interface                    type {len,rate} digitação
  notes {notes:['D3','F3','A3'], step:0.07}  arpejo        pulse {n:4, every:0.5}  batimento grave
  swell {len}       crescendo do pad até t                 end            resolução final + cauda
  chord             força troca de acorde em t
A loudness final (-14 LUFS) é aplicada pelo render.mjs na hora de juntar com o vídeo."""
import sys, json, argparse
import numpy as np
from scipy.signal import butter, sosfilt, fftconvolve, stft, istft
from scipy.io import wavfile

SR = 48000
NAMES = {'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11}
def midi(n): return NAMES[n[:-1]] + 12 * (int(n[-1]) + 1)
def hz(n, tr=0): return 440 * 2 ** ((midi(n) + tr - 69) / 12)
def tv(d): return np.arange(max(1, int(d * SR))) / SR

# ---------------- moods (acordes escritos no tom de referência; --key transpõe) ----------------
MOODS = {
  'grave': dict(ref='D', lp=5500, verb=0.30, noise=False, bpm=0, drums=None,
      chords=[['D2','A2','D3','F3','C4','E4'], ['Bb1','Bb2','F3','A3','D4'], ['G1','G2','D3','F3','A3','Bb3'], ['A1','A2','E3','G3','C#4']],
      final=['D2','A2','D3','F3','A3','E4'], arp=['D3','A3','F3','C4','A3','E4','D4']),
  'epico': dict(ref='D', lp=7000, verb=0.38, noise=False, bpm=0, drums='taiko',
      chords=[['D2','A2','D3','F3','A3'], ['Bb1','F2','Bb2','D3','F3'], ['F2','C3','F3','A3','C4'], ['C2','G2','C3','E3','G3']],
      final=['D2','A2','D3','F3','A3','D4'], arp=['D3','F3','A3','D4','A3','F3']),
  'tech': dict(ref='A', lp=9000, verb=0.22, noise=True, bpm=118, drums='tech',
      chords=[['A1','A2','E3','G3','C4'], ['F1','F2','C3','E3','A3'], ['G1','G2','D3','F3','B3'], ['E1','E2','B2','D3','G3']],
      final=['A1','A2','E3','A3','C4','E4'], arp=['A3','C4','E4','A4','E4','C4']),
  'clean': dict(ref='C', lp=10000, verb=0.26, noise=True, bpm=0, drums=None, marimba=True,
      chords=[['C2','G2','E3','B3','D4'], ['A1','A2','E3','G3','C4'], ['F1','F2','C3','E3','A3'], ['G1','G2','D3','F3','B3']],
      final=['C2','G2','C3','E3','G3','D4'], arp=['C4','E4','G4','B4','G4','E4']),
  'ambient': dict(ref='E', lp=6000, verb=0.45, noise=False, bpm=0, drums=None,
      chords=[['E2','B2','E3','G3','D4','F#4'], ['C2','G2','E3','G3','B3'], ['A1','E2','A2','C3','E3','G3'], ['D2','A2','D3','F#3','A3']],
      final=['E2','B2','E3','G3','B3','F#4'], arp=['E3','B3','G3','D4','B3']),
  'pop': dict(ref='F', lp=11000, verb=0.2, noise=True, bpm=124, drums='pop',
      chords=[['F1','F2','C3','F3','A3'], ['C2','C3','E3','G3','C4'], ['D2','D3','F3','A3','D4'], ['Bb1','Bb2','D3','F3','Bb3']],
      final=['F1','F2','C3','F3','A3','C4'], arp=['F3','A3','C4','F4','C4','A3']),
}

class Mix:
    def __init__(s, dur, rng):
        s.n = int(dur * SR); s.dur = dur; s.R = rng
        s.bus = {k: np.zeros((s.n, 2)) for k in ('pad', 'rise', 'keys', 'boom', 'pulse', 'drum', 'fx')}
    def add(s, bus, t0, mono, pan=0.0):
        i0 = int(round(t0 * SR))
        if i0 >= s.n or len(mono) == 0: return
        if i0 < 0: mono = mono[-i0:]; i0 = 0
        m = mono[:s.n - i0]
        s.bus[bus][i0:i0 + len(m), 0] += m * np.sqrt(0.5 * (1 - pan))
        s.bus[bus][i0:i0 + len(m), 1] += m * np.sqrt(0.5 * (1 + pan))

# ---------------- instrumentos ----------------
def saw(f, t, R, cap=2400):
    y = np.zeros_like(t); ph = R.uniform(0, 6.28)
    for h in range(1, 48):
        if f * h > cap: break
        y += np.sin(2 * np.pi * f * h * t + ph * h) / h
    return y
def pad_note(f, d, amp, R, att=0.9, rel=1.1):
    t = tv(d + rel); y = sum(saw(f * (1 + det), t, R, 1600) for det in (-0.005, 0.0, 0.006))
    env = np.minimum(1, t / att) ** 1.8 * np.where(t > d, np.clip(1 - (t - d) / rel, 0, 1) ** 1.6, 1)
    return y * env * amp / 4
def felt(f, amp, dec=0.9):  # piano de feltro / pluck macio
    t = tv(dec * 4)
    y = np.sin(2 * np.pi * f * t) + 0.35 * np.sin(4 * np.pi * f * t) * np.exp(-t / 0.18) + 0.12 * np.sin(6 * np.pi * f * t) * np.exp(-t / 0.08)
    return y * np.exp(-t / dec) * np.minimum(1, t / 0.012) * amp
def marimba(f, amp, dec=0.5):
    t = tv(dec * 3)
    y = np.sin(2 * np.pi * f * t) * np.exp(-t / dec) + 0.3 * np.sin(2 * np.pi * 3.93 * f * t) * np.exp(-t / 0.06) + 0.08 * np.sin(2 * np.pi * 9.2 * f * t) * np.exp(-t / 0.02)
    return y * np.minimum(1, t / 0.003) * amp
def boom(amp, f0=58, f1=34, dec=1.1):
    t = tv(dec * 4); f = f1 + (f0 - f1) * np.exp(-t / 0.18); ph = 2 * np.pi * np.cumsum(f) / SR
    y = np.sin(ph) + 0.3 * np.sin(2 * ph) * np.exp(-t / 0.3) + 0.12 * np.sin(3 * ph) * np.exp(-t / 0.15)
    return y * np.exp(-t / dec) * np.minimum(1, t / 0.008) * amp
def kick(amp, f0=120, f1=45, dec=0.32):
    t = tv(dec * 3); f = f1 + (f0 - f1) * np.exp(-t / 0.035); ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / dec) * np.minimum(1, t / 0.002) * amp
def tom(amp, f0=95, f1=60, dec=0.55, R=None):
    t = tv(dec * 3); f = f1 + (f0 - f1) * np.exp(-t / 0.08); ph = 2 * np.pi * np.cumsum(f) / SR
    n = lp1(R.standard_normal(len(t)), 900) * np.exp(-t / 0.03) * 0.4
    return (np.sin(ph) * np.exp(-t / dec) + n) * amp
def pulse(amp):
    t = tv(0.5); f = 46 + 30 * np.exp(-t / 0.04); ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / 0.13) * np.minimum(1, t / 0.004) * amp
def pop(amp, f0=520, f1=260, dec=0.09):
    t = tv(0.3); f = f1 + (f0 - f1) * np.exp(-t / 0.025); ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / dec) * np.minimum(1, t / 0.002) * amp
def noise_burst(R, d, f_lo, f_hi, dec):
    t = tv(d); x = R.standard_normal(len(t))
    sos = butter(2, [f_lo, f_hi], 'bandpass', fs=SR, output='sos')
    return sosfilt(sos, x) * np.exp(-t / dec) * np.minimum(1, t / 0.001)
def lp1(x, fc, o=2): return sosfilt(butter(o, fc, 'lp', fs=SR, output='sos'), x, axis=0)
def hp1(x, fc, o=2): return sosfilt(butter(o, fc, 'hp', fs=SR, output='sos'), x, axis=0)

def sweep(y, d, f_from, f_to, shape=1.6):
    """filtro passa-baixa que abre ao longo do tempo (STFT)"""
    Ypad = np.concatenate([y, np.zeros(2048)])
    f, tt, Z = stft(Ypad, SR, nperseg=2048, noverlap=1536)
    p = np.clip(tt / max(d, 1e-3), 0, 1); fc = f_from * (f_to / f_from) ** (p ** shape)
    Z = Z / (1 + (f[:, None] / fc[None, :]) ** 4)
    _, out = istft(Z, SR, nperseg=2048, noverlap=1536)
    return out[:len(y)]
def riser(m, t_end, d, notes, amp, tr, f_from=150, f_to=2400):
    t0 = t_end - d; t = tv(d + 0.05)
    y = sum(saw(hz(n, tr), t, m.R, 2400) for n in notes)
    out = sweep(y, d, f_from, f_to)
    env = np.clip(t / d, 0, 1) ** 2.2; env[t > d] = np.clip(1 - (t[t > d] - d) / 0.05, 0, 1)
    out = out / (np.max(np.abs(out)) + 1e-9) * env * amp
    m.add('rise', t0, out * 0.9, -0.25); m.add('rise', t0 + 0.012, out * 0.9, 0.25)
def whoosh_noise(m, t_end, d, amp):
    t = tv(d + 0.08); x = m.R.standard_normal(len(t))
    out = sweep(x, d, 300, 3800, 1.2)
    env = np.sin(np.pi * np.clip(t / (d + 0.08), 0, 1)) ** 2
    out = hp1(out, 180) / (np.max(np.abs(out)) + 1e-9) * env * amp
    m.add('fx', t_end - d, out, -0.3); m.add('fx', t_end - d + 0.01, out, 0.3)

# ---------------- efeitos e master ----------------
def make_ir(secs=2.6, decay=2.6, lp_=3800, seed=9):
    t = tv(secs); r = np.random.default_rng(seed); out = []
    for c in range(2):
        x = lp1(r.standard_normal(len(t)) * np.exp(-t * decay), lp_); x[:int(0.02 * SR)] = 0
        out.append(x / np.sqrt(np.sum(x ** 2)))
    return out
IR = make_ir()
def verb(x, wet): return x + np.stack([fftconvolve(x[:, c], IR[c])[:len(x)] for c in range(2)], 1) * wet

def build(info, mood='grave', key=None, seed=4, dur=None):
    P = MOODS[mood]; R = np.random.default_rng(seed)
    tr = 0 if not key else (NAMES[key] - NAMES[P['ref']] + 6) % 12 - 6
    dur = float(dur or info.get('dur') or 6.0)
    cues = sorted(info.get('cues', []), key=lambda c: c['t'])
    bpm = info.get('bpm') or P['bpm']
    m = Mix(dur, R)
    H = lambda n: hz(n, tr)
    # ----- cama harmônica: troca de acorde nos hits/big/chord -----
    changes = [0.0] + [c['t'] for c in cues if c['type'] in ('hit', 'big', 'chord') and 0.25 < c['t'] < dur - 0.3]
    ends = [c['t'] for c in cues if c['type'] == 'end']
    t_end = ends[0] if ends else None
    bounds = sorted(set([round(x, 3) for x in changes])) + [t_end if t_end else dur]
    for i in range(len(bounds) - 1):
        a, b = bounds[i], bounds[i + 1]
        if b - a < 0.2: continue
        ch = P['chords'][i % len(P['chords'])]
        att = 1.4 if i == 0 else 0.25
        for j, n in enumerate(ch):
            f = H(n); m.add('pad', a, pad_note(f, b - a, 0.30 * (1.15 if f < 90 else 1.0), R, att, 1.2), pan=0 if f < 120 else (-0.4 if j % 2 else 0.4))
    if t_end is not None:
        for j, n in enumerate(P['final']):
            f = H(n); m.add('pad', t_end, pad_note(f, max(0.3, dur - t_end - 0.3), 0.38, R, 0.15, 1.2), pan=0 if f < 120 else (-0.4 if j % 2 else 0.4))
    # ----- ritmo (moods com bateria) -----
    if P['drums'] and bpm:
        beat = 60 / bpm; stop = t_end or dur; b = 0
        while b * beat < stop - 0.05:
            tb = b * beat
            if P['drums'] in ('tech', 'pop'):
                m.add('drum', tb, kick(0.85 if b % 4 == 0 else 0.7))
                if P['drums'] == 'pop' and b % 2 == 1: m.add('drum', tb, noise_burst(R, 0.25, 900, 3200, 0.07) * 0.35, 0.1)
                if P['noise']: m.add('drum', tb + beat / 2, noise_burst(R, 0.06, 5000, 9000, 0.018) * 0.08, 0.35)
                if P['drums'] == 'tech' and b % 8 == 6: m.add('drum', tb + beat * 0.75, kick(0.5))
            elif P['drums'] == 'taiko' and b % 2 == 0:
                m.add('drum', tb, tom(0.6 if b % 4 == 0 else 0.4, R=R))
            b += 1
        if 'arp' in P and mood == 'tech':
            step = beat / 4; k = 0; tt = 0.0
            while tt < stop - 0.05:
                m.add('keys', tt, felt(H(P['arp'][k % len(P['arp'])]), 0.10, dec=0.18), pan=(-0.3 if k % 2 else 0.3)); k += 1; tt += step
    # ----- eventos -----
    def keys_seq(notes, t0, step, a0, a1, dec=0.9):
        inst = marimba if P.get('marimba') else felt
        for i, n in enumerate(notes):
            a = a0 + (a1 - a0) * i / max(len(notes) - 1, 1)
            m.add('keys', t0 + i * step, inst(H(n), a, dec if inst is felt else 0.45), pan=(-0.35 if i % 2 else 0.35))
    for c in cues:
        t, ty, s = c['t'], c['type'], float(c.get('s', 1.0))
        ch = P['chords'][0]
        if ty in ('hit', 'big'):
            m.add('boom', t, boom((1.15 if ty == 'big' else 0.85) * s, dec=1.4 if ty == 'big' else 1.0))
            stab = c.get('notes') or ch[2:5]
            for j, n in enumerate(stab): m.add('keys', t + 0.006 * j, felt(H(n), 0.36 * s, 1.6), pan=[-0.3, 0.3, 0.0][j % 3])
            if ty == 'big' and mood in ('epico',): m.add('drum', t, tom(0.9 * s, 70, 42, 0.9, R))
        elif ty == 'rise':
            d = float(c.get('len', 0.8)); riser(m, t, d, c.get('notes') or ch[2:5], 0.55 * s, tr, 140, 2400 if mood == 'grave' else 3200)
        elif ty == 'whoosh':
            d = float(c.get('len', 0.35))
            if P['noise']: whoosh_noise(m, t, d, 0.35 * s)
            else: riser(m, t, d, c.get('notes') or ch[2:4], 0.4 * s, tr, 160, 1800)
        elif ty == 'pop':
            m.add('fx', t, pop(0.25 * s), float(c.get('pan', 0)))
        elif ty == 'tick':
            m.add('keys', t, (marimba if P.get('marimba') else felt)(H(c.get('note', 'A3')), 0.12 * s, 0.25), float(c.get('pan', 0)))
        elif ty == 'click':
            m.add('fx', t, noise_burst(R, 0.05, 900, 3000, 0.008) * 0.25 * s, 0.1)  # estalo curto
            m.add('fx', t, pop(0.12 * s, 240, 150, 0.03))                            # corpo grave do clique
        elif ty == 'type':
            d = float(c.get('len', 1.0)); rate = float(c.get('rate', 16)); n = int(d * rate)
            tap = ['D3', 'F3', 'A3', 'G3', 'C4', 'A3', 'F3', 'D3', 'G3', 'A3']
            for i in range(n):
                tt = t + i / rate + (R.random() - 0.5) * 0.25 / rate
                m.add('keys', tt, felt(H(tap[(i * 7) % 10]), (0.06 + 0.03 * R.random()) * s, dec=0.08), pan=((i * 37) % 11 - 5) / 12)
        elif ty == 'notes':
            keys_seq(c.get('notes', P['arp']), t, float(c.get('step', 0.07)), 0.16 * s, 0.24 * s, float(c.get('dec', 1.0)))
        elif ty == 'pulse':
            for i in range(int(c.get('n', 4))): m.add('pulse', t + i * float(c.get('every', 0.5)), pulse(0.5 * s))
        elif ty == 'swell':
            d = float(c.get('len', 1.5))
            for j, n in enumerate(ch[:4]): m.add('pad', t - d, pad_note(H(n), d, 0.22 * s, R, d * 0.9, 0.3), pan=(-0.3 if j % 2 else 0.3))
        elif ty == 'end':
            m.add('boom', t, boom(1.0 * s, dec=1.6))
            keys_seq(P['arp'], t + 0.08, 0.06, 0.16 * s, 0.22 * s, 1.1)
    # ----- master -----
    b = m.bus
    x = (0.55 * verb(lp1(b['pad'], 1100), P['verb']) + 0.8 * verb(lp1(b['rise'], 2600), P['verb'] * 0.8)
         + 1.0 * verb(lp1(b['keys'], 2600 if mood == 'grave' else 5000), P['verb']) + 1.0 * lp1(b['boom'], 180)
         + 0.55 * lp1(b['pulse'], 160) + 0.9 * verb(b['drum'], 0.12) + 0.9 * verb(b['fx'], 0.2))
    x = lp1(hp1(x, 26), P['lp'])
    x = x / (np.max(np.abs(x)) + 1e-9); x = np.tanh(x * 1.2) / np.tanh(1.2)
    t = np.arange(len(x)) / SR; fo = 0.45
    g = np.clip((dur - t) / fo, 0, 1) ** 1.3; n = int(0.004 * SR); g[:n] *= np.linspace(0, 1, n)
    x = x * g[:, None]
    return x / (np.max(np.abs(x)) + 1e-9) * 0.89  # pico ~ -1 dBFS

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('cues'); ap.add_argument('out')
    ap.add_argument('--mood', default='grave', choices=list(MOODS)); ap.add_argument('--key'); ap.add_argument('--seed', type=int, default=4); ap.add_argument('--dur', type=float)
    a = ap.parse_args()
    info = json.load(open(a.cues))
    x = build(info, a.mood, a.key, a.seed, a.dur)
    wavfile.write(a.out, SR, (x * 32767).astype(np.int16))
    print(f'  ✔ trilha {a.mood} {x.shape[0] / SR:.2f}s ->', a.out)
