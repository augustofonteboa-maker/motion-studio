# Gallery: Particles (4 prompts with this as the main tag)

Real prompts from creators, all made with Claude Opus 5.5, from most detailed to shortest. Each entry carries the creator's **original prompt** and, for most, the structured **full version** (direction, structure by beat, build, gotchas and first step): that is the one that can be executed end to end. Each prompt belongs to the creator named: use it as a **reference for structure and ideas** and adapt it to the user's brief. What the best ones have in common is in `../playbook.md`.

### Distilbook promo showreel
`ajith-io-4c248f` · @ajith_io · 2026-09-26 · 37 words · tags: Particles

**Creator's original prompt:**

````text
Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are, like it's your showreel - go all out. Use the Oppenheimer theme music as inspiration, but compose it yourself.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 40-second product film for Distilbook. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. For the music, take the Oppenheimer theme as inspiration but compose your own.
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

### Fiery samurai kata
`chrisjdimarco-f068db` · @chrisjdimarco · 2026-09-24 · JavaScript · 32 words · tags: Particles, Characters

**Creator's original prompt:**

````text
make a samurai dude in only javascript and have him doing a routine in a single spot going through various seriously impressive poses and motions and positions in a fiery awesome display
````

**Full version (structured from the original):**

````text
<direction>
A 30-second animation in pure JavaScript (canvas, no libraries) of a samurai performing a routine in a single spot: a series of impressive poses, strikes and stances.
Make the movement seriously impressive: real weight, anticipation and follow-through, holds that land on the beat. Surround it with a fiery display.
Banned: stiff tweening between poses, glows that hide the figure, camera shake, anything that looks like a template.
</direction>

<structure>
100 BPM. One pose or move per bar, building to the most impressive one, then a final held pose.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): music with a hit on each pose. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
List the poses in order, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Collision-driven music machine
`kamstudiolabs-447565` · @KamStudioLabs · 2026-09-23 · HTML · One-shot · 19 words · tags: Particles, Music

**Creator's original prompt:**

````text
Build a 45-second machine that plays an original piece of music, where every note comes from a visible collision.
````

**Full version (structured from the original):**

````text
<direction>
Build a 45-second machine that plays an original piece of music, where every note comes from a visible collision: balls, bells, pegs and xylophone bars, like a Rube Goldberg marble run.
Compose the piece first, then design the machine so the physics produces it exactly: every hit lands on its note.
Style: warm wood and brass on a clean background.
Banned: notes without a visible cause, glows, generic gradients, anything that looks like a tech demo.
</direction>

<structure>
The machine starts quiet with one voice, adds parts as it goes, peaks, and resolves on a final hit.
</structure>

<build>
1. Write the piece as note data (time, pitch, instrument) and synthesize it with the Web Audio API (OfflineAudioContext) to WAV.
2. One HTML file at 1920x1080. Positions are solved backwards from each note's time, so every collision is exact. Every frame is a function of time inside window.seek(t).
3. Render with Playwright at 60fps with motion blur, then mux the audio.
4. Watch it with sound and fix any hit that's off.
</build>

<start>
Describe the piece and the machine, then build it without asking me anything else. Give me the final MP4.
</start>
````

### Recipe brand 20th anniversary
`deebeeeff-50fcd0` · @deebeeeff · 2026-09-29 · effort Medium · 13 words · tags: Particles

**Creator's original prompt:**

````text
make a dynamic 10-second motion graphics video celebrating The Ferguson Recipes 20th Anniversary
````

**Full version (structured from the original):**

````text
<direction>
A 10-second motion design showreel that proves you are a world-class motion designer, built around celebrating The Ferguson Recipes' 20th anniversary. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
Show range: kinetic type, shape morphing, a 2D-to-3D moment, a data or UI moment, and an end title. Give each one an equal share of the time.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM, something happens on every beat.
First bar: hook. Then one technique per bar, each flowing out of the last. Last full bar: the strongest moment. Final half bar: end title, and the final frame matches the first so it loops.
</structure>

<build>
1. One HTML file at 1080x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a kick on every beat, a riser into the last full bar, a hit on each scene change. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Tell me the concept and show a beat-by-beat storyboard, then build it without asking me anything else. Give me the final MP4.
</start>
````

