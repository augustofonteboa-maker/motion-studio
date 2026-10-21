# Inteligencia de la skill: protocolo para cualquier pedido

Esta carpeta es la memoria crítica de la skill: lo que enseñan 232 videos reales hechos en Claude (y el prompt de cada uno), ya filtrado, comparado y convertido en decisiones. **Lee este archivo siempre que el pedido sea un video de verdad.** Los demás se consultan bajo demanda.

| Archivo | Para qué |
|---|---|
| `01_enrutador-de-pedidos.md` | Descubrir **qué tipo de video** quiere el usuario, incluso con un pedido vago, jerga, otro idioma o muy detallado. Valores por defecto por tipo. |
| `02_catalogo-de-escenas.md` | 60 patrones de escena/momento con receta en el kit, cuándo usarlos y el error común. |
| `03_nichos-y-direccion-de-arte.md` | Dirección de arte por segmento (fintech, música, IA, dev tool, comida, educación, juego, hype edit...). |
| `04_analisis-critico.md` | Lo que dicen los datos **y dónde engañan**; trampas; **rúbrica de 100 puntos** para autoevaluarse antes de entregar. |
| `05_sonido-y-ritmo.md` | Cuenta de BPM, estructura musical, SFX, voz, subtítulos, qué hace el kit y qué exige un paso extra. |
| `06_banco-de-ideas.md` | 120 conceptos de una línea, por categoría, para cuando el pedido es "sorpréndeme". |
| `../playbook.md`, `../briefing-templates.md`, `../gallery/` | El resumen de 230 prompts, 11 plantillas y los prompts completos. |

## El protocolo (9 pasos, en este orden)

1. **Clasifica** el pedido con el enrutador (`01`). Un pedido = un tipo principal (a veces dos: "showreel + producto").
2. **Mide la especificación.** Cuenta lo que el usuario ya decidió: tema, texto, marca, duración, formato, música, estilo. Tres niveles:
   - **Vago** ("haz un video brutal", "go all out"): tú decides **todo**, con audacia y coherencia; muestras concepto + mapa de pulsos + 3 cuadros y **solo preguntas si falta un texto o una marca que no se pueda deducir**.
   - **Medio** (tema + duración o marca): completa el resto con los valores por defecto del tipo; pregunta **una vez**, como máximo 3 ítems.
   - **Detallado** (storyboard, paleta, texto exacto, tiempos): **manda el pedido**. No "mejores" la idea del usuario; ejecútala con rigor, resuelve lagunas con valores por defecto y señala solo riesgos reales (p. ej., texto demasiado largo para el tiempo).
3. **Investiga antes de inventar.** Marca/producto citado, sitio, repositorio, archivos adjuntos: léelos primero (tokens, logo, pantallas reales, textos). Sin acceso a internet/archivos: di qué asumiste y pide solo lo esencial. **Nunca inventes pantalla, función, número, cliente ni testimonio.**
4. **Escribe el concepto en una línea** y elige el **elemento puente**. Si no puedes decirlo en una línea, el video se volverá un desfile de efectos.
5. **Elige la dirección de arte** (`03`): marca del usuario > nicho > preset del SKILL (sección 3). Cierra: 1 a 2 fuentes, ≤ 3 colores + blanco/negro, 1 acento, 1 lenguaje de cámara.
6. **Arma el mapa de pulsos** en BPM/compases (`05`) con los patrones del catálogo (`02`): gancho (≤ 1,5 s), 3 a 5 ideas visuales, el momento más fuerte en el penúltimo compás, cierre. **Menos ideas, mejor hechas.** Referencia: ~4 ideas visuales en 15 s.
7. **Construye con el kit** (SKILL, secciones 1 a 8): escena única, `render(t)` puro, blur, cues.
8. **Autocrítica con la rúbrica** (`04`): mira los cuadros por pulso, puntúa, **corrige todo lo que esté por debajo de 80** antes de mostrar. Si tras corregir aún queda un punto débil, di cuál y por qué.
9. **Entrega** en 2 a 4 líneas: el concepto, las decisiones que tomaste, lo que el usuario puede ajustar. Ofrece la versión vertical/corta/sin sonido cuando tenga sentido.

## Reglas que valen para cualquier pedido

- **Idioma:** responde en el idioma del usuario; el texto del video sigue el idioma del pedido/de la marca (pedido en japonés, video en japonés, salvo indicación). Revisa acentos, caracteres y una fuente que cubra el alfabeto (CJK: Noto Sans/Serif JP/SC/KR con `fonts.mjs`).
- **"Haz lo mejor que puedas / impresióname / go all out / destruye X":** es un pedido vago de **ambición alta**, no de efectos de más. Ambición = un concepto fuerte, ejecución limpia, restricción. Lo contrario de "más cosas".
- **Pedido contradictorio o parodia** ("un showreel horrible a propósito"): obedece la intención (es un video de verdad, con timing e intención de chiste: el error tiene que estar **bien hecho**).
- **Pedido fuera de lo que el kit hace bien** (juego interactivo, 3D complejo, edición de video grabado, voz en otro idioma, Manim): di el camino (`playbook.md`, sección 7), la herramienta extra y qué cambia; no fuerces 2D en algo que pide 3D ni entregues "casi".
- **El material del usuario vence a la galería.** La galería inspira estructura e ideas; marca, texto, tono y restricciones del usuario son ley.
- **Alcance y tiempo:** un video de 15 s es el estándar del mercado (35% de los prompts); 30 s para producto con explicación; 60 s+ solo con narración/estructura de historia. No alargues para impresionar.
- **Formato:** 1920×1080 a 60 fps es el estándar de la galería (el kit entrega 30 fps por defecto; usa `--fps 60` con UI fluida, cursor o cámara rápida). 9:16 no es "recortar" el 16:9: **recompón** (`M.pick`).
- **Iteración:** el primer render rara vez es el mejor. Prefiere 2 ciclos cortos (hoja de contacto → corrección) a un render final a ciegas.
- **Honestidad:** di lo que no se verificó (p. ej., "no escuché el audio", "no probé en el celular"). No prometas un resultado "de estudio" sin haber mirado los cuadros.
