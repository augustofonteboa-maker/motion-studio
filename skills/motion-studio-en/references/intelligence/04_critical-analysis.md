# Critical analysis of the gallery and quality rubric

## 1. What the numbers say (and where they mislead)

Basis: 232 entries (229 with a prompt), 216 creators, Claude Opus 5.5, Sep 23 to Oct 8, 2026.

| Fact | Number | Critical reading |
|---|---|---|
| Median original prompt | **26 words** (half between 13 and 34; max 2,100) | Most creators asked for little and **accepted luck**. It is the main reason quality varies so much. |
| The same 26-word prompt pasted | **33 times** (results from 0 to 17,023 likes, median 5) | A short prompt = a lottery. What separates the top is not "more effects", it is **concept + constraint + method**. |
| Prompts over 100 words | ~20 | Median likes 56 against 5 for the short ones. A small sample, confounded with the author's audience: **take it as a hint, not proof**. |
| Most common duration | **15 s (35%)**, then 30 s and 20 s | 15 s is the "market size". Longer only with narration/structure. |
| Resolution and fps | 1920×1080 in 188 prompts; **60 fps** in 216 | The market works at 60 fps. The kit delivers 30 by default: use `--fps 60` for UI/cursor/camera. |
| BPM | **120 in 164** of 232 | **Careful: inflated by templates.** The default full version fixes 120 BPM. Among prompts written by the creators themselves, other BPMs appear (100, 124, 130, 140). Use 120 as a safe default; **choose by genre** when there is music (`05`). |
| Banned list | in ~190 full versions | **Also inflated by template.** Only 16 originals had their own list, but they are among the best received. |
| Tool named | 56 of 232 (HTML/Playwright 23, Remotion 13, HyperFrames 10, Three.js 5) | 177 did not say: with no explicit method, the result changes with every run. |
| Real material (screens, logo, photos, site) | ~94 mentions | The most detailed prompts demand **real** material and UI rebuilt in layers; "placeholder" shows up as banned in the more careful creators' lists. (No likes data proves the cause: it is a practice consensus, not a measurement.) |

**Beware the template bias.** Many large counts (spring 206, motion blur 207, "storyboard first" 204) come from the **same full version repeated**. The independent signal is in the ~22 long prompts and the ~60 **distinct** full versions (showreel, product with research, explainer, short, music, editing, 3D). That is where the real intelligence is, which is why this skill summarizes them in families.

## 2. What separates strong videos from weak ones

**Strong (patterns that repeat):**
1. **One concept** you can say in one line, with a through-line object (cursor, dot, shape, the logo itself) that crosses the scenes and becomes the logo at the end.
2. **An explicit constraint** (a banned list + "anything that looks like a template") and **a palette/typography constraint**.
3. **Timing measured in beats**, with something changing on every strong beat and the strongest moment in the second-to-last bar.
4. **Real material** from the product/user and **UI rebuilt in layers**.
5. **An explicit render method** (a pure function of time, subframes, a soundtrack by cues) and **review** (one frame per beat).
6. **A good first second** and an **intentional last frame** (a loop or a clean card).
7. **Transitions by object**, not by effect (match cut, a shape that floods).

**Weak (patterns that repeat):**
1. **A parade of effects** with no idea (a generic "showreel"): glows, particles, RGB split, everything at once.
2. **A flat screen** with a zoom in place of living UI.
3. **Too much text** on screen, or a side legend; an orphan word; low contrast.
4. **Timing by impression**, cuts off the beat, a dead hold of 1 to 2 s.
5. **Invention:** numbers, clients, features that do not exist (the most dangerous mistake: it breaks trust).
6. **Inconsistency:** font/weight/color changing, a character's proportions varying, a cursor that changes size.
7. **Crossfade as the solution to everything** and glow "to look expensive".
8. **No review:** overlapping text, a cropped element, a loop that stutters.

## 3. The "sameness" trap

