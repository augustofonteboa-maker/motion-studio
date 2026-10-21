---
name: motion-studio-es
description: Motion design de nivel estudio con código (viñetas, logo animado, transiciones, intros, showreels, videos de lanzamiento, promos de producto, UI motion, tipografía cinética, explainers y loops) en MP4 16:9 y 9:16 con banda sonora. Incluye un playbook y 230 prompts reales de referencia. Úsala cuando pidan una animación, viñeta, intro, video de lanzamiento, showreel o motion.
---

# Motion Studio: motion design con código, nivel estudio

Esta skill convierte un pedido ("anima mi logo", "haz una viñeta", "transición para la clase", "promo de la app", "post animado con números") en un video terminado: **HTML/SVG/Canvas con un `render(t)` determinista → Chromium captura cuadro a cuadro → motion blur por subcuadros → ffmpeg (H.264 BT.709 + AAC) → banda sonora sintetizada y sincronizada evento a evento.** Entrega por defecto: **16:9 (1920×1080) y 9:16 (1080×1920)**, 30 fps, con sonido.

La skill es **neutra**: no parte de ninguna identidad visual fija. Los colores y las fuentes vienen siempre de la marca del proyecto o de una dirección de arte elegida para él (sección 3). La identidad personal del usuario solo entra cuando el proyecto es de su marca.

**Idioma:** escribe el texto en pantalla en el idioma del pedido o de la marca (revisa ortografía y acentos de ese idioma) y habla con el usuario en su idioma. El playbook y las plantillas de `references/` están en español; los prompts de la galería (`references/gallery/`) están en su inglés original, tal como los escribieron los creadores.

---

## 0. Kit (antes de todo)

El kit tiene 5 archivos probados juntos y **viene dentro de esta skill**, en la carpeta `kit/` junto a este SKILL.md: `motion.js` (runtime), `render.mjs` (renderizador), `sound.py` (banda sonora), `fonts.mjs` (fuentes) y `template.html` (escena base). **Nunca reescribas el kit de memoria**; copia la versión oficial a la carpeta del proyecto:

1. Desde la carpeta `kit/` de esta skill (el directorio base de la skill se informa cuando se carga).
2. Si esa carpeta no es accesible, descarga del repositorio oficial, un archivo por vez: `curl -sSLO https://raw.githubusercontent.com/augustofonteboa-maker/motion-studio/main/skills/motion-studio/kit/motion.js` (cambia el nombre del archivo para los otros cuatro).
3. Si nada funciona, pide al usuario que adjunte los 5 archivos.

Ejemplo completo y probado: `examples/demo-reel.html` (showreel de 13 s con tipografía cinética, logo con partículas, flujo de UI, gráfico y whip pan). Para correrlo, dentro de `examples/`: `node ../kit/fonts.mjs "Space Grotesk:400,500,700" "Instrument Serif:400,400i" "JetBrains Mono:400,500"` y luego `node ../kit/render.mjs demo-reel.html --stills 12`. Úsalo como referencia de calidad y de organización del código.

**Referencias (cárgalas bajo demanda, no todas de una vez):** `references/playbook-prompt-motion.md` (lo que enseñan 230 prompts reales: léelo antes de cualquier video de verdad), `references/briefing-templates.md` (11 plantillas de brief listas, de la A a la K), `references/gallery/00_INDEX.md` (230 prompts reales por categoría; abre solo el archivo del tipo de video pedido).

Después, revisa el entorno una vez: `node -v` (≥18), `ffmpeg -version`, `python3 -c "import numpy, scipy"`. Si falta Playwright: `npm i -g playwright && npx playwright install chromium`. Si faltan numpy/scipy: `pip3 install numpy scipy` (en Linux, `--break-system-packages`). En Mac, si falta ffmpeg: `brew install ffmpeg`. Renderiza donde haya Node + Playwright + ffmpeg (el workspace en la nube de Claude ya los tiene). Con más núcleos el render es más rápido (más workers).

Estructura de un proyecto:
```
proyecto/
  motion.js  render.mjs  sound.py  fonts.mjs      (kit)
  fonts/            (generado por fonts.mjs)
  assets/           (logo.svg, fotos, etc.)
  escena.html       (copiada de la plantilla)
  cues.json  pista.wav  salida/
```

---

## 1. Flujo de trabajo

1. **Brief (rápido).** Del pedido toma: objetivo, dónde va a salir (Reels, YouTube, clase, sitio, presentación), duración, **texto exacto**, marca (logo SVG, colores, fuentes), clima del sonido. Si falta el texto o la marca y no se puede deducir, pregunta una vez. Lo demás lo decides con buen gusto y cuentas lo que decidiste. **Un pedido vago ("haz un video chulo", "showreel", "promo de la app") no va directo al código:** arma el brief de 6 bloques (sección 11) a partir de la plantilla más cercana en `references/briefing-templates.md`, con un concepto de una línea, y muestra al usuario el concepto, la paleta, lo que está prohibido y el mapa de pulsos.
2. **Dirección de arte.** La marca del cliente o un preset (sección 3). Define los tokens al inicio de la escena.
3. **Mapa de pulsos.** Escribe (para ti) una tabla `tiempo → qué pasa → cue de sonido → blur`, siguiendo la estructura del formato (sección 6). Piensa en **una idea central**, dicha en una línea, y en un **elemento puente** que une las escenas (una forma, un color, un personaje). Con música o ritmo definido, cuenta en **BPM y compases** (`bpm` en `M.boot`, `M.beat(n)`), con algo pasando en cada pulso fuerte, no en "dinámico".
4. **Escena.** Copia `template.html` → `escena.html`. Crea los elementos una vez; en `render(t)` solo actualiza propiedades. Layout horizontal y vertical con `M.pick(h, v)` y las áreas seguras `M.safe`. Mide los textos en `init()` (después de las fuentes).
5. **Hoja de contacto.** `node render.mjs escena.html --stills 12 --sizes 1920x1080,1080x1920` y **mira las dos imágenes** (Read). Corrige composición, cortes, legibilidad, contraste y áreas seguras antes de cualquier video. En una pieza con pulso, saca **un cuadro por pulso** (`--stills` con los tiempos de los pulsos) y corrige lo que esté fuera de la grilla, apretado, superpuesto o ilegible.
6. **Determinismo.** `node render.mjs escena.html --check` debe dar "idêntico" (idéntico) en todo.
7. **Borrador (opcional, para el ritmo).** `node render.mjs escena.html --draft` (media resolución, sin blur, rápido).
8. **Sonido.** `node render.mjs escena.html --cues cues.json` → `python3 sound.py cues.json pista.wav --mood grave`.
9. **Render final.** `node render.mjs escena.html --name Nombre_Proyecto --sizes 1920x1080,1080x1920 --audio pista.wav --outdir salida`
10. **QA** (sección 9) y luego **entrega**: guarda los archivos en la carpeta del proyecto del usuario (en su computadora, si está conectada), envía los videos y di en 1 o 2 frases lo que se hizo. Ofrece los ajustes más probables (texto, tiempo, color, sonido).

