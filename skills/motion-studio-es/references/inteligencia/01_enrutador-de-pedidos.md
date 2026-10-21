# Enrutador de pedidos: de cualquier frase al video correcto

Los pedidos reales de la galería (en portugués, inglés, español, francés, chino, japonés, coreano) caen en 14 tipos. Identifica el tipo por el **objetivo**, no por las palabras. Cada fila da: señales, formato por defecto, duración por defecto, qué preguntar (como máximo una vez), la plantilla (`../briefing-templates.md`) y la trampa principal.

Leyenda de valores por defecto: **F** formato · **D** duración · **BPM** · **S** sonido.

| # | Tipo | Señales en el pedido (cualquier idioma) | Por defecto | Plantilla | Trampa principal |
|---|---|---|---|---|---|
| 1 | **Showreel / "muestra lo que haces"** | showreel, portafolio, résumé, "go all out", "show off", "impresióname", 全力, 凄い | F 16:9 · D 15 s (10 a 30) · 120 BPM · S pista + SFX por pulso | A | desfile de efectos sin concepto: nombra **un** concepto y un puente |
| 2 | **Lanzamiento / promo de producto, app, sitio, repositorio** | launch, promo, PV, video de producto, README hero, "muestra las features", enlace de sitio, nombre de producto | F 16:9 (+9:16) · D 15 a 40 s · 120 BPM | B o G | inventar pantalla/función; captura plana en vez de UI en capas |
| 3 | **UI motion / "una forma que nunca corta"** | UI animation, microinteracciones, Dribbble, componente, "un botón que se vuelve" | F 1:1 o 16:9 · D 15 a 30 s · 120 BPM | C | transición por corte/fade; resorte exagerado |
| 4 | **Tipografía cinética / frase / manifiesto / lyric** | kinetic type, texto animado, cita, letra, discurso, póster | F 16:9 o 9:16 · D 5 a 30 s · BPM de la música | D, J | texto ilegible, sin jerarquía, poco tiempo de lectura |
| 5 | **Logo / viñeta / apertura / sting** | logo reveal, viñeta, intro, apertura de clase, ident | F 16:9 + 9:16 · D 3 a 10 s (+ versión corta) · S impacto grave | SKILL §6 | hold final corto; logo redibujado (usa la real) |
| 6 | **Explainer / educativo / tutorial / noticia / timeline** | explica, "cómo funciona", historia de, resumen, tutorial, clase, receta, noticia | F 16:9 · D 30 s a 3 min · narración opcional | E o H | pared de texto; hechos sin verificar; ritmo sin pausa para leer |
| 7 | **Datos / gráfico / post de resultado** | número, KPI, resultado, +248%, gráfico, informe | F 9:16 o 1:1 · D 6 a 10 s · loop | SKILL §6 | números inventados; gráfico sin héroe |
| 8 | **Corto animado / historia / personaje** | short film, animación, personaje, "una historia", mascota | F 16:9 o 9:16 · D 30 s a 2 min · mudo + sonido | I | guion sin deseo/obstáculo; actuación sin anticipación |
| 9 | **Música / visualizer / lyric** | música, beat, pulso, visual de audio, 140 BPM, dubstep, "sincronizado" | F 1:1 o 16:9 · D 15 a 60 s | J | visual que no nace del sonido; sincronía a ojo en vez de medida |
| 10 | **Hype edit / meme / social caótico / viral** | edit, "va con todo", brain rot, viral, trend, anime edit, crypto hype | F 9:16 · D 8 a 20 s · BPM alto, cortes secos | ver §Hype abajo | confundir caos con desorden: cortes **en el pulso**, una idea por corte |
| 11 | **Escena 3D / película recreada / modelo / tour** | three.js, 3D, avión, data center, pintura, "recrea la escena de" | F 16:9 · D 15 a 90 s | F | cámara orbit por defecto, material por defecto, sin plano-firma |
| 12 | **Juego / interactivo / sitio animado** | game, juego, "para jugar", secciones con scroll, HTML interactivo | HTML sin MP4 (o MP4 de gameplay) | (fuera del núcleo) | prometer MP4 donde el pedido es interactivo; avisar del cambio |
| 13 | **Edición de video grabado / subtítulos / música en video existente** | corta el clip, subtítulos, añade música, versión vertical | F 9:16 · D 30 a 60 s | K | cortar una palabra; subtítulo tapando el rostro |
| 14 | **Remix / "hazlo parecido a" / referencia en video** | "igual que este", "basado en este video", "una versión con X" | hereda del original | por tipo | copiar cuadro a cuadro; **estudia** ritmo/tiempos/fuentes y crea algo propio |

