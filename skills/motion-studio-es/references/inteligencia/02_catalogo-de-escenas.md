# Catálogo de escenas: 60 patrones con receta en el kit

Cada patrón: **cuándo usarlo** · **receta** (API de `motion.js`) · **error común**. Los números (tiempos, escalas) vienen de lo que funcionó en los mejores prompts y en las pruebas del kit. Combina **3 a 5** por video de 15 s; más que eso se vuelve un desfile. Las técnicas A a H2 de `SKILL.md` (sección 5) tienen código; aquí están las **composiciones** (cómo encadenarlas).

## 1. Aperturas y ganchos (0 a 2 s)

1. **Palabra-gancho en el pulso.** Una a tres palabras entran una por pulso (`M.stagger`, subida de máscara). Cuándo: lanzamiento y hype. Receta: `M.split(el,{mask:'words'})`, `outExpo` 0,5 s, cue `pop` por palabra. Error: más de 5 palabras en el gancho.
2. **El problema en 3 a 5 palabras.** Gancho de producto: el dolor, en tipo grande, **interrumpido** por el objeto-hilo. Receta: título en dos líneas; el objeto-hilo cruza por encima y se vuelve el siguiente elemento. Error: abrir con el logo.
3. **Primer cuadro ya premium.** No existe el "fade in desde negro": el primer cuadro tiene fondo vivo, jerarquía y movimiento en curso (`M.drift`, grano leve). Regla de la galería: "los primeros 1,5 s ya tienen que parecer caros".
4. **Punto sobre negro.** Un punto en pantalla oscura que se vuelve todo (UI, logo, planeta). Receta: círculo `outBack`, luego morph (`M.morpher`) o crecimiento hasta `M.cover`. Cuándo: tech, terminal, producto técnico. Error: un punto que no vuelve al final (el puente tiene que cerrar).
5. **El cursor entra y hace clic.** Cursor en arco (`M.cursorPath`) llega al elemento, gira hacia donde va, crece en el hover, se hunde en el clic (0,85) con anillo y cue `click`. Cuándo: cualquier UI. Error: cursor recto y sin clic.
6. **Estado de apertura = estado final (loop).** Planificar el último cuadro junto con el primero (posición, color, velocidad del cursor). Cuándo: README, feed, loop. Error: último cuadro solo "parecido".

## 2. UI de producto

7. **UI reconstruida en capas.** Nunca deslices una captura plana. Divide la pantalla en componentes (header, card, gráfico, filas) como `div`/SVG que animan solos. Receta: recrea lo esencial a partir de las capturas reales (tokens/colores/fuentes del producto), 5 a 8 regiones animables. Error: captura entera con zoom.
8. **Morph de estados.** Botón → loader → ✓ → card → player → slider → toggle → pestaña → gráfico → ⌘K → toast → botón. Ancho, alto, radio y color interpolados (`M.lerp`, `M.mix`), el contenido cambia con blur corto. Receta C en `briefing-templates.md`. Error: cortar entre estados.
9. **Campo de prompt que teclea.** `M.typewriter` con ritmo humano (cps 18 a 26, pausa en la puntuación), caret encendido mientras teclea, botón que se hunde. Cuándo: producto de IA. Error: texto demasiado largo (> 60 caracteres) en 15 s.
10. **La respuesta llega desplazándose.** Página/card entra desde abajo borrosa y **se asienta** (offsets decrecientes, blur 24 → 0), con un flash leve en el cambio. Error: aparecer sin inercia.
11. **Card que sube sobre la página.** Card blanca con sombra suave sube por encima (`inOutExpo`), la página detrás se desenfoca 2 a 3 px. Cuándo: presentar una funcionalidad. Error: sombra dura.
12. **Lista con stagger por fila.** 4 a 6 filas (miniatura, título, artista, menú) entran con 50 a 90 ms de desfase. Cuándo: apps de música, banco, correo.
13. **Barra de menú / dock / notificación.** Contexto de sistema (menubar del Mac, isla dinámica, lock screen) como escena; el ícono del producto hace clic y el panel "brota" con un resorte (el ancho pasa del objetivo y se asienta). Error: íconos genéricos de banco.
14. **Celular flotante.** Dispositivo ligeramente inclinado (`perspective`), contenido desplazándose, sombra y flotación senoidal; **el dispositivo nace de la pantalla** (el marco crece desde el borde). Cuándo: app móvil.
15. **Bento / dashboard.** Las cards entran por distancia (`M.staggerGrid`), los números cuentan (`M.fmt` + `M.frameT`), las barras crecen. El número héroe se resuelve primero; el apoyo se asienta después.
16. **Glass sobre foto.** Controles en liquid glass (blur del fondo + borde curvado + aro claro + sombra) sobre fotografía real; **sobre fondo blanco, pon una aura pastel detrás**. Error: glass en todo (ver prohibidos).
17. **Aura de entrada estilo "Apple Intelligence".** Degradado cónico desenfocado girando alrededor del campo de prompt. Úsala una vez, en el momento del input.
18. **Selección estilo editor (Figma).** El cursor arrastra una caja de selección; aparecen asas y una etiqueta de tamaño. Cuándo: herramienta de diseño.