En un pedido de ajuste: edita solo lo que cambió en la escena, rehaz la hoja de contacto de ese tramo (`--stills 3.2,3.6,4.0`) y renderiza de nuevo. No reescribas la escena desde cero.

---

## 2. Reglas de oro (técnicas)

- **`render(t)` es una función pura del tiempo.** Prohibido en el render: `requestAnimationFrame`, `setTimeout`, `Date`, `performance.now`, `Math.random`, CSS `transition`/`animation`, estado acumulado entre cuadros. Aleatorio solo con `M.rng(seed)` / `M.hash(i, j, seed)` / `M.noise2`. Simulación (partículas con física) = **precalcula en `init()`** e indexa por `t`.
- **Todo se crea una vez y se actualiza en el render.** No recrees el DOM por cuadro.
- **Fuentes locales** con `fonts.mjs` (Google Fonts → `fonts/fonts.css`). Nada de fuente del sistema como fuente principal.
- **Los cues de sonido y `M.blur` se registran en el montaje** (fuera del render), con los mismos tiempos que las acciones.
- **Texto que cambia de valor** (contador, tipeo, scramble, timecode, porcentaje) usa `M.frameT(t)` (tiempo del centro del cuadro). Sin eso el motion blur mezcla dos valores y aparece un dígito fantasma.
- **Escala:** usa `u(x) = x * M.S` (M.S = lado menor / 1080) para todo tamaño. Así la misma escena sirve para 16:9, 9:16, 1:1 y 4:5.
- **Movimiento rápido = más muestras de blur:** marca con `M.blur(t0, t1, 6)` (moderado) o `12` (whip, iris, morph rápido, vuelo). Fuera de eso el valor por defecto es 4, y los cuadros quietos se detectan solos.
- **Nada de efectos pesados a pantalla completa** (mix-blend-mode, backdrop-filter, filter: blur grande) durante toda la escena. Cada uno cuesta decenas de ms por cuadro. Úsalos puntualmente.
- **Imágenes:** `<img>`/SVG locales en `assets/`. El video dentro de la escena no es determinista: extrae cuadros con ffmpeg y cambia el `src` por índice (`Math.floor(t*fps)`), o compón después con ffmpeg overlay.
- **WebGL/Three.js:** `--gl`, `preserveDrawingBuffer: true`, y llama a `renderer.render()` dentro de `render(t)`.

---

## 3. Dirección de arte (siempre del proyecto)

**Procedimiento:**
1. El cliente tiene marca → usa la suya (logo SVG, colores, fuentes). Fuente propietaria no disponible → pide el archivo o usa la equivalente más cercana de Google Fonts y di cuál.
2. Sin marca → elige el preset por tono y público. Ajusta 1 color de acento al segmento si tiene sentido.
3. Tokens: `bg, surface, ink, muted, accent, accent2`. Proporción 60/30/10 (fondo/apoyo/acento). Texto con contraste ≥ 4.5:1 (`M.contrast(a, b)`).
4. Tipografía: como máximo 2 familias + 1 mono opcional. Display con peso alto y tracking negativo (−2% a −5%); énfasis en serif cursiva o en el color de acento, nunca en las dos a la vez.
5. El fondo nunca "muerto": grilla sutil, degradado, textura, grano leve o formas grandes desenfocadas.
6. Composición: un punto focal por cuadro, mucho espacio negativo, alineación en una grilla (12 columnas en 16:9, 6 en 9:16), tercios para los elementos de apoyo. Nunca pegues texto al borde.
7. Texto bien acabado: `font-kerning: normal`, comillas y rayas correctas, números tabulares en contadores, sin palabra sola en la última línea de un título.

**Presets (elige uno y adáptalo):**

| # | Preset | Paleta | Fuentes (Google) | Personalidad del movimiento |
|---|---|---|---|---|
| 1 | Editorial suizo | `#F2EFE8` `#121212` `#E5372B` `#8C8A84` | Space Grotesk 700 + Instrument Serif cursiva + JetBrains Mono | grilla, máscaras, cortes secos, expo out |
| 2 | Tech nocturno | `#07080B` `#12141A` `#E8ECF2` `#38E1FF` `#B8FF5C` | Geist 600 + Geist Mono | HUD, scramble, glow, partículas, líneas de barrido |
| 3 | Neobrutalista | `#FFF4D6` `#0D0D0D` `#E6FF2E` `#FF5DA2` `#3B5BFF` | Archivo Black + Space Mono | sombra dura desplazada, stickers, back out fuerte, cortes en el pulso |
| 4 | Lujo monocromático | `#0B0B0C` `#F3EEE6` `#C8A464` `#6E6A63` | Cormorant Garamond cursiva + Manrope 300 (tracking alto) | lento (0,9 a 1,6 s), in-out sine, brillo que barre, sin rebote |
| 5 | Soft UI pastel | `#F6F4FF` `#1C1A2E` `#B9B2FF` `#FFC9A8` `#A8EBD1` | Plus Jakarta Sans 600/800 | resortes suaves, esquinas redondeadas, morphs de UI, sombras difusas |
| 6 | Orgánico tierra | `#EEE5D6` `#C4643D` `#59683A` `#2A1F17` `#D9C7A7` | Fraunces 600 + DM Sans | morph líquido, crecimiento, ritmo calmo |
| 7 | Risograph retro | `#F3EADB` `#0B6CB5` `#FF4FA3` `#FFD400` `#1A1A1A` | Rubik Mono One + IBM Plex Mono | color desalineado, semitono, animar "a doses" (`M.step(t, 12)`) |
| 8 | Corporativo confianza | `#FFFFFF` `#0B1F3A` `#2563EB` `#E8EEF8` `#64748B` | Manrope 700 + Inter 400 | curvas Material, gráficos, íconos de línea, sobrio |
| 9 | Deporte / energía | `#0A0A0A` `#D4FF00` `#FFFFFF` `#FF5A1F` | Anton + Barlow Condensed 600 cursiva | skew, speed lines, whip pan, impact frame, temblor |
| 10 | Y2K cromado | `#C9D3E6→#F5F7FB` `#2B59FF` `#0A0A12` `#FF7AD9` | Syne 800 + Unbounded 500 | giro 3D (perspective), brillo especular, burbujas glossy |
| 11 | Cine noir | `#050505` `#EDE6DA` `#B3121F` `#3A3A3A` | Playfair Display 700 cursiva + Inter Tight | letterbox 2.39:1, push-in lento, grano fuerte, fades largos |
| 12 | Lúdico / infantil | `#BFE6FF` `#FFD84D` `#FF7A6B` `#5ED39B` `#1E2A44` | Baloo 2 800 + Fredoka 500 | squash & stretch, rebote, personajes que respiran |