## Cómo decidir cuando hay más de un tipo

- "Un showreel **para** mi producto" = tipo 2 con la ambición del tipo 1 (usa B/G, ritmo de A).
- "Un explainer **con** música y animación pesada" = tipo 6; música baja bajo la voz; sigue H.
- "Una viñeta **y** una versión para Reels" = tipo 5 con formatos 16:9 y 9:16 + sting corto.
- Ante duda real entre dos tipos, pregunta **una** cosa: "¿esto es para mostrar tu producto o tu habilidad?".

## Qué preguntar (y qué nunca preguntar)

Pregunta **solo** lo que no puedes deducir y que cambia el resultado: **(a)** el texto exacto (si es obligatorio), **(b)** marca/logo (si es del usuario), **(c)** producto/URL (si lo citó sin enlace), **(d)** música propia (solo si hay). Todo lo demás: decide, cuéntalo, ofrece cambiarlo.
Nunca preguntes: paleta (sugiere), fuente (elige), duración (usa el valor del tipo), estilo (propón el concepto).
Formato de la pregunta: un mensaje, numerado, con el **valor por defecto** de cada ítem ("si no respondes, uso X").

## Valores por defecto por plataforma

| Destino | Formato | Duración | Nota |
|---|---|---|---|
| Reels/TikTok/Shorts | 9:16 1080×1920 | 8 a 30 s | respeta `M.safe`; gancho en ≤ 1 s; legible sin sonido |
| YouTube / sitio / presentación | 16:9 1920×1080 | 15 a 90 s | hay espacio para respirar; título en los 3 primeros s |
| X / LinkedIn / feed | 16:9 o 1:1 | 15 a 30 s | primer cuadro bueno (portada); funciona sin sonido |
| README / landing hero | 16:9, loop | 10 a 20 s | sonido no obligatorio; último cuadro = primero |
| Clase / curso | 16:9 | 5 a 8 s (apertura) | firma de serie + versión overlay transparente (`--alpha`) |

## Tipo 10: hype edit (curaduría propia)

Pedidos como "haz un edit de X × Y que vaya con todo" tienen poca información y mucha expectativa. Receta: 9:16, 10 a 20 s, **BPM alto (140 a 170) o un drop claro**; 6 a 12 cortes **todos en el pulso**; un elemento puente (silueta, símbolo, tipografía gigante); tipografía agresiva con cambio de peso; zoom punch **solo en el pulso fuerte** (una vez cada 2 compases, no en cada frase); 2 colores + negro; impacto = cue `big` + un `M.shake` corto en el cuadro exacto; cierre en un cuadro congelado de 0,5 s (única excepción a "sin holds"). Propiedad intelectual: usa formas, colores y tipografía **inspirados** en el universo citado; **no reproduzcas un personaje protegido** ni logos de terceros que el usuario no haya aportado; dilo en una línea.

## Pedidos especiales

- **"Parodia / haz un showreel horrible a propósito"**: es un video de verdad. Elige 4 a 5 "errores de principiante" reconocibles (fuente del sistema, WordArt, transición de PowerPoint, texto descentrado, brillo en todo) y **ejecuta cada uno con timing perfecto**; la gracia nace del contraste entre error y ejecución.
- **"Sin usar mis herramientas/memoria/skills anteriores"**: ignora preferencias anteriores solo en el estilo; el kit sigue siendo la infraestructura (dilo en una línea).
- **"Puedes trabajar 10 horas"**: no es licencia para inflar; usa el tiempo para **más ciclos de revisión**, no para más efectos.
- **Enlace de sitio/repositorio**: léelo primero (tokens de diseño, logo, textos, capturas actuales). Prefiere lo más nuevo. Si el logo es raster, vectorízalo o pide el SVG; **nunca redibujes** la marca real.
- **Video de referencia adjunto**: extrae cuadros (`ffmpeg -vf fps=2`), mide la duración de los planos y los pulsos, lista fuentes/colores/técnicas; **crea algo propio** con la misma sofisticación (nunca copies cuadro a cuadro).
