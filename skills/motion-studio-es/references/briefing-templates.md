# Plantillas de brief (complétalas antes de construir)

Úsalas cuando el pedido sea vago ("haz un video chulo", "showreel", "promo de mi app"). Copia la plantilla más cercana, completa lo que el pedido ya dice, decide el resto con buen gusto, **muestra al usuario el concepto de una línea + el mapa de pulsos + 3 a 4 cuadros** y solo entonces construye. Estructura y el porqué de cada bloque: `playbook.md`. Ejemplos reales de cada tipo: `gallery/`.

Dos cuidados valen para todas:
- El texto exacto, el nombre y los números vienen del usuario. Nunca inventes un resultado, porcentaje, cliente o funcionalidad.
- Escribe el brief para ti (corto, en el idioma del usuario) y muestra al usuario solo el resumen: concepto, paleta, tiempo, qué está prohibido.

---

## A. Showreel / "muestra lo que haces" (15 a 30 s)

```
<inputs>
Preguntar: nombre/marca, logo (o dibujar un símbolo simple), 1 color de acento, pista propia (si no, sintetizar). Valores por defecto si omiten: colores y fuente de la marca del proyecto o un preset (SKILL, sección 3).
</inputs>

<direction>
Showreel de {15} s. Concepto (una línea, nombrado antes de empezar): {ej.: "la tinta se vuelve tipo se vuelve arquitectura"}. Elemento puente: {forma/punto/pelotita} que aparece en todas las escenas. Cada escena nace de la anterior: formas, texto y color se transforman, sin corte y sin fade.
Una fuente (o 2), como máximo 3 colores + blanco y negro, un lenguaje de cámara.
Mostrar rango, una porción igual cada uno: tipografía cinética, morph de formas, un momento 2D→3D (perspective), un momento de datos o UI, título final.
Prohibido: explosión de partículas, glow, lens flare, temblor de cámara, separación RGB, crossfade, degradado genérico, easing elástico, holds > 0,5 s, cualquier cosa que parezca plantilla. (Cada "no" tiene su "en vez de": ver playbook, sección 3.)
</direction>

<structure>
120 BPM, algo pasa en cada pulso. Compás 1: gancho. Una técnica por compás, cada una saliendo de la anterior. Penúltimo compás: el momento más fuerte. Medio compás final: título; último cuadro = primero (loop).
</structure>

<build>
Kit de esta skill. render(t) puro; resortes (M.springAt) y expo; blur por velocidad (M.blur 6/12); banda sonora por cues (kick en cada pulso, riser antes del último compás, hit en cada cambio); 16:9 y 9:16; hoja de contacto con 1 cuadro por pulso antes del render.
</build>

<start>
Di el concepto y muestra el mapa de pulsos y los cuadros. Luego construye sin preguntar nada más.
</start>
```

## B. Video de lanzamiento / promo de producto (10 a 25 s)

```
<inputs>
Preguntar: nombre del producto y la promesa en 1 línea; 3 a 5 momentos de UI para mostrar; logo; 1 color de acento; pantallas reales o clips reales (si hay); pista con un "drop" claro (si hay). Por defecto: tokens de diseño y wordmark del repositorio del usuario, si existe; si no, preset corporativo (#8) o soft UI (#5).
Si el producto tiene repositorio: LEER primero tokens, wordmark y capturas actuales. Preferir lo más nuevo. No inventar funcionalidad.
</inputs>

<direction>
Minimalista y caro: una idea por plano, mucho espacio vacío, un color de acento, una sans con tracking apretado. Tipo que sube desde una máscara, match cuts, un lenguaje de cámara. Material real del producto; nunca tarjetas de relleno. Sin punto final en los textos de pantalla.
Prohibido: anillo de onda de choque, partículas, separación RGB, temblor, lens flare, neón, piso en grilla, fondo parpadeante, easing elástico.
</direction>

<structure>
{120} BPM, {10} compases de 2 s.
C1 gancho: palabras en los pulsos. C2: una palabra del gancho se vuelve la UI del producto; un cursor teclea y hace clic de verdad. El drop: un círculo se abre desde el botón e inunda una escena oscura. Luego un movimiento por compás: el resultado en tipografía gigante, pared de clips/pantallas reales, celular con un panel que se vuelve el resultado, estadísticas en cortes secos (solo números del usuario), ticker de 3 palabras, logo, fade final.
</structure>

<build>
Kit de esta skill, 60 fps (--fps 60), video real = secuencia de cuadros (SKILL, sección 2). Cada corte en un pulso fuerte; cada sonido de UI en el pico medido (sound.py/cues).
</build>

<start>
Pide los inputs, muestra el storyboard en pulsos y 3 cuadros (gancho, UI, final), luego construye.
</start>
```

