# Nichos e direção de arte

Use quando o usuário não traz identidade visual ou quando traz só o segmento. A hierarquia é sempre: **marca do usuário > nicho > preset do SKILL (seção 3)**. Cada nicho abaixo indica tom, paleta-base (ajuste ao produto), tipografia, personalidade de movimento, imagem/material, estrutura recomendada e o que evitar. Os exemplos vêm de vídeos reais da galeria.

## Produto e tecnologia

| Nicho | Tom e paleta-base | Tipografia | Movimento | Material/UI | Evitar |
|---|---|---|---|---|---|
| **Fintech / jurídico / contabilidade premium** (ex.: produto financeiro alemão) | metal escuro + ouro quente como acento raro (`#0C0F1A`, `#E8B84B`, texto `#F6F4EB`); "silêncio e precisão" | sans geométrica (Plus Jakarta/Inter) + mono para números | lento, magnético, snaps precisos; sem bounce; profundidade sutil | **UI real reconstruída**, gráfico que desenha, recibo que encaixa no lançamento | cyberpunk, neon, "roxo de IA", arco-íris, inundação de amarelo |
| **App de música / streaming** | palco quase preto arredondado sobre fundo verde/atmosférico; verde de marca só em controles | uma sans limpa (Geist/Inter) | rápido e compacto, listas com stagger, capa que cresce e desliza | capas originais (arte gerada em código), barra de player ancorada | títulos gigantes de apresentação; legendas externas; marca d'água |
| **Produto de IA / assistente / prompt box** | "keynote": branco suave, azul claro, vidro (`#FDFDFB`, `#2F6BFF`, `#3CC8F0`, mint) | Inter 400 a 700 | câmera nunca para num quadro parado; cursor que gira, cresce, clica | menu bar, caixa de prompt em vidro, resposta que rola | roxo/violeta/magenta/laranja (cliché); glow no texto de UI |
| **Dev tool / open source (README hero)** | claro ou escuro neutro + 1 acento; terminal e código como protagonista | mono para código, sans para o resto | cursor, digitação, resposta imediata; loop | terminal real, diff, ícones de repositório | decoração sem informação |
| **SaaS B2B / dashboard** | corporativo confiança (preset 8) ou claro com acento da marca | Manrope/Inter | bento, números que contam, cards por distância | telas reais, logos de clientes **só se fornecidos** | depoimentos e números inventados |
| **Produto em cripto / DeFi / trading** | escuro com 1 acento frio; terminal | mono + grotesca | janelas que surgem, zoom entre escalas (ponto → desktop → ponto no espaço → mobile) | gráficos e livro de ofertas coerentes | promessas financeiras ("retorno", "garantido") que o usuário não forneceu |
| **Referral / growth / marco ("1 milhão de visitantes")** | festivo contido: 1 cor viva + preto | display pesada | número herói que conta, loop curto | métrica real do usuário | confete e partículas genéricas |

## Conteúdo e educação

| Nicho | Tom | Tipografia | Movimento | Material | Evitar |
|---|---|---|---|---|---|
| **Explainer técnico/ciência** | papel claro ou quadro branco; marcador (preto + 1 a 2 cores) | display pesada para termos, manuscrita (stroke) para notas | **um diagrama contínuo**, câmera entra/recua, setas na direção do fluxo | diagramas simples que se constroem | listas de tópicos, parede de texto, legenda lateral |
| **História / timeline / notícia** | editorial sóbrio, mapa/linha do tempo, uma cor por era | serifada + grotesca | marcador que desliza; um evento por vez | ícones simples; fotos **só se licenciadas** | datas e fatos não conferidos; citações inventadas |
| **Matemática (Manim)** | fundo escuro, objetos geométricos limpos | LaTeX/Computer Modern | transformação contínua de objetos | gráficos, vetores | trocar a ferramenta sem avisar (ver renderizadores) |
| **Receita / "do copo vazio ao pronto"** | fotografia limpa em movimento, fundo suave | sans limpa | **um ingrediente por compasso**, o copo sempre no mesmo lugar, câmera aproxima no final | líquido, nível subindo, medida em tipo claro ao lado | medida que o espectador precise pausar para ler |
| **Curso / aula / tutorial de ferramenta** | marca do curso; abertura de série | display + mono | contexto → título cinético → assinatura | tela real da ferramenta | longa demais (≤ 8 s de abertura) |