## 3. Datos y gráficos

19. **Barras → línea → punto → número.** Barras `outExpo` con stagger; la línea se dibuja (`M.draw`); el punto final `outBack` con anillo; el número héroe cuenta. El ojo sigue un solo orden.
20. **Gráfico y punto en la misma función.** El punto anda con la misma función de resorte que dibuja la curva (si no, el resorte parece falso).
21. **Rosca/torta por porción**, **mapa con ruta** (`getPointAtLength`), **línea de tiempo** con marcador deslizándose: un evento por vez, el rótulo **sobre** la cosa.
22. **Gráfico que "respira" sin inventar datos.** Datos del usuario; sin % inventados. Si no hay datos, usa un ejemplo marcado como "ejemplo".

## 4. Tipografía

23. **Subida de máscara (línea/palabra).** El patrón más fuerte; la salida continúa hacia arriba y es más corta (≈70%).
24. **Cambio de peso en la palabra de énfasis.** Sans black + serif cursiva en el color de acento (nunca las dos formas de énfasis juntas).
25. **Palabra que se transforma letra por letra.** Las letras animan solas; un elemento (un punto) queda pegado a una letra hasta saltar.
26. **Tipografía con rol físico.** Cada palabra se vuelve dintel/cable/apoyo/abertura/plataforma, naciendo de las letras; deformación de baseline.
27. **Letreros diagonales en loop.** Franjas con `x=(t*vel)%patrón`; se cruzan en ángulos y velocidades distintos; cierra sin costura.
28. **Contador con tabular-nums.** Siempre `M.frameT(t)`.
29. **Texto gigante + cámara.** Mayor que el cuadro, recortado, push-in lento, contorno en paralaje. Cuándo: título fuerte y corto.
30. **Anotaciones a mano.** Círculo, flecha, garabato dibujados uno a uno con temblor (`M.noise2`) y `M.draw`. Cuándo: explainer, "papel y marcador".
31. **Subtítulo palabra a palabra.** 1 a 2 palabras por vez, blanco en negrita, nunca tapando el rostro; el tiempo de cada palabra medido del audio.

## 5. Transiciones (la regla: nada de crossfade)

32. **Match cut por objeto.** El objeto de la escena A se vuelve el de la escena B (botón → círculo → planeta; punto del gráfico → esquina de un recibo). Es el elemento puente trabajando. Mide las posiciones **en runtime** (`getBoundingClientRect` en `init`), no las fijes en el código.
33. **Forma que inunda y se contrae.** Un círculo/rectángulo del color de acento llena la pantalla (más allá de las 4 esquinas) y se contrae en la siguiente escena. Es el "drop" cuando cae en el pulso fuerte.
34. **Iris en capas / láminas.** 2 a 3 formas con 60 a 120 ms de desfase; láminas de iris que cierran sobre el contenido y abren sobre otra imagen.
35. **Zoom a través de un agujero.** La letra O, la contraforma de un logo, la pantalla de un celular: escala exponencial hasta que el agujero cubre; la siguiente escena nace dentro.
36. **Whip pan / whip tilt.** El mundo se desliza una pantalla en 8 a 10 cuadros (`curve.swift`) con desenfoque direccional proporcional a la velocidad + `M.blur(...,12)`; flash leve opcional.
37. **Doblez/papel (mapa).** La grilla se despliega por detrás de la forma (centro, cruz, esquinas) y se vuelve bento. Cuándo: transición de "uno" a "muchos".
38. **Corte duro en el pulso del drop.** El único corte seco permitido (2 cuadros **antes** del pulso, para que el ojo lo sienta encima). Máximo 1 a 3 por video.
39. **Blur-dissolve controlado.** Solo si la idea lo pide y **una vez**; si lo usas, que sea un desenfoque direccional, no un fade.

