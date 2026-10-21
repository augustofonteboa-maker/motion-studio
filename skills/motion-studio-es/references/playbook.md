# Playbook: lo que 230 prompts reales enseñan sobre motion design con IA

Fuente: análisis de 233 videos hechos con Claude Opus 5.5 y sus prompts (una galería pública, sep/oct de 2026), más los artículos que la acompañan. Los prompts completos están en `gallery/` (empieza por `gallery/00_INDEX.md`). Este archivo es la destilación: léelo entero cuando el pedido sea un video de verdad (showreel, lanzamiento, promo, explainer), no para un ajuste pequeño.

## 1. La lección central

Una frase de 26 palabras ("make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are... go all out") se pegó 33 veces. Los resultados fueron de 0 a 17.000 likes, y la mediana fue 5. **Un prompt corto deja cada decisión al azar**: tema, apariencia, tiempo, qué evitar. Los prompts largos (más de 100 palabras) tuvieron una mediana de 56 likes contra 5 de los cortos. El largo no es el objetivo; cada parte de abajo existe para quitarle al modelo una decisión que tomaría en automático.

Consecuencia para esta skill: **nunca construyas a partir de un pedido vago.** Convierte el pedido en un brief de 6 bloques (sección 2), decide los puntos abiertos con buen gusto, cuenta lo que decidiste y muestra el storyboard antes de renderizar.

## 2. Anatomía de un brief de campeón (6 bloques)

Los mejores prompts de la galería usan siempre este orden, casi con estas etiquetas:

1. **`<inputs>` (qué preguntar al usuario).** Lista corta de lo que solo él sabe: nombre del producto, logo, un color de acento, el texto exacto, la pista. Siempre con **valores por defecto** ("si omito algo, usa X") para que el trabajo no se trabe. Pregunta una vez, al inicio.
2. **`<direction>` (concepto y estilo).**
   - **Un solo concepto**, dicho en una línea ("la tinta se vuelve tipo se vuelve arquitectura", "una forma que nunca corta", "el punto naranja une todas las escenas"). Sin concepto el modelo hace un desfile de efectos.
   - **Elemento puente** que atraviesa todas las escenas (una forma, un punto, un cursor).
   - **Look cerrado:** 1 fuente (o 2), como máximo 3 colores + blanco y negro, 1 acento, un solo lenguaje de cámara ("un movimiento nombrado por escena, nunca dos a la vez, nunca zoom in y out seguidos").
   - **Lista de prohibidos** (sección 3).
3. **`<structure>` (el tiempo).** En **BPM y compases** ("120 BPM, 7 compases, algo pasa en cada pulso"), no en "dinámico". Primer compás = gancho; una técnica por compás, cada una saliendo de la anterior; penúltimo = el momento más fuerte; final = título, con el último cuadro igual al primero (loop). Describe cada escena como una acción concreta, con flechas (→).
4. **`<build>` (cómo renderizar).** Numerado y específico: un HTML, 1920×1080 a 60 fps, todo estilo calculado a partir del tiempo dentro de `seek(t)` (aquí: `render(t)`), sin transición CSS/timer/estado; resortes en forma cerrada; subcuadros mezclados para el motion blur; analizar la música con numpy para la grilla de pulsos; cada sonido ubicado por su pico medido.
5. **`<gotchas>` (las trampas conocidas).** Ej.: "no uses will-change en nada que la cámara escale, el texto queda borroso"; "el texto que cambia dentro de un contenedor que cambia de forma necesita entrada y salida con tiempos separados"; "último cuadro idéntico al primero, incluida la posición y velocidad del cursor, o el loop se traba"; "cuando una forma llena la pantalla, escálala más allá de las cuatro esquinas"; "el gráfico y el punto deben seguir la misma función de resorte".
6. **`<start>` (el primer paso).** "Pídeme los inputs, muéstrame el mapa de pulsos y 4 cuadros fijos antes de construir el video." Revisión antes del render final: **renderiza un cuadro por pulso y míralo**; corrige lo que esté fuera de la grilla, apretado o ilegible.

Plantillas listas para completar: `briefing-templates.md`.