Descargar fuentes: `node fonts.mjs "Space Grotesk:400,700" "Instrument Serif:400,400i" "JetBrains Mono:500"`.

**Tamaños mínimos (lado menor = 1080 px):** título 120 a 240 px · subtítulo 56 a 90 · texto de apoyo ≥ 32 (en vertical ≥ 36) · rótulos mono ≥ 18. Como máximo 6 a 8 palabras por pantalla.

**Áreas seguras (`M.safe`):** en 9:16, nada importante en el 13% de arriba, el 22% de abajo ni el 14% de la derecha (interfaz de Reels/TikTok/Shorts). En 16:9, margen del 5%. Prueba con `?dev=1` y la tecla **S**.

---

## 4. Timing, easing y coreografía

**Duraciones (30 fps):**
- Micro (clic, hover, toque): 80 a 150 ms (3 a 5 cuadros)
- Elemento pequeño entrando: 300 a 500 ms
- Título o elemento grande: 500 a 900 ms
- Transición entre escenas: 300 a 600 ms (whip pan: 250 a 350 ms)
- Hold de lectura: 0,3 s + 0,25 s por palabra (mínimo 1 s para un título)
- Logo final quieto: ≥ 1,2 s (viñeta) o ≥ 0,6 s (sting)

**Curvas (`M.ease`, `M.curve`, `M.spring`):**
- **Entrar:** desacelera → `outExpo`, `outQuint`, `M.curve.snappy` (firma del motion premium)
- **Salir:** acelera y es más corto que la entrada (≈70%) → `inCubic`, `inExpo`, `M.curve.accel`
- **Mover dentro de la pantalla:** `inOutCubic`, `M.curve.standard`. Desplazamiento grande o zoom: `inOutExpo`
- **Personalidad:** `outBack(p, 1.2–2)` para juguetón; `M.springAt(t, t0, 'bouncy'|'snappy'|'gentle'|'wobbly')` para orgánico; `inOutSine` para lujo y calma
- **Escala/zoom:** interpola con `M.expLerp` (velocidad percibida constante); "zoom a través" = escala exponencial hasta cubrir (`M.cover`)
- Nunca uses `linear` en posición; solo en rotación continua, letrero y contador de tiempo.

**Coreografía:**
- **Stagger:** letras 20 a 40 ms · palabras 60 a 120 ms · cards/ítems 50 a 90 ms · grilla por distancia 20 a 40 ms (`M.stagger`, `M.staggerGrid`)
- **Superposición:** la siguiente acción empieza cuando la anterior va al 60 a 80%. Nunca esperes a que todo pare.
- **Anticipación:** 3 a 6 cuadros retrocediendo 5 a 10% antes de un movimiento grande (`M.curve.anticipate`)
- **Follow-through:** las partes secundarias llegan después y se asientan (overshoot pequeño)
- **Jerarquía:** un foco por vez; el movimiento secundario es menor y más lento
- **Arcos:** objetos y cursores van en curva (`M.arc`, `M.cursorPath`), no en línea recta
- **Vida:** nada queda 100% quieto. Usa deriva sutil (`M.drift`), push-in de 2 a 4% a lo largo del plano, brillo que respira
- **Ritmo:** varía (corto, corto, largo). Con música de BPM fijo, alinea los pulsos (`M.beat(n)`)
- **Contraste de escala:** alterna plano abierto y detalle; cambia el color de fondo en cada escena de un reel
- **La opacidad sola es débil:** combínala con desplazamiento, escala, máscara o blur

---

## 5. Biblioteca de técnicas (las mejores, con receta)

Cada ítem: **qué es** → cómo hacerlo con el kit. Combina 3 a 6 por pieza; no uses todo.

**A. Tipografía cinética**
1. **Subir desde dentro de la máscara** (la más fuerte). `M.split(el, {mask:'lines'|'words'})`; anima `.in` de `y: 100%` → 0 con `outExpo` 0,6 a 0,8 s y stagger de 60 a 90 ms; sale continuando hacia arriba con `inCubic`.
2. **Cascada de letras.** `split().chars`, y +40%, rotación 6 a 10°, `outExpo`/`outBack(1.4)`, stagger 25 a 35 ms.
3. **Decodificación (scramble).** `M.scramble(texto, p, {tick: Math.floor(t*20)})`: glifos aleatorios se resuelven de izquierda a derecha. Combina con tech y HUD.
4. **Tipeo humano.** `M.typewriter(texto, M.frameT(t), t0)` → `{text, caret}`, ritmo irregular y pausa en la puntuación. Cue `type`.
5. **Mezcla de pesos.** Sans black + serif cursiva en la palabra de énfasis (color de acento) + subrayado que se dibuja (`M.draw`).
6. **Cambio de palabra (slot).** Palabras apiladas en una máscara de una línea; el cambio con `inOutExpo` y leve overshoot.
7. **Contador.** `M.fmt(valor, {prefix:'+', suffix:'%'})` con `outExpo` en 1 a 1,5 s, calculado con `M.frameT(t)`; `font-variant-numeric: tabular-nums`.
8. **Letrero en franja (marquee).** Franjas diagonales, `x = (t*vel) % anchoDelPatrón`; loop sin costura.
9. **Tracking/peso variable.** Fuente variable: anima `font-variation-settings: 'wght'` y `letter-spacing` (−0,05em → 0,3em).
10. **Tipografía gigante + cámara.** Texto mayor que el cuadro, recortado, con push-in lento y una copia en contorno (stroke) desplazada en paralaje.
11. **Anotaciones a mano.** Círculos y flechas con temblor (`M.noise2` en el radio), dibujados con `M.draw`, uno a la vez.

