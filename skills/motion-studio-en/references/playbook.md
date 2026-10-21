# Playbook: what 230 real prompts teach about AI motion design

Source: analysis of 233 videos made with Claude Opus 5.5 and their prompts (a public gallery, Sep/Oct 2026), plus the articles that accompany it. The full prompts are in `gallery/` (start at `gallery/00_INDEX.md`). This file is the distillation: read all of it when the request is a real video (showreel, launch, promo, explainer), not for a small tweak.

## 1. The central lesson

A 26-word sentence ("make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are... go all out") was pasted 33 times. Results ranged from 0 to 17,000 likes, and the median was 5. **A short prompt leaves every decision to chance**: subject, look, timing, what to avoid. Long prompts (over 100 words) had a median of 56 likes against 5 for the short ones. Length is not the goal; each part below exists to take away a decision the model would otherwise make on autopilot.

Consequence for this skill: **never build from a vague request.** Turn the request into a 6-block brief (section 2), decide the open points with good taste, say what you decided and show the storyboard before rendering.

## 2. Anatomy of a champion brief (6 blocks)

The best prompts in the gallery always use this order, almost with these tags:

1. **`<inputs>` (what to ask the user).** A short list of what only they know: product name, logo, one accent color, the exact text, the track. Always with **defaults** ("if I skip something, use X") so the work never stalls. Ask once, at the start.
2. **`<direction>` (concept and style).**
   - **A single concept**, in one line ("ink becomes type becomes architecture", "one shape that never cuts", "the orange dot links every scene"). Without a concept the model makes a parade of effects.
   - **A bridge element** running through every scene (a shape, a dot, a cursor).
   - **A locked look:** 1 font (or 2), at most 3 colors + black and white, 1 accent, a single camera language ("one named move per scene, never two at once, never zoom in and out back to back").
   - **A banned list** (section 3).
3. **`<structure>` (timing).** In **BPM and bars** ("120 BPM, 7 bars, something happens on every beat"), not "dynamic". First bar = hook; one technique per bar, each flowing out of the last; second-to-last = the strongest moment; end = title, with the last frame equal to the first (loop). Describe each scene as a concrete action, with arrows (→).
4. **`<build>` (how to render).** Numbered and specific: one HTML, 1920×1080 at 60 fps, every style computed from time inside `seek(t)` (here: `render(t)`), no CSS transition/timer/state; closed-form springs; subframes blended for motion blur; analyze the music with numpy for the beat grid; each sound placed by its measured peak.
5. **`<gotchas>` (known traps).** E.g. "do not use will-change on anything the camera scales, the text turns blurry"; "text that swaps inside a container that changes shape needs separate enter and exit timing"; "last frame identical to the first, including the cursor's position and speed, or the loop stutters"; "when a shape fills the screen, scale it past all four corners"; "the graph and the dot must follow the same spring function".
6. **`<start>` (the first step).** "Ask for the inputs, show the beat map and 4 stills before building the video." Review before the final render: **render one frame per beat and look**; fix whatever is off the grid, cramped or illegible.

Ready-made templates to fill in: `briefing-templates.md`.

## 3. The banned list (what gives away "made by AI")

Only 16 of the 230 prompts had one, but they include 4 of the 20 most-liked (median 56 likes against 7 for the gallery). Items by frequency: **glows/neon** (7 creators), **"anything that looks like a template"** (7), **particle bursts** (6), **dead time / long holds / frozen frames** (6), **crossfades** (5), **over-elastic easing** (3), **generic gradients** (3), **gratuitous 3D effects** (3), **stock video/UI** (3), **text in the corners** (2: labels and frame markers around the edge, like a HUD with no information), **`Math.random`** (2).

Also common: camera shake, RGB split, lens flare, grid floor, flashing background, shockwave ring.

