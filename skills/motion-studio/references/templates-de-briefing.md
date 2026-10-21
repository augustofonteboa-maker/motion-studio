# Templates de briefing (preencha antes de construir)

Use quando o pedido for vago ("faz um vídeo legal", "showreel", "promo do meu app"). Copie o template mais próximo, preencha o que o pedido já diz, decida o resto com bom gosto, **mostre ao usuário o conceito de uma linha + o mapa de batidas + 3 a 4 quadros** e só então construa. Estrutura e o porquê de cada bloco: `playbook.md`. Exemplos reais de cada tipo: `galeria/`.

Dois cuidados valem para todos:
- Texto exato, nome e números vêm do usuário. Nunca invente resultado, porcentagem, cliente ou funcionalidade.
- Escreva o briefing para si mesmo (curto, em português) e mostre ao usuário só o resumo: conceito, paleta, tempo, o que está banido.

---

## A. Showreel / "mostre o que você faz" (15 a 30 s)

```
<inputs>
Perguntar: nome/marca, logo (ou desenhar um símbolo simples), 1 cor de destaque, trilha própria (senão sintetizar). Padrões se pularem: cores e fonte da marca do projeto ou um preset (SKILL, seção 3).
</inputs>

<direction>
Showreel de {15} s. Conceito (uma linha, nomeada antes de começar): {ex.: "tinta vira tipo vira arquitetura"}. Elemento-ponte: {forma/ponto/bolinha} que aparece em todas as cenas. Toda cena nasce da anterior: formas, texto e cor se transformam, sem corte e sem fade.
Uma fonte (ou 2), no máximo 3 cores + preto e branco, uma linguagem de câmera.
Mostrar alcance, uma fatia igual cada: tipografia cinética, morph de formas, um momento 2D→3D (perspective), um momento de dados ou UI, título final.
Proibido: explosão de partículas, glow, lens flare, tremor de câmera, separação RGB, crossfade, degradê genérico, easing elástico, holds > 0,5 s, qualquer coisa que pareça template. (Cada "não" tem o "em vez de": ver playbook, seção 3.)
</direction>

<structure>
120 BPM, algo acontece em toda batida. Compasso 1: gancho. Um recurso por compasso, cada um saindo do anterior. Penúltimo compasso: o momento mais forte. Meio compasso final: título; último quadro = primeiro (loop).
</structure>

<build>
Kit desta skill. render(t) puro; molas (M.springAt) e expo; blur por velocidade (M.blur 6/12); trilha por cues (kick em toda batida, riser antes do último compasso, hit em cada troca); 16:9 e 9:16; folha de contato com 1 quadro por batida antes do render.
</build>

<start>
Diga o conceito e mostre o mapa de batidas e os quadros. Depois construa sem perguntar mais nada.
</start>
```

## B. Vídeo de lançamento / promo de produto (10 a 25 s)

```
<inputs>
Perguntar: nome do produto e a promessa em 1 linha; 3 a 5 momentos de UI para mostrar; logo; 1 cor de destaque; telas reais ou clipes reais (se houver); trilha com um "drop" claro (se houver). Padrões: tokens de design e wordmark do repositório do usuário, se existir; senão preset corporativo (#8) ou soft UI (#5).
Se o produto tem repositório: LER primeiro tokens, wordmark e capturas atuais. Preferir o mais novo. Não inventar funcionalidade.
</inputs>

<direction>
Mínimo e caro: uma ideia por plano, muito espaço vazio, uma cor de destaque, uma sans com tracking apertado. Type que sobe da máscara, match cuts, uma linguagem de câmera. Material real do produto; nunca cartões de placeholder. Sem ponto final nos textos da tela.
Proibido: anel de onda de choque, partículas, separação RGB, tremor, lens flare, neon, piso em grade, fundo piscando, easing elástico.
</direction>

<structure>
{120} BPM, {10} compassos de 2 s.
C1 gancho: palavras nas batidas. C2: uma palavra do gancho vira a UI do produto; cursor digita e clica de verdade. O drop: um círculo abre do botão e inunda uma cena escura. Depois um movimento por compasso: o resultado em tipografia gigante, parede de clipes/telas reais, celular com painel que vira resultado, estatísticas em cortes secos (só números do usuário), ticker de 3 palavras, logo, fade final.
</structure>

<build>
Kit desta skill, 60 fps (--fps 60), vídeo real = sequência de quadros (SKILL, seção 2). Cada corte numa batida forte; cada som de UI no pico medido (sound.py/cues).
</build>

<start>
Peça os inputs, mostre o storyboard em batidas e 3 quadros (gancho, UI, final), depois construa.
</start>
```

