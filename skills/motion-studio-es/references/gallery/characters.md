# Galería: Personajes (19 prompts con esta como tag principal)

Prompts reales de creadores, todos hechos con Claude Opus 5.5, del más detallado al más corto. Cada entrada trae el **prompt original** del creador y, en la mayoría, la **versión completa** estructurada (dirección, estructura por pulso, build, trampas y primer paso): esa es la que se puede ejecutar de punta a punta. Cada prompt pertenece al creador citado: úsalo como **referencia de estructura y de ideas** y adáptalo al brief del usuario. Lo que tienen en común los mejores está en `../playbook.md`.

### Sketchbook animals come alive
`abderrahmen-g-9e8ed0` · @abderrahmen_g · 2026-09-24 · JavaScript · One-shot · 90 palabras · tags: Personajes

**Prompt original del creador:**

````text
You are a professional videographer. Create me a high-definition, creative, playful, and joyful video that you enjoy watching, that has sounds matching the frames using JavaScript. Use as much as possible of the input images—hand-drawn—to make it more creative and more authentic from input-pictures. You can also be inspired by, but not copy, the videos created by you in video-examples/, especially this: video-examples/twitter_claude.mp4. You're really creative, so produce the best of what you can.Show allThis prompt was taken directly from @abderrahmen_g’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotStackJavaScriptPostedSep 24, 2026
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 60-second animated short film: a playful, joyful story built from my hand-drawn pictures.
Style: my hand-drawn input images, animated so they stay authentic and hand-made. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Use as many of the images in input-pictures/ as you can. Take inspiration from, but don't copy, the videos in video-examples/, especially twitter_claude.mp4.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: sounds that match every frame, written in JavaScript. Sound should tell half the story.
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

### Cycle of life animation
`loicrambo-ad6830` · @loicRambo · 2026-09-25 · One-shot · 87 palabras · tags: Personajes

**Prompt original del creador:**

````text
make a dynamic 20-second motion graphics and animation video that shows what an incredible motion designer and animator you are, like it's your showreel for a résumé. make it about the cycle of life showing the same individual going from childhood to adolescence to the 9-5 cycle, to family life to elder life and death, then cutting ready to loop to the beginning.  go all out , use whatever you need.Show allThis prompt was taken directly from @loicRambo’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotPostedSep 25, 2026
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 20-second motion design showreel that proves you are a world-class motion designer, built around the cycle of life: the same person from childhood to adolescence, the 9-to-5, family life, old age and death, then back to the start. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
It's character animation as much as motion design.
Show range: kinetic type, shape morphing, a 2D-to-3D moment, a data or UI moment, and an end title. Give each one an equal share of the time.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, something happens on every beat.
First bar: hook. Then one technique per bar, each flowing out of the last. Last full bar: the strongest moment. Final half bar: end title, and the final frame matches the first so it loops.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat, a riser into the last full bar, a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Tell me the concept and show a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Scrabble tile character story
`anilraok-eff262` · @Anilraok · 2026-09-24 · Three.js · 56 palabras · tags: Personajes

**Prompt original del creador:**

````text
I want you to imagine a story, that subtly promotes grid genius. Or it can not even have grid genius, but something that aligns with our app and helps us get more eyeballs when posted on social media. Then using threejs/javascript I want you to create full animation, Pixar-level quality out of the story you imagine
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 60-second animated short film: a story that subtly promotes Grid Genius, or that simply fits our app and gets attention on social media.
Style: Pixar-level 3D animation built in three.js: appealing characters, soft lighting, expressive timing. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Use three.js and JavaScript for every shot.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: a score and sound effects written in code. Sound should tell half the story.
Banned: glows, lens flares, generic gradients, anything that looks like stock clip art, everything moving at once.
</direction>

<structure>
Write a shot list first, one action per shot, with timings, then build exactly that. Shots join through motion and sound, never crossfades.
</structure>

<build>
1. One HTML file at 1080x1920. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Clay-style music video
`davidshulmanfl-371638` · @DavidShulmanFL · 2026-09-25 · 37 palabras · tags: Personajes, Música

**Prompt original del creador:**

````text
Create a 60 second music video in the style of Peter Gabriel's Sledgehammer and Big Time. But use modern references and figures. Also create the song, something sounds like it would fit on Peter Gabriel's So album.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 60-second animated short film: a music video in the style of Peter Gabriel's Sledgehammer and Big Time, with modern references and figures.
Style: claymation and stop-motion collage: things that shouldn't move coming to life, fast object animation. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: an original song that sounds like it belongs on Peter Gabriel's So, written in code, with every cut on the beat. Sound should tell half the story.
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