## 3. La lista de prohibidos (lo que delata "hecho por IA")

Solo 16 de los 230 prompts tenían una, pero incluyen 4 de los 20 con más likes (mediana de 56 likes contra 7 de la galería). Ítems por frecuencia: **brillos/neón** (7 creadores), **"cualquier cosa que parezca plantilla"** (7), **explosiones de partículas** (6), **tiempo muerto / holds largos / cuadros congelados** (6), **crossfades** (5), **easing demasiado elástico** (3), **degradados genéricos** (3), **efectos 3D gratuitos** (3), **video/UI de banco** (3), **texto en las esquinas** (2: rótulos y marcadores de cuadro alrededor del borde, tipo HUD sin información), **`Math.random`** (2).

También comunes: temblor de cámara, separación RGB, lens flare, piso en grilla, fondo parpadeante, anillo de onda de choque.

Cómo aplicar en esta skill:
- Copia al brief una lista de 5 a 9 ítems, **siempre con qué hacer en su lugar** ("sin crossfade: cada escena crece desde la anterior"; "sin glow: el contraste y la escala hacen el destaque").
- Cierra con el estándar: "cualquier cosa que parezca plantilla".
- El kit tiene `M.shake`, `M.grain`, glow, glitch y partículas: son herramientas, no obligaciones. Úsalas solo si la idea del video lo pide, y **una vez**, en el momento justo (un impacto, no el video entero). Regla de la galería: "un movimiento que no está conectado a un elemento que ya está en pantalla es adorno".
- Excepción: el usuario pide una estética tech/HUD/glitch. Ahí el efecto es la idea.

## 4. Los patrones de video que mejor funcionan

- **Showreel / "muestra que eres un motion designer" (78 de 233).** Abre con un concepto y un nombre. Cada escena está hecha de la anterior (formas, texto y color se transforman, sin corte ni fade). Muestra rango en partes iguales: tipografía cinética, morph de formas, un momento 2D→3D, un momento de datos/UI, título final. 120 BPM, banda sonora escrita en código (kick en cada pulso, riser antes del último compás, hit en cada cambio de escena).
- **Lanzamiento / promo de producto (94).** Un embudo que se repite: gancho en palabras en los pulsos → el producto aparece como UI viva (un cursor realmente teclea y hace clic) → "el drop" (un círculo/color inunda la pantalla en el pulso de la música) → una acción por compás (pared de clips reales, número gigante, carrusel, celular con un panel que se vuelve el resultado, estadísticas en cortes secos, ticker de 3 palabras) → logo → fade. **Usa material real del producto** (pantallas, logo, tokens de diseño del repositorio); "nunca tarjetas de relleno"; no inventes funcionalidad, números ni testimonios.
- **Una forma que nunca corta (12.000 likes).** Botón → loader → check → isla dinámica → reproductor → slider (se estira al arrastrar más allá del máximo) → toggle → pestaña líquida → gráfico que se dibuja solo → ⌘K → toast → vuelve al botón. Cada estado es el mismo elemento cambiando tamaño, radio y color; el contenido cambia con un blur corto. Cursor con clics y arrastres reales. Los dos lados del indicador de pestaña en resortes distintos (el borde de adelante se estira). Último cuadro = primero.
- **Un continuous take estilo keynote.** "Nada hace fade, desenfoca o corta; los objetos cambian de forma": el texto sube de una línea de máscara, los íconos aparecen desde cero con un resorte, las barras se dibujan, una forma negra inunda el cuadro y se contrae en la siguiente escena. Cámara estilo Screen Studio: hace zoom para que cada momento llene el cuadro, y el cursor escala junto.
- **Explainer (27, los más débiles: mediana de 15 palabras).** Funciona con: una analogía visual por concepto, la idea dicha antes de mostrarla, un número o rótulo por escena, paleta de papel + marcador (tipografía gigante, anotaciones que se dibujan, cambio duro claro/oscuro cada 1,5 a 2 s). Si es matemática, Manim con narración.
- **Tipografía como arquitectura** ("BUILD THE FLOOR"): cada palabra recibe un rol físico (WAIT = dintel, VOICE = apoyo, ROOM = abertura, FLOOR = plataforma) que **nace de las propias letras**, no de ilustraciones detrás. Texto exacto, orden exacto, legible sin audio.
- **Narración en voz:** guion de 9 líneas con etiquetas de emoción usadas con moderación; varias tomas y elegir; regenerar solo la línea mala; acortar pausas > 0,28 s a 0,2 s; **alinear los subtítulos midiendo el inicio de cada segmento** (una sola pasada de Whisper se equivoca hasta 0,5 s).
- **Loop:** estado final = inicial, comparar primer y último cuadro.

