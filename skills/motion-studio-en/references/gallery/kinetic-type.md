# Gallery: Kinetic type (60 prompts with this as the main tag)

Real prompts from creators, all made with Claude Opus 5.5, from most detailed to shortest. Each entry carries the creator's **original prompt** and, for most, the structured **full version** (direction, structure by beat, build, gotchas and first step): that is the one that can be executed end to end. Each prompt belongs to the creator named: use it as a **reference for structure and ideas** and adapt it to the user's brief. What the best ones have in common is in `../playbook.md`.

### Speech built as architecture
`gdgtify-287ddf` · @Gdgtify · 2026-09-25 · SVG/Canvas · 664 words · tags: Kinetic type
Has: beat grid/BPM, build method

**Creator's original prompt:**

````text
Create a 20.00-second kinetic spoken-word film titled “BUILD THE FLOOR.”  Treat this as an original miniature speech staged entirely through typography. Every line changes the architecture of the frame. The final declaration must stand on something the earlier words physically constructed.  Deliver one self-contained HTML file, 1080×1080, targeting 60fps, using SVG and/or Canvas. Embed all required assets.  ART DIRECTION Background #102820. Paper # F4E9D5. Structural accent # F2B544. A literary editorial world with the scale and confidence of a public monument. Use a high-contrast serif for the speech, a heavy grotesque for load-bearing words, and a restrained monospace for small timing marks. No distressed protest-poster clichés, megaphones, flags, crowds, microphones, or stock footage.  ORIGINAL SPEECH — EXACT WORDS, EXACT ORDER “We were told to wait.” “So we learned the weight of waiting.” “Then one voice made room.” “Then another.” “Now the floor belongs to us.”  Do not attribute these words to any real person. No extra slogans. The complete speech must be understandable without audio.  CENTRAL VISUAL RULE Words have assigned architectural roles. WAIT is a lintel. WAITING is a suspended load. VOICE is a support. ROOM is an opening. FLOOR is a platform. These roles must emerge from the actual letterforms, not from separate illustrations placed behind text.  STORYBOARD 0.00–3.00 “We were told to wait.” The sentence occupies a narrow horizontal opening beneath a massive WAIT. The opening slowly compresses while the sentence remains readable. The pressure comes from the layout, not camera shake.  3.00–6.50 “So we learned the weight of waiting.” Reveal the sentence in spoken phrase groups. WAITING lowers on two fine vertical rules. Those rules become suspension cables. A baseline bends under the visual load using a controlled vector deformation.  6.50–10.00 “Then one voice made room.” VOICE enters vertically and rotates into a structural support. It lifts one end of the baseline. The counter of the O in ROOM becomes an aperture. The next composition is revealed through that aperture.  10.00–12.50 “Then another.” A second support arrives. The tilted structure levels. This is the first moment of perfect horizontal alignment in the film. Use a brief stillness to make the change feel earned.  12.50–16.00 “Now the floor belongs to us.” Earlier structural words assemble into a platform. The final sentence settles onto it. US receives emphasis through shared alignment and scale, never through a separate flashy effect.  16.00–18.00 Hold the complete declaration. A slight release of tension travels through the supporting rules. No new text. No restless decorative motion.  18.00–20.00 The camera tracks beneath the completed platform. Its underside fills the frame and becomes the opening WAIT lintel. Under full occlusion, return hidden elements to their initial positions. Reveal the exact opening composition.  CHOREOGRAPHY Do not force the speech onto a dance beat. Use a cue sheet based on phrases, pauses, and emphasis. Phrase reveals should follow reading order. Allow at least one 400ms moment of absolute stillness. Use critically damped motion for settling loads. Use controlled elastic deformation for the baseline only. Make the changes in available space carry the emotional progression.  TYPE IMPLEMENTATION Use actual glyph paths for structural words. Preserve counters and legibility during deformation. For transitions between unrelated words, use occlusion or matched structural edges; do not interpolate arbitrary path points. Keep the currently spoken phrase readable before it becomes architecture.  ENGINEERING Implement window. seek(t) as a deterministic scene renderer. No accumulated physics, autonomous CSS transitions, or changing random values. Use time-remapping curves and analytic transforms. Use a 20-second periodic timeline with render(0)=render(20). Provide fixed-step access at n/60 for 1200 export frames. Audio is optional and off by default; no browser speech synthesis or autoplay dependency.  QUALITY GATE Inspect eight representative frames. Check that the speech reads in the correct order. Check that structural transformations never destroy a line before the audience can read it. Check the final platform is visibly assembled from earlier elements. Return the complete HTML implementation.Show allThis prompt was taken directly from @Gdgtify’s post (opens in a new tab).ModelOpus 5.5StackSVG/CanvasPostedSep 25, 2026
````

