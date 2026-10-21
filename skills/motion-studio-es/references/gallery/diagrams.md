# Galería: Diagramas (19 prompts con esta como tag principal)

Prompts reales de creadores, todos hechos con Claude Opus 5.5, del más detallado al más corto. Cada entrada trae el **prompt original** del creador y, en la mayoría, la **versión completa** estructurada (dirección, estructura por pulso, build, trampas y primer paso): esa es la que se puede ejecutar de punta a punta. Cada prompt pertenece al creador citado: úsalo como **referencia de estructura y de ideas** y adáptalo al brief del usuario. Lo que tienen en común los mejores está en `../playbook-prompt-motion.md`.

### Negroni recipe animation
`ror-fly-9950f1` · @Ror_Fly · 2026-09-23 · HTML · 65 palabras · tags: Diagramas

**Prompt original del creador:**

````text
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingreidents + measurements as they're going into the cup. Should be a 30s video.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 30-second recipe explainer for a cocktail of your choice, from an empty glass to the finished drink.
Show each ingredient and its measurement as it goes into the glass: the pour, the level rising, the measure in clean type beside it. Then the final touches (stirring and any garnish) and a moment to admire it.
Style: clean, bright product photography in motion: a soft background, crisp liquid and glass.
Banned: stock clip art, glows, generic gradients, measurements you'd have to pause to read.
</direction>

<structure>
100 BPM. One ingredient per bar, the glass in the same spot throughout, the camera easing in for the finish.
</structure>

<build>
1. One HTML file at 1080x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a pour, ice or clink sound on each step, under light music. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
List the recipe with measurements, then show a storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Animated business explainer
`alex-prompter-1ea044` · @alex_prompter · 2026-09-25 · HTML · 63 palabras · tags: Diagramas

**Prompt original del creador:**

````text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 30-second animated explainer for my business, as a single HTML page: describe what you sell and who it's for.
Five scenes: the customer's problem, what I do, how it works in three steps, one proof point, and my name at the end.
Bold type, smooth transitions where each scene is made out of the last, my brand colors: describe your colors.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM. Equal time for each scene, with the three steps getting a beat each.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat and a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me the copy for each scene and a storyboard, then build it without asking me anything else. Give me the HTML page and the MP4.
</start>
````

### White Russian recipe animation
`sarut0bisasuke-cefa43` · @Sarut0biSasuke · 2026-09-25 · 56 palabras · tags: Diagramas

**Prompt original del creador:**

````text
Render a recipe motion graphic animation using JavaScript or HTML (whatever you think will produce the best result) to show the full recipe for a White Russian from start to finish, empty glass to completed cocktail. Explainer video style, showing the ingredients and measurements as they go into the glass. It should be a 30s video.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 30-second recipe explainer for a White Russian, from an empty glass to the finished drink.
Show each ingredient and its measurement as it goes into the glass: the pour, the level rising, the measure in clean type beside it. Then the final touches (stirring and any garnish) and a moment to admire it.
Style: clean, bright product photography in motion: a soft background, crisp liquid and glass.
Banned: stock clip art, glows, generic gradients, measurements you'd have to pause to read.
</direction>

<structure>
100 BPM. One ingredient per bar, the glass in the same spot throughout, the camera easing in for the finish.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a pour, ice or clink sound on each step, under light music. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
List the recipe with measurements, then show a storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Motion designer showreel
`himanshutwtxs-5f4b43` · @himanshutwtxs · 2026-09-25 · esfuerzo Max · One-shot · 26 palabras · tags: Diagramas, Tipografía cinética, Partículas

**Prompt original del creador:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

**Versión completa (probada: el video se hizo con ella):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer. Concept: your pick (e.g. "ink becomes type becomes architecture"). Commit to it and name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface (Geist, Inter or a bold display face from Google Fonts), a palette of at most three colors plus black and white, one consistent camera language.
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

### Replica symmetry breaking whiteboard
`tak3sh8-be5012` · @tak3sh8 · 2026-09-26 · 26 palabras · tags: Diagramas

**Prompt original del creador:**

````text
Prompt 1: "Do a quick hand-drawn whiteboard animations explaining what is replica symmetry breaking in the SK model"

Prompt 2: "build the mp4 version with narration"
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 2-minute explainer on replica symmetry breaking in the Sherrington-Kirkpatrick model for a physics student. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: a quick hand-drawn whiteboard animation: a marker drawing each diagram as it's explained. Narrate it with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural), with subtitles synced line by line.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. Write the narration script first, line by line, marking what's on screen for each line.
2. Generate each line with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural) and time the animation to each line's real audio length.
3. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux in the narration, quiet music under it and subtitles.
5. Before the full render, export a key frame from each section and check it. Fix anything crowded, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the script, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### LiteLLM promo reel
`misbahsy-80eaec` · @MisbahSy · 2026-09-26 · 26 palabras · tags: Diagramas, Música, Código