**B. Logo**
12. **Construcción geométrica** (grilla → trazos → relleno). Las guías se dibujan desde el centro, círculos punteados con `M.draw`, arcos en stroke, cambio al relleno con flash o anillo; leve pop (`1 + 0.07·sin`).
13. **Partículas formando la marca.** `M.sampleShape({d})` o `({text, font})` en `init()`; las partículas salen de posiciones con semilla con deriva de ruido y convergen con `inOutCubic` y retraso individual; la forma sólida entra en el impacto (cue `big`).
14. **Montaje por piezas.** Cada parte entra desde un desplazamiento/rotación distinto, `outExpo` + stagger; la última pieza "traba" con un resorte.
15. **Morph de primitiva a logo.** `M.morpher(dCírculo, dLogo)` → `f(p)` devuelve el `d` intermedio (una forma cerrada por vez).
16. **Revelación por máscara/wipe.** Rectángulo o forma de la marca barriendo; `clip-path` en HTML o `<mask>` en SVG.
17. **Lockup.** El ícono nace centrado y se desliza (`inOutExpo`) para abrir espacio; el nombre sube desde la máscara.
18. **Brillo que barre.** Franja en degradado inclinada pasando por el lockup (mask/soft-light), 0,6 a 0,8 s.
19. **Sting (1 s).** Un solo gesto: punto cae → squash → logo pop (resorte). Cues `pop` + `hit`.

**C. Transiciones**
20. **Wipe por forma (iris en capas).** 2 a 3 formas (color A, color B, fondo de la siguiente escena) creciendo desde un punto con 60 a 120 ms de retraso entre ellas; radio con `M.expLerp` hasta `M.cover`.
21. **Zoom a través.** Escala exponencial hacia un "agujero" (contraforma del logo, letra O, pantalla de celular) y la siguiente escena aparece dentro.
22. **Whip pan.** Todo el mundo se desliza una pantalla en 8 a 10 cuadros (`M.curve.swift`) + desenfoque direccional proporcional a la velocidad (filtro SVG `feGaussianBlur stdDeviation="X 0"`) + `M.blur(...,12)`.
23. **Persianas/franjas.** 8 a 12 tiras con `scaleY` y stagger de 20 a 30 ms.
24. **Match cut / morph de objeto.** El elemento de la escena A se convierte en el de la escena B (botón → círculo → planeta). Es el "elemento puente".
25. **Corte con flash/luz.** Pico de luz radial (screen) de 3 a 5 cuadros exactamente en el corte.
26. **Glitch.** 3 a 5 cuadros: rebanadas horizontales desplazadas + separación RGB (copias con `mix-blend-mode: screen` en R/G/B).
27. **Cartas 3D.** `perspective` + `rotateY` (flip) o cards volando con profundidad y rotaciones distintas.
28. **Blob/tinta (gooey).** Círculos con filtro SVG `feGaussianBlur` + `feColorMatrix` (alfa 18 −7) fusionándose.

**D. UI de producto**
29. **Cursor coreografiado.** `M.cursor()` + `M.cursorPath(t, keys)` en arcos; clic = escala 0,85 en 3 cuadros + anillo (`ripple`). Cue `click`.
30. **Morph de estados.** Botón → loader → ✓ → card, sin cortes: ancho/alto/radio interpolados y color con `M.mix` (OKLab).
31. **Flujo de IA.** Caja de prompt tipeando → envío → colapso en un punto → el resultado se monta.
32. **Mockup flotante.** Celular/laptop inclinado (perspective) con contenido desplazándose dentro, sombra y flotación senoidal.
33. **Bento/dashboard.** Las cards entran en una grilla con stagger por distancia; los números cuentan; las barras crecen.
34. **Notificaciones apilándose.** Los toasts entran con un resorte y empujan a los anteriores.

**E. Datos**
35. **Barras + línea + punto.** Las barras crecen con stagger `outExpo`; la línea se dibuja encima (`M.draw`); el punto final entra con `outBack` y un anillo pulsando; el número héroe cuenta.
36. **Rosca/torta.** `stroke-dasharray` en círculo por porciones, una a la vez.
37. **Mapa/ruta.** Camino dibujándose + un marcador andando por el path (`getPointAtLength`).

**F. Generativo y partículas**
38. **Campo de flujo.** Partículas siguiendo `M.curl(x, y, t)` (precalcula las trayectorias en `init` si se integran).
39. **Onda en grilla/isométrico.** `h = f(sin(dist − t·vel))`; las baldosas se levantan en la diagonal (`M.staggerGrid`).
40. **Órbitas.** Satélites en elipses con ordenación de profundidad (escala y opacidad por z).
41. **Explosión de rayos.** Rayos cónicos girando despacio detrás del héroe + partículas saliendo.
42. **Pared de íconos.** Grilla grande revelada radialmente desde el centro, con un ícono destacado.

**G. Cámara y profundidad**
43. **Paralaje 2.5D.** Capas con `M.depth(z)`; cámara `M.cam({x, y, zoom, r})` en el grupo-mundo.
44. **Temblor de impacto.** `M.shake(t, t0, {amp: u(8–20), dur: 0.3})` solo en el cuadro del hit.
45. **Profundidad de campo falsa.** Capas lejanas con `filter: blur()` estático (no animado a pantalla completa).

**H. Personaje**
46. **Pelotita-personaje.** Squash & stretch en el contacto (volumen constante: `sx = 1/sy`), anticipación antes del salto, ojos mirando hacia la dirección del movimiento, estela corta. Es el mejor elemento puente de un reel.

