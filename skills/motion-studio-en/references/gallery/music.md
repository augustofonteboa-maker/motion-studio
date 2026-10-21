# Gallery: Music (2 prompts with this as the main tag)

Real prompts from creators, all made with Claude Opus 5.5, from most detailed to shortest. Each entry carries the creator's **original prompt** and, for most, the structured **full version** (direction, structure by beat, build, gotchas and first step): that is the one that can be executed end to end. Each prompt belongs to the creator named: use it as a **reference for structure and ideas** and adapt it to the user's brief. What the best ones have in common is in `../playbook-prompt-motion.md`.

### UK dubstep track with ASCII visuals
`rames-jusso-589f80` · @Rames_Jusso · 2026-09-24 · HyperFrames · 6 words · tags: Music, Code
Has: beat grid/BPM

**Creator's original prompt:**

````text
140 BPM rusko/skream style UK dubstep
````

**Full version (structured from the original):**

````text
<direction>
A 30-second music visual: a Rusko and Skream style UK dubstep track at 140 BPM, written in code, with visuals driven by it.
Write the track first: drums, a sub bass and a wobble bass on a real arrangement (intro, build, drop). Then make every visual move come from the music: kicks, snares and wobbles each drive something you can see.
Visual style: bold geometric shapes and type in two colors, hit hard by the bass.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
Intro, a build that tightens, the drop on a downbeat as the strongest moment, and a short outro.
</structure>

<build>
1. Write the track with the Web Audio API (OfflineAudioContext) and render it to WAV; keep the note and hit times as data.
2. One HTML file at 1080x1080. Every style is computed from time and that hit data inside window.seek(t): no timers, no state between frames.
3. Render with Playwright at 60fps with motion blur (3 subframes, ffmpeg tmix), then mux the audio.
4. Watch it with sound and fix anything that isn't locked to the beat.
</build>

<start>
Describe the arrangement in a few lines, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Beat-synced bouncing 3D ball
`gorden-sun-041f56` · @Gorden_Sun · 2026-09-30 · Three.js · 2 words · tags: Music
Has: build method

**Creator's original prompt:**

````text
卡点的3D球体下坠的动画视频：对标专业的Blender做的效果，音乐是多首经典的纯音乐，场景按音乐切换，3D球体下坠时在3D场景的物件中弹跳，按音乐的节奏点亮物件。带一些幽默的元素。
使用three.js制作，不要使用Blender制作
````

**Full version (structured from the original):**

````text
<direction>
Build a beat-synced animation of a 3D ball falling through a scene as one self-contained HTML page with three.js.
Style: the quality of a professional Blender piece, with some humor.
Design the signature shot first, the one frame someone would screenshot, and build everything toward it.
Camera: a film camera, not orbit controls. Every shot uses one named move (dolly, crane, orbit, push-in, rack focus), eased in and out, and the camera never passes through geometry.
Light and materials: a key, fill and rim light with soft shadows, an environment map for reflections, fog for depth, physically based materials with varied roughness, ACES tone mapping. Nothing should look like a default material.
Motion: things react to each other (what's hit moves, what's near lights up), driven by springs or simple physics, never linear tweens.
Banned: default materials and lighting, floating text labels, glows on everything, a slowly spinning object as the whole idea, anything that looks like a tech demo.
</direction>

<structure>
As the ball falls it bounces off objects in the scene and lights each one up on the beat. The scene changes with each piece of music (several classic instrumental pieces, public domain or composed in code).
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