### Deliberately terrible motion showreel
`henkpoley-3d3407` · @HenkPoley · 2026-09-27 · HTML · esfuerzo Max · 37 palabras · tags: Personajes

**Prompt original del creador:**

````text
Make a painful to see 1 minute motion graphics HTML page that shows what an absolutely terrible motion designer you are, like it’s a showreel designed to get your résumé immediately rejected. Do the absolute bare minimum.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
Make a painful-to-watch 60-second motion graphics HTML page that shows what an absolutely terrible motion designer you are, like a showreel designed to get your résumé rejected on sight.
Commit to the bit: clashing colors, Comic Sans, every easing at once, wordart, stock transitions. Every mistake should be one a real beginner makes, so it's funny because it's familiar.
Do the absolute bare minimum, on purpose.
</direction>

<structure>
Escalate: each section worse than the last, ending on the most tragic title card you can make.
</structure>

<build>
1. One HTML file. Animate it however a terrible designer would.
2. Make sure it still runs, so the awfulness is the design, not a bug.
</build>

<start>
Build it without asking me anything else.
</start>
````

### Animated space cartoon episode
`ryzoft-4f85bd` · @Ryzoft · 2026-09-24 · Three.js · 30 palabras · tags: Personajes

**Prompt original del creador:**

````text
I want you to imagine a story. And then using threejs I want you to create full animation, star wars 80s-level quality 90s cartoon out of the story you imagine.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 2-minute animated short film: a story you imagine.
Style: an 80s Star Wars look in a 90s cartoon: bold outlines, cel shading, starfields and spaceships, built in three.js. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Use three.js for the scenes, with a cel-shaded look.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: a score and sound effects written in code. Sound should tell half the story.
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

### Shadow theatre home story
`x4b47x-9cc84f` · @x4b47x · 2026-09-24 · JavaScript · One-shot · 30 palabras · tags: Personajes

**Prompt original del creador:**

````text
Create a pure javascript animation. 30-60s, vertical 9:16, paper cut-out shadow theatre style with gentle, fitting audio (made in code) on the topic: What makes a place feel like home?
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 45-second animated short film: what makes a place feel like home?.
Style: paper cut-out shadow theatre: layered silhouettes, a warm backlight, paper that flutters. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: gentle, fitting audio written in code. Sound should tell half the story.
Banned: glows, lens flares, generic gradients, anything that looks like stock clip art, everything moving at once.
</direction>

<structure>
Write a shot list first, one action per shot, with timings, then build exactly that. Shots join through motion and sound, never crossfades.
</structure>

<build>
1. One HTML file at 1080x1920. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Starry Night cat-spotting game
`mandelduck-95fd08` · @MandelDuck · 2026-09-26 · One-shot · 28 palabras · tags: Personajes

**Prompt original del creador:**

````text
can you make a 3d game where you walk around and spot cats inside of a van gogh painting? we can start with stary night and its town
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
Build a 3D game where you walk around inside a Van Gogh painting and spot hidden cats as one self-contained HTML page with three.js.
Style: Van Gogh's brushwork in 3D: thick swirling strokes on every surface, starting with The Starry Night and its town.
Design the signature shot first, the one frame someone would screenshot, and build everything toward it.
Camera: a film camera, not orbit controls. Every shot uses one named move (dolly, crane, orbit, push-in, rack focus), eased in and out, and the camera never passes through geometry.
Light and materials: a key, fill and rim light with soft shadows, an environment map for reflections, fog for depth, physically based materials with varied roughness, ACES tone mapping. Nothing should look like a default material.
Motion: things react to each other (what's hit moves, what's near lights up), driven by springs or simple physics, never linear tweens.
Banned: default materials and lighting, floating text labels, glows on everything, a slowly spinning object as the whole idea, anything that looks like a tech demo.
</direction>

<structure>
First-person walking. Cats are hidden in the scene, painted in the same strokes so they take a careful eye; spotting one counts it. A small counter, and a quiet win when all are found.
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

### Recursion explained in genres
`emollick-8661a8` · @emollick · 2026-09-26 · One-shot · 23 palabras · tags: Personajes, Código

**Prompt original del creador:**

````text
A video explaining recursion, where every explanation about recursion has a radically different video style, make this self-referential & clever & fast moving.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 60-second video explaining recursion, where every explanation is in a radically different video style: a different genre every time, e.g. film noir, nature documentary, 8-bit game, infomercial.
Make it self-referential and clever: each change of style is itself an example of the idea. Fast-moving, but every explanation lands before the next one starts.
Each style is done properly, with its own typeface, palette, pacing and sound, not a filter over the same frames.
Banned: generic gradients, glows, crossfades between styles, holds longer than a second, anything that looks like a template.
</direction>

