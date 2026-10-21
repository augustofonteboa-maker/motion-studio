# Niches and art direction

Use when the user brings no visual identity or only the segment. The hierarchy is always: **the user's brand > niche > the SKILL preset (section 3)**. Each niche below gives tone, base palette (adjust to the product), typography, motion personality, imagery/material, recommended structure and what to avoid. The examples come from real videos in the gallery.

## Product and technology

| Niche | Tone and base palette | Typography | Motion | Material/UI | Avoid |
|---|---|---|---|---|---|
| **Premium fintech / legal / accounting** (e.g. a German financial product) | dark metal + warm gold as a rare accent (`#0C0F1A`, `#E8B84B`, text `#F6F4EB`); "silence and precision" | geometric sans (Plus Jakarta/Inter) + mono for numbers | slow, magnetic, precise snaps; no bounce; subtle depth | **real UI rebuilt**, a chart that draws, a receipt that snaps into the booking | cyberpunk, neon, "AI purple", rainbow, a flood of yellow |
| **Music / streaming app** | a near-black rounded stage over an atmospheric green background; brand green only on controls | one clean sans (Geist/Inter) | fast and compact, lists with stagger, a cover that grows and slides | original covers (art generated in code), an anchored player bar | giant presentation titles; outside captions; watermarks |
| **AI product / assistant / prompt box** | "keynote": soft white, light blue, glass (`#FDFDFB`, `#2F6BFF`, `#3CC8F0`, mint) | Inter 400 to 700 | the camera never rests on a still frame; a cursor that turns, grows, clicks | menu bar, a glass prompt box, an answer that scrolls | purple/violet/magenta/orange (cliché); glow on UI text |
| **Dev tool / open source (README hero)** | light or neutral dark + 1 accent; terminal and code as the protagonist | mono for code, sans for the rest | cursor, typing, instant result; loop | real terminal, diff, repository icons | decoration with no information |
| **B2B SaaS / dashboard** | corporate trust (preset 8) or light with the brand accent | Manrope/Inter | bento, counting numbers, cards by distance | real screens, client logos **only if supplied** | invented testimonials and numbers |
| **Crypto / DeFi / trading product** | dark with 1 cool accent; terminal | mono + grotesque | windows that appear, zoom between scales (dot → desktop → dot in space → mobile) | coherent charts and order book | financial promises ("returns", "guaranteed") the user did not supply |
| **Referral / growth / milestone ("1 million visitors")** | contained festive: 1 vivid color + black | heavy display | a hero number that counts, a short loop | the user's real metric | generic confetti and particles |

## Content and education

| Niche | Tone | Typography | Motion | Material | Avoid |
|---|---|---|---|---|---|
| **Technical/science explainer** | paper or whiteboard; marker (black + 1 to 2 colors) | heavy display for terms, handwriting (stroke) for notes | **one continuous diagram**, camera enters/pulls back, arrows in the direction of flow | simple diagrams that build up | bullet lists, walls of text, side legends |
| **History / timeline / news** | sober editorial, map/timeline, one color per era | serif + grotesque | a marker that slides; one event at a time | simple icons; photos **only if licensed** | unchecked dates and facts; invented quotes |
| **Math (Manim)** | dark background, clean geometric objects | LaTeX/Computer Modern | continuous object transformation | charts, vectors | swapping the tool without warning (see renderers) |
| **Recipe / "from empty glass to done"** | clean photography in motion, soft background | clean sans | **one ingredient per bar**, the glass always in the same place, the camera closing in at the end | liquid, a rising level, the measure in clear type beside it | a measure the viewer must pause to read |
| **Course / lesson / tool tutorial** | the course brand; a series opener | display + mono | context → kinetic title → signature | a real screen of the tool | too long (≤ 8 s opener) |

## Brand and studio

| Niche | Tone | Motion |
|---|---|---|
| **Studio / agency / branding** | portfolio: 2 to 3 strong techniques per video, one signature color; "risograph", "oscilloscope" and the like are **styles** that work as a whole concept | a showreel (A) with the studio's identity as the bridge element |
| **Luxury / fashion / cosmetics** | warm monochrome + matte gold (preset 4); italic serif + light sans with wide tracking | slow (0.9 to 1.6 s), sweeping shine, no bounce |
| **Brand anniversary / milestone** | "20 years": a giant number as the hero, a timeline in bars | a counting number + period marks on hard cuts |
| **Health / wellness** | soft greens and blues, lots of empty space, a calm voice | in-out sine, breathing (`M.drift`), no hard cuts |
| **Sport / energy** | preset 9 (black, lime, orange) | skew, speed lines, whip pan, impact frame, short cuts |
| **Kids / playful** | preset 12 | squash & stretch, bounce allowed, breathing characters |

## Culture, narrative and game

| Niche | Direction |
|---|---|
| **A narrative short / "a story you invent"** | Write the story first: one want, three escalating failures, a turn, an ending + a gag. Silent; sound tells half. A style chosen **in service of the story** (shadow theatre, paper cut-out, clay, pixel, a symmetric "Grand Budapest"). |
| **A recreated 3D scene (film/painting)** | A signature shot first; a film camera; three-point light + environment + fog + ACES; physical materials; a discreet text only if the request asks (e.g. "just breathe"). Do not reproduce a protected character; see type 10. |
| **Pixel-art / interactive game** | Outside the kit's core (interactive HTML). If it is a game video, pixel art with an 8 to 12 color palette, a fixed grid, animation "on twos" (`M.step(t,12)`). |
| **Hype edit / anime / crypto** | Router type 10: cuts on the beat, aggressive typography, 2 tones + black. |
| **Local culture (e.g. festival, holiday)** | Research authentic elements before designing (colors, symbols, era); avoid stereotype; pixel/illustration with the tradition's palette. |

## Art direction golden rules (extracted from the gallery)

1. **One main font.** Geist and Inter are the only fonts named with any frequency (58 and 55 prompts, almost all by inheriting the same template; only 7 and 4 of the originals chose them), and most did not name a font at all. They are the "safe default" for **software products**; **differentiate** (italic serif, condensed display, mono) when the goal is to look authored.
2. **One accent color with a function** (used only on the through-line object and the key word). More colors only when the concept calls for them.
3. **Real material beats generic illustration.** Screens, logo, photos, tokens from the user's product; art generated in code (covers, icons) only when there is no material and **marked as an example**.
4. **Negative space.** "Every scene breathes." Text takes up at most ~35% of the frame.
5. **Never approach a third-party brand's style** to the point of confusion: capture the philosophy (restraint, precision), not frame by frame.
6. **Fixed brand color = tokens.** `bg, surface, ink, muted, accent, accent2`; contrast ≥ 4.5:1 (`M.contrast`).
7. **Icons with the same stroke** (thickness, corners) throughout the video; stock-looking icons are an AI tell.
8. **True text.** What is on screen comes from the user or the product; no lorem, no generic marketing ("revolutionize your business").