**H2. Técnicas de la galería de 230 prompts (usa 1 o 2 como idea central, no todas)**
48. **Una forma que nunca corta.** Un único elemento se convierte en todos los estados (botón → loader → check → player → slider → toggle → pestaña → gráfico → ⌘K → toast → botón): ancho, alto, radio y color interpolados, el contenido cambia con un blur corto, el cursor hace clics y arrastres reales, último cuadro = primero. Ver la receta C en `briefing-templates.md`.
49. **Continuous take.** "Nada hace fade, desenfoca o corta": el texto sube de una línea de máscara, los íconos nacen de cero con un resorte, una forma oscura inunda el cuadro y se contrae en la siguiente escena. Cámara estilo Screen Studio: zoom hasta que cada momento llene el cuadro, y el cursor escala junto.
50. **El "drop".** En el pulso fuerte de la música, un círculo del color de acento crece desde un objeto (botón, wok, punto) e inunda la pantalla en ~0,35 s, cambiando la escena. Cue `big` en el mismo cuadro.
51. **Liquid glass.** Desenfoque del fondo detrás del control + curvar la escena en el borde como un vidrio grueso + brillo arriba + aro claro + sombra de elevación. Sobre fondo blanco el vidrio desaparece: pon una aura pastel lenta detrás.
52. **Aura "Apple Intelligence".** Degradado cónico desenfocado girando por rosa, naranja, lima, cian y violeta alrededor del campo de entrada.
53. **Semitono (halftone).** Grilla de puntos cuyo radio responde a un objeto (o a su distancia); crece más allá de los bordes y revela la tarjeta final.
54. **Palabra que se transforma letra por letra.** Cada letra anima sola (`split().chars`) para que "Reduce Motion" se vuelva "Motion", con el punto pegado a la "i" hasta saltar; palabras en órbita que se abren en un campo de puntos.
55. **Tipografía con rol físico.** Cada palabra clave se vuelve dintel, cable, apoyo, abertura o plataforma, naciendo de las propias letras (deformación vectorial de la baseline), y la frase final se sostiene sobre lo que se construyó.
56. **Cámara que nunca corta en un cuadro quieto.** Cada plano entra ya en movimiento (ease-out exponencial, ~12 a 19% de la distancia restante por cuadro) y sale acelerando o en una rampa de blur; un movimiento de cámara por escena, sin zoom in y out seguidos.
57. **Cursor con intención.** Gira hacia donde va, crece en el hover, se hunde en el clic (0,85), anillo de ripple, cue `click`.
58. **Dos lados, dos resortes.** Indicador de pestaña y knob de toggle con los bordes en resortes distintos: el de adelante se estira antes que el de atrás (líquido). Un valor que cambia de objetivo varias veces = suma de un resorte por cambio, sigue siendo función pura del tiempo.

**I. Acabado**
59. **Grano** (`M.grain`, por defecto 2%, cambia 8×/s) contra el banding en degradados y para textura. El ruido no comprime: el grano fuerte multiplica el tamaño del archivo (medido: de 0,3 MB a 8 MB en 3 s), así que úsalo leve, o fuerte solo en estética de cine · **viñeta** suave (`M.vignette`, 0,1 a 0,3) · **glow** = copia desenfocada detrás · **HUD** (esquinas, timecode real, rótulos mono) · **letterbox** · **motion blur** siempre.

### Recetas de código (probadas; copia y adapta)

```js
// 1. Subir desde dentro de la máscara — init: S = M.split(titulo, {mask:'lines'})
S.lines.forEach((ln, i) => {
  const q = E.outExpo(M.seg(t, 0.2 + i * 0.08, 0.9 + i * 0.08)), o = E.inCubic(M.seg(t, 2.2 + i * 0.05, 2.55 + i * 0.05));
  M.css(ln.in, { transform: { y: (1 - q) * ln.offsetHeight * 1.1 - o * ln.offsetHeight * 1.2 } });
});

// 2. Iris en capas desde (px,py) — 3 <circle> de colores distintos; montaje: M.blur(t0, t0+0.6, 12)
[irA, irB, irC].forEach((c, i) => { const p = E.inOutCubic(M.seg(t, t0 + i * 0.1, t0 + 0.35 + i * 0.1));
  M.attr(c, { cx: px, cy: py, r: p > 0 ? M.expLerp(4, M.cover(1, px, py) * 1.02, p) : 0 }); });

// 3. Whip pan con desenfoque direccional — montaje: <filter id="hb"><feGaussianBlur id="hbg" stdDeviation="0 0"/></filter>
const sw = x => M.curve.swift(M.seg(x, t0, t0 + 0.32)), p = sw(t), vel = Math.abs(sw(t + 0.01) - sw(t - 0.01)) / 0.02;
M.css(escenaA, { transform: { x: -W * p }, filter: vel > 0.2 ? 'url(#hb)' : 'none' });
M.css(escenaB, { transform: { x: W * (1 - p) }, filter: vel > 0.2 ? 'url(#hb)' : 'none' });
hbg.setAttribute('stdDeviation', `${Math.min(u(70), vel * u(9))} 0`);

// 4. Partículas formando la marca (canvas) — init: pts = M.sampleShape({d: LOGO}, 600); posiciones iniciales con M.rng
for (const o of PTS) { const q = E.inOutCubic(M.seg(t, 1.0 + o.d, 1.9 + o.d)), n = M.curl(o.sx * 0.002, o.sy * 0.002, t * 0.3);
  ctx.fillStyle = o.c; ctx.beginPath();
  ctx.arc(M.lerp(o.sx + n[0] * u(60) * (1 - q), ox + o.p[0] * k, q), M.lerp(o.sy + n[1] * u(60) * (1 - q), oy + o.p[1] * k, q), u(3), 0, 6.283); ctx.fill(); }

// 5. Cursor en arco + clic — montaje: cur = M.cursor(capa, {size: u(44)}); M.cue(1.65, 'click')
const cp = M.cursorPath(t, [[1.0, [W + u(60), H + u(80)]], [1.6, boton], [1.75, boton], [2.3, [W * 0.9, H * 1.1]]]);
M.css(cur, { transform: { x: cp[0], y: cp[1], s: 1 - 0.15 * M.pulse(t, 1.65, 0.07) } });

// 6. Morph de UI: botón -> círculo -> card
const col = E.inOutExpo(M.seg(t, 2.0, 2.4)), ex = E.inOutExpo(M.seg(t, 2.9, 3.3));
const bw = M.lerp(M.lerp(BTN.w, BTN.h, col), CARD.w, ex), bh = M.lerp(BTN.h, CARD.h, ex);
M.css(box, { width: bw + 'px', height: bh + 'px', left: (cx - bw / 2) + 'px', top: (cy - bh / 2) + 'px', borderRadius: M.lerp(bh / 2, u(24), ex) + 'px', background: M.mix(C.surface, C.accent, col * (1 - ex)) });

// 7. Número héroe + barras + línea
num.textContent = M.fmt(248 * E.outExpo(M.seg(M.frameT(t), 0.3, 1.6)), { prefix: '+', suffix: '%' });   // frameT: sin dígito fantasma
bars.forEach((b, i) => { const q = E.outExpo(M.seg(t, 0.3 + i * 0.09, 1.0 + i * 0.09)); M.attr(b, { y: base - alt[i] * q, height: alt[i] * q }); });
M.draw(linea, E.inOutCubic(M.seg(t, 0.9, 1.5)));

// 8. Impacto: temblor + pop + anillo — montaje: M.cue(tHit, 'big')
const sk = M.shake(t, tHit, { amp: u(10), dur: 0.3 }), pop = 1 + 0.08 * Math.sin(Math.PI * M.seg(t, tHit, tHit + 0.3));
grupo.setAttribute('transform', `translate(${x + sk.x} ${y + sk.y}) rotate(${sk.r}) scale(${k * pop})`);
const rr = M.seg(t, tHit, tHit + 0.6); M.attr(anillo, { r: u(120) + u(320) * E.outExpo(rr), opacity: rr > 0 && rr < 1 ? 1 - rr : 0 });

// 9. Pelotita con squash & stretch (transform-origin: 50% 100%)
const pj = M.seg(t, t0, t0 + 0.6), contacto = M.pulse(t, t0 + 0.6, 0.08), sy = 1 - 0.35 * contacto + 0.15 * Math.abs(Math.cos(Math.PI * pj)) * (1 - contacto);
M.css(bola, { transform: { x: M.lerp(xA, xB, pj), y: suelo - Math.sin(Math.PI * pj) * altura, sx: 1 / sy, sy } });

// 10. Decodificación estilo HUD
const ft = M.frameT(t); titulo.textContent = M.scramble('SISTEMA ONLINE', M.seg(ft, 1, 2.2), { tick: Math.floor(ft * 20) });
```

