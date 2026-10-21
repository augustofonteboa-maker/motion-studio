# Catálogo de cenas: 60 padrões com receita no kit

Cada padrão: **quando usar** · **receita** (API do `motion.js`) · **erro comum**. Os números (tempos, escalas) vêm do que funcionou nos melhores prompts e nos testes do kit. Combine **3 a 5** por vídeo de 15 s; mais que isso vira desfile. As técnicas A a H2 do `SKILL.md` (seção 5) têm código; aqui estão as **composições** (como encadear).

## 1. Aberturas e ganchos (0 a 2 s)

1. **Palavra-gancho na batida.** Uma a três palavras entram uma por batida (`M.stagger`, subida de máscara). Quando: lançamento e hype. Receita: `M.split(el,{mask:'words'})`, `outExpo` 0,5 s, cue `pop` por palavra. Erro: mais de 5 palavras no gancho.
2. **O problema em 3 a 5 palavras.** Gancho de produto: a dor, em tipo grande, **interrompida** pelo objeto-fio. Receita: título em duas linhas; o objeto-fio cruza por cima e vira o próximo elemento. Erro: abrir com logo.
3. **Primeiro quadro já premium.** Não existe "fade in do preto": o primeiro quadro tem fundo vivo, hierarquia e movimento em curso (`M.drift`, grão leve). Regra da galeria: "os primeiros 1,5 s já têm que parecer caros".
4. **Ponto no preto.** Um ponto em tela escura que vira tudo (UI, logo, planeta). Receita: círculo `outBack`, depois morph (`M.morpher`) ou crescimento até `M.cover`. Quando: tech, terminal, produto técnico. Erro: ponto que não volta no final (a ponte tem que fechar).
5. **Cursor entra e clica.** Cursor em arco (`M.cursorPath`) chega ao elemento, vira para onde vai, cresce no hover, afunda no clique (0,85) com anel e cue `click`. Quando: qualquer UI. Erro: cursor reto e sem clique.
6. **Estado de abertura = estado final (loop).** Planejar o último quadro junto com o primeiro (posição, cor, velocidade do cursor). Quando: README, feed, loop. Erro: último quadro só "parecido".

## 2. UI de produto

7. **UI reconstruída em camadas.** Nunca deslizar um print chapado. Quebre a tela em componentes (header, card, gráfico, linhas) como `div`/SVG que animam sozinhos. Receita: recrie o essencial a partir das capturas reais (tokens/cores/fontes do produto), 5 a 8 regiões animáveis. Erro: print inteiro com zoom.
8. **Morph de estados.** Botão → loader → ✓ → card → player → slider → toggle → aba → gráfico → ⌘K → toast → botão. Largura, altura, raio e cor interpolados (`M.lerp`, `M.mix`), conteúdo troca com blur curto. Receita C em `templates-de-briefing.md`. Erro: cortar entre estados.
9. **Campo de prompt que digita.** `M.typewriter` com ritmo humano (cps 18 a 26, pausa em pontuação), caret aceso enquanto digita, botão que afunda. Quando: produto de IA. Erro: texto longo demais (> 60 caracteres) em 15 s.
10. **Resposta que chega rolando.** Página/card entra de baixo borrado e **assenta** (offsets decrescentes, blur 24 → 0), com flash leve na troca. Erro: aparecer sem inércia.
11. **Card que sobe sobre a página.** Card branco com sombra suave sobe por cima (`inOutExpo`), a página atrás desfoca 2 a 3 px. Quando: apresentar funcionalidade. Erro: sombra dura.
12. **Lista com stagger por linha.** 4 a 6 linhas (thumbnail, título, artista, menu) entram com 50 a 90 ms de defasagem. Quando: apps de música, banco, e-mail.
13. **Barra de menu / dock / notificação.** Contexto de sistema (menubar do Mac, ilha dinâmica, lock screen) como cena; o ícone do produto clica e o painel "brota" com mola (largura passa do alvo e assenta). Erro: ícones genéricos de banco.
14. **Celular flutuante.** Aparelho levemente inclinado (`perspective`), conteúdo rolando, sombra e flutuação senoidal; **o aparelho nasce da tela** (a moldura cresce da borda). Quando: app mobile.
15. **Bento / dashboard.** Cards entram por distância (`M.staggerGrid`), números contam (`M.fmt` + `M.frameT`), barras crescem. O número herói resolve primeiro; o apoio assenta depois.
16. **Glass sobre foto.** Controles em liquid glass (blur do fundo + borda curvada + aro claro + sombra) sobre fotografia real; **em fundo branco, ponha aura pastel atrás**. Erro: glass em tudo (ver proibidos).
17. **Aura de entrada estilo "Apple Intelligence".** Gradiente cônico desfocado girando em volta do campo de prompt. Usar uma vez, no momento do input.
18. **Seleção estilo editor (Figma).** Cursor arrasta uma caixa de seleção; alças e rótulo de tamanho aparecem. Quando: ferramenta de design.