## C. Una forma que nunca corta (UI motion, 12 a 30 s, cuadrado o 16:9)

```
<inputs>
Preguntar: 8 a 12 estados de UI en que la forma se convierte (botón, loader, player, slider, toggle, pestañas, gráfico, ⌘K, toast...), blanco y negro puro o 1 color de acento, pista de ~120 BPM.
</inputs>

<direction>
Movimiento de UI nivel Dribbble. Una forma, nunca corta: cada estado es el mismo elemento cambiando ancho, alto, radio y color mientras el contenido cambia con un blur corto. Un cursor guía cada cambio con clics y arrastres reales. Lienzo gris cálido claro, componentes blanco y negro, una fuente de UI (Geist). Resortes por todas partes, overshoot mínimo. La cámara hace zoom para que cada estado llene el cuadro. Último cuadro = primer cuadro (loop).
Prohibido: easing elástico, partículas, glow, degradado en UI, íconos con trazos distintos, tiempo muerto, cualquier cosa que parezca plantilla.
</direction>

<structure>
120 BPM, 7 compases, algo en cada pulso. {estado 1} → {estado 2} → ... → vuelve al estado 1.
</structure>

<build>
Kit de esta skill. Un valor que cambia de objetivo muchas veces = suma de un resorte por cambio (sigue siendo función pura del tiempo). Los dos bordes del indicador en resortes distintos (el de adelante se estira). Arrastre = valor calculado por la posición del cursor; al soltar, vuelve desde donde estaba. Gotchas: no aplicar will-change en nada que la cámara escale; el texto que cambia dentro del contenedor que se transforma necesita entrada y salida con tiempos separados.
</build>

<start>
Muestra la lista de estados en la grilla de pulsos antes de escribir código.
</start>
```

## D. Tipografía cinética / frase o manifiesto (5 a 20 s)

```
<inputs>
Preguntar: el texto exacto (orden exacto), tono (monumento, punk, lujo, tech), colores.
</inputs>

<direction>
Concepto: cada línea cambia la arquitectura del cuadro, y la declaración final se sostiene sobre lo que las palabras anteriores construyeron. Cada palabra clave recibe un rol físico (dintel, cable, apoyo, abertura, plataforma) que nace de las letras reales, nunca de una ilustración detrás. Serif de alto contraste para el discurso, grotesca pesada para las palabras de carga, mono discreta para marcas de tiempo. Legible sin audio.
Prohibido: clichés de cartel de protesta, megáfono, bandera, multitud, video de banco, texto en las esquinas, temblor de cámara.
</direction>

<structure>
Storyboard por segundo ("0,00 a 3,00: frase 1 ... "), cada frase con un cambio de layout y una salida que entrega el cuadro a la siguiente.
</structure>

<build>
Kit de esta skill (M.split por líneas, palabras y letras; deformación vectorial controlada de la baseline). Entrada y salida del texto con tiempos separados.
</build>

<start>
Muestra el storyboard en segundos y 3 cuadros; luego construye.
</start>
```

## E. Explainer de una idea o producto (10 a 20 s, sin locución)

