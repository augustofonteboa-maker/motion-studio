# Roteador de pedidos: de qualquer frase ao vídeo certo

Pedidos reais da galeria (em português, inglês, espanhol, francês, chinês, japonês, coreano) caem em 14 tipos. Identifique o tipo pelo **objetivo**, não pelas palavras. Cada linha dá: sinais, formato padrão, duração padrão, o que perguntar (no máximo uma vez), o template (`../templates-de-briefing.md`) e a armadilha principal.

Legenda dos defaults: **F** formato · **D** duração · **BPM** · **S** som.

| # | Tipo | Sinais no pedido (qualquer idioma) | Defaults | Template | Armadilha principal |
|---|---|---|---|---|---|
| 1 | **Showreel / "mostre o que você faz"** | showreel, portfólio, résumé, "go all out", "show off", "me impressione", "mostra que é bom", 全力, 凄い | F 16:9 · D 15 s (10 a 30) · 120 BPM · S trilha + SFX por batida | A | desfile de efeitos sem conceito: nomeie **um** conceito e uma ponte |
| 2 | **Lançamento / promo de produto, app, site, repositório** | launch, promo, PV, vídeo de produto, README hero, "mostra as features", link de site, nome de produto | F 16:9 (+9:16) · D 15 a 40 s · 120 BPM | B ou G | inventar tela/função; usar print chapado em vez de UI em camadas |
| 3 | **UI motion / "uma forma que nunca corta"** | UI animation, micro-interações, Dribbble, componente, "botão que vira" | F 1:1 ou 16:9 · D 15 a 30 s · 120 BPM | C | transição por corte/fade; mola exagerada |
| 4 | **Tipografia cinética / frase / manifesto / lyric** | kinetic type, texto animado, citação, letra, discurso, poster | F 16:9 ou 9:16 · D 5 a 30 s · BPM da música | D, J | texto ilegível, sem hierarquia, tempo de leitura curto |
| 5 | **Logo / vinheta / abertura / sting** | logo reveal, vinheta, intro, abertura de aula, ident | F 16:9 + 9:16 · D 3 a 10 s (+ versão curta) · S impacto grave | SKILL §6 | hold final curto; logo redesenhada (use a real) |
| 6 | **Explainer / educativo / tutorial / notícia / timeline** | explica, "como funciona", história de, resumo, tutorial, aula, receita, notícia | F 16:9 · D 30 s a 3 min · narração opcional | E ou H | parede de texto; fatos não conferidos; ritmo sem pausa para ler |
| 7 | **Dados / gráfico / post de resultado** | número, KPI, resultado, +248%, gráfico, relatório | F 9:16 ou 1:1 · D 6 a 10 s · loop | SKILL §6 | números inventados; gráfico sem herói |
| 8 | **Curta animado / história / personagem** | short film, animação, personagem, "uma história", mascote | F 16:9 ou 9:16 · D 30 s a 2 min · mudo + som | I | roteiro sem desejo/obstáculo; atuação sem antecipação |
| 9 | **Música / visualizer / lyric** | música, beat, batida, visual de áudio, 140 BPM, dubstep, "sincronizado" | F 1:1 ou 16:9 · D 15 a 60 s | J | visual que não nasce do som; sincronia no olho em vez de medida |
| 10 | **Hype edit / meme / social caótico / viral** | edit, "vai pesado", brain rot, viral, trend, anime edit, crypto hype | F 9:16 · D 8 a 20 s · BPM alto, cortes secos | ver §Hype abaixo | confundir caos com bagunça: cortes **em batida**, uma ideia por corte |
| 11 | **Cena 3D / filme recriado / modelo / tour** | three.js, 3D, avião, data center, pintura, "recria a cena de" | F 16:9 · D 15 a 90 s | F | câmera de orbit padrão, material padrão, sem plano-assinatura |
| 12 | **Jogo / interativo / site animado** | game, jogo, "para jogar", seções com scroll, HTML interativo | HTML sem MP4 (ou MP4 de gameplay) | (fora do núcleo) | prometer MP4 onde o pedido é interativo; avisar a mudança |
| 13 | **Edição de vídeo gravado / legendas / música em vídeo existente** | corta o clipe, legenda, adiciona música, versão vertical | F 9:16 · D 30 a 60 s | K | cortar palavra; legenda tapando rosto |
| 14 | **Remix / "faz parecido com" / referência em vídeo** | "igual esse", "baseado nesse vídeo", "uma versão com X" | herda do original | por tipo | copiar quadro a quadro; **estude** ritmo/tempos/fontes e crie algo próprio |