## 6. Forma, personaje y movimiento

40. **Pelotita-personaje.** Squash & stretch (volumen constante), anticipación, ojos en la dirección del movimiento, estela corta. El mejor elemento puente de un reel.
41. **Peluche de forma.** Cuadrado → rotación → píldora → círculo, la misma forma en estados distintos (posición y movimiento preservados).
42. **Pared isométrica de íconos.** Grilla 7×7 revelada radialmente con un ícono héroe (`M.staggerGrid`).
43. **Física que reacciona.** Lo que es golpeado se mueve; lo que está cerca se enciende (un resorte en cada vecino por distancia).
44. **Colisión que toca música.** Cada nota viene de una colisión visible; pista y visual comparten los datos de nota.
45. **Partículas formando la marca** (`M.sampleShape`): **con origen y destino**; nunca una explosión aleatoria.
46. **Semitono (halftone)** que responde a un objeto y revela la tarjeta final.
47. **Campo de flujo/ondas** para un fondo vivo, siempre de bajo contraste y en loop.

## 7. Cámara y profundidad

48. **Cámara nombrada por escena.** Un movimiento por escena (push, pull-back, crane, whip), siempre con ease; nunca zoom in y out seguidos; cada escena **empieza en el zoom en que terminó la anterior**.
49. **Cámara nunca quieta.** Push 1,0 → 1,04 por escena, incluso en un plano "quieto" (`M.drift`).
50. **Zoom estilo Screen Studio.** Para cada momento, encuadrar el elemento que importa; el cursor escala junto.
51. **Paralaje 2.5D y profundidad falsa.** `M.depth(z)`; blur estático en capas lejanas (no animar blur a pantalla completa).
52. **Plano-firma 3D.** Diseña **primero** el plano que alguien capturaría (un retroceso que revela el patrón, un letrero formado visto desde arriba); todo lo demás construye hasta él. Three.js con `--gl`, modo `?render` determinista.

## 8. Cierres

53. **El objeto-hilo se vuelve el logo.** Un elemento del producto (cursor, botón, punto) se vuelve la marca en la tarjeta final. Cierra el concepto.
54. **Tarjeta final en 3 líneas.** Nombre (display), promesa de una línea (serif cursiva), contacto/URL (mono). Hold ≥ 1,2 s (viñeta) o ≥ 0,6 s (sting).
55. **Loop limpio.** Último cuadro = primero. Comparar con `--stills 0,<DUR-0.033>`.
56. **Pregunta final / CTA.** Una sola acción ("Pruébalo gratis en x.com"); nunca más de una.

## 9. Sonido integrado a la escena

57. **Tecleo con sonido** (`type`), **clic** (`click`), **pop por elemento** (`pop`), **whoosh** en los cambios, **impacto grave** (`big`) en el drop. Un sonido por elemento que aparece, silencio en el resto.
58. **Riser que termina en el hit.** El rise crece durante la contracción/anticipación y termina exactamente en el cuadro del impacto.
59. **Música que "cae" con la escena.** El drop de la pista coincide con el flood/corte (alinea por medición, no de oído).
60. **El silencio como recurso.** 0,3 a 0,5 s sin sonido antes del impacto aumentan el impacto.

## Cómo armar una escena a partir del catálogo (ejemplo de 15 s)

`1 (gancho) → 5 (cursor) → 9 (prompt) → 33 (flood en el drop) → 15 (bento) → 50 (zoom en la card) → 53 (el objeto-hilo se vuelve el logo) → 54 (tarjeta final)`. Cuatro ideas visuales, un puente, un pulso fuerte. **Si tu mapa tiene más de 5 ideas para 15 s, corta las más débiles.**