### Orange dot motion system
`ultimaxbt-bbebf5` · @ultimaxbt · 2026-10-06 · HTML · 591 words · tags: Kinetic type, Shapes, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: a short label for the opening toggle, one hero word, a percentage for the graph, the text for the final card, one accent color, and a track with a clear beat.
</inputs>

<direction>
A 2D motion design film in 16:9. Use a warm off-white canvas, near-black backgrounds, bold typography and one vivid orange accent. The orange dot connects every scene: it starts in the UI, becomes the dot over a letter, traces a spring graph, grows into a shape and returns on the end card. A cursor makes the opening click feel real. Keep the motion sharp and controlled, with small spring overshoots and no dead time.
Banned: stock footage, gradients, glows, particle bursts, random transitions and motion that isn't connected to an element already on screen.
</direction>

<structure>
Around 15 seconds, with a visual change on every major beat.
Open: a cursor clicks the orange toggle beside "Reduce Motion". The letters bend and move into place until only "Motion" remains, with the orange dot above the "i".
Spring: the dot jumps away from the word and lands on a graph. Its path draws a spring response, overshoots the target and settles beside a "+22%" callout.
Shape: the dot shoots across a line, grows into an orange circle and fills the frame. A black rounded square rotates inside it, then stretches into a pill. The scene contracts to a single orange dot on black.
Type: words like "SPRINGS", "EASING", "KINETIC TYPE", "3D" and "SOUND" orbit the dot. The circle of type opens out into a field of tiny dots.
Reveal: the halftone field expands and flips to black, revealing the final card: "Opus 5.5", "Motion designer." and "0 keyframes".
Return: the orange dot moves back through the halftone, graph and toggle. Match the final frame to the first so the video loops cleanly.
</structure>

<build>
1. One HTML file, 1920x1080 at 60fps. Compute every visual from time inside seek(t): no CSS transitions, timers or state carried between frames.
2. Use closed-form springs for the toggle, bouncing dot and graph. Draw the graph from the same spring function that moves the dot.
3. Animate letters individually for the "Reduce Motion" to "Motion" transformation. Keep the orange dot attached to the "i" until it begins its jump.
4. Make the orange circle, rotating square and pill different states of the same shape. Preserve its position and motion through each transformation.
5. Place the orbiting words along a circular path, then move their letters outward to hand the frame over to the halftone grid.
6. Draw the halftone as a grid of dots whose sizes respond to the orange dot. Let it grow past the frame edges before revealing the end card.
7. Sync the click, dot landing, graph peak, shape changes and final title to measured beats. Render one frame per beat to check the pacing before the full export.
</build>

<gotchas>
The graph and dot must follow the same motion or the spring will feel fake. Keep the orange accent consistent across every scene. Give outgoing and incoming text separate timing so letters don't overlap. When a shape fills the screen, scale it past all four corners. Match the cursor, dot and typography in the first and last frames to avoid a loop stutter.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and four stills (toggle, graph, kinetic type, end card) before building the full video.
</start>Show allThis prompt was taken directly from @ultimaxbt’s post (opens in a new tab).ModelOpus 5.5StackHTMLPostedOct 6, 2026
````

