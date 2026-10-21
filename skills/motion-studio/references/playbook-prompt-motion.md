# Playbook: o que 230 prompts reais ensinam sobre motion com IA

Fonte: análise dos 233 vídeos do Prompt Motion (prompt-motion.com, curadoria de @p4nthera_) e dos artigos do blog deles, de set/out de 2026. Todos feitos no Claude Opus 5.5. A íntegra dos prompts está em `galeria/` (comece por `galeria/00_INDEX.md`). Este arquivo é a destilação: leia inteiro quando o pedido for um vídeo de verdade (showreel, launch, promo, explainer), não para um ajuste pequeno.

## 1. A lição central

Uma frase de 26 palavras ("make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are... go all out") foi colada 33 vezes. Os resultados foram de 0 a 17.000 curtidas, e a mediana foi 5. **Prompt curto deixa toda decisão para o acaso**: tema, aparência, tempo, o que evitar. Os prompts longos (mais de 100 palavras) tiveram mediana de 56 curtidas contra 5 dos curtos. Tamanho não é o objetivo; cada parte abaixo existe para tirar do modelo uma decisão que ele tomaria no automático.

Consequência para esta skill: **nunca construa a partir de um pedido vago.** Transforme o pedido num briefing de 6 blocos (seção 2), decida os pontos em aberto com bom gosto, conte o que decidiu e mostre o storyboard antes de renderizar.

## 2. Anatomia de um briefing campeão (6 blocos)

Os melhores prompts da galeria usam sempre esta ordem, quase com estas tags:

1. **`<inputs>` (o que perguntar ao usuário).** Lista curta do que só ele sabe: nome do produto, logo, uma cor de destaque, o texto exato, a trilha. Sempre com **padrões** ("se eu pular algo, use X") para o trabalho não travar. Pergunte uma vez, no início.
2. **`<direction>` (conceito e estilo).**
   - **Um conceito só**, dito numa linha ("tinta vira tipo vira arquitetura", "uma forma que nunca corta", "a bolinha laranja liga todas as cenas"). Sem conceito o modelo faz um desfile de efeitos.
   - **Elemento-ponte** que atravessa todas as cenas (uma forma, um ponto, um cursor).
   - **Look travado:** 1 fonte (ou 2), no máximo 3 cores + preto e branco, 1 cor de destaque, linguagem de câmera única ("uma move nomeada por cena, nunca dois ao mesmo tempo, nunca zoom in e out em seguida").
   - **Lista de proibidos** (seção 3).
3. **`<structure>` (o tempo).** Em **BPM e compassos** ("120 BPM, 7 compassos, algo acontece em toda batida"), não em "dinâmico". Primeiro compasso = gancho; um recurso por compasso, cada um saindo do anterior; penúltimo = o momento mais forte; final = título, com o último quadro igual ao primeiro (loop). Descreva cada cena como ação concreta, com setas (→).
4. **`<build>` (como renderizar).** Numerado e específico: um HTML, 1920×1080 a 60 fps, todo estilo calculado a partir do tempo em `seek(t)` (aqui: `render(t)`), sem transição CSS/timer/estado; molas em forma fechada; subquadros misturados para motion blur; analisar a música com numpy para a grade de batidas; cada som posicionado pelo pico medido.
5. **`<gotchas>` (as armadilhas conhecidas).** Ex.: "não use will-change em nada que a câmera escala, o texto fica borrado"; "texto que troca dentro de container que muda de forma precisa de entrada e saída com tempos separados"; "último quadro idêntico ao primeiro, incluindo posição e velocidade do cursor, ou o loop engasga"; "quando uma forma preenche a tela, escale além dos quatro cantos"; "o gráfico e o ponto precisam seguir a mesma função de mola".
6. **`<start>` (o primeiro passo).** "Peça os inputs, mostre o mapa de batidas e 4 quadros estáticos antes de construir o vídeo." Revisão antes do render final: **renderize um quadro por batida e olhe**; corrija o que estiver fora da grade, apertado ou ilegível.

