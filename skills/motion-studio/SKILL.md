---
name: motion-studio
description: Motion design nível estúdio com código (vinhetas, logo animada, transições, intros, showreels, vídeos de lançamento, promos de produto, UI motion, tipografia cinética, explainers e loops) em MP4 16:9 e 9:16 com trilha. Traz um playbook e 230 prompts reais de referência. Use ao pedirem animação, vinheta, intro, vídeo de lançamento, showreel ou motion.
---

# Motion Studio: motion design com código, nível estúdio

Esta skill transforma um pedido ("anima minha logo", "faz uma vinheta", "transição para a aula", "promo do app", "post animado com números") em vídeo pronto: **HTML/SVG/Canvas com `render(t)` determinístico → Chromium captura quadro a quadro → motion blur por subquadros → ffmpeg (H.264 BT.709 + AAC) → trilha sintetizada sincronizada evento a evento.** Entrega padrão: **16:9 (1920×1080) e 9:16 (1080×1920)**, 30 fps, com som.

A skill é **neutra**: não parte de nenhuma identidade visual fixa. As cores e as fontes vêm sempre da marca do projeto ou de uma direção de arte escolhida para ele (seção 3). A identidade pessoal do usuário só entra quando o projeto for da marca dele.

---

## 0. Kit (antes de tudo)

O kit tem 5 arquivos testados juntos e **vem dentro desta skill**, na pasta `kit/` ao lado deste SKILL.md: `motion.js` (runtime), `render.mjs` (renderizador), `sound.py` (trilha), `fonts.mjs` (fontes) e `template.html` (cena-base). **Nunca reescreva o kit de memória**; copie a versão oficial para a pasta do projeto:

1. Da pasta `kit/` desta skill (o diretório-base da skill é informado quando ela carrega).
2. Se essa pasta não estiver acessível, baixe do repositório oficial, um arquivo por vez: `curl -sSLO https://raw.githubusercontent.com/augustofonteboa-maker/motion-studio/main/skills/motion-studio/kit/motion.js` (troque o nome do arquivo para os outros quatro).
3. Se nada funcionar, peça ao usuário para anexar os 5 arquivos.

Exemplo completo e testado: `examples/demo-reel.html` (showreel de 13 s com tipografia cinética, logo por partículas, fluxo de UI, gráfico e whip pan). Para rodar: dentro de `examples/`, `node ../kit/fonts.mjs "Space Grotesk:400,500,700" "Instrument Serif:400,400i" "JetBrains Mono:400,500"` e depois `node ../kit/render.mjs demo-reel.html --stills 12`. Use como referência de qualidade e de organização de código.

**Referências (carregue sob demanda, não tudo de uma vez):** `references/playbook-prompt-motion.md` (o que 230 prompts reais ensinam: leia antes de qualquer vídeo de verdade), `references/templates-de-briefing.md` (6 modelos de briefing prontos), `references/galeria/00_INDEX.md` (230 prompts reais por categoria; abra só o arquivo do tipo de vídeo pedido).

Depois, confira o ambiente uma vez: `node -v` (≥18), `ffmpeg -version`, `python3 -c "import numpy, scipy"`. Se faltar Playwright: `npm i -g playwright && npx playwright install chromium`. Se faltar numpy/scipy: `pip3 install numpy scipy` (no Linux, `--break-system-packages`). No Mac, se faltar ffmpeg: `brew install ffmpeg`. Renderize onde houver Node + Playwright + ffmpeg (o workspace na nuvem do Claude já tem). Num computador com mais núcleos o render fica mais rápido (mais workers).

Estrutura de um projeto:
```
projeto/
  motion.js  render.mjs  sound.py  fonts.mjs      (kit)
  fonts/            (gerado por fonts.mjs)
  assets/           (logo.svg, fotos, etc.)
  cena.html         (copiada do template)
  cues.json  trilha.wav  saida/
```

---

## 1. Fluxo de trabalho

1. **Briefing (rápido).** Pegue do pedido: objetivo, onde vai passar (Reels, YouTube, aula, site, apresentação), duração, **texto exato**, marca (logo SVG, cores, fontes), clima do som. Faltando o texto ou a marca e não dá para deduzir, pergunte uma vez. O resto você decide com bom gosto e conta o que decidiu. **Pedido vago ("faz um vídeo legal", "showreel", "promo do app") não vai direto para o código:** monte o briefing de 6 blocos (seção 11) a partir do template mais próximo em `references/templates-de-briefing.md`, com um conceito de uma linha, e mostre ao usuário o conceito, a paleta, o que está banido e o mapa de batidas.
2. **Direção de arte.** Marca do cliente ou um preset (seção 3). Defina os tokens no topo da cena.
3. **Roteiro de batidas.** Escreva (para você) uma tabela `tempo → o que acontece → cue de som → blur`, seguindo a estrutura do formato (seção 6). Pense em **uma ideia central**, dita numa linha, e num **elemento-ponte** que liga as cenas (uma forma, uma cor, uma personagem). Com música ou ritmo definido, conte em **BPM e compassos** (`bpm` no `M.boot`, `M.beat(n)`), com algo acontecendo em toda batida forte, não em "dinâmico".
4. **Cena.** Copie `template.html` → `cena.html`. Crie os elementos uma vez; no `render(t)` só atualize propriedades. Layout horizontal e vertical com `M.pick(h, v)` e as áreas seguras `M.safe`. Meça textos no `init()` (depois das fontes).
5. **Folha de contato.** `node render.mjs cena.html --stills 12 --sizes 1920x1080,1080x1920` e **olhe as duas imagens** (Read). Corrija composição, cortes, legibilidade, contraste e áreas seguras antes de qualquer vídeo. Em peça com batida, tire **um quadro por batida** (`--stills` com os tempos das batidas) e corrija o que estiver fora da grade, apertado, sobreposto ou ilegível.
6. **Determinismo.** `node render.mjs cena.html --check` precisa dar "idêntico" em tudo.
7. **Rascunho (opcional, para ritmo).** `node render.mjs cena.html --draft` (meia resolução, sem blur, rápido).
8. **Som.** `node render.mjs cena.html --cues cues.json` → `python3 sound.py cues.json trilha.wav --mood grave`.
9. **Render final.** `node render.mjs cena.html --name Nome_Projeto --sizes 1920x1080,1080x1920 --audio trilha.wav --outdir saida`
10. **QA** (seção 9), então **entregue**: salve os arquivos na pasta do projeto do usuário (no computador dele, se estiver conectado), envie os vídeos e diga em 1 ou 2 frases o que foi feito. Ofereça os ajustes mais prováveis (texto, tempo, cor, som).