## 5. Técnicas de acabado que aparecen en los mejores prompts

- **Liquid glass (iOS 26):** desenfoque del fondo detrás del control + curvar la escena en el borde como un vidrio grueso + brillo arriba + aro claro + sombra suave de elevación. **El vidrio desaparece sobre blanco liso**: pon una aura pastel lenta detrás.
- **Aura "Apple Intelligence":** degradado cónico desenfocado girando por rosa, naranja, lima, cian y violeta alrededor del campo de entrada.
- **Cámara que nunca corta en un cuadro quieto:** cada plano entra ya en movimiento (ease-out exponencial, 12 a 19% de la distancia restante por cuadro) y sale acelerando o en una rampa de blur; el blur sigue la velocidad y la dirección.
- **Cursor vivo:** gira hacia donde va, crece en el hover, se hunde en el clic (escala 0,85), anillo en el clic, sonido de clic.
- **Semitono (halftone):** grilla de puntos cuyo tamaño responde a un objeto; crece más allá de los bordes y revela la tarjeta final.
- **Letras individuales** para cualquier transformación de palabra ("Reduce Motion" → "Motion"; el punto queda pegado a la "i" hasta saltar).
- **Cámara de cine en 3D:** un movimiento nombrado por plano (dolly, crane, órbita, push-in, rack focus), siempre con ease, nunca atraviesa geometría. Luz de tres puntos, mapa de ambiente, niebla, materiales físicos con rugosidad variada, tonemapping ACES; nada con material por defecto. Un **plano-firma** diseñado primero, y todo se construye hacia él.
- **Física que reacciona:** lo que es golpeado se mueve, lo que está cerca se enciende; resortes o física simple, nunca un tween lineal.
- **Video real dentro del render:** extrae los clips a una secuencia JPEG a 30 fps con ffmpeg y cambia el `src` por cuadro; el `seek` espera la decodificación. (El kit describe el mismo camino en la sección 2.)
- **Tokens del producto real:** cuando el video es de un producto, lee primero los tokens de diseño, el wordmark y las capturas de pantalla actuales del repositorio. Prefiere lo más nuevo a lo antiguo. Nunca inventes funcionalidad.

## 6. Sonido y música

- Música libre de derechos de banco (Mixkit, Pixabay, Pexels) por **BPM y "drop"**: ~120 BPM con un drop y un tramo calmo antes. Empieza la pista N pulsos antes del drop.
- **Analiza con numpy:** tempo, grilla de pulsos, energía por compás, el drop; calibra la grilla en los kicks reales; todo corte en un pulso fuerte, todo "hit" de UI en un pulso.
- **Ubica cada efecto por su pico medido, no por el inicio del archivo**; efectos bajos bajo la música; loudnorm −14 LUFS (pico −1,5 a −2 dBTP, remedido después del AAC).
- Sin música del usuario: banda sonora en código (kick por pulso, riser, hit por escena). Es lo que `sound.py` + `M.cue` ya hacen aquí.
- Música/efectos de terceros solo CC0 o generados, y registra la fuente.

## 7. Qué renderizador usar (56 videos citaron la herramienta)

