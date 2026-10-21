#!/usr/bin/env node
/* render.mjs — renderizador do kit Motion Studio
   Captura render(t) quadro a quadro no Chromium (Playwright), aplica motion blur
   por subquadros (obturador 180°) e codifica com ffmpeg em paralelo.

   VÍDEO FINAL (16:9 + 9:16 de uma vez, com trilha):
     node render.mjs cena.html --name Vinheta_Cliente --sizes 1920x1080,1080x1920 --audio trilha.wav
   PRÉVIA RÁPIDA (meia resolução, sem blur):   node render.mjs cena.html --draft
   QUADROS SOLTOS + FOLHA DE CONTATO:          node render.mjs cena.html --stills 12  (ou --stills 0.5,1.8,3)
   EXPORTAR CUES DE SOM:                       node render.mjs cena.html --cues cues.json
   CHECAR DETERMINISMO:                        node render.mjs cena.html --check
   TRANSPARENTE (overlay):                     node render.mjs cena.html --alpha  (gera .mov ProRes 4444 + .webm VP9 + _GREEN.mp4)

   Opções: --fps 30 --sub 4 (amostras de blur; 1 = sem blur) --shutter 0.5 --from 0 --to <DUR>
           --workers N (padrão: núcleos-1, máx 8) --crf 17 --preset slow --format jpeg|png --quality 94
           --lufs -14 --grain 7 (grão de filme no ffmpeg) --ss 2 (supersampling) --gl (WebGL/Three.js) --params "a=1&b=2" (vai na URL da cena)
           --out arquivo.mp4 --outdir pasta */
import { spawn, execSync, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path'; import fs from 'node:fs'; import os from 'node:os'; import crypto from 'node:crypto';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const A = { _: [] };
for (let i = 0; i < argv.length; i++) { const a = argv[i]; if (a.startsWith('--')) { const k = a.slice(2), n = argv[i + 1]; if (n === undefined || n.startsWith('--')) A[k] = true; else { A[k] = n; i++; } } else A._.push(a); }
const scene = A._[0];
if (!scene || !fs.existsSync(scene)) { console.error('uso: node render.mjs cena.html [opções]  (veja o cabeçalho do arquivo)'); process.exit(1); }
const sceneAbs = path.resolve(scene), sceneName = path.basename(scene).replace(/\.html?$/i, '');

const FPS = +(A.fps || 30), SHUT = +(A.shutter ?? 0.5), CRF = String(A.crf || 17), PRESET = A.preset || 'slow';
const ALPHA = !!A.alpha, DRAFT = !!A.draft, SS = DRAFT ? 0.5 : +(A.ss || 1);
const SUB = DRAFT ? 1 : +(A.sub || 4);
const FMT = ALPHA ? 'png' : (A.format || 'jpeg'), QUAL = +(A.quality || 94);
const LUFS = +(A.lufs || -14);
const GRAIN = A.grain === true ? 7 : +(A.grain || 0);   // grão de filme aplicado no ffmpeg (rápido, depois do blur)
const OUTDIR = path.resolve(A.outdir || path.dirname(sceneAbs));
fs.mkdirSync(OUTDIR, { recursive: true });
if (A.out) fs.mkdirSync(path.dirname(path.resolve(A.out)), { recursive: true });
for (const bin of ['ffmpeg']) if (spawnSync(bin, ['-version']).status !== 0) { console.error(`✖ ${bin} não encontrado (Mac: brew install ffmpeg)`); process.exit(1); }
const WORKERS = Math.max(1, Math.min(+(A.workers || Math.max(1, os.cpus().length - 1)), 8));
const sh = (cmd, args, opt = {}) => { const r = spawnSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 1 << 28, ...opt }); if (r.status !== 0) throw new Error(`${cmd} falhou:\n${r.stderr}`); return r; };
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-'));
process.on('exit', () => { try { fs.rmSync(tmpRoot, { recursive: true, force: true }); } catch { } });