## C. Uma forma que nunca corta (UI motion, 12 a 30 s, quadrado ou 16:9)

```
<inputs>
Perguntar: 8 a 12 estados de UI para a forma virar (botão, loader, player, slider, toggle, abas, gráfico, ⌘K, toast...), preto e branco puro ou 1 cor de destaque, trilha ~120 BPM.
</inputs>

<direction>
Movimento de UI nível Dribbble. Uma forma, nunca corta: cada estado é o mesmo elemento mudando largura, altura, raio e cor enquanto o conteúdo troca com um blur curto. Cursor guia cada mudança com cliques e arrastes reais. Canvas cinza quente claro, componentes preto e branco, uma fonte de UI (Geist). Molas por toda parte, overshoot mínimo. A câmera dá zoom para cada estado ocupar o quadro. Último quadro = primeiro (loop).
Proibido: easing elástico, partículas, glow, degradê em UI, ícones com traço diferente, tempo morto, qualquer coisa que pareça template.
</direction>

<structure>
120 BPM, 7 compassos, algo em toda batida. {estado 1} → {estado 2} → ... → volta ao estado 1.
</structure>

<build>
Kit desta skill. Mola de valor que muda de alvo várias vezes = soma de uma mola por mudança (continua função pura do tempo). Duas bordas do indicador em molas diferentes (a da frente estica). Arraste = valor calculado pela posição do cursor; ao soltar, volta de onde estava. Gotchas: não aplicar will-change em nada que a câmera escala; texto que troca dentro do container que muda precisa de entrada e saída com tempos separados.
</build>

<start>
Mostre a lista de estados na grade de batidas antes de escrever código.
</start>
```

## D. Tipografia cinética / frase ou manifesto (5 a 20 s)

```
<inputs>
Perguntar: o texto exato (ordem exata), tom (monumento, punk, luxo, tech), cores.
</inputs>

<direction>
Conceito: cada linha muda a arquitetura do quadro, e a declaração final fica de pé sobre o que as palavras anteriores construíram. Cada palavra-chave recebe um papel físico (lintel, cabo, apoio, abertura, plataforma) que nasce das letras reais, nunca de ilustração atrás. Serifa de alto contraste para a fala, grotesca pesada para as palavras de carga, mono discreta para marcas de tempo. Legível sem áudio.
Proibido: clichês de cartaz de protesto, megafone, bandeira, multidão, vídeo de banco, texto nos cantos, tremor de câmera.
</direction>

<structure>
Storyboard por segundo ("0,00 a 3,00: frase 1 ... "), cada frase com uma mudança de layout e uma saída que entrega o quadro para a próxima.
</structure>

<build>
Kit desta skill (M.split por linhas, palavras e letras; deformação vetorial de baseline controlada). Entrada e saída do texto com tempos separados.
</build>

<start>
Mostre o storyboard em segundos e 3 quadros; depois construa.
</start>
```

## E. Explainer de ideia ou produto (10 a 20 s, sem locução)