How to apply in this skill:
- Copy into the brief a list of 5 to 9 items, **always with what to do instead** ("no crossfade: every scene grows out of the previous one"; "no glow: contrast and scale make the highlight").
- Close with the standard: "anything that looks like a template".
- The kit has `M.shake`, `M.grain`, glow, glitch and particles: they are tools, not obligations. Only use them if the video's idea calls for them, and **once**, at the right moment (an impact, not the whole video). The gallery's rule: "motion that is not connected to an element already on screen is decoration".
- Exception: the user asks for a tech/HUD/glitch aesthetic. Then the effect is the idea.

## 4. The video patterns that work best

- **Showreel / "show that you are a motion designer" (78 of 233).** Open with a concept and a name. Every scene is made from the previous one (shapes, text and color transform, no cut or fade). Show range in equal parts: kinetic type, shape morphing, a 2D→3D moment, a data/UI moment, an end title. 120 BPM, soundtrack written in code (a kick on every beat, a riser before the last bar, a hit on every scene change).
- **Launch / product promo (94).** A funnel that repeats: hook in words on the beats → the product appears as living UI (a cursor really types and clicks) → "the drop" (a circle/color floods the screen on the music's beat) → one action per bar (a wall of real clips, a giant number, a carousel, a phone with a panel that becomes the result, stats on hard cuts, a 3-word ticker) → logo → fade. **Use the product's real material** (screens, logo, design tokens from the repository); "never placeholder cards"; do not invent features, numbers or testimonials.
- **One shape that never cuts (12,000 likes).** Button → loader → check → dynamic island → player → slider (stretches when dragged past the maximum) → toggle → liquid tab → chart that draws itself → ⌘K → toast → back to the button. Each state is the same element changing size, radius and color; the content swaps with a short blur. A cursor with real clicks and drags. The tab indicator's two sides on different springs (the front edge stretches). Last frame = first.
- **A keynote-style continuous take.** "Nothing fades, blurs or cuts; objects change shape": text rises from a mask line, icons appear from zero on a spring, bars draw, a black shape floods the frame and contracts into the next scene. Screen Studio-style camera: zooms so each moment fills the frame, and the cursor scales with it.
- **Explainer (27, the weakest: a median of 15 words).** It works with: one visual analogy per concept, the idea said before it is shown, one number or label per scene, a paper + marker palette (giant type, annotations that draw themselves, a hard light/dark switch every 1.5 to 2 s). If it is math, Manim with narration.
- **Typography as architecture** ("BUILD THE FLOOR"): each word gets a physical role (WAIT = lintel, VOICE = support, ROOM = opening, FLOOR = platform) that **is born from the letters themselves**, not from illustrations behind. Exact text, exact order, readable without audio.
- **Voice narration:** a 9-line script with emotion tags used sparingly; several takes and pick one; regenerate only the bad line; shorten pauses > 0.28 s to 0.2 s; **align subtitles by measuring the onset of each segment** (a single Whisper pass is off by up to 0.5 s).
- **Loop:** final state = initial; compare first and last frame.

## 5. Finishing techniques that appear in the best prompts

- **Liquid glass (iOS 26):** blur the background behind the control + bend the scene at the edge like thick glass + a sheen on top + a bright rim + a soft elevation shadow. **Glass disappears on plain white**: put a slow pastel aura behind it.
- **"Apple Intelligence" aura:** a blurred conic gradient rotating through pink, orange, lime, cyan and violet around the input field.
- **A camera that never cuts on a still frame:** each shot enters already moving (exponential ease-out, 12 to 19% of the remaining distance per frame) and exits accelerating or on a blur ramp; the blur follows speed and direction.
- **A living cursor:** turns to where it is going, grows on hover, sinks on click (scale 0.85), a ring on click, click sound.
- **Halftone:** a dot grid whose size responds to an object; it grows past the edges and reveals the final card.
- **Individual letters** for any word transformation ("Reduce Motion" → "Motion"; the dot stays attached to the "i" until it jumps).
- **A film camera in 3D:** one named move per shot (dolly, crane, orbit, push-in, rack focus), always eased, never passing through geometry. Three-point light, environment map, fog, physical materials with varied roughness, ACES tone mapping; nothing with a default material. A **signature shot** designed first, with everything building toward it.
- **Physics that reacts:** what is hit moves, what is near lights up; springs or simple physics, never a linear tween.
- **Real video inside the render:** extract the clips to a 30 fps JPEG sequence with ffmpeg and swap `src` per frame; `seek` waits for the decode. (The kit describes the same path in section 2.)
- **The real product's tokens:** when the video is about a product, first read the design tokens, wordmark and current screenshots from the repository. Prefer the newest over the old. Never invent features.

## 6. Sound and music

- Royalty-free stock music (Mixkit, Pixabay, Pexels) by **BPM and "drop"**: ~120 BPM with a drop and a calm stretch before it. Start the track N beats before the drop.
- **Analyze with numpy:** tempo, beat grid, energy per bar, the drop; calibrate the grid on the real kicks; every cut on a strong beat, every UI "hit" on a beat.
- **Place each effect by its measured peak, not by the start of the file**; effects quiet under the music; loudnorm −14 LUFS (peak −1.5 to −2 dBTP, re-measured after AAC).
- No user music: a soundtrack in code (a kick per beat, a riser, a hit per scene). That is what `sound.py` + `M.cue` already do here.
- Third-party music/effects only CC0 or generated, and log the source.

## 7. Which renderer to use (56 videos named the tool)

| Approach | When | Note |
|---|---|---|
| **HTML/canvas + Playwright + ffmpeg** (this skill's) | the default for everything: explainers, launch, UI, typography | 23 of the 56; of the 10 most-liked videos, 4 name a tool and 3 of them are plain HTML. Nothing to install besides Playwright and ffmpeg. The prompt must state the build method. |
| **Remotion** (React) | the product is already React and real components can be reused | 13; almost only launch videos. A paid license for some companies: warn the user. |
| **HyperFrames** (HeyGen, HTML + attributes, Apache 2.0) | a renderer ready for agents, no React, with GSAP | 10; half are launches. |
| **Three.js** | real 3D (lighting, camera) | 5; capture with the same method, a `?render` mode with time instead of the clock and seeded randomness. |
| **Manim** | explaining math | 1 (258 likes, with free TTS). |

They all do the same underneath: a headless browser loads the animation, goes to the exact time, takes a screenshot and repeats; ffmpeg stitches it. That is why a slow machine neither drops frames nor drifts off the beat. Always **name the tool** in the brief; without it the result changes every time.

Third-party skills that appeared (optional use, tell the user): Cinetic (Leonxlnx/cinetic), product-film (Rieranthony/product-film-skill, Remotion), session-story (HyperFrames), generative-film-skill (buildfastwithai). Details and commands in `gallery/00_INDEX.md`.

## 8. Review checklist before the final render

- Is there **one concept**, stated in one line, and a bridge element?
- Is the banned list in the brief, with the substitute for each item?
- Is the timing in beats/bars, and does something happen on every strong beat?
- Does each scene grow out of the previous one (no crossfade, no dead cut)?
- Do the first and last frame match (loop) when that makes sense?
- Was one frame per beat rendered and looked at (nothing cramped, overlapping, off the grid, illegible)?
- No invented number, testimonial or feature; the user's exact text preserved?
- Do text leaving a scene and text entering one have separate timings (no overlapping letters)?

## 9. The "full version": what changes from the original prompt to the executable prompt

Most original prompts in the gallery are a loose sentence. For 213 of the 233 entries there is also a **full version**, rewritten in the 6-block format of section 2 (51 of them were tested: the video was made with the full version). Each entry in `gallery/*.md` carries both, side by side. **When building a similar video, start from the full version, not the original.** The 63 distinct versions reduce to a few families:

| Family | When | What it adds to the original |
|---|---|---|
| **Showreel** (~75 entries) | "show what you do", portfolio, self-introduction | A concept named in advance; every scene born from the previous one; range in equal slices (type, morph, 2D→3D, data/UI, title); 120 BPM; a soundtrack in code; a loop. Variants: 10, 15, 20, 25 and 30 s. |
| **Product / launch video** (82 entries, the most common) | product, app, site, brand | **Research first** (what it does, who it is for, the real interface and brand) and never invent a screen, feature or number; capture the real screens and logo if the user does not provide them; **one through-line object** from the product itself (cursor, key button, the logo's mark, a data point) that transforms in each scene and becomes the logo on the end card, named before the storyboard; rebuild the real UI as vector layers (never slide a screenshot); a Screen Studio-style camera that **never sits still** (push from 1.0 to 1.04 per scene, each scene starts at the zoom where the last ended); **nothing appears from nothing** (it grows, unfolds or is revealed by a mask); something changes on every beat; hook = the problem in 3 to 5 words; close = name + a one-line call to action. |
| **Explainer** (~25 entries) | explaining a concept, command, news item, article, math | Research and **check every number and name against a source**; the content as **a single diagram in one continuous space** (the camera enters a part and pulls back to show how it fits; labels on the thing they name, never in a side legend); every idea gets **a picture before words**; one thing moves at a time; arrows animate in the direction of the flow; at most 7 words on screen, 0.3 s per word; narration script written first, **each line generated as voice and the animation timed by the real audio duration**; subtitles synced line by line; a timed storyboard first; hook = the question the viewer already has; payoff = a final pull-back with the completed diagram and a one-line summary. Math: Manim. |
| **Animated short / story** (~10 entries) | "a story you invent", a clip, a mini-film | Write the story first: **one clear want, three attempts that fail in different and escalating ways, a turn, an ending that lands and a last-second gag**; silent, no dialogue or text, sound tells half the story; acting: readable silhouette, anticipation and follow-through on every action, squash & stretch on soft things, the eyes move first, key poses held ≥ 6 frames; staging: one action per shot, cut on action, color shifts with the mood; a timed shot list before building. Traps: feet and hands locked where they touch, same proportions in every shot, the gag gets a beat of stillness before it lands. |
| **Music / lyric video** | the creator's own or the user's track | Write the track first (a real arrangement: intro, build, drop) in code and keep note times as data; every visual move comes from a sound (kick, snare, wobble); for the user's music: a beat grid with numpy + the time of every sung word (Whisper with timestamps, checked by ear); simple verses, the chorus opens up, the biggest moment on the biggest beat. |
| **Cutting recorded video** (talking head) | cut a raw clip for Reels/TikTok | Transcribe with word-level timestamps and build the cut list from the text; cut every silence, filler and false start; a hook in the first 2 seconds with the best line; word-by-word subtitles (1 to 2 words, bold white, never covering the face); HTML graphics composited over the video; music licensed for the platform, ducked under the voice, −14 LUFS; end on a clean line, no fade. Banned: random stock, emoji spam, a zoom punch on every line. |
| **Code / 3D / game** (Three.js, games, a film scene) | a 3D model, a game, a site section, a recreated scene | A signature shot designed first; a film camera; three-point light + environment + fog + physical materials + ACES; a deterministic `?render` mode; 60 fps on a laptop; a shot list with one move and one event each. Site section: 5 sections with their own context and layout, scroll-driven. Game: full rules and state, art made in code. |

**Rules that repeat in almost every full version (take them as the default):**
1. Never invent screens, features, numbers, quotes or testimonials. Research, or use what the user gave.
2. `<inputs>` asks only for what is missing and **gives the default** for each item (capture it yourself, take it from the site, compose it in code).
3. **A timed storyboard before the code**, shown to the user, and then "build exactly that" with no further questions.
4. One frame per beat (or one key frame per section) rendered and **looked at** before the final render; fix what is cramped, overlapping, off the beat or illegible.
5. A fixed banned list: particles, glows, lens flare, shake, RGB split, crossfade, generic gradient, elastic easing, holds > 0.5 s, "anything that looks like a template", plus items like (stock, clip art, emoji spam, a wall of text).
6. Text leaving and text entering with **separate timings**; a shape filling the screen scaled **past all four corners**; `will-change` never on something the camera scales; match-cut positions **measured at runtime**, not hard-coded.
7. Delivery = the final MP4 (and the HTML, when asked), with a summary of what was decided.