/* ---------- Playwright: acha onde estiver instalado ---------- */
async function loadPW() {
  const tries = [() => import('playwright'), () => import('playwright-core')];
  for (const base of [process.cwd(), HERE]) { const rq = createRequire(path.join(base, 'x.js')); tries.push(() => rq('playwright'), () => rq('playwright-core')); }
  try { const g = execSync('npm root -g', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); const rq = createRequire(path.join(g, 'x.js')); tries.push(() => rq('playwright'), () => rq('playwright-core')); } catch { }
  for (const f of tries) { try { const m = await f(); const pw = m.chromium ? m : (m.default || m); if (pw.chromium) return pw; } catch { } }
  throw new Error('Playwright não encontrado. Rode: npm i -g playwright && npx playwright install chromium');
}
async function launch(pw) {
  const args = ['--force-color-profile=srgb', '--hide-scrollbars', '--disable-lcd-text', '--font-render-hinting=none', '--disable-background-timer-throttling', '--disable-renderer-backgrounding', '--disable-backgrounding-occluded-windows', '--allow-file-access-from-files'];
  if (A.gl) args.push('--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl');
  const o = { headless: true, args }; if (process.env.CHROME_PATH) o.executablePath = process.env.CHROME_PATH;
  try { return await pw.chromium.launch(o); } catch (e) { try { return await pw.chromium.launch({ ...o, channel: 'chrome' }); } catch { throw e; } }
}
async function openPage(browser, w, h) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: SS });
  page.on('pageerror', e => { console.error('\n✖ ERRO NA CENA:', e.message); process.exitCode = 1; });
  page.on('console', m => { if (m.type() === 'error') console.error('console:', m.text()); });
  const url = pathToFileURL(sceneAbs).href + `?w=${w}&h=${h}&fps=${FPS}` + (GRAIN ? '&postgrain=1' : '') + (A.params ? '&' + A.params : '');
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForFunction(() => typeof window.render === 'function' && window.READY !== undefined, null, { timeout: 60000 });
  await page.evaluate(() => window.READY);
  return page;
}
async function shot(page, t) {
  await page.evaluate(t => window.render(t), t);
  const o = { type: FMT, omitBackground: ALPHA, animations: 'disabled', caret: 'hide' };
  if (FMT === 'jpeg') o.quality = QUAL;
  return page.screenshot(o);
}
const sizesArg = () => (A.sizes || A.size || '1920x1080').split(',').map(s => s.trim().split('x').map(Number));
const ratio = (w, h) => { const g = (a, b) => (b ? g(b, a % b) : a), d = g(w, h); return `${w / d}x${h / d}`; };

/* ---------- ffmpeg: um codificador por worker (stream de imagens -> segmento) ---------- */
function encoder(file, w, h, NS) {
  const vf = [];
  if (ALPHA) vf.push('format=gbrap', 'premultiply=inplace=1');
  if (NS > 1) vf.push(`tmix=frames=${NS}`, `select='eq(mod(n\\,${NS})\\,${NS - 1})'`, `setpts=N/(${FPS}*TB)`);
  if (ALPHA) vf.push('unpremultiply=inplace=1');
  if (SS !== 1 && !DRAFT) vf.push(`scale=${w}:${h}:flags=lanczos`);
  const args = ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS * NS), '-c:v', FMT === 'png' ? 'png' : 'mjpeg', '-i', '-'];
  if (ALPHA) {
    if (vf.length) args.push('-vf', vf.join(','));
    args.push('-c:v', 'prores_ks', '-profile:v', '4444', '-pix_fmt', 'yuva444p10le', '-alpha_bits', '16', '-vendor', 'apl0', '-r', String(FPS), file);
  } else {
    const inM = FMT === 'jpeg' ? 'in_color_matrix=bt601:in_range=full:' : '';
    vf.push(`scale=${inM}out_color_matrix=bt709:out_range=tv`, 'format=yuv420p');
    if (GRAIN) vf.push(`noise=c0s=${GRAIN}:c0f=t`);
    args.push('-vf', vf.join(','), '-c:v', 'libx264', '-preset', DRAFT ? 'veryfast' : PRESET, '-crf', DRAFT ? '22' : CRF, '-pix_fmt', 'yuv420p',
      '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv', '-g', String(FPS * 2), '-r', String(FPS), '-video_track_timescale', String(FPS * 1000), file);
  }
  const p = spawn('ffmpeg', args, { stdio: ['pipe', 'ignore', 'pipe'] });
  let err = ''; p.stderr.on('data', d => (err += d));
  const done = new Promise((res, rej) => p.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg: ' + err)))));
  const write = buf => new Promise(res => (p.stdin.write(buf) ? res() : p.stdin.once('drain', res)));
  return { write, end: () => { p.stdin.end(); return done; } };
}