```
Crie um filme de movimento de {15} s explicando {PRODUTO}. Sem locução, sem footage.
Estilo: canvas cor de papel, notas de marcador que se desenham, física de verdade, tipografia cinética gigante, trocas duras claro/escuro, uma ideia nova a cada 1,5 a 2 s, um som em cada impacto.
Texto: {UMA_LINHA}. Para {PÚBLICO}. Nomeie o que o produto aprende, nunca a abstração.
Regras: sem chrome (barra de tempo, timecode, fps); sem jargão de animador na tela; sem resultados inventados (%, múltiplos, clientes); nunca use {PALAVRAS_PROIBIDAS}.
Ofício: cores {…}; fontes {…} (display pesada para a tipografia cinética, manuscrita desenhada por stroke-dashoffset); squash/stretch, stagger, sobreposição, follow-through; um movimento principal por transição, sem push/slide/rotação genérica. Todo estado de partida definido em t=0.
Som: bateria cai na troca para o escuro e quando a bolinha está no ar, volta forte na tipografia e no logo. SFX: pops, rabiscos de caneta, whooshes, sub-hit no logo; mestre −14 LUFS.
```

## F. Cena 3D em tempo real (Three.js, 15 a 30 s)

```
<direction>
Construa {SUJEITO} como uma cena 3D em um único HTML com three.js. Estilo: {luz do dia suave e espaço branco | noite com contraste}.
O plano-assinatura é {o recuo em que os corredores de cartões viram as letras do nome, visto de cima}. Construa tudo em direção a ele.
Câmera de cinema, não orbit controls: cada plano usa um movimento nomeado (dolly, crane, órbita, push-in, rack focus), com ease, e nunca atravessa geometria.
Luz e material: luz principal, de preenchimento e de recorte com sombras suaves, mapa de ambiente para reflexos, névoa, materiais físicos com rugosidade variada, tonemapping ACES. Nada com material padrão.
Movimento: as coisas reagem umas às outras (o que é atingido se move, o que está perto acende), com molas ou física simples, nunca tween linear.
Proibido: material e luz padrão, rótulos de texto flutuando, glow em tudo, um objeto girando devagar como ideia inteira, qualquer coisa com cara de demo técnica.
</direction>

<structure>
Planos de ~3 s: 1 macro em foco raso com rack focus; 2 dolly para trás revelando a escala; 3 crane sobre o conjunto; 4 um elemento se solta e vem até a câmera com peso; 5 o plano-assinatura; 6 assenta no nome/URL.
</structure>

<build>
HTML único, three.js por CDN, tudo modelado em código. MeshPhysicalMaterial, PMREM com RoomEnvironment, sombras suaves, ACES, antialiasing; profundidade de campo só onde precisa. 60 fps no notebook. Modo ?render em que todo quadro é calculado a partir do tempo (aleatório com semente, sem relógio) para capturar com --gl no render.mjs. Capture 1 quadro por plano e corrija o que estiver chapado, serrilhado, atravessando ou ilegível.
Gotchas: definir shadow bias (senão listras de acne), near/far justos (senão tremulação ao longe), semear todo aleatório (senão o render não bate com a prévia).
</build>

<start>
Descreva o plano-assinatura e a lista de planos em poucas linhas; depois construa e entregue o HTML e o MP4.
</start>
```

---

## G. Vídeo de produto com pesquisa (a família mais comum: 20 a 60 s)