### Engraving-style Claude ad
`lexnlin-038035` · @LexnLin · 2026-10-02 · 184 words · tags: Kinetic type, Photos

**Creator's original prompt:**

````text
Make a fast-paced ad for Claude, about 10–15 s (closer to 15). Reference video attached.

1. research:
- Study Claude's earlier brand designs first.
- Find every photo and asset that fits: artistic, editorial, whatever the idea needs.

2. design/direction
- An art reimagine: bold, light mode.
- Clean and perfect: no beige "artsy" look, no eyebrow labels.
- Paint elements on top of the images.
- Above all: fast-paced and very creative.

3. rules
- No slop. Study the reference closely: smoothness, timing, shot durations, fonts, elements.
- Take some inspiration and borrow techniques, but change the design overall, it should look like something you did completely on yourself with your own taste 
- Every morph has to be perfect.

ideas: (since everything moves fast)
- Clean, varied Claude SVG animations
- Images small, bigger, several at once
- Morphing text
- Clean 3D animation
- Zooms

extra notes:
- Feel free to work 10+ hours 
- Give me the final video, ending on the Claude logo.Show allThis prompt was taken directly from @LexnLin’s post (opens in a new tab).ModelOpus 5.5PostedOct 2, 2026
````

### Motion techniques showreel
`lukasersil-0ed38e` · @lukasersil · 2026-09-26 · effort Max · 121 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, particles, distortion, creative masking, compositing, lighting, depth, and seamless camera movement. Keep the pacing fast, confident, and visually surprising, with every shot transitioning naturally into the next. Make it feel meticulously art-directed rather than like a random collection of effects. Push the creativity, polish, timing, and visual impact as far as possible. This should feel like the opening reel that gets a motion designer hired.Show allThis prompt was taken directly from @lukasersil’s post (opens in a new tab).ModelOpus 5.5EffortMaxPostedSep 26, 2026
````

**Full version (tested: the video was made with it):**

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

### Reflex brand motion reel
`reflex-cloud-72ffe5` · @reflex_cloud · 2026-09-25 · effort Max · One-shot · 111 words · tags: Kinetic type, Music

**Creator's original prompt:**

````text
You're a world-class motion designer, and this is your 15-second résumé reel. Make it dynamic and confident: open with a striking hook in the first second, build through a sequence of distinct techniques (typography, shape play, camera moves, colour shifts), and land on a clean, memorable final frame. Pacing should feel like it's cut to music. Go crazy.

Make it promote our brand, reflex. inc. Proceed as if you were starting with zero of my tools. Do not assume that the tools we already have are the best to use, as they might be outdated.Show allThis prompt was taken directly from @reflex_cloud’s post (opens in a new tab).ModelOpus 5.5EffortMaxIterationsOne-shotPostedSep 25, 2026
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second résumé reel for reflex. inc. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Open with a striking hook in the first second, build through distinct techniques (typography, shape play, camera moves, color shifts) and land on a clean final frame. Choose your tools fresh; don't assume the ones I have are the best.
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

### What happens in one second
`nolkeeg-bf062e` · @nolkeeg · 2026-09-26 · 106 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
Please do not reference any previous memories or skills. I've been seeing all of these motion graphics examples on X of people making cool videos with opus 5.5. So - I want you to just show off for me. You pick the design style, the look, subject etc. I just want to be extremely impressed by the motion graphic video that you create. I want you to destroy GPT 6 when it comes to motion graphics video - because astra just wants to give me a stupid glorified powerpoint presentation.Show allThis prompt was taken directly from @nolkeeg’s post (opens in a new tab).ModelOpus 5.5PostedSep 26, 2026
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around anything you pick: the design style, look and subject are yours. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
Don't use any memories or skills. It has to beat what other models make: never a slideshow or a glorified PowerPoint.
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

### Chaotic Claude POV video
`kloss-xyz-15182a` · @kloss_xyz · 2026-09-26 · Python + ffmpeg · 61 words · tags: Kinetic type, Code
Has: build method

**Creator's original prompt:**