## 3. Dados e gráficos

19. **Barras → linha → ponto → número.** Barras `outExpo` com stagger; linha se desenha (`M.draw`); ponto final `outBack` com anel; número herói conta. O olho segue uma ordem só.
20. **Gráfico e ponto na mesma função.** O ponto anda na mesma função de mola que desenha a curva (senão a mola parece falsa).
21. **Rosca/pizza por fatia**, **mapa com rota** (`getPointAtLength`), **linha do tempo** com marcador deslizando: um evento por vez, rótulo **sobre** a coisa.
22. **Gráfico que "respira" sem inventar dado.** Dados do usuário; sem % inventada. Se não há dados, use exemplo marcado como "exemplo".

## 4. Tipografia

23. **Subida de máscara (linha/palavra).** O padrão mais forte; saída continua para cima mais curta (≈70%).
24. **Troca de peso na palavra de ênfase.** Sans black + serif itálica na cor de destaque (nunca as duas formas de ênfase juntas).
25. **Palavra que se transforma por letras.** Letras animam sozinhas; elemento (ponto) fica preso a uma letra até saltar.
26. **Tipografia com papel físico.** Cada palavra vira lintel/cabo/apoio/abertura/plataforma, nascendo das letras; deformação de baseline.
27. **Letreiros diagonais em loop.** Faixas com `x=(t*vel)%padrão`; cruzam em ângulos e velocidades diferentes; fecha sem emenda.
28. **Contador com tabular-nums.** Sempre `M.frameT(t)`.
29. **Texto gigante + câmera.** Maior que o quadro, recortado, push-in lento, contorno em paralaxe. Quando: título forte e curto.
30. **Anotações à mão.** Círculo, seta, rabisco desenhados um a um com tremido (`M.noise2`) e `M.draw`. Quando: explainer, "papel e marcador".
31. **Legenda palavra a palavra.** 1 a 2 palavras por vez, branco negrito, nunca cobrindo rosto; tempo de cada palavra medido do áudio.

## 5. Transições (a regra: nada de crossfade)

32. **Match cut por objeto.** O objeto da cena A vira o da cena B (botão → círculo → planeta; ponto do gráfico → canto de um recibo). É o elemento-ponte trabalhando. Medir posições **em runtime** (`getBoundingClientRect` no `init`), não fixar no código.
33. **Forma que inunda e se contrai.** Círculo/retângulo da cor de destaque enche a tela (além dos 4 cantos) e contrai na próxima cena. É o "drop" quando cai na batida forte.
34. **Íris em camadas / lâminas.** 2 a 3 formas com 60 a 120 ms de defasagem; lâminas de íris que fecham sobre o conteúdo e abrem em outra imagem.
35. **Zoom através de um furo.** Letra O, contraforma de logo, tela de celular: escala exponencial até o furo cobrir; a próxima cena nasce dentro.
36. **Whip pan / whip tilt.** Mundo desliza uma tela em 8 a 10 quadros (`curve.swift`) com desfoque direcional proporcional à velocidade + `M.blur(...,12)`; flash leve opcional.
37. **Dobra/papel (mapa).** A grade se desdobra por trás da forma (centro, cruz, cantos) e vira bento. Quando: transição de "um" para "muitos".
38. **Corte duro na batida do drop.** O único corte seco permitido (2 quadros **antes** da batida, para o olho sentir em cima). Máximo 1 a 3 por vídeo.
39. **Blur-dissolve controlado.** Só se a ideia pedir e **uma vez**; se usar, que seja desfoque direcional, não fade.

