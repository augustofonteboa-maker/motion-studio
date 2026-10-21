# Inteligência da skill: protocolo para qualquer pedido

Esta pasta é a memória crítica da skill: o que 232 vídeos reais feitos no Claude (e os prompts de cada um) ensinam, já filtrado, comparado e transformado em decisões. **Leia este arquivo sempre que o pedido for um vídeo de verdade.** Os demais são consultados sob demanda.

| Arquivo | Para quê |
|---|---|
| `01_roteador-de-pedidos.md` | Descobrir **que tipo de vídeo** o usuário quer, mesmo com pedido vago, gíria, outro idioma ou muito detalhado. Defaults por tipo. |
| `02_catalogo-de-cenas.md` | 60 padrões de cena/momento com receita no kit, quando usar e erro comum. |
| `03_nichos-e-direcao-de-arte.md` | Direção de arte por segmento (fintech, música, IA, dev tool, comida, educação, game, hype edit...). |
| `04_analise-critica.md` | O que os dados dizem **e onde enganam**; armadilhas; **rubrica de 100 pontos** para se autoavaliar antes de entregar. |
| `05_som-e-ritmo.md` | Conta de BPM, estrutura de música, SFX, voz, legendas, o que o kit faz e o que exige passo extra. |
| `06_banco-de-ideias.md` | 120+ conceitos de uma linha, por categoria, para quando o pedido é "me surpreenda". |
| `../playbook.md`, `../templates-de-briefing.md`, `../galeria/` | O resumo de 230 prompts, 11 templates e os prompts completos. |

## O protocolo (9 passos, nesta ordem)

1. **Classifique** o pedido com o roteador (`01`). Um pedido = um tipo principal (às vezes dois: "showreel + produto").
2. **Meça a especificação.** Conte o que o usuário já decidiu: tema, texto, marca, duração, formato, música, estilo. Três níveis:
   - **Vago** ("faz um vídeo foda", "go all out"): você decide **tudo**, com ousadia e coerência; mostra conceito + mapa de batidas + 3 quadros e **só pergunta se faltar texto ou marca que não dá para deduzir**.
   - **Médio** (tema + duração ou marca): complete o resto com os defaults do tipo; pergunte **uma vez**, no máximo 3 itens.
   - **Detalhado** (storyboard, paleta, texto exato, tempos): **o pedido manda**. Não "melhore" a ideia do usuário; execute com rigor, resolva lacunas com defaults e aponte apenas riscos reais (ex.: texto longo demais para o tempo).
3. **Pesquise antes de inventar.** Marca/produto citado, site, repositório, arquivos anexos: leia primeiro (tokens, logo, telas reais, textos). Sem acesso à internet/arquivos: diga o que assumiu e peça só o essencial. **Nunca invente tela, função, número, cliente ou depoimento.**
4. **Escreva o conceito em uma linha** e escolha o **elemento-ponte**. Se não consegue dizer em uma linha, o vídeo vai virar desfile de efeitos.
5. **Escolha a direção de arte** (`03`): marca do usuário > nicho > preset. Trave: 1 a 2 fontes, ≤ 3 cores + preto/branco, 1 destaque, 1 linguagem de câmera.
6. **Monte o mapa de batidas** em BPM/compassos (`05`) com os padrões do catálogo (`02`): gancho (≤ 1,5 s), 3 a 5 ideias visuais, momento mais forte no penúltimo compasso, fechamento. **Menos ideias, mais bem feitas.** Referência: ~4 ideias visuais em 15 s.
7. **Construa com o kit** (SKILL, seções 1 a 8): cena única, `render(t)` puro, blur, cues.
8. **Autocrítica com a rubrica** (`04`): olhe os quadros por batida, pontue, **corrija tudo abaixo de 80** antes de mostrar. Se após a correção ainda houver ponto fraco, diga qual e por quê.
9. **Entregue** com 2 a 4 linhas: o conceito, as decisões que tomou, o que o usuário pode ajustar. Ofereça a versão vertical/curta/sem som quando fizer sentido.

## Regras que valem para qualquer pedido

- **Idioma:** responda no idioma do usuário; o texto do vídeo segue o idioma do pedido/da marca (pedido em japonês, vídeo em japonês, salvo instrução). Confira acentos, caracteres e fonte que cubra o alfabeto (CJK: Noto Sans/Serif JP/SC/KR via `fonts.mjs`).
- **"Faça o melhor que puder / me impressione / go all out / destroy X":** é pedido vago de **ambição alta**, não de efeitos demais. Ambição = um conceito forte, execução limpa, restrição. O oposto do "mais coisas".
- **Pedido contraditório ou paródia** ("showreel terrível de propósito"): obedeça a intenção (é um vídeo de verdade, com timing e intenção de piada: o erro tem que ser **bem feito**).
- **Pedido fora do que o kit faz bem** (jogo interativo, 3D complexo, edição de vídeo gravado, voz em outro idioma, Manim): diga o caminho (`playbook.md`, seção 7), a ferramenta extra e o que muda; não force 2D em algo que pede 3D nem entregue "quase".
- **Material do usuário vence a galeria.** A galeria inspira estrutura e ideias; marca, texto, tom e restrições do usuário são lei.
- **Escopo e tempo:** vídeo de 15 s é o padrão do mercado (35% dos prompts); 30 s para produto com explicação; 60 s+ só com narração/estrutura de história. Não estique para impressionar.
- **Formato:** 1920×1080 a 60 fps é o padrão da galeria (o kit entrega 30 fps por padrão; use `--fps 60` quando houver UI fluida, cursor ou câmera rápida). 9:16 não é "cortar" o 16:9: **recomponha** (`M.pick`).
- **Iteração:** o primeiro render raramente é o melhor. Prefira 2 ciclos curtos (folha de contato → correção) a um render final cego.
- **Honestidade:** diga o que não foi verificado (ex.: "não ouvi o áudio", "não testei no celular"). Não prometa resultado "de estúdio" sem ter olhado os quadros.