````text
Use Python to generate a 9:16 chaotic brain rot video with excellent motion + sound design and render it using ffmpeg. Put your own personal spin on it so it’s aligned with Anthropic’s new launch. Also fully express what it’s like to be a very creative LLM used by me every day from your POV to give it some extra personality.
````

**Full version (structured from the original):**

````text
<direction>
A 30-second chaotic brain-rot video at 1080x1920, generated in Python and rendered with ffmpeg, with excellent motion and sound design.
Put your own spin on it, tied to Anthropic's new launch, and tell it from your point of view: what it's like to be a very creative LLM I use every day.
Chaotic but authored: fast cuts, stacked captions, zooms and sound hits that all land on the beat, with one running joke.
Banned: real people's faces or voices, copyrighted clips, anything unreadable at phone size.
</direction>

<structure>
140 BPM. A hook in the first half second, escalation every few beats, a payoff at the end that loops back to the start.
</structure>

<build>
1. Generate every frame in Python (Pillow and numpy), every frame a function of time.
2. Generate the sound in Python too (numpy synthesis), with hits on every cut, and write it to WAV.
3. Encode with ffmpeg at 30fps and mux the audio.
4. Watch the result at full speed and fix anything off the beat or hard to read.
</build>

<start>
Show me the beat-by-beat plan, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Branding agency showreel
`jacksonfall-54b2ac` · @jacksonfall · 2026-09-26 · 42 words · tags: Kinetic type, Photos

**Creator's original prompt:**

````text
make a dynamic 30-second motion graphics video that shows what an incredible motion designer you are,  create all graphics from scratch as if you were a niche branding agency for startup founders, like it's your showreel for a résumé. go all out.
````

**Full version (structured from the original):**

````text
<direction>
A 30-second motion design showreel that proves you are a world-class motion designer, built around a niche branding agency for startup founders: create all the graphics from scratch, as if they were your agency's work. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Synced lyrics motion video
`samaote-5e2fc2` · @samaote · 2026-09-25 · effort Max · 38 words · tags: Kinetic type, Music
Has: beat grid/BPM

**Creator's original prompt:**

````text
make a dynamic lyrics motion graphics video based on the attached music, perfectly syncing the lyrics and animation to the vocals and beat. make it feel like an incredible motion designer’s showreel for a résumé. go all out.
````

**Full version (structured from the original):**

````text
<direction>
Make a 30-second lyric video for the song I attach, with the lyrics and animation synced perfectly to the vocals and the beat.
Make it feel like a motion designer's showreel: kinetic type that acts out each line, one visual idea that grows with the song.
Style: your choice, fitting the song.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
Follow the song's sections. Verses stay simple, the chorus opens up, and the biggest moment lands on the biggest musical moment.
</structure>

<build>
1. Find the beat grid with numpy and the timing of every sung word (e.g. with whisper word timestamps, checked by ear).
2. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t), with each word timed to its moment.
3. Render with Playwright at 60fps with motion blur (3 subframes, ffmpeg tmix), then mux the song.
4. Watch it with sound and fix any word that's early or late.
</build>

<start>
Show me the lyric timing and a storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Claude self-intro motion graphic
`1littlecoder-9fef89` · @1littlecoder · 2026-09-25 · 37 words · tags: Kinetic type, Shapes
Has: banned list

**Creator's original prompt:**

````text
make a dynamic 10-second motion graphics video that shows who are you as Opus 5.5 - be as creative and dynamic as possible. Avoid the frames and texts on the corners which are typical ai made giveaways!
````

**Full version (structured from the original):**

````text
<direction>
A 10-second motion design showreel that proves you are a world-class motion designer, built around who you are as Opus 5.5. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
No frames, corner labels or timecodes: they're the giveaway of AI-made motion.
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

### Kinetic type self-portrait
`souravbhar871-61f424` · @souravbhar871 · 2026-09-26 · 37 words · tags: Kinetic type
Has: banned list

**Creator's original prompt:**