Modelos prontos para preencher: `templates-de-briefing.md`.

## 3. Lista de proibidos (o que entrega "feito por IA")

Só 16 dos 230 prompts tinham uma, mas incluem 4 dos 20 mais curtidos (mediana de 56 curtidas contra 7 da galeria). Itens por frequência: **brilhos/neon** (7 criadores), **"qualquer coisa que pareça template"** (7), **explosões de partículas** (6), **tempo morto / holds longos / quadros congelados** (6), **crossfades** (5), **easing elástico demais** (3), **degradês genéricos** (3), **efeitos 3D gratuitos** (3), **vídeo/UI de banco** (3), **texto nos cantos** (2: rótulos e marcadores de quadro em volta da borda, tipo HUD sem informação), **`Math.random`** (2).

Também comuns: tremor de câmera, separação RGB, lens flare, piso em grade, fundo piscando, anel de onda de choque.

Como aplicar nesta skill:
- Copie para o briefing uma lista de 5 a 9 itens, **sempre com o que fazer no lugar** ("sem crossfade: toda cena cresce da anterior"; "sem glow: contraste e escala fazem o destaque").
- Feche com o padrão: "tudo que pareça template".
- O kit tem `M.shake`, `M.grain`, glow, glitch e partículas: são ferramentas, não obrigações. Só use se a ideia do vídeo pedir, e **uma vez**, no momento certo (um impacto, não o vídeo todo). Regra da galeria: "movimento que não vem de um elemento que já está na tela é enfeite".
- Exceção: pedido de estética tech/HUD/glitch do usuário. Aí o efeito é a ideia.

## 4. Os padrões de vídeo que mais funcionam

- **Showreel / "mostre que você é um motion designer" (78 de 233).** Abra com um conceito e um nome. Cada cena é feita da anterior (formas, texto e cor se transformam, sem corte nem fade). Mostre alcance em partes iguais: tipografia cinética, morph de formas, um momento 2D→3D, um momento de dados/UI, título final. 120 BPM, trilha escrita em código (kick em cada batida, riser antes do último compasso, hit em cada troca de cena).
- **Launch / promo de produto (94).** Funil que se repete: gancho em palavras nas batidas → o produto aparece como UI viva (cursor digita e clica de verdade) → "o drop" (círculo/cor floods a tela na batida da música) → uma ação por compasso (parede de clipes reais, número gigante, carrossel, celular com painel que vira resultado, estatísticas em cortes secos, ticker de 3 palavras) → logo → fade. **Use material real do produto** (telas, logo, tokens de design do repositório); "nunca cartões de placeholder"; não invente funcionalidade, número ou depoimento.
- **Uma forma que nunca corta (12.000 curtidas).** Botão → loader → check → ilha dinâmica → player → slider (estica ao arrastar além do máximo) → toggle → aba líquida → gráfico que se desenha → ⌘K → toast → volta ao botão. Cada estado é o mesmo elemento mudando tamanho, raio e cor; o conteúdo troca com blur curto. Cursor com clique e arrasto reais. Dois lados do indicador de aba em molas diferentes (a ponta da frente estica). Último quadro = primeiro.
- **Um continuous take estilo keynote.** "Nada faz fade, desfoca ou corta; os objetos mudam de forma": texto sobe de uma linha de máscara, ícones surgem de zero em mola, barras se desenham, uma forma preta inunda o quadro e se contrai na próxima cena. Câmera estilo Screen Studio: dá zoom para cada momento ocupar o quadro, e o cursor escala junto.
- **Explainer (27, os mais fracos: mediana de 15 palavras).** Funciona com: uma analogia visual por conceito, a ideia dita antes de mostrada, um número ou rótulo por cena, paleta de papel + marcador (tipografia gigante, anotações que se desenham, troca dura claro/escuro a cada 1,5 a 2 s). Se for matemática, Manim com narração.
- **Tipografia como arquitetura** ("BUILD THE FLOOR"): cada palavra recebe um papel físico (WAIT = lintel, VOICE = apoio, ROOM = abertura, FLOOR = plataforma) que **nasce das próprias letras**, não de ilustrações atrás. Texto exato, ordem exata, legível sem áudio.
- **Palestra/narração em voz:** roteiro de 9 linhas com tags de emoção usadas com parcimônia; várias takes e escolher; regenerar só a linha ruim; encurtar pausas > 0,28 s para 0,2 s; **alinhar legendas medindo o início de cada segmento** (uma passada única do Whisper erra até 0,5 s).
- **Loop:** estado final = inicial, comparar primeiro e último quadro.

