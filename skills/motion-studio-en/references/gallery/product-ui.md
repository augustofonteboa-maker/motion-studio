# Gallery: Product UI (100 prompts with this as the main tag)

Real prompts from creators, all made with Claude Opus 5.5, from most detailed to shortest. Each entry carries the creator's **original prompt** and, for most, the structured **full version** (direction, structure by beat, build, gotchas and first step): that is the one that can be executed end to end. Each prompt belongs to the creator named: use it as a **reference for structure and ideas** and adapt it to the user's brief. What the best ones have in common is in `../playbook-prompt-motion.md`.

### Taxtello bookkeeping app film
`daniel-haida-8691d4` · @daniel_haida · 2026-09-27 · Remotion · A few rounds · 2100 words · tags: Product UI, Charts
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
You are the senior motion designer, product designer and Remotion engineer for Taxtello.

Your task is to create a genuinely premium, Apple-level product film for Taxtello.

This is NOT a generic SaaS explainer.
This is NOT a feature walkthrough.
This is NOT a startup template animation.

I want a maximum 15-second brand/product showreel that makes Taxtello look like a mature, expensive, beautifully designed financial product.

Think:

Apple product launch film
× premium fintech
× editorial motion design
× restrained Stripe-like product presentation
× Taxtello's own visual identity

The desired reaction is:

“Wait, this is a German bookkeeping app?”

The film should feel expensive.

────────────────────────────────────
REPO / SOURCE OF TRUTH
────────────────────────────────────

First inspect the real repositories before designing anything.

Main product:
  /taxtello/main

Existing Remotion project:
  /taxtello/beta-motion

Important real brand sources:

  /taxtello/main/public/css/app/_00-tokens.css
  /taxtello/main/docs/design/TOKENS.md
  /taxtello/main/public/taxtello-wordmark.png
  /taxtello/main/public/icons.svg

Existing current product screenshots can be found under:

  /taxtello/main/artifacts/smoke-ui-smoke/

Prefer the newest valid screenshots/current source over stale artifacts.

There is already an existing 24-second Remotion hero animation in
/taxtello/beta-motion.

DO NOT replace it.
DO NOT regress it.
DO NOT force its current AI-connections storyline into this new film.

Create a new independent composition for this task, e.g.

  TaxtelloShowreel15

You may reuse good infrastructure, fonts, rendering utilities, motion primitives,
easing curves, asset loading and QA infrastructure from beta-motion where useful.

But creatively this should be a new film.

Before implementation, inspect the actual Taxtello UI and understand the product.

Do not invent functionality that does not exist.

────────────────────────────────────
REAL TAXTELLO VISUAL LANGUAGE
────────────────────────────────────

Use the real design system.

Core palette:

Background:
  #0c0f1a

Elevated surfaces:
  #111525
  #131722
  #1a2032

Primary brand gold:
  #e8b84b

Gold highlight:
  #f5d07a

Gold depth:
  #9b6d18

Primary text:
  #e8eaf2

Strong warm white:
  #f6f4eb

Secondary text:
  #8b93b5

Positive:
  #34d399

Negative/error only where semantically necessary:
  #f87171

Typography:
  Plus Jakarta Sans

Numbers / financial values where appropriate:
  JetBrains Mono

Use the actual Taxtello wordmark and/or Taxtello mark.
Do not redraw or approximate the logo.

Taxtello's gold should feel like a precious accent, not a yellow UI flood.

Think:
dark metal
warm gold
glass
ink
precision
quiet confidence

NOT:
cyberpunk
crypto
neon
gaming
generic AI purple
rainbow gradients

────────────────────────────────────
CORE CREATIVE RULES
────────────────────────────────────

Follow these rules ruthlessly:

1. ONE SHOT = ONE IDEA.

2. Every scene needs room to breathe.

3. The product UI is the hero.

4. Do not plaster explanatory copy everywhere.

5. Do not use hard cuts unless there is a deliberate reason.

6. Prefer object-driven transitions:
   a card becomes the next card,
   a chart line becomes a connector,
   a receipt becomes a booking,
   a number becomes another interface element,
   the camera moves through the product.

7. Use premium easing.
   No linear movement.

8. Motion should overlap naturally.
   Elements should not all start and stop at exactly the same frame.

9. Use depth sparingly:
   perspective,
   soft parallax,
   scale,
   foreground/background separation,
   controlled depth of field if achievable.

10. NO effect exists simply because it looks cool.

11. No particle spam.

12. No fake glassmorphism everywhere.

13. No excessive blur.

14. No pointless 3D spinning cards.

15. No constant zooming.

16. No 20 different animation styles.

17. No bouncing UI.

18. No giant marketing paragraph.

19. Do not imitate a particular Apple commercial shot-for-shot.
    Capture the philosophy and production quality instead.

The visual confidence should come from restraint.

────────────────────────────────────
FORMAT
────────────────────────────────────

Primary master:

1920 × 1080
60 fps
16:9
H.264
maximum duration: 15.0 seconds

Target runtime:
approximately 14.0–15.0 seconds.

It must work as a social-media product reveal even without sound.

If practical AFTER the master is finished, also create a deliberately recomposed
vertical/social variant.

Do not merely crop the desktop composition.

But the desktop master is the priority.

────────────────────────────────────
STORY / EMOTIONAL ARC
────────────────────────────────────

Do not make this a list of five features.

It should feel like one continuous thought:

CHAOS → CONTROL → CLARITY → TAXTELLO

The first 1.5 seconds must already look premium.

The first meaningful product moment should happen by ~2 seconds.

No five-second logo intro.

Possible narrative direction:

“Everything about your business, finally in one place.”

But SHOW this instead of explaining it.

I want approximately four visual ideas across the whole film.

Use the strongest REAL Taxtello surfaces you find in the repository.

Strong candidates include:

• Finanzcockpit / Dashboard
• Rechnungen
• Belege
• Bank / matching
• Steuergesundheit / tax overview

You do NOT need to show all of them.

Choose the visually strongest combination.

────────────────────────────────────
SUGGESTED 15-SECOND STORYBOARD
────────────────────────────────────

Treat this as a strong starting point, not a rigid template.

0.00 – 1.20

BLACK / NAVY.

A tiny warm-gold glint appears.

The glint elegantly reveals either the Taxtello mark or a fragment of the
wordmark.

No generic logo fade.

Think machined precision.

The camera moves through or past the mark and the UI begins to emerge from it.

Very little or no copy.

─────────────────

1.20 – 4.40

FINANCIAL CONTROL.

Reveal the actual Taxtello Cockpit as a dimensional product surface.

Not just a screenshot placed on screen.

Reconstruct/crop/layer it so individual interface regions can animate.

The hero financial number resolves crisply.
The chart draws in.
Supporting metrics settle slightly later.

Use subtle stagger.

A single line of copy may appear, for example:

  “Alles im Blick.”

or another equally short German phrase if you find something more fitting.

Maximum ~3–4 words.

The interface must remain recognizable as the real product.

─────────────────

4.40 – 7.50

DOCUMENT / BOOKKEEPING TRANSFORMATION.

Use a visual object from the previous scene as the transition.

Example:

A gold chart point expands into the corner of a receipt/card.
The camera follows it.
A receipt/document enters.
Taxtello identifies or organizes it.
The document snaps elegantly into its corresponding booking / financial record.

Use magnetic alignment and precision.

No cheesy scanner laser.

No floating paper tornado.

Possible micro-copy:

  “Belege. Erledigt.”

Only if it improves the scene.

─────────────────

7.50 – 10.70

MONEY / INVOICES.

Morph or transition naturally into the real Rechnungen interface.

Use one strong moment:

an invoice status changes,
a payment resolves,
an amount moves into place,
or the overview assembles itself.

Numbers should feel tactile and precise.

Use JetBrains Mono where this matches the actual product.

Gold highlights the active state.

Green is used only for a genuinely positive semantic state.

Potential copy:

  “Geld. Im Griff.”

Again: optional and extremely short.

─────────────────

10.70 – 12.80

TAX / CLARITY.

Transition into the real Taxtello tax-health / financial guidance surface.

Do not claim that Taxtello magically guarantees correct taxes.

Communicate visibility and control.

Example:

multiple noisy signals collapse into one calm, structured tax overview.

Potential copy:

  “Steuern im Blick.”

This scene should feel calmer than the previous scene.

The rhythm briefly slows.

─────────────────

12.80 – 15.00

BRAND PAYOFF.

Pull the camera outward.

The UI compresses or folds into one beautiful Taxtello product object / surface.

Darkness returns around it.

The gold Taxtello wordmark resolves.

One short brand line underneath.

Explore strong final lines such as:

  “Dein Business. Klar.”

  “Buchhaltung. Unter Kontrolle.”

  “Einfach mehr Überblick.”

  “Alles fürs Business. An einem Ort.”

Choose based on the actual product positioning you find in the repo.

Do not use a line simply because I suggested it.

The final frame must have enough stillness to register.

End confidently.

No giant bouncing CTA.

────────────────────────────────────
TRANSITIONS
────────────────────────────────────

This is one of the most important parts.

I want transitions that make the viewer think:

“Of course the next scene came from that.”

Good:

chart line → document edge
gold pill → invoice button
financial number → amount in invoice
card edge → next surface
camera push through interface element
shared geometry
mask reveal using actual product shapes

Bad:

crossfade
random wipe
spin transition
glitch
whip-pan every two seconds
generic SaaS slide-left
zoom-blur spam

Direct cuts are allowed only when a deliberate rhythmic impact benefits the film.

────────────────────────────────────
MOTION
────────────────────────────────────

Motion needs weight.

Use curves comparable to:

cubic-bezier(0.16, 1, 0.3, 1)

where appropriate.

Different elements should have subtly different arrival times.

Prefer:

anticipation
overshoot below ~2%
settling
motion continuation
shared velocity between scenes

Avoid cartoon springiness.

Camera movement should feel like a high-end macro product shoot.

Imagine we are filming a physical premium object even though it is software.

────────────────────────────────────
LIGHTING / MATERIAL
────────────────────────────────────

Use extremely subtle environmental lighting.

Possible treatments:

• soft gold rim lighting
• dark navy falloff
• faint ambient bloom
• soft specular highlight passing across a surface
• restrained vignette
• subtle grain if it materially helps

Keep the interface crisp.

Do NOT blur the product just to look cinematic.

No fake glossy reflections that destroy legibility.

────────────────────────────────────
TYPOGRAPHY
────────────────────────────────────

Use very little copy.

No sentence should compete with the product.

Headlines should generally fit on one line.

Use Plus Jakarta Sans.

Strong typography may occasionally scale very large and become a transition
device itself.

Avoid generic motion-graphics behavior where every word animates independently.

Typography should move as designed objects.

────────────────────────────────────
SOUND / RHYTHM
────────────────────────────────────

Design the motion as if it were cut to approximately 115–120 BPM:
premium, kinetic, sophisticated, not frantic.

Important moments should land musically.

Suggested sound language:

• low soft impact for major reveal
• restrained tactile UI clicks
• subtle metallic/glass tonal tick
• soft low-frequency movement during camera transitions
• elegant resolved tone at the logo payoff

Avoid:

• huge cinematic trailer boom
• EDM risers
• loud whooshes everywhere
• stock “tech interface” sounds
• rap beat
• aggressive bass

If there is no legally safe music/audio asset in the project, DO NOT pull
copyrighted audio from the internet.

Deliver the visual master without copyrighted music and create a concise cue
sheet describing where music/SFX should hit.

If suitable safe/local audio exists, use it.

────────────────────────────────────
REAL PRODUCT ONLY
────────────────────────────────────

This is critical.

Inspect current main.

Do not invent screens.

Do not invent metrics that imply real customer data.

Use clearly synthetic/demo-safe values if required.

Do not accidentally expose any personal, test-user or production information.

Reuse the visual structure of the actual Taxtello UI.

If a screen needs to be motion-separated, recreate it faithfully in React from
the real design system instead of simply scaling a giant screenshot.

The result should still look unmistakably like Taxtello.

────────────────────────────────────
IMPLEMENTATION EXPECTATIONS
────────────────────────────────────

Work directly in:

  /taxtello/beta-motion

Create the new composition alongside the existing one.

Keep existing compositions working.

Structure the new work cleanly.

Prefer reusable primitives for:

• camera surface
• product frame
• masked transitions
• text reveals
• UI region reveals
• ambient lighting
• shared-element transitions

Avoid one 1,500-line component.

Use deterministic Remotion animation driven by frame/time.

No setTimeout.
No nondeterministic animations.

Respect 60 fps throughout.

Use interpolation/spring/easing deliberately.

────────────────────────────────────
DO NOT STOP AFTER FIRST IMPLEMENTATION
────────────────────────────────────

This is a visual task.

You MUST review the actual rendered output.

Required workflow:

1. Inspect repository and real brand/product.

2. Write a concise storyboard with:
   - exact timestamps
   - key visual
   - transition logic
   - copy
   - intended emotional rhythm

3. Implement it.

4. Run typecheck / relevant checks.

5. Render representative frames at roughly:
   0.0 s
   1.0 s
   2.5 s
   4.5 s
   6.5 s
   8.5 s
   10.5 s
   12.5 s
   14.0 s
   14.8 s

6. VISUALLY INSPECT THOSE IMAGES.

Do not merely confirm that rendering succeeded.

Ask:

Does this look like an Apple-tier product film?

Does anything look like a template?

Is there too much on screen?

Is the product legible?

Are transitions logically connected?

Does Taxtello gold feel premium?

Does every frame look composed?

7. Fix visual weaknesses.

8. Render the complete film.

9. Inspect multiple exact decoded frames from the final MP4, not only browser
   screenshots.

10. Iterate again if necessary.

Do not declare success because the code compiles.

The deliverable is the FILM.

────────────────────────────────────
QUALITY BAR
────────────────────────────────────

Reject your own result if it feels like:

• a SaaS template
• a PowerPoint animation
• a website screen recording
• a generic Remotion demo
• a crypto advertisement
• an AI-generated promo template
• five screenshots sliding around
• excessive marketing copy