Em pedido de ajuste: edite só o que mudou na cena, refaça a folha de contato do trecho (`--stills 3.2,3.6,4.0`) e renderize de novo. Não reescreva a cena do zero.

---

## 2. Regras de ouro (técnicas)

- **`render(t)` é função pura do tempo.** Proibido no render: `requestAnimationFrame`, `setTimeout`, `Date`, `performance.now`, `Math.random`, CSS `transition`/`animation`, estado acumulado entre quadros. Aleatório só com `M.rng(seed)` / `M.hash(i, j, seed)` / `M.noise2`. Simulação (partículas com física) = **pré-calcule no `init()`** e indexe por `t`.
- **Tudo criado uma vez, atualizado no render.** Não recrie DOM por quadro.
- **Fontes locais** via `fonts.mjs` (Google Fonts → `fonts/fonts.css`). Nada de fonte do sistema como fonte principal.
- **Cues de som e `M.blur` são registrados na montagem** (fora do render), com os mesmos tempos das ações.
- **Texto que troca de valor** (contador, digitação, scramble, timecode, porcentagem) usa `M.frameT(t)` (tempo do centro do quadro). Sem isso o motion blur mistura dois valores e aparece um dígito fantasma.
- **Escala:** use `u(x) = x * M.S` (M.S = lado menor / 1080) para tudo que é tamanho. Assim a mesma cena serve 16:9, 9:16, 1:1 e 4:5.
- **Movimento rápido = mais amostras de blur:** marque com `M.blur(t0, t1, 6)` (moderado) ou `12` (whip, íris, morph rápido, voo). Fora disso o padrão é 4, e quadros parados são detectados sozinhos.
- **Nada de efeito pesado em tela cheia** (mix-blend-mode, backdrop-filter, filter: blur grande) durante a cena toda. Cada um custa dezenas de ms por quadro. Use pontualmente.
- **Imagens**: `<img>`/SVG locais em `assets/`. Vídeo dentro da cena não é determinístico: extraia quadros com ffmpeg e troque o `src` por índice (`Math.floor(t*fps)`), ou componha depois com ffmpeg overlay.
- **WebGL/Three.js**: `--gl`, `preserveDrawingBuffer: true`, e chame `renderer.render()` dentro do `render(t)`.

---

## 3. Direção de arte (sempre do projeto)

**Procedimento:**
1. O cliente tem marca → use a dele (logo em SVG, cores, fontes). Fonte proprietária indisponível → peça o arquivo ou use a equivalente mais próxima do Google Fonts e diga qual.
2. Sem marca → escolha o preset pelo tom e pelo público. Ajuste 1 cor de destaque ao segmento se fizer sentido.
3. Tokens: `bg, surface, ink, muted, accent, accent2`. Proporção 60/30/10 (fundo/apoio/destaque). Texto com contraste ≥ 4.5:1 (`M.contrast(a, b)`).
4. Tipografia: no máximo 2 famílias + 1 mono opcional. Display com peso alto e tracking negativo (−2% a −5%); ênfase em serif itálica ou em cor de destaque, nunca nas duas ao mesmo tempo.
5. Fundo nunca "morto": grade sutil, degradê, textura, grão leve ou formas grandes desfocadas.
6. Composição: um ponto focal por quadro, muito espaço negativo, alinhamento numa grade (12 colunas no 16:9, 6 no 9:16), terços para os elementos de apoio. Nunca encoste texto na borda.
7. Texto bem acabado: `font-kerning: normal`, aspas e travessões corretos, números tabulares em contadores, sem palavra sozinha na última linha de um título.

**Presets (escolha um e adapte):**

| # | Preset | Paleta | Fontes (Google) | Personalidade do movimento |
|---|---|---|---|---|
| 1 | Editorial suíço | `#F2EFE8` `#121212` `#E5372B` `#8C8A84` | Space Grotesk 700 + Instrument Serif itálico + JetBrains Mono | grade, máscaras, cortes secos, expo out |
| 2 | Tech noturno | `#07080B` `#12141A` `#E8ECF2` `#38E1FF` `#B8FF5C` | Geist 600 + Geist Mono | HUD, scramble, glow, partículas, linhas de varredura |
| 3 | Neo-brutalista | `#FFF4D6` `#0D0D0D` `#E6FF2E` `#FF5DA2` `#3B5BFF` | Archivo Black + Space Mono | sombra dura deslocada, stickers, back out forte, cortes no beat |
| 4 | Luxo monocromático | `#0B0B0C` `#F3EEE6` `#C8A464` `#6E6A63` | Cormorant Garamond itálico + Manrope 300 (tracking alto) | lento (0,9 a 1,6 s), in-out sine, brilho que varre, sem bounce |
| 5 | Soft UI pastel | `#F6F4FF` `#1C1A2E` `#B9B2FF` `#FFC9A8` `#A8EBD1` | Plus Jakarta Sans 600/800 | molas suaves, cantos redondos, morphs de UI, sombras difusas |
| 6 | Orgânico terra | `#EEE5D6` `#C4643D` `#59683A` `#2A1F17` `#D9C7A7` | Fraunces 600 + DM Sans | morph líquido, crescimento, ritmo calmo |
| 7 | Risograph retrô | `#F3EADB` `#0B6CB5` `#FF4FA3` `#FFD400` `#1A1A1A` | Rubik Mono One + IBM Plex Mono | cor desalinhada, meio-tom, animar "em 2s" (`M.step(t, 12)`) |
| 8 | Corporativo confiança | `#FFFFFF` `#0B1F3A` `#2563EB` `#E8EEF8` `#64748B` | Manrope 700 + Inter 400 | curvas Material, gráficos, ícones de linha, sóbrio |
| 9 | Esporte / energia | `#0A0A0A` `#D4FF00` `#FFFFFF` `#FF5A1F` | Anton + Barlow Condensed 600 itálico | skew, speed lines, whip pan, impact frame, tremor |
| 10 | Y2K cromado | `#C9D3E6→#F5F7FB` `#2B59FF` `#0A0A12` `#FF7AD9` | Syne 800 + Unbounded 500 | giro 3D (perspective), brilho especular, bolhas glossy |
| 11 | Cinema noir | `#050505` `#EDE6DA` `#B3121F` `#3A3A3A` | Playfair Display 700 itálico + Inter Tight | letterbox 2.39:1, push-in lento, grão forte, fades longos |
| 12 | Lúdico / infantil | `#BFE6FF` `#FFD84D` `#FF7A6B` `#5ED39B` `#1E2A44` | Baloo 2 800 + Fredoka 500 | squash & stretch, bounce, personagens que respiram |