/* ---------- render de vídeo em paralelo ---------- */
async function renderVideo(pw, w, h, outFile, audio) {
  const browser = await launch(pw);
  const probe = await openPage(browser, w, h);
  const { dur, blur } = await probe.evaluate(() => ({ dur: window.DUR, blur: window.BLUR || [] }));
  await probe.close();
  // amostras por quadro: SUB no geral, até 12 nos trechos marcados com M.blur(). NS = slots fixos por quadro no ffmpeg
  const ranges = DRAFT || SUB > 12 ? [] : blur, NS = ranges.length ? 12 : SUB;
  const nFor = f => { const t = f / FPS; let n = SUB; for (const r of ranges) if (t >= r[0] && t <= r[1]) n = Math.max(n, r[2]); if (NS === 12) n = [1, 2, 3, 4, 6, 12].find(d => d >= n) || 12; return n; };
  const t0 = +(A.from || 0), t1 = +(A.to || dur);
  const f0 = Math.round(t0 * FPS), f1 = Math.round(t1 * FPS), total = f1 - f0;
  const nW = Math.max(1, Math.min(WORKERS, Math.floor(total / 12) || 1));
  const chunk = Math.ceil(total / nW), segs = []; let done = 0, skipped = 0; const start = Date.now();
  const tick = setInterval(() => { const el = (Date.now() - start) / 1000, r = done / el; process.stdout.write(`\r  ${w}x${h}  ${done}/${total} quadros  ${r.toFixed(1)} q/s  faltam ~${Math.max(0, (total - done) / (r || 1)).toFixed(0)}s   `); }, 1500);
  const ext = ALPHA ? '.mov' : '.mp4';   // mp4/mov: base de tempo exata (mkv arredonda em ms e vira 29,97)
  await Promise.all(Array.from({ length: nW }, async (_, i) => {
    const a = f0 + i * chunk, b = Math.min(f1, a + chunk); if (a >= b) return;
    const seg = path.join(tmpRoot, `seg${String(i).padStart(2, '0')}_${w}x${h}${ext}`); segs[i] = seg;
    const page = await openPage(browser, w, h), enc = encoder(seg, w, h, NS);
    const tAt = (f, k, n) => Math.max(0, Math.min(dur, f / FPS + (n > 1 ? (k / (n - 1) - 0.5) * SHUT / FPS : 0)));
    const put = async (buf, times) => { for (let i = 0; i < times; i++) await enc.write(buf); };
    for (let f = a; f < b; f++) {
      const n = nFor(f), rep = NS / n;
      if (n === 1) { await put(await shot(page, tAt(f, 0, 1)), NS); done++; continue; }
      // blur adaptativo: se o início e o fim do obturador são idênticos, o quadro está parado -> reaproveita
      const first = await shot(page, tAt(f, 0, n)), last = await shot(page, tAt(f, n - 1, n));
      if (first.equals(last)) { await put(first, NS); skipped++; }
      else { await put(first, rep); for (let k = 1; k < n - 1; k++) await put(await shot(page, tAt(f, k, n)), rep); await put(last, rep); }
      done++;
    }
    await enc.end(); await page.close();
  }));
  clearInterval(tick); await browser.close();
  process.stdout.write(`\r  ${w}x${h}  ${total} quadros em ${((Date.now() - start) / 1000).toFixed(1)}s (${skipped} parados)` + ' '.repeat(30) + '\n');
  const list = path.join(tmpRoot, `list_${w}x${h}.txt`);
  fs.writeFileSync(list, segs.filter(Boolean).map(s => `file '${s.replace(/'/g, "'\\''")}'`).join('\n'));
  const master = path.join(tmpRoot, `master_${w}x${h}${ext}`);
  sh('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', master]);
  const len = (f1 - f0) / FPS;
  if (!ALPHA) {
    const args = ['-hide_banner', '-loglevel', 'error', '-y', '-i', master];
    if (audio) args.push('-ss', String(t0), '-i', audio, '-map', '0:v', '-map', '1:a', '-af', loud(audio, len), '-c:a', 'aac', '-b:a', '320k', '-ar', '48000');
    args.push('-c:v', 'copy', '-t', String(len), '-video_track_timescale', String(FPS * 1000), '-movflags', '+faststart', outFile);
    sh('ffmpeg', args);
    console.log('  ✔', outFile);
  } else {
    const base = outFile.replace(/\.(mp4|mov|webm)$/i, '');
    const aIn = audio ? ['-ss', String(t0), '-i', audio] : [];
    sh('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', master, ...aIn, ...(audio ? ['-map', '0:v', '-map', '1:a', '-af', loud(audio, len), '-c:a', 'pcm_s16le'] : []), '-c:v', 'copy', '-t', String(len), base + '_ALPHA.mov']);
    sh('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', master, ...aIn, ...(audio ? ['-map', '0:v', '-map', '1:a', '-af', loud(audio, len), '-c:a', 'libopus', '-b:a', '192k'] : []), '-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p', '-b:v', '0', '-crf', '28', '-row-mt', '1', '-auto-alt-ref', '0', '-t', String(len), base + '_ALPHA.webm']);
    sh('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'lavfi', '-i', `color=c=0x00FF00:s=${w}x${h}:r=${FPS}`, '-i', master, ...aIn, '-filter_complex', '[0:v][1:v]overlay=shortest=1,scale=out_color_matrix=bt709:out_range=tv,format=yuv420p[v]', '-map', '[v]', ...(audio ? ['-map', '2:a', '-af', loud(audio, len), '-c:a', 'aac', '-b:a', '320k'] : []), '-c:v', 'libx264', '-crf', '16', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-t', String(len), '-movflags', '+faststart', base + '_GREEN.mp4']);
    console.log('  ✔', base + '_ALPHA.mov | _ALPHA.webm | _GREEN.mp4');
  }
}
// loudness em 2 passagens (linear, sem "bombear"): mede e ajusta para --lufs, pico real -1.5 dBTP
const loudCache = {};
function loud(audio, len) {
  if (!loudCache[audio]) {
    const r = spawnSync('ffmpeg', ['-hide_banner', '-i', audio, '-af', `loudnorm=I=${LUFS}:TP=-1.5:LRA=11:print_format=json`, '-f', 'null', '-'], { encoding: 'utf8' });
    const m = r.stderr.match(/\{[\s\S]*?\}/g); const j = m ? JSON.parse(m[m.length - 1]) : null;
    loudCache[audio] = j ? `loudnorm=I=${LUFS}:TP=-1.5:LRA=11:measured_I=${j.input_i}:measured_TP=${j.input_tp}:measured_LRA=${j.input_lra}:measured_thresh=${j.input_thresh}:offset=${j.target_offset}:linear=true` : `loudnorm=I=${LUFS}:TP=-1.5`;
  }
  return `${loudCache[audio]},apad,atrim=0:${len},aresample=48000`;
}

