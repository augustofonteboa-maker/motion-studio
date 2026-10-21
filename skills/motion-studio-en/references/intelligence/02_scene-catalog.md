# Scene catalog: 60 patterns with a recipe in the kit

Each pattern: **when to use** · **recipe** (the `motion.js` API) · **common mistake**. The numbers (times, scales) come from what worked in the best prompts and the kit's tests. Combine **3 to 5** per 15 s video; more than that becomes a parade. Techniques A to H2 in `SKILL.md` (section 5) have code; here are the **compositions** (how to chain them).

## 1. Openers and hooks (0 to 2 s)

1. **Hook word on the beat.** One to three words enter one per beat (`M.stagger`, mask rise). When: launch and hype. Recipe: `M.split(el,{mask:'words'})`, `outExpo` 0.5 s, cue `pop` per word. Mistake: more than 5 words in the hook.
2. **The problem in 3 to 5 words.** A product hook: the pain, in big type, **interrupted** by the through-line object. Recipe: a two-line title; the through-line object crosses over and becomes the next element. Mistake: opening with the logo.
3. **A premium first frame.** There is no "fade in from black": the first frame has a live background, hierarchy and motion already underway (`M.drift`, light grain). The gallery's rule: "the first 1.5 s must already look expensive".
4. **A dot on black.** A dot on a dark screen that becomes everything (UI, logo, planet). Recipe: a circle with `outBack`, then a morph (`M.morpher`) or growth to `M.cover`. When: tech, terminal, technical product. Mistake: a dot that does not come back at the end (the bridge must close).
5. **The cursor enters and clicks.** An arc cursor (`M.cursorPath`) reaches the element, turns to where it is going, grows on hover, sinks on click (0.85) with a ring and cue `click`. When: any UI. Mistake: a straight cursor with no click.
6. **Opening state = final state (loop).** Plan the last frame together with the first (position, color, cursor speed). When: README, feed, loop. Mistake: a last frame only "similar".

## 2. Product UI