Baixar fontes: `node fonts.mjs "Space Grotesk:400,700" "Instrument Serif:400,400i" "JetBrains Mono:500"`.

**Tamanhos mínimos (lado menor = 1080 px):** título 120 a 240 px · subtítulo 56 a 90 · texto de apoio ≥ 32 (no vertical ≥ 36) · rótulos mono ≥ 18. No máximo 6 a 8 palavras por tela.

**Áreas seguras (`M.safe`):** no 9:16, nada importante nos 13% de cima, nos 22% de baixo nem nos 14% da direita (interface do Reels/TikTok/Shorts). No 16:9, margem de 5%. Teste com `?dev=1` e a tecla **S**.

---

## 4. Timing, easing e coreografia

**Durações (30 fps):**
- Micro (clique, hover, toque): 80 a 150 ms (3 a 5 quadros)
- Elemento pequeno entrando: 300 a 500 ms
- Título ou elemento grande: 500 a 900 ms
- Transição entre cenas: 300 a 600 ms (whip pan: 250 a 350 ms)
- Hold de leitura: 0,3 s + 0,25 s por palavra (mínimo 1 s para título)
- Logo final parada: ≥ 1,2 s (vinheta) ou ≥ 0,6 s (sting)

**Curvas (`M.ease`, `M.curve`, `M.spring`):**
- **Entrar:** desacelera → `outExpo`, `outQuint`, `M.curve.snappy` (assinatura de motion premium)
- **Sair:** acelera e é mais curto que a entrada (≈70%) → `inCubic`, `inExpo`, `M.curve.accel`
- **Mover dentro da tela:** `inOutCubic`, `M.curve.standard`. Deslocamento grande ou zoom: `inOutExpo`
- **Personalidade:** `outBack(p, 1.2–2)` para brincalhão; `M.springAt(t, t0, 'bouncy'|'snappy'|'gentle'|'wobbly')` para orgânico; `inOutSine` para luxo e calma
- **Escala/zoom:** interpole com `M.expLerp` (velocidade percebida constante); "zoom através" = escala exponencial até cobrir (`M.cover`)
- Nunca use `linear` em posição; só em rotação contínua, letreiro e contador de tempo.

**Coreografia:**
- **Stagger:** letras 20 a 40 ms · palavras 60 a 120 ms · cards/itens 50 a 90 ms · grade por distância 20 a 40 ms (`M.stagger`, `M.staggerGrid`)
- **Sobreposição:** a próxima ação começa quando a anterior está em 60 a 80%. Nunca espere tudo parar.
- **Antecipação:** 3 a 6 quadros recuando 5 a 10% antes de um movimento grande (`M.curve.anticipate`)
- **Follow-through:** partes secundárias chegam depois e assentam (overshoot pequeno)
- **Hierarquia:** um foco por vez; o movimento secundário é menor e mais lento
- **Arcos:** objetos e cursores andam em curva (`M.arc`, `M.cursorPath`), não em linha reta
- **Vida:** nada fica 100% parado. Use deriva sutil (`M.drift`), push-in de 2 a 4% ao longo do plano, brilho que respira
- **Ritmo:** varie (curto, curto, longo). Com música de BPM fixo, alinhe as batidas (`M.beat(n)`)
- **Contraste de escala:** alterne plano aberto e detalhe; troque a cor do fundo a cada cena num reel
- **Opacidade sozinha é fraca:** combine com deslocamento, escala, máscara ou blur

---

## 5. Biblioteca de técnicas (as melhores, com receita)

Cada item: **o que é** → como fazer com o kit. Combine 3 a 6 por peça; não use tudo.

**A. Tipografia cinética**
1. **Subir de dentro da máscara** (a mais forte). `M.split(el, {mask:'lines'|'words'})`; anime `.in` de `y: 100%` → 0 com `outExpo` 0,6 a 0,8 s e stagger 60 a 90 ms; sai continuando para cima com `inCubic`.
2. **Cascata de letras.** `split().chars`, y +40%, rotação 6 a 10°, `outExpo`/`outBack(1.4)`, stagger 25 a 35 ms.
3. **Decodificação (scramble).** `M.scramble(texto, p, {tick: Math.floor(t*20)})`: glifos aleatórios resolvem da esquerda para a direita. Combina com tech e HUD.
4. **Datilografia humana.** `M.typewriter(texto, M.frameT(t), t0)` → `{text, caret}`, ritmo irregular e pausa em pontuação. Cue `type`.
5. **Mistura de pesos.** Sans black + serif itálica na palavra de ênfase (cor de destaque) + sublinhado que se desenha (`M.draw`).
6. **Troca de palavra (slot).** Palavras empilhadas numa máscara de uma linha; troca com `inOutExpo` e leve overshoot.
7. **Contador.** `M.fmt(valor, {prefix:'+', suffix:'%'})` com `outExpo` em 1 a 1,5 s, calculado com `M.frameT(t)`; `font-variant-numeric: tabular-nums`.
8. **Letreiro em faixa (marquee).** Faixas diagonais, `x = (t*vel) % larguraDoPadrao`; loop sem emenda.
9. **Tracking/peso variável.** Fonte variável: anime `font-variation-settings: 'wght'` e `letter-spacing` (−0,05em → 0,3em).
10. **Tipografia gigante + câmera.** Texto maior que o quadro, recortado, com push-in lento e cópia em contorno (stroke) deslocada em paralaxe.
11. **Anotações à mão.** Círculos e setas com tremido (`M.noise2` no raio), desenhados com `M.draw`, um de cada vez.