```
<inputs>
Peça só o que eu não dei, com padrão: 3 a 6 telas reais da interface (padrão: capture você mesmo), logo (padrão: tire do site), cores e fonte da marca (padrão: as do próprio produto), trilha com batida clara (padrão: componha em código).
</inputs>

<direction>
Filme de produto de {40} s para {PRODUTO}. Pesquise antes: o que faz, para quem é, interface e marca reais. Use o que achar; nunca invente telas, funções ou números.
Escolha UM objeto-fio do próprio produto (cursor, botão-chave, a marca do logo, um dado) e faça cada cena ser uma transformação dele: começa na UI, muda de forma ou papel a cada cena, vira o logo no cartão final. Nomeie antes do storyboard.
Reconstrua a UI real em camadas vetoriais para as partes se moverem sozinhas; nunca deslize um print chapado. Cursor guia toda interação com cliques e arrastes reais; câmera estilo Screen Studio.
Marca: cores e fonte dela. Uma fonte, um destaque usado só no objeto-fio e na palavra-chave, muito espaço vazio.
Regras de movimento: molas com overshoot pequeno; nada surge do nada (cresce, desdobra ou é revelado por máscara); a câmera nunca fica parada (push de 1,0 a 1,04 por cena; cada cena começa no zoom em que a anterior terminou); algo muda em toda batida.
Proibido: partículas, glow, lens flare, tremor, separação RGB, crossfade, degradê genérico, easing elástico, holds > 0,5 s, qualquer coisa que pareça template.
</direction>

<structure>
120 BPM. Storyboard cronometrado primeiro, batida a batida; depois construa exatamente ele.
Gancho (1º compasso): o problema em 3 a 5 palavras, em tipo grande que o objeto-fio interrompe.
Meio: 3 a 4 momentos do produto fazendo o que faz de melhor; cada um começa com o objeto-fio virando o próximo elemento de UI e fecha uma ideia legível.
Payoff: o momento mais forte na maior batida; o objeto-fio vira o logo; cartão final com nome e chamada de uma linha.
</structure>

<build>
Kit desta skill, 60 fps, trilha por cues, 16:9 e 9:16. Um quadro por batida antes do render. Posições de match cut medidas em runtime. Forma que enche o quadro escala além dos 4 cantos. Texto que sai e entra com tempos separados. Sem will-change no que a câmera escala.
</build>

<start>
Mostre o que encontrou, o objeto-fio e o storyboard batida a batida; depois construa sem perguntar mais nada.
</start>
```

## H. Explainer com narração (1 a 3 min)

```
<direction>
Explainer de {3} min sobre {TEMA} para {PÚBLICO}. Pesquise antes e confira cada fato; nunca invente números ou citações.
Toda a explicação é UM diagrama num espaço contínuo: a câmera entra numa parte para explicá-la e recua para mostrar como ela se encaixa, então o espectador sempre sabe onde está. Toda ideia ganha imagem antes de palavra; o rótulo fica sobre a coisa que nomeia, nunca em legenda lateral.
Estilo: diagramas simples que se constroem enquanto são explicados. Narração em {IDIOMA/VOZ} com legendas sincronizadas linha a linha.
Regras de movimento: uma coisa se move por vez e o olho sempre sabe para onde olhar; setas animam na direção real do fluxo; no máximo 7 palavras na tela de uma vez, 0,3 s por palavra.
Proibido: paredes de texto, listas com marcadores, degradê genérico, ícones de banco, glow, crossfade, qualquer coisa que pareça template.
</direction>

<structure>
Storyboard cronometrado primeiro. Gancho: a pergunta que o espectador já tem, feita sobre a primeira imagem. Meio: 3 a 5 passos; cada um entra numa parte do diagrama, mostra um exemplo concreto e recua enquanto a parte se encaixa. Payoff: recuo final com o diagrama completo e um resumo de uma linha.
</structure>

<build>
1. Escreva o roteiro da narração linha a linha, marcando o que está na tela em cada uma.
2. Gere cada linha em voz (TTS) e cronometre a animação pela duração real de cada áudio.
3. Kit desta skill; trilha baixa sob a voz; legendas sincronizadas.
4. Antes do render final, exporte um quadro-chave de cada seção e confira: nada apertado, sobreposto ou ilegível.
</build>

<gotchas>
Confira todo número e nome numa fonte. Mantenha o layout do diagrama fixo para o zoom nunca reembaralhar. Texto que sai e que entra com tempos separados.
</gotchas>

<start>
Mostre o roteiro, o diagrama e o storyboard cronometrado; depois construa sem perguntar mais nada.
</start>
```

## I. Curta animado mudo (30 s a 2 min)

