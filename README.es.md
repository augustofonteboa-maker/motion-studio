# motion-studio

[Português](README.md) · [English](README.en.md) · **Español**

Una **skill de Claude para motion design**. Pide una viñeta de logo, un logo animado, una transición, la apertura de una clase, un showreel, un video de lanzamiento o un post animado, y Claude crea la animación en código (HTML, SVG y Canvas) y entrega el video terminado en MP4 en **16:9 y 9:16**, con motion blur y banda sonora sincronizada.

![Vista previa del showreel de prueba hecho por la skill](docs/demo.gif)

Videos de prueba hechos desde cero por la skill: [16:9](docs/Demo_MotionStudio_16x9_1920x1080.mp4) · [9:16](docs/Demo_MotionStudio_9x16_1080x1920.mp4)

## Lo que la skill sabe hacer

- **Tipografía cinética:** texto subiendo desde dentro de una máscara, cascada de letras, decodificación, tipeo, contadores, letreros
- **Logo:** construcción por grilla, partículas formando la marca, montaje por piezas, morph, lockup con el nombre, brillo que barre
- **Transiciones:** iris en capas, zoom a través de una forma, whip pan con desenfoque direccional, persianas, match cut, glitch
- **UI de producto:** cursor en arco con clic, un botón que se vuelve loader y luego card, flujo de prompt, mockup de celular
- **Datos, partículas, cámara y personaje:** gráficos que crecen, campo de flujo, paralaje, temblor de impacto, una pelotita con squash & stretch
- **Dirección de arte neutra:** usa la marca del cliente o uno de 12 presets (editorial, tech nocturno, lujo, brutalista, corporativo y otros)
- **Acabado de estudio:** blur adaptativo (hasta 12 muestras en los movimientos rápidos), color marcado en BT.709, loudness en −14 LUFS, versiones transparentes (ProRes 4444, WebM y fondo verde)
- **Sonido:** banda sonora sintetizada a partir de los eventos de la animación, en 6 climas (grave, épico, tech, clean, ambient, pop)
- **Brief de campeón:** un pedido vago se convierte en un brief de 6 bloques (concepto de una línea, elemento puente, look cerrado, lista de prohibidos, tiempo en BPM, build y revisión) antes de cualquier código
- **Anti-"cara de IA":** lista de prohibidos aprendida de 230 prompts reales (glow, partículas sin origen, crossfade, tiempo muerto, texto en las esquinas...), cada ítem con qué hacer en su lugar
- **Biblioteca de referencia:** un playbook con lo que tienen en común los 230 mejores prompts, 11 plantillas de brief (showreel, lanzamiento, una forma que nunca corta, tipografía, explainer, 3D, producto con investigación, explainer con narración, corto mudo, música/lyric video, edición de talking head) y la galería completa de prompts por categoría, cada uno con el prompt original del creador y la versión completa estructurada, en `skills/motion-studio-es/references/`

## Cómo instalar en Claude (app o web)

1. **Descarga el archivo de la skill:** abre [`motion-studio-es.zip`](motion-studio-es.zip) en este repositorio y haz clic en el botón de descarga ("Download raw file"). No lo descomprimas.
2. **Activa la ejecución de código:** en Claude, ve a **Settings › Capabilities** y activa **Code execution and file creation**.
3. **Sube la skill:** ve a **Customize › Skills**, haz clic en **+**, luego en **+ Create skill** y elige **Upload a skill**. Selecciona `motion-studio-es.zip`.
4. **Actívala:** confirma que el interruptor junto a *motion-studio-es* esté encendido en la lista de skills.
5. **Úsala:** abre una conversación y pide, por ejemplo:
   - *"Haz una viñeta de 8 segundos para la marca de mi cliente, una clínica dental, con el logo adjunto."*
   - *"Crea una transición de 1 segundo para las clases de mi curso, con fondo transparente."*
   - *"Anima este resultado: +248% de alcance en 30 días, para Reels."*

Claude reconoce el pedido y carga la skill solo. En cuentas Team o Enterprise, un administrador debe permitir skills y ejecución de código para la organización.

## Cómo instalar en Claude Code

Dentro de Claude Code, ejecuta:

```text
/plugin marketplace add augustofonteboa-maker/motion-studio
/plugin install motion-studio-es@motion-studio
```

O copia la carpeta de la skill manualmente:

```bash
git clone https://github.com/augustofonteboa-maker/motion-studio.git
mkdir -p ~/.claude/skills
cp -r motion-studio/skills/motion-studio-es ~/.claude/skills/
```

## Qué debe estar instalado

En Claude (app/web) el entorno en la nube ya tiene casi todo. En tu computadora, con Claude Code:

- Node 18 o más nuevo
- Playwright con Chromium: `npm i -g playwright && npx playwright install chromium`
- ffmpeg (Mac: `brew install ffmpeg`)
- Python 3 con numpy y scipy: `pip3 install numpy scipy`

## Qué hay en el repositorio

```text
motion-studio-es.zip              la skill empaquetada para subir a Claude
skills/motion-studio-es/
  SKILL.md                        instrucciones de la skill (flujo, dirección de arte, técnicas, QA)
  kit/                            runtime de animación, renderizador, banda sonora, fuentes y escena base
  examples/demo-reel.html         el showreel de prueba, completo
  references/playbook.md   lo que enseñan 230 prompts reales (anatomía, prohibidos, renderizadores)
  references/briefing-templates.md       11 plantillas de brief listas (A a K)
  references/gallery/                    230 prompts reales por categoría (empieza por 00_INDEX.md)
.claude-plugin/marketplace.json   instalación por Claude Code
docs/                             vistas previas y videos de prueba
```

La misma skill también está en portugués (`skills/motion-studio`) y en inglés (`skills/motion-studio-en`). La skill responde al usuario en el idioma del propio usuario.

## Créditos

Creada por [Augusto Fonte](https://www.instagram.com/_augustofonte/) con Claude. Licencia MIT: puedes usar, adaptar y compartir, manteniendo el aviso de licencia.

### Base de referencia

La biblioteca de `skills/motion-studio-es/references/` es la base de estudio de Augusto Fonte: 230 prompts públicos de creadores, analizados y reorganizados para hacer la skill más inteligente. Cada prompt pertenece al creador citado en su entrada; el playbook y las plantillas son texto propio.