```
Crea una película de motion de {15} s explicando {PRODUCTO}. Sin locución, sin footage.
Estilo: lienzo color papel, notas de marcador que se dibujan, física de verdad, tipografía cinética gigante, cambios duros claro/oscuro, una idea nueva cada 1,5 a 2 s, un sonido en cada impacto.
Texto: {UNA_LÍNEA}. Para {PÚBLICO}. Nombra lo que el producto aprende, nunca la abstracción.
Reglas: sin chrome (barra de tiempo, timecode, fps); sin jerga de animador en pantalla; sin resultados inventados (%, múltiplos, clientes); nunca uses {PALABRAS_PROHIBIDAS}.
Oficio: colores {…}; fuentes {…} (display pesada para la tipografía cinética, manuscrita dibujada con stroke-dashoffset); squash/stretch, stagger, superposición, follow-through; un movimiento principal por transición, sin push/slide/rotación genéricos. Todo estado de partida definido en t=0.
Sonido: la batería cae en el cambio a oscuro y cuando la pelotita está en el aire, vuelve fuerte en la tipografía y el logo. SFX: pops, garabatos de lápiz, whooshes, sub-hit en el logo; master −14 LUFS.
```

## F. Escena 3D en tiempo real (Three.js, 15 a 30 s)

```
<direction>
Construye {SUJETO} como una escena 3D en un único HTML con three.js. Estilo: {luz de día suave y espacio blanco | noche con contraste}.
El plano-firma es {el retroceso en que los corredores de tarjetas se resuelven en las letras del nombre, visto desde arriba}. Construye todo hacia él.
Cámara de cine, no orbit controls: cada plano usa un movimiento nombrado (dolly, crane, órbita, push-in, rack focus), con ease, y nunca atraviesa geometría.
Luz y material: luz principal, de relleno y de contraluz con sombras suaves, mapa de ambiente para los reflejos, niebla, materiales físicos con rugosidad variada, tonemapping ACES. Nada con material por defecto.
Movimiento: las cosas reaccionan entre sí (lo que es golpeado se mueve, lo que está cerca se enciende), con resortes o física simple, nunca un tween lineal.
Prohibido: material y luz por defecto, rótulos de texto flotando, glow en todo, un objeto girando lento como idea entera, cualquier cosa con cara de demo técnica.
</direction>

<structure>
Planos de ~3 s: 1 macro con foco corto y rack focus; 2 dolly hacia atrás revelando la escala; 3 crane sobre el conjunto; 4 un elemento se suelta y viene hacia la cámara con peso; 5 el plano-firma; 6 se asienta en el nombre/URL.
</structure>

<build>
Un único HTML, three.js por CDN, todo modelado en código. MeshPhysicalMaterial, PMREM con RoomEnvironment, sombras suaves, ACES, antialiasing; profundidad de campo solo donde haga falta. 60 fps en el notebook. Un modo ?render en que cada cuadro se calcula a partir del tiempo (aleatorio con semilla, sin reloj) para capturar con --gl en render.mjs. Captura 1 cuadro por plano y corrige lo que esté plano, con aliasing, atravesando o ilegible.
Gotchas: definir shadow bias (si no, rayas de acné), near/far ajustados (si no, parpadeo a lo lejos), sembrar todo aleatorio (si no, el render no coincide con la vista previa).
</build>

<start>
Describe el plano-firma y la lista de planos en pocas líneas; luego construye y entrega el HTML y el MP4.
</start>
```

## G. Video de producto con investigación (la familia más común: 20 a 60 s)