/* ---------- quadros soltos + folha de contato ---------- */
async function renderStills(pw, w, h) {
  const browser = await launch(pw), page = await openPage(browser, w, h);
  const dur = await page.evaluate(() => window.DUR);
  const spec = String(A.stills);
  const times = spec.includes(',') || spec.includes('.') ? spec.split(',').map(Number) : Array.from({ length: +spec || 12 }, (_, i) => +(((i + 0.5) / (+spec || 12)) * dur).toFixed(3));
  const dir = path.join(OUTDIR, `${sceneName}_stills_${w}x${h}`); fs.mkdirSync(dir, { recursive: true });
  const imgs = [];
  for (const t of times) {
    await page.evaluate(t => window.render(t), t);
    const buf = await page.screenshot({ type: 'png', omitBackground: ALPHA });
    const f = path.join(dir, `t${t.toFixed(2).padStart(6, '0')}.png`); fs.writeFileSync(f, buf); imgs.push({ t, b64: buf.toString('base64') });
  }
  const cols = +(A.cols || (h > w ? 6 : 4)), cw = h > w ? 270 : 480;
  const sheetPage = await browser.newPage({ viewport: { width: cols * (cw + 12) + 12, height: 400 } });
  await sheetPage.setContent(`<html><body style="margin:0;padding:6px;background:#111;font:600 13px system-ui,sans-serif;color:#ddd;display:grid;grid-template-columns:repeat(${cols},${cw}px);gap:12px 12px">` +
    imgs.map(i => `<figure style="margin:0"><img src="data:image/png;base64,${i.b64}" style="width:${cw}px;display:block;background:repeating-conic-gradient(#333 0 25%,#222 0 50%) 0 0/16px 16px"><figcaption style="padding:4px 2px">${i.t.toFixed(2)}s</figcaption></figure>`).join('') + '</body></html>');
  await sheetPage.waitForTimeout(150);
  const sheet = path.join(OUTDIR, `${sceneName}_sheet_${w}x${h}.jpg`);
  await sheetPage.screenshot({ path: sheet, type: 'jpeg', quality: 88, fullPage: true });
  await browser.close();
  console.log('  ✔ folha de contato:', sheet, '\n  ✔ quadros em:', dir);
}