```
<direction>
Curta animado de {45} s: {HISTÓRIA OU "uma história que você inventa"}. Estilo livre, a serviço da história, feito inteiramente em código.
Escreva a história primeiro: o personagem principal quer uma coisa; três tentativas que falham de formas diferentes e crescentes; uma virada; um final que acerta e uma piada de último segundo depois dele.
Mudo: sem diálogo e sem texto. O som conta o que a imagem não mostra.
Atuação: todo personagem lê em silhueta; toda ação tem antecipação antes e follow-through depois; squash & stretch no que é mole; os olhos se movem primeiro e o corpo segue; poses-chave seguradas por ≥ 6 quadros.
Encenação: uma ação por plano, enquadrada para ler na hora; corte na ação, casando o movimento através do corte; a cor muda com o clima.
Proibido: glow, lens flare, degradê genérico, clip art de banco, tudo se movendo ao mesmo tempo.
</direction>

<structure>
Lista de planos primeiro, uma ação por plano, com tempos; depois construa exatamente ela. Os planos se ligam por movimento e som, nunca por crossfade.
</structure>

<gotchas>
Pés e mãos travados onde tocam as coisas (contato nunca desliza). Mesmas proporções do personagem em todo plano. Cada piada ganha um respiro de imobilidade antes de acontecer.
</gotchas>

<start>
Mostre a história em poucas linhas e a lista de planos; depois construa sem perguntar mais nada.
</start>
```

## J. Música ou lyric video (15 a 60 s)

```
<direction>
{Visual de música de 30 s: faixa original estilo X a N BPM escrita em código, com visuais guiados por ela} OU {Lyric video de 30 s para a música anexada, com letra e animação sincronizadas à voz e à batida}.
Escreva a faixa primeiro (bateria, sub, linha melódica, arranjo real: intro, build, drop) e guarde os tempos de nota e de golpe como dados; todo movimento visual nasce de um som (kick, caixa, wobble). Para música do usuário: grade de batidas com numpy e o tempo de cada palavra cantada (Whisper com timestamps, conferido de ouvido).
Visual: tipografia cinética que atua cada linha; uma ideia visual que cresce com a música; formas geométricas ousadas e tipo em duas cores, atingidas pelo grave.
Proibido: a lista padrão (SKILL, seção 11).
</direction>

<structure>
Siga as seções da música: versos simples, refrão abre, o maior momento cai no maior momento musical (o drop numa batida forte). Intro, build que aperta, drop, saída curta.
</structure>

<start>
Mostre o tempo da letra (ou o arranjo) e um storyboard; construa; assista com som e corrija toda palavra adiantada ou atrasada.
</start>
```

## K. Cortar um vídeo gravado (talking head → Reels/TikTok, 30 a 60 s)

```
<direction>
Cortar o clipe bruto em uma edição rápida e divertida de {60} s para TikTok e Reels. Manter as melhores falas e cortar toda pausa, vício de fala e falsa partida. Legendas palavra a palavra (negrito branco, 1 a 2 palavras por vez, nunca cobrindo o rosto), gráficos que ilustram os pontos-chave, música animada com licença que permita a plataforma.
Proibido: stock aleatório, spam de emoji, zoom punch em toda frase, legenda cobrindo o rosto.
</direction>

<structure>
Gancho nos 2 primeiros segundos com a melhor frase, mesmo que não seja a primeira. Uma ideia por vez. Termina numa frase limpa, não num fade.
</structure>

<build>
1. Transcreva com timestamp por palavra (whisper) e monte a lista de cortes a partir do texto.
2. Corte com ffmpeg em 1080x1920, escondendo os cortes secos com pequenas variações de zoom.
3. Legendas e gráficos em HTML renderizados e compostos sobre o vídeo.
4. Música abafada sob a voz, −14 LUFS. Assista em velocidade normal e conserte todo corte que corta uma palavra.
</build>

<start>
Peça o clipe e mostre a lista de cortes com timestamps antes de editar.
</start>
```
