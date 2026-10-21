# Análisis crítico de la galería y rúbrica de calidad

## 1. Lo que dicen los números (y dónde engañan)

Base: 232 entradas (229 con prompt), 216 creadores, Claude Opus 5.5, del 23 de sep al 8 de oct de 2026.

| Hecho | Número | Lectura crítica |
|---|---|---|
| Mediana del prompt original | **26 palabras** (la mitad entre 13 y 34; máx. 2.100) | La mayoría de los creadores pidió poco y **aceptó la suerte**. Es la razón principal de que la calidad varíe tanto. |
| El mismo prompt de 26 palabras pegado | **33 veces** (resultados de 0 a 17.023 likes, mediana 5) | Prompt corto = lotería. Lo que separa la cima no es "más efectos", es **concepto + restricción + método**. |
| Prompts de más de 100 palabras | ~20 | Mediana de likes 56 contra 5 de los cortos. Muestra pequeña y confundida con la audiencia del autor: **tómalo como indicio, no como prueba**. |
| Duración más común | **15 s (35%)**, luego 30 s y 20 s | 15 s es el "tamaño del mercado". Más largo solo con narración/estructura. |
| Resolución y fps | 1920×1080 en 188 prompts; **60 fps** en 216 | El mercado trabaja a 60 fps. El kit entrega 30 por defecto: usa `--fps 60` en UI/cursor/cámara. |
| BPM | **120 en 164** de 232 | **Cuidado: inflado por plantillas.** La versión completa estándar fija 120 BPM. Entre los prompts escritos por los propios creadores aparecen otros BPM (100, 124, 130, 140). Usa 120 como default seguro; **elige por género** cuando haya música (`05`). |
| Lista de prohibidos | en ~190 versiones completas | **También inflado por plantilla.** Solo 16 originales tenían lista propia, pero están entre las mejor recibidas. |
| Herramienta citada | 56 de 232 (HTML/Playwright 23, Remotion 13, HyperFrames 10, Three.js 5) | 177 no lo dijeron: sin método explícito, el resultado cambia en cada ejecución. |
| Material real (pantallas, logo, fotos, sitio) | ~94 menciones | Los prompts más detallados exigen material **real** y UI reconstruida en capas; "placeholder" aparece como prohibido en las listas de los creadores más cuidadosos. (Ningún dato de likes prueba la causa: es consenso de práctica, no medición.) |

**Ojo con el sesgo de plantilla.** Muchos conteos grandes (spring 206, motion blur 207, "storyboard first" 204) vienen de la **misma versión completa repetida**. La señal independiente está en los ~22 prompts largos y en las ~60 versiones completas **distintas** (showreel, producto con investigación, explainer, corto, música, edición, 3D). Ahí está la inteligencia real, y por eso esta skill las resume en familias.

## 2. Qué separa los videos fuertes de los débiles

**Fuertes (patrones que se repiten):**
1. **Un concepto** que se puede decir en una línea, con un objeto-hilo (cursor, punto, forma, el propio logo) que atraviesa las escenas y se vuelve el logo al final.
2. **Restricción explícita** (lista de prohibidos + "cualquier cosa que parezca plantilla") y **restricción de paleta/tipografía**.
3. **Tiempo medido en pulsos**, con algo cambiando en cada pulso fuerte y el momento más fuerte en el penúltimo compás.
4. **Material real** del producto/usuario y **UI reconstruida en capas**.
5. **Método de render explícito** (función pura del tiempo, subcuadros, banda sonora por cues) y **revisión** (un cuadro por pulso).
6. **Un primer segundo bueno** y un **último cuadro intencional** (loop o tarjeta limpia).
7. **Transiciones por objeto**, no por efecto (match cut, forma que inunda).

**Débiles (patrones que se repiten):**
1. **Desfile de efectos** sin idea (un "showreel" genérico): glows, partículas, RGB split, todo a la vez.
2. **Pantalla plana** con zoom en lugar de UI viva.
3. **Demasiado texto** en pantalla, o leyenda lateral; palabra huérfana; bajo contraste.
4. **Timing por impresión**, cortes fuera del pulso, hold muerto de 1 a 2 s.
5. **Invención:** números, clientes, funciones que no existen (el error más peligroso: rompe la confianza).
6. **Inconsistencia:** fuente/grosor/color cambiando, proporción del personaje variando, cursor que cambia de tamaño.
7. **Crossfade como solución a todo** y brillo "para parecer caro".
8. **Sin revisión:** texto superpuesto, elemento cortado, loop que se traba.

## 3. La trampa de la "igualdad"

Los 232 videos se parecen: fondo claro cálido u oscuro, Inter/Geist, cursor, UI, tipografía grande, 120 BPM, naranja o verde como acento. Es el resultado de que **todos usaron el mismo prompt/plantilla**. Para que esta skill sea la mejor, **no imites el promedio**:
- Cuando el usuario no definió estilo, **elige un concepto visual específico** (p. ej., "teatro de sombras", "risograph", "osciloscopio", "papel recortado", "pixel", "mapa plegable") en lugar del "keynote blanco" por defecto.
- Varía **un eje** respecto del estándar: fuente (serif/condensada), color de acento (fuera del naranja/azul), estructura (sin cursor), cámara (vertical en lugar de horizontal).
- El "keynote" sigue siendo correcto para un **producto de software**; es incorrecto para una marca de moda, culinaria, cultura o arte.