---

## 6. Estructuras por formato

- **Viñeta / revelación de logo (3 a 10 s):** gancho en 0,5 s (fondo vivo + primer elemento) → construcción (1,5 a 3 s) → revelación (hit + flash/anillo) → lockup + hold ≥ 1,2 s → salida opcional. Haz también la **versión corta** (sting de 1 a 3 s) reutilizando la misma escena con el tiempo remapeado: una bandera en la URL como `?curta=1` leída con `M.Q` y, en el render, `t = M.remap(t, [[0,0.55],[0.5,1.95],[1,3.35],[2.25,6.62],[3,9.5]])` (tramos acelerados, momentos clave preservados). Los cues y `DUR` de la versión corta también se remapean.
- **Transición (0,6 a 1,7 s):** cubre → cambia → descubre. Ofrece la versión overlay transparente (`--alpha`).
- **Apertura de clase/video (5 a 8 s):** contexto (prompt/pantalla/herramienta) → título cinético → firma o episodio.
- **Showreel / manifiesto (15 a 30 s):** 5 a 8 escenas de 2 a 4 s, elemento puente atravesando todo, cambio de fondo en cada escena, cortes en el ritmo, final con logo + CTA.
- **Promo de producto/app (15 a 30 s):** dolor (2 s) → producto en el mockup → 3 beneficios con micro-UI (2 a 3 s cada uno) → prueba (número) → CTA.
- **Post de datos (6 a 10 s):** número héroe + gráfico + leyenda; cierra en loop.
- **Loop (4 a 8 s):** estado final igual al inicial; compara el primer y el último cuadro (`--stills 0,<DUR − 0.033>`).
- **Lower third / leyenda (3 a 5 s, alfa):** la barra entra, el nombre sube desde la máscara, sale en orden inverso.

---

## 7. Sonido

- La banda sonora nace de los **cues** de la escena: `M.cue(t, tipo, {...})` en el mismo tiempo que la acción visual. Tipos: `hit`, `big`, `rise {len}`, `whoosh {len}`, `pop`, `tick`, `click`, `type {len, rate}`, `notes {notes, step}`, `pulse {n, every}`, `swell {len}`, `end`, `chord`.
- Moods de `sound.py`: **`grave`** (por defecto: cinematográfico en Re menor, pad cálido, piano suave, impactos graves, risers de filtro, **sin agudos y sin sonido de viento**), `epico`, `tech`, `clean`, `ambient`, `pop`. Tono: `--key`.
- Reglas: impacto exactamente en el cuadro de la revelación; el riser termina en el hit; tipeo con `type`; nada de sonido en cada micromovimiento (elige los momentos).
- Loudness final: `render.mjs` normaliza en 2 pasadas a **−14 LUFS** y pico real −1,5 dBTP (`--lufs` lo cambia).
- Música del usuario o de banco: pasa el archivo en `--audio`; alinea los hits a los tiempos de la música (BPM → `M.beat`).
- Si no piden sonido → genera igualmente una versión con banda sonora y menciona que se puede quitar.

---

## 8. Render, formatos y entrega