## Como decidir quando houver mais de um tipo

- "Showreel **para** o meu produto" = tipo 2 com ambição do tipo 1 (use B/G, ritmo de A).
- "Explainer **com** música e animação pesada" = tipo 6; música baixa sob a voz; siga H.
- "Vinheta **e** versão para Reels" = tipo 5 com formatos 16:9 e 9:16 + sting curto.
- Em dúvida real entre dois tipos, pergunte **uma** coisa: "isto é para mostrar o seu produto ou a sua habilidade?".

## O que perguntar (e o que nunca perguntar)

Pergunte **só** o que você não consegue deduzir e que muda o resultado: **(a)** texto exato (se for obrigatório), **(b)** marca/logo (se for do usuário), **(c)** produto/URL (se citou sem link), **(d)** música própria (só se houver). Tudo o mais: decida, conte, ofereça trocar.
Nunca pergunte: paleta (sugira), fonte (escolha), duração (use o default do tipo), estilo (proponha o conceito).
Formato da pergunta: uma mensagem, numerada, com o **padrão** de cada item ("se não responder, uso X").

## Defaults de tipo por plataforma

| Destino | Formato | Duração | Observação |
|---|---|---|---|
| Reels/TikTok/Shorts | 9:16 1080×1920 | 8 a 30 s | respeite `M.safe`; gancho em ≤ 1 s; legível sem som |
| YouTube / site / apresentação | 16:9 1920×1080 | 15 a 90 s | dá para respirar; título nos 3 primeiros s |
| X / LinkedIn / feed | 16:9 ou 1:1 | 15 a 30 s | primeiro quadro bom (capa); funciona sem som |
| README / landing hero | 16:9, loop | 10 a 20 s | sem som obrigatório; último quadro = primeiro |
| Aula / curso | 16:9 | 5 a 8 s (abertura) | assinatura de série + versão overlay transparente (`--alpha`) |

## Tipo 10: hype edit (curadoria própria)

Pedidos como "faz um edit do X × Y que vai pesado" têm pouca informação e muita expectativa. Receita: 9:16, 10 a 20 s, **BPM alto (140 a 170) ou drop claro**; 6 a 12 cortes **todos em batida**; um elemento-ponte (silhueta, símbolo, tipografia gigante); tipografia agressiva com troca de peso; zoom-punch **só na batida forte** (uma vez a cada 2 compassos, não em toda frase); cores de 2 tons + preto; impacto = cue `big` + `M.shake` curto no quadro exato; fecho em quadro congelado de 0,5 s (única exceção ao "sem hold"). Propriedade intelectual: use formas, cores e tipografia **inspiradas** no universo citado; **não reproduza personagem protegido** nem logos de terceiros que o usuário não forneceu; diga isso em uma linha.

## Pedidos especiais

- **"Parodie/mostre um showreel horrível de propósito"**: é um vídeo de verdade. Escolha 4 a 5 "erros de iniciante" reconhecíveis (fonte do sistema, WordArt, transição de PowerPoint, texto fora do centro, brilho em tudo) e **execute cada um com timing perfeito**; a graça nasce do contraste entre erro e execução.
- **"Sem usar minhas ferramentas/memória/skills anteriores"**: ignore preferências anteriores só no que é estilo; o kit continua sendo a infraestrutura (diga em uma linha).
- **"Pode trabalhar 10 horas"**: não é licença para inflar; use o tempo para **iterar mais ciclos de revisão**, não para pôr mais efeitos.
- **Link do site/repositório**: leia primeiro (tokens de design, logo, textos, capturas atuais). Prefira o mais novo. Se for logo em raster, vetorize ou peça o SVG; **nunca redesenhe** a marca real.
- **Vídeo de referência anexo**: extraia quadros (`ffmpeg -vf fps=2`), meça duração dos planos e batidas, liste fontes/cores/técnicas; **crie algo seu** com a mesma sofisticação (nunca copie quadro a quadro).