**Prompt original del creador:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Versión completa (probada: el video se hizo con ella):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer. Concept: your pick (e.g. "ink becomes type becomes architecture"). Commit to it and name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface (Geist, Inter or a bold display face from Google Fonts), a palette of at most three colors plus black and white, one consistent camera language.
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

### Motion designer showreel
`teslachartz-c58b32` · @TeslaChartz · 2026-09-26 · 26 palabras · tags: Diagramas, Tipografía cinética, Formas

**Prompt original del creador:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

**Versión completa (probada: el video se hizo con ella):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer. Concept: your pick (e.g. "ink becomes type becomes architecture"). Commit to it and name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface (Geist, Inter or a bold display face from Google Fonts), a palette of at most three colors plus black and white, one consistent camera language.
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

### Lead Notifi product ad
`leadnotifi-e83f94` · @leadnotifi · 2026-09-25 · 26 palabras · tags: Diagramas, Tipografía cinética, Formas

**Prompt original del creador:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Versión completa (probada: el video se hizo con ella):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer. Concept: your pick (e.g. "ink becomes type becomes architecture"). Commit to it and name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface (Geist, Inter or a bold display face from Google Fonts), a palette of at most three colors plus black and white, one consistent camera language.
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

### Pixel art LLM history
`pluginplay-3d4006` · @PluginPlay__ · 2026-09-26 · HTML · 22 palabras · tags: Diagramas, Personajes

**Prompt original del creador:**

````text
pixel art boomerang render of the history of LLMs. then RSI. then it goes fucking crazy. 15 seconds max. self contained .html
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 15-second explainer on the history of LLMs, then recursive self-improvement, then it goes completely crazy for people online who'll get the joke. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: pixel art on a strict grid, rendered as a boomerang loop that plays forward then backward. It's a self-contained HTML file.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft pulse under each step and a hit as each idea lands. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the steps, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### First & 10 yellow line explainer
`blueoctopusai-dd17bd` · @blueoctopusai · 2026-09-30 · 15 palabras · tags: Diagramas

**Prompt original del creador:**

````text
Make a motion graphics video that explains how the First & 10 Yellow Line works.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 90-second explainer on how the First & 10 yellow line in American football broadcasts works for a football fan who's never wondered. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: a broadcast-graphics look: a 3D field, camera rigs and the line drawn as it's explained.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft pulse under each step and a hit as each idea lands. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the steps, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Indian civilisation history film
`buildfastwithai-53234e` · @BuildFastWithAI · 2026-09-28 · One-shot · 13 palabras · tags: Diagramas

**Prompt original del creador:**

````text
generate a creative mp4 video on indian civilisation with music and sound effects.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 2-minute explainer on Indian civilisation, from the Indus Valley to today for a general audience. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: rich illustrated scenes with maps, patterns and art drawn from each era. Include music and sound effects.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft pulse under each step and a hit as each idea lands. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the steps, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

Skill de terceros: https://github.com/buildfastwithai/buildfast-skills/tree/main/generative-film-skill
Instalar: `npx skills@latest add https://github.com/buildfastwithai/buildfast-skills`

### History of AI timeline
`kloss-xyz-fe0c31` · @kloss_xyz · 2026-09-26 · One-shot · 11 palabras · tags: Diagramas, Tipografía cinética, Partículas

**Prompt original del creador:**

````text
make a video highlighting key moments in the history of AI.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 2-minute video highlighting the key moments in the history of AI. Research it first and choose 12 to 15 moments that changed its course. For each: the year, what happened and why it mattered, in one line.
Style: a clean editorial timeline, one typeface, archival photos where the license allows. Keep the facts right: date and name every moment, and never invent a quote.
Banned: glows, generic gradients, stock-looking icons, crossfades, anything that looks like a template.
</direction>

<structure>
A short hook, then the moments in order on one continuous timeline the camera travels along. Each moment gets the same rhythm: the year lands, the event appears, one line on why it mattered. End on where things stand now.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a hit as each year lands, and music that builds toward the present. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me your list of moments with sources and a storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Celld job ownership explainer
`0xnfrith-5be616` · @0xnfrith · 2026-09-25 · 11 palabras · tags: Diagramas

**Prompt original del creador:**

````text
make me an animation to explain why celld earns its place.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 60-second explainer on why celld earns its place for someone deciding whether to use it. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: clean editorial motion graphics: one typeface, one accent color, diagrams that build themselves.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft pulse under each step and a hit as each idea lands. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the steps, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### AI data centre 3D tour
`sayan-shanky-f850d8` · @Sayan_shanky · 2026-09-26 · HTML · esfuerzo High · One-shot · 10 palabras · tags: Diagramas