```bash
node render.mjs escena.html --stills 12 --sizes 1920x1080,1080x1920      # hoja de contacto
node render.mjs escena.html --check                                       # determinismo
node render.mjs escena.html --draft                                       # borrador rápido
node render.mjs escena.html --cues cues.json && python3 sound.py cues.json pista.wav --mood grave
node render.mjs escena.html --name Cliente_Vineta --sizes 1920x1080,1080x1920 --audio pista.wav --outdir salida
node render.mjs overlay.html --alpha --name Cliente_Transicion --sizes 1920x1080,1080x1920   # .mov ProRes 4444 + .webm + _GREEN.mp4
```
- Tamaños: 16:9 `1920x1080` · 9:16 `1080x1920` · 1:1 `1080x1080` · 4:5 `1080x1350` · 4K `3840x2160` (o `--ss 2` para supersampling).
- Nombre: `Nombre_16x9_1920x1080.mp4` (automático con `--name`).
- Salida: H.264 High, yuv420p, **BT.709 marcado** (colores iguales en todo reproductor), CRF 17, AAC 320k 48 kHz, faststart.
- Opciones útiles: `--fps 60` (UI muy fluida), `--sub 6` (más blur en todo), `--workers N`, `--from/--to` (un tramo), `--crf 20` (archivo más pequeño), `--grain 4` (grano en ffmpeg; aumenta mucho el tamaño, solo para entregas de cine), `--params "texto=Hola"` (variables en la URL de la escena → `M.Q.get('texto')`).
- **Velocidad:** itera con `--stills` y `--draft`; render final solo al final. Referencia: ~1,5 cuadros/s con 2 núcleos y blur activado; crece casi lineal con `--workers` (en Mac, núcleos − 1). Cada tramo con `M.blur(...,12)` cuesta 3× más.
- **Lote de variaciones** (misma escena, textos distintos): lee `M.Q.get('titulo')` en la escena y corre en bucle: `for t in "Clase 1" "Clase 2"; do node render.mjs escena.html --params "titulo=$t" --name "Transicion_${t// /}" ...; done`.

---

## 9. QA (antes de entregar)

- [ ] Hojas de contacto 16:9 y 9:16 revisadas (Read en las imágenes): nada cortado, áreas seguras ok, contraste ok, jerarquía clara
- [ ] `--check` con todo "idêntico"
- [ ] Extrae 2 o 3 cuadros de los momentos más rápidos del MP4 final (`ffmpeg -ss T -i v.mp4 -frames:v 1 q.jpg`) y confirma que el blur es liso, sin "escalones"; si los hay, marca `M.blur` con más muestras
- [ ] Textos: ortografía/acentos en el idioma del video, tiempo de lectura suficiente, ninguna palabra huérfana fea
- [ ] Primer cuadro bueno (sirve de portada) y último cuadro limpio (o loop perfecto)
- [ ] `ffprobe`: fps, nº de cuadros, duración, bt709, pista de audio presente
- [ ] Sonido: impactos alineados con las revelaciones (compara los tiempos de los cues con los cuadros), sin saturación
- [ ] Ambas proporciones exportadas y guardadas en la carpeta del proyecto
- [ ] Anti-"cara de IA" (sección 11): ningún brillo, partícula, crossfade, temblor, texto de esquina o degradado genérico sin motivo; ningún hold muerto (> 1 s sin lectura); ninguna plantilla obvia
- [ ] Ningún número, testimonio, cliente o funcionalidad inventados; el texto del usuario idéntico

---

## 10. Problemas comunes

| Síntoma | Causa → solución |
|---|---|
| Fuente equivocada en el video | fuente no local → `fonts.mjs` + `<link href="fonts/fonts.css">`; medidas solo en `init()` |
| `--check` diferente | estado entre cuadros / reloj / `Math.random` → función pura, precálculo en `init`, `M.rng` |
| Copias "fantasma" en movimiento rápido | pocas muestras → `M.blur(t0, t1, 12)` en el tramo |
| Dígito/letra fantasma en un contador o tipeo | texto calculado con `t` → usa `M.frameT(t)` |
| Bandas en el degradado (banding) | 8 bits → `M.grain` leve o degradado con más paradas |
| Archivo enorme | grano fuerte/ruido a pantalla completa → grano 2% (por defecto) o `--crf 20` |
| Render muy lento | efecto pesado a pantalla completa, PNG, escena enorme → evita blend/backdrop-filter continuos; JPEG (por defecto); `--workers`; itera con `--draft` |
| Un elemento parpadea entre planos | dos planos visibles/ocultos en el mismo cuadro → superposición con `M.on(t, plano, pad)` |
| El texto salta de línea distinto en 9:16 | ancho fijo → `M.pick` con tamaños por formato y revisar en la hoja de contacto |
| Color distinto en Instagram | archivo sin etiqueta → usa la salida de `render.mjs` (ya es BT.709); no recodifiques sin `-colorspace bt709` |
| Transparencia con borde oscuro | alfa no premultiplicado → usa el `--alpha` del kit (ya premultiplica en el blur) |

---

## 11. Brief de campeón, anti-"cara de IA" y biblioteca de referencia

Base: análisis de 230 prompts reales hechos en Claude (galería pública, sep/oct de 2026). Un prompt de 26 palabras pegado 33 veces dio resultados de 0 a 17 mil likes: **un prompt vago deja todo al azar**; los largos tuvieron una mediana 11× mayor. Detalles en `references/playbook-prompt-motion.md`.

**Los 6 bloques de un brief (para que los armes antes de construir, en un pedido de video de verdad):**
1. **inputs:** lo que solo el usuario sabe (nombre, logo, color de acento, texto exacto, pista), con **valores por defecto** si los omite. Pregunta una vez.
2. **direction:** **un concepto** en una línea + **elemento puente** + look cerrado (1 a 2 fuentes, ≤ 3 colores + blanco/negro, 1 acento, un lenguaje de cámara) + **lista de prohibidos**.
3. **structure:** el tiempo en **BPM y compases**; gancho en el 1er compás, una técnica por compás saliendo de la anterior, el momento más fuerte en el penúltimo, título al final, último cuadro = primero cuando tenga sentido.
4. **build:** método de render explícito (aquí: el kit, `render(t)` puro, blur por subcuadros, banda sonora por cues, 60 fps si es UI fluida).
5. **gotchas:** trampas conocidas (sección 10 + las de cada plantilla).
6. **start:** mostrar concepto, mapa de pulsos y 3 a 4 cuadros antes del render final; renderizar un cuadro por pulso y mirarlo.