## 5. Técnicas de acabamento que aparecem nos melhores prompts

- **Liquid glass (iOS 26):** desfoque do fundo por trás do controle + curvar a cena na borda como vidro grosso + brilho no topo + aro claro + sombra suave de elevação. **Vidro some em fundo branco liso**: ponha uma aura pastel lenta atrás.
- **Aura estilo Apple Intelligence:** gradiente cônico desfocado girando por rosa, laranja, lima, ciano e violeta em volta do campo de entrada.
- **Câmera que nunca corta num quadro parado:** cada plano entra já em movimento (ease-out exponencial, 12 a 19% da distância restante por quadro) e sai acelerando ou numa rampa de blur; o blur segue a velocidade e a direção.
- **Cursor vivo:** vira para onde vai, cresce no hover, afunda no clique (escala 0,85), anel no clique, som de clique.
- **Meio-tom (halftone):** grade de pontos cujo tamanho responde a um objeto; cresce além das bordas e revela o cartão final.
- **Letras individuais** para qualquer transformação de palavra ("Reduce Motion" → "Motion"; o ponto fica preso ao "i" até saltar).
- **Câmera de cinema no 3D:** um movimento nomeado por plano (dolly, crane, órbita, push-in, rack focus), sempre com ease, nunca atravessa geometria. Luz de três pontos, mapa de ambiente, névoa, materiais físicos com rugosidade variada, tonemapping ACES; nada com material padrão. Um **plano-assinatura** desenhado primeiro, e tudo constrói em direção a ele.
- **Física que reage:** o que é atingido se move, o que está perto acende; molas ou física simples, nunca tween linear.
- **Vídeo real dentro do render:** extraia os clipes para sequência JPEG a 30 fps com ffmpeg e troque o `src` por quadro; o `seek` espera a decodificação. (O kit descreve o mesmo caminho na seção 2.)
- **Tokens do produto real:** quando o vídeo é de um produto, leia primeiro os tokens de design, o wordmark e as capturas de tela atuais do repositório. Prefira o mais novo ao antigo. Nunca invente funcionalidade.

## 6. Som e música

- Música livre de direitos de banco (Mixkit, Pixabay, Pexels) por **BPM e "drop"**: ~120 BPM com drop e um trecho calmo antes. Comece a faixa N batidas antes do drop.
- **Analise com numpy:** andamento, grade de batidas, energia por compasso, o drop; calibre a grade nos kicks reais; todo corte numa batida forte, todo "hit" de UI numa batida.
- **Posicione cada efeito pelo pico medido, não pelo início do arquivo**; efeitos baixos sob a música; loudnorm −14 LUFS (pico −1,5 a −2 dBTP, remedido depois do AAC).
- Sem música do usuário: trilha em código (kick por batida, riser, hit por cena). É o que `sound.py` + `M.cue` já fazem aqui.
- Música/efeito de terceiros só CC0 ou gerado, e registre a fonte.

## 7. Qual renderizador usar (56 vídeos citaram a ferramenta)

