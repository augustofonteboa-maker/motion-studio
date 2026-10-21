# Skill intelligence: the protocol for any request

This folder is the skill's critical memory: what 232 real videos made in Claude (and each one's prompt) teach, already filtered, compared and turned into decisions. **Read this file whenever the request is a real video.** The others are consulted on demand.

| File | What it is for |
|---|---|
| `01_request-router.md` | Find **which kind of video** the user wants, even with a vague request, slang, another language or a very detailed brief. Defaults per type. |
| `02_scene-catalog.md` | 60 scene/moment patterns with a recipe in the kit, when to use and the common mistake. |
| `03_niches-and-art-direction.md` | Art direction by segment (fintech, music, AI, dev tool, food, education, game, hype edit...). |
| `04_critical-analysis.md` | What the data says **and where it misleads**; traps; a **100-point rubric** to self-assess before delivering. |
| `05_sound-and-rhythm.md` | BPM math, music structure, SFX, voice, subtitles, what the kit does and what needs an extra step. |
| `06_idea-bank.md` | 120 one-line concepts by category, for when the request is "surprise me". |
| `../playbook.md`, `../briefing-templates.md`, `../gallery/` | The summary of 230 prompts, 11 templates and the full prompts. |

## The protocol (9 steps, in this order)

1. **Classify** the request with the router (`01`). One request = one main type (sometimes two: "showreel + product").
2. **Measure the specification.** Count what the user already decided: topic, text, brand, duration, format, music, style. Three levels:
   - **Vague** ("make an awesome video", "go all out"): you decide **everything**, boldly and coherently; show the concept + beat map + 3 frames and **ask only if text or brand is missing and cannot be deduced**.
   - **Medium** (topic + duration or brand): complete the rest with the type's defaults; ask **once**, at most 3 items.
   - **Detailed** (storyboard, palette, exact text, timings): **the request rules**. Do not "improve" the user's idea; execute rigorously, fill gaps with defaults and flag only real risks (e.g. text too long for the time).
3. **Research before inventing.** A brand/product named, a site, a repository, attached files: read them first (tokens, logo, real screens, copy). With no internet/file access: say what you assumed and ask only for the essentials. **Never invent a screen, feature, number, client or testimonial.**
4. **Write the concept in one line** and choose the **bridge element**. If you cannot say it in one line, the video will become a parade of effects.
5. **Choose the art direction** (`03`): the user's brand > niche > the SKILL preset (section 3). Lock: 1 to 2 fonts, ≤ 3 colors + black/white, 1 accent, 1 camera language.
6. **Build the beat map** in BPM/bars (`05`) with the catalog's patterns (`02`): hook (≤ 1.5 s), 3 to 5 visual ideas, the strongest moment in the second-to-last bar, ending. **Fewer ideas, better made.** Reference: ~4 visual ideas in 15 s.
7. **Build with the kit** (SKILL, sections 1 to 8): a single scene, pure `render(t)`, blur, cues.
8. **Self-critique with the rubric** (`04`): look at the frames per beat, score, **fix everything below 80** before showing. If a weak point remains after the fix, say which and why.
9. **Deliver** in 2 to 4 lines: the concept, the decisions you made, what the user can adjust. Offer the vertical/short/no-sound version when it makes sense.

## Rules that apply to any request

- **Language:** answer in the user's language; the video's text follows the request's/brand's language (a request in Japanese, a video in Japanese, unless told otherwise). Check accents, characters and a font that covers the alphabet (CJK: Noto Sans/Serif JP/SC/KR via `fonts.mjs`).
- **"Do your best / impress me / go all out / destroy X":** it is a vague request of **high ambition**, not of too many effects. Ambition = one strong concept, clean execution, restraint. The opposite of "more stuff".
- **Contradictory or parody requests** ("a deliberately terrible showreel"): obey the intent (it is a real video, with timing and joke intent: the mistake has to be **well made**).
- **A request outside what the kit does well** (interactive game, complex 3D, recorded-video editing, voice in another language, Manim): state the path (`playbook.md`, section 7), the extra tool and what changes; do not force 2D onto something that needs 3D or deliver "almost".
- **The user's material beats the gallery.** The gallery inspires structure and ideas; the user's brand, text, tone and constraints are law.
- **Scope and time:** a 15 s video is the market default (35% of prompts); 30 s for a product with explanation; 60 s+ only with narration/story structure. Do not stretch to impress.
- **Format:** 1920×1080 at 60 fps is the gallery default (the kit delivers 30 fps by default; use `--fps 60` for fluid UI, a cursor or fast camera). 9:16 is not "cropping" 16:9: **recompose** (`M.pick`).
- **Iteration:** the first render is rarely the best. Prefer 2 short cycles (contact sheet → fix) to a blind final render.
- **Honesty:** say what was not verified (e.g. "I did not listen to the audio", "I did not test on a phone"). Do not promise a "studio" result without having looked at the frames.