**B. Logo**
12. **Construção geométrica** (grade → traços → preenchimento). Guias desenham do centro, círculos tracejados com `M.draw`, arcos em stroke, troca para o preenchimento com flash ou anel; leve pop (`1 + 0.07·sin`).
13. **Partículas formando a marca.** `M.sampleShape({d})` ou `({text, font})` no `init()`; partículas saem de posições semeadas com deriva de ruído e convergem com `inOutCubic` e atraso individual; a forma sólida entra no impacto (cue `big`).
14. **Montagem por peças.** Cada parte entra de um deslocamento/rotação diferente, `outExpo` + stagger; a última peça "trava" com mola.
15. **Morph de primitiva para a logo.** `M.morpher(dCirculo, dLogo)` → `f(p)` devolve o `d` intermediário (uma forma fechada por vez).
16. **Revelação por máscara/wipe.** Retângulo ou forma da marca varrendo; `clip-path` no HTML ou `<mask>` no SVG.
17. **Travamento (lockup).** O ícone nasce centralizado e desliza (`inOutExpo`) para abrir espaço; o nome sobe da máscara.
18. **Brilho que varre.** Faixa em degradê inclinada passando pelo lockup (mask/soft-light), 0,6 a 0,8 s.
19. **Sting (1 s).** Um gesto só: ponto cai → squash → logo pop (mola). Cue `pop` + `hit`.

**C. Transições**
20. **Wipe por forma (íris em camadas).** 2 a 3 formas (cor A, cor B, fundo da próxima cena) crescendo de um ponto com 60 a 120 ms de atraso entre elas; raio com `M.expLerp` até `M.cover`.
21. **Zoom através.** Escala exponencial para dentro de um "furo" (contraforma da logo, letra O, tela de celular) e a próxima cena aparece lá dentro.
22. **Whip pan.** Mundo inteiro desliza uma tela em 8 a 10 quadros (`M.curve.swift`) + desfoque direcional proporcional à velocidade (filtro SVG `feGaussianBlur stdDeviation="X 0"`) + `M.blur(...,12)`.
23. **Persianas/faixas.** 8 a 12 tiras com `scaleY` e stagger de 20 a 30 ms.
24. **Match cut / morph de objeto.** O elemento da cena A vira o da cena B (botão → círculo → planeta). É o "elemento-ponte".
25. **Corte com flash/luz.** Pico de luz radial (screen) de 3 a 5 quadros exatamente no corte.
26. **Glitch.** 3 a 5 quadros: fatias horizontais deslocadas + separação RGB (cópias com `mix-blend-mode: screen` em R/G/B).
27. **Cartas 3D.** `perspective` + `rotateY` (flip) ou cards voando com profundidade e rotações diferentes.
28. **Blob/tinta (gooey).** Círculos com filtro SVG `feGaussianBlur` + `feColorMatrix` (alfa 18 −7) se fundindo.

**D. UI de produto**
29. **Cursor coreografado.** `M.cursor()` + `M.cursorPath(t, keys)` em arcos; clique = escala 0,85 em 3 quadros + anel (`ripple`). Cue `click`.
30. **Morph de estados.** Botão → loader → ✓ → card, sem cortes: largura/altura/raio interpolados e cor com `M.mix` (OKLab).
31. **Fluxo de IA.** Caixa de prompt digitando → envio → colapso em ponto → resultado montando.
32. **Mockup flutuante.** Celular/laptop inclinado (perspective) com conteúdo rolando dentro, sombra e flutuação senoidal.
33. **Bento/dashboard.** Cards entram em grade com stagger por distância; números contam; barras crescem.
34. **Notificações empilhando.** Toasts entram com mola e empurram os anteriores.

**E. Dados**
35. **Barras + linha + ponto.** Barras crescem com stagger `outExpo`; a linha desenha por cima (`M.draw`); o ponto final entra com `outBack` e um anel pulsando; o número herói conta.
36. **Rosca/pizza.** `stroke-dasharray` em círculo por fatias, uma de cada vez.
37. **Mapa/rota.** Caminho desenhando + marcador andando no path (`getPointAtLength`).

**F. Generativo e partículas**
38. **Campo de fluxo.** Partículas seguindo `M.curl(x, y, t)` (pré-calcule as trajetórias no `init` se forem integradas).
39. **Onda em grade/isométrico.** `h = f(sin(dist − t·vel))`; ladrilhos levantam na diagonal (`M.staggerGrid`).
40. **Órbitas.** Satélites em elipses com ordenação de profundidade (escala e opacidade por z).
41. **Explosão de raios.** Raios cônicos girando devagar atrás do herói + partículas saindo.
42. **Parede de ícones.** Grade grande revelada radialmente do centro, com um ícone em destaque.

**G. Câmera e profundidade**
43. **Paralaxe 2.5D.** Camadas com `M.depth(z)`; câmera `M.cam({x, y, zoom, r})` no grupo-mundo.
44. **Tremor de impacto.** `M.shake(t, t0, {amp: u(8–20), dur: 0.3})` só no quadro do hit.
45. **Profundidade de campo falsa.** Camadas distantes com `filter: blur()` estático (não animado em tela cheia).

**H. Personagem**
46. **Bolinha-personagem.** Squash & stretch no contato (volume constante: `sx = 1/sy`), antecipação antes do pulo, olhos olhando para a direção do movimento, rastro curto. É o melhor elemento-ponte de um reel.

### Receitas de código (testadas; copie e adapte)