| Abordagem | Quando | Observação |
|---|---|---|
| **HTML/canvas + Playwright + ffmpeg** (a desta skill) | padrão para tudo: explainers, launch, UI, tipografia | 23 dos 56; dos 10 vídeos mais curtidos, 4 citam ferramenta e 3 deles são HTML puro. Nada a instalar além de Playwright e ffmpeg. O prompt precisa dizer o método de build. |
| **Remotion** (React) | o produto já é React e dá para reutilizar componentes reais | 13; quase só vídeos de launch. Licença paga para algumas empresas: avise. |
| **HyperFrames** (HeyGen, HTML + atributos, Apache 2.0) | renderizador pronto para agentes, sem React, com GSAP | 10; metade são launches. |
| **Three.js** | 3D de verdade (iluminação, câmera) | 5; capture com o mesmo método, modo `?render` com tempo no lugar do relógio e aleatório com semente. |
| **Manim** | explicar matemática | 1 (258 curtidas, com TTS grátis). |

Todos fazem o mesmo por baixo: navegador sem tela carrega a animação, vai até o tempo exato, tira print e repete; o ffmpeg junta. Por isso máquina lenta não perde quadro nem sai da batida. Sempre **nomeie a ferramenta** no briefing; sem isso o resultado muda a cada vez.

Skills de terceiros que apareceram (uso opcional, avise o usuário): Cinetic (Leonxlnx/cinetic), product-film (Rieranthony/product-film-skill, Remotion), session-story (HyperFrames), generative-film-skill (buildfastwithai). Detalhes e comandos em `galeria/00_INDEX.md`.

## 8. Checklist de revisão antes do render final

- Há **um conceito** dito em uma linha e um elemento-ponte?
- A lista de proibidos está no briefing, com o substituto de cada item?
- O tempo está em batidas/compassos, e algo acontece em toda batida forte?
- Cada cena nasce da anterior (sem crossfade, sem corte morto)?
- Primeiro e último quadro batem (loop) quando faz sentido?
- Um quadro por batida foi renderizado e olhado (nada apertado, sobreposto, fora da grade, ilegível)?
- Nenhum número, depoimento ou funcionalidade inventada; texto exato do usuário preservado?
- Texto de cena que sai e de cena que entra têm tempos separados (sem letras sobrepostas)?

## 9. A "versão completa": o que muda do prompt original para o prompt executável

A maioria dos prompts originais da galeria é uma frase solta. Para 213 das 233 entradas existe também uma **versão completa**, reescrita no formato de 6 blocos da seção 2 (51 delas foram testadas: o vídeo foi feito com a versão completa). Cada entrada em `galeria/*.md` traz as duas, lado a lado. **Quando for construir um vídeo parecido, parta da versão completa, não do original.** As 63 versões distintas se reduzem a poucas famílias:

