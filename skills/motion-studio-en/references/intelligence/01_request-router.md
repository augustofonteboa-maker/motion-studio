# Request router: from any sentence to the right video

Real requests in the gallery (in Portuguese, English, Spanish, French, Chinese, Japanese, Korean) fall into 14 types. Identify the type by the **goal**, not the words. Each row gives: signals, default format, default duration, what to ask (at most once), the template (`../briefing-templates.md`) and the main trap.

Defaults legend: **F** format · **D** duration · **BPM** · **S** sound.

| # | Type | Signals in the request (any language) | Defaults | Template | Main trap |
|---|---|---|---|---|---|
| 1 | **Showreel / "show what you do"** | showreel, portfolio, résumé, "go all out", "show off", "impress me", 全力, 凄い | F 16:9 · D 15 s (10 to 30) · 120 BPM · S track + SFX per beat | A | a parade of effects with no concept: name **one** concept and a bridge |
| 2 | **Launch / promo for a product, app, site, repository** | launch, promo, PV, product video, README hero, "show the features", a site link, a product name | F 16:9 (+9:16) · D 15 to 40 s · 120 BPM | B or G | inventing a screen/feature; a flat screenshot instead of layered UI |
| 3 | **UI motion / "one shape that never cuts"** | UI animation, micro-interactions, Dribbble, component, "a button that becomes" | F 1:1 or 16:9 · D 15 to 30 s · 120 BPM | C | transitions by cut/fade; exaggerated springs |
| 4 | **Kinetic typography / sentence / manifesto / lyric** | kinetic type, animated text, quote, lyrics, speech, poster | F 16:9 or 9:16 · D 5 to 30 s · the music's BPM | D, J | illegible text, no hierarchy, too little reading time |
| 5 | **Logo / sting / opener / ident** | logo reveal, sting, intro, lesson opener, ident | F 16:9 + 9:16 · D 3 to 10 s (+ short version) · S deep impact | SKILL §6 | a short final hold; a redrawn logo (use the real one) |
| 6 | **Explainer / educational / tutorial / news / timeline** | explains, "how it works", history of, summary, tutorial, lesson, recipe, news | F 16:9 · D 30 s to 3 min · optional narration | E or H | a wall of text; unchecked facts; pacing with no pause to read |
| 7 | **Data / chart / results post** | number, KPI, result, +248%, chart, report | F 9:16 or 1:1 · D 6 to 10 s · loop | SKILL §6 | invented numbers; a chart with no hero |
| 8 | **Animated short / story / character** | short film, animation, character, "a story", mascot | F 16:9 or 9:16 · D 30 s to 2 min · silent + sound | I | a script with no want/obstacle; acting with no anticipation |
| 9 | **Music / visualizer / lyric** | music, beat, audio visual, 140 BPM, dubstep, "synced" | F 1:1 or 16:9 · D 15 to 60 s | J | visuals that are not born from the sound; sync by eye instead of measured |
| 10 | **Hype edit / meme / chaotic social / viral** | edit, "goes hard", brain rot, viral, trend, anime edit, crypto hype | F 9:16 · D 8 to 20 s · high BPM, hard cuts | see §Hype below | confusing chaos with mess: cuts **on the beat**, one idea per cut |
| 11 | **3D scene / recreated film / model / tour** | three.js, 3D, plane, data center, painting, "recreate the scene from" | F 16:9 · D 15 to 90 s | F | a default orbit camera, default material, no signature shot |
| 12 | **Game / interactive / animated site** | game, "to play", scroll sections, interactive HTML | HTML with no MP4 (or an MP4 of gameplay) | (outside the core) | promising an MP4 where the request is interactive; warn about the change |
| 13 | **Editing recorded video / subtitles / music on an existing video** | cut the clip, subtitles, add music, vertical version | F 9:16 · D 30 to 60 s | K | cutting a word; subtitles covering a face |
| 14 | **Remix / "make it like" / video reference** | "like this one", "based on this video", "a version with X" | inherits from the original | by type | copying frame by frame; **study** rhythm/timings/fonts and create something of your own |

## How to decide when there is more than one type

- "A showreel **for** my product" = type 2 with type 1's ambition (use B/G, A's rhythm).
- "An explainer **with** music and heavy animation" = type 6; music low under the voice; follow H.
- "A sting **and** a Reels version" = type 5 with 16:9 and 9:16 formats + a short sting.
- In genuine doubt between two types, ask **one** thing: "is this to show your product or your skill?".

## What to ask (and what never to ask)

Ask **only** what you cannot deduce and that changes the result: **(a)** the exact text (if mandatory), **(b)** brand/logo (if it is the user's), **(c)** product/URL (if mentioned without a link), **(d)** own music (only if there is some). Everything else: decide, tell, offer to change.
Never ask: palette (suggest), font (choose), duration (use the type's default), style (propose the concept).
Question format: one message, numbered, with the **default** of each item ("if you do not answer, I use X").

## Type defaults by platform

| Destination | Format | Duration | Note |
|---|---|---|---|
| Reels/TikTok/Shorts | 9:16 1080×1920 | 8 to 30 s | respect `M.safe`; hook in ≤ 1 s; legible with no sound |
| YouTube / site / presentation | 16:9 1920×1080 | 15 to 90 s | room to breathe; title in the first 3 s |
| X / LinkedIn / feed | 16:9 or 1:1 | 15 to 30 s | a good first frame (cover); works with no sound |
| README / landing hero | 16:9, loop | 10 to 20 s | no sound required; last frame = first frame |
| Lesson / course | 16:9 | 5 to 8 s (opener) | series signature + transparent overlay version (`--alpha`) |

## Type 10: hype edit (our own curation)

Requests like "make an edit of X × Y that goes hard" have little information and high expectations. Recipe: 9:16, 10 to 20 s, **high BPM (140 to 170) or a clear drop**; 6 to 12 cuts **all on the beat**; one bridge element (a silhouette, a symbol, giant type); aggressive typography with weight swaps; a zoom punch **only on the strong beat** (once every 2 bars, not on every line); 2 colors + black; impact = cue `big` + a short `M.shake` on the exact frame; end on a 0.5 s frozen frame (the one exception to "no holds"). Intellectual property: use shapes, colors and typography **inspired by** the named universe; **do not reproduce a protected character** or third-party logos the user did not supply; say so in one line.

## Special requests

- **"Parody / make a deliberately terrible showreel"**: it is a real video. Pick 4 to 5 recognizable "beginner mistakes" (system font, WordArt, a PowerPoint transition, text off-center, glow on everything) and **execute each with perfect timing**; the humor comes from the contrast between mistake and execution.
- **"Without using my tools/memory/previous skills"**: ignore earlier preferences only for style; the kit remains the infrastructure (say so in one line).
- **"You may work 10 hours"**: it is not a license to inflate; use the time for **more review cycles**, not more effects.
- **A site/repository link**: read first (design tokens, logo, copy, current screenshots). Prefer the newest. If the logo is raster, vectorize it or ask for the SVG; **never redraw** the real brand.
- **An attached reference video**: extract frames (`ffmpeg -vf fps=2`), measure shot lengths and beats, list fonts/colors/techniques; **create something of your own** with the same sophistication (never copy frame by frame).