The 232 videos look alike: a warm light or dark background, Inter/Geist, a cursor, UI, big typography, 120 BPM, orange or green as the accent. It is the result of **everyone using the same prompt/template**. For this skill to be the best, **do not imitate the average**:
- When the user has not defined a style, **choose a specific visual concept** (e.g. "shadow theatre", "risograph", "oscilloscope", "paper cut-out", "pixel", "folding map") instead of the default white "keynote".
- Vary **one axis** from the default: font (serif/condensed), accent color (outside orange/blue), structure (no cursor), camera (vertical instead of horizontal).
- The "keynote" is still right for a **software product**; it is wrong for a fashion, culinary, culture or art brand.

## 4. Quality rubric (100 points). Score before delivering

Look at the frames per beat (and the video, if possible). Score each item; **fix anything below 80% of its maximum**. Delivery target: **≥ 85**. Below 70 do not deliver: redo the weak part.

| Criterion | Points | Verification question |
|---|---|---|
| **Concept and bridge** | 12 | Can it be said in one line? Does the through-line object appear in almost every scene and close at the end? |
| **Hook and ending** | 10 | Are the first 1.5 s already good? Is the last frame clean/a loop/a single CTA? |
| **Rhythm and beat** | 12 | Does something change on every strong beat? Cuts on the grid? Second-to-last bar = climax? No dead time? |
| **Hierarchy and composition** | 12 | One focus per frame? Negative space? Grid alignment? Nothing touching the edge? Safe areas (9:16)? |
| **Typography and legibility** | 10 | Minimum sizes; contrast ≥ 4.5:1; reading time (0.3 s + 0.25 s/word); no orphan; correct language? |
| **Motion (easing and physics)** | 12 | Entrances decelerate, exits accelerate; 60 to 80% overlap; anticipation/follow-through; no linear on position; no unjustified bounce? |
| **Consistent art direction** | 8 | The same font, palette and icon stroke throughout? The user's real material? |
| **Transitions by object** | 6 | No crossfade; match cuts/a shape that floods? Hard cuts only on a beat? |
| **Sound** | 8 | Impacts exactly on the frames; one sound per element; the riser ends on the hit; −14 LUFS; no clipping? |
| **Honesty and accuracy** | 6 | No invented data; text identical to the user's; facts checked? |
| **Technical finish** | 4 | `--check` identical; smooth blur on fast moves; BT.709; both aspect ratios? |

**Automatic penalties (each: −10 and a mandatory fix):** an invented number/feature; cropped or overlapping text; a loop that stutters; audio off the beat at more than 2 points; a crossfade/glow/particle with no reason; a video that asks for 9:16 and was only cropped from 16:9.

## 5. Self-critique protocol (actually run it)

1. **A contact sheet** with 1 frame per beat (and the 3 fastest moments extracted from the final MP4).
2. **Read as a cold viewer:** "in 2 s do I understand what it is about? in 15 s do I remember one thing?".
3. **The mute test:** does the message work with no sound? (social feed).
4. **The single-frame test:** if you print the climax frame, does it stand on its own?
5. **Hunt the 8 weaknesses** (the list in section 2): mark the ones that appear.
6. **Score** with the rubric, list the 3 biggest losses, **fix the 3**, render only the stretch (`--from/--to`), recheck.
7. **Deliver** saying what you verified and what you could not verify (audio, phone, third-party players).

## 6. Honest limits of the kit (so you do not promise what does not exist)

- The kit renders **2D HTML/SVG/Canvas** and WebGL/Three.js with `--gl`. It does **not** do Houdini-level fluid simulation, 3D rigging, professional compositing of recorded video, or studio-quality synthetic voice.
- **Voice/narration:** the kit **does not generate voice**; use an external TTS tool (e.g. `edge-tts`, the system voice, ElevenLabs with the user's key) and **time the animation by each line's real duration**. Synced **subtitles** need word-level timestamps (Whisper) and a check by ear.
- **The user's music:** `sound.py` synthesizes a track from cues; aligning to an existing track requires **analyzing the track** (numpy: beat grid, energy per bar, drop), an extra step outside the kit, and placing each hit by its measured peak.
- **Interactive games and scroll sites:** they deliver HTML, not MP4; warn the user.
- **Proprietary fonts and raster logos:** ask for the file or use an equivalent and say which; a raster logo → vectorize (trace) keeping fidelity, or ask for the SVG.
- **Rights:** prompts, videos and brands belong to their creators; the skill studies structure and technique, it does not reproduce protected work.
