# Som e ritmo: BPM, música, efeitos, voz e legendas

## 1. A conta do ritmo

`batida = 60 / BPM` segundos · `compasso (4 batidas) = 240 / BPM` segundos. No kit: `bpm` no `M.boot`, `M.beat(n)` devolve o tempo da batida `n`.

| BPM | Batida | Compasso | Quadros/batida a 30 fps | Gênero e uso |
|---|---|---|---|---|
| 90 | 0,667 s | 2,67 s | 20 | hip-hop lento, luxo, institucional |
| 100 | 0,600 s | 2,40 s | 18 | corporativo moderno, explainer com ritmo |
| **120** | **0,500 s** | **2,00 s** | **15** | **padrão de showreel/launch** (compasso = 2 s: 8 compassos = 16 s) |
| 124 | 0,484 s | 1,94 s | 14,5 | house (ritmo "de produto" mais leve) |
| 128 | 0,469 s | 1,88 s | 14,06 | house/eletrônica, tech |
| 130 | 0,462 s | 1,85 s | 13,85 | tech, drop de produto |
| 140 | 0,429 s | 1,71 s | 12,86 | dubstep, hype, esporte |
| 150 a 170 | 0,40 a 0,35 s | 1,6 a 1,4 s | 12 a 10,6 | drum & bass, hype edit curto |

**Escolha do BPM:** use 120 como default seguro. Com música definida, **meça** (não adivinhe). Sem música: escolha por gênero e pela duração (15 s a 120 BPM = 30 batidas = 7,5 compassos; para fechar em compassos inteiros, 16 s = 8 compassos).
Em 124 BPM (fração) planeje cortes em tempo real (`0,048 + 0,4838·k`) e **não em quadros inteiros**; o corte "duro" vale 2 quadros **antes** da batida para o olho sentir em cima.

## 2. Estrutura de música para vídeo (15 a 30 s)

| Trecho | Função | Visual correspondente |
|---|---|---|
| Intro (1 compasso) | gancho; poucos elementos | palavra-gancho, objeto-fio nasce |
| Build (2 a 3 compassos) | tensão: kick entra, riser | ações de UI, digitação, cursor |
| **Drop** (1 compasso) | maior energia | flood, corte duro, revelação principal |
| Sustentação (2 a 3 compassos) | desenvolvimento | cards, bento, dados, câmera |
| Clímax (penúltimo) | o momento mais forte | plano-assinatura, número herói |
| Saída (½ a 1 compasso) | resolução | objeto-fio vira logo, cartão final |

Com música de banco: comece a faixa **N batidas antes do drop** para o drop cair na cena certa. Com trilha sintética (kit): os cues já nascem das ações.

## 3. Cues do `sound.py` e como usar

| Cue | Quando |
|---|---|
| `hit` / `big` | impacto leve / grande: revelação, flood, final. **No quadro exato** do evento. |
| `rise {len}` | riser: cresce durante antecipação/contração e **termina no hit** |
| `whoosh {len}` | trocas de cena e movimentos rápidos (whip, íris) |
| `pop` | elemento que aparece (card, ícone, palavra) |
| `tick` | contagem, cursor, micro-eventos raros |
| `click` | clique do cursor; **sempre no quadro do clique** |
| `type {len, rate}` | digitação (len = duração; rate = caracteres/s) |
| `notes {notes, step}` | arpejo curto de abertura/fechamento |
| `pulse {n, every}` | pulso de fundo constante (tecno) |
| `swell {len}` | pad crescendo em momento emocional |
| `end` | assinatura final |
| `chord` | acorde de apoio |

Moods: **`grave`** (padrão: cinematográfico em Ré menor, pad quente, piano macio, impactos graves; sem agudos e sem vento), `epico`, `tech`, `clean`, `ambient`, `pop`; tom com `--key`.

**Regras de sonorização:**
1. **Um som por elemento que aparece; silêncio no resto.** Nada de som em todo micromovimento.
2. **Pico no quadro.** O impacto cai exatamente no quadro da revelação (compare o tempo do cue com o quadro).
3. **Silêncio antes do impacto:** 0,3 a 0,5 s mais "seco" dá peso.
4. **Camadas:** música (−14 LUFS no mestre), SFX baixos sob a música; voz em primeiro plano, música **abafada** (ducking) sob a voz.
5. **Mestre:** −14 LUFS, pico real −1,5 dBTP (`render.mjs` normaliza em 2 passagens; `--lufs` muda). Remedir depois do AAC.
6. **Sem som pedido:** entregue também a versão com trilha e diga que dá para tirar.
7. **Música de terceiros:** só CC0, licenciada para a plataforma ou **gerada**; registre a fonte; evite "música em alta" sem licença.

## 4. Música do usuário (ou de banco): alinhar com medição

O kit **não analisa** faixas existentes; é um passo extra:
1. Carregue o áudio (numpy/scipy ou ferramenta equivalente), calcule **andamento**, **grade de batidas**, **energia por compasso** e o **drop**.
2. **Calibre a grade nos kicks reais** (a grade teórica deriva).
3. Marque cada corte numa batida forte e cada hit de UI numa batida; posicione cada efeito pelo **pico medido** do arquivo (não pelo início).
4. Passe o arquivo em `--audio` e os tempos medidos em `M.beat`/`M.cue`.

## 5. Voz, narração e legendas

Fluxo para explainers e vídeos narrados (ferramenta de voz **externa ao kit**):
1. **Roteiro primeiro**, linha a linha, anotando o que está na tela em cada linha.
2. **Gere cada linha separadamente** (TTS: `edge-tts`, voz do sistema, ElevenLabs com a chave do usuário). Para vozes de marca/clonadas: **só com consentimento** e aviso de voz sintética em anúncio.
3. **Cronometre a animação pela duração real de cada áudio** (não o contrário).
4. Várias takes e escolha; **regenere só a linha ruim** e costure; encurte pausas > 0,28 s para ~0,2 s; nivele frases (puxe ~85% para a mediana, ajustando ganho só nas pausas).
5. **Legendas:** divida a fala em pausas ≥ 100 ms, transcreva cada trecho (Whisper com timestamps) e alinhe a primeira palavra ao **início medido** (uma passada única atrasa até 0,5 s). Confira de ouvido.
6. Idioma: legenda e voz no idioma do pedido; fonte que cubra o alfabeto.
7. Tags de emoção em voz, **com parcimônia** (só nas linhas que pedem), sem tag no abridor.

## 6. O que fazer em cada tipo de vídeo

| Tipo | Som |
|---|---|
| Showreel / launch | trilha em batida (kick por batida, riser antes do clímax, hit por troca de cena) + SFX leves por elemento |
| UI motion | SFX de interface (click, pop, tick) sob música leve de 120 BPM; cada som pelo pico medido |
| Vinheta / sting | um gesto: impacto grave + pad; riser curto; `end` |
| Explainer narrado | voz + música baixa; **sem SFX em todo elemento** (cansa) |
| Curta mudo | **o som conta metade da história**: foley sincronizado (passos, objetos, ambiente) |
| Hype edit | graves pesados no impacto, cortes na batida, silêncio de 0,3 s antes do drop |
| Loop de README | opcional; se tiver, loop de áudio também fecha sem emenda |