Every important frame should be good enough to use as a still advertisement.

I would rather have:

3 extraordinary visual moments

than

10 mediocre feature animations.

────────────────────────────────────
FINAL DELIVERABLES
────────────────────────────────────

Provide:

1. Final storyboard
2. New Remotion composition source
3. 1920×1080 / 60fps final MP4
4. Poster/final frame
5. Contact sheet with representative frames from the film
6. Exact runtime
7. List of real Taxtello assets/screens used
8. Brief explanation of the motion language
9. Any remaining visual compromises
10. Commands to reproduce the render

Save outputs in a clearly named directory such as:

  /taxtello/beta-motion/out/showreel-15/

Do not deploy anything.
Do not modify production data.
Do not merge anything.

Go all out creatively, but exercise ruthless restraint.

Make Taxtello look expensive.Show allThis prompt was taken directly from @daniel_haida’s post (opens in a new tab).ModelOpus 5.5IterationsA few roundsStackRemotionPostedSep 27, 2026
````

### Launch video remake comparison
`notdwd-c2037d` · @notdwd · 2026-09-28 · 1870 words · tags: Product UI, Photos, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: my product name, a logo (or let you draw a simple mark), my brand colours (or pull them from my logo), the one-line thing a user types into the prompt box, the page that answers it (title + 2–3 sentences with one key phrase), two feature names for the stacked cards, and a music track. If I skip any, use the defaults: product "Frame by Frame" living inside its Whop hub, a viewfinder mark (four corner brackets around a bold "FF"), prompt "Make a launch video for my app", a lesson page titled "2.1 Choose a reference", cards "Launch" and "Sound", and Mixkit's free house track "Rising Forest" slowed to 124 BPM.
</inputs>

<direction>
A 12 second square product sting, 1080x1080, frame numbers at 29.97 fps (f0–f359), master rendered at 59.94 fps. Apple-keynote feel: soft, white, bright blue, glassy. The camera never cuts on a still frame: every shot enters already moving (exponential ease-out, 12–19% of the remaining distance per frame) and leaves on an accelerating move or a blur ramp. Blur follows speed and direction on every move.
Palette: my brand colours mapped onto these roles; if I give none, use page #FDFDFB, haze #B7CFEB, ice #E6F0FA, deep blue #294376 → #769CC2 sky gradient, navy #1E2F52, accent blues #2F6BFF / #3CC8F0 / mint #4ED6A0, white. Type: Inter (400/500/600/700). No purple, violet, magenta or orange anywhere.
Story: the product header rises out of a blue haze inside a light app window → a cursor glides in, turns to face where it's going, grows on hover and clicks the logo → hard cut on the music drop to the app icon with four squares orbiting into a cross → the icon collapses into a Mac menu bar → the cursor clicks the menu-bar icon, a frosted glass prompt box springs out and the prompt types → whip-tilt up through a light-blue flash into the answer page scrolling into place → a card rises over it → blur-dissolve to two stacked cards with giant frosted-glass titles → blur-dissolve to the lone logo disc → hard cut to a black end card with a glowing wordmark.
Banned: crossfades, frozen frames (except one hold in S7), stock UI kits, glows on UI text, Math.random, anything that looks like a template.
</direction>

