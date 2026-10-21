# Templates de briefing (preencha antes de construir)

Use quando o pedido for vago ("faz um vídeo legal", "showreel", "promo do meu app"). Copie o template mais próximo, preencha o que o pedido já diz, decida o resto com bom gosto, **mostre ao usuário o conceito de uma linha + o mapa de batidas + 3 a 4 quadros** e só então construa. Estrutura e o porquê de cada bloco: `playbook-prompt-motion.md`. Exemplos reais de cada tipo: `galeria/`.

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