**Lista de prohibidos (por defecto de esta skill, salvo pedido contrario del usuario).** En vez de solo prohibir, di qué hacer en su lugar:
- **Glow/neón** → contraste, escala y color de acento crean el foco.
- **Explosión de partículas, anillo de onda de choque** → solo si nace de un elemento que ya está en pantalla y va a algún lugar (movimiento sin origen es adorno).
- **Crossfade / blur-in** → cada escena crece desde la anterior (match cut, morph, forma que inunda y se contrae).
- **Temblor de cámara, separación RGB, lens flare, piso en grilla, fondo parpadeante** → solo en el único impacto que la idea pide.
- **Easing elástico en todo** → resortes con overshoot mínimo; `bouncy` solo en estética lúdica (preset 12).
- **Tiempo muerto** → nada quieto > 1 s, salvo que el espectador necesite leer (y entonces el hold es de lectura: 0,3 s + 0,25 s por palabra).
- **Texto en las esquinas** (rótulos, marcadores de cuadro, timecode decorativo) → solo información que el espectador use.
- **Degradado genérico, video o UI de banco, tarjetas de relleno** → material real del usuario, tokens reales de la marca.
- **`Math.random`** → `M.rng(seed)`. El mismo cuadro debe salir igual en cada render.
- **"Cualquier cosa que parezca plantilla"** → cierra el brief con ese estándar; vale para efectos que no listaste.
- **Números, clientes, testimonios y funcionalidades inventados** → solo lo que el usuario dio o lo que el producto realmente tiene.

**Cómo usar la biblioteca de referencia (sin reventar el contexto):**
1. ¿Un video de verdad (showreel, lanzamiento, promo, UI motion, explainer, tipografía, 3D)? Lee `references/playbook-prompt-motion.md` y la plantilla más cercana de `references/briefing-templates.md`.
2. Para ideas concretas de escena, abre `references/gallery/00_INDEX.md`, elige la categoría y lee solo 2 a 4 prompts parecidos al pedido (los de arriba tienen más detalle). O `grep -il "palabra" references/gallery/*.md`.
3. Los prompts de la galería se escribieron para un flujo parecido al del kit: su `seek(t)` es el `render(t)` de aquí; los subcuadros con `tmix` son el `M.blur`; la grilla de pulsos es `M.beat`; el analizador de música con numpy es `sound.py`/cues. Traduce la idea al kit, **no copies el código del prompt**.
4. **Cada entrada de la galería tiene dos versiones:** el prompt original del creador (muchas veces una frase) y la **versión completa**, estructurada (dirección, estructura, build, trampas, primer paso). Para construir, parte de la versión completa; sus familias (showreel, producto con investigación, explainer con narración, corto mudo, música/lyric, edición de talking head, 3D/juego) están resumidas en `references/playbook-prompt-motion.md` (sección 9) y se volvieron las plantillas A a K de `references/briefing-templates.md`.
5. Si el usuario pega un prompt de la galería y pide "haz este": trátalo como un brief, completa los `inputs` que faltan con sus valores por defecto y sigue el flujo de la sección 1.
6. Si la idea pide **3D de verdad**, **React/Remotion** o **matemáticas (Manim)**, mira la tabla de renderizadores en el playbook (sección 7) y avisa al usuario del cambio de herramienta antes de empezar.
7. Los prompts pertenecen a los creadores acreditados: úsalos como referencia de estructura y de ideas, adáptalos al brief del usuario y no los republiques como propios.

---

## API rápida de `motion.js` (objeto global `M`)

- **Cuadro:** `M.W, M.H, M.S, M.V` (vertical), `M.SQ`, `M.FPS`, `M.pick(h, v, sq)`, `M.safe`, `M.Q` (parámetros de la URL)
- **Tiempo:** `M.seg(t,a,b)`, `M.range(t,a,b,ease)`, `M.remap(t,[[tSalida,tOrigen],...])`, `M.keys(t,[[t,v,ease],...])` (número, array o color), `M.stagger(i,n,each,from)`, `M.staggerGrid(c,r,cols,rows,each,from)`, `M.shots([[nombre,dur],...],{gap})` → `.nombre.start/end`, `M.on(t,plano,pad)`, `M.lt(t,plano)`, `M.pulse(t,en,ancho)`, `M.loop`, `M.pingpong`, `M.step(t,fps)`, `M.frameT(t)`, `M.beat(n)`
- **Easing:** `M.ease.{linear, in/out/inOut + Sine/Quad/Cubic/Quart/Quint/Expo/Circ/Back, outElastic, outBounce, smooth}`, `M.bezier(x1,y1,x2,y2)`, `M.curve.{standard, emphasized, decel, accel, snappy, swift, anticipate, overshoot}`, `M.spring({stiffness,damping,mass,velocity})`, `M.springAt(t,t0,'gentle'|'snappy'|'bouncy'|'wobbly')`, `M.expLerp(a,b,p)`
- **Aleatorio/ruido:** `M.rng(seed)`, `M.hash(i,j,seed)`, `M.noise2`, `M.noise3`, `M.fbm`, `M.curl`, `M.noiseSeed(n)`
- **Color:** `M.mix(a,b,p)` (OKLab), `M.rgba(hex,a)`, `M.contrast(a,b)`
- **DOM/SVG:** `M.el(tag,attrs,parent,html)` (HTML o SVG automático), `M.attr`, `M.css(el,{transform:{x,y,z,s,sx,sy,r,rx,ry,skx,px}})`, `M.tf`, `M.show(el,bool)`, `M.split(el,{mask})` → `{lines, words, chars}` (anima `.in`)
- **Texto:** `M.scramble`, `M.typewriter` → `{text, caret, end}`, `M.fmt`
- **Trazo/forma:** `M.draw(el,p,from)`, `M.drawRange(el,a,b)`, `M.samplePath(d,n)`, `M.morpher(dA,dB)` → `f(p)`, `M.sampleShape({d}|{text,font},n)`, `M.arc(a,b,p,bend)`, `M.spline(pts,p)`, `M.cursorPath(t,keys)`, `M.cover(r,cx,cy)`
- **Cámara:** `M.cam({x,y,zoom,r})` (CSS), `M.camSVG(...)`, `M.shake(t,t0,{amp,dur})`, `M.depth(z)`, `M.drift(t,amp)`
- **Acabado:** `M.grain(parent,{opacity,blend})` → `.update(t)`, `M.vignette(parent,{strength})`, `M.cursor(parent,{size})`
- **Contrato:** `M.cue(t,tipo,{...})`, `M.blur(t0,t1,n)`, `M.boot(render,{dur, init, bpm, poster})`. Vista previa en el navegador: `escena.html?dev=1` (espacio = play/pausa, flechas = cuadro a cuadro, S = áreas seguras).