<structure>
9 explanations, each building on the last, each in a new style. Open with a one-line hook. End on a final explanation that ties them all together.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a short sting for each style change, and music that changes with the style. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me the list of explanations, the style for each and a storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Pixel art card battle game
`aisongman-71ffac` · @aisongman · 2026-09-26 · One-shot · 18 palabras · tags: Personajes

**Prompt original del creador:**

````text
Create a 1-on-1 card game like Hearthstone.
Just make it. As best you can.
In pixel art style.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
Make a 1-on-1 card game like Hearthstone, as good as you can, in pixel art.
A full playable loop: decks, mana, minions, spells, attacking, a simple but fair AI opponent, a win and a loss screen.
Juice every action: cards lift, flip and slam, hits shake the target, numbers pop.
Banned: placeholder rectangles, unreadable card text, anything that looks like a tech demo.
</direction>

<structure>
A title screen, a match, and a result screen that lets me play again.
</structure>

<build>
1. One HTML file, canvas or DOM, no build step. All art drawn in code on a strict pixel grid.
2. Sound effects written with the Web Audio API.
3. Play a full match yourself and fix anything broken or unfair.
</build>

<start>
List the cards and rules in a few lines, then build it without asking me anything else.
</start>
````

### Lighthouse keeper silent short
`kamstudiolabs-0b0824` · @KamStudioLabs · 2026-09-23 · 18 palabras · tags: Personajes

**Prompt original del creador:**

````text
Make a 45-second silent short film with no dialogue, where sound tells half the story. Invent the story.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 45-second animated short film: a story you invent.
Style: your choice: whatever serves the story. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
It's silent: no dialogue and no text. Sound carries what the picture doesn't show.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: sound that tells half the story, with no dialogue at all. Sound should tell half the story.
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

### Animated short about a bug
`kamstudiolabs-c9bb28` · @KamStudioLabs · 2026-09-23 · 15 palabras · tags: Personajes, Código

**Prompt original del creador:**

````text
Make a 90-second animated short film about a bug that doesn't want to be fixed.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 90-second animated short film: a bug that doesn't want to be fixed.
Style: character animation with simple, expressive shapes, like a Pixar short in 2D. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: a score and sound effects written in code. Sound should tell half the story.
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

### Chuseok pixel night scene
`hoyoyoda-3a5c08` · @hoyoyoda · 2026-09-25 · 9 palabras · tags: Personajes

**Prompt original del creador:**

````text
한국의 추석에 어울리는 요소를 서치해서 픽셀 애니메이션을 구성해서 제작해줘
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around Korea's Chuseok: research its customs, food and imagery first. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
Pixel art throughout, on a strict pixel grid.
Show range: kinetic type, shape morphing, a 2D-to-3D moment, a data or UI moment, and an end title. Give each one an equal share of the time.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, something happens on every beat.
First bar: hook. Then one technique per bar, each flowing out of the last. Last full bar: the strongest moment. Final half bar: end title, and the final frame matches the first so it loops.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat, a riser into the last full bar, a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Tell me the concept and show a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Pixel wizard crypto animation
`0xevinho-3777d8` · @0xEvinho · 2026-09-24 · One-shot · 9 palabras · tags: Personajes

**Prompt original del creador:**

````text
make a similar version but with a crypto reference
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
Make a new version of the last video we made, reworked around a crypto reference.
Keep what made the original work: its structure, pacing and visual language. Change the subject, imagery and copy to fit the new reference, so it reads as its own piece, not a reskin.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
Match the original beat for beat, then improve anything that was weak.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat and a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Tell me what you'll keep and what you'll change, then build it without asking me anything else. Give me the final MP4.
</start>
````

### The Last Light animated short
`faroukzy-9ff23e` · @faroukzy · 2026-09-25 · One-shot · 9 palabras · tags: Personajes

**Prompt original del creador:**

````text
make a 4-minute animated short that blows my mind.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 4-minute animated short film: an idea that will blow my mind.
Style: your choice: whatever serves the story best. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: a score and sound effects written in code. Sound should tell half the story.
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

### Shop chatbot mascot promo
`anas0ra-e57aea` · @anas0ra · 2026-09-25 · 7 palabras · tags: Personajes

**Prompt original del creador:**

````text
fait moi une vidéo sympa pour https://heeya.fr
````