<structure>
Coordinates are px on the 1080 stage. Music beat k = 0.048 + 0.4838·k s (124 BPM, one beat = 14.5 frames). The three hard cuts f72, f101, f159 land 2 frames before a beat: keep these exact frames.
S1 f0–71, header + window + click: haze #B7CFEB fading to #FDFDFB by f28, keep a blue floor glow #DBEEFD at the bottom. Header on one line: logo disc ⌀132 (#FBFCFE, 1px rim #E8E8EA, dark mark), the product name (Inter 500), a dark capsule pill "on Whop" (#2F2E2F, white text); the whole lockup spans x474–1063, centre line rises y932 (f0) → 776 (f2) → 683 (f5) → 608 (f10) → 546 (f24) → 536 (f37), drifting 1 px/frame after. Name appears f2 blurred, pill f4–5 heavily blurred and sliding 15 px left as it sharpens. A light hub window (radius 93, fill #FCFDFF, top band #F1F6FF, blue inner floor glow) fades in around it: opacity 0 to f14, 0.53 f15, 0.7 f19, 1.0 f24; top-left corner (408,405), runs off the right and bottom. Inside: a search pill in the top band, a left icon column (Courses icon at (537,739), faded Chat icon at (537,900)), and a course card from (764,700) off-frame with its cover image, title and "Course · 8 lessons". Cursor (black macOS arrow, white outline, 32x39) appears f27 at (891,393), glides left decelerating to (770,383) f44, rotates to point down-left f47–51 as it dives, lands on the disc's lower right (629,564) f56 → (587,546) f59 → (555,531) f71; grows ×1.55 on hover from f56; a soft ice ring (#D5F3FF → #F7FEFF, outer ⌀174) lights around the disc from f53. Camera zooms about (540,540): 1.0 f46 → 1.2 f60 ease-in-out, holds f61, then eases out accelerating to 1.04 at f71 while the cursor presses (shrinks 15% f69–71).
S2 f72–100, icon + orbit: navy squircle app icon (#294376 → #1E2F52, white mark), 276 px at f72 shrinking ease-out to 178 px by f86, radius 28% of width, on a grey halo disc #E9E9E7 growing ⌀240 (f75) → 326 (f86). Four 92 px squares (radius 26) spin in counter-clockwise, decelerating, and lock into a cross at orbit radius ≈216 by f86: white (1px #E3E8EF edge + faint shadow) left, #2F6BFF top, #3CC8F0 right, #4ED6A0 bottom. f88–100: the icon shrinks accelerating to ≈40 px, the squares slide into a row on its right (white slips behind the icon), blur ramps 0.3 → 6 px.
S3 f101–158, menu bar + prompt: white page above a black laptop bezel band (y425–475, top highlight #686866), a dark navy menu bar (y477–538), wallpaper below = the blue sky gradient with thin white line art (one big circle, two horizontal lines, one vertical, a four-point sparkle at a crossing, soft teal glow top-right). Menu bar right cluster in white: Wi-Fi, battery, toggles, the product mark at x531–584, three ⌀36 dots #2F6BFF / #3CC8F0 / #4ED6A0 at x612, 661, 709, "Mon Jun 22  9:41 AM" 34 px. Enters blurred 3 px and settling by f110. Cursor rises from below (f102), sits on the mark, presses f113–117. Camera pans content right +125 px f115–130 (fastest f118–120). A frosted glass box (white-blue glass over the sky, bright top rim, radius 60) springs out from under the mark f116: width peaks 744 at f126 and settles 726x228 by f138 around x196–922, y568–797. The prompt types from f121 (first legible "Make ") to f150 (complete) at about 1 char/frame with a 1-frame hold every 2–3 chars; caret always on; three white outline icons along the bottom; send button #2F6BFF ⌀51 with a white up arrow. From f136 the whole scene drifts up, accelerating into a whip-tilt (f158 moving ≈25 px/frame, vertical blur ≈6–8 px) while the page tints #E6F4FE over f154–158.
S4 f159–186, answer page: a light course lesson page (breadcrumb, title, body): text column x120, body 47 px Inter 400 grey #BCBCBA, line pitch 58, one key phrase ("frame for frame") in black 600. It arrives smeared and 420 px low, scrolls up with offsets 420, 315, 210, 170, 140, 116, 96, 81 (f166) … 14 (f175) … 0 (f180), then creeps −6 px by f186. Blur 24 px (f159) → 1.5 (f165) → 0. Flash #E2F4FE fading to #FDFDFB by f165. A cursor pointing straight up rides the scroll and stops under the key phrase (≈(450,591) f180), then drifts right.
S5 f187–214, card: a white card (x203–878, runs off the bottom) rises over the page: cover image 627x536 inset 24 px, radius 64, a light grabber bar at its top centre, caption semibold 38 px black, sub-caption grey 23 px. Cover top y642 (f187) → 456 (f191) → 395 (f196) → 369 (f200) → 348 (f205), then keeps drifting up ~4 px/frame. Card blur peaks 3.8 px at f189, sharp by f201; the page behind blurs to ≈2.5 px. Exit f207–214: card shrinks ~5% and rises while the whole frame blurs 1 → 7 px; cut at the blur peak.
S6 f215–244, two cards: white page, two stacked cards 538x348 (radius 57, gap 36) centred on x540, top card settling at y168 by f230, bottom at y552. Each: cover art (no text baked into it), a frosted pill top-left ("Module 3" / "Module 5"), a frosted round "•••" top-right, and a huge bold title along the bottom edge made of frosted glass (a blurred, lightened copy of the image clipped to the letters, cut off by the card's bottom edge): "Launch" and "Sound". Both enter blurred 12 px and sharp by f224; the top card enters 8% large and rises from y264; the bottom card rises from y927, staggered behind it. They drift up 3 px/frame f230–238, then accelerate up and blur out into the cut.
S7 f245–300, logo disc: page #FDFDFB, disc ⌀168 #F6F6F6 with the dark mark, rises into the centre (top y569 f245 → 491 f250 → 468 f255 → 456 f269) with a vertical smear on the cut frame, holds still f269–287 (the only frozen stretch), then shrinks accelerating to ⌀123 at f300.
S8 f301–359, end card: black radial background (#020204 corners, ≈#272729 around the word), the wordmark in Inter 600, white #F3F3F5 with a tight glow plus a wide soft halo, centred (540,540). Word width: ≈1650 px f301 (horizontally smeared, zoom streaks) → 1350 f302 → 1110 f303 → 1049 f304 → 734 f309 → 678 f311 → 563 f320 → 516 f342 (≈1 px/frame shrink) → 492 f350, then collapses ease-in: 450 f355 → 267 f359 with blur rising to 3.5 px. The film ends mid-collapse.
</structure>

<build>
1. One HTML page, 1080x1080, drawn by seek(t) as a pure function of the frame number. No CSS transitions, no timers, no Math.random (seeded hashes only). Shots register as {f0, f1, render(localFrame)}.
2. Every value is continuous in the frame number (the 59.94 master renders half frames): animate with keyframe tables kf(frame, [[f, value], ...], ease) and per-frame lookup tables with linear interpolation. No Math.floor on motion.
3. Blur: CSS filter blur for round blur, SVG feGaussianBlur with separate x/y stdDeviation for directional smears. Zoom smear on the end card = 20–30 scaled, faded copies of the word. Frosted glass = a blurred, lightened copy of what's behind, clipped to the shape.
4. Cursor: one SVG macOS arrow (black fill, white outline, soft shadow) with rotation and scale, reused in S1, S3, S4.
5. Sound (no voice), exactly 12.075 s: music at 124 BPM, soft intro, the drop at 2.47 s (beat 5, the f72 cut leads it by 2 frames). Synthesized SFX: soft impact 0.10 s; whooshes peaking at the cuts 2.402, 3.370, 5.305, 10.043 s; transition hits exactly on 6.240 s and 8.175 s; clicks at 2.33 and 3.83 s; very quiet key ticks every ~32 ms over 4.04–5.00 s; a soft shimmer at 10.05 s. Master to −14 LUFS, true peak −1 dBTP, no fade except the last 60 ms.
6. Render with Playwright (one screenshot per frame, fonts loaded first), encode H.264 yuv420p at 60000/1001, mux the audio.
</build>

<gotchas>
Measure text only after the fonts load. A long product name won't fit where a 5-letter name did: scale the whole lockup (disc gap, name, pill) to fit the span x474–1063, don't let the pill fall off-frame. A white orbit square vanishes on the white page without a 1px edge and a faint shadow. Don't put images with their own text inside the S6 cards, or the glass title doubles up. Keep the cut frames exact even where they don't sit on a beat. Nothing freezes except S7 f269–287. Heavy blur tables can wipe a shape out completely: if a frame looks empty, lower the blur until the shape still reads.
</gotchas>

<start>
Ask me for the inputs. Then show me 4 stills (f40 header in the window, f86 icon cross, f150 finished prompt, f230 the two cards) before you render the full film.
</start>Show allThis prompt was taken directly from @notdwd’s post (opens in a new tab).ModelOpus 5.5PostedSep 28, 2026
````

### Frame by Frame launch video
`notdwd-7de38a` · @notdwd · 2026-09-27 · 1849 words · tags: Product UI, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: my product name, a logo (or let you draw a simple mark), the one-line thing a user types into the prompt box, the page that answers it (title + 2–3 sentences with one key phrase), two feature names for the stacked cards, and a music track. If I skip any, use the defaults: product "Frame by Frame" living inside its Whop hub, a viewfinder mark (four corner brackets around a bold "FF"), prompt "Make a launch video for my app", a lesson page titled "2.1 Choose a reference", cards "Launch" and "Sound", and Mixkit's free house track "Rising Forest" slowed to 124 BPM.
</inputs>

<direction>
A 12 second square product sting, 1080x1080, frame numbers at 29.97 fps (f0–f359), master rendered at 59.94 fps. Apple-keynote feel: soft, white, bright blue, glassy. The camera never cuts on a still frame: every shot enters already moving (exponential ease-out, 12–19% of the remaining distance per frame) and leaves on an accelerating move or a blur ramp. Blur follows speed and direction on every move.
Palette: page #FDFDFB, haze #B7CFEB, ice #E6F0FA, deep blue #294376 → #769CC2 sky gradient, navy #1E2F52, accent blues #2F6BFF / #3CC8F0 / mint #4ED6A0, white. Type: Inter (400/500/600/700). No purple, violet, magenta or orange anywhere.
Story: the product header rises out of a blue haze inside a light app window → a cursor glides in, turns to face where it's going, grows on hover and clicks the logo → hard cut on the music drop to the app icon with four squares orbiting into a cross → the icon collapses into a Mac menu bar → the cursor clicks the menu-bar icon, a frosted glass prompt box springs out and the prompt types → whip-tilt up through a light-blue flash into the answer page scrolling into place → a card rises over it → blur-dissolve to two stacked cards with giant frosted-glass titles → blur-dissolve to the lone logo disc → hard cut to a black end card with a glowing wordmark.
Banned: crossfades, frozen frames (except one hold in S7), stock UI kits, glows on UI text, Math.random, anything that looks like a template.
</direction>

<structure>
Coordinates are px on the 1080 stage. Music beat k = 0.048 + 0.4838·k s (124 BPM, one beat = 14.5 frames). The three hard cuts f72, f101, f159 land 2 frames before a beat: keep these exact frames.
S1 f0–71, header + window + click: haze #B7CFEB fading to #FDFDFB by f28, keep a blue floor glow #DBEEFD at the bottom. Header on one line: logo disc ⌀132 (#FBFCFE, 1px rim #E8E8EA, dark mark), the product name (Inter 500), a dark capsule pill "on Whop" (#2F2E2F, white text); the whole lockup spans x474–1063, centre line rises y932 (f0) → 776 (f2) → 683 (f5) → 608 (f10) → 546 (f24) → 536 (f37), drifting 1 px/frame after. Name appears f2 blurred, pill f4–5 heavily blurred and sliding 15 px left as it sharpens. A light hub window (radius 93, fill #FCFDFF, top band #F1F6FF, blue inner floor glow) fades in around it: opacity 0 to f14, 0.53 f15, 0.7 f19, 1.0 f24; top-left corner (408,405), runs off the right and bottom. Inside: a search pill in the top band, a left icon column (Courses icon at (537,739), faded Chat icon at (537,900)), and a course card from (764,700) off-frame with its cover image, title and "Course · 8 lessons". Cursor (black macOS arrow, white outline, 32x39) appears f27 at (891,393), glides left decelerating to (770,383) f44, rotates to point down-left f47–51 as it dives, lands on the disc's lower right (629,564) f56 → (587,546) f59 → (555,531) f71; grows ×1.55 on hover from f56; a soft ice ring (#D5F3FF → #F7FEFF, outer ⌀174) lights around the disc from f53. Camera zooms about (540,540): 1.0 f46 → 1.2 f60 ease-in-out, holds f61, then eases out accelerating to 1.04 at f71 while the cursor presses (shrinks 15% f69–71).
S2 f72–100, icon + orbit: navy squircle app icon (#294376 → #1E2F52, white mark), 276 px at f72 shrinking ease-out to 178 px by f86, radius 28% of width, on a grey halo disc #E9E9E7 growing ⌀240 (f75) → 326 (f86). Four 92 px squares (radius 26) spin in counter-clockwise, decelerating, and lock into a cross at orbit radius ≈216 by f86: white (1px #E3E8EF edge + faint shadow) left, #2F6BFF top, #3CC8F0 right, #4ED6A0 bottom. f88–100: the icon shrinks accelerating to ≈40 px, the squares slide into a row on its right (white slips behind the icon), blur ramps 0.3 → 6 px.
S3 f101–158, menu bar + prompt: white page above a black laptop bezel band (y425–475, top highlight #686866), a dark navy menu bar (y477–538), wallpaper below = the blue sky gradient with thin white line art (one big circle, two horizontal lines, one vertical, a four-point sparkle at a crossing, soft teal glow top-right). Menu bar right cluster in white: Wi-Fi, battery, toggles, the product mark at x531–584, three ⌀36 dots #2F6BFF / #3CC8F0 / #4ED6A0 at x612, 661, 709, "Mon Jun 22  9:41 AM" 34 px. Enters blurred 3 px and settling by f110. Cursor rises from below (f102), sits on the mark, presses f113–117. Camera pans content right +125 px f115–130 (fastest f118–120). A frosted glass box (white-blue glass over the sky, bright top rim, radius 60) springs out from under the mark f116: width peaks 744 at f126 and settles 726x228 by f138 around x196–922, y568–797. The prompt types from f121 (first legible "Make ") to f150 (complete) at about 1 char/frame with a 1-frame hold every 2–3 chars; caret always on; three white outline icons along the bottom; send button #2F6BFF ⌀51 with a white up arrow. From f136 the whole scene drifts up, accelerating into a whip-tilt (f158 moving ≈25 px/frame, vertical blur ≈6–8 px) while the page tints #E6F4FE over f154–158.
S4 f159–186, answer page: a light course lesson page (breadcrumb, title, body): text column x120, body 47 px Inter 400 grey #BCBCBA, line pitch 58, one key phrase ("frame for frame") in black 600. It arrives smeared and 420 px low, scrolls up with offsets 420, 315, 210, 170, 140, 116, 96, 81 (f166) … 14 (f175) … 0 (f180), then creeps −6 px by f186. Blur 24 px (f159) → 1.5 (f165) → 0. Flash #E2F4FE fading to #FDFDFB by f165. A cursor pointing straight up rides the scroll and stops under the key phrase (≈(450,591) f180), then drifts right.
S5 f187–214, card: a white card (x203–878, runs off the bottom) rises over the page: cover image 627x536 inset 24 px, radius 64, a light grabber bar at its top centre, caption semibold 38 px black, sub-caption grey 23 px. Cover top y642 (f187) → 456 (f191) → 395 (f196) → 369 (f200) → 348 (f205), then keeps drifting up ~4 px/frame. Card blur peaks 3.8 px at f189, sharp by f201; the page behind blurs to ≈2.5 px. Exit f207–214: card shrinks ~5% and rises while the whole frame blurs 1 → 7 px; cut at the blur peak.
S6 f215–244, two cards: white page, two stacked cards 538x348 (radius 57, gap 36) centred on x540, top card settling at y168 by f230, bottom at y552. Each: cover art (no text baked into it), a frosted pill top-left ("Module 3" / "Module 5"), a frosted round "•••" top-right, and a huge bold title along the bottom edge made of frosted glass (a blurred, lightened copy of the image clipped to the letters, cut off by the card's bottom edge): "Launch" and "Sound". Both enter blurred 12 px and sharp by f224; the top card enters 8% large and rises from y264; the bottom card rises from y927, staggered behind it. They drift up 3 px/frame f230–238, then accelerate up and blur out into the cut.
S7 f245–300, logo disc: page #FDFDFB, disc ⌀168 #F6F6F6 with the dark mark, rises into the centre (top y569 f245 → 491 f250 → 468 f255 → 456 f269) with a vertical smear on the cut frame, holds still f269–287 (the only frozen stretch), then shrinks accelerating to ⌀123 at f300.
S8 f301–359, end card: black radial background (#020204 corners, ≈#272729 around the word), the wordmark in Inter 600, white #F3F3F5 with a tight glow plus a wide soft halo, centred (540,540). Word width: ≈1650 px f301 (horizontally smeared, zoom streaks) → 1350 f302 → 1110 f303 → 1049 f304 → 734 f309 → 678 f311 → 563 f320 → 516 f342 (≈1 px/frame shrink) → 492 f350, then collapses ease-in: 450 f355 → 267 f359 with blur rising to 3.5 px. The film ends mid-collapse.
</structure>

<build>
1. One HTML page, 1080x1080, drawn by seek(t) as a pure function of the frame number. No CSS transitions, no timers, no Math.random (seeded hashes only). Shots register as {f0, f1, render(localFrame)}.
2. Every value is continuous in the frame number (the 59.94 master renders half frames): animate with keyframe tables kf(frame, [[f, value], ...], ease) and per-frame lookup tables with linear interpolation. No Math.floor on motion.
3. Blur: CSS filter blur for round blur, SVG feGaussianBlur with separate x/y stdDeviation for directional smears. Zoom smear on the end card = 20–30 scaled, faded copies of the word. Frosted glass = a blurred, lightened copy of what's behind, clipped to the shape.
4. Cursor: one SVG macOS arrow (black fill, white outline, soft shadow) with rotation and scale, reused in S1, S3, S4.
5. Sound (no voice), exactly 12.075 s: music at 124 BPM, soft intro, the drop at 2.47 s (beat 5, the f72 cut leads it by 2 frames). Synthesized SFX: soft impact 0.10 s; whooshes peaking at the cuts 2.402, 3.370, 5.305, 10.043 s; transition hits exactly on 6.240 s and 8.175 s; clicks at 2.33 and 3.83 s; very quiet key ticks every ~32 ms over 4.04–5.00 s; a soft shimmer at 10.05 s. Master to −14 LUFS, true peak −1 dBTP, no fade except the last 60 ms.
6. Render with Playwright (one screenshot per frame, fonts loaded first), encode H.264 yuv420p at 60000/1001, mux the audio.
</build>

<gotchas>
Measure text only after the fonts load. A long product name won't fit where a 5-letter name did: scale the whole lockup (disc gap, name, pill) to fit the span x474–1063, don't let the pill fall off-frame. A white orbit square vanishes on the white page without a 1px edge and a faint shadow. Don't put images with their own text inside the S6 cards, or the glass title doubles up. Keep the cut frames exact even where they don't sit on a beat. Nothing freezes except S7 f269–287. Heavy blur tables can wipe a shape out completely: if a frame looks empty, lower the blur until the shape still reads.
</gotchas>

<start>
Ask me for the inputs. Then show me 4 stills (f40 header in the window, f86 icon cross, f150 finished prompt, f230 the two cards) before you render the full film.
</start>Show allThis prompt was taken directly from @notdwd’s post (opens in a new tab).ModelOpus 5.5PostedSep 27, 2026
````

### Spotify product film
`brainextends-e19ac3` · @brainextends · 2026-09-26 · One-shot · 1226 words · tags: Product UI, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
Create a complete, polished Spotify-themed motion graphics video from the following brief. This prompt is self-contained: no reference video or supplied assets are required.

<deliverables> An 18-second MP4 at 1920×1080 and true 60 fps, with music and subtle sound effects Complete editable source Build, render, inspect, and refine the animation before delivering it Do not stop at a storyboard, still images, or an implementation plan </deliverables>
<art_direction>
A premium music-product film presented inside a large, nearly black rounded rectangular stage
The stage occupies roughly 80% of the canvas width and 75% of its height, centered horizontally and slightly below the vertical center
Outside the stage, use a soft atmospheric green background: luminous emerald near the upper-left corner, deeper forest green toward the sides, fading to near-black at the bottom
Inside the stage:
Near-black background
White primary typography
Muted gray secondary text
Spotify green # 1ED760 for emphasis and controls
One clean sans-serif font, such as Geist or Inter
Consistent icon strokes and restrained shadows
Keep compositions compact and centered, with substantial negative space
Text should feel like music-product advertising, not oversized presentation headings
Do not add an outer caption, creator watermark, decorative footer, or progress counter
</art_direction>

<artwork> Create original square album artwork for a fictional track called “Glass Tides” by “AURA”
The hero cover is an abstract macro image of flowing pearlescent liquid silk and molten glass
Use pastel lavender, powder cyan, blush pink, champagne gold, and subtle mint
Include broad three-dimensional folds, realistic reflective highlights, delicate striations, and a prominent sweeping S-shaped fold
Fill the square edge to edge
No text, logo, or border on this hero artwork
Use this same artwork consistently throughout the film

Create additional designed playlist sleeves:
“Late Nights” in mustard yellow
“Good Energy” in pink
“Deep Focus” in blue
“Daily Mix 1”, “Daily Mix 2”, and “Daily Mix 3” in complementary colors

These should look like finished graphic-design covers, with bold typography and simple geometric motifs
</artwork>

<timeline> 0.0–0.6 seconds: A green Spotify icon grows smoothly into the center of the dark stage Give it a confident arrival with minimal overshoot
0.6–1.5 seconds:
The icon transitions into a small Spotify identity above two centered lines:
“Discover”
“new music”
The first line is white; the second is green
Reveal them with short masked vertical movements
1.5–2.4 seconds:
A stylized Spotify desktop interface rises into view
Show a slim sidebar, “Made for you”, three album cards, and small supporting rows
Use a subtle perspective tilt during the entrance, settling toward a frontal view
2.4–3.2 seconds:
Move closer to the three featured covers
Show “New for you” above them
Keep the artwork crisp, with short album titles beneath
A narrow rounded player bar now anchors the bottom of the stage
3.2–4.0 seconds:
The featured cards withdraw into a compact “Fresh finds” list
Reveal four song rows with a slight stagger
Each row contains a thumbnail, short track title, artist, and a small menu icon
4.0–4.9 seconds:
Transition into a horizontal strip of colorful playlist covers
Heading: “Every mood”
Supporting line: “Find what moves you”
The strip slides smoothly sideways, with edge cards partially cropped by the stage
4.9–5.8 seconds:
A compact search field appears
Type “Glass Tides”
Reveal one selected result beneath it, with the iridescent artwork, “AURA”, and a green play icon

5.8–6.6 seconds:
The selected artwork expands into a large centered cover
Reveal “Glass Tides” underneath, followed by “AURA” in green
Keep the player bar visible
6.6–7.5 seconds:
The same cover slides left
Track information appears on the right:
“Glass Tides”
“AURA”
“A new frequency”
Add a rounded green Play button
Coordinate the cover movement and text reveals
7.5–8.3 seconds:
A brief brand-color transformation fills the inner stage with green
The artwork contracts into a smaller centered tile
Place a small dark Spotify identity underneath
The player briefly recedes
8.3–9.8 seconds:
Return to the dark stage
The same artwork expands dramatically toward the camera, becoming oversized and cropped by the rounded stage
Restore the player at the bottom
Use controlled motion blur during the fastest part of the zoom

9.8–11.2 seconds:
The artwork clears into a centered typographic statement:
“Find your”
“rhythm”
Use white for the first line and green for the second
The player remains visible and stable beneath it
11.2–12.5 seconds:
Show “Made for your every day”
Three playlist sleeves enter with gentle perspective and small opposing tilts
They spread into six smaller sleeves across the stage
Supporting line: “Your sound, always evolving”

12.5–14.0 seconds:
The playlist layout transitions into four floating album covers
Include the iridescent hero artwork
Use restrained rotation, perspective, depth ordering, and overlap
Keep their movement coordinated rather than randomly floating
14.0–15.2 seconds:
The covers converge toward the center and fold around a green Spotify icon
The artwork withdraws as the icon becomes the focal point
Fade the player away
The Spotify icon must emerge from the same central position as the converging covers
15.2–18.0 seconds:
The icon moves slightly left and settles beside a large white “Spotify” wordmark
Keep the icon and letters separated throughout the movement
Reveal:
“Discover new music”
“every day”
The first line is white; the second is green
Hold the finished composition cleanly through the end
</timeline>
<persistent_player>
For most of the middle sequence, keep one narrow rounded player bar near the bottom of the inner stage
Include:
Small hero-art thumbnail
“Glass Tides” and “AURA”
Play and skip controls
A thin progress track
A small volume icon
Subdued dark translucent styling with a fine border
This recurring player connects the changing shots
It must remain visually secondary to the artwork
</persistent_player>

<motion_quality>
Match the energy of a tightly edited premium product film
Most visual ideas last approximately one second, but transitions remain smooth
Use continuous acceleration and deceleration
Favor critically damped springs or carefully tuned smooth easing
No repeated bouncing or large elastic overshoots
Preserve the hero artwork’s identity and position relationships through search, album detail, brand tile, and zoom
Use match-position transitions, coordinated scaling, masked reveals, and perspective
Outgoing titles must disappear before incoming titles occupy the same space
Avoid overlapping text, sudden camera resets, long blank intervals, and arbitrary full-frame crossfades
Clip every oversized cover and camera move cleanly to the rounded stage
No particles, shockwave rings, lens flares, camera shake, or unrelated stock footage
</motion_quality>

<audio> Create or select commercially usable electronic music around 120 BPM Use a clean pulse, warm bass, restrained melodic elements, and subtle transition accents Align important entrances, selections, zooms, and the logo reveal with musical events Keep effects quieter than the music No voiceover Do not use copyrighted commercial tracks without permission </audio>
<implementation_and_validation>
Build a deterministic animation driven by absolute time through an async window. seek(t) function
Every transform, opacity, mask, and UI state must be reproducible when seeking frames in any order
Do not depend on live timers, accumulated physics, or CSS transition state during export

Render true 60 fps with spatial antialiasing
Use 3–5 temporal subframe samples per output frame for restrained motion blur
Keep stationary text and artwork sharp
Inspect contact sheets and moving playback
Check the fast heading changes, artwork handoffs, zoom, cover convergence, and final wordmark spacing
Verify evenly spaced frame timestamps and the full 18-second duration
Fix visual defects before delivering the final MP4 and editable source
</implementation_and_validation>Show allThis prompt was taken directly from @brainextends’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotPostedSep 26, 2026
````

### Ora 2 image model launch film
`rossaxbt-3085b7` · @rossaxbt · 2026-10-07 · HTML canvas + Playwright + ffmpeg · 1054 words · tags: Product UI, Photos, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: my product name, a one-line pitch, my logo, 3 to 6 screenshots of the product, 40+ images of what it creates (or photos of it), my brand colors and font, an ElevenLabs API key and voice ID, plus a royalty-free track with a clear drop (the audio file and the drop timestamp). If I skip anything, use these defaults: "Ora 2", "an image model made for taste", free images from Unsplash and Pixabay, Geist, ink #111214, the voice Samara X (19STyYD15bswVz51nqLf) on eleven_v4, and Pixabay "Cascade Breathe" (129.83 BPM, drop at 75.39s).
</inputs>

<script>
Write a 9-line voiceover in this format and adapt every line to my product:
"This is [name]. A [category]... built for [value]. [Verb] in ANY style. Give it a [input] - and it just... understands. The more you use it, the BETTER it gets. Adjust its [setting]. Its [setting]. Its [setting]. Every [output] - exactly as you pictured it. [Name]. Out now."
Use emotion tags sparingly: [softly] on the quiet lines and [excited] on the [Verb] line. Don't tag the opener, and end it with a plain full stop.
</script>

<voice>
Call the ElevenLabs API directly using my key, without an MCP. Generate 4 full-script takes in one pass and let me choose. If a line doesn't sound right, regenerate just that line 4 times and splice the best version into my take.
Shorten pauses longer than 0.28s to 0.2s, then bring each phrase 85% of the way toward the median level, adjusting gain only during pauses.
For word timings, split the read at pauses of 100ms or longer, transcribe each segment separately with Whisper, and align its first word to the measured onset. A single Whisper pass can place words up to half a second late.
</voice>

<direction>
A 22-second square launch film, 1440x1440 at 60fps, in the style of an AI lab launch: white canvas, one typeface, black ink, real images, and captions typed word by word at the exact time they're spoken.
Every control (prompt bar, settings panel, caption pill) uses liquid glass: frost the scene behind it, bend that scene along the edge like thick glass, then add a top sheen, bright rim and soft lift shadow. Glass disappears on plain white, so add a slow pastel aura in my brand colors or a blurred wash of the photo behind it.
The one emphasized word types in a gradient of my brand colors, with a faint glow behind it.
Motion rules: keep the camera drifting (push from 1.0 to 1.04 per scene; when content moves to the next scene, start at the zoom where the previous scene ended). Nothing appears instantly: use eased fades of at least 0.3s. Change images on 16th notes, with a click for each. Land scene changes on phrase starts, and align the music drop with the [Verb] line. Don't show full stops on screen.
Banned: selection-box highlights, beat-snapped slams, white flashes, 3D, templates.
</direction>

<structure>
Seven scenes, timed to the voice:

1. "This is [name]": a collage of my images drifts out as the name types in large, then gives way to the category line.
2. "made for [value]": full-screen flashes of my best images switch on 16th notes into the drop, with the line typed in white over them.
3. The drop: a glass prompt bar types a short prompt. The result card changes style every 16th note, while a black style chip rolls to each new name above a thumbnail strip.
4. "Show it a moodboard": 9 images fly into a 3x3 grid, then circle the result as "It gets you" types on screen.
5. "The more you use it, the better it gets": type two lines, with the emphasized word in the gradient.
6. The settings: show a glass panel with 3 sliders, each moving as she names it. Shift the image's hue, roll new seeds on 16ths, then turn it into a poster. Shift a blurred wash of its colors behind the glass in sync.
7. "Every [output], exactly how you see it": burst 120 of my images outward from the center behind a glass caption pill, then bring them together into my logo as the name types on. Put "Out now" underneath and hold for 2s.

Replace the prompt bar, results and sliders with my product's real input, outputs and settings.
</structure>

<sound>
Set the song so the drop lands on the [Verb] line, and anchor the beat grid there.
Duck the music under the voice with a 3-band sidechain (lows 30%, mids 85%, air 55%; 0.3s hold, 50ms look-ahead, 0.5s release). Then adjust the mids of each phrase until the voice sits about 9 dB above the music between 300 Hz and 4 kHz.
Use one downloaded Mixkit SFX per event, positioned by its measured peak: a click for each image change, a key sound for every typed letter, a soft landing on the emphasized word, whooshes, and impacts on the drop and logo. Trim each around its peak (many risers are 4 seconds). Fade the music along a dB curve under the end card. Loudnorm to -14 LUFS.
</sound>

<build>
1. One HTML canvas. Every frame is a pure function of time inside seek(t), and every caption and cut follows the word table.
2. Glass: capture the canvas behind the shape, blur it about 14px for the body, draw a lightly blurred copy magnified about 1.06x in a 12px band along the edge, then add the milk, sheen, rim and shadow.
3. Render with Playwright at 60fps using 8 motion-blur subframes, then encode with ffmpeg.
4. Before showing me anything, make a contact sheet of stills, scan frame differences for single-frame pops (only the 16th-note runs may jump), and check the voice-to-music ratio for every phrase.
</build>

<gotchas>
A [warmly] opener can sound whispered, while [excited] can feel fake. A highlight box behind a word looks like a Windows text selection. If the camera resets to 1.0 during a handoff, the zoom snaps. A 0.05s fade looks like an instant pop-in.
</gotchas>

<start>
Ask me for the inputs, write the script, send me 4 voice takes to choose from, then show me 8 stills before the full render.
</start>Show allThis prompt was taken directly from @rossaxbt’s post (opens in a new tab).ModelOpus 5.5StackHTML canvas + Playwright + ffmpegPostedOct 7, 2026
````

### Photo print app launch film
`twoclipping-221cab` · @twoclipping · 2026-09-26 · HTML + Playwright · 930 words · tags: Product UI, Phone, Photos, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: a one-word brand name for the wordmark (a verb works best), 9 to 12 high-res photos, a royalty-free song around 120 BPM with a drop and a quiet breakdown (Mixkit, free for commercial use), and a free stock clip of a plain wall with moving plant shadows (Pexels).
</inputs>

<direction>
An Apple-keynote launch film, 2D only, one continuous take. Every scene is made out of the previous one: nothing fades, blurs or cuts. Objects change shape instead: text rises out of a mask line, icons pop from zero on a spring, bars draw across, pages push, and a black shape floods the whole frame and contracts into the next scene. Warm off-white canvas, black UI, iOS 26 liquid glass over the photos. Archivo (wdth 125, weight 800) for the wordmark, Geist for UI. A cursor drives every change with real clicks, drags and long-presses. The camera zooms screen-studio style so each moment fills the square, and the cursor scales with it.
Banned: crossfades, blur-ins, brightness "developing", 3D flips, particles, glows, holds longer than 1s, anything that looks like a template.
</direction>

<structure>
120 BPM, 54 beats, something happens on every beat.
Open: the wordmark squeezes into its own period like an accordion, the dot grows into a black pill, a label rises inside it. Click: six iris blades close over the label and snap open onto a photo. The circle becomes a square, shrinks, the grid unfolds from behind it like a paper map (center, plus, corners), reflows into a bento, and a click zooms into one tile, landing exactly on the drop.
Glass: a glass word pops in letter by letter, melts into a droplet that stretches into a glass toolbar. The adjust icon turns it into a slider. Dragging relights the photo from day to golden hour (two aligned shots), and the knob turns into a glass lens while held. It lifts into a glass orb, the next photo opens inside it as a circle, and the orb expands into a lock screen: glass clock digits, date, and a home bar that stretches into a glass music player.
Stage: the lock screen pulls back into a phone (the bezel grows out of the screen edge). The Dynamic Island stretches like liquid, pinches off, flies over and grows into a Mac window that rolls up like a blind. Long-press the wallpaper, drag it onto a Safari tab, the page pushes in, drop it and it becomes the hero of a landing page. Scroll: the hero morphs into a framed print on a product card, with the mat and molding growing out of the photo's edge. Pick a frame color (it paints across) and a size, then the nav button flies down into "Order print".
Order: one black shape keeps morphing: Ordered ✓ → Printing % → On its way (a van on a route) → Delivered ✓.
Wall: the delivered circle floods the frame edge to edge, holds black for a beat, and contracts into the framed print hanging on the real wall footage. The same iris opens onto the print, closes again, the frame floods the screen and contracts into the pill → the dot → the letters spring back out, landing on the beat return. Last frame = first frame.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside an async seek(t): no CSS transitions, no timers, no state between frames.
2. Springs are closed-form step responses. A value with many targets is the sum of one spring per change, so it stays a pure function of time.
3. Liquid glass: each glass element holds its own clone of the scene behind it, filtered with an SVG feImage displacement map (a rounded-rect distance field) through three feDisplacementMaps at slightly different scales for chromatic edges, plus a rim light. Glass letters: a canvas distance field per glyph gives the map, mask and highlights.
4. Goo: blur + alpha threshold, then composite the source atop it so the glass stays sharp inside.
5. Iris: 6 blades around a hexagonal aperture. Each blade is its two vertices, both edge extensions and the SHORT arc between them.
6. Wordmark squeeze: every letter moves toward the dot by the same factor and its drawn width follows (narrow the wdth axis, scale the rest), so the letters stay touching.
7. Footage: re-encode all-intra (ffmpeg -g 1), load it as a blob URL, await 'seeked' before drawing each frame.
8. Sound: a downloaded SFX for every event (Mixkit), never synthesized, each placed by its measured peak. The song starts on a downbeat: the zoom lands on the drop, the wall sits in the breakdown, the wordmark returns with the beat. Loudnorm to -14 LUFS.
9. Render with Playwright: 4 subframes per frame blended with ffmpeg tmix, 60fps. Check one frame per beat, then scan for single-frame pops (frame-difference spikes 3x their neighbours).
</build>

<gotchas>
backdrop-filter: url() misreads displacement maps in Chromium, so clone the scene instead. A flood must overscale past the corners and take about 0.3s, or half the screen changes in one frame. A child with visibility: visible shows through a hidden parent, so use inherit. Text that swaps inside a morphing shape needs its own mask. python http.server can't range-seek video, so use the blob URL.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and 4 stills (open, glass, stage, wall) before you write the full film.
</start>Show allThis prompt was taken directly from @twoclipping’s post (opens in a new tab).ModelOpus 5.5StackHTML + PlaywrightPostedSep 26, 2026
````

### Food craving launch film
`ultimaxbt-2ddf1e` · @ultimaxbt · 2026-10-08 · HTML · One-shot · 820 words · tags: Product UI, Kinetic type, Photos, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: my product, the exact request a user types into it, 6 to 8 photos for the result cards, a royalty-free song around 130 BPM with a clear drop (Mixkit, free for commercial use), and my brand mark for the end card. If I skip anything, use the defaults: the food-ordering story below, food photos from Pexels (fire noodles, birria tacos, hot chicken, buffalo wings, smash burger, spicy ramen), and Mixkit "Cat Walk".
</inputs>

<direction>
A 15-second product launch film, 1920x1080 at 60fps. 2D only, one continuous take. No fades, blurs or cuts: each scene grows from the last. Text rises from a mask line, buttons expand into pages, and color floods from one object before shrinking into another. Give the camera one eased move per scene, and never zoom in and out consecutively.

Look: warm white canvas (#f5f5f2), black UI (#0e0e10), lime accent (#cdf24f), orange (#ff6a2a), and a blue send button (#2f6bff). Add an Apple Intelligence-style iridescent glow around the input: a blurred conic gradient rotating through pink, orange, lime, cyan and violet. Use real food photography on dark cards, Geist for UI and a serif for the product name on the end card.

Banned: crossfades, blur-ins, 3D, particles, camera moves that reverse direction, holds longer than 1s, anything that feels like a template.
</direction>

<structure>
130 BPM, 32 beats (14.8s). Start the song 12 beats before its drop.

Beats 0-6, ask: push slowly into the glowing composer, about 3x zoom. Type the request over three fixed lines with a natural keystroke rhythm:
"I'm really hungry, I don't know
what I want but something
spicy, crispy and filling"

Beat 6, send: press the send button. A lime ripple spreads from it and transforms the message into a chat bubble. Pull back once to reveal the phone around it (428x900 screen, 11px black bezel, 9:41 status bar).

Beats 6-12, think: the send button grows into an orange wok, a half-disc with a thin handle. It tosses 6 colorful ingredients on beats 8, 9, 10 and 11 beneath the shimmering text "Finding something for you…".

Beat 12, the drop: a lime circle expands from the wok to fill the frame in about 0.35s. Dark food cards (330x440, radius 28, photo on top, name, one-line description, price and rating) burst in from the center. Slide the strip across three cards and land on "Fire Noodles", which lifts with a "Best match" pill.

Beats 16-21, chat: the lime contracts back into the user's bubble, carrying its words as the chosen card flies into its slot. "Found it. Fire Noodles from Wok & Fire, smoky, spicy and seriously filling." rises in, followed by "Want me to order it for you?" Then show two pills: "Order now" in black and "More options" outlined. The cursor clicks Order now → spinner → "✓ Ordered".

Beats 21-32, outro: the black button expands into the page, staying pill-shaped as it reaches the edges while the camera pushes into it. Its label grows to headline size, then slides away. Bring in "You were craving noodles." and "Now it's on the way." word by word (92px, white on black). A courier dot follows a route to a pin. The pin becomes the brand mark, and the wordmark wipes out from behind it, with "made with" above and the product name below.
</structure>

<build>
1. One HTML file, 1920x1080. Compute every style from time inside seek(t): no CSS transitions, timers or state carried between frames.
2. Use one camera transform on a container, keyed by [time, zoom, x, y] with eased segments and zoom interpolated in log space.
3. Use closed-form step-response springs for every pop and settle.
4. Make every handoff a shared element: the lime flood carries a copy of the bubble's words, and the button carries its label into the page.
5. Sound: use a downloaded Mixkit SFX for each event - typing, send pop, each toss, drop impact, card swoosh, click, success tone, page-fill whoosh and mark sparkle. Place each by its measured peak and loudnorm to -14 LUFS.
6. Render with Playwright at 60fps using 8 subframes per frame, blended with ffmpeg tmix. Review every fast moment frame by frame and scan the full video for single-frame pops.
</build>

<gotchas>
Four subframes leave ghost copies on fast moves, so render 8 and slow the move down. The flood must reach the farthest corner and take about 0.35s, or it looks like a flash. Set z-index on every layer so the cards don't float above the flood. Keep the typed request on fixed lines so the camera never has to follow a wrapping cursor. Declare every variable before the first seek() call.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and 4 stills (ask, drop, chat, outro) before writing the full film.
</start>Show allThis prompt was taken directly from @ultimaxbt’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotStackHTMLPostedOct 8, 2026
````

### Prompt Motion site promo
`antonio-kodheli-490109` · @antonio_kodheli · 2026-10-06 · Remotion · 706 words · tags: Product UI, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: the gallery URL (default www.prompt-motion.com/), one entry whose prompt
gets shown on screen, and a royalty-free track around 120 BPM with a clear drop (e.g. Mixkit).
</inputs>

<direction>
A 23-second 16:9 promo for a gallery of Claude-made motion videos, built only from the site itself:
its real header, its real grid of autoplaying previews, its real entry page and prompt.
Use the site's skin: near-white page, black pills, one UI font (Geist), and Geist Mono for prompt text.
One accent (red-orange #F0442C), used only for the highlighter, the cursor halo and the dot on the URL.
One continuous camera over a single "world" layer. Never two camera moves at once.
Every clip on screen carries its creator's @handle, exactly as the site shows it.
Banned: a "Generate" button or any feature the site doesn't have, invented numbers, paraphrased
taglines, fades on everything, glass cards, gradients, bouncy type, dead holds.
</direction>

<structure>
120 BPM, 46 beats.
b0–2: frame 0 is one real reel, full-bleed. The camera pulls back until it is just the first
  card on the site's home page. The header, then the tagline's first half, land on b1.
b2–9: hold on the live page: header plus a 3-column masonry of playing previews.
b9–13: the grid scrolls, then the camera whips into one tile until it is full-bleed.
b13–16: the music drops. Three full-res reels from the gallery, one beat each, hard cuts,
  each with a dark handle chip inside the safe area.
b16–21: the last reel shrinks back into its own tile (a match cut). A cursor with an accent halo
  hovers a tile and clicks.
b21–26: that tile blooms into its entry page: the video on the left; author, title,
  Model / Stack / Posted and the prompt on the right.
b26–32: the camera pushes 1.5× into the prompt while the video slides out. A solid accent highlighter
  sweeps one phrase. The cursor presses Copy, which turns into "Copied".
b32–46: the page slides off left. The "Copied" pill lifts, relabels to the URL and docks.
  Then "Prompt Motion" and both verbatim halves of the tagline land, and a rail of real tiles
  rises on the right. The last frame is the poster: two whole tiles, both handles visible.
</structure>

<build>
1. Remotion, 1920x1080, 30 fps. Every cue lives in timeline.ts (in beats) and every string in copy.ts.
   Scenes contain no magic numbers.
2. Scrape the site first: tagline, handles, avatars, preview MP4s and full-res videos, plus one
   entry's prompt. Quote all of it verbatim.
3. Lay out the gallery once in world coordinates. Drive the camera as (focus x, focus y,
   log-scale) tracks. Tile corner radius goes to 0 as a tile reaches full-bleed, so the
   pull-back, the whip-in and the match-cut back are all exact.
4. A tile that plays before the burst uses the same full-res file with an offset startFrom,
   so the whip lands on the burst's first frame.
5. The preview MP4s don't loop cleanly, and many contain hard cuts. Run scdet on every clip.
   Loop only windows with no cut inside them, with a 12-frame dissolve at the seam, and stagger
   each tile's phase so neighbouring tiles never change on the same frame.
6. Use one cursor that homes on the live button position, because the camera keeps creeping
   during holds.
7. Conform the track to 120 BPM with its drop on the burst. Place SFX by their measured peaks.
   Fill the track's own breaks with reversed whooshes into the hits. Mix to −14 LUFS.
8. Render stills at every cut before a full render. Run QA for frozen time and one-frame snaps.
   Then have a fresh critic who didn't build it review the render, and fix what it finds.
</build>

<gotchas>
Real gallery clips carry their own HUDs, cursors and cuts. Keep overlays (handle chips, our cursor)
clear of them, and don't put a cut-heavy clip anywhere the frame should feel calm.
If the page color matches a clip's background, the tile disappears; give tiles a 1px hairline.
On a camera push, check the last frame: the header and meta rows can drift into the edge bands.
</gotchas>Show allThis prompt was taken directly from @antonio_kodheli’s post (opens in a new tab).ModelOpus 5.5StackRemotionPostedOct 6, 2026
````

### Shape morphing through UI states
`twoclipping-5cba86` · @twoclipping · 2026-09-24 · HTML + Playwright · 492 words · tags: Product UI, Charts, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>Show allThis prompt was taken directly from @twoclipping’s post (opens in a new tab).ModelOpus 5.5StackHTML + PlaywrightPostedSep 24, 2026
````

### Morphing UI states loop
`demonugc-4c5753` · @demonugc · 2026-09-25 · HTML, Playwright · 491 words · tags: Product UI, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>Show allThis prompt was taken directly from @demonugc’s post (opens in a new tab).ModelOpus 5.5StackHTML, PlaywrightPostedSep 25, 2026
````

### UGC ad generator promo
`twoclipping-6dd14e` · @twoclipping · 2026-09-23 · HTML + Playwright · 462 words · tags: Product UI, Phone, Photos, Music
Has: banned list, beat grid/BPM, build method

**Creator's original prompt:**

````text
<inputs>
Ask me for: the product name and a one-line promise, 3 to 5 UI moments to show, one accent color, 10 to 20 real vertical clips I own, and a royalty-free song with a clear drop (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
High-end minimal. One idea per shot, lots of empty space, one accent color, one clean sans (Geist or Inter) with tight tracking. Masked type reveals, match cuts, one smooth camera language. Real footage only, never placeholder cards. No full stops in on-screen text.
Banned: shockwave rings, particle bursts, RGB split, camera shake, lens flares, neon glows, grid floors, flashing backgrounds, bouncy easing.
</direction>

<structure>
10 bars at 120 BPM, 2 seconds each.
Bar 1: the hook lands word by word on the beats.
Bar 2: one hook word morphs into the product UI. A cursor types and clicks.
The drop: a circle opens out of the button into a dark scene.
Then one move per bar: a wall of real clips with a scan line and 3 winners, the key output as big type, a 3D carousel of real videos with floor reflections and a motion-blurred whip onto one hero clip, the hero in a phone next to a panel that flips into results, big stats on push cuts, a 3-word ticker, a logo reveal, a fade to black.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside 
http://
window.seek(t): no CSS animations, no timers, no state between frames.
2. Real video: extract clips to 30fps JPEG sequences with ffmpeg and swap img sources per frame. seek awaits the image decodes.
3. Analyze the song with numpy: tempo, beat grid, energy per bar, the drop. Calibrate the grid to the real kick hits. Every cut sits on a downbeat, every UI hit on a beat.
4. Render with Playwright: 3 subframes per frame at t minus, at, and plus 1/240s, then blend with ffmpeg tmix for real motion blur at 60fps.
5. Place each sound effect so its measured peak, not its file start, lands on the event. Keep the effects quiet under the music. Loudnorm to -14 LUFS.
6. Probe 20 or more frames before the full render. Fix anything cluttered, overlapping or hard to read.
</build>

<gotchas>
Never set opacity or filter on a preserve-3d element, because it flattens and both faces show. Fade its wrapper instead. Measure element positions at runtime for match cuts. Only use music and sound effects whose license allows commercial use.
</gotchas>

<start>
Ask me for the inputs, then show me a storyboard with every timing on the beat grid before you write any code.
</start>Show allThis prompt was taken directly from @twoclipping’s post (opens in a new tab).ModelOpus 5.5StackHTML + PlaywrightPostedSep 23, 2026
````

### SaaS launch video
`aschapmann-131210` · @aschapmann · 2026-09-27 · Remotion · 194 words · tags: Product UI, Music
Has: beat grid/BPM, build method

**Creator's original prompt:**

````text
Act as a senior motion designer and build a 30-second launch video for [product] in Remotion, entirely in code so I can edit and re-render it: first read my landing page and codebase to pull the real story, copy, colors, font and logo file (trace the logo to SVG so it stays sharp and can be animated), then write the video as one story (why the market matters, why it's painful today, how [product] fixes it, what you get) in 4 to 5 scenes with one short title each, animate everything like a premium product film (kinetic typography word by word, spring easing, smooth camera pushes and pans, depth and glow, elements that build in on the beat instead of just appearing), keep each scene on screen long enough to read, add one soft sound effect for every element that appears and silence otherwise, and end on a memorable animated logo reveal with the tagline and URL, then render it, check the frames yourself and fix anything that overlaps, clips or feels rushed before showing me the result.Show allThis prompt was taken directly from @aschapmann’s post (opens in a new tab).ModelOpus 5.5StackRemotionPostedSep 27, 2026
````

### Developer portfolio site showreel
`wani-shola-16ca7a` · @wani_shola · 2026-09-26 · Remotion · 189 words · tags: Product UI, Music
Has: beat grid/BPM, build method

**Creator's original prompt:**

````text
Make a showreel-style motion graphics video for my portfolio website, https://t.co/xZFGCqi73s, using Remotion. It should show what I do as a developer relations engineer, like a showreel for my résumé.

- Use as much of the real website as possible: capture the pages and sections in a browser (home, Ask, package pages, Hire, mobile view, dark mode) and animate them inside browser and phone frames.
- Show the site's chat answering real questions about my work, with the questions and answers large and bold. Use only facts and numbers that are on the site.
- Follow premium brand rules: three colours and the site's own fonts, one idea per shot, key objects centred, space to breathe, eased motion only, smooth transitions instead of hard cuts, and a rhythm that speeds up and slows down with the story.
- Add music at about 120 BPM (elite, kinetic, sophisticated) and cut every scene on the beat. No extra sound effects.
- 1920×1080, about 90 to 100 seconds, ending on the website and my contact email.Show allThis prompt was taken directly from @wani_shola’s post (opens in a new tab).ModelOpus 5.5StackRemotionPostedSep 26, 2026
````

### Sahi trading terminal reveal
`dale-vaz-cc612a` · @dale_vaz · 2026-09-25 · JavaScript · One-shot · 129 words · tags: Product UI, Phone, Charts, Particles

**Creator's original prompt:**

````text
create a self contained aesthetically pleasing, breathtaking animation of the Sahi Trading Terminal. it should start with a single dot on a black screen and then have multiple windows show up on the screen such as Charts, Positons , Option Chain, Watchlist. And zoom into and out at multiple scales. Finally the camera zooms out to make the desktop look like a point in space. And then it zooms back in to reveal a mobile screen in landscape mode with a chart in one half and an option chain in another. The video ends in Sjngle Screen Trading on SAHI
use javascript for it. be detailed and accurate. it should be visually stunningShow allThis prompt was taken directly from @dale_vaz’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotStackJavaScriptPostedSep 25, 2026
````

**Full version (structured from the original):**

````text
<direction>
A 30-second, breathtaking animation of the Sahi Trading Terminal, in JavaScript. Be detailed and accurate: real-looking data, real layouts.
The journey: it starts as a single dot on a black screen; windows appear (Charts, Positions, Option Chain, Watchlist); the camera zooms in and out at several scales, then pulls out until the desktop is a point in space, and zooms back in to a phone in landscape with a chart in one half and an option chain in the other.
It ends on "Single Screen Trading on SAHI".
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
100 BPM. Each window lands on a beat; each zoom spans a bar; the pull-out to a point in space is the strongest moment.
</structure>

<build>
1. One HTML file at 1920x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
2. Use spring and exponential easing written as functions of time. Blur follows speed and direction on fast moves.
3. Write a soundtrack in code with the Web Audio API (OfflineAudioContext): a soft hit as each window lands and a swell on the big zoom. Render it to WAV.
4. Render with Playwright at 60fps, 3 subframes per frame blended with ffmpeg tmix for motion blur, then mux the audio.
5. Before the full render, render one frame per beat and look at them. Fix anything cluttered, off the beat, overlapping or hard to read.
</build>

<start>
Show me a storyboard with every scale change, then build it without asking me anything else. Give me the final MP4.
</start>
````

### mdfor.dev product intro video
`ho-ba-f3f0e9` · @HO_BA · 2026-09-26 · effort High · 112 words · tags: Product UI, Code
Has: banned list

**Creator's original prompt:**

````text
Make a dynamic 30-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.  Make it a video to introduce https://t.co/xdCXEdKZRq Use actual product screenshot/logo/assets Must have music and motion must match the music  Do it like a real professional production video, not like a demo or prototype. Add more animation and motion design; avoid using screenshots as raw; instead, break them down into components/icons so we can animate those too. Make the motions more juicy. Use the best motion design techniques you can.Show allThis prompt was taken directly from @HO_BA’s post (opens in a new tab).ModelOpus 5.5EffortHighPostedSep 26, 2026
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second introduction video for my product (paste the URL). Use the product screenshots and assets I attach. Never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Never show a raw screenshot: break screenshots into components and icons and animate those. Juicy motion, like a real production, not a demo.
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

### Visual guides library launch
`techyoutbe-945b56` · @techyoutbe · 2026-09-25 · One-shot · 104 words · tags: Product UI, Diagrams, Code

**Creator's original prompt:**

````text
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things)Show allThis prompt was taken directly from @techyoutbe’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotPostedSep 25, 2026
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second launch video for a well-known SaaS of your choice. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Use its real assets and images, and edit it like the polished launch videos people post on X: features, benefits, quick cuts.
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

### Badge unlock screen animation
`bthreeagency-b9b8d9` · @BThreeAgency · 2026-09-26 · One-shot · 89 words · tags: Product UI, Phone, Particles

**Creator's original prompt:**

````text
Using the linked Figma frame build a badge unlock screen. Match the design exactly. Use the file's assets, lighting, type and layout and add only the motion. Animate the badge so it feels premium and celebratory. Build its scene and then celebrate with gold particles. Treat the badge as a solid 3D object that tilts toward the
cursor following the rules of physics. Keep it fast and smooth, it should not be bouncy.Show allThis prompt was taken directly from @BThreeAgency’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotPostedSep 26, 2026
````

**Full version (structured from the original):**

````text
<direction>
Build a badge unlock screen from the Figma frame I link. Match the design exactly: use the file's assets, lighting, type and layout, and add only the motion.
The badge unlock should feel premium and celebratory: build its scene, reveal it, then celebrate with gold particles.
Treat the badge as a solid 3D object that tilts toward the cursor following real physics (mass, damping), fast and smooth, never bouncy.
Banned: overshoot, wobble, glows the design doesn't have, anything that looks like a template.
</direction>

<structure>
The scene builds in, the badge arrives and settles with weight, the celebration plays once, then the badge stays interactive.
</structure>

<build>
1. One HTML file. Export the frame's assets from Figma and place them exactly.
2. Drive the tilt with a critically damped spring toward the cursor, so it never overshoots.
3. Check it at 60fps and fix any frame that stutters or doesn't match the design.
</build>

<start>
Tell me which assets you exported and how the sequence runs, then build it without asking me anything else.
</start>
````

### Supademo launch video
`jhylee95-e1152f` · @jhylee95 · 2026-09-25 · effort Max · One-shot · 83 words · tags: Product UI, Kinetic type, Music
Has: beat grid/BPM

**Creator's original prompt:**

````text
You're a world-class motion designer building a Supademo launch video. Research and land our core value and narrative. Scenes should be dynamic and confident: hook in the first second, then distinct beats for product proof and AI. Brand-accurate UI, type, color, and motion. Score the music so every cut, animation hit, and scene change lands on a beat or drop; retimed until synced. Social energy, quick cutsShow allThis prompt was taken directly from @jhylee95’s post (opens in a new tab).ModelOpus 5.5EffortMaxIterationsOne-shotPostedSep 25, 2026
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second launch video for Supademo. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Hook in the first second, then distinct beats for product proof and the AI. Social energy, quick cuts. Score the music so every cut and hit lands on a beat or drop.
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

### org2html product showreel
`kyonax-on-tech-aabc1d` · @kyonax_on_tech · 2026-09-25 · One-shot · 75 words · tags: Product UI, Code

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.

Make sure to showcase properly the usecases, the flow, properly show everything on how it works, also the ascii logo of this is on the kyo-web-online, keep in mind also the color palette.Show allThis prompt was taken directly from @kyonax_on_tech’s post (opens in a new tab).ModelOpus 5.5IterationsOne-shotPostedSep 25, 2026
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

### DistilBook product explainer
`sudo-kiran-6609ed` · @sudo_kiran · 2026-09-26 · 64 words · tags: Product UI, Diagrams

**Creator's original prompt:**

````text
create best motion graphics explainer of the (your product) with very good script and good design colors and good music make sure the video should be incredible and people should feels like watch it many times.. it has to be in 30 seconds good and very intresting, it has to be best of the best of the best of the best video
(product link)
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second explainer for your product (add the link). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. A strong script, good colors and good music: the kind of video people watch more than once.
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

### Portfolio motion reel
`heyiammallik-e72d17` · @heyiammallik · 2026-09-26 · One-shot · 60 words · tags: Product UI, Kinetic type, Particles

**Creator's original prompt:**

````text
you are a pro motion designer. analyze my portfolio and make a ~30 second video from it. check what are the recent trending techniques used for motion and sound design. question your strategy and plan, if it doesn't feel like done by a pro designer, start over. every frame matters from the first frame to the final frame. go crazy
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second portfolio film for my portfolio. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Check which motion and sound design techniques are trending now. Question your plan: if it doesn't feel like a pro made it, start over. Every frame matters.
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

### Datagran ChatGPT ads explainer
`charlesmendez-73b6e4` · @charlesmendez · 2026-09-23 · 53 words · tags: Product UI, Phone, Charts

**Creator's original prompt:**

````text
I Want you to make a modern slick and punchy video for https://t.co/a3zrq7DV3N with an example of a user creating a chatgpt ads campaign, then connecting their metrics, understanding attribution, then connecting a voice agent to it, the agent responding, then doing follow up, adding humans in the loop and then providing analytics.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 45-second product walkthrough for the product at the link I give you. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on one user's journey: creating a ChatGPT ads campaign, connecting their metrics, understanding attribution, connecting a voice agent that responds and follows up, adding humans in the loop, then analytics.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Modern, slick and punchy.
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

### Email verification tool promo
`kmasiff-cc72cb` · @KmAsiff · 2026-09-26 · effort High · 47 words · tags: Product UI

**Creator's original prompt:**

````text
make a dynamic 20-second motion graphics video that shows what an incredible our email verify tool is, put all the use case you can imagine. go all out'
i want you to make it really modern and saas style. inspiration is yc videos and claude social videos
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: modern SaaS, inspired by YC launch videos and Claude's social videos), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second promo for our email verification tool. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on every use case you can think of.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: modern SaaS, inspired by YC launch videos and Claude's social videos. One typeface, one accent color used only on the through-line object and the key word, lots of empty space.
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

### ViralGrow product promo
`samuel-yostt-891f87` · @samuel_yostt · 2026-10-01 · effort Max · 45 words · tags: Product UI, Phone, Photos

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume. go all out.
This video will be same styling as landing page. showcasing viralgrow. be creative with what you show for viralgrow
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for viralgrow. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Match the landing page's styling, and be creative with what you show.
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

### Stock analysis app promo
`aistocksavvy-3fb9f5` · @AIStockSavvy · 2026-09-25 · 43 words · tags: Product UI, Charts

**Creator's original prompt:**

````text
Create a bold, dynamic 15-second motion graphics video that showcases your best motion design skills as if it’s the highlight of your portfolio for a dream job. Bring sharp timing, smooth transitions, and standout visuals. Push your creativity and make every second count.
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

### Commotion app showreel
`amol909s-27533e` · @Amol909S · 2026-09-25 · effort Medium · 43 words · tags: Product UI, Phone, Code

**Creator's original prompt:**

````text
make a dynamic 20s motion graphics video that shows what an incredible motion designer you are, like it's your showreel for this app commotion, highlighting tiling layout, auto model classifer and other features you deem fit to be in video. Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second showreel for the app Commotion. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on the tiling layout, the auto model classifier and any other features worth showing.
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

### Database client launch video
`iammxfschr-d68f90` · @iamMXFSCHR · 2026-09-25 · A few rounds · 41 words · tags: Product UI, Code

**Creator's original prompt:**

````text
nice. wir brauchen ein launch video für den release. kannst du das machen? so a la anthropic like? hab da was gelesen und der prompt war ""make a modern slick and punchy video for a modern startup that works on inference"
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second launch video for our inference startup's release. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Anthropic-like: modern, slick and punchy.
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

### Jev engineering showreel
`polydao-7a572b` · @polydao · 2026-09-26 · effort Max · One-shot · 37 words · tags: Product UI, Kinetic type, Music

**Creator's original prompt:**

````text
Make a dynamic [24]-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume. Go all out.

Only about [TOPIC]. Style: [BRAND COLORS], sound synced to the cuts.
````

**Full version (structured from the original):**

````text
<direction>
A 24-second motion design showreel that proves you are a world-class motion designer, built around your topic. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of your brand colors, one consistent camera language.
Sound is synced to every cut.
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

### Sherwood agentic hedge fund explainer
`imthatcarlos-e04bfe` · @imthatcarlos · 2026-09-23 · Remotion · One-shot · 37 words · tags: Product UI, Kinetic type, Photos

**Creator's original prompt:**

````text
make a modern slick and punchy video for sherwood protocol. feel free to take branding or components from the landing page or app. the goal is to highlight how it enables agentic hedge funds, explaining it simply
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 45-second explainer for Sherwood Protocol. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Focus on how it enables agentic hedge funds, explained simply.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Modern, slick and punchy; take branding and components from the landing page and app.
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

### Lidlezz app promo
`cansincengiz-me-cf68dd` · @cansincengiz_me · 2026-09-25 · 37 words · tags: Product UI

**Creator's original prompt:**

````text
merak ediyorum ne kadar iyi bir hareketli grafik tasarımcısısın. Bunu bana kanıtlamak için 15 saniye sürecek bir hareketli grafik videosu istiyorum senden. Bu video https://t.co/TdKZEIYaxO 'i tanıtacak ve x üzerinde 10.000 kişinin karşısına çıkacak. Elinden geleni yap
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
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. 10,000 people will see it on X, so it has to stop the scroll in the first second.
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
1. One HTML file at 1080x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Tennis game launch video
`deifosv-04e4d3` · @deifosv · 2026-09-24 · 36 words · tags: Product UI, Phone

**Creator's original prompt:**

````text
Create a high energy launch video, showing live stats from the website, show that users can play on desktop and mobile and multiple themes, if need, give me a prompt to generate the song using Suno
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second launch video for toptennisgame. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on live stats from the website, playing on desktop and mobile, and the multiple themes.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. High energy. If the music needs a real song, also give me a Suno prompt for it.
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

### Dub promo video
`steventey-0d20e4` · @steventey · 2026-09-25 · effort High · One-shot · 35 words · tags: Product UI, Charts

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.

it should be a launch saas video for https://dub.co
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second product film for Dub (https://dub.co). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. It's a SaaS launch: the product UI is the hero.
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

### Voice agent SaaS launch
`fractadev-149adc` · @FractaDev · 2026-09-26 · 35 words · tags: Product UI, Charts

**Creator's original prompt:**

````text
Analyze my frontend project, use the actual components from the product, and create a dynamic motion graphics video that showcases and sells my SaaS. Make it feel like a high-end product launch. Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second high-end launch film for my SaaS. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Use the actual components from the frontend.
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

### SaaS product launch video
`xelandre-363f00` · @xelandre__ · 2026-09-25 · HTML/JS, Playwright, ffmpeg · One-shot · 34 words · tags: Product UI
Has: build method

**Creator's original prompt:**

````text
Code-driven animation: an HTML/JS page where every frame is calculated from the time, captured frame by frame with headless Chrome (Playwright), then assembled with ffmpeg into an MP4 with motion blur and code-generated sound.
````

**Full version (structured from the original):**

````text
<direction>
A 15-second motion design showreel that proves you are a world-class motion designer, built around your choice. Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
One typeface, a palette of at most three colors plus black and white, one consistent camera language.
It's code-driven: an HTML/JS page where every frame is computed from time, captured with headless Chrome, assembled with ffmpeg with motion blur, and sound generated in code.
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

### Browser automation skill launch
`hqmank-7c61f1` · @hqmank · 2026-09-26 · 33 words · tags: Product UI, Music, Code

**Creator's original prompt:**

````text
Make a dynamic 20-second motion graphics launch video for my open-source project jev-browser-skill ('Give a site. Write a goal. Jev clicks.'), like it's the hero video on its GitHub README. Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second launch video for jev-browser-skill, an open-source project: "Give a site. Write a goal. Jev clicks.". Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. It's the hero video on the GitHub README, so it has to work silently and loop.
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

### Product intro synced to music
`bogdandragomir-35e024` · @BogdanDragomir · 2026-09-27 · 33 words · tags: Product UI, Particles, Music

**Creator's original prompt:**

````text
Create an intro for https://t.co/wQXZTaqf1b highlighting what it does.

Create the music too and make sure the video is synced with it.

Give your best, Ultracode, as if it’s your portfolio master piece.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second intro for my site (paste the URL). Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Focus on what it does.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Compose the music too, and sync every cut to it. Treat it as your portfolio masterpiece.
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

### Website analyzer product promo
`en-ra-81c6dd` · @en______ra · 2026-09-27 · One-shot · 33 words · tags: Product UI

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video for RedSeed AI (Replace with your Project) that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for RedSeed AI (replace with your project). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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
1. One HTML file at 1080x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Motion designer showreel
`danilowm-d3720d` · @danilowm · 2026-09-26 · HyperFrames · 33 words · tags: Product UI, Charts, Kinetic type
Has: build method

**Creator's original prompt:**

````text
/hyperframes make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.  use todo o contexto do projeto
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

### Fitters Bible app promo
`adamdesgns-478d6d` · @Adamdesgns · 2026-09-25 · One-shot · 30 words · tags: Product UI, Phone, Diagrams

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out. (About the pipefitters bible)
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

### Amazon wholesale pitch video
`ceowinkz-7c776b` · @ceowinkz · 2026-09-26 · One-shot · 30 words · tags: Product UI, Kinetic type

**Creator's original prompt:**

````text
make a dynamic 15 second motion graphics video pitching my Amazon wholesale company, Winkz Enterprises, to a brand. show why they should let us sell their products. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second pitch to a brand for Winkz Enterprises, my Amazon wholesale company. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Focus on why a brand should let us sell their products.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and how to get in touch.
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

### Chunku product promo
`reyzostyle-b55864` · @reyzostyle · 2026-09-30 · HyperFrames · One-shot · 29 words · tags: Product UI, Kinetic type

**Creator's original prompt:**

````text
make a dynamic 10 second motion graphics video about https://t.co/Zi6zrTvzqI that shows what an incredible motion designer you are, like its your showreel for a resume. go all out
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 10-second showreel for my site (paste the URL). Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
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

### Bold Pilot SEO promo
`utopyaszx-1b2f94` · @utopyaszx · 2026-09-28 · effort Medium · 29 words · tags: Product UI, Charts, Kinetic type

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video for Bold Pilot that shows what an incredible motion designer you are, like it's your showreel for a resume. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for Bold Pilot. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Dubz Up motion showreel
`devius-maximus-beab45` · @Devius_Maximus · 2026-09-29 · 29 words · tags: Product UI, Phone, Kinetic type, Characters

**Creator's original prompt:**

````text
make a dynamic motion graphics video for our project dubz up, show what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for our project, dubz up. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Motion designer showreel
`kangaroohere-b10f8d` · @KangarooHere · 2026-09-25 · effort Medium · 29 words · tags: Product UI, Phone, Charts, Kinetic type

**Creator's original prompt:**

````text
make a dynamic 20-second motion graphics video for my newsletter that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second showreel for my newsletter. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on what the newsletter is about and why to subscribe.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and how to subscribe.
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

### sweetRegret app update reel
`thilina-a-891c09` · @thilina_a · 2026-09-28 · 29 words · tags: Product UI, Phone, Characters

**Creator's original prompt:**

````text
make a dynamic 25-second motion graphics video that shows what an incredible motion designer you are. Highlight the recent changes [1.3, 1.4] we made with the last few updates.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 25-second update video for our product. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
Focus on the recent changes in versions 1.3 and 1.4.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and the version number.
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

### Trezio app motion reel
`agonaliu-466a8f` · @agonaliu_ · 2026-09-27 · One-shot · 28 words · tags: Product UI, Kinetic type

**Creator's original prompt:**

````text
Make a dynamic 15-second motion graphics video for Trezio app that shows what an incredible motion designer you are, like it's your showreel for a résumé. Get it!
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for the Trezio app. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Bento.surf product video
`bizibeast-10f264` · @bizibeast · 2026-09-26 · One-shot · 28 words · tags: Product UI, Phone

**Creator's original prompt:**

````text
Research Bento.surf. Make a dynamic 40-second motion graphics video on Bento.surf that shows what an incredible motion designer you are. like it's your showreel - Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 40-second product film for Bento.surf. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Distilbook product video
`ajith-io-c52e09` · @ajith_io · 2026-09-25 · One-shot · 27 words · tags: Product UI

**Creator's original prompt:**

````text
Research Distilbook.Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
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

### Distilbook motion showreel
`itisrazak-3ad902` · @itisRazak · 2026-09-25 · One-shot · 27 words · tags: Product UI, Kinetic type, Particles, Music

**Creator's original prompt:**

````text
Research Distilbook.Make a dynamic 40-second motion graphics video on Distilbook that shows what an incredible motion designer you are. like it's your showreel - Go all out.
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

### Whiteboard skill tutorial
`lemomo-ai-0d9cff` · @lemomo_ai · 2026-09-27 · One-shot · 27 words · tags: Product UI, Diagrams

**Creator's original prompt:**

````text
Create a tutorial video explaining how to create videos using Lemo-Opuscar skill (Opus 5.5) , in a [Whiteboard Explainer] style.  One prompt, one answer, then ship film.
````

**Full version (structured from the original):**

````text
<direction>
A 90-second explainer on how to create videos with the Lemo-Opuscar skill on Opus 5.5: one prompt, one answer, then ship the film for a creator trying it for the first time. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: a whiteboard explainer: a marker draws each step as it's explained. Narrate it with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural), with subtitles synced line by line.
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

### Second brain service promo
`theviableedge-9065be` · @TheViableEdge · 2026-09-27 · Remotion · One-shot · 27 words · tags: Product UI, Code

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, and can be the hero asset for the course landing page.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second hero video for my course. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on what the course gives you.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. It's the hero asset on the course landing page, so it has to work silently and loop.
Motion rules: springs with at most a small overshoot; nothing appears from nothing (it grows, unfolds or is revealed by a mask); the camera never sits still (push from 1.0 to 1.04 across a scene, and start each scene at the zoom the last one ended on); something changes on every beat.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM. Write a timed storyboard first, beat by beat, then build exactly that.
Hook (first bar): the problem in three to five words, in big type that the through-line object interrupts.
Middle: three or four moments of the product doing what it does best. Each begins with the through-line object turning into the next UI element and lands one readable idea.
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and the course name.
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

### Enxovaly baby app promo
`gabrielbuzziv-4ff0c6` · @gabrielbuzziv · 2026-09-25 · HyperFrames · 26 words · tags: Product UI, Phone

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

### Travel visa service promo
`thismacapital-dfba20` · @thismacapital · 2026-09-26 · A few rounds · 26 words · tags: Product UI, Kinetic type, Photos

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

### AjustaCV Pro pricing promo
`thayto-dev-44b911` · @thayto_dev · 2026-09-27 · HyperFrames · effort Max · 26 words · tags: Product UI

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

### SuperX feature release teaser
`robj3d3-b18fad` · @robj3d3 · 2026-10-05 · effort Max · 26 words · tags: Product UI

**Creator's original prompt:**

````text
look at my product roadmap and make a dynamic 15-second motion graphics video that teases the next feature release. go all out and hold nothing back
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second teaser for the next feature on my product roadmap. Read the roadmap I give you first and pick the feature that's next. Tease it without promising dates or details the roadmap doesn't.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and "coming soon" and the product's name.
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

### Muse connector tracker promo
`elliot-garreffa-f334bc` · @elliot_garreffa · 2026-09-27 · Remotion · 26 words · tags: Product UI

**Creator's original prompt:**

````text
make this a dynamic motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for this project. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
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

### Crux motion design showreel
`marouanegazouzi-6071d5` · @marouanegazouzi · 2026-09-25 · effort Max · 26 words · tags: Product UI, Charts, Kinetic type, Music

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

### Ondefica app motion reel
`jesscaroline7-1ff7cb` · @jesscaroline7 · 2026-09-27 · HyperFrames · effort Max · A few rounds · 25 words · tags: Product UI, Phone, Charts, Kinetic type

**Creator's original prompt:**

````text
make a dynamic motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
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

### FundMyCompute platform overview
`jayscambler-3f8889` · @JayScambler · 2026-09-28 · 25 words · tags: Product UI, Diagrams

**Creator's original prompt:**

````text
make a dynamic 20-second motion graphics video for fundmycompute that gives an overview of the platform and shows what an incredible motion designer you are
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second overview for fundmycompute. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on an overview of the platform.
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

### Quetzal social app reel
`miskinho-443898` · @miskinho_ · 2026-09-26 · One-shot · 25 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
make  1 dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for Quetzal. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for Quetzal. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### founder.page launch video
`ratheejaisal-1f4538` · @RatheeJaisal · 2026-09-26 · One-shot · 24 words · tags: Product UI, Charts

**Creator's original prompt:**

````text
build me a beautiful launch video 20 seconds or under that shows all our key features, make it fast paced and fit our brand
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second launch video for our product. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Focus on all our key features, fast paced.
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

### Ren app launch video
`macrohou-33959d` · @macrohou · 2026-09-25 · One-shot · 24 words · tags: Product UI, Phone, Charts

**Creator's original prompt:**

````text
[gave access to Ren repo] Make a dynamic 30-second motion graphics video for Ren that shows off your motion and sound design. Go crazy.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second showreel for Ren. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Show off your sound design as much as your motion. Go crazy.
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

### QuickDesign brand promo
`quickdesignio-dd93d0` · @quickdesignio · 2026-09-25 · 24 words · tags: Product UI, Kinetic type, Music

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible quickdesign is! and also  shows what an incredible motion designer you are!
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for quickdesign. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### DistilBook motion explainer
`sudo-kiran-b055de` · @sudo_kiran · 2026-09-29 · 23 words · tags: Product UI, Diagrams

**Creator's original prompt:**

````text
make a dynamic 30-seconds motion graphic video about the distilbook like a product explainer the video has to be very incredible (product url)
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second product explainer for Distilbook (add its URL). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### DistilBook product explainer
`sudo-kiran-4f8b59` · @sudo_kiran · 2026-09-25 · 23 words · tags: Product UI

**Creator's original prompt:**

````text
make a dynamic 30-seconds motion graphic video about the distilbook like a product explainer the video has to be very incredible
(product url)
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second product explainer for Distilbook (add its URL). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Gene Spectra promo
`madebyjmayala-b9204d` · @madebyjmayala · 2026-09-25 · One-shot · 23 words · tags: Product UI

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video promo about gene spectra, use assets from the current live site where relevant. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for Gene Spectra. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
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

### Alan agent platform promo
`prasad-pilla-2c0cba` · @prasad_pilla · 2026-09-26 · 22 words · tags: Product UI, Diagrams

**Creator's original prompt:**

````text
make a dynamic 15 second motion graphics video that shows what an incredible motion designer you are, for @tryAlanAI. go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for @tryAlanAI. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Tented image gen product video
`justincooperman-e7bbc4` · @justincooperman · 2026-09-24 · Blender · One-shot · 21 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
Make an animated clip about Tented's image gen capabilities where users ask for branded images and see them added to content
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second product clip for Tented. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on its image generation: users ask for branded images and see them added to their content.
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

### Photo retouch app promo
`oliahmed205-3e31c4` · @oliahmed205 · 2026-09-28 · 21 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
Make me a 15 sec promtional video for my product using product screenshots and assests, Be a Highly preofessional Video Editor.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for my product. Use the product screenshots and assets I attach. Never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Edit it like a highly professional video editor.
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

### Personal skills showreel
`ibrahimwasim240-809370` · @ibrahimwasim240 · 2026-09-26 · effort Max · One-shot · 21 words · tags: Product UI, Particles, Characters

**Creator's original prompt:**

````text
make a dynamic 25 second motion graphics video that shows My skills like a showreel for a resume. go all out
````

**Full version (structured from the original):**

````text
<direction>
A 25-second motion design showreel that proves you are a world-class motion designer, built around my skills (list them). Pick one visual concept from it and commit to it: name it in one line before you start. Every shot is made out of the previous one: shapes, type and color transform into the next scene instead of cutting or fading.
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

### Email tool promo reel
`melvynx-6cde6c` · @melvynx · 2026-09-26 · 19 words · tags: Product UI, Kinetic type

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are for <website url>
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for my website (paste the URL). Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
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

### Supasito launch video
`wozu-co-242285` · @wozu_co · 2026-10-01 · 19 words · tags: Product UI

**Creator's original prompt:**

````text
please create me a motion design / launch video for supasito dot com it should be under 15 seconds.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second launch video for supasito.com. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### GenVizu product launch
`listudio-820c7b` · @listudio · 2026-09-28 · 19 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
Investigate my project GenVizu: https://t.co/5RaGMqn7rF Create a video for product release. Used for Hero and GTM materials on websites.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second product release video for my project, GenVizu (paste the URL). Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. It's for hero sections and go-to-market materials on websites.
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

### MotionSites one million visitors
`viktoroddy-98c1d8` · @viktoroddy · 2026-09-26 · 18 words · tags: Product UI, Charts, Code

**Creator's original prompt:**

````text
Create a launch video for MotionSites AI, just hit 1 million monthly visitors after 8 months after launch.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second launch video for MotionSites AI. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on the milestone: 1 million monthly visitors, 8 months after launch.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and the milestone and a thank-you.
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

### Tally product demo
`visheshbaghell-3aba37` · @VisheshBaghell · 2026-09-26 · 18 words · tags: Product UI, Kinetic type

**Creator's original prompt:**

````text
build me a product demo for my site using /brag skill. make sure to emphasize on all features
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 45-second product demo for my site. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Focus on every feature.
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

### Pixelup Labs studio showreel
`arjunsh1607-93005d` · @arjunsh1607 · 2026-09-27 · 17 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
create a 15 sec motion graphics showreel for @pixeluplabs, be extremely detail oriented and go all out
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for @pixeluplabs. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Be extremely detail oriented.
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

### Norilu product launch video
`sachaarbonel-8f14f4` · @sachaarbonel · 2026-09-25 · 17 words · tags: Product UI

**Creator's original prompt:**

````text
Create a professional product launch video with motion graphics. You have access to the designs in pen
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second launch video for our product. Work from the designs I give you access to: the real screens, components, colors and type. Never invent features.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. The designs are in my design tool; use the real screens.
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

### AllInvestView product promo
`rammanq-f5a90f` · @rammanq · 2026-09-26 · 17 words · tags: Product UI, Phone, Charts

**Creator's original prompt:**

````text
Make a dynamic motion graphics video that shows what an incredible platform AllInvestView is. Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for AllInvestView. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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
1. One HTML file at 1080x1080. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Design portfolio video reel
`kikelopezdesign-7cc9e8` · @kikelopezdesign · 2026-09-25 · 16 words · tags: Product UI, Phone

**Creator's original prompt:**

````text
Make a 20 second video about my portfolio from scratch, using only the portfolio's own resources
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second portfolio film for my portfolio (paste the URL). Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Use only the portfolio's own resources.
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

### YouTube transcript product ad
`tstfully-0aa6b4` · @tstfully · 2026-09-27 · 14 words · tags: Product UI, Kinetic type

**Creator's original prompt:**

````text
make a 15-second motion graphics product ad: paste a YouTube video, get every word.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second product ad for a tool where you paste a YouTube video and get every word. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on paste a YouTube video, get every word.
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

### CloudJoi search showcase
`lester-tyy-f897f7` · @lester_tyy · 2026-09-26 · Remotion · One-shot · 14 words · tags: Product UI, Photos
Has: build method

**Creator's original prompt:**

````text
Study how this https://t.co/SR0AyULLNp works and use Remotion to make a product showcase video.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second product showcase for the product at the link I give you. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Study how it works first.
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

### Mascot referral program promo
`paulo-kombucha-96431c` · @paulo_kombucha · 2026-09-28 · 13 words · tags: Product UI, Characters

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video to talk about our referral program
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for our referral program. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Focus on how the referral program works and what you get.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and how to start referring.
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

### Five scroll-based sections
`ercankeskinx-ec2568` · @ercankeskinx · 2026-09-24 · One-shot · 12 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
Build 5 completely different scroll-based sections, decide the context & layout yourself.
````

**Full version (structured from the original):**

````text
<direction>
Build 5 completely different scroll-driven sections, each on its own context and layout that you choose: your choice.
Each one should feel like a different studio made it: its own typography, color, and way of tying motion to the scroll.
Motion is driven by scroll position, scrubbable both ways, never by timers.
Banned: parallax for its own sake, fade-up on everything, glows, generic gradients, anything that looks like a template.
</direction>

<structure>
One section per screen-and-a-half of scroll, each with a clear beginning, middle and end tied to its scroll range.
</structure>

<build>
1. One HTML file, no libraries. Every style is computed from the section's scroll progress (0 to 1).
2. Smooth the scroll value with a critically damped spring so it settles without bounce.
3. Check every section at 1440 and 390 wide, scrolling forward and back, and fix anything that jumps.
</build>

<start>
List the 5 contexts and layouts you picked, then build it without asking me anything else.
</start>
````

### AIsa API key promo
`0xfemyn-e114d3` · @0xfemyn · 2026-09-26 · One-shot · 12 words · tags: Product UI

**Creator's original prompt:**

````text
make a dynamic 15-second motion graphics video for AIsa. Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second promo for AIsa. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Step race app promo
`marklaunches-3b9492` · @marklaunches · 2026-09-26 · One-shot · 11 words · tags: Product UI

**Creator's original prompt:**

````text
build me an incredible video for my app. make it emotional.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second emotional film for my app. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
Focus on the feeling the app gives its users.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Make it emotional: real moments, quiet type, music that swells once.
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
1. One HTML file at 1080x1350. Every style is computed from time inside window.seek(t): no CSS animations, no timers, no state carried between frames.
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

### Sotto reading app explainer
`1stnoel-c20a89` · @1stnoel_ · 2026-09-24 · 11 words · tags: Product UI, Phone

**Creator's original prompt:**

````text
Make a 1-minute educational video about https://readsotto.app/ with synthesized voice narration.
````

**Full version (structured from the original):**

````text
<direction>
A 1-minute explainer on Sotto (https://readsotto.app): what it is and how to use it for someone who's never seen it. Research it first and keep every fact right; never invent numbers or quotes.
Build the whole explanation as one diagram in one continuous space: the camera zooms into a part to explain it and pulls back to show how it fits, so the viewer always knows where they are. Every idea gets a picture before it gets words, and labels sit on the thing they name, never in a legend.
Style: clean product motion graphics using its real screens. Narrate it with a clear synthesized voice (e.g. edge-tts en-US-AriaNeural), with subtitles synced line by line.
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

### PicTwin AI app ad
`l3d1c-0e35a3` · @l3d1c · 2026-09-25 · 11 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
create a motion design prompt for an ad for our site
````

**Full version (structured from the original):**

````text
<direction>
Write a motion design prompt that I can give to Opus 5.5 to make a 15-second ad for our site (paste the URL).
Research the site first: what it does, who it's for, its real interface, colors and type.
The prompt you write should give real direction: one visual concept, a beat grid, the scenes in order, what's banned, and how to build and render it (one HTML file, every frame a function of time, rendered with Playwright with motion blur).
</direction>

<structure>
Return the prompt in sections: direction, structure, build, start.
</structure>

<start>
Show me what you found about the site, then the prompt.
</start>
````

### Studio website showreel
`andginja-333d32` · @andginja · 2026-09-25 · One-shot · 10 words · tags: Product UI, Photos

**Creator's original prompt:**

````text
make a 15-second showreel about my website. Go all out.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second showreel for my website (paste the URL). Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
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

### AgentHud project motion video
`jazzen-chen-4542ae` · @Jazzen_Chen · 2026-09-26 · effort Max · One-shot · 10 words · tags: Product UI, Code

**Creator's original prompt:**

````text
make a dynamic motion graphics video about my project AgentHud.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second motion graphics video for my project, AgentHud. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
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

### FigPad product promo
`ai-baymax-0ef9dd` · @Ai_Baymax · 2026-09-25 · One-shot · 10 words · tags: Product UI

**Creator's original prompt:**

````text
make a 1-min promo for this product from the codebase.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 60-second promo for this product. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
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

### ocrX app launch video
`mehul4795-4a7007` · @mehul4795 · 2026-09-25 · 9 words · tags: Product UI

**Creator's original prompt:**

````text
Create a product launch video for ocrX Android app.
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second launch video for the ocrX Android app. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Brieform product presentation
`majorbaguette-fb11d7` · @MajorBaguette · 2026-09-26 · Remotion · 9 words · tags: Product UI

**Creator's original prompt:**

````text
make a presentation video for Brieform, 30 seconds long
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second presentation video for Brieform. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Three.js Skyraider aircraft model
`buildfastwithai-ed9447` · @BuildFastWithAI · 2026-09-24 · Three.js · effort High · One-shot · 7 words · tags: Product UI
Has: build method

**Creator's original prompt:**

````text
Build a Douglas A-1H Skyraider in Three.js
````

**Full version (structured from the original):**

````text
<direction>
Build a Douglas A-1H Skyraider as one self-contained HTML page with three.js.
Style: a faithful scale model: the right silhouette, the big radial engine and four-blade propeller, Navy grey over white, panel lines and rivets.
Design the signature shot first, the one frame someone would screenshot, and build everything toward it.
Camera: a film camera, not orbit controls. Every shot uses one named move (dolly, crane, orbit, push-in, rack focus), eased in and out, and the camera never passes through geometry.
Light and materials: a key, fill and rim light with soft shadows, an environment map for reflections, fog for depth, physically based materials with varied roughness, ACES tone mapping. Nothing should look like a default material.
Motion: things react to each other (what's hit moves, what's near lights up), driven by springs or simple physics, never linear tweens.
Banned: default materials and lighting, floating text labels, glows on everything, a slowly spinning object as the whole idea, anything that looks like a tech demo.
</direction>

<structure>
It flies a slow orbit with the propeller spinning; the camera can circle it and come in close on the engine and cockpit.
Plan it as a shot list: an establishing wide, three to five shots that each have one camera move and one event, the signature shot, and a final wide that shows it in a new light.
</structure>

<build>
1. One HTML file, three.js from a CDN, no build step. Model everything in code; no downloaded models or textures.
2. Use MeshPhysicalMaterial, a PMREM environment from RoomEnvironment, soft shadows, ACES tone mapping and antialiasing. Add depth of field only on shots that need it.
3. Hold 60fps on a laptop.
4. Add a ?render mode where every frame is computed from time (seeded randomness, no clock), so it can be captured with Playwright into an MP4 at 1920x1080.
5. Capture one frame per shot, look at it, and fix anything flat, aliased, clipping or hard to read.
</build>

<gotchas>
Set shadow bias, or surfaces get striped acne. Keep near and far planes tight, or distant surfaces flicker. Seed every random number, or the render won't match the preview.
</gotchas>

<start>
Describe the signature shot and the shot list in a few lines, then build it without asking me anything else. Give me the HTML file and a 20-second MP4 captured with the ?render mode.
</start>
````

### Matra caption app promo
`gautam-mer1-2ae354` · @gautam_mer1 · 2026-09-26 · Remotion, React · One-shot · 7 words · tags: Product UI, Phone, Photos

**Creator's original prompt:**

````text
an Apple-style 30s video of my app
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second Apple-style film for my app. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. Apple keynote feel: white space, one idea per shot, the device as the hero.
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

### Parenting app hype video
`francoxavier33-d2dfd2` · @francoxavier33 · 2026-09-25 · Remotion · A few rounds · 7 words · tags: Product UI, Phone, Kinetic type

**Creator's original prompt:**

````text
make a hype demo/launch video for @momwiseai
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 20-second hype launch video for @momwiseai. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
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

### Claude self-promo spot
`slvdev-64c45a` · @slvDev · 2026-09-25 · effort Max · One-shot · 5 words · tags: Product UI, Phone, Kinetic type

**Creator's original prompt:**

````text
create 15+ sec self-promotion promo
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second self-promotion promo for me and what I do. Use the live site's real assets (logo, screenshots, copy) wherever they fit. Never invent features or numbers.
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
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and where to find me.
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

### Lism CSS 1.0 release video
`ddryo-loos-300829` · @ddryo_loos · 2026-10-02 · 4 words · tags: Product UI, Code

**Creator's original prompt:**

````text
Lism CSS ver.1.0 をリリースする時にSNSに動画を投稿したい。あなたがどれほど素晴らしいモーションデザイナーかを示す、シンプルかつダイナミックさもある15秒のモーショングラフィックスビデオを作成してください。
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 15-second release video for Lism CSS ver.1.0. Research it first: what it does, who it's for, its real interface and its brand. Use what you find; never invent screens, features or numbers.
Pick one through-line object from the product itself (its cursor, a key button, the logo's mark, a single data point) and make every scene a transformation of it: it starts in the UI, changes shape or role in each scene, and becomes the logo on the end card. Name it before you storyboard.
Rebuild the real UI as vector layers so its parts can move on their own; never slide a flat screenshot in. A cursor drives every interaction with real clicks and drags, and the camera zooms screen-studio style so each moment fills the frame.
Brand: its own colors and typeface. One typeface, one accent color used only on the through-line object and the key word, lots of empty space. For social media: simple yet dynamic.
Motion rules: springs with at most a small overshoot; nothing appears from nothing (it grows, unfolds or is revealed by a mask); the camera never sits still (push from 1.0 to 1.04 across a scene, and start each scene at the zoom the last one ended on); something changes on every beat.
Banned: particle bursts, glows, lens flares, camera shake, RGB split, crossfades, generic gradients, bouncy easing, holds longer than half a second, anything that looks like a template.
</direction>

<structure>
120 BPM. Write a timed storyboard first, beat by beat, then build exactly that.
Hook (first bar): the problem in three to five words, in big type that the through-line object interrupts.
Middle: three or four moments of the product doing what it does best. Each begins with the through-line object turning into the next UI element and lands one readable idea.
Payoff (last bars): the strongest moment on the biggest beat, then the through-line object becomes the logo and the end card: the name and the version number and where to get it.
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

### AI Arena product promo
`ezshine-c90d73` · @ezshine · 2026-09-25 · One-shot · 4 words · tags: Product UI, Code

**Creator's original prompt:**

````text
设计个动画，介绍本项目的各项特性，像是专业的产品介绍宣传片，最后要生成 16:9 的mp4 视频
````

**Full version (structured from the original):**

````text
<inputs>
Ask me for anything below I haven't given you. If I skip it, use the default: 3 to 6 screenshots of the real interface (default: capture them yourself), the logo (default: take it from the site), brand colors and font (default: its own colors and typeface), and a royalty-free track with a clear beat (default: compose one in code).
</inputs>

<direction>
A 30-second product promo film for this project. Read the codebase first: what it does, its real screens and components, its colors and type. Build the scenes from the real UI; never invent features.
Focus on each of its features.
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

### Cinetic skill launch film
`lexnlin-6161a6` · @LexnLin · 2026-10-04 · tags: Product UI, Code


Third-party skill: https://github.com/Leonxlnx/cinetic
Install: `npx skills add Leonxlnx/cinetic`

### Reddit marketing tool launch video
`anthonyriera-9b1b2a` · @anthonyriera · 2026-09-26 · Remotion · Many rounds · tags: Product UI, Characters


Third-party skill: https://github.com/Rieranthony/product-film-skill
Install: `/plugin marketplace add Rieranthony/product-film-skill`

