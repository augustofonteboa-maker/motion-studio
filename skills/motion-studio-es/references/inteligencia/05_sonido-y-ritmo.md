# Sonido y ritmo: BPM, música, efectos, voz y subtítulos

## 1. La cuenta del ritmo

`pulso = 60 / BPM` segundos · `compás (4 pulsos) = 240 / BPM` segundos. En el kit: `bpm` en `M.boot`, `M.beat(n)` devuelve el tiempo del pulso `n`.

| BPM | Pulso | Compás | Cuadros/pulso a 30 fps | Género y uso |
|---|---|---|---|---|
| 90 | 0,667 s | 2,67 s | 20 | hip-hop lento, lujo, institucional |
| 100 | 0,600 s | 2,40 s | 18 | corporativo moderno, explainer con ritmo |
| **120** | **0,500 s** | **2,00 s** | **15** | **el estándar de showreel/lanzamiento** (compás = 2 s: 8 compases = 16 s) |
| 124 | 0,484 s | 1,94 s | 14,5 | house (un ritmo de "producto" más ligero) |
| 128 | 0,469 s | 1,88 s | 14,06 | house/electrónica, tech |
| 130 | 0,462 s | 1,85 s | 13,85 | tech, drop de producto |
| 140 | 0,429 s | 1,71 s | 12,86 | dubstep, hype, deporte |
| 150 a 170 | 0,40 a 0,35 s | 1,6 a 1,4 s | 12 a 10,6 | drum & bass, hype edit corto |

**Elección del BPM:** usa 120 como default seguro. Con música definida, **mide** (no adivines). Sin música: elige por género y por duración (15 s a 120 BPM = 30 pulsos = 7,5 compases; para cerrar en compases enteros, 16 s = 8 compases).
En 124 BPM (fracción) planifica los cortes en tiempo real (`0,048 + 0,4838·k`) y **no en cuadros enteros**; el corte "duro" vale 2 cuadros **antes** del pulso para que el ojo lo sienta encima.

## 2. Estructura de música para video (15 a 30 s)

| Tramo | Función | Visual correspondiente |
|---|---|---|
| Intro (1 compás) | gancho; pocos elementos | palabra-gancho, nace el objeto-hilo |
| Build (2 a 3 compases) | tensión: entra el kick, un riser | acciones de UI, tecleo, cursor |
| **Drop** (1 compás) | la mayor energía | flood, corte duro, revelación principal |
| Sostén (2 a 3 compases) | desarrollo | cards, bento, datos, cámara |
| Clímax (penúltimo) | el momento más fuerte | plano-firma, número héroe |
| Salida (½ a 1 compás) | resolución | el objeto-hilo se vuelve el logo, tarjeta final |

Con música de banco: empieza la pista **N pulsos antes del drop** para que el drop caiga en la escena correcta. Con pista sintética (kit): los cues nacen de las acciones.

## 3. Cues de `sound.py` y cómo usarlos

| Cue | Cuándo |
|---|---|
| `hit` / `big` | impacto leve / grande: revelación, flood, final. **En el cuadro exacto** del evento. |
| `rise {len}` | riser: crece durante la anticipación/contracción y **termina en el hit** |
| `whoosh {len}` | cambios de escena y movimientos rápidos (whip, iris) |
| `pop` | un elemento que aparece (card, ícono, palabra) |
| `tick` | cuenta, cursor, microeventos raros |
| `click` | el clic del cursor; **siempre en el cuadro del clic** |
| `type {len, rate}` | tecleo (len = duración; rate = caracteres/s) |
| `notes {notes, step}` | arpegio corto de apertura/cierre |
| `pulse {n, every}` | pulso de fondo constante (tecno) |
| `swell {len}` | pad creciendo en un momento emocional |
| `end` | firma final |
| `chord` | acorde de apoyo |

Moods: **`grave`** (por defecto: cinematográfico en Re menor, pad cálido, piano suave, impactos graves; sin agudos y sin viento), `epico`, `tech`, `clean`, `ambient`, `pop`; tono con `--key`.

**Reglas de sonorización:**
1. **Un sonido por elemento que aparece; silencio en el resto.** Nada de sonido en cada micromovimiento.
2. **Pico en el cuadro.** El impacto cae exactamente en el cuadro de la revelación (compara el tiempo del cue con el cuadro).
3. **Silencio antes del impacto:** 0,3 a 0,5 s más "seco" da peso.
4. **Capas:** música (−14 LUFS en el master), SFX bajos bajo la música; voz en primer plano, música **atenuada** (ducking) bajo la voz.
5. **Master:** −14 LUFS, pico real −1,5 dBTP (`render.mjs` normaliza en 2 pasadas; `--lufs` lo cambia). Remide después del AAC.
6. **Sin sonido pedido:** entrega también la versión con pista y di que se puede quitar.
7. **Música de terceros:** solo CC0, licenciada para la plataforma o **generada**; registra la fuente; evita "música en tendencia" sin licencia.

## 4. Música del usuario (o de banco): alinear con medición

El kit **no analiza** pistas existentes; es un paso extra:
1. Carga el audio (numpy/scipy o una herramienta equivalente), calcula **tempo**, **grilla de pulsos**, **energía por compás** y el **drop**.
2. **Calibra la grilla en los kicks reales** (la grilla teórica se desvía).
3. Marca cada corte en un pulso fuerte y cada hit de UI en un pulso; ubica cada efecto por el **pico medido** del archivo (no por el inicio).
4. Pasa el archivo en `--audio` y los tiempos medidos en `M.beat`/`M.cue`.

## 5. Voz, narración y subtítulos

Flujo para explainers y videos narrados (herramienta de voz **externa al kit**):
1. **Guion primero**, línea a línea, anotando qué está en pantalla en cada línea.
2. **Genera cada línea por separado** (TTS: `edge-tts`, voz del sistema, ElevenLabs con la clave del usuario). Para voces de marca/clonadas: **solo con consentimiento** y aviso de voz sintética en anuncios.
3. **Cronometra la animación por la duración real de cada audio** (no al revés).
4. Varias tomas y elegir; **regenera solo la línea mala** y empalma; acorta pausas > 0,28 s a ~0,2 s; nivela las frases (acerca ~85% a la mediana, ajustando la ganancia solo en las pausas).
5. **Subtítulos:** divide el habla en pausas ≥ 100 ms, transcribe cada tramo (Whisper con timestamps) y alinea la primera palabra al **inicio medido** (una sola pasada se atrasa hasta 0,5 s). Verifica de oído.
6. Idioma: subtítulos y voz en el idioma del pedido; una fuente que cubra el alfabeto.
7. Etiquetas de emoción en la voz, **con moderación** (solo en las líneas que lo piden), sin etiqueta en el abridor.

## 6. Qué hacer en cada tipo de video

| Tipo | Sonido |
|---|---|
| Showreel / lanzamiento | una pista en el pulso (kick por pulso, un riser antes del clímax, un hit por cambio de escena) + SFX ligeros por elemento |
| UI motion | SFX de interfaz (click, pop, tick) bajo música ligera de 120 BPM; cada sonido en el pico medido |
| Viñeta / sting | un gesto: impacto grave + pad; riser corto; `end` |
| Explainer narrado | voz + música baja; **sin SFX en cada elemento** (cansa) |
| Corto mudo | **el sonido cuenta la mitad de la historia**: foley sincronizado (pasos, objetos, ambiente) |
| Hype edit | graves pesados en el impacto, cortes en el pulso, 0,3 s de silencio antes del drop |
| Loop de README | opcional; si lo hay, el audio también cierra sin costura |