```js
// 1. Subir de dentro da máscara — init: S = M.split(titulo, {mask:'lines'})
S.lines.forEach((ln, i) => {
  const q = E.outExpo(M.seg(t, 0.2 + i * 0.08, 0.9 + i * 0.08)), o = E.inCubic(M.seg(t, 2.2 + i * 0.05, 2.55 + i * 0.05));
  M.css(ln.in, { transform: { y: (1 - q) * ln.offsetHeight * 1.1 - o * ln.offsetHeight * 1.2 } });
});

// 2. Íris em camadas a partir de (px,py) — 3 <circle> em cores diferentes; montagem: M.blur(t0, t0+0.6, 12)
[irA, irB, irC].forEach((c, i) => { const p = E.inOutCubic(M.seg(t, t0 + i * 0.1, t0 + 0.35 + i * 0.1));
  M.attr(c, { cx: px, cy: py, r: p > 0 ? M.expLerp(4, M.cover(1, px, py) * 1.02, p) : 0 }); });

// 3. Whip pan com desfoque direcional — montagem: <filter id="hb"><feGaussianBlur id="hbg" stdDeviation="0 0"/></filter>
const sw = x => M.curve.swift(M.seg(x, t0, t0 + 0.32)), p = sw(t), vel = Math.abs(sw(t + 0.01) - sw(t - 0.01)) / 0.02;
M.css(cenaA, { transform: { x: -W * p }, filter: vel > 0.2 ? 'url(#hb)' : 'none' });
M.css(cenaB, { transform: { x: W * (1 - p) }, filter: vel > 0.2 ? 'url(#hb)' : 'none' });
hbg.setAttribute('stdDeviation', `${Math.min(u(70), vel * u(9))} 0`);

// 4. Partículas formando a marca (canvas) — init: pts = M.sampleShape({d: LOGO}, 600); posições iniciais com M.rng
for (const o of PTS) { const q = E.inOutCubic(M.seg(t, 1.0 + o.d, 1.9 + o.d)), n = M.curl(o.sx * 0.002, o.sy * 0.002, t * 0.3);
  ctx.fillStyle = o.c; ctx.beginPath();
  ctx.arc(M.lerp(o.sx + n[0] * u(60) * (1 - q), ox + o.p[0] * k, q), M.lerp(o.sy + n[1] * u(60) * (1 - q), oy + o.p[1] * k, q), u(3), 0, 6.283); ctx.fill(); }

// 5. Cursor em arco + clique — montagem: cur = M.cursor(camada, {size: u(44)}); M.cue(1.65, 'click')
const cp = M.cursorPath(t, [[1.0, [W + u(60), H + u(80)]], [1.6, botao], [1.75, botao], [2.3, [W * 0.9, H * 1.1]]]);
M.css(cur, { transform: { x: cp[0], y: cp[1], s: 1 - 0.15 * M.pulse(t, 1.65, 0.07) } });

// 6. Morph de UI: botão -> círculo -> card
const col = E.inOutExpo(M.seg(t, 2.0, 2.4)), ex = E.inOutExpo(M.seg(t, 2.9, 3.3));
const bw = M.lerp(M.lerp(BTN.w, BTN.h, col), CARD.w, ex), bh = M.lerp(BTN.h, CARD.h, ex);
M.css(box, { width: bw + 'px', height: bh + 'px', left: (cx - bw / 2) + 'px', top: (cy - bh / 2) + 'px', borderRadius: M.lerp(bh / 2, u(24), ex) + 'px', background: M.mix(C.surface, C.accent, col * (1 - ex)) });

// 7. Número herói + barras + linha
num.textContent = M.fmt(248 * E.outExpo(M.seg(M.frameT(t), 0.3, 1.6)), { prefix: '+', suffix: '%' });   // frameT: sem dígito fantasma
bars.forEach((b, i) => { const q = E.outExpo(M.seg(t, 0.3 + i * 0.09, 1.0 + i * 0.09)); M.attr(b, { y: base - alt[i] * q, height: alt[i] * q }); });
M.draw(linha, E.inOutCubic(M.seg(t, 0.9, 1.5)));

// 8. Impacto: tremor + pop + anel — montagem: M.cue(tHit, 'big')
const sk = M.shake(t, tHit, { amp: u(10), dur: 0.3 }), pop = 1 + 0.08 * Math.sin(Math.PI * M.seg(t, tHit, tHit + 0.3));
grupo.setAttribute('transform', `translate(${x + sk.x} ${y + sk.y}) rotate(${sk.r}) scale(${k * pop})`);
const rr = M.seg(t, tHit, tHit + 0.6); M.attr(anel, { r: u(120) + u(320) * E.outExpo(rr), opacity: rr > 0 && rr < 1 ? 1 - rr : 0 });

// 9. Bolinha com squash & stretch (transform-origin: 50% 100%)
const pj = M.seg(t, t0, t0 + 0.6), contato = M.pulse(t, t0 + 0.6, 0.08), sy = 1 - 0.35 * contato + 0.15 * Math.abs(Math.cos(Math.PI * pj)) * (1 - contato);
M.css(bola, { transform: { x: M.lerp(xA, xB, pj), y: chao - Math.sin(Math.PI * pj) * altura, sx: 1 / sy, sy } });

// 10. Decodificação estilo HUD
const ft = M.frameT(t); titulo.textContent = M.scramble('SISTEMA ONLINE', M.seg(ft, 1, 2.2), { tick: Math.floor(ft * 20) });
```