| Enfoque | Cuándo | Nota |
|---|---|---|
| **HTML/canvas + Playwright + ffmpeg** (el de esta skill) | por defecto para todo: explainers, lanzamiento, UI, tipografía | 23 de los 56; de los 10 videos con más likes, 4 citan herramienta y 3 de ellos son HTML puro. Nada que instalar además de Playwright y ffmpeg. El prompt debe decir el método de build. |
| **Remotion** (React) | el producto ya es React y se pueden reutilizar componentes reales | 13; casi solo videos de lanzamiento. Licencia paga para algunas empresas: avisa. |
| **HyperFrames** (HeyGen, HTML + atributos, Apache 2.0) | un renderizador listo para agentes, sin React, con GSAP | 10; la mitad son lanzamientos. |
| **Three.js** | 3D de verdad (iluminación, cámara) | 5; captura con el mismo método, un modo `?render` con tiempo en lugar del reloj y aleatorio con semilla. |
| **Manim** | explicar matemáticas | 1 (258 likes, con TTS gratis). |

Todos hacen lo mismo por debajo: un navegador sin pantalla carga la animación, va al tiempo exacto, saca una captura y repite; ffmpeg las une. Por eso una máquina lenta no pierde cuadros ni se sale del pulso. Siempre **nombra la herramienta** en el brief; sin eso el resultado cambia cada vez.

Skills de terceros que aparecieron (uso opcional, avisa al usuario): Cinetic (Leonxlnx/cinetic), product-film (Rieranthony/product-film-skill, Remotion), session-story (HyperFrames), generative-film-skill (buildfastwithai). Detalles y comandos en `gallery/00_INDEX.md`.

## 8. Checklist de revisión antes del render final

- ¿Hay **un concepto**, dicho en una línea, y un elemento puente?
- ¿La lista de prohibidos está en el brief, con el sustituto de cada ítem?
- ¿El tiempo está en pulsos/compases, y pasa algo en cada pulso fuerte?
- ¿Cada escena crece desde la anterior (sin crossfade, sin corte muerto)?
- ¿El primer y el último cuadro coinciden (loop) cuando tiene sentido?
- ¿Se renderizó un cuadro por pulso y se miró (nada apretado, superpuesto, fuera de la grilla, ilegible)?
- ¿Ningún número, testimonio o funcionalidad inventados; el texto exacto del usuario preservado?
- ¿El texto que sale de una escena y el que entra tienen tiempos separados (sin letras superpuestas)?

## 9. La "versión completa": qué cambia del prompt original al prompt ejecutable

La mayoría de los prompts originales de la galería es una frase suelta. Para 213 de las 233 entradas existe también una **versión completa**, reescrita en el formato de 6 bloques de la sección 2 (51 de ellas fueron probadas: el video se hizo con la versión completa). Cada entrada de `gallery/*.md` trae las dos, lado a lado. **Cuando construyas un video parecido, parte de la versión completa, no del original.** Las 63 versiones distintas se reducen a pocas familias:

