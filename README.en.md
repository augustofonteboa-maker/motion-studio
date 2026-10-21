# motion-studio

[Português](README.md) · **English** · [Español](README.es.md)

A **Claude skill for motion design**. Ask for a logo sting, an animated logo, a transition, a lesson opener, a showreel, a launch video or an animated post, and Claude builds the animation in code (HTML, SVG and Canvas) and delivers the finished video as MP4 in **16:9 and 9:16**, with motion blur and a synced soundtrack.

![Preview of the test showreel made by the skill](docs/demo.gif)

Test videos made from scratch by the skill: [16:9](docs/Demo_MotionStudio_16x9_1920x1080.mp4) · [9:16](docs/Demo_MotionStudio_9x16_1080x1920.mp4)

## What the skill can do

- **Kinetic typography:** text rising from inside a mask, letter cascade, decoding, typing, counters, tickers
- **Logo:** grid construction, particles forming the mark, assembly by parts, morph, lockup with the name, sweeping shine
- **Transitions:** layered iris, zoom through a shape, whip pan with directional blur, blinds, match cut, glitch
- **Product UI:** arc cursor with click, a button that becomes a loader and then a card, prompt flow, phone mockup
- **Data, particles, camera and character:** growing charts, flow field, parallax, impact shake, a ball with squash & stretch
- **Neutral art direction:** uses the client's brand or one of 12 presets (editorial, night tech, luxury, brutalist, corporate and more)
- **Studio finishing:** adaptive blur (up to 12 samples on fast moves), BT.709 color tagging, loudness at −14 LUFS, transparent versions (ProRes 4444, WebM and green background)
- **Sound:** a soundtrack synthesized from the animation's events, in 6 moods (grave, epic, tech, clean, ambient, pop)
- **Champion brief:** a vague request becomes a 6-block brief (a one-line concept, a bridge element, a locked look, a banned list, timing in BPM, build and review) before any code
- **Anti-"AI look":** a banned list learned from 230 real prompts (glow, particles with no origin, crossfade, dead time, corner text...), each item with what to do instead
- **Reference library:** a playbook on what the 230 best prompts have in common, 11 briefing templates (showreel, launch, one shape that never cuts, typography, explainer, 3D, product with research, narrated explainer, silent short, music/lyric video, talking-head edit) and the full gallery of prompts by category, each with the creator's original prompt and the structured full version, in `skills/motion-studio-en/references/`

## Install in Claude (app or web)

1. **Download the skill file:** open [`motion-studio-en.zip`](motion-studio-en.zip) in this repository and click the download button ("Download raw file"). Do not unzip it.
2. **Turn on code execution:** in Claude, go to **Settings › Capabilities** and enable **Code execution and file creation**.
3. **Upload the skill:** go to **Customize › Skills**, click **+**, then **+ Create skill** and choose **Upload a skill**. Select `motion-studio-en.zip`.
4. **Enable it:** check that the toggle next to *motion-studio-en* is on in the skills list.
5. **Use it:** open a conversation and ask, for example:
   - *"Make an 8-second sting for my client's brand, a dental clinic, with the attached logo."*
   - *"Create a 1-second transition for my course lessons, with a transparent background."*
   - *"Animate this result: +248% reach in 30 days, for Reels."*

Claude recognizes the request and loads the skill by itself. On Team or Enterprise accounts, an administrator must allow skills and code execution for the organization.

## Install in Claude Code

Inside Claude Code, run:

```text
/plugin marketplace add augustofonteboa-maker/motion-studio
/plugin install motion-studio-en@motion-studio
```

Or copy the skill folder manually:

```bash
git clone https://github.com/augustofonteboa-maker/motion-studio.git
mkdir -p ~/.claude/skills
cp -r motion-studio/skills/motion-studio-en ~/.claude/skills/
```

## What must be installed

In Claude (app/web) the cloud environment already has almost everything. On your computer, with Claude Code:

- Node 18 or newer
- Playwright with Chromium: `npm i -g playwright && npx playwright install chromium`
- ffmpeg (Mac: `brew install ffmpeg`)
- Python 3 with numpy and scipy: `pip3 install numpy scipy`

## What is in the repository

```text
motion-studio-en.zip              the skill packaged to upload to Claude
skills/motion-studio-en/
  SKILL.md                        the skill's instructions (workflow, art direction, techniques, QA)
  kit/                            animation runtime, renderer, soundtrack, fonts and base scene
  examples/demo-reel.html         the complete test showreel
  references/playbook-prompt-motion.md   what 230 real prompts teach (anatomy, banned list, renderers)
  references/briefing-templates.md       11 ready briefing templates (A to K)
  references/gallery/                    230 real prompts by category (start at 00_INDEX.md)
.claude-plugin/marketplace.json   install through Claude Code
docs/                             previews and test videos
```

The same skill is also available in Portuguese (`skills/motion-studio`) and Spanish (`skills/motion-studio-es`). The skill answers the user in the user's own language.

## Credits

Created by [Augusto Fonte](https://www.instagram.com/_augustofonte/) with Claude. MIT license: you may use, adapt and share it, keeping the license notice.

### Reference library credits

The prompts in `references/gallery/` come from the [Prompt Motion](https://www.prompt-motion.com/) gallery (curated by [@p4nthera_](https://x.com/p4nthera_)) and belong to the creators named in each entry. They are here as study material for the skill; the playbook and the templates are original text.