````text
make a dynamic 10-second motion graphics video that shows who are you as Opus 5.5 - be as creative and dynamic as possible. Avoid the frames and texts on the corners which are typical ai made giveaways!
````

**Full version (structured from the original):**

````text
<direction>
A 10-second motion design showreel that proves you are a world-class motion designer, built around who you are as Opus 5.5. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
No frames, corner labels or timecodes: they're the giveaway of AI-made motion.
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

### EyezOn 100 users thank-you
`sudiyasa-f48ac9` · @Sudiyasa_ · 2026-09-26 · 36 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out  do this to thank the first 100 users of @eyezonbot
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around thanking the first 100 users of @eyezonbot. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Motion design showreel
`samuel-spitz-974923` · @samuel_spitz · 2026-09-25 · 34 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
Create a motion graphics video that feels like the centerpiece of a world-class designer’s showreel. Treat it as your résumé: showcase your full range, push the craft as far as possible. Go all out.
````

**Full version (tested: the video was made with it):**

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

### fal motion design showreel
`influencer-seo-ce8c33` · @influencer_seo · 2026-09-29 · One-shot · 32 words · tags: Kinetic type, Photos

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video for @fal that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out. Use the fal API.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for @fal. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Use the fal API to generate any images it needs.
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

### Overthinking motion study
`gizakdag-cf4ae6` · @gizakdag · 2026-09-25 · 30 words · tags: Kinetic type

**Creator's original prompt:**

````text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it’s your showreel exploring the concept of “Overthinking,” inspired by the attached graphics.
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around the concept of "Overthinking". Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
Take your visual language from the graphics I attach.
Show range: kinetic type, shape morphing, a 2D-to-3D moment, a data or UI moment, and an end title. Give each one an equal share of the time.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, something happens on every beat.
First bar: hook. Then one technique per bar, each flowing out of the last. Last full bar: the strongest moment. Final half bar: end title, and the final frame matches the first so it loops.
</structure>

<build>
1. One HTML file at 1080x1920. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat, a riser into the last full bar, a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Tell me the concept and show a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Swiss-style motion showreel
`levabashidze-2d713a` · @levabashidze · 2026-09-26 · effort Max · One-shot · 30 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out. dont ask just make
````

**Full version (tested: the video was made with it):**

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

### Motion designer portrait showreel
`ndhabarde11-f155b4` · @ndhabarde11 · 2026-09-26 · One-shot · 29 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video in portrait mode that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Code-only motion design reel
`johnsavage-ai-b091c0` · @johnsavage_ai · 2026-09-25 · 29 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume. go all out. use only code
````

**Full version (tested: the video was made with it):**

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

### Kinetic shapes showreel
`shinskinakamoto-20190b` · @Shinskinakamoto · 2026-09-25 · 27 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
Make a dynamic 15 second motion graphics video that shows what an incredible motion designer you are, like its your showreel for a resume, go all out!
````

**Full version (tested: the video was made with it):**

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

### Claude motion designer showreel
`stephanlivera-df17a2` · @stephanlivera · 2026-09-25 · effort Max · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Bold kinetic type showreel
`shneural-2abdfa` · @shneural · 2026-09-24 · 26 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Abstract motion design reel
`ajith-io-b5626e` · @ajith_io · 2026-09-25 · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Claude motion design reel
`tequilafunks-97f6c9` · @tequilafunks · 2026-09-25 · Remotion · 26 words · tags: Kinetic type, Shapes, Particles, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

**Full version (tested: the video was made with it):**

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

### Claude motion design showreel
`ayushunleashed-ece3e3` · @ayushunleashed · 2026-09-26 · 26 words · tags: Kinetic type, Shapes, Particles, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

**Full version (tested: the video was made with it):**

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

### Particle sphere motion reel
`blue-clarity-ef56d0` · @blue_clarity · 2026-09-25 · effort Medium · One-shot · 26 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Claude motion reel
`codestackr-c071bf` · @codeSTACKr · 2026-09-26 · 26 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume. go all out
````