/* ---------- checagem de determinismo ---------- */
async function check(pw, w, h) {
  const browser = await launch(pw);
  const a = await openPage(browser, w, h), b = await openPage(browser, w, h);
  const dur = await a.evaluate(() => window.DUR);
  const probes = [0.37, 0.61, 0.83].map(x => +(x * dur).toFixed(3));
  let ok = true;
  for (const T of probes) {
    const h1 = crypto.createHash('md5').update(await shot(a, T)).digest('hex');
    for (let i = 0; i < 25; i++) await b.evaluate(t => window.render(t), M_rand(i) * dur);
    const h2 = crypto.createHash('md5').update(await shot(b, T)).digest('hex');
    const pass = h1 === h2; ok = ok && pass;
    console.log(`  t=${T}s  ${pass ? '✔ idêntico' : '✖ DIFERENTE — render(t) depende de estado/relógio (veja Regras de ouro)'}`);
  }
  await browser.close(); if (!ok) process.exitCode = 2;
}
const M_rand = i => ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1;

/* ---------- main ---------- */
const pw = await loadPW();
const sizes = sizesArg();
if (A.cues) {
  const browser = await launch(pw), page = await openPage(browser, sizes[0][0], sizes[0][1]);
  const info = await page.evaluate(() => ({ dur: window.DUR, bpm: window.BPM || 0, cues: (window.CUES || []).slice().sort((a, b) => a.t - b.t) }));
  const out = A.cues === true ? path.join(OUTDIR, sceneName + '_cues.json') : path.resolve(A.cues);
  fs.writeFileSync(out, JSON.stringify(info, null, 1)); await browser.close();
  console.log(`  ✔ ${info.cues.length} cues (${info.dur}s) ->`, out);
} else if (A.check) {
  await check(pw, sizes[0][0], sizes[0][1]);
} else if (A.stills) {
  for (const [w, h] of sizes) await renderStills(pw, w, h);
} else {
  const audio = A.audio ? path.resolve(A.audio) : null;
  for (const [w, h] of sizes) {
    let out;
    if (A.out && sizes.length === 1) out = path.resolve(A.out);
    else { const name = A.name || sceneName; out = path.join(OUTDIR, `${name}_${ratio(w, h)}_${w}x${h}${DRAFT ? '_RASCUNHO' : ''}.mp4`); }
    await renderVideo(pw, w, h, out, audio);
  }
}
