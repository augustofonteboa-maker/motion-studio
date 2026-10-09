#!/usr/bin/env node
/* fonts.mjs — baixa fontes do Google Fonts para uso offline/determinístico na cena
   uso: node fonts.mjs "Space Grotesk:400,700" "Instrument Serif:400,400i" [--out ./fonts]
   gera ./fonts/*.woff2 + ./fonts/fonts.css  ->  na cena: <link rel="stylesheet" href="fonts/fonts.css">
   (pesos "i" = itálico; fontes variáveis aceitam faixa, ex.: "Inter Tight:100..900") */
import fs from 'node:fs'; import path from 'node:path'; import { spawnSync } from 'node:child_process';
const args = process.argv.slice(2); let out = './fonts'; const specs = [];
for (let i = 0; i < args.length; i++) { if (args[i] === '--out') out = args[++i]; else specs.push(args[i]); }
if (!specs.length) { console.error('uso: node fonts.mjs "Familia:400,700" ...'); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
async function get(url, bin) {
  try { const r = await fetch(url, { headers: { 'User-Agent': UA } }); if (!r.ok) throw new Error(r.status); return bin ? Buffer.from(await r.arrayBuffer()) : await r.text(); }
  catch (e) { const r = spawnSync('curl', ['-sSL', '-A', UA, url], { maxBuffer: 1 << 26 }); if (r.status !== 0) throw new Error('falha ao baixar ' + url); return bin ? r.stdout : r.stdout.toString(); }
}
let css = '';
for (const s of specs) {
  const [fam, w = '400'] = s.split(':');
  const items = w.split(',').map(x => x.trim()).map(x => ({ ital: x.endsWith('i') ? 1 : 0, wght: x.replace('i', '') }));
  items.sort((a, b) => a.ital - b.ital || parseFloat(a.wght) - parseFloat(b.wght));
  const q = `family=${encodeURIComponent(fam).replace(/%20/g, '+')}:ital,wght@${items.map(i => `${i.ital},${i.wght}`).join(';')}`;
  let txt;
  try { txt = await get(`https://fonts.googleapis.com/css2?${q}&display=block`); }
  catch (e) { console.error(`✖ ${fam}: não encontrada no Google Fonts (${e.message})`); process.exitCode = 1; continue; }
  const blocks = txt.split('/*').slice(1).map(b => ({ subset: b.split('*/')[0].trim(), body: '@font-face' + b.split('@font-face')[1] }));
  for (const b of blocks) {
    if (!/^(latin|latin-ext)$/.test(b.subset)) continue;      // pt-BR precisa de latin (+ latin-ext para ç, ã etc. já está em latin)
    const url = (b.body.match(/url\((https:[^)]+)\)/) || [])[1]; if (!url) continue;
    const st = /font-style:\s*italic/.test(b.body) ? 'i' : '', wt = (b.body.match(/font-weight:\s*([\d ]+)/) || [, '400'])[1].trim().replace(' ', '-');
    const file = `${fam.replace(/\s+/g, '')}-${wt}${st}-${b.subset}.woff2`;
    if (!fs.existsSync(path.join(out, file))) fs.writeFileSync(path.join(out, file), await get(url, true));
    css += b.body.replace(url, file).replace(/font-display:\s*\w+;/, 'font-display: block;') + '\n';
  }
  console.log('  ✔', fam);
}
fs.writeFileSync(path.join(out, 'fonts.css'), css);
console.log('  ✔ ' + path.join(out, 'fonts.css'));