## 6. Forma, personagem e movimento

40. **Bolinha-personagem.** Squash & stretch (volume constante), antecipação, olhos na direção do movimento, rastro curto. Melhor elemento-ponte de reel.
41. **Pelúcia de forma.** Quadrado → rotação → pílula → círculo, mesma forma em estados diferentes (posição e movimento preservados).
42. **Parede isométrica de ícones.** Grade 7×7 revelada radialmente com ícone herói (`M.staggerGrid`).
43. **Física que reage.** O que é atingido se move; o que está perto acende (mola em cada vizinho por distância).
44. **Colisão que toca música.** Cada nota vem de uma colisão visível; trilha e visual compartilham os dados de nota.
45. **Partículas formando a marca** (`M.sampleShape`) — **com origem e destino**; nunca explosão aleatória.
46. **Meio-tom (halftone)** que responde a um objeto e revela o cartão final.
47. **Campo de fluxo/ondas** para fundo vivo, sempre baixo contraste e em loop.

## 7. Câmera e profundidade

48. **Câmera nomeada por cena.** Um movimento por cena (push, pull-back, crane, whip), sempre com ease; nunca zoom in e out seguidos; cada cena **começa no zoom em que a anterior terminou**.
49. **Câmera nunca parada.** Push 1,0 → 1,04 por cena, mesmo em plano "parado" (`M.drift`).
50. **Zoom estilo Screen Studio.** Para cada momento, enquadrar o elemento que importa; o cursor escala junto.
51. **Paralaxe 2.5D e profundidade falsa.** `M.depth(z)`; blur estático em camadas distantes (não animar blur em tela cheia).
52. **Plano-assinatura 3D.** Projete **primeiro** o plano que alguém printaria (recuo que revela o padrão, letreiro formado visto de cima); todo o resto constrói até ele. Three.js com `--gl`, modo `?render` determinístico.

## 8. Fechamentos

53. **Objeto-fio vira logo.** Elemento do produto (cursor, botão, ponto) vira a marca no cartão final. Fecha o conceito.
54. **Cartão final em 3 linhas.** Nome (display), promessa de uma linha (serif itálico), contato/URL (mono). Hold ≥ 1,2 s (vinheta) ou ≥ 0,6 s (sting).
55. **Loop limpo.** Último quadro = primeiro. Comparar com `--stills 0,<DUR-0.033>`.
56. **Pergunta final / CTA.** Uma ação só ("Teste grátis em x.com"); nunca mais de uma.

## 9. Som integrado à cena

57. **Digitação com som** (`type`), **clique** (`click`), **pop por elemento** (`pop`), **whoosh** nas trocas, **impacto grave** (`big`) no drop. Um som por elemento que aparece, silêncio no resto.
58. **Riser que termina no hit.** Rise cresce durante a contração/antecipação e termina exatamente no quadro do impacto.
59. **Música que "cai" com a cena.** O drop da trilha coincide com o flood/corte (alinhe pela medição, não de ouvido).
60. **Silêncio como recurso.** 0,3 a 0,5 s sem som antes do impacto aumenta o impacto.

## Como montar uma cena a partir do catálogo (exemplo de 15 s)

`1 (gancho) → 5 (cursor) → 9 (prompt) → 33 (flood no drop) → 15 (bento) → 50 (zoom no card) → 53 (objeto-fio vira logo) → 54 (cartão final)`. Quatro ideias visuais, uma ponte, uma batida forte. **Se o seu mapa tem mais de 5 ideias para 15 s, corte as mais fracas.**
