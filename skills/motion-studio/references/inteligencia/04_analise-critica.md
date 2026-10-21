# Análise crítica da galeria e rubrica de qualidade

## 1. O que os números dizem (e onde enganam)

Base: 232 entradas (229 com prompt), 216 criadores, Claude Opus 5.5, 23 set a 8 out 2026.

| Fato | Número | Leitura crítica |
|---|---|---|
| Mediana do prompt original | **26 palavras** (metade entre 13 e 34; máx. 2.100) | A maioria dos criadores pediu pouco e **aceitou a sorte**. É o principal motivo de a qualidade variar tanto. |
| Mesmo prompt de 26 palavras colado | **33 vezes** (resultados de 0 a 17.023 likes, mediana 5) | Prompt curto = loteria. O que separa o topo não é "mais efeitos", é **conceito + restrição + método**. |
| Prompts com mais de 100 palavras | ~20 | Mediana de likes 56 contra 5 dos curtos. Amostra pequena e confundida com audiência do autor: **tome como indício, não prova**. |
| Duração mais comum | **15 s (35%)**, depois 30 s e 20 s | 15 s é o "tamanho do mercado". Mais longo só com narração/estrutura. |
| Resolução e fps | 1920×1080 em 188 prompts; **60 fps** em 216 | O mercado trabalha em 60 fps. O kit entrega 30 por padrão: use `--fps 60` em UI/cursor/câmera. |
| BPM | **120 em 164** de 232 | **Atenção: inflado por templates.** A versão completa padrão fixa 120 BPM. Entre prompts escritos pelos próprios criadores, outros BPM aparecem (100, 124, 130, 140). Use 120 como default seguro; **escolha pelo gênero** quando houver música (`05`). |
| Lista de proibidos | em ~190 versões completas | **Também inflado por template.** Só 16 originais tinham lista própria — mas elas estão entre as mais bem recebidas. |
| Ferramenta citada | 56 de 232 (HTML/Playwright 23, Remotion 13, HyperFrames 10, Three.js 5) | 177 não disseram: sem método explícito, o resultado muda a cada execução. |
| Material real (telas, logo, fotos, site) | ~94 menções | Os prompts mais detalhados exigem material **real** e UI reconstruída em camadas; "placeholder" aparece como proibido nas listas dos criadores mais cuidadosos. (Não há dado de likes que prove a causa: é consenso de prática, não medição.) |

**Cuidado com o viés de template.** Muitas contagens grandes (spring 206, motion blur 207, "storyboard first" 204) vêm da **mesma versão completa repetida**. O sinal independente está nos ~22 prompts longos e nas ~60 versões completas **distintas** (showreel, produto com pesquisa, explainer, curta, música, edição, 3D). É neles que está a inteligência real, e é por isso que esta skill os resume em famílias.

## 2. O que separa os vídeos fortes dos fracos

**Fortes (padrões que se repetem):**
1. **Um conceito** que se pode dizer em uma linha, com um objeto-fio (cursor, ponto, forma, o próprio logo) que atravessa as cenas e vira o logo no fim.
2. **Restrição explícita** (lista de proibidos + "tudo que pareça template") e **restrição de paleta/tipografia**.
3. **Tempo medido em batidas**, com algo mudando em toda batida forte e o momento mais forte no penúltimo compasso.
4. **Material real** do produto/usuário e **UI reconstruída em camadas**.
5. **Método de render explícito** (função pura do tempo, subquadros, trilha por cues) e **revisão** (um quadro por batida).
6. **Primeiro segundo já bom** e **último quadro intencional** (loop ou cartão limpo).
7. **Transições por objeto**, não por efeito (match cut, forma que inunda).

**Fracos (padrões que se repetem):**
1. **Desfile de efeitos** sem ideia ("showreel" genérico): glows, partículas, RGB split, tudo ao mesmo tempo.
2. **Tela chapada** com zoom no lugar de UI viva.
3. **Texto demais** na tela, ou legenda lateral; palavra órfã; contraste baixo.
4. **Timing por impressão**, cortes fora da batida, hold morto de 1 a 2 s.
5. **Invenção:** números, clientes, funções que não existem (o erro mais perigoso: quebra a confiança).
6. **Inconsistência:** fonte/espessura/cor mudando, proporção de personagem variando, cursor que muda de tamanho.
7. **Crossfade como solução para tudo** e brilho "para parecer caro".
8. **Sem revisão:** sobreposição de texto, elemento cortado, loop com engasgo.

## 3. A armadilha da "mesmice"

