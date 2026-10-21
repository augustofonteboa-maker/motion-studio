# Briefing templates (fill in before building)

Use when the request is vague ("make a cool video", "showreel", "promo for my app"). Copy the closest template, fill in what the request already says, decide the rest with good taste, **show the user the one-line concept + the beat map + 3 to 4 frames**, and only then build. Structure and the why of each block: `playbook-prompt-motion.md`. Real examples of each type: `gallery/`.

Two cautions apply to all of them:
- Exact text, name and numbers come from the user. Never invent a result, percentage, client or feature.
- Write the brief for yourself (short, in the user's language) and show the user only the summary: concept, palette, timing, what is banned.

---

## A. Showreel / "show what you do" (15 to 30 s)

```
<inputs>
Ask: name/brand, logo (or draw a simple symbol), 1 accent color, own track (otherwise synthesize). Defaults if skipped: the project brand's colors and font, or a preset (SKILL, section 3).
</inputs>

<direction>
A {15} s showreel. Concept (one line, named before starting): {e.g. "ink becomes type becomes architecture"}. Bridge element: {shape/dot/ball} that appears in every scene. Every scene is born from the previous one: shapes, text and color transform, with no cut and no fade.
One font (or 2), at most 3 colors + black and white, one camera language.
Show range, an equal slice each: kinetic type, shape morph, a 2D→3D (perspective) moment, a data or UI moment, an end title.
Banned: particle bursts, glow, lens flare, camera shake, RGB split, crossfade, generic gradient, elastic easing, holds > 0.5 s, anything that looks like a template. (Every "no" has its "instead": see playbook, section 3.)
</direction>

<structure>
120 BPM, something happens on every beat. Bar 1: hook. One technique per bar, each flowing out of the last. Second-to-last bar: the strongest moment. Final half bar: title; last frame = first (loop).
</structure>

<build>
This skill's kit. Pure render(t); springs (M.springAt) and expo; blur by speed (M.blur 6/12); soundtrack by cues (kick on every beat, riser before the last bar, hit on each swap); 16:9 and 9:16; a contact sheet with 1 frame per beat before rendering.
</build>

<start>
State the concept and show the beat map and the frames. Then build without asking anything else.
</start>
```

## B. Launch video / product promo (10 to 25 s)

```
<inputs>
Ask: product name and the promise in 1 line; 3 to 5 UI moments to show; logo; 1 accent color; real screens or real clips (if any); a track with a clear "drop" (if any). Defaults: design tokens and wordmark from the user's repository, if one exists; otherwise the corporate (#8) or soft UI (#5) preset.
If the product has a repository: READ tokens, wordmark and current screenshots first. Prefer the newest. Do not invent features.
</inputs>

<direction>
Minimal and expensive: one idea per shot, lots of empty space, one accent color, a sans with tight tracking. Type that rises from a mask, match cuts, one camera language. The product's real material; never placeholder cards. No full stops in on-screen text.
Banned: shockwave ring, particles, RGB split, shake, lens flare, neon, grid floor, flashing background, elastic easing.
</direction>

<structure>
{120} BPM, {10} bars of 2 s.
Bar 1 hook: words on the beats. Bar 2: one hook word becomes the product UI; a cursor really types and clicks. The drop: a circle opens from the button and floods a dark scene. Then one move per bar: the result as giant type, a wall of real clips/screens, a phone with a panel that becomes the result, stats on hard cuts (only the user's numbers), a 3-word ticker, logo, final fade.
</structure>

<build>
This skill's kit, 60 fps (--fps 60), real video = a frame sequence (SKILL, section 2). Every cut on a strong beat; every UI sound at its measured peak (sound.py/cues).
</build>

<start>
Ask for the inputs, show the beat storyboard and 3 frames (hook, UI, ending), then build.
</start>
```

## C. One shape that never cuts (UI motion, 12 to 30 s, square or 16:9)

```
<inputs>
Ask: 8 to 12 UI states for the shape to become (button, loader, player, slider, toggle, tabs, chart, ⌘K, toast...), pure black and white or 1 accent color, a ~120 BPM track.
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cuts: every state is the same element changing width, height, radius and color while the content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one UI font (Geist). Springs everywhere, minimal overshoot. The camera zooms so each state fills the frame. Last frame = first frame (loop).
Banned: elastic easing, particles, glow, gradient on UI, icons with different strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something on every beat. {state 1} → {state 2} → ... → back to state 1.
</structure>

<build>
This skill's kit. A value that changes target many times = a sum of one spring per change (still a pure function of time). The indicator's two edges on different springs (the front one stretches). Drag = a value computed from the cursor position; on release, it springs back from where it was. Gotchas: no will-change on anything the camera scales; text swapping inside the morphing container needs separate enter and exit timing.
</build>

<start>
Show the list of states on the beat grid before writing code.
</start>
```

## D. Kinetic typography / sentence or manifesto (5 to 20 s)

```
<inputs>
Ask: the exact text (exact order), tone (monument, punk, luxury, tech), colors.
</inputs>

<direction>
Concept: every line changes the architecture of the frame, and the final statement stands on what the earlier words built. Each key word gets a physical role (lintel, cable, support, opening, platform) born from the actual letters, never from an illustration behind. High-contrast serif for the speech, heavy grotesque for load-bearing words, a discreet mono for time marks. Readable without audio.
Banned: protest-poster cliches, megaphone, flag, crowd, stock video, corner text, camera shake.
</direction>

<structure>
A storyboard by the second ("0.00 to 3.00: sentence 1 ..."), each sentence with one layout change and an exit that hands the frame to the next.
</structure>

<build>
This skill's kit (M.split by lines, words and letters; controlled vector deformation of the baseline). Text exit and entrance with separate timing.
</build>

<start>
Show the storyboard in seconds and 3 frames; then build.
</start>
```

## E. Idea or product explainer (10 to 20 s, no voice-over)

```
Make a {15} s motion film explaining {PRODUCT}. No voice-over, no footage.
Style: a paper-colored canvas, marker notes that draw themselves, real physics, giant kinetic type, hard light/dark switches, a new idea every 1.5 to 2 s, a sound on every impact.
Copy: {ONE_LINER}. For {AUDIENCE}. Name what the product learns, never the abstraction.
Rules: no chrome (progress bar, timecode, fps); no animator jargon on screen; no invented results (%, multiples, clients); never use {BANNED_WORDS}.
Craft: colors {…}; fonts {…} (heavy display for the kinetic type, handwriting drawn with stroke-dashoffset); squash/stretch, stagger, overlap, follow-through; one primary move per transition, no generic push/slide/rotate. Every starting state defined at t=0.
Sound: drums drop on the switch to dark and while the ball is airborne, slam back on the type and the logo. SFX: pops, pen scribbles, whooshes, a sub-hit on the logo; master −14 LUFS.
```

## F. Real-time 3D scene (Three.js, 15 to 30 s)

```
<direction>
Build {SUBJECT} as a 3D scene in a single HTML file with three.js. Style: {soft daylight and white space | night with contrast}.
The signature shot is {the pull-back where corridors of cards resolve into the letters of the name, seen from above}. Build everything toward it.
A film camera, not orbit controls: each shot uses one named move (dolly, crane, orbit, push-in, rack focus), eased, and never passes through geometry.
Light and material: key, fill and rim light with soft shadows, an environment map for reflections, fog, physical materials with varied roughness, ACES tone mapping. Nothing with a default material.
Motion: things react to each other (what is hit moves, what is near lights up), with springs or simple physics, never a linear tween.
Banned: default material and lighting, floating text labels, glow on everything, a slowly spinning object as the whole idea, anything that looks like a tech demo.
</direction>

<structure>
Shots of ~3 s: 1 macro with shallow focus and a rack focus; 2 dolly back revealing scale; 3 crane over the whole; 4 one element detaches and comes to the camera with weight; 5 the signature shot; 6 settles on the name/URL.
</structure>

<build>
A single HTML, three.js from a CDN, everything modeled in code. MeshPhysicalMaterial, PMREM with RoomEnvironment, soft shadows, ACES, antialiasing; depth of field only where needed. 60 fps on a laptop. A ?render mode in which every frame is computed from time (seeded randomness, no clock) to capture with --gl in render.mjs. Capture 1 frame per shot and fix whatever is flat, aliased, clipping or illegible.
Gotchas: set a shadow bias (otherwise acne stripes), tight near/far (otherwise far flicker), seed every random (otherwise the render does not match the preview).
</build>

<start>
Describe the signature shot and the shot list in a few lines; then build and deliver the HTML and the MP4.
</start>
```

## G. Product video with research (the most common family: 20 to 60 s)

```
<inputs>
Ask only for what I have not given, with defaults: 3 to 6 real screens of the interface (default: capture them yourself), logo (default: take it from the site), brand colors and font (default: the product's own), a track with a clear beat (default: compose one in code).
</inputs>

<direction>
A {40} s product film for {PRODUCT}. Research first: what it does, who it is for, the real interface and brand. Use what you find; never invent screens, features or numbers.
Pick ONE through-line object from the product itself (cursor, key button, the logo's mark, a data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, becomes the logo on the end card. Name it before the storyboard.
Rebuild the real UI as vector layers so the parts can move on their own; never slide a flat screenshot. A cursor drives every interaction with real clicks and drags; a Screen Studio-style camera.
Brand: its colors and font. One font, one accent used only on the through-line object and the key word, lots of empty space.
Motion rules: springs with a small overshoot; nothing appears from nothing (it grows, unfolds or is revealed by a mask); the camera never sits still (push from 1.0 to 1.04 per scene; each scene starts at the zoom where the last ended); something changes on every beat.
Banned: particles, glow, lens flare, shake, RGB split, crossfade, generic gradient, elastic easing, holds > 0.5 s, anything that looks like a template.
</direction>

<structure>
120 BPM. A timed storyboard first, beat by beat; then build exactly that.
Hook (bar 1): the problem in 3 to 5 words, in big type that the through-line object interrupts.
Middle: 3 to 4 moments of the product doing what it does best; each begins with the through-line object turning into the next UI element and lands one readable idea.
Payoff: the strongest moment on the biggest beat; the through-line object becomes the logo; an end card with the name and a one-line call to action.
</structure>

<build>
This skill's kit, 60 fps, soundtrack by cues, 16:9 and 9:16. One frame per beat before rendering. Match-cut positions measured at runtime. A shape that fills the frame scales past all 4 corners. Text exit and entrance with separate timing. No will-change on what the camera scales.
</build>

<start>
Show what you found, the through-line object and the beat-by-beat storyboard; then build without asking anything else.
</start>
```

## H. Explainer with narration (1 to 3 min)

```
<direction>
A {3} min explainer on {TOPIC} for {AUDIENCE}. Research first and check every fact; never invent numbers or quotes.
The whole explanation is ONE diagram in one continuous space: the camera enters a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before words; the label sits on the thing it names, never in a side legend.
Style: simple diagrams that build as they are explained. Narration in {LANGUAGE/VOICE} with subtitles synced line by line.
Motion rules: one thing moves at a time and the eye always knows where to look; arrows animate in the real direction of the flow; at most 7 words on screen at once, 0.3 s per word.
Banned: walls of text, bullet lists, generic gradient, stock icons, glow, crossfade, anything that looks like a template.
</direction>

<structure>
A timed storyboard first. Hook: the question the viewer already has, asked over the first picture. Middle: 3 to 5 steps; each enters a part of the diagram, shows a concrete example and pulls back as the part locks into place. Payoff: a final pull-back with the full diagram and a one-line summary.
</structure>

<build>
1. Write the narration script line by line, marking what is on screen for each.
2. Generate each line as voice (TTS) and time the animation by each audio's real duration.
3. This skill's kit; a soundtrack quiet under the voice; synced subtitles.
4. Before the final render, export a key frame of each section and check: nothing cramped, overlapping or illegible.
</build>

<gotchas>
Check every number and name against a source. Keep the diagram's layout fixed so zooming in and out never reshuffles it. Text exit and entrance with separate timing.
</gotchas>

<start>
Show the script, the diagram and a timed storyboard; then build without asking anything else.
</start>
```

## I. Silent animated short (30 s to 2 min)

```
<direction>
A {45} s animated short: {STORY or "a story you invent"}. Free style, serving the story, built entirely in code.
Write the story first: the main character wants one thing; three attempts that fail in different and escalating ways; a turn; an ending that lands and a last-second gag after it.
Silent: no dialogue and no text. Sound tells what the picture does not show.
Acting: every character reads in silhouette; every action has anticipation before and follow-through after; squash & stretch on anything soft; the eyes move first and the body follows; key poses held ≥ 6 frames.
Staging: one action per shot, framed to read at once; cut on action, matching the movement across the cut; color shifts with the mood.
Banned: glow, lens flare, generic gradient, stock clip art, everything moving at once.
</direction>

<structure>
A shot list first, one action per shot, with timings; then build exactly that. Shots join through motion and sound, never crossfade.
</structure>

<gotchas>
Feet and hands locked where they touch things (contact never slides). Same character proportions in every shot. Each gag gets a beat of stillness before it happens.
</gotchas>

<start>
Show the story in a few lines and the shot list; then build without asking anything else.
</start>
```

## J. Music visual or lyric video (15 to 60 s)

```
<direction>
{A 30 s music visual: an original track in the style of X at N BPM written in code, with visuals driven by it} OR {A 30 s lyric video for the attached song, with lyrics and animation synced to the voice and the beat}.
Write the track first (drums, sub, melodic line, a real arrangement: intro, build, drop) and keep note and hit times as data; every visual move is born from a sound (kick, snare, wobble). For the user's music: a beat grid with numpy and the time of every sung word (Whisper with timestamps, checked by ear).
Visual: kinetic type that acts out each line; one visual idea that grows with the music; bold geometric shapes and type in two colors, hit by the bass.
Banned: the default list (SKILL, section 11).
</direction>

<structure>
Follow the song's sections: simple verses, the chorus opens up, the biggest moment lands on the biggest musical moment (the drop on a strong beat). Intro, a build that tightens, drop, a short outro.
</structure>

<start>
Show the lyric timing (or the arrangement) and a storyboard; build; watch with sound and fix every word that is early or late.
</start>
```

## K. Cutting recorded video (talking head → Reels/TikTok, 30 to 60 s)

```
<direction>
Cut the raw clip into a fast, fun {60} s edit for TikTok and Reels. Keep the best lines and cut every pause, filler and false start. Word-by-word subtitles (bold white, 1 to 2 words at a time, never covering the face), graphics that illustrate the key points, upbeat music with a license that allows the platform.
Banned: random stock, emoji spam, a zoom punch on every line, subtitles covering the face.
</direction>

<structure>
A hook in the first 2 seconds with the best line, even if it is not the first. One idea at a time. End on a clean line, not a fade.
</structure>

<build>
1. Transcribe with a timestamp per word (whisper) and build the cut list from the text.
2. Cut with ffmpeg at 1080x1920, hiding hard cuts with small zoom changes.
3. Subtitles and graphics in HTML, rendered and composited over the video.
4. Music ducked under the voice, −14 LUFS. Watch at normal speed and fix every cut that clips a word.
</build>

<start>
Ask for the clip and show the cut list with timestamps before editing.
</start>
```
