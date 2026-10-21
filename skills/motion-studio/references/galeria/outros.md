# Galeria: Outros (4 prompts com esta como tag principal)

Prompts reais de criadores, todos feitos no Claude Opus 5.5, do mais detalhado ao mais curto. Cada entrada traz o **prompt original** do criador e, na maioria, a **versão completa** estruturada (direção, estrutura por batida, build, armadilhas e primeiro passo): é essa a que dá para executar de ponta a ponta. Cada prompt pertence ao criador citado: use como **referência de estrutura e de ideias** e adapte ao briefing do usuário. O que os melhores têm em comum está em `../playbook-prompt-motion.md`.

### Four seasons train window
`itsolelehmann-e47532` · @itsolelehmann · 2026-09-24 · One-shot · 21 palavras · tags: Outros

**Prompt original do criador:**

````text
4 seasons passing outside a train window, a cozy carriage, a cup of coffee on the table, Grand Budapest Hotel style
````

**Versão completa (estruturada a partir do original):**

````text
<direction>
A 30-second animated film: 4 seasons passing outside a train window, a cozy carriage, a cup of coffee on the table.
Style: Grand Budapest Hotel: symmetrical framing, pastel palette, flat theatrical depth. Build it entirely in code, with layered 2D illustration and a slow, steady camera.
Let the scene unfold in four to six moments, each changing one thing, while the rest stays still. Small details carry the story: light, steam, weather, what's on the table.
Banned: glows, lens flares, camera shake, generic gradients, anything that looks like stock clip art.
</direction>

<structure>
Equal time for each moment, joined by slow transitions that happen inside the scene (light changing, things passing the window), never cuts.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a quiet ambient soundtrack and the sounds of the scene. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me the moments and a storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Porco Rosso sunset dogfight
`nft-chen-5f8bb0` · @NFT_Chen · 2026-09-26 · Three.js · One-shot · 5 palavras · tags: Outros

**Prompt original do criador:**

````text
用 web3D 复刻宫崎骏《红猪》日落海面上的经典空战：白绿红涂装战斗机、紫色积云、海面反光、吉卜力运镜，画面写 just breathe.
````

**Versão completa (estruturada a partir do original):**

````text
<direction>
Build the dogfight over the sea at sunset from Hayao Miyazaki's Porco Rosso as one self-contained HTML page with three.js.
Style: Ghibli: hand-painted skies, purple cumulus clouds, warm sunset light, the sea catching it. Stylised, not photoreal: soft shading, painterly water reflections.
Design the signature shot first, the one frame someone would screenshot, and build everything toward it.
Camera: a film camera, not orbit controls. Every shot uses one named move (dolly, crane, orbit, push-in, rack focus), eased in and out, and the camera never passes through geometry.
Light and materials: a key, fill and rim light with soft shadows, an environment map for reflections, fog for depth, physically based materials with varied roughness, ACES tone mapping. Nothing should look like a default material.
Motion: things react to each other (what's hit moves, what's near lights up), driven by springs or simple physics, never linear tweens.
Banned: default materials and lighting, floating text labels, glows on everything, a slowly spinning object as the whole idea, anything that looks like a tech demo.
</direction>

<structure>
Fighter planes in white, green and red livery chase each other through the clouds while the camera moves like a Ghibli film, low over the water then up through the clouds. The words "just breathe." appear once, quietly.
Plan it as a shot list: an establishing wide, three to five shots that each have one camera move and one event, the signature shot, and a final wide that shows it in a new light.
</structure>

<build>
1. One HTML file, three.js from a CDN, no build step. Model everything in code; no downloaded models or textures.
2. Use MeshPhysicalMaterial, a PMREM environment from RoomEnvironment, soft shadows, ACES tone mapping and antialiasing. Add depth of field only on shots that need it.
3. Hold 60fps on a laptop.
4. Add a ?render mode where every frame is computed from time (seeded randomness, no clock), so it can be captured with Playwright into an MP4 at 1920x1080.
5. Capture one frame per shot, look at it, and fix anything flat, aliased, clipping or hard to read.
</build>

<gotchas>
Set shadow bias, or surfaces get striped acne. Keep near and far planes tight, or distant surfaces flicker. Seed every random number, or the render won't match the preview.
</gotchas>

<start>
Describe the signature shot and the shot list in a few lines, then build it without asking me anything else. Give me the HTML file and a 20-second MP4 captured with the ?render mode.
</start>
````

### Black hole time story
`rebutonepress-810f78` · @RebutonePress · 2026-09-25 · 4 palavras · tags: Outros

**Prompt original do criador:**

````text
听说 opus 5.5 做视频很强，请让我见识下。结合本机环境风格，做一个关于时间的故事，5分钟。要完整的视频，音频和字幕。需要什么工具自己在devshell配置，渲染完成后只留视频成品文件，其他全部清理干净。
````

**Versão completa (estruturada a partir do original):**

````text
<direction>
A 5-minute animated short film: a story about time.
Style: drawn from this machine's own environment: its terminal, theme and fonts. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Set up any tools you need yourself. When it's rendered, keep only the final video and clean up everything else.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: music, narration and subtitles. Sound should tell half the story.
Banned: glows, lens flares, generic gradients, anything that looks like stock clip art, everything moving at once.
</direction>

<structure>
Write a shot list first, one action per shot, with timings, then build exactly that. Shots join through motion and sound, never crossfades.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): the film's sound, timed to the shot list. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Lock feet and hands where they touch things, so contacts never slide. Keep the character's proportions the same in every shot. Give each gag a beat of stillness before it lands.
</gotchas>

<start>
Show me the story in a few lines and the shot list, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Tengwang Pavilion moonlit river
`demitiyageekzen-7770ad` · @DemitiyaGeekzen · 2026-09-25 · WebGL2 + Canvas 2D + Web Audio · 1 palavras · tags: Outros

**Prompt original do criador:**

````text
用你最强的思维和能力，根据对我的了解，自行寻找我可能喜欢的主题，制作一个30s的视频还有互动html，尽可能的展示你的前端能力！
````

**Versão completa (estruturada a partir do original):**

````text
<direction>
Using your strongest thinking, pick a topic I'd probably like, based on what you know about me, and make two things from it: a 30-second video and an interactive HTML page that goes deeper.
Show off your front-end skills as much as you can: WebGL, canvas and Web Audio where they help, with real interaction on the page.
Style: your choice.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
The video teases the topic and ends on an invitation to the page. The page lets me explore it, with the video's visual language.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat and a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Tell me the topic and why you picked it, then build both without asking me anything else. Give me the MP4 and the HTML file.
</start>
````