## 4. Rúbrica de calidad (100 puntos). Puntúa antes de entregar

Mira los cuadros por pulso (y el video, si es posible). Puntúa cada ítem; **corrige lo que esté por debajo del 80% de su máximo**. Meta de entrega: **≥ 85**. Por debajo de 70 no entregues: rehaz la parte débil.

| Criterio | Puntos | Pregunta de verificación |
|---|---|---|
| **Concepto y puente** | 12 | ¿Se puede decir en una línea? ¿El objeto-hilo aparece en casi toda escena y cierra al final? |
| **Gancho y cierre** | 10 | ¿Los primeros 1,5 s ya son buenos? ¿El último cuadro es limpio/loop/CTA único? |
| **Ritmo y pulso** | 12 | ¿Algo cambia en cada pulso fuerte? ¿Cortes en la grilla? ¿Penúltimo compás = clímax? ¿Sin tiempo muerto? |
| **Jerarquía y composición** | 12 | ¿Un foco por cuadro? ¿Espacio negativo? ¿Alineación en grilla? ¿Nada toca el borde? ¿Áreas seguras (9:16)? |
| **Tipografía y legibilidad** | 10 | Tamaños mínimos; contraste ≥ 4,5:1; tiempo de lectura (0,3 s + 0,25 s/palabra); ¿sin huérfana; idioma correcto? |
| **Movimiento (easing y física)** | 12 | Las entradas desaceleran, las salidas aceleran; superposición 60 a 80%; anticipación/follow-through; ¿sin lineal en posición; sin rebote injustificado? |
| **Dirección de arte consistente** | 8 | ¿La misma fuente, paleta y trazo de íconos en todo? ¿Material real del usuario? |
| **Transiciones por objeto** | 6 | ¿Ningún crossfade; match cuts/forma que inunda? ¿Cortes secos solo en un pulso? |
| **Sonido** | 8 | ¿Impactos exactamente en los cuadros; un sonido por elemento; el riser termina en el hit; −14 LUFS; sin saturación? |
| **Honestidad y precisión** | 6 | ¿Ningún dato inventado; texto idéntico al del usuario; hechos verificados? |
| **Acabado técnico** | 4 | `--check` idéntico; blur liso en movimientos rápidos; BT.709; ¿ambas proporciones? |

**Penalizaciones automáticas (cada una: −10 y corrección obligatoria):** número/función inventados; texto cortado o superpuesto; loop que se traba; audio fuera del pulso en más de 2 puntos; crossfade/brillo/partícula sin motivo; un video que pide 9:16 y solo se recortó del 16:9.

## 5. Protocolo de autocrítica (ejecútalo de verdad)

1. **Hoja de contacto** con 1 cuadro por pulso (y los 3 momentos más rápidos extraídos del MP4 final).
2. **Lee como un espectador frío:** "¿en 2 s entiendo de qué trata? ¿en 15 s recuerdo una cosa?".
3. **Prueba del mudo:** ¿el mensaje funciona sin sonido? (feed social).
4. **Prueba del cuadro único:** si imprimes el cuadro del clímax, ¿se sostiene solo?
5. **Caza de las 8 debilidades** (la lista de la sección 2): marca las que aparezcan.
6. **Puntúa** con la rúbrica, lista las 3 mayores pérdidas, **corrige las 3**, renderiza solo el tramo (`--from/--to`), revisa de nuevo.
7. **Entrega** diciendo qué verificaste y qué no pudiste verificar (audio, celular, reproductores de terceros).

## 6. Límites honestos del kit (para no prometer lo que no existe)

- El kit renderiza **2D HTML/SVG/Canvas** y WebGL/Three.js con `--gl`. **No** hace simulación de fluidos a nivel Houdini, rigging 3D, composición profesional de video grabado ni voz sintética de estudio.
- **Voz/narración:** el kit **no genera voz**; usa una herramienta de TTS externa (p. ej., `edge-tts`, la voz del sistema, ElevenLabs con la clave del usuario) y **cronometra la animación por la duración real de cada línea**. Los **subtítulos** sincronizados exigen timestamps por palabra (Whisper) y verificación de oído.
- **Música del usuario:** `sound.py` sintetiza una pista a partir de cues; para alinear con una pista existente hay que **analizar la pista** (numpy: grilla de pulsos, energía por compás, drop), un paso extra fuera del kit, y ubicar cada hit por el pico medido.
- **Juegos interactivos y sitios con scroll:** entregan HTML, no MP4; avisa.
- **Fuentes propietarias y logos raster:** pide el archivo o usa un equivalente y di cuál; logo raster → vectorizar (trace) manteniendo la fidelidad, o pedir el SVG.
- **Derechos:** los prompts, videos y marcas pertenecen a sus creadores; la skill estudia estructura y técnica, no reproduce obra protegida.