**H2. Técnicas vindas da galeria de 230 prompts (use 1 ou 2 como ideia central, não todas)**
48. **Uma forma que nunca corta.** Um único elemento vira todos os estados (botão → loader → check → player → slider → toggle → aba → gráfico → ⌘K → toast → botão): largura, altura, raio e cor interpolados, conteúdo troca com blur curto, cursor faz cliques e arrastes reais, último quadro = primeiro. Ver receita C em `templates-de-briefing.md`.
49. **Continuous take.** "Nada faz fade, desfoca ou corta": texto sobe de uma linha de máscara, ícones nascem de zero em mola, uma forma escura inunda o quadro e se contrai na cena seguinte. Câmera estilo Screen Studio: zoom até cada momento ocupar o quadro, e o cursor escala junto.
50. **O "drop".** Na batida forte da música, um círculo da cor de destaque cresce de um objeto (botão, wok, ponto) e inunda a tela em ~0,35 s, trocando a cena. Cue `big` no mesmo quadro.
51. **Liquid glass.** Desfoque do fundo atrás do controle + curvar a cena na borda como vidro grosso + brilho no topo + aro claro + sombra de elevação. Em fundo branco o vidro some: ponha uma aura pastel lenta atrás.
52. **Aura "Apple Intelligence".** Gradiente cônico desfocado girando por rosa, laranja, lima, ciano e violeta em volta do campo de entrada.
53. **Meio-tom (halftone).** Grade de pontos cujo raio responde a um objeto (ou à distância dele); cresce além das bordas e revela o cartão final.
54. **Palavra que se transforma por letras.** Cada letra anima sozinha (`split().chars`) para "Reduce Motion" virar "Motion", com o ponto preso ao "i" até saltar; palavras em órbita que se abrem num campo de pontos.
55. **Tipografia com papel físico.** Cada palavra-chave vira lintel, cabo, apoio, abertura ou plataforma, nascendo das próprias letras (deformação vetorial da baseline), e a frase final fica de pé sobre o que foi construído.
56. **Câmera que nunca corta num quadro parado.** Cada plano entra já em movimento (ease-out exponencial, ~12 a 19% da distância restante por quadro) e sai acelerando ou numa rampa de blur; um movimento de câmera por cena, sem zoom in e out em seguida.
57. **Cursor com intenção.** Vira para onde vai, cresce no hover, afunda no clique (0,85), anel de ripple, cue `click`.
58. **Dois lados, duas molas.** Indicador de aba e knob de toggle com as bordas em molas diferentes: a da frente estica antes da de trás (líquido). Valor que muda de alvo várias vezes = soma de uma mola por mudança, continua função pura do tempo.

**I. Acabamento**
59. **Grão** (`M.grain`, padrão 2%, troca 8×/s) contra banding em degradês e para textura. Ruído não comprime: grão forte multiplica o tamanho do arquivo (medido: de 0,3 MB para 8 MB em 3 s), então use leve, ou forte só em estética de cinema · **vinheta** suave (`M.vignette`, 0,1 a 0,3) · **glow** = cópia desfocada atrás · **HUD** (cantos, timecode real, rótulos mono) · **letterbox** · **motion blur** sempre.

---

## 6. Estruturas por formato

- **Vinheta / revelação de logo (3 a 10 s):** gancho em 0,5 s (fundo vivo + primeiro elemento) → construção (1,5 a 3 s) → revelação (hit + flash/anel) → lockup + hold ≥ 1,2 s → saída opcional. Faça também a **versão curta** (sting de 1 a 3 s) reaproveitando a mesma cena com o tempo remapeado: `?curta=1` na URL e, no render, `t = M.remap(t, [[0,0.55],[0.5,1.95],[1,3.35],[2.25,6.62],[3,9.5]])` (trechos acelerados, momentos-chave preservados). Cues e `DUR` da versão curta também remapeados.
- **Transição (0,6 a 1,7 s):** cobre → troca → descobre. Ofereça a versão overlay transparente (`--alpha`).
- **Abertura de aula/vídeo (5 a 8 s):** contexto (prompt/tela/ferramenta) → título cinético → assinatura ou episódio.
- **Showreel / manifesto (15 a 30 s):** 5 a 8 cenas de 2 a 4 s, elemento-ponte atravessando tudo, troca de fundo a cada cena, cortes no ritmo, final com logo + CTA.
- **Promo de produto/app (15 a 30 s):** dor (2 s) → produto no mockup → 3 benefícios com micro-UI (2 a 3 s cada) → prova (número) → CTA.
- **Post de dados (6 a 10 s):** número herói + gráfico + legenda; fecha em loop.
- **Loop (4 a 8 s):** estado final igual ao inicial; compare o primeiro e o último quadro (`--stills 0,<DUR − 0.033>`).
- **Lower third / legenda (3 a 5 s, alpha):** barra entra, nome sobe da máscara, sai em ordem inversa.

---

## 7. Som

- A trilha nasce dos **cues** da cena: `M.cue(t, tipo, {...})` no mesmo tempo da ação visual. Tipos: `hit`, `big`, `rise {len}`, `whoosh {len}`, `pop`, `tick`, `click`, `type {len, rate}`, `notes {notes, step}`, `pulse {n, every}`, `swell {len}`, `end`, `chord`.
- Moods do `sound.py`: **`grave`** (padrão: cinematográfico em Ré menor, pad quente, piano macio, impactos graves, risers de filtro, **sem agudos e sem som de vento**), `epico`, `tech`, `clean`, `ambient`, `pop`. Tom: `--key`.
- Regras: impacto exatamente no quadro da revelação; riser termina no hit; digitação com `type`; nada de som em todo micro-movimento (escolha os momentos).
- Loudness final: o `render.mjs` normaliza em 2 passagens para **−14 LUFS** e pico real −1,5 dBTP (`--lufs` muda).
- Música do usuário ou de banco: passe o arquivo em `--audio`; alinhe os hits aos tempos da música (BPM → `M.beat`).
- Sem som pedido → gere mesmo assim uma versão com trilha e mencione que dá para tirar.

---

## 8. Render, formatos e entrega