Os 232 vídeos se parecem: fundo claro quente ou escuro, Inter/Geist, cursor, UI, tipografia grande, 120 BPM, laranja ou verde como acento. É o resultado de **todos usarem o mesmo prompt/template**. Para esta skill ser a melhor, **não imite a média**:
- Quando o usuário não definiu estilo, **escolha um conceito visual específico** (ex.: "teatro de sombras", "risograph", "osciloscópio", "papel recortado", "pixel", "mapa dobrável") em vez do "keynote branco" padrão.
- Varie **um eixo** em relação ao padrão: fonte (serifa/condensada), cor de destaque (fora do laranja/azul), estrutura (sem cursor), câmera (vertical em vez de horizontal).
- O "keynote" continua certo para **produto de software**; é errado para marca de moda, culinária, cultura ou arte.

## 4. Rubrica de qualidade (100 pontos). Pontue antes de entregar

Olhe os quadros por batida (e o vídeo, se possível). Pontue cada item; **corrija o que estiver abaixo de 80% do máximo**. Meta para entrega: **≥ 85**. Abaixo de 70 não entregue: refaça a parte fraca.

| Critério | Pontos | Pergunta de verificação |
|---|---|---|
| **Conceito e ponte** | 12 | Dá para dizer em uma linha? O objeto-fio aparece em quase toda cena e fecha no final? |
| **Gancho e fechamento** | 10 | Os 1,5 s iniciais já são bons? O último quadro é limpo/loop/CTA único? |
| **Ritmo e batida** | 12 | Algo muda em toda batida forte? Cortes na grade? Penúltimo compasso = clímax? Sem tempo morto? |
| **Hierarquia e composição** | 12 | Um foco por quadro? Espaço negativo? Alinhamento em grade? Nada encosta na borda? Áreas seguras (9:16)? |
| **Tipografia e legibilidade** | 10 | Tamanhos mínimos; contraste ≥ 4,5:1; tempo de leitura (0,3 s + 0,25 s/palavra); sem órfã; idioma correto? |
| **Movimento (easing e física)** | 12 | Entradas desaceleram, saídas aceleram; sobreposição 60 a 80%; antecipação/follow-through; sem linear em posição; sem bounce injustificado? |
| **Direção de arte consistente** | 8 | Mesma fonte, paleta e traço de ícone em tudo? Material real do usuário? |
| **Transições por objeto** | 6 | Nenhum crossfade; match cuts/forma que inunda? Cortes secos só em batida? |
| **Som** | 8 | Impactos exatamente nos quadros; um som por elemento; riser termina no hit; −14 LUFS; sem estouro? |
| **Honestidade e precisão** | 6 | Nenhum dado inventado; texto idêntico ao do usuário; fatos conferidos? |
| **Acabamento técnico** | 4 | `--check` idêntico; blur liso nos movimentos rápidos; BT.709; ambas as proporções? |

**Penalidades automáticas (cada uma: −10 e correção obrigatória):** número/função inventados; texto cortado ou sobreposto; loop que engasga; áudio fora da batida em mais de 2 pontos; crossfade/brilho/partícula sem motivo; vídeo que pede 9:16 e foi só cortado do 16:9.

## 5. Protocolo de autocrítica (executar de verdade)

1. **Folha de contato** com 1 quadro por batida (e os 3 momentos mais rápidos extraídos do MP4 final).
2. **Leia como espectador frio:** "em 2 s eu entendo do que é? em 15 s eu lembro de uma coisa?".
3. **Teste do mudo:** a mensagem funciona sem som? (feed social).
4. **Teste do quadro único:** se imprimir o quadro do clímax, ele sustenta sozinho?
5. **Caça aos 8 fracos** (lista da seção 2): marque os que aparecem.
6. **Pontue** pela rubrica, liste as 3 maiores perdas, **corrija as 3**, renderize só o trecho (`--from/--to`), reconfira.
7. **Entregue** dizendo o que verificou e o que não conseguiu verificar (áudio, celular, player de terceiros).

## 6. Limites honestos do kit (para não prometer o que não existe)

- O kit renderiza **2D HTML/SVG/Canvas** e WebGL/Three.js com `--gl`. **Não** faz simulação de fluidos de nível Houdini, rigging 3D, vídeo gravado com composição profissional, nem voz sintética de estúdio.
- **Voz/narração:** o kit **não gera voz**; use uma ferramenta de TTS externa (ex.: `edge-tts`, voz do sistema, ElevenLabs com chave do usuário) e **cronometre a animação pela duração real de cada linha**. **Legendas** sincronizadas exigem timestamps por palavra (Whisper) e conferência de ouvido.
- **Música do usuário:** `sound.py` sintetiza trilha a partir de cues; para alinhar a uma faixa existente é preciso **analisar a faixa** (numpy: grade de batidas, energia por compasso, drop), que é um passo extra fora do kit, e posicionar cada hit pelo pico medido.
- **Jogos interativos e sites com rolagem:** entregam HTML, não MP4; avise.
- **Fontes proprietárias e logos raster:** peça o arquivo ou use equivalente e diga qual; logo raster → vetorizar (trace) mantendo fidelidade, ou pedir SVG.
- **Direitos:** prompts, vídeos e marcas pertencem aos criadores; a skill estuda estrutura e técnica, não reproduz obra protegida.