**Prompt original del creador:**

````text
show me what goes on inside an AI data centre.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 90-second explainer on what goes on inside an AI data centre for a curious viewer with no technical background. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: an isometric cutaway that the camera travels through, from the power line to a single chip.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft pulse under each step and a hit as each idea lands. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the steps, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### AI data centre 3D film
`mdaman010-e7226a` · @mdaman010 · 2026-09-26 · HTML · esfuerzo High · One-shot · 10 palabras · tags: Diagramas

**Prompt original del creador:**

````text
Show me what goes on inside an AI data centre.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 90-second explainer on what goes on inside an AI data centre for a curious viewer with no technical background. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: an isometric cutaway that the camera travels through, from the power line to a single chip.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft pulse under each step and a hit as each idea lands. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the steps, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Risograph studio intro
`rneayan-474bcf` · @rneayan · 2026-09-25 · One-shot · 7 palabras · tags: Diagramas, Tipografía cinética

**Prompt original del creador:**

````text
make about my studio with Risograph style
````

**Versión completa (estructurada a partir del original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: Risograph style: two or three spot colors, misregistration, grain), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second studio film for my studio. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: Risograph style: two or three spot colors, misregistration, grain. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Everything in Risograph style.
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
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Prompting mistakes video tutorial
`henkvaness-0e06af` · @henkvaness · 2026-09-26 · One-shot · 6 palabras · tags: Diagramas

**Prompt original del creador:**

````text
make educational video out of article.
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 90-second explainer on the article I paste in for someone who hasn't read it.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: clean editorial motion graphics: one typeface, one accent color, diagrams that build themselves. Narrate it with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural), with subtitles synced line by line. Stay faithful to the article: no claims it doesn't make.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. Write the narration script first, line by line, marking what's on screen for each line.
2. Generate each line with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural) and time the animation to each line's real audio length.
3. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux in the narration, quiet music under it and subtitles.
5. Before the full render, export a key frame from each section and check it. Fix anything crowded, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the script, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### What is Git explainer
`yunn260414-60d996` · @Yunn260414 · 2026-09-27 · JavaScript · 4 palabras · tags: Diagramas, Código

**Prompt original del creador:**

````text
帮我用js制作一个视频，主题是：什么是Git
要深入浅出，让一个计算机0基础的人也能看得懂，然后要介绍一些常用指令的意思等等
要有声音的，然后是中文讲的
你可以用任何工具或者安装工具，可以联网检索
````

**Versión completa (estructurada a partir del original):**

````text
<direction>
A 3-minute explainer on what Git is, and what the most common commands mean for someone with zero computer background. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: simple diagrams of files, snapshots and branches that build as they're explained. Narrate it with a Mandarin Chinese voice (e.g. edge-tts zh-CN-XiaoxiaoNeural), with subtitles synced line by line. You can install any tools you need and search the web.
Motion rules: one thing moves at a time, and the eye always knows where to look; arrows and flows animate in the direction things actually move; no more than seven words on screen at once, held for at least 0.3 seconds a word.
Banned: walls of text, bullet lists, generic gradients, stock-looking icons, glows, crossfades, anything that looks like a template.
</direction>

<structure>
Write a timed storyboard first, then build exactly that.
Hook: a question the viewer already has, asked over the first picture.
Middle: three to five steps. Each zooms into one part of the diagram, shows one concrete example, then pulls back as that part locks into place.
Payoff: a final pull back to the whole diagram, now complete, and a one-line takeaway.
</structure>

<build>
1. Write the narration script first, line by line, marking what's on screen for each line.
2. Generate each line with a Mandarin Chinese voice (e.g. edge-tts zh-CN-XiaoxiaoNeural) and time the animation to each line's real audio length.
3. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux in the narration, quiet music under it and subtitles.
5. Before the full render, export a key frame from each section and check it. Fix anything crowded, overlapping or hard to read.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Give outgoing and incoming text separate timing so letters never overlap.
</gotchas>

<start>
Show me the script, the diagram and a timed storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Motion principles showreel
`chatgptastra-0d95c7` · @ChatGptAstra · 2026-09-26 · One-shot · 1 palabras · tags: Diagramas, Tipografía cinética, Partículas

**Prompt original del creador:**

````text
以动态设计师的高级审美，制作一段动态的15秒动态图形视频
````

**Versión completa (probada: el video se hizo con ella):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer. Concept: your pick (e.g. "ink becomes type becomes architecture"). Commit to it and name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface (Geist, Inter or a bold display face from Google Fonts), a palette of at most three colors plus black and white, one consistent camera language.
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