**Full version (tested: the video was made with it):**

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

### Claude motion designer showreel
`mrtanviir-132457` · @mrtanviir · 2026-09-25 · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Type, form, space showreel
`web3wesley-7bb108` · @Web3Wesley · 2026-09-26 · effort Max · One-shot · 26 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Kinetic type and particle showreel
`m1n9-k7-ff9ab9` · @m1n9_k7 · 2026-09-25 · effort High · One-shot · 26 words · tags: Kinetic type, Particles, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

**Full version (tested: the video was made with it):**

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
`zaqailo-212ad3` · @zaqailo · 2026-09-26 · 26 words · tags: Kinetic type, Shapes, Particles, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Claude motion designer showreel
`crazyalphaaa-bc7e75` · @CrazyAlphaaa · 2026-09-25 · 26 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Blue editorial motion showreel
`fionntobin-97b7af` · @fionntobin · 2026-09-25 · One-shot · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Kinetic type showreel
`itsuki-dev-10942d` · @itsuki_dev · 2026-09-25 · One-shot · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Motion design principles reel
`tolgayhickiran-e90799` · @tolgayhickiran · 2026-09-25 · effort Medium · One-shot · 26 words · tags: Kinetic type, Shapes, Particles, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Nohandslabs brand promo
`robvjourney-ce3e1a` · @robvjourney · 2026-09-26 · 26 words · tags: Kinetic type, Particles, Code

**Creator's original prompt:**

````text
Can you make a 15-second motion graphic video of https://t.co/4AZZ7AlJvi? Go ALL OUT and make the most badass video you possibly can use everything you've got.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for my site (paste the URL). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Make it the most badass video you can, using everything you've got.
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

### Geometric motion designer showreel
`leonkohli-6dc01b` · @LeonKohli · 2026-09-25 · One-shot · 26 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Motion design showreel
`safarkhanshuvo-ffd52d` · @safarkhanshuvo · 2026-09-25 · One-shot · 26 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

**Full version (tested: the video was made with it):**

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

### 3D motion design showreel
`sahildesigner23-ee3155` · @sahildesigner23 · 2026-09-25 · effort Max · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Shape and dot motion showreel
`umangratani-57f86a` · @umangratani · 2026-09-25 · 26 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (tested: the video was made with it):**

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

### Claude motion design showreel
`rendesr-86be44` · @rendesr · 2026-09-25 · 25 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
Make a dynamic 15 second motion graphics video that shows off what an incredible motion designer you are. Imagine it's your showreel for a resume!
````

**Full version (tested: the video was made with it):**

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
`vanshwtfff-db0466` · @VanshWTFFF · 2026-09-26 · effort Max · 24 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
make a dynamic 10 second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume.
````

**Full version (tested: the video was made with it):**

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
`hanifproduktif-54bdee` · @hanifproduktif · 2026-09-25 · 23 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
You are applying as a motion designer in my agency. Make 15s video to showcase your skills and capabilities. Send me a showreel
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around applying to my agency as a motion designer: your skills and capabilities. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Lightspark social promo video
`davidmarcus-a28a60` · @davidmarcus · 2026-09-25 · One-shot · 20 words · tags: Kinetic type, Code

**Creator's original prompt:**

````text
make a punchy and modern short video for social that promotes @lightspark capabilities. Needs to be production grade with sound
````

**Full version (structured from the original):**

````text
<direction>
A punchy, modern 20-second video for social that promotes Lightspark (@lightspark): its main capabilities. Research the product first and use its real interface and brand; never invent features or numbers.
It has to stop the scroll: a hook in the first second, one idea per shot, big readable type, captions that work with the sound off.
Production grade, with sound: music and effects synced to every cut.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, something happens on every beat.
Hook in beat one. Then one capability per bar, each made out of the last. End on the name and what to do next.
</structure>