7. **UI rebuilt in layers.** Never slide a flat screenshot. Break the screen into components (header, card, chart, rows) as `div`/SVG that animate on their own. Recipe: recreate the essentials from the real captures (the product's tokens/colors/fonts), 5 to 8 animatable regions. Mistake: the whole screenshot with a zoom.
8. **State morph.** Button → loader → ✓ → card → player → slider → toggle → tab → chart → ⌘K → toast → button. Width, height, radius and color interpolated (`M.lerp`, `M.mix`), content swaps with a short blur. Recipe C in `briefing-templates.md`. Mistake: cutting between states.
9. **A prompt field that types.** `M.typewriter` with human rhythm (cps 18 to 26, a pause on punctuation), the caret on while typing, a button that sinks. When: an AI product. Mistake: text that is too long (> 60 characters) in 15 s.
10. **The answer arrives scrolling.** A page/card enters from below blurred and **settles** (decreasing offsets, blur 24 → 0), with a light flash on the swap. Mistake: appearing with no inertia.
11. **A card that rises over the page.** A white card with a soft shadow rises over (`inOutExpo`), the page behind blurs 2 to 3 px. When: presenting a feature. Mistake: a hard shadow.
12. **A list with per-row stagger.** 4 to 6 rows (thumbnail, title, artist, menu) enter 50 to 90 ms apart. When: music, banking, email apps.
13. **Menu bar / dock / notification.** A system context (the Mac menu bar, the dynamic island, a lock screen) as a scene; the product icon clicks and the panel "sprouts" with a spring (the width overshoots the target and settles). Mistake: generic stock icons.
14. **A floating phone.** The device slightly tilted (`perspective`), content scrolling, shadow and sinusoidal float; **the device is born from the screen** (the bezel grows from the edge). When: a mobile app.
15. **Bento / dashboard.** Cards enter by distance (`M.staggerGrid`), numbers count (`M.fmt` + `M.frameT`), bars grow. The hero number resolves first; the support settles later.
16. **Glass over a photo.** Controls in liquid glass (background blur + a curved edge + a bright rim + a shadow) over real photography; **on a white background, put a pastel aura behind**. Mistake: glass on everything (see banned list).
17. **An "Apple Intelligence"-style input aura.** A blurred conic gradient rotating around the prompt field. Use once, at the input moment.
18. **Editor-style selection (Figma).** The cursor drags a selection box; handles and a size label appear. When: a design tool.

## 3. Data and charts

19. **Bars → line → dot → number.** Bars with `outExpo` stagger; the line draws (`M.draw`); the final dot `outBack` with a ring; the hero number counts. The eye follows one order only.
20. **Chart and dot on the same function.** The dot rides the same spring function that draws the curve (otherwise the spring feels fake).
21. **Donut/pie by slice**, **a map with a route** (`getPointAtLength`), **a timeline** with a sliding marker: one event at a time, the label **on** the thing.
22. **A chart that "breathes" without inventing data.** The user's data; no invented %. If there is no data, use an example marked "example".

## 4. Typography

23. **Mask rise (line/word).** The strongest pattern; the exit continues upward and is shorter (≈70%).
24. **A weight swap on the emphasis word.** Black sans + italic serif in the accent color (never both forms of emphasis together).
25. **A word that transforms letter by letter.** Letters animate on their own; an element (a dot) stays stuck to a letter until it jumps.
26. **Type with a physical role.** Each word becomes a lintel/cable/support/opening/platform, born from the letters; baseline deformation.
27. **Diagonal tickers in a loop.** Strips with `x=(t*speed)%pattern`; crossing at different angles and speeds; closes seamlessly.
28. **A counter with tabular-nums.** Always `M.frameT(t)`.
29. **Giant text + camera.** Bigger than the frame, cropped, a slow push-in, an outline in parallax. When: a strong, short title.
30. **Handwritten annotations.** A circle, an arrow, a scribble drawn one by one with a wobble (`M.noise2`) and `M.draw`. When: explainer, "paper and marker".
31. **Word-by-word subtitles.** 1 to 2 words at a time, bold white, never covering a face; each word's time measured from the audio.

## 5. Transitions (the rule: no crossfade)

32. **Match cut by object.** Scene A's object becomes scene B's (button → circle → planet; chart point → corner of a receipt). It is the bridge element at work. Measure positions **at runtime** (`getBoundingClientRect` in `init`), do not hard-code them.
33. **A shape that floods and contracts.** A circle/rectangle in the accent color fills the screen (past all 4 corners) and contracts into the next scene. It is the "drop" when it lands on the strong beat.
34. **Layered iris / blades.** 2 to 3 shapes 60 to 120 ms apart; iris blades that close over the content and open onto another image.
35. **Zoom through a hole.** The letter O, a logo's counter-shape, a phone screen: exponential scale until the hole covers; the next scene is born inside.
36. **Whip pan / whip tilt.** The world slides one screen in 8 to 10 frames (`curve.swift`) with directional blur proportional to speed + `M.blur(...,12)`; an optional light flash.
37. **Fold/paper (map).** The grid unfolds from behind the shape (center, cross, corners) and becomes a bento. When: a transition from "one" to "many".
38. **A hard cut on the drop beat.** The only hard cut allowed (2 frames **before** the beat, so the eye feels it on top). At most 1 to 3 per video.
39. **A controlled blur-dissolve.** Only if the idea calls for it and **once**; if used, make it a directional blur, not a fade.

## 6. Shape, character and movement

40. **Ball character.** Squash & stretch (constant volume), anticipation, eyes in the direction of motion, a short trail. The best reel bridge element.
41. **A shape plush.** Square → rotation → pill → circle, the same shape in different states (position and motion preserved).
42. **An isometric icon wall.** A 7×7 grid revealed radially with a hero icon (`M.staggerGrid`).
43. **Reacting physics.** What is hit moves; what is near lights up (a spring on each neighbor by distance).
44. **A collision that plays music.** Each note comes from a visible collision; the track and the visual share the note data.
45. **Particles forming the mark** (`M.sampleShape`): **with an origin and a destination**; never a random burst.
46. **Halftone** that responds to an object and reveals the final card.
47. **Flow field/waves** for a live background, always low contrast and in a loop.

## 7. Camera and depth

48. **A camera named per scene.** One move per scene (push, pull-back, crane, whip), always eased; never zoom in and out back to back; each scene **starts at the zoom where the last ended**.
49. **A camera never still.** Push 1.0 → 1.04 per scene, even in a "still" shot (`M.drift`).
50. **Screen Studio-style zoom.** For each moment, frame the element that matters; the cursor scales with it.
51. **2.5D parallax and fake depth.** `M.depth(z)`; static blur on distant layers (do not animate full-screen blur).
52. **A 3D signature shot.** Design **first** the shot someone would screenshot (a pull-back that reveals the pattern, a lettering formed seen from above); everything else builds to it. Three.js with `--gl`, a deterministic `?render` mode.

## 8. Endings

53. **The through-line object becomes the logo.** A product element (cursor, button, dot) becomes the mark on the end card. It closes the concept.
54. **A 3-line end card.** Name (display), a one-line promise (italic serif), contact/URL (mono). Hold ≥ 1.2 s (sting is ≥ 0.6 s).
55. **A clean loop.** Last frame = first. Compare with `--stills 0,<DUR-0.033>`.
56. **A final question / CTA.** One action only ("Try it free at x.com"); never more than one.

## 9. Sound built into the scene

57. **Typing with sound** (`type`), **click** (`click`), **a pop per element** (`pop`), **whoosh** on swaps, **deep impact** (`big`) on the drop. One sound per element that appears, silence on the rest.
58. **A riser that ends on the hit.** The rise grows during the contraction/anticipation and ends exactly on the impact frame.
59. **Music that "drops" with the scene.** The track's drop coincides with the flood/cut (align by measurement, not by ear).
60. **Silence as a resource.** 0.3 to 0.5 s with no sound before the impact increases the impact.

## How to assemble a scene from the catalog (a 15 s example)

`1 (hook) → 5 (cursor) → 9 (prompt) → 33 (flood on the drop) → 15 (bento) → 50 (zoom on the card) → 53 (through-line object becomes the logo) → 54 (end card)`. Four visual ideas, one bridge, one strong beat. **If your map has more than 5 ideas for 15 s, cut the weakest.**