```bash
node render.mjs cena.html --stills 12 --sizes 1920x1080,1080x1920      # folha de contato
node render.mjs cena.html --check                                       # determinismo
node render.mjs cena.html --draft                                       # rascunho rápido
node render.mjs cena.html --cues cues.json && python3 sound.py cues.json trilha.wav --mood grave
node render.mjs cena.html --name Cliente_Vinheta --sizes 1920x1080,1080x1920 --audio trilha.wav --outdir saida
node render.mjs overlay.html --alpha --name Cliente_Transicao --sizes 1920x1080,1080x1920   # .mov ProRes 4444 + .webm + _GREEN.mp4
```
- Tamanhos: 16:9 `1920x1080` · 9:16 `1080x1920` · 1:1 `1080x1080` · 4:5 `1080x1350` · 4K `3840x2160` (ou `--ss 2` para supersampling).
- Nome: `Nome_16x9_1920x1080.mp4` (automático com `--name`).
- Saída: H.264 High, yuv420p, **BT.709 marcado** (cores iguais em todo player), CRF 17, AAC 320k 48 kHz, faststart.
- Opções úteis: `--fps 60` (UI muito fluida), `--sub 6` (mais blur em tudo), `--workers N`, `--from/--to` (trecho), `--crf 20` (arquivo menor), `--grain 4` (grão no ffmpeg; aumenta muito o tamanho do arquivo, só para entregas de cinema), `--params "texto=Olá"` (variáveis na URL da cena → `M.Q.get('texto')`).
- **Velocidade:** iterar com `--stills` e `--draft`; render final só no fim. Referência: ~1,5 quadro/s com 2 núcleos e blur ligado; cresce quase linear com `--workers` (no Mac, núcleos − 1). Cada trecho com `M.blur(...,12)` custa 3× mais.
- **Lote de variações** (mesma cena, textos diferentes): leia `M.Q.get('titulo')` na cena e rode em laço: `for t in "Aula 1" "Aula 2"; do node render.mjs cena.html --params "titulo=$t" --name "Transicao_${t// /}" ...; done`.

---

## 9. QA (antes de entregar)

- [ ] Folhas de contato 16:9 e 9:16 conferidas (Read nas imagens): nada cortado, áreas seguras ok, contraste ok, hierarquia clara
- [ ] `--check` com tudo "idêntico"
- [ ] Extraia 2 ou 3 quadros dos momentos mais rápidos do MP4 final (`ffmpeg -ss T -i v.mp4 -frames:v 1 q.jpg`) e confira se o blur está liso, sem "degraus"; se houver, marque `M.blur` com mais amostras
- [ ] Textos: ortografia/acentos pt-BR, tempo de leitura suficiente, nenhuma palavra órfã feia
- [ ] Primeiro quadro bom (serve de capa) e último quadro limpo (ou loop perfeito)
- [ ] `ffprobe`: fps, nº de quadros, duração, bt709, faixa de áudio presente
- [ ] Som: impactos alinhados às revelações (compare os tempos dos cues com os quadros), sem estouro
- [ ] Ambas as proporções exportadas e salvas na pasta do projeto
- [ ] Anti-"cara de IA" (seção 11): nenhum brilho, partícula, crossfade, tremor, texto de canto ou degradê genérico sem motivo; nenhum hold morto (> 1 s sem leitura); nenhum template óbvio
- [ ] Nenhum número, depoimento, cliente ou funcionalidade inventados; texto do usuário idêntico

---

## 10. Problemas comuns

| Sintoma | Causa → solução |
|---|---|
| Fonte errada no vídeo | fonte não local → `fonts.mjs` + `<link href="fonts/fonts.css">`; medidas só no `init()` |
| `--check` diferente | estado entre quadros / relógio / `Math.random` → função pura, pré-cálculo no `init`, `M.rng` |
| Cópias "fantasmas" em movimento rápido | poucas amostras → `M.blur(t0, t1, 12)` no trecho |
| Dígito/letra fantasma em contador ou digitação | texto calculado com `t` → use `M.frameT(t)` |
| Faixas no degradê (banding) | 8 bits → `M.grain` leve ou degradê com mais paradas |
| Arquivo enorme | grão forte/ruído em tela cheia → grão 2% (padrão) ou `--crf 20` |
| Render muito lento | efeito pesado em tela cheia, PNG, cena enorme → evitar blend/backdrop-filter contínuos; JPEG (padrão); `--workers`; iterar com `--draft` |
| Elemento pisca entre planos | dois planos visíveis/escondidos no mesmo quadro → sobreposição com `M.on(t, plano, pad)` |
| Texto pula de linha diferente no 9:16 | largura fixa → `M.pick` com tamanhos por formato e conferir na folha de contato |
| Cor diferente no Instagram | arquivo sem tag → use a saída do `render.mjs` (já é BT.709); não reencode sem `-colorspace bt709` |
| Transparência com borda escura | alfa não pré-multiplicado → use `--alpha` do kit (já pré-multiplica no blur) |

---

## 11. Briefing de campeão, anti-"cara de IA" e biblioteca de referência

Base: análise de 230 prompts reais feitos no Claude (Prompt Motion, set/out de 2026). Um prompt de 26 palavras colado 33 vezes deu resultados de 0 a 17 mil curtidas: **prompt vago deixa tudo ao acaso**; os longos tiveram mediana 11× maior. Detalhes em `references/playbook-prompt-motion.md`.

**Os 6 blocos de um briefing (para você montar antes de construir, em pedido de vídeo de verdade):**
1. **inputs:** o que só o usuário sabe (nome, logo, cor de destaque, texto exato, trilha), com **padrões** se ele pular. Pergunte uma vez.
2. **direction:** **um conceito** em uma linha + **elemento-ponte** + look travado (1 a 2 fontes, ≤ 3 cores + preto/branco, 1 destaque, uma linguagem de câmera) + **lista de proibidos**.
3. **structure:** o tempo em **BPM e compassos**; gancho no 1º compasso, um recurso por compasso saindo do anterior, momento mais forte no penúltimo, título no fim, último quadro = primeiro quando fizer sentido.
4. **build:** método de render explícito (aqui: kit, `render(t)` puro, blur por subquadros, trilha por cues, 60 fps se for UI fluida).
5. **gotchas:** armadilhas conhecidas (seção 10 + as de cada template).
6. **start:** mostrar conceito, mapa de batidas e 3 a 4 quadros antes do render final; renderizar um quadro por batida e olhar.