**Versión completa (estructurada a partir del original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for heeya.fr. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space.
Motion rules: springs with at most a small overshoot; nothing appears from nothing (it grows, unfolds or is revealed by a mask); the camera never sits still (push from 1.0 to 1.04 across a scene, and start each scene at the zoom the last one ended on); something changes on every beat.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM. Write a timed storyboard first, beat by beat, then build exactly that.
Hook (first bar): the problem in three to five words, in big type that the through-line object interrupts.
Middle: three or four moments of the product doing what it does best. Each begins with the through-line object turning into the next UI element and lands one readable idea.
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and a one-line call to action.
</structure>

<build>
1. One HTML file at 1080x1350. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat and a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Measure element positions at runtime for match cuts instead of hard-coding them. When a shape fills the frame, scale it past all four corners. Give outgoing and incoming text separate timing so letters never overlap. Never put will-change on anything the camera scales, or text renders blurry.
</gotchas>

<start>
Show me what you found, the through-line object and a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Pelican riding a bicycle
`axtonliu-0b861d` · @AxtonLiu · 2026-09-24 · One-shot · 6 palabras · tags: Personajes

**Prompt original del creador:**

````text
每次一个新的模型出来呢，大家都让它去画 “鹈鹕骑自行车” 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 “鹈鹕骑自行车”的动画视频，你可以用任何的技术，不用着急，画一天都可以。
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 30-second animated short film: a pelican riding a bicycle.
Style: the most complex, detailed and beautiful version you can make: real anatomy, a bicycle that actually works, a full landscape around them. Build it entirely in code.
Write the story first. Give the main character one clear want, three attempts that fail in different and escalating ways, a turn, and an ending that lands, plus a last-second gag after it.
Everyone draws this in HTML and SVG; go far beyond that, with any technology. There's no rush: take as long as you need.
Acting: every character reads in silhouette; every action has anticipation before it and follow-through after it; squash and stretch on anything soft; the eyes move first and the body follows; hold key poses for at least six frames.
Staging: one action per shot, framed so it reads instantly. Cut on action, matching the movement across the cut. Let the color shift with the mood.
Sound: a score and sound effects written in code. Sound should tell half the story.
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

### Anime robot combining sequence
`allforbigfire-86ff3c` · @allforbigfire · 2026-09-27 · Python · 2 palabras · tags: Personajes

**Prompt original del creador:**

````text
もしかしてロボットアニメみたいな3機の乗り物が変形合体してロボットになるシーンもアニメ風3D CGで作れますか。
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
Build a robot-anime transformation: three vehicles that transform and combine into one robot as one self-contained HTML page with three.js.
Style: anime-style 3D CG: cel shading, bold outlines, speed lines, dramatic low angles.
Design the signature shot first, the one frame someone would screenshot, and build everything toward it.
Camera: a film camera, not orbit controls. Every shot uses one named move (dolly, crane, orbit, push-in, rack focus), eased in and out, and the camera never passes through geometry.
Light and materials: a key, fill and rim light with soft shadows, an environment map for reflections, fog for depth, physically based materials with varied roughness, ACES tone mapping. Nothing should look like a default material.
Motion: things react to each other (what's hit moves, what's near lights up), driven by springs or simple physics, never linear tweens.
Banned: default materials and lighting, floating text labels, glows on everything, a slowly spinning object as the whole idea, anything that looks like a tech demo.
</direction>

<structure>
The three vehicles race in, transform and lock together part by part, then the finished robot strikes a pose. Every join clicks into place with a flash of light.
Plan it as a shot list: an establishing wide, three to five shots that each have one camera move and one event, the signature shot, and a final wide that shows it in a new light.
</structure>

<build>
1. One HTML file, three.js from a CDN, no build step. Model everything in code; no downloaded models or textures.
2. Use MeshPhysicalMaterial, a PMREM environment from RoomEnvironment, soft shadows, ACES tone mapping and antialiasing. Add depth of field only on shots that need it.
3. Hold 60fps on a laptop.
4. Add a ?render mode where every frame is computed from time (seeded randomness, no clock), so it can be captured with Playwright into an MP4 at 1080x1920.
5. Capture one frame per shot, look at it, and fix anything flat, aliased, clipping or hard to read.
</build>

<gotchas>
Set shadow bias, or surfaces get striped acne. Keep near and far planes tight, or distant surfaces flicker. Seed every random number, or the render won't match the preview.
</gotchas>

<start>
Describe the signature shot and the shot list in a few lines, then build it without asking me anything else. Give me the HTML file and a 20-second MP4 captured with the ?render mode.
</start>
````

### Animated agent session story
`jake11moran-a269c4` · @jake11moran · 2026-09-24 · HyperFrames · tags: Personajes


Skill de terceros: https://github.com/heygen-com/hyperframes-community-skills/tree/master/skills/session-story
Instalar: `npx skills add heygen-com/hyperframes-community-skills --skill session-story`