<build>
1. One HTML file at 1080x1920. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat and a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me what you found and a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Easing and morphing showreel
`roundtablespace-d3a1be` · @RoundtableSpace · 2026-09-28 · effort Max · One-shot · 18 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make a 15-second motion graphics showreel that proves what an incredible motion designer you are, go all out.
````

**Full version (tested: the video was made with it):**

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

### Poster breaking its frame
`pankajkumar-dev-0bee87` · @pankajkumar_dev · 2026-09-25 · One-shot · 14 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
create a motion design video of a poster breaking out of its own frame.
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around a poster breaking out of its own frame. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Festival lineup promo reel
`gonzalomacagno-2de1a9` · @GonzaloMacagno · 2026-09-23 · 13 words · tags: Kinetic type

**Creator's original prompt:**

````text
Necesito que armes un reel con esta info en 10 segundos, bien publicitario
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 10-second reel for the info I attach. Use the product screenshots and assets I attach. Never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Make it feel like an ad.
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
1. One HTML file at 1080x1920. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Kinetic type showreel
`zheke-38deff` · @zheke · 2026-09-25 · 12 words · tags: Kinetic type, Shapes

**Creator's original prompt:**

````text
Hello Opus 5.5 show me what an incredible motion designer you are.
````

**Full version (tested: the video was made with it):**

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

### Personal research intro reel
`madhav-xo-f97f20` · @Madhav_XO · 2026-09-25 · 11 words · tags: Kinetic type, Particles, Code

**Creator's original prompt:**

````text
make a 10 sec video on whatever you know about me
````

**Full version (structured from the original):**

````text
<direction>
A 10-second motion design showreel that proves you are a world-class motion designer, built around me, from what you know about me. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Photon journey from the Sun
`apoorvjain25-d24184` · @apoorvjain25 · 2026-09-29 · One-shot · 11 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
make a 20-second video about anything, your call; make it crazy.
````

**Full version (structured from the original):**

````text
<direction>
A 20-second motion design showreel that proves you are a world-class motion designer, built around anything, your call: make it crazy. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Handwoven textiles brand explainer
`amitsingha89-150378` · @AmitSingha89 · 2026-09-26 · One-shot · 11 words · tags: Kinetic type, Photos

**Creator's original prompt:**

````text
Make a professional explainer video for https://anuprerna.com for a first-time visitor.
````

**Full version (structured from the original):**