| Familia | Cuándo | Qué agrega al original |
|---|---|---|
| **Showreel** (~75 entradas) | "muestra lo que haces", portafolio, autopresentación | Concepto nombrado antes; cada escena nace de la anterior; rango en partes iguales (tipografía, morph, 2D→3D, datos/UI, título); 120 BPM; banda sonora en código; loop. Variantes: 10, 15, 20, 25 y 30 s. |
| **Video de producto / lanzamiento** (82 entradas, la más común) | producto, app, sitio, marca | **Investigar primero** (qué hace, para quién, interfaz y marca reales) y nunca inventar pantalla, función o número; capturar las pantallas y el logo reales si el usuario no los da; **un objeto-hilo** del propio producto (cursor, botón clave, la marca del logo, un dato) que se transforma en cada escena y se vuelve el logo en la tarjeta final, nombrado antes del storyboard; reconstruir la UI real en capas vectoriales (nunca deslizar una captura); cámara estilo Screen Studio que **nunca queda quieta** (push de 1,0 a 1,04 por escena, cada escena empieza en el zoom en que terminó la anterior); **nada surge de la nada** (crece, se despliega o se revela con máscara); algo cambia en cada pulso; gancho = el problema en 3 a 5 palabras; cierre = nombre + llamada de una línea. |
| **Explainer** (~25 entradas) | explicar un concepto, comando, noticia, artículo, matemáticas | Investigar y **verificar cada número y nombre en una fuente**; el contenido como **un solo diagrama en un espacio continuo** (la cámara entra en una parte y retrocede para mostrar el encaje; rótulos sobre la cosa que nombran, nunca en una leyenda lateral); toda idea recibe **imagen antes que palabra**; una sola cosa se mueve a la vez; las flechas animan en la dirección del flujo; como máximo 7 palabras en pantalla, 0,3 s por palabra; guion de narración escrito primero, **cada línea generada en voz y la animación cronometrada por la duración real del audio**; subtítulos sincronizados línea a línea; storyboard cronometrado antes; gancho = la pregunta que el espectador ya tiene; payoff = retroceso final con el diagrama completo y un resumen de una línea. Matemáticas: Manim. |
| **Corto animado / historia** (~10 entradas) | "una historia que inventes", un clip, un minifilm | Escribir la historia primero: **un deseo claro, tres intentos que fallan de formas distintas y crecientes, un giro, un final que acierta y un chiste del último segundo**; mudo, sin diálogo ni texto, el sonido cuenta la mitad de la historia; actuación: silueta legible, anticipación y follow-through en toda acción, squash & stretch en lo blando, los ojos se mueven primero, poses clave sostenidas ≥ 6 cuadros; puesta en escena: una acción por plano, corte en la acción, el color cambia con el clima; lista de planos con tiempos antes de construir. Trampas: pies y manos fijos donde tocan, mismas proporciones en todo plano, el chiste recibe un respiro de quietud antes de caer. |
| **Música / lyric video** | pista propia o del usuario | Escribir la pista primero (arreglo real: intro, build, drop) en código y guardar los tiempos de nota como datos; cada movimiento visual viene de un sonido (kick, caja, wobble); para música del usuario: grilla de pulsos con numpy + el tiempo de cada palabra cantada (Whisper con timestamps, verificado de oído); versos simples, el estribillo se abre, el mayor momento en el mayor pulso. |
| **Edición de video grabado** (talking head) | cortar un clip crudo para Reels/TikTok | Transcribir con timestamps por palabra y armar la lista de cortes desde el texto; cortar todo silencio, muletilla y falso comienzo; gancho en los 2 primeros segundos con la mejor frase; subtítulos palabra a palabra (1 a 2 palabras, blanco en negrita, sin tapar el rostro); gráficos HTML compuestos sobre el video; música con licencia para la plataforma, atenuada bajo la voz, −14 LUFS; final en una frase limpia, sin fade. Prohibido: stock aleatorio, spam de emojis, zoom punch en cada frase. |
| **Código / 3D / juego** (Three.js, juegos, escena de película) | modelo 3D, juego, sección de sitio, escena recreada | Plano-firma diseñado primero; cámara de cine; luz de tres puntos + ambiente + niebla + materiales físicos + ACES; modo `?render` determinista; 60 fps en el notebook; lista de planos con un movimiento y un evento cada uno. Sección de sitio: 5 secciones con contexto y layout propios, controladas por scroll. Juego: reglas y estado completos, arte hecho en código. |

**Reglas que se repiten en casi todas las versiones completas (tómalas como estándar):**
1. Nunca inventes pantallas, funciones, números, citas ni testimonios. Investiga, o usa lo que el usuario dio.
2. `<inputs>` pide solo lo que falta y **da el valor por defecto** de cada ítem (capturarlo tú mismo, sacarlo del sitio, componerlo en código).
3. **Storyboard cronometrado antes del código**, mostrado al usuario, y luego "construye exactamente eso" sin nuevas preguntas.
4. Un cuadro por pulso (o un cuadro clave por sección) renderizado y **mirado** antes del render final; corregir lo que esté apretado, superpuesto, fuera del pulso o ilegible.
5. Lista de prohibidos fija: partículas, brillos, lens flare, temblor, separación RGB, crossfade, degradado genérico, easing elástico, holds > 0,5 s, "cualquier cosa que parezca plantilla", más ítems como (stock, clip art, spam de emojis, pared de texto).
6. Texto que sale y texto que entra con **tiempos separados**; forma que llena la pantalla escalada **más allá de las cuatro esquinas**; `will-change` nunca en algo que la cámara escala; posiciones de match cut **medidas en runtime**, no fijas en el código.
7. Entrega = el MP4 final (y el HTML, cuando se pida), con un resumen de lo que se decidió.
