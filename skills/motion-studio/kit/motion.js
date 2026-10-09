/* motion.js — runtime do kit Motion Studio (render determinístico por tempo)
   Uso:  <script src="motion.js"></script>  ->  objeto global M
   Regra de ouro: render(t) é FUNÇÃO PURA do tempo t (segundos). Nada de
   requestAnimationFrame, setTimeout, Date, performance.now, Math.random,
   CSS transition/animation no render. Aleatório só com M.rng(seed)/M.hash. */
(function (G) {
  'use strict';
  const M = {};

  /* ---------------- parâmetros e layout ---------------- */
  M.Q = new URLSearchParams(location.search);
  M.W = +(M.Q.get('w') || 1920);
  M.H = +(M.Q.get('h') || 1080);
  M.FPS = +(M.Q.get('fps') || 30);
  M.V = M.H > M.W * 1.05;                     // vertical (9:16, 4:5)
  M.SQ = !M.V && M.W < M.H * 1.2;             // quase quadrado (1:1)
  M.S = Math.min(M.W, M.H) / 1080;            // escala: 1 = lado menor 1080px
  M.pick = (h, v, sq) => (M.V ? v : (M.SQ && sq !== undefined ? sq : h));
  // áreas seguras: vertical considera a interface do Reels/TikTok/Shorts
  M.safe = M.V ? { top: M.H * 0.13, bottom: M.H * 0.22, left: M.W * 0.06, right: M.W * 0.14 }
               : { top: M.H * 0.06, bottom: M.H * 0.07, left: M.W * 0.05, right: M.W * 0.05 };
  document.documentElement.style.setProperty('--W', M.W + 'px');
  document.documentElement.style.setProperty('--H', M.H + 'px');
  document.documentElement.style.setProperty('--u', M.S + 'px');

  /* ---------------- matemática ---------------- */
  const clamp = M.clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = M.lerp = (a, b, p) => a + (b - a) * p;
  M.invLerp = (a, b, v) => (b === a ? 0 : (v - a) / (b - a));
  M.seg = (t, a, b) => clamp((t - a) / (b - a || 1e-9));          // progresso linear 0..1 entre a e b
  M.range = (t, a, b, e) => (e || M.ease.outExpo)(M.seg(t, a, b)); // progresso com easing
  M.map = (v, a, b, c, d, e) => lerp(c, d, (e || (x => x))(clamp(M.invLerp(a, b, v))));
  M.expLerp = (a, b, p) => a * Math.pow(b / a, p);                 // escala/zoom com velocidade percebida constante
  M.smooth = p => { p = clamp(p); return p * p * (3 - 2 * p); };
  M.pulse = (t, at, w) => { const d = Math.abs(t - at) / w; return d >= 1 ? 0 : 1 - M.smooth(d); }; // 0→1→0 em torno de "at"
  M.loop = (t, d) => ((t % d) + d) % d;
  M.pingpong = (t, d) => { const x = M.loop(t, 2 * d); return x < d ? x / d : 2 - x / d; };
  M.step = (t, fps) => Math.floor(t * fps + 1e-6) / fps;           // animar "em 2s" (ex.: fps 12) p/ visual de stop-motion
  // tempo do centro do quadro: use em textos que TROCAM de valor (contador, digitação, scramble, timecode)
  // para o motion blur não misturar dois valores ("8" fantasma sobre o "7")
  M.frameT = t => Math.round(t * M.FPS) / M.FPS;
  M.dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
  M.deg = r => r * 180 / Math.PI;
  M.rad = d => d * Math.PI / 180;

  /* ---------------- easing (curvas) ---------------- */
  const E = M.ease = {};
  E.linear = p => p;
  E.inSine = p => 1 - Math.cos(p * Math.PI / 2);
  E.outSine = p => Math.sin(p * Math.PI / 2);
  E.inOutSine = p => -(Math.cos(Math.PI * p) - 1) / 2;
  const pw = n => [p => Math.pow(p, n), p => 1 - Math.pow(1 - p, n),
    p => (p < 0.5 ? Math.pow(2, n - 1) * Math.pow(p, n) : 1 - Math.pow(-2 * p + 2, n) / 2)];
  [['Quad', 2], ['Cubic', 3], ['Quart', 4], ['Quint', 5]].forEach(([k, n]) => { const [a, b, c] = pw(n); E['in' + k] = a; E['out' + k] = b; E['inOut' + k] = c; });
  E.inExpo = p => (p <= 0 ? 0 : Math.pow(2, 10 * p - 10));
  E.outExpo = p => (p >= 1 ? 1 : 1 - Math.pow(2, -10 * p));
  E.inOutExpo = p => (p <= 0 ? 0 : p >= 1 ? 1 : p < 0.5 ? Math.pow(2, 20 * p - 10) / 2 : (2 - Math.pow(2, -20 * p + 10)) / 2);
  E.inCirc = p => 1 - Math.sqrt(1 - p * p);
  E.outCirc = p => Math.sqrt(1 - Math.pow(p - 1, 2));
  E.inOutCirc = p => (p < 0.5 ? (1 - Math.sqrt(1 - 4 * p * p)) / 2 : (Math.sqrt(1 - Math.pow(-2 * p + 2, 2)) + 1) / 2);
  E.outBack = (p, s = 1.70158) => 1 + (s + 1) * Math.pow(p - 1, 3) + s * Math.pow(p - 1, 2);
  E.inBack = (p, s = 1.70158) => (s + 1) * p * p * p - s * p * p;
  E.inOutBack = (p, s = 1.70158) => { const c = s * 1.525; return p < 0.5 ? (Math.pow(2 * p, 2) * ((c + 1) * 2 * p - c)) / 2 : (Math.pow(2 * p - 2, 2) * ((c + 1) * (p * 2 - 2) + c) + 2) / 2; };
  E.outElastic = (p, amp = 1, per = 0.3) => (p <= 0 ? 0 : p >= 1 ? 1 : amp * Math.pow(2, -10 * p) * Math.sin((p - per / 4) * (2 * Math.PI) / per) + 1);
  E.outBounce = p => { const n = 7.5625, d = 2.75; if (p < 1 / d) return n * p * p; if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75; if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375; return n * (p -= 2.625 / d) * p + 0.984375; };
  E.smooth = M.smooth;

  // cubic-bezier igual ao CSS (resolve x->t por Newton + bisseção)
  M.bezier = (x1, y1, x2, y2) => {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = t => ((ax * t + bx) * t + cx) * t, sy = t => ((ay * t + by) * t + cy) * t, dx = t => (3 * ax * t + 2 * bx) * t + cx;
    return p => {
      if (p <= 0) return 0; if (p >= 1) return 1;
      let t = p; for (let i = 0; i < 8; i++) { const e = sx(t) - p; if (Math.abs(e) < 1e-6) return sy(t); const d = dx(t); if (Math.abs(d) < 1e-6) break; t -= e / d; }
      let a = 0, b = 1; t = p; while (a < b) { const v = sx(t); if (Math.abs(v - p) < 1e-6) break; if (p > v) a = t; else b = t; t = (a + b) / 2; if (b - a < 1e-7) break; }
      return sy(t);
    };
  };
  // curvas nomeadas de referência (sistemas de motion de produto + motion design)
  M.curve = {
    standard: M.bezier(0.4, 0, 0.2, 1),      // Material standard: movimento dentro da tela
    emphasized: M.bezier(0.2, 0, 0, 1),      // Material emphasized: chegada marcante
    decel: M.bezier(0, 0, 0.2, 1),           // entrando na tela
    accel: M.bezier(0.3, 0, 1, 1),           // saindo da tela
    snappy: M.bezier(0.16, 1, 0.3, 1),       // "expo out" suave, típico de UI premium
    swift: M.bezier(0.55, 0, 0.1, 1),        // aceleração forte + freada longa (whip, push)
    anticipate: M.bezier(0.36, 0, 0.66, -0.56), // recua antes de ir (antecipação)
    overshoot: M.bezier(0.34, 1.56, 0.64, 1) // passa do ponto e volta
  };

  // mola física analítica (massa-mola-amortecedor). Retorna f(segundos) -> 0..1(+overshoot)
  M.spring = ({ stiffness = 170, damping = 26, mass = 1, velocity = 0 } = {}) => {
    const w0 = Math.sqrt(stiffness / mass), z = damping / (2 * Math.sqrt(stiffness * mass)), v0 = velocity;
    if (z < 1) { const wd = w0 * Math.sqrt(1 - z * z), B = (v0 - z * w0) / wd; return t => (t <= 0 ? 0 : 1 + Math.exp(-z * w0 * t) * (-Math.cos(wd * t) + B * Math.sin(wd * t))); }
    if (z === 1) { const B = v0 - w0; return t => (t <= 0 ? 0 : 1 + (-1 + B * t) * Math.exp(-w0 * t)); }
    const s = Math.sqrt(z * z - 1), r1 = -w0 * (z - s), r2 = -w0 * (z + s), C2 = (v0 + r1) / (r2 - r1), C1 = -1 - C2;
    return t => (t <= 0 ? 0 : 1 + C1 * Math.exp(r1 * t) + C2 * Math.exp(r2 * t));
  };
  M.springDur = ({ stiffness = 170, damping = 26, mass = 1 } = {}) => {
    const w0 = Math.sqrt(stiffness / mass), z = damping / (2 * Math.sqrt(stiffness * mass));
    return Math.log(1000) / (Math.min(z, 1) * w0);
  };
  // presets de mola: gentle (sem overshoot), bouncy (personagem/ícone), snappy (UI), wobbly (elástico)
  M.springs = { gentle: { stiffness: 120, damping: 22 }, snappy: { stiffness: 380, damping: 32 }, bouncy: { stiffness: 260, damping: 14 }, wobbly: { stiffness: 180, damping: 9 } };
  M.springAt = (t, t0, cfg) => M.spring(typeof cfg === 'string' ? M.springs[cfg] : cfg)(t - t0);

  /* ---------------- tempo: keyframes, stagger, planos, cues ---------------- */
  // keys(t, [[t0,v0],[t1,v1,ease],...]) — valor por keyframes. v pode ser número, array ou cor '#hex'.
  // O easing do keyframe i controla a chegada nele (como no After Effects).
  M.keys = (t, K, defEase) => {
    if (t <= K[0][0]) return K[0][1];
    for (let i = 1; i < K.length; i++) {
      if (t <= K[i][0]) {
        const [ta, va] = K[i - 1], [tb, vb, e] = K[i], p = (e || defEase || E.inOutCubic)((t - ta) / (tb - ta || 1e-9));
        if (typeof va === 'number') return lerp(va, vb, p);
        if (typeof va === 'string') return M.mix(va, vb, p);
        return va.map((x, j) => lerp(x, vb[j], p));
      }
    }
    return K[K.length - 1][1];
  };
  // atraso de stagger. from: 'start' | 'end' | 'center' | 'edges' | índice | 'random'
  M.stagger = (i, n, each, from = 'start', seed = 7) => {
    if (from === 'end') return (n - 1 - i) * each;
    if (from === 'center') return Math.abs(i - (n - 1) / 2) * each;
    if (from === 'edges') return ((n - 1) / 2 - Math.abs(i - (n - 1) / 2)) * each;
    if (from === 'random') return M.hash(i, 0, seed) * (n - 1) * each;
    if (typeof from === 'number') return Math.abs(i - from) * each;
    return i * each;
  };
  // stagger em grade a partir de um ponto (distância) — ondas radiais/diagonais
  M.staggerGrid = (c, r, cols, rows, each, from = 'center') => {
    const [fc, fr] = from === 'center' ? [(cols - 1) / 2, (rows - 1) / 2] : from === 'corner' ? [0, 0] : from;
    return Math.hypot(c - fc, r - fr) * each;
  };
  // planos/cenas em sequência: M.shots([['abre',2],['logo',2.5],...], {gap:-0.3}) gap negativo = sobreposição p/ transição
  M.shots = (list, { start = 0, gap = 0 } = {}) => {
    const out = {}, arr = []; let t = start;
    list.forEach(([name, dur], i) => { const s = { name, i, start: t, dur, end: t + dur }; out[name] = s; arr.push(s); t += dur + gap; });
    out.list = arr; out.end = arr.length ? arr[arr.length - 1].end : start;
    if (arr.length) arr[arr.length - 1].last = true;   // o último plano continua visível em t = DUR
    out.at = tt => arr.filter(s => tt >= s.start && tt < s.end);
    return out;
  };
  // remapeia o tempo (ex.: sting de 3 s a partir da vinheta de 9,5 s): K = [[tSaida, tOrigem], ...] linear por trechos
  M.remap = (t, K) => { if (t <= K[0][0]) return K[0][1]; for (let i = 1; i < K.length; i++) if (t <= K[i][0]) return lerp(K[i - 1][1], K[i][1], (t - K[i - 1][0]) / (K[i][0] - K[i - 1][0] || 1e-9)); return K[K.length - 1][1]; };
  M.on = (t, s, pad = 0) => t >= s.start - pad && (s.last ? t <= s.end + pad : t < s.end + pad); // plano está ativo?
  M.lt = (t, s) => t - s.start;                                     // tempo local do plano
  // cues de som: registre na montagem (fora do render). O sound.py sincroniza a trilha com eles.
  M.CUES = [];
  M.cue = (t, type, o = {}) => { M.CUES.push(Object.assign({ t: +t.toFixed(4), type }, o)); return t; };
  // trechos de movimento rápido pedem mais amostras de motion blur (whip, wipe, voo, morph rápido)
  // M.blur(t0, t1, 12) -> o render.mjs usa até 12 subquadros só nesse intervalo (6 p/ moderado)
  M.BLUR = [];
  M.blur = (t0, t1, n = 12) => { M.BLUR.push([t0, t1, n]); };
  // BPM opcional: M.beat(n) converte batidas em segundos
  M.BPM = 0; M.beat = n => (M.BPM ? n * 60 / M.BPM : n * 0.5);

  /* ---------------- aleatório e ruído (determinísticos) ---------------- */
  M.rng = seed => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  M.hash = (i, j = 0, s = 0) => { let h = Math.imul(i | 0, 374761393) + Math.imul(j | 0, 668265263) + Math.imul(s | 0, 2147483647); h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  // Simplex noise 2D/3D (Gustavson), semente fixa
  M.noiseSeed = seed => {
    const r = M.rng(seed), p = new Uint8Array(256); for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
    const perm = new Uint8Array(512), pm12 = new Uint8Array(512); for (let i = 0; i < 512; i++) { perm[i] = p[i & 255]; pm12[i] = perm[i] % 12; }
    const g = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1];
    const F2 = 0.5 * (Math.sqrt(3) - 1), G2 = (3 - Math.sqrt(3)) / 6, F3 = 1 / 3, G3 = 1 / 6;
    M.noise2 = (x, y) => {
      const s = (x + y) * F2, i = Math.floor(x + s), j = Math.floor(y + s), t = (i + j) * G2, x0 = x - (i - t), y0 = y - (j - t);
      const i1 = x0 > y0 ? 1 : 0, j1 = 1 - i1, x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2, ii = i & 255, jj = j & 255;
      let n = 0, tt, gi;
      tt = 0.5 - x0 * x0 - y0 * y0; if (tt > 0) { gi = pm12[ii + perm[jj]] * 3; tt *= tt; n += tt * tt * (g[gi] * x0 + g[gi + 1] * y0); }
      tt = 0.5 - x1 * x1 - y1 * y1; if (tt > 0) { gi = pm12[ii + i1 + perm[jj + j1]] * 3; tt *= tt; n += tt * tt * (g[gi] * x1 + g[gi + 1] * y1); }
      tt = 0.5 - x2 * x2 - y2 * y2; if (tt > 0) { gi = pm12[ii + 1 + perm[jj + 1]] * 3; tt *= tt; n += tt * tt * (g[gi] * x2 + g[gi + 1] * y2); }
      return 70 * n; // -1..1
    };
    M.noise3 = (x, y, z) => {
      const s = (x + y + z) * F3, i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s), t = (i + j + k) * G3;
      const x0 = x - (i - t), y0 = y - (j - t), z0 = z - (k - t); let i1, j1, k1, i2, j2, k2;
      if (x0 >= y0) { if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; } else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; } else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; } }
      else { if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; } else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; } else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; } }
      const P = [[x0, y0, z0, 0, 0, 0], [x0 - i1 + G3, y0 - j1 + G3, z0 - k1 + G3, i1, j1, k1], [x0 - i2 + 2 * G3, y0 - j2 + 2 * G3, z0 - k2 + 2 * G3, i2, j2, k2], [x0 - 1 + 3 * G3, y0 - 1 + 3 * G3, z0 - 1 + 3 * G3, 1, 1, 1]];
      const ii = i & 255, jj = j & 255, kk = k & 255; let n = 0;
      for (const [a, b, c, di, dj, dk] of P) { let tt = 0.6 - a * a - b * b - c * c; if (tt > 0) { const gi = pm12[ii + di + perm[jj + dj + perm[kk + dk]]] * 3; tt *= tt; n += tt * tt * (g[gi] * a + g[gi + 1] * b + g[gi + 2] * c); } }
      return 32 * n;
    };
  };
  M.noiseSeed(1);
  M.fbm = (x, y, oct = 4) => { let a = 0.5, f = 1, s = 0; for (let i = 0; i < oct; i++) { s += a * M.noise2(x * f, y * f); f *= 2; a *= 0.5; } return s; };
  // campo de fluxo "curl": vetor de velocidade sem divergência (partículas que escoam como fluido)
  M.curl = (x, y, z = 0) => { const e = 0.01, n = (a, b) => M.noise3(a, b, z); return [(n(x, y + e) - n(x, y - e)) / (2 * e), -(n(x + e, y) - n(x - e, y)) / (2 * e)]; };

  /* ---------------- cor (mistura perceptual em OKLab) ---------------- */
  const hex = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); const n = parseInt(h.slice(0, 6), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const toLin = c => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const toSrgb = c => { c = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055; return Math.round(clamp(c) * 255); };
  const toLab = ([r, g, b]) => { r = toLin(r); g = toLin(g); b = toLin(b); const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b), m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b), s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b); return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s]; };
  const fromLab = ([L, a, b]) => { const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3), m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3), s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3); return [toSrgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s), toSrgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s), toSrgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s)]; };
  M.rgb = hex;
  M.mix = (a, b, p) => { const A = toLab(hex(a)), B = toLab(hex(b)); const c = fromLab(A.map((v, i) => lerp(v, B[i], clamp(p)))); return '#' + c.map(v => v.toString(16).padStart(2, '0')).join(''); };
  M.rgba = (h, a) => { const [r, g, b] = hex(h); return `rgba(${r},${g},${b},${a})`; };
  M.lum = h => { const [r, g, b] = hex(h).map(toLin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  M.contrast = (a, b) => { const x = M.lum(a), y = M.lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }; // texto pede >= 4.5

  /* ---------------- DOM / SVG ---------------- */
  const SVGNS = 'http://www.w3.org/2000/svg';
  const SVGTAGS = new Set('svg g path rect circle ellipse line polyline polygon text tspan textPath defs mask clipPath linearGradient radialGradient stop filter feGaussianBlur feColorMatrix feComposite feOffset feMerge feMergeNode feTurbulence feDisplacementMap feBlend use pattern image symbol'.split(' '));
  M.$ = (s, r = document) => r.querySelector(s);
  M.$$ = (s, r = document) => [...r.querySelectorAll(s)];
  M.el = (tag, attrs = {}, parent, html) => {
    const e = SVGTAGS.has(tag) ? document.createElementNS(SVGNS, tag) : document.createElement(tag);
    for (const k in attrs) { if (k === 'style' && typeof attrs[k] === 'object') Object.assign(e.style, attrs[k]); else if (k === 'class') e.setAttribute('class', attrs[k]); else e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  };
  M.attr = (e, a) => { for (const k in a) e.setAttribute(k, a[k]); return e; };
  // transform CSS: {x,y,z,s,sx,sy,r,rx,ry,skx,sky,px}  (px = perspective)
  M.tf = (o = {}) => {
    let s = '';
    if (o.px) s += `perspective(${o.px}px) `;
    s += `translate3d(${o.x || 0}px,${o.y || 0}px,${o.z || 0}px)`;
    if (o.rx) s += ` rotateX(${o.rx}deg)`; if (o.ry) s += ` rotateY(${o.ry}deg)`; if (o.r) s += ` rotate(${o.r}deg)`;
    if (o.skx || o.sky) s += ` skew(${o.skx || 0}deg,${o.sky || 0}deg)`;
    const sx = (o.sx ?? 1) * (o.s ?? 1), sy = (o.sy ?? 1) * (o.s ?? 1); if (sx !== 1 || sy !== 1) s += ` scale(${sx},${sy})`;
    return s;
  };
  // define estilos rápido. transform aceita objeto do M.tf
  M.css = (e, o) => { for (const k in o) { const v = o[k]; e.style[k] = k === 'transform' && typeof v === 'object' ? M.tf(v) : v; } return e; };
  M.show = (e, on) => { e.style.visibility = on ? 'visible' : 'hidden'; return on; };

  // quebra texto em linhas/palavras/letras com máscaras (para "subir de dentro da máscara")
  // retorna {lines, words, chars}; cada item tem .in (elemento interno que você anima)
  M.split = (el, { mask = 'words' } = {}) => {
    const text = el.textContent; el.textContent = '';
    const words = [], chars = [];
    text.split(/(\s+)/).forEach(tok => {
      if (!tok) return;
      if (/^\s+$/.test(tok)) { el.appendChild(document.createTextNode(' ')); return; }
      const w = M.el('span', { class: 'mw', style: { display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' } }, el);
      const wi = M.el('span', { class: 'mwi', style: { display: 'inline-block' } }, w);
      [...tok].forEach(ch => { const c = M.el('span', { class: 'mc', style: { display: 'inline-block' } }, wi); c.textContent = ch; c.in = c; chars.push(c); });
      if (mask === 'words') { w.style.overflow = 'hidden'; w.style.padding = '0.08em 0.04em 0.16em'; w.style.margin = '-0.08em -0.04em -0.16em'; }
      w.in = wi; words.push(w);
    });
    // agrupa linhas pela posição vertical
    const lines = []; let cur = null, top = null;
    words.forEach(w => { const y = w.offsetTop; if (top === null || Math.abs(y - top) > 2) { cur = []; lines.push(cur); top = y; } cur.push(w); });
    const L = lines.map(ws => {
      const ln = document.createElement('span'); ln.className = 'ml';
      Object.assign(ln.style, { display: 'block', overflow: mask === 'lines' ? 'hidden' : 'visible', paddingBottom: '0.14em', marginBottom: '-0.14em' });
      const inner = M.el('span', { class: 'mli', style: { display: 'block' } }, ln);
      ws[0].parentNode.insertBefore(ln, ws[0]);
      ws.forEach((w, i) => { inner.appendChild(w); if (i < ws.length - 1) inner.appendChild(document.createTextNode(' ')); });
      ln.in = inner; return ln;
    });
    // remove espaços soltos que sobraram
    [...el.childNodes].forEach(n => { if (n.nodeType === 3 && !n.textContent.trim()) el.removeChild(n); });
    return { lines: L, words, chars };
  };

  /* ---------------- efeitos de texto ---------------- */
  M.GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>?';
  // decodificação/scramble: letras resolvem da esquerda p/ direita. tick = Math.floor(t*20) (troca de glifo)
  M.scramble = (text, p, { tick = 0, spread = 0.75, win = 0.25, seed = 3, glyphs = M.GLYPHS, keep = '' } = {}) => {
    const n = text.length; let out = '';
    for (let i = 0; i < n; i++) {
      const ch = text[i]; if (ch === ' ' || keep.includes(ch)) { out += ch; continue; }
      const r = (i / Math.max(1, n - 1)) * spread + M.hash(i, 1, seed) * (1 - spread) * 0.6;
      if (p >= r + win) out += ch;
      else if (p >= r) out += glyphs[Math.floor(M.hash(i, tick, seed) * glyphs.length)];
      else out += ' ';
    }
    return out;
  };
  // datilografia com ritmo humano: retorna {text, done, caret}
  M.typewriter = (text, t, t0, { cps = 16, jitter = 0.45, seed = 5, blink = 1.06 } = {}) => {
    let acc = t0, n = 0; const times = [];
    for (let i = 0; i < text.length; i++) { acc += (1 / cps) * (1 + (M.hash(i, 2, seed) - 0.5) * 2 * jitter) * (text[i - 1] === ' ' ? 1.25 : 1) * ('.,!?'.includes(text[i - 1]) ? 2.2 : 1); times.push(acc); }
    for (let i = 0; i < times.length; i++) if (t >= times[i]) n = i + 1;
    const typing = t >= t0 && n < text.length;   // digitando: cursor aceso; parado: pisca
    return { text: text.slice(0, n), n, done: n >= text.length, end: times[times.length - 1] || t0, times, caret: typing ? 1 : (Math.floor(t / (blink / 2)) % 2 === 0 ? 1 : 0) };
  };
  M.fmt = (v, { dec = 0, locale = 'pt-BR', prefix = '', suffix = '' } = {}) => prefix + new Intl.NumberFormat(locale, { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v) + suffix;

  /* ---------------- traços e formas (SVG) ---------------- */
  // desenha um path de 0 a p (stroke draw-on). Funciona em path/circle/line/polyline/rect
  M.draw = (e, p, from = 0) => { e.setAttribute('pathLength', '1'); e.setAttribute('stroke-dasharray', `${clamp(p)} 2`); e.setAttribute('stroke-dashoffset', `${-from}`); return e; };
  // mostra só o trecho [a,b] (cometa / traço que corre)
  M.drawRange = (e, a, b) => { e.setAttribute('pathLength', '1'); e.setAttribute('stroke-dasharray', `${Math.max(0, b - a)} 2`); e.setAttribute('stroke-dashoffset', `${-a}`); return e; };
  let probe = null;
  const probePath = d => { if (!probe) { const s = M.el('svg', { width: 0, height: 0, style: { position: 'absolute', left: '-9999px' } }, document.body); probe = M.el('path', {}, s); } probe.setAttribute('d', d); return probe; };
  M.pathLen = d => probePath(d).getTotalLength();
  M.samplePath = (d, n = 200) => { const p = probePath(d), L = p.getTotalLength(), pts = []; for (let i = 0; i < n; i++) { const q = p.getPointAtLength((i / n) * L); pts.push([q.x, q.y]); } return pts; };
  // morph entre duas formas fechadas (um contorno cada). Retorna f(p) -> string d
  M.morpher = (dA, dB, { n = 240 } = {}) => {
    const A = M.samplePath(dA, n); let B = M.samplePath(dB, n);
    const cost = (P, off) => { let s = 0; for (let i = 0; i < n; i += 4) { const a = A[i], b = P[(i + off) % n]; s += (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2; } return s; };
    let best = { c: Infinity, off: 0, P: B };
    [B, B.slice().reverse()].forEach(P => { for (let off = 0; off < n; off += 2) { const c = cost(P, off); if (c < best.c) best = { c, off, P }; } });
    B = A.map((_, i) => best.P[(i + best.off) % n]);
    return p => 'M' + A.map((a, i) => `${lerp(a[0], B[i][0], p).toFixed(2)},${lerp(a[1], B[i][1], p).toFixed(2)}`).join('L') + 'Z';
  };
  // amostra pontos dentro de uma forma (path d ou texto) — para partículas que formam logo/palavra
  // src: {d:'M..'} ou {text:'LOGO', font:'900 200px Inter'}; retorna pontos nas coordenadas da forma
  M.sampleShape = (src, n = 600, { seed = 11, res = 2 } = {}) => {
    const c = document.createElement('canvas'), x = c.getContext('2d'); let bx;
    if (src.d) { const pr = probePath(src.d), b = pr.getBBox(); bx = [b.x, b.y, b.width, b.height]; }
    else { x.font = src.font; const m = x.measureText(src.text); bx = [0, -m.actualBoundingBoxAscent, m.width, m.actualBoundingBoxAscent + m.actualBoundingBoxDescent]; }
    const k = (src.res || 360) / Math.max(bx[2], bx[3]); c.width = Math.ceil(bx[2] * k) + 2; c.height = Math.ceil(bx[3] * k) + 2;
    x.setTransform(k, 0, 0, k, -bx[0] * k + 1, -bx[1] * k + 1); x.fillStyle = '#000';
    if (src.d) x.fill(new Path2D(src.d)); else { x.font = src.font; x.fillText(src.text, 0, 0); }
    const data = x.getImageData(0, 0, c.width, c.height).data, inside = [];
    for (let yy = 0; yy < c.height; yy += res) for (let xx = 0; xx < c.width; xx += res) if (data[(yy * c.width + xx) * 4 + 3] > 128) inside.push([(xx - 1) / k + bx[0], (yy - 1) / k + bx[1]]);
    const r = M.rng(seed), out = []; for (let i = 0; i < n && inside.length; i++) out.push(inside[Math.floor(r() * inside.length)]);
    out.bbox = bx; return out;
  };
  // ponto numa curva suave entre a e b (arco), bend = curvatura relativa (cursor, voos)
  M.arc = (a, b, p, bend = 0.25) => { const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], cx = mx - dy * bend, cy = my + dx * bend, q = 1 - p; return [q * q * a[0] + 2 * q * p * cx + p * p * b[0], q * q * a[1] + 2 * q * p * cy + p * p * b[1]]; };
  // Catmull-Rom por vários pontos: M.spline([[x,y],...], p)
  M.spline = (P, p) => { const n = P.length - 1, f = clamp(p) * n, i = Math.min(n - 1, Math.floor(f)), u = f - i, p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(n, i + 2)]; const c = (a, b, c2, d) => 0.5 * ((2 * b) + (-a + c2) * u + (2 * a - 5 * b + 4 * c2 - d) * u * u + (-a + 3 * b - 3 * c2 + d) * u * u * u); return [c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1])]; };
  // caminho de cursor por keyframes [[t,[x,y]],...] com arcos entre pontos
  M.cursorPath = (t, K, bend = 0.18, e = E.inOutCubic) => { if (t <= K[0][0]) return K[0][1]; for (let i = 1; i < K.length; i++) if (t <= K[i][0]) { const p = e((t - K[i - 1][0]) / (K[i][0] - K[i - 1][0] || 1e-9)); return M.arc(K[i - 1][1], K[i][1], p, bend * (i % 2 ? 1 : -1)); } return K[K.length - 1][1]; };
  // escala para uma forma de "raio interno" r (centro cx,cy) cobrir o quadro inteiro (wipe por forma)
  M.cover = (r, cx = M.W / 2, cy = M.H / 2) => Math.max(Math.hypot(cx, cy), Math.hypot(M.W - cx, cy), Math.hypot(cx, M.H - cy), Math.hypot(M.W - cx, M.H - cy)) / r;

  /* ---------------- câmera, tremor, profundidade ---------------- */
  // transform de câmera para um grupo-mundo (CSS, transform-origin 0 0). cam: {x,y,zoom,r}
  M.cam = ({ x = M.W / 2, y = M.H / 2, zoom = 1, r = 0 } = {}) => `translate(${M.W / 2}px,${M.H / 2}px) rotate(${r}deg) scale(${zoom}) translate(${-x}px,${-y}px)`;
  M.camSVG = ({ x = M.W / 2, y = M.H / 2, zoom = 1, r = 0 } = {}) => `translate(${M.W / 2} ${M.H / 2}) rotate(${r}) scale(${zoom}) translate(${-x} ${-y})`;
  // tremor de impacto que decai (use 2–6 quadros, amp 4–20px)
  M.shake = (t, t0, { amp = 14, dur = 0.35, freq = 30, rot = 0.6, seed = 1 } = {}) => {
    if (t < t0 || t > t0 + dur) return { x: 0, y: 0, r: 0 };
    const k = Math.pow(1 - (t - t0) / dur, 2), u = (t - t0) * freq;
    return { x: M.noise2(u, seed) * amp * k, y: M.noise2(seed + 9.1, u) * amp * k, r: M.noise2(u, seed + 3.3) * rot * k };
  };
  // paralaxe: fator de escala/deslocamento por profundidade z (0 = plano do foco)
  M.depth = (z, focal = 1000) => focal / (focal + z);
  // deriva sutil: nada fica 100% parado (respiração da câmera)
  M.drift = (t, amp = 6, sp = 0.25, seed = 2) => ({ x: M.noise2(t * sp, seed) * amp, y: M.noise2(seed, t * sp) * amp });

  /* ---------------- acabamento: grão, vinheta, cursor ---------------- */
  // grão: textura + antibanding. Custa tamanho de arquivo (ruído não comprime): padrão leve 2%, troca 8x/s.
  // 'normal' é ~25% mais rápido de renderizar que 'overlay'. Mais forte (4-6%, rate 24) só p/ estética de cinema.
  M.grain = (parent = document.body, { opacity = 0.02, size = 256, blend = 'normal', seed = 9, rate = 8 } = {}) => {
    if (M.Q.get('postgrain')) return { el: null, update: () => { } }; // render final com --grain: o ffmpeg aplica (bem mais rápido)
    const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d'), img = x.createImageData(size, size), r = M.rng(seed);
    for (let i = 0; i < size * size; i++) { const v = Math.floor((r() + r() + r()) / 3 * 255); img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
    x.putImageData(img, 0, 0);
    const d = M.el('div', { class: 'grain', style: { position: 'absolute', inset: '0', pointerEvents: 'none', backgroundImage: `url(${c.toDataURL()})`, backgroundSize: `${size}px ${size}px`, opacity, mixBlendMode: blend, zIndex: 9000 } }, parent);
    return { el: d, update: t => { const f = Math.floor(Math.round(t * M.FPS) * rate / M.FPS); d.style.backgroundPosition = `${Math.floor(M.hash(f, 1, seed) * size)}px ${Math.floor(M.hash(f, 2, seed) * size)}px`; } };
  };
  M.vignette = (parent = document.body, { strength = 0.55, color = '0,0,0', inner = 0.55 } = {}) =>
    M.el('div', { class: 'vignette', style: { position: 'absolute', inset: '0', pointerEvents: 'none', zIndex: 8999, background: `radial-gradient(ellipse at 50% 50%, rgba(${color},0) ${inner * 100}%, rgba(${color},${strength}) 100%)` } }, parent);
  // cursor estilo macOS (seta). Use M.css(cur,{transform:{x,y,s}})
  M.cursor = (parent, { fill = '#FFFFFF', stroke = '#111111', size = 34 } = {}) => {
    const d = M.el('div', { class: 'cursor', style: { position: 'absolute', left: '0', top: '0', width: size + 'px', height: size + 'px', zIndex: 8000, transformOrigin: '0 0', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.35))' } }, parent);
    d.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}"><path d="M3 2 L3 19 L7.6 14.8 L10.6 21.6 L13.6 20.3 L10.7 13.7 L17 13.7 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
    return d;
  };

  /* ---------------- boot: contrato com o renderizador ---------------- */
  // M.boot(render, {dur, bpm, init}) — expõe window.render(t), window.DUR, window.CUES, window.READY
  M.boot = (render, { dur, bpm = 0, init, poster = 0 } = {}) => {
    M.BPM = bpm; G.DUR = dur; G.CUES = M.CUES; G.BPM = bpm; G.BLUR = M.BLUR;
    const ready = (async () => {
      if (document.fonts) { try { await Promise.all([...document.fonts].map(f => f.load().catch(() => 0))); await document.fonts.ready; } catch (e) { } }
      await Promise.all([...document.images].map(i => (i.decode ? i.decode().catch(() => 0) : 0)));
      if (init) await init();
    })();
    G.READY = ready;
    G.render = async t => { await ready; const r = render(t); if (r && r.then) await r; };
    ready.then(() => { if (M.Q.get('dev')) M.dev(); else G.render(M.Q.get('t') != null ? +M.Q.get('t') : poster); });
  };
  // ?dev=1 — player de prévia no navegador (barra de tempo, espaço = play/pause, S = áreas seguras)
  M.dev = () => {
    let t = 0, play = true, last = 0, safeOn = false;
    const bar = M.el('div', { style: { position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: 99999, display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 12px', background: 'rgba(0,0,0,.75)', color: '#fff', font: '12px ui-monospace,monospace' } }, document.body);
    const btn = M.el('button', {}, bar, '❚❚'), rg = M.el('input', { type: 'range', min: 0, max: G.DUR, step: 1 / M.FPS, style: { flex: 1 } }, bar), lab = M.el('span', {}, bar);
    const safe = M.el('div', { style: { position: 'fixed', left: M.safe.left + 'px', right: M.safe.right + 'px', top: M.safe.top + 'px', bottom: M.safe.bottom + 'px', outline: '2px dashed rgba(255,0,80,.8)', zIndex: 99998, pointerEvents: 'none', display: 'none' } }, document.body);
    const go = v => { t = M.loop(v, G.DUR); rg.value = t; lab.textContent = t.toFixed(2) + 's / ' + G.DUR + 's'; G.render(t); };
    btn.onclick = () => { play = !play; btn.textContent = play ? '❚❚' : '▶'; };
    rg.oninput = () => { play = false; btn.textContent = '▶'; go(+rg.value); };
    addEventListener('keydown', e => { if (e.code === 'Space') { e.preventDefault(); btn.onclick(); } if (e.key === 's') { safeOn = !safeOn; safe.style.display = safeOn ? 'block' : 'none'; } if (e.key === 'ArrowRight') go(t + 1 / M.FPS); if (e.key === 'ArrowLeft') go(t - 1 / M.FPS); });
    const loop = now => { if (play && last) go(t + (now - last) / 1000); last = now; requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  };

  G.M = M;
})(window);