````text
<direction>
A 90-second explainer on Anuprerna (https://anuprerna.com): what it is and why it matters for a first-time visitor. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: professional motion graphics using the site's own imagery. Narrate it with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural), with subtitles synced line by line.
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

### GravityDEX anime hype edit
`micheleharmonic-77628e` · @MicheleHarmonic · 2026-09-24 · One-shot · 10 words · tags: Kinetic type

**Creator's original prompt:**

````text
Make a GravityDEX x Gojo Satoru edit that goes hard
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second hype edit for GravityDEX x Gojo Satoru. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Anime edit energy: fast cuts on the beat, impact frames, big type. Keep any character art original or licensed.
Motion rules: springs with at most a small overshoot; nothing appears from nothing (it grows, unfolds or is revealed by a mask); the camera never sits still (push from 1.0 to 1.04 across a scene, and start each scene at the zoom the last one ended on); something changes on every beat.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
140 BPM. Write a timed storyboard first, beat by beat, then build exactly that.
Hook (first bar): the problem in three to five words, in big type that the through-line object interrupts.
Middle: three or four moments of the product doing what it does best. Each begins with the through-line object turning into the next UI element and lands one readable idea.
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and a one-line call to action.
</structure>

<build>
1. One HTML file at 1080x1920. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Claude motion design reel
`ghinaiya-nirmal-5d8fec` · @ghinaiya_nirmal · 2026-09-25 · 9 words · tags: Kinetic type, Shapes, Music

**Creator's original prompt:**

````text
make your own 15-second motion reel. go all out
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around your own motion reel: your choice of subject. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### ODATANO Cardano hype edit
`maxalexweber-67688b` · @maxalexweber · 2026-09-24 · One-shot · 7 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
Make a ODATANO edit that goes hard
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second hype edit for ODATANO. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. It goes hard: fast cuts on the beat, heavy bass, big type.
Motion rules: springs with at most a small overshoot; nothing appears from nothing (it grows, unfolds or is revealed by a mask); the camera never sits still (push from 1.0 to 1.04 across a scene, and start each scene at the zoom the last one ended on); something changes on every beat.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
140 BPM. Write a timed storyboard first, beat by beat, then build exactly that.
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

### Chain.wtf pitch video
`spearwtf-3c1fd1` · @SPEARwtf · 2026-09-26 · 7 words · tags: Kinetic type

**Creator's original prompt:**

````text
Create a 30sec pitch video for @chaindotwtf
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second pitch video for @chaindotwtf. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Claude motion design showreel
`sudo-kiran-49176d` · @sudo_kiran · 2026-09-25 · One-shot · 3 words · tags: Kinetic type, Shapes, Particles

**Creator's original prompt:**

````text
Go all out.
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around whatever you think shows you off best. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Keyframe motion design reel
`grace-sunnyy-29bc61` · @Grace_sunnyy · 2026-10-03 · 3 words · tags: Kinetic type, Particles, Music

**Creator's original prompt:**

````text
制作一段 15 秒的动态图形视频，展示你是一位多么出色的动态设计师，就像是你简历上的作品集一样，使用任何你认为能产出最佳效果的工具或技术。你拥有完全的创作自由，优先追求卓越的视觉设计、大胆的艺术指导、引人注目的构图和富有力量的动态表现，让每一秒都有价值。全力以赴。
````

**Full version (tested: the video was made with it):**

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

### Shin Majin-shiki promo
`majin-appsheet-2d3c1a` · @Majin_AppSheet · 2026-09-25 · HyperFrames · 1 words · tags: Kinetic type

**Creator's original prompt:**

````text
シンまじん式のPV作って
````

**Full version (structured from the original):**

````text
<direction>
A 30-second promo video for Shin Majin-shiki. Research it first: what it is, what it does and who it's for. Use only what you find; never invent features or numbers.
Carry one visual idea all the way through, with every scene made out of the last instead of cutting or fading.
Tone: poppy and full of energy. One typeface, one accent color, lots of empty space. On-screen text in Japanese.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, something happens on every beat.
Hook in the first bar. Then one strength per bar, each flowing out of the last. End on the name and a one-line tagline.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write the music and sound effects in code with the Web Audio API (OfflineAudioContext), on the beat grid and on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me what you found and a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

### What day is it
`tankazunori0914-0fc886` · @tankazunori0914 · 2026-10-02 · HyperFrames · 1 words · tags: Kinetic type, Music

**Creator's original prompt:**

````text
今日何曜日だっけ？BGM付きの30秒のかっこいいモーショングラフィックスで教えて（全力を出してください）
````

**Full version (structured from the original):**

````text
<direction>
A 30-second motion design showreel that proves you are a world-class motion designer, built around telling me what day of the week it is today. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
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

### Kinetic type motion showreel
`topi-003-9ca6b5` · @_topi_003 · 2026-09-27 · 1 words · tags: Kinetic type, Particles

**Creator's original prompt:**

````text
あなたがどれほど素晴らしいモーションデザイナーかを示す、ダイナミックな15秒のモーショングラフィックスビデオを作成してください。履歴書用のショーリールのような感じで、全力でやって。
````

**Full version (tested: the video was made with it):**

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

### Anime maid dance showreel
`topi-003-b0e12c` · @_topi_003 · 2026-09-27 · 1 words · tags: Kinetic type, Characters, Music

**Creator's original prompt:**

````text
この画像の女の子がエキサイトなダンスをする、ダイナミックな15秒のモーショングラフィックスビデオを作成してください。履歴書用のショーリールのような感じで、全力でやって。
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around the girl in the image I attach doing an exciting dance. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
Use the attached image as the character and keep her look.
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