**Lista de proibidos (padrão desta skill, salvo pedido contrário do usuário).** Em vez de só proibir, diga o que fazer no lugar:
- **Glow/neon** → contraste, escala e cor de destaque fazem o foco.
- **Explosão de partículas, anel de onda de choque** → só se nascer de um elemento que já está na tela e for para algum lugar (movimento sem origem é enfeite).
- **Crossfade / blur-in** → toda cena cresce da anterior (match cut, morph, forma que inunda e contrai).
- **Tremor de câmera, separação RGB, lens flare, piso em grade, fundo piscando** → só no impacto único que a ideia pede.
- **Easing elástico em tudo** → molas com overshoot mínimo; `bouncy` só em estética lúdica (preset 12).
- **Tempo morto** → nada parado > 1 s, a menos que o espectador precise ler (e aí o hold é da leitura: 0,3 s + 0,25 s por palavra).
- **Texto nos cantos** (rótulos, marcadores de quadro, timecode decorativo) → só informação que o espectador usa.
- **Degradê genérico, vídeo ou UI de banco, cartões de placeholder** → material real do usuário, tokens reais da marca.
- **`Math.random`** → `M.rng(seed)`. O mesmo quadro tem que sair igual em toda renderização.
- **"Qualquer coisa que pareça template"** → feche o briefing com esse padrão; ele vale para efeitos que você não listou.
- **Números, clientes, depoimentos e funcionalidades inventados** → só o que o usuário forneceu ou o produto realmente tem.

**Como usar a biblioteca de referência (sem estourar o contexto):**
1. Vídeo de verdade (showreel, launch, promo, UI motion, explainer, tipografia, 3D)? Leia `references/playbook-prompt-motion.md` e o template mais próximo em `references/templates-de-briefing.md`.
2. Para ideias concretas de cena, abra `references/galeria/00_INDEX.md`, escolha a categoria e leia só 2 a 4 prompts parecidos com o pedido (os do topo têm mais detalhe). Ou `grep -il "palavra" references/galeria/*.md`.
3. Prompts da galeria foram escritos para um fluxo parecido com o do kit: o `seek(t)` deles é o `render(t)` daqui; os subquadros com `tmix` são o `M.blur`; a grade de batidas é `M.beat`; o analisador de música com numpy é o `sound.py`/cues. Traduza a ideia para o kit, **não copie o código do prompt**.
4. Os prompts pertencem aos criadores citados: use como referência de estrutura e de ideias, adapte ao briefing do usuário, não republique como se fossem seus.
5. Se o usuário colar um prompt da galeria e pedir "faz esse": trate-o como briefing, preencha os `inputs` que faltam com os padrões dele, e siga o fluxo da seção 1.
6. Se a ideia pede **3D de verdade**, **React/Remotion** ou **matemática (Manim)**, veja a tabela de renderizadores no playbook (seção 7) e avise o usuário da troca de ferramenta antes de começar.

---

## API rápida do `motion.js` (objeto global `M`)

- **Quadro:** `M.W, M.H, M.S, M.V` (vertical), `M.SQ`, `M.FPS`, `M.pick(h, v, sq)`, `M.safe`, `M.Q` (parâmetros da URL)
- **Tempo:** `M.seg(t,a,b)`, `M.range(t,a,b,ease)`, `M.remap(t,[[tSaida,tOrigem],...])`, `M.keys(t,[[t,v,ease],...])` (número, array ou cor), `M.stagger(i,n,each,from)`, `M.staggerGrid(c,r,cols,rows,each,from)`, `M.shots([[nome,dur],...],{gap})` → `.nome.start/end`, `M.on(t,plano,pad)`, `M.lt(t,plano)`, `M.pulse(t,em,largura)`, `M.loop`, `M.pingpong`, `M.step(t,fps)`, `M.frameT(t)`, `M.beat(n)`
- **Easing:** `M.ease.{linear, in/out/inOut + Sine/Quad/Cubic/Quart/Quint/Expo/Circ/Back, outElastic, outBounce, smooth}`, `M.bezier(x1,y1,x2,y2)`, `M.curve.{standard, emphasized, decel, accel, snappy, swift, anticipate, overshoot}`, `M.spring({stiffness,damping,mass,velocity})`, `M.springAt(t,t0,'gentle'|'snappy'|'bouncy'|'wobbly')`, `M.expLerp(a,b,p)`
- **Aleatório/ruído:** `M.rng(seed)`, `M.hash(i,j,seed)`, `M.noise2`, `M.noise3`, `M.fbm`, `M.curl`, `M.noiseSeed(n)`
- **Cor:** `M.mix(a,b,p)` (OKLab), `M.rgba(hex,a)`, `M.contrast(a,b)`
- **DOM/SVG:** `M.el(tag,attrs,parent,html)` (HTML ou SVG automático), `M.attr`, `M.css(el,{transform:{x,y,z,s,sx,sy,r,rx,ry,skx,px}})`, `M.tf`, `M.show(el,bool)`, `M.split(el,{mask})` → `{lines, words, chars}` (anime `.in`)
- **Texto:** `M.scramble`, `M.typewriter` → `{text, caret, end}`, `M.fmt`
- **Traço/forma:** `M.draw(el,p,from)`, `M.drawRange(el,a,b)`, `M.samplePath(d,n)`, `M.morpher(dA,dB)` → `f(p)`, `M.sampleShape({d}|{text,font},n)`, `M.arc(a,b,p,bend)`, `M.spline(pts,p)`, `M.cursorPath(t,keys)`, `M.cover(r,cx,cy)`
- **Câmera:** `M.cam({x,y,zoom,r})` (CSS), `M.camSVG(...)`, `M.shake(t,t0,{amp,dur})`, `M.depth(z)`, `M.drift(t,amp)`
- **Acabamento:** `M.grain(parent,{opacity,blend})` → `.update(t)`, `M.vignette(parent,{strength})`, `M.cursor(parent,{size})`
- **Contrato:** `M.cue(t,tipo,{...})`, `M.blur(t0,t1,n)`, `M.boot(render,{dur, init, bpm, poster})`. Prévia no navegador: `cena.html?dev=1` (espaço = play/pausa, setas = quadro a quadro, S = áreas seguras).