| Família | Quando | O que ela acrescenta ao original |
|---|---|---|
| **Showreel** (~75 entradas) | "mostre o que você faz", portfólio, autoapresentação | Conceito nomeado antes; toda cena nasce da anterior; alcance em fatias iguais (tipografia, morph, 2D→3D, dados/UI, título); 120 BPM; trilha em código; loop. Variantes: 10, 15, 20, 25 e 30 s. |
| **Vídeo de produto / launch** (82 entradas, a mais comum) | produto, app, site, marca | **Pesquisar primeiro** (o que faz, para quem, interface e marca reais) e nunca inventar tela, função ou número; capturar as telas reais e o logo se o usuário não der; **um objeto-fio** do próprio produto (cursor, botão-chave, a marca do logo, um dado) que se transforma em cada cena e vira o logo no cartão final, nomeado antes do storyboard; reconstruir a UI real em camadas vetoriais (nunca deslizar um print); câmera estilo Screen Studio que **nunca fica parada** (push de 1,0 a 1,04 por cena, cada cena começa no zoom em que a anterior terminou); **nada surge do nada** (cresce, desdobra ou revela por máscara); algo muda em toda batida; gancho = o problema em 3 a 5 palavras; fecho = nome + chamada de uma linha. |
| **Explainer** (~25 entradas) | explicar conceito, comando, notícia, artigo, matemática | Pesquisar e **conferir cada número e nome em fonte**; o conteúdo como **um diagrama só, num espaço contínuo** (a câmera entra numa parte e recua para mostrar o encaixe; legendas sobre a coisa que nomeiam, nunca em legenda lateral); toda ideia ganha **imagem antes de palavra**; uma coisa se move por vez; setas animam na direção do fluxo; no máximo 7 palavras na tela, 0,3 s por palavra; roteiro de narração escrito primeiro, **cada linha gerada em voz e a animação cronometrada pela duração real do áudio**; legendas sincronizadas linha a linha; storyboard cronometrado antes; gancho = a pergunta que o espectador já tem; payoff = recuo final com o diagrama completo e um resumo de uma linha. Matemática: Manim. |
| **Curta animado / história** (~10 entradas) | "uma história que você inventa", clipe, mini-filme | Escrever a história primeiro: **um desejo claro, três tentativas que falham de formas diferentes e crescentes, uma virada, um final que acerta e uma piada de último segundo**; mudo, sem diálogo nem texto, o som conta metade da história; atuação: silhueta legível, antecipação e follow-through em toda ação, squash & stretch no que é mole, os olhos se movem primeiro, poses-chave seguradas ≥ 6 quadros; encenação: uma ação por plano, corte na ação, cor muda com o clima; lista de planos com tempos antes de construir. Armadilhas: pés e mãos travados onde tocam, mesmas proporções em todo plano, a piada ganha um respiro de imobilidade antes. |
| **Música / lyric video** | faixa própria ou do usuário | Escrever a faixa primeiro (arranjo real: intro, build, drop) em código e guardar os tempos das notas como dados; cada movimento visual vem de um som (kick, caixa, wobble); para música do usuário: grade de batidas com numpy + tempo de cada palavra cantada (Whisper com timestamps, conferido de ouvido); versos simples, refrão abre, maior momento na maior batida. |
| **Edição de vídeo gravado** (talking head) | cortar clipe bruto para Reels/TikTok | Transcrever com timestamps por palavra e montar a lista de cortes a partir do texto; cortar todo silêncio, vício de fala e falsa partida; gancho nos 2 primeiros segundos com a melhor frase; legendas palavra a palavra (1 a 2 palavras, negrito branco, sem cobrir o rosto); gráficos HTML compostos sobre o vídeo; música com licença para a plataforma, abafada sob a voz, −14 LUFS; final em frase limpa, sem fade. Proibido: stock aleatório, spam de emoji, zoom punch em toda frase. |
| **Código / 3D / jogo** (Three.js, jogos, cena de filme) | modelo 3D, jogo, seção de site, cena recriada | Plano-assinatura desenhado primeiro; câmera de cinema; luz de três pontos + ambiente + névoa + materiais físicos + ACES; modo `?render` determinístico; 60 fps no notebook; lista de planos com um movimento e um evento cada. Seção de site: 5 seções com contexto e layout próprios, controladas por rolagem. Jogo: regras e estado completos, arte feita em código. |

**Regras que se repetem em quase todas as versões completas (tome como padrão):**
1. Nunca invente telas, funções, números, citações ou depoimentos. Pesquise ou use o que o usuário deu.
2. `<inputs>` pede só o que falta e **dá o padrão** de cada item (capturar sozinho, tirar do site, compor em código).
3. **Storyboard cronometrado antes do código**, mostrado ao usuário, e depois "construa exatamente isso" sem novas perguntas.
4. Um quadro por batida (ou um quadro-chave por seção) renderizado e **olhado** antes do render final; consertar o que está apertado, sobreposto, fora da batida ou ilegível.
5. Lista de proibidos fixa: partículas, brilhos, lens flare, tremor, separação RGB, crossfade, degradê genérico, easing elástico, holds > 0,5 s, "qualquer coisa que pareça template", mais itens do tipo (stock, clip art, spam de emoji, parede de texto).
6. Texto que sai e texto que entra com **tempos separados**; forma que enche a tela escalada **além dos quatro cantos**; `will-change` nunca em algo que a câmera escala; posições de match cut **medidas em runtime**, não fixas no código.
7. Entrega = o MP4 final (e o HTML, quando pedido), com o resumo do que foi decidido.
