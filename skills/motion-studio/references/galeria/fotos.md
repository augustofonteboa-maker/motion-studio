# Galeria: Fotos (1 prompts com esta como tag principal)

Prompts reais de criadores, todos feitos no Claude Opus 5.5, do mais detalhado ao mais curto. Cada entrada traz o **prompt original** do criador e, na maioria, a **versão completa** estruturada (direção, estrutura por batida, build, armadilhas e primeiro passo): é essa a que dá para executar de ponta a ponta. Cada prompt pertence ao criador citado: use como **referência de estrutura e de ideias** e adapte ao briefing do usuário. O que os melhores têm em comum está em `../playbook-prompt-motion.md`.

### Talking-head clip edit
`sab8a-364a5a` · @sab8a · 2026-09-24 · OpenEdit · 15 palavras · tags: Fotos

**Prompt original do criador:**

````text
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
````

**Versão completa (estruturada a partir do original):**

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

