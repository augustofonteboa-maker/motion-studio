# motion-studio

**Português** · [English](README.en.md) · [Español](README.es.md)

Skill de **motion design com o Claude**. Você pede uma vinheta, uma logo animada, uma transição, a abertura de uma aula, um showreel ou um post animado, e o Claude cria a animação em código (HTML, SVG e Canvas) e entrega o vídeo pronto em MP4, nas versões **16:9 e 9:16**, com motion blur e trilha sincronizada.

![Prévia do showreel de teste feito pela skill](docs/demo.gif)

Vídeos de teste feitos do zero pela skill: [16:9](docs/Demo_MotionStudio_16x9_1920x1080.mp4) · [9:16](docs/Demo_MotionStudio_9x16_1080x1920.mp4)

## O que a skill sabe fazer

- **Tipografia cinética:** texto subindo de dentro da máscara, cascata de letras, decodificação, datilografia, contadores, letreiros
- **Logo:** construção por grade, partículas formando a marca, montagem por peças, morph, travamento com o nome, brilho que varre
- **Transições:** íris em camadas, zoom através da forma, whip pan com desfoque direcional, persianas, match cut, glitch
- **UI de produto:** cursor em arco com clique, botão que vira loader e vira card, fluxo de prompt, mockup de celular
- **Dados, partículas, câmera e personagem:** gráficos que crescem, campo de fluxo, paralaxe, tremor de impacto, bolinha com squash & stretch
- **Direção de arte neutra:** usa a marca do cliente ou um de 12 presets (editorial, tech noturno, luxo, brutalista, corporativo e outros)
- **Acabamento de estúdio:** blur adaptativo (até 12 amostras nos movimentos rápidos), cor marcada em BT.709, loudness em −14 LUFS, versão transparente (ProRes 4444, WebM e fundo verde)
- **Som:** trilha sintetizada a partir dos eventos da animação, em 6 climas (grave, épico, tech, clean, ambient, pop)
- **Briefing de campeão (novo na 1.1):** pedido vago vira um briefing de 6 blocos (conceito de uma linha, elemento-ponte, look travado, lista de proibidos, tempo em BPM, build e revisão) antes de qualquer código
- **Anti-"cara de IA" (novo na 1.1):** lista de proibidos aprendida em 230 prompts reais (glow, partículas sem origem, crossfade, tempo morto, texto nos cantos...), cada item com o que fazer no lugar
- **Base de inteligência (nova na 1.3):** protocolo de 9 passos, roteador de 14 tipos de pedido (em qualquer idioma e nível de detalhe), catálogo de 60 cenas com receita no kit, direção de arte por nicho, análise crítica da galeria com rubrica de 100 pontos para autoavaliação, guia de som e ritmo e banco de 120 ideias, em `skills/motion-studio/references/inteligencia/`
- **Biblioteca de referência (nova na 1.1):** playbook com o que os 230 melhores prompts públicos têm em comum, 11 templates de briefing (showreel, lançamento, forma que nunca corta, tipografia, explainer, 3D) e a galeria completa dos prompts por categoria, em `skills/motion-studio/references/`

## Como instalar no Claude (app ou site)

1. **Baixe o arquivo da skill:** abra [`motion-studio.zip`](motion-studio.zip) aqui no repositório e clique no botão de download (ícone de seta, "Download raw file"). Não descompacte.
2. **Ligue a execução de código:** no Claude, vá em **Settings › Capabilities** (Configurações › Capacidades) e ative **Code execution and file creation**.
3. **Envie a skill:** vá em **Customize › Skills**, clique em **+**, depois em **+ Create skill** e escolha **Upload a skill**. Selecione o `motion-studio.zip`.
4. **Ative:** confira se o botão ao lado de *motion-studio* está ligado na lista de skills.
5. **Use:** abra uma conversa e peça, por exemplo:
   - *"Faz uma vinheta de 8 segundos para a marca da minha cliente, uma clínica odontológica, com a logo em anexo."*
   - *"Cria uma transição de 1 segundo para as aulas do meu curso, com fundo transparente."*
   - *"Anima esse resultado: +248% de alcance em 30 dias, para Reels."*

O Claude reconhece o pedido e carrega a skill sozinho. Em contas Team ou Enterprise, um administrador precisa permitir skills e execução de código para a organização.

## Como instalar no Claude Code

Dentro do Claude Code, rode:

```text
/plugin marketplace add augustofonteboa-maker/motion-studio
/plugin install motion-studio@motion-studio
```

Ou copie a pasta da skill manualmente:

```bash
git clone https://github.com/augustofonteboa-maker/motion-studio.git
mkdir -p ~/.claude/skills
cp -r motion-studio/skills/motion-studio ~/.claude/skills/
```

## O que precisa estar instalado

No Claude (app/site) o ambiente na nuvem já tem quase tudo. No seu computador, com Claude Code:

- Node 18 ou mais novo
- Playwright com Chromium: `npm i -g playwright && npx playwright install chromium`
- ffmpeg (Mac: `brew install ffmpeg`)
- Python 3 com numpy e scipy: `pip3 install numpy scipy`

## O que tem no repositório

```text
motion-studio.zip                 skill empacotada para enviar no Claude (português)
motion-studio-en.zip              the same skill in English
motion-studio-es.zip              la misma skill en español
skills/motion-studio-en/ e skills/motion-studio-es/   a skill completa em inglês e em espanhol (SKILL.md, kit, exemplos e references traduzidos)
skills/motion-studio/
  SKILL.md                        instruções da skill (fluxo, direção de arte, técnicas, QA)
  kit/motion.js                   runtime de animação (easing, molas, máscaras, morph, partículas, câmera)
  kit/render.mjs                  renderizador: quadro a quadro, motion blur, ffmpeg em paralelo
  kit/sound.py                    trilha sincronizada aos eventos da animação
  kit/fonts.mjs                   baixa fontes do Google Fonts
  kit/template.html               cena-base para começar
  examples/demo-reel.html         o showreel de teste, completo
  references/inteligencia/                  protocolo, roteador de pedidos, catálogo de cenas, nichos, análise crítica, som e ritmo, banco de ideias
  references/playbook.md      o que 230 prompts reais ensinam (anatomia, proibidos, renderizadores)
  references/templates-de-briefing.md       11 modelos de briefing prontos
  references/galeria/                       230 prompts reais por categoria (comece pelo 00_INDEX.md)
.claude-plugin/marketplace.json   instalação pelo Claude Code
docs/                             prévias e vídeos de teste
```

## Créditos

Criada por [Augusto Fonte](https://www.instagram.com/_augustofonte/) com o Claude. Licença MIT: pode usar, adaptar e compartilhar, mantendo o aviso de licença.

---

**English / Español:** a skill também existe em inglês (`skills/motion-studio-en`, [README](README.en.md), `motion-studio-en.zip`) e em espanhol (`skills/motion-studio-es`, [README](README.es.md), `motion-studio-es.zip`).

## Base de referência

A biblioteca em `skills/motion-studio/references/` é a base de estudo do Augusto Fonte: 230 prompts públicos de criadores, analisados e reorganizados para tornar a skill mais inteligente. Cada prompt pertence ao criador citado na entrada; o playbook e os templates são texto próprio.