```
<inputs>
Pide solo lo que no di, con valores por defecto: 3 a 6 pantallas reales de la interfaz (por defecto: captúralas tú mismo), logo (por defecto: sácalo del sitio), colores y fuente de la marca (por defecto: los del propio producto), una pista con pulso claro (por defecto: compón una en código).
</inputs>

<direction>
Una película de producto de {40} s para {PRODUCTO}. Investiga antes: qué hace, para quién es, interfaz y marca reales. Usa lo que encuentres; nunca inventes pantallas, funciones o números.
Elige UN objeto-hilo del propio producto (cursor, botón clave, la marca del logo, un dato) y haz que cada escena sea una transformación de él: empieza en la UI, cambia de forma o de rol en cada escena, se vuelve el logo en la tarjeta final. Nómbralo antes del storyboard.
Reconstruye la UI real en capas vectoriales para que las partes se muevan solas; nunca deslices una captura plana. Un cursor guía toda interacción con clics y arrastres reales; cámara estilo Screen Studio.
Marca: sus colores y su fuente. Una fuente, un acento usado solo en el objeto-hilo y la palabra clave, mucho espacio vacío.
Reglas de movimiento: resortes con overshoot pequeño; nada surge de la nada (crece, se despliega o se revela con una máscara); la cámara nunca queda quieta (push de 1,0 a 1,04 por escena; cada escena empieza en el zoom en que terminó la anterior); algo cambia en cada pulso.
Prohibido: partículas, glow, lens flare, temblor, separación RGB, crossfade, degradado genérico, easing elástico, holds > 0,5 s, cualquier cosa que parezca plantilla.
</direction>

<structure>
120 BPM. Un storyboard cronometrado primero, pulso a pulso; luego construye exactamente eso.
Gancho (compás 1): el problema en 3 a 5 palabras, en tipo grande que el objeto-hilo interrumpe.
Medio: 3 a 4 momentos del producto haciendo lo que mejor hace; cada uno empieza con el objeto-hilo volviéndose el siguiente elemento de UI y cierra una idea legible.
Payoff: el momento más fuerte en el pulso más grande; el objeto-hilo se vuelve el logo; tarjeta final con el nombre y una llamada de una línea.
</structure>

<build>
Kit de esta skill, 60 fps, banda sonora por cues, 16:9 y 9:16. Un cuadro por pulso antes del render. Posiciones de match cut medidas en runtime. Una forma que llena el cuadro escala más allá de las 4 esquinas. Texto que sale y entra con tiempos separados. Sin will-change en lo que la cámara escala.
</build>

<start>
Muestra lo que encontraste, el objeto-hilo y el storyboard pulso a pulso; luego construye sin preguntar nada más.
</start>
```

## H. Explainer con narración (1 a 3 min)

```
<direction>
Un explainer de {3} min sobre {TEMA} para {PÚBLICO}. Investiga antes y verifica cada hecho; nunca inventes números o citas.
Toda la explicación es UN diagrama en un espacio continuo: la cámara entra en una parte para explicarla y retrocede para mostrar cómo encaja, así el espectador siempre sabe dónde está. Toda idea recibe una imagen antes que palabras; el rótulo va sobre la cosa que nombra, nunca en una leyenda lateral.
Estilo: diagramas simples que se construyen mientras se explican. Narración en {IDIOMA/VOZ} con subtítulos sincronizados línea a línea.
Reglas de movimiento: una sola cosa se mueve a la vez y el ojo siempre sabe adónde mirar; las flechas animan en la dirección real del flujo; como máximo 7 palabras en pantalla a la vez, 0,3 s por palabra.
Prohibido: paredes de texto, listas con viñetas, degradado genérico, íconos de banco, glow, crossfade, cualquier cosa que parezca plantilla.
</direction>

<structure>
Storyboard cronometrado primero. Gancho: la pregunta que el espectador ya tiene, hecha sobre la primera imagen. Medio: 3 a 5 pasos; cada uno entra en una parte del diagrama, muestra un ejemplo concreto y retrocede mientras la parte encaja. Payoff: retroceso final con el diagrama completo y un resumen de una línea.
</structure>

<build>
1. Escribe el guion de la narración línea a línea, marcando qué está en pantalla en cada una.
2. Genera cada línea en voz (TTS) y cronometra la animación por la duración real de cada audio.
3. Kit de esta skill; banda sonora baja bajo la voz; subtítulos sincronizados.
4. Antes del render final, exporta un cuadro clave de cada sección y revísalo: nada apretado, superpuesto o ilegible.
</build>

<gotchas>
Verifica cada número y nombre en una fuente. Mantén fijo el layout del diagrama para que el zoom in y out nunca lo reordene. Texto que sale y entra con tiempos separados.
</gotchas>

<start>
Muestra el guion, el diagrama y un storyboard cronometrado; luego construye sin preguntar nada más.
</start>
```

## I. Corto animado mudo (30 s a 2 min)

