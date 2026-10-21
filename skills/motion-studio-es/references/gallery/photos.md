# Galería: Fotos (1 prompts con esta como tag principal)

Prompts reales de creadores, todos hechos con Claude Opus 5.5, del más detallado al más corto. Cada entrada trae el **prompt original** del creador y, en la mayoría, la **versión completa** estructurada (dirección, estructura por pulso, build, trampas y primer paso): esa es la que se puede ejecutar de punta a punta. Cada prompt pertenece al creador citado: úsalo como **referencia de estructura y de ideas** y adáptalo al brief del usuario. Lo que tienen en común los mejores está en `../playbook-prompt-motion.md`.

### Talking-head clip edit
`sab8a-364a5a` · @sab8a · 2026-09-24 · OpenEdit · 15 palabras · tags: Fotos

**Prompt original del creador:**

````text
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
Cut my raw talking-head clip into a punchy, fun 60-second edit for TikTok and Reels.
Keep the best lines and cut every pause, filler word and false start. Add word-by-word subtitles (bold white, one or two words at a time), graphics that illustrate the key points, and music with an upbeat, playful feel.
Banned: random stock footage, emoji spam, zoom punches on every line, captions that cover the face.
</direction>

<structure>
Hook in the first two seconds, using the strongest line even if it's not the first. One idea at a time after that. End on a clean last line, not a fade.
</structure>

<build>
1. Transcribe with word timestamps (e.g. whisper) and make the cut list from the transcript.
2. Cut with ffmpeg at 1080x1920, with jump cuts hidden by small zoom changes.
3. Make the subtitles and graphics as HTML rendered with Playwright, then composite them over the video.
4. Use music whose license allows the platform, ducked under the voice. Loudnorm to -14 LUFS.
5. Watch the result at full speed and fix any cut that clips a word.
</build>

<start>
Ask me for the clip, then show me the cut list with timestamps before you edit. Give me the final MP4.
</start>
````