## Marca e estúdio

| Nicho | Tom | Movimento |
|---|---|---|
| **Estúdio / agência / branding** | portfólio: 2 a 3 técnicas fortes por vídeo, uma cor de assinatura; "risograph", "osciloscópio" e afins são **estilos** que valem como conceito inteiro | showreel (A) com identidade de estúdio como elemento-ponte |
| **Luxo / moda / cosmético** | monocromático quente + dourado fosco (preset 4); serifa itálica + sans leve com tracking alto | lento (0,9 a 1,6 s), brilho que varre, nada de bounce |
| **Aniversário / marco de marca** | "20 anos": número gigante como herói, linha do tempo em compassos | número que conta + marcas de época em cortes secos |
| **Saúde / bem-estar** | verdes e azuis suaves, muito espaço vazio, voz calma | in-out sine, respiração (`M.drift`), nenhum corte duro |
| **Esporte / energia** | preset 9 (preto, lima, laranja) | skew, speed lines, whip pan, impact frame, cortes curtos |
| **Infantil / lúdico** | preset 12 | squash & stretch, bounce permitido, personagens que respiram |

## Cultura, narrativa e jogo

| Nicho | Direção |
|---|---|
| **Curta narrativo / "uma história que você inventa"** | Escreva a história antes: um desejo, três falhas crescentes, virada, final + piada. Mudo; som conta metade. Estilo escolhido **a serviço da história** (teatro de sombras, papel recortado, massinha, pixel, "Grand Budapest" simétrico). |
| **Cena 3D recriada (filme/pintura)** | Plano-assinatura primeiro; câmera de cinema; luz de três pontos + ambiente + névoa + ACES; materiais físicos; um texto discreto só se o pedido pedir (ex.: "just breathe"). Não reproduzir personagem protegido; ver tipo 10. |
| **Jogo em pixel art / interativo** | Fora do núcleo do kit (HTML interativo). Se for vídeo de jogo, pixel art com paleta de 8 a 12 cores, grade fixa, animação "a doses" (`M.step(t,12)`). |
| **Hype edit / anime / crypto** | Tipo 10 do roteador: cortes em batida, tipografia agressiva, 2 tons + preto. |
| **Cultura local (ex.: festival, feriado)** | Pesquise elementos autênticos antes de desenhar (cores, símbolos, época); evite estereótipo; pixel/ilustração com paleta da tradição. |

## Regras de ouro de direção de arte (extraídas da galeria)

1. **Uma fonte principal.** Geist e Inter são as únicas fontes nomeadas com frequência (58 e 55 prompts, quase todos por herdarem o mesmo template; só 7 e 4 dos originais as escolheram), e a maioria nem nomeou fonte. São o "default seguro" de **produto de software**; **diferencie** (serifa itálica, display condensada, mono) quando o objetivo é parecer autoral.
2. **Uma cor de destaque com função** (usada só no objeto-fio e na palavra-chave). Cores a mais só quando o conceito pede.
3. **Material real vence ilustração genérica.** Telas, logo, fotos, tokens do produto do usuário; arte gerada em código (capas, ícones) só quando não há material e **marcada como exemplo**.
4. **Espaço negativo.** "Cada cena respira." Texto ocupa no máximo ~35% do quadro.
5. **Nunca aproxime o estilo de uma marca de terceiros** a ponto de confundir: capture a filosofia (restrição, precisão), não o quadro a quadro.
6. **Cor de marca fixa = tokens.** `bg, surface, ink, muted, accent, accent2`; contraste ≥ 4,5:1 (`M.contrast`).
7. **Ícones com o mesmo traço** (espessura, cantos) em todo o vídeo; ícones de banco ("stock-looking") são sinal de IA.
8. **Texto verdadeiro.** O que está na tela vem do usuário ou do produto; sem lorem, sem marketing genérico ("revolucione seu negócio").