```
<direction>
Un corto animado de {45} s: {HISTORIA o "una historia que inventes"}. Estilo libre, al servicio de la historia, hecho enteramente en código.
Escribe la historia primero: el personaje principal quiere una cosa; tres intentos que fallan de formas distintas y crecientes; un giro; un final que acierta y un chiste del último segundo después.
Mudo: sin diálogo y sin texto. El sonido cuenta lo que la imagen no muestra.
Actuación: todo personaje se lee en silueta; toda acción tiene anticipación antes y follow-through después; squash & stretch en lo blando; los ojos se mueven primero y el cuerpo sigue; poses clave sostenidas ≥ 6 cuadros.
Puesta en escena: una acción por plano, encuadrada para leerse al instante; corte en la acción, casando el movimiento a través del corte; el color cambia con el clima.
Prohibido: glow, lens flare, degradado genérico, clip art de banco, todo moviéndose a la vez.
</direction>

<structure>
Lista de planos primero, una acción por plano, con tiempos; luego construye exactamente esa. Los planos se unen por movimiento y sonido, nunca por crossfade.
</structure>

<gotchas>
Pies y manos fijos donde tocan las cosas (el contacto nunca se desliza). Mismas proporciones del personaje en todo plano. Cada chiste recibe un respiro de quietud antes de ocurrir.
</gotchas>

<start>
Muestra la historia en pocas líneas y la lista de planos; luego construye sin preguntar nada más.
</start>
```

## J. Música o lyric video (15 a 60 s)

```
<direction>
{Un visual de música de 30 s: una pista original estilo X a N BPM escrita en código, con visuales guiados por ella} O {Un lyric video de 30 s para la canción adjunta, con la letra y la animación sincronizadas con la voz y el pulso}.
Escribe la pista primero (batería, sub, línea melódica, arreglo real: intro, build, drop) y guarda los tiempos de nota y de golpe como datos; todo movimiento visual nace de un sonido (kick, caja, wobble). Para música del usuario: grilla de pulsos con numpy y el tiempo de cada palabra cantada (Whisper con timestamps, verificado de oído).
Visual: tipografía cinética que actúa cada línea; una idea visual que crece con la música; formas geométricas audaces y tipo en dos colores, golpeadas por el grave.
Prohibido: la lista por defecto (SKILL, sección 11).
</direction>

<structure>
Sigue las secciones de la canción: versos simples, el estribillo se abre, el mayor momento cae en el mayor momento musical (el drop en un pulso fuerte). Intro, un build que se aprieta, drop, una salida corta.
</structure>

<start>
Muestra el tiempo de la letra (o el arreglo) y un storyboard; construye; míralo con sonido y corrige toda palabra adelantada o atrasada.
</start>
```

## K. Cortar un video grabado (talking head → Reels/TikTok, 30 a 60 s)

```
<direction>
Corta el clip crudo en una edición rápida y divertida de {60} s para TikTok y Reels. Conserva las mejores frases y corta toda pausa, muletilla y falso comienzo. Subtítulos palabra a palabra (blanco en negrita, 1 a 2 palabras por vez, nunca tapando el rostro), gráficos que ilustran los puntos clave, música animada con licencia que permita la plataforma.
Prohibido: stock aleatorio, spam de emojis, zoom punch en cada frase, subtítulos tapando el rostro.
</direction>

<structure>
Gancho en los 2 primeros segundos con la mejor frase, aunque no sea la primera. Una idea por vez. Termina en una frase limpia, no en un fade.
</structure>

<build>
1. Transcribe con timestamp por palabra (whisper) y arma la lista de cortes desde el texto.
2. Corta con ffmpeg a 1080x1920, escondiendo los cortes secos con pequeñas variaciones de zoom.
3. Subtítulos y gráficos en HTML renderizados y compuestos sobre el video.
4. Música atenuada bajo la voz, −14 LUFS. Míralo a velocidad normal y corrige todo corte que corte una palabra.
</build>

<start>
Pide el clip y muestra la lista de cortes con timestamps antes de editar.
</start>
```
