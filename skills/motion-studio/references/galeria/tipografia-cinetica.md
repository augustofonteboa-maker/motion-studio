# Galeria: Tipografia cinética (60 prompts com esta como tag principal)

Prompts reais do Prompt Motion (prompt-motion.com, curadoria de @p4nthera_), todos feitos no Claude Opus 5.5, do mais detalhado ao mais curto. Cada prompt pertence ao criador citado: use como **referência de estrutura e de ideias** e adapte ao briefing do usuário. O que os melhores têm em comum está em `../playbook-prompt-motion.md`.

### Speech built as architecture
`gdgtify-287ddf` · @Gdgtify · 2026-09-25 · SVG/Canvas · 664 palavras · tags: Tipografia cinética
Tem: grade de batidas/BPM, método de build
Fonte: https://www.prompt-motion.com/gdgtify-287ddf

````text
Create a 20.00-second kinetic spoken-word film titled “BUILD THE FLOOR.”  Treat this as an original miniature speech staged entirely through typography. Every line changes the architecture of the frame. The final declaration must stand on something the earlier words physically constructed.  Deliver one self-contained HTML file, 1080×1080, targeting 60fps, using SVG and/or Canvas. Embed all required assets.  ART DIRECTION Background #102820. Paper # F4E9D5. Structural accent # F2B544. A literary editorial world with the scale and confidence of a public monument. Use a high-contrast serif for the speech, a heavy grotesque for load-bearing words, and a restrained monospace for small timing marks. No distressed protest-poster clichés, megaphones, flags, crowds, microphones, or stock footage.  ORIGINAL SPEECH — EXACT WORDS, EXACT ORDER “We were told to wait.” “So we learned the weight of waiting.” “Then one voice made room.” “Then another.” “Now the floor belongs to us.”  Do not attribute these words to any real person. No extra slogans. The complete speech must be understandable without audio.  CENTRAL VISUAL RULE Words have assigned architectural roles. WAIT is a lintel. WAITING is a suspended load. VOICE is a support. ROOM is an opening. FLOOR is a platform. These roles must emerge from the actual letterforms, not from separate illustrations placed behind text.  STORYBOARD 0.00–3.00 “We were told to wait.” The sentence occupies a narrow horizontal opening beneath a massive WAIT. The opening slowly compresses while the sentence remains readable. The pressure comes from the layout, not camera shake.  3.00–6.50 “So we learned the weight of waiting.” Reveal the sentence in spoken phrase groups. WAITING lowers on two fine vertical rules. Those rules become suspension cables. A baseline bends under the visual load using a controlled vector deformation.  6.50–10.00 “Then one voice made room.” VOICE enters vertically and rotates into a structural support. It lifts one end of the baseline. The counter of the O in ROOM becomes an aperture. The next composition is revealed through that aperture.  10.00–12.50 “Then another.” A second support arrives. The tilted structure levels. This is the first moment of perfect horizontal alignment in the film. Use a brief stillness to make the change feel earned.  12.50–16.00 “Now the floor belongs to us.” Earlier structural words assemble into a platform. The final sentence settles onto it. US receives emphasis through shared alignment and scale, never through a separate flashy effect.  16.00–18.00 Hold the complete declaration. A slight release of tension travels through the supporting rules. No new text. No restless decorative motion.  18.00–20.00 The camera tracks beneath the completed platform. Its underside fills the frame and becomes the opening WAIT lintel. Under full occlusion, return hidden elements to their initial positions. Reveal the exact opening composition.  CHOREOGRAPHY Do not force the speech onto a dance beat. Use a cue sheet based on phrases, pauses, and emphasis. Phrase reveals should follow reading order. Allow at least one 400ms moment of absolute stillness. Use critically damped motion for settling loads. Use controlled elastic deformation for the baseline only. Make the changes in available space carry the emotional progression.  TYPE IMPLEMENTATION Use actual glyph paths for structural words. Preserve counters and legibility during deformation. For transitions between unrelated words, use occlusion or matched structural edges; do not interpolate arbitrary path points. Keep the currently spoken phrase readable before it becomes architecture.  ENGINEERING Implement window. seek(t) as a deterministic scene renderer. No accumulated physics, autonomous CSS transitions, or changing random values. Use time-remapping curves and analytic transforms. Use a 20-second periodic timeline with render(0)=render(20). Provide fixed-step access at n/60 for 1200 export frames. Audio is optional and off by default; no browser speech synthesis or autoplay dependency.  QUALITY GATE Inspect eight representative frames. Check that the speech reads in the correct order. Check that structural transformations never destroy a line before the audience can read it. Check the final platform is visibly assembled from earlier elements. Return the complete HTML implementation.Show allThis prompt was taken directly from @Gdgtify’s post (opens in a new tab).ModelOpus 5.5StackSVG/CanvasPostedSep 25, 2026
````

### Orange dot motion system
`ultimaxbt-bbebf5` · @ultimaxbt · 2026-10-06 · HTML · 591 palavras · tags: Tipografia cinética, Formas, Música
Tem: lista de proibidos, grade de batidas/BPM, método de build
Fonte: https://www.prompt-motion.com/ultimaxbt-bbebf5

````text
<inputs>
Ask me for: a short label for the opening toggle, one hero word, a percentage for the graph, the text for the final card, one accent color, and a track with a clear beat.
</inputs>

<direction>
A 2D motion design film in 16:9. Use a warm off-white canvas, near-black backgrounds, bold typography and one vivid orange accent. The orange dot connects every scene: it starts in the UI, becomes the dot over a letter, traces a spring graph, grows into a shape and returns on the end card. A cursor makes the opening click feel real. Keep the motion sharp and controlled, with small spring overshoots and no dead time.
Banned: stock footage, gradients, glows, particle bursts, random transitions and motion that isn't connected to an element already on screen.
</direction>

<structure>
Around 15 seconds, with a visual change on every major beat.
Open: a cursor clicks the orange toggle beside "Reduce Motion". The letters bend and move into place until only "Motion" remains, with the orange dot above the "i".
Spring: the dot jumps away from the word and lands on a graph. Its path draws a spring response, overshoots the target and settles beside a "+22%" callout.
Shape: the dot shoots across a line, grows into an orange circle and fills the frame. A black rounded square rotates inside it, then stretches into a pill. The scene contracts to a single orange dot on black.
Type: words like "SPRINGS", "EASING", "KINETIC TYPE", "3D" and "SOUND" orbit the dot. The circle of type opens out into a field of tiny dots.
Reveal: the halftone field expands and flips to black, revealing the final card: "Opus 5.5", "Motion designer." and "0 keyframes".
Return: the orange dot moves back through the halftone, graph and toggle. Match the final frame to the first so the video loops cleanly.
</structure>

<build>
1. One HTML file, 1920x1080 at 60fps. Compute every visual from time inside seek(t): no CSS transitions, timers or state carried between frames.
2. Use closed-form springs for the toggle, bouncing dot and graph. Draw the graph from the same spring function that moves the dot.
3. Animate letters individually for the "Reduce Motion" to "Motion" transformation. Keep the orange dot attached to the "i" until it begins its jump.
4. Make the orange circle, rotating square and pill different states of the same shape. Preserve its position and motion through each transformation.
5. Place the orbiting words along a circular path, then move their letters outward to hand the frame over to the halftone grid.
6. Draw the halftone as a grid of dots whose sizes respond to the orange dot. Let it grow past the frame edges before revealing the end card.
7. Sync the click, dot landing, graph peak, shape changes and final title to measured beats. Render one frame per beat to check the pacing before the full export.
</build>

<gotchas>
The graph and dot must follow the same motion or the spring will feel fake. Keep the orange accent consistent across every scene. Give outgoing and incoming text separate timing so letters don't overlap. When a shape fills the screen, scale it past all four corners. Match the cursor, dot and typography in the first and last frames to avoid a loop stutter.
</gotchas>

<start>
Ask me for the inputs, then show me the beat map and four stills (toggle, graph, kinetic type, end card) before building the full video.
</start>Show allThis prompt was taken directly from @ultimaxbt’s post (opens in a new tab).ModelOpus 5.5StackHTMLPostedOct 6, 2026
````

### Engraving-style Claude ad
`lexnlin-038035` · @LexnLin · 2026-10-02 · 184 palavras · tags: Tipografia cinética, Fotos
Fonte: https://www.prompt-motion.com/lexnlin-038035

````text
Make a fast-paced ad for Claude, about 10–15 s (closer to 15). Reference video attached.

1. research:
- Study Claude's earlier brand designs first.
- Find every photo and asset that fits: artistic, editorial, whatever the idea needs.

2. design/direction
- An art reimagine: bold, light mode.
- Clean and perfect: no beige "artsy" look, no eyebrow labels.
- Paint elements on top of the images.
- Above all: fast-paced and very creative.

3. rules
- No slop. Study the reference closely: smoothness, timing, shot durations, fonts, elements.
- Take some inspiration and borrow techniques, but change the design overall, it should look like something you did completely on yourself with your own taste 
- Every morph has to be perfect.

ideas: (since everything moves fast)
- Clean, varied Claude SVG animations
- Images small, bigger, several at once
- Morphing text
- Clean 3D animation
- Zooms

extra notes:
- Feel free to work 10+ hours 
- Give me the final video, ending on the Claude logo.Show allThis prompt was taken directly from @LexnLin’s post (opens in a new tab).ModelOpus 5.5PostedOct 2, 2026
````

### Motion techniques showreel
`lukasersil-0ed38e` · @lukasersil · 2026-09-26 · esforço Max · 121 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/lukasersil-0ed38e

````text
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, particles, distortion, creative masking, compositing, lighting, depth, and seamless camera movement. Keep the pacing fast, confident, and visually surprising, with every shot transitioning naturally into the next. Make it feel meticulously art-directed rather than like a random collection of effects. Push the creativity, polish, timing, and visual impact as far as possible. This should feel like the opening reel that gets a motion designer hired.Show allThis prompt was taken directly from @lukasersil’s post (opens in a new tab).ModelOpus 5.5EffortMaxPostedSep 26, 2026
````

### Reflex brand motion reel
`reflex-cloud-72ffe5` · @reflex_cloud · 2026-09-25 · esforço Max · One-shot · 111 palavras · tags: Tipografia cinética, Música
Fonte: https://www.prompt-motion.com/reflex-cloud-72ffe5

````text
You're a world-class motion designer, and this is your 15-second résumé reel. Make it dynamic and confident: open with a striking hook in the first second, build through a sequence of distinct techniques (typography, shape play, camera moves, colour shifts), and land on a clean, memorable final frame. Pacing should feel like it's cut to music. Go crazy.

Make it promote our brand, reflex. inc. Proceed as if you were starting with zero of my tools. Do not assume that the tools we already have are the best to use, as they might be outdated.Show allThis prompt was taken directly from @reflex_cloud’s post (opens in a new tab).ModelOpus 5.5EffortMaxIterationsOne-shotPostedSep 25, 2026
````

### What happens in one second
`nolkeeg-bf062e` · @nolkeeg · 2026-09-26 · 106 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/nolkeeg-bf062e

````text
Please do not reference any previous memories or skills. I've been seeing all of these motion graphics examples on X of people making cool videos with opus 5.5. So - I want you to just show off for me. You pick the design style, the look, subject etc. I just want to be extremely impressed by the motion graphic video that you create. I want you to destroy GPT 6 when it comes to motion graphics video - because astra just wants to give me a stupid glorified powerpoint presentation.Show allThis prompt was taken directly from @nolkeeg’s post (opens in a new tab).ModelOpus 5.5PostedSep 26, 2026
````

### Chaotic Claude POV video
`kloss-xyz-15182a` · @kloss_xyz · 2026-09-26 · Python + ffmpeg · 61 palavras · tags: Tipografia cinética, Código
Tem: método de build
Fonte: https://www.prompt-motion.com/kloss-xyz-15182a

````text
Use Python to generate a 9:16 chaotic brain rot video with excellent motion + sound design and render it using ffmpeg. Put your own personal spin on it so it’s aligned with Anthropic’s new launch. Also fully express what it’s like to be a very creative LLM used by me every day from your POV to give it some extra personality.
````

### Branding agency showreel
`jacksonfall-54b2ac` · @jacksonfall · 2026-09-26 · 42 palavras · tags: Tipografia cinética, Fotos
Fonte: https://www.prompt-motion.com/jacksonfall-54b2ac

````text
make a dynamic 30-second motion graphics video that shows what an incredible motion designer you are,  create all graphics from scratch as if you were a niche branding agency for startup founders, like it's your showreel for a résumé. go all out.
````

### Synced lyrics motion video
`samaote-5e2fc2` · @samaote · 2026-09-25 · esforço Max · 38 palavras · tags: Tipografia cinética, Música
Tem: grade de batidas/BPM
Fonte: https://www.prompt-motion.com/samaote-5e2fc2

````text
make a dynamic lyrics motion graphics video based on the attached music, perfectly syncing the lyrics and animation to the vocals and beat. make it feel like an incredible motion designer’s showreel for a résumé. go all out.
````

### Claude self-intro motion graphic
`1littlecoder-9fef89` · @1littlecoder · 2026-09-25 · 37 palavras · tags: Tipografia cinética, Formas
Tem: lista de proibidos
Fonte: https://www.prompt-motion.com/1littlecoder-9fef89

````text
make a dynamic 10-second motion graphics video that shows who are you as Opus 5.5 - be as creative and dynamic as possible. Avoid the frames and texts on the corners which are typical ai made giveaways!
````

### Kinetic type self-portrait
`souravbhar871-61f424` · @souravbhar871 · 2026-09-26 · 37 palavras · tags: Tipografia cinética
Tem: lista de proibidos
Fonte: https://www.prompt-motion.com/souravbhar871-61f424

````text
make a dynamic 10-second motion graphics video that shows who are you as Opus 5.5 - be as creative and dynamic as possible. Avoid the frames and texts on the corners which are typical ai made giveaways!
````

### EyezOn 100 users thank-you
`sudiyasa-f48ac9` · @Sudiyasa_ · 2026-09-26 · 36 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/sudiyasa-f48ac9

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out  do this to thank the first 100 users of @eyezonbot
````

### Motion design showreel
`samuel-spitz-974923` · @samuel_spitz · 2026-09-25 · 34 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/samuel-spitz-974923

````text
Create a motion graphics video that feels like the centerpiece of a world-class designer’s showreel. Treat it as your résumé: showcase your full range, push the craft as far as possible. Go all out.
````

### fal motion design showreel
`influencer-seo-ce8c33` · @influencer_seo · 2026-09-29 · One-shot · 32 palavras · tags: Tipografia cinética, Fotos
Fonte: https://www.prompt-motion.com/influencer-seo-ce8c33

````text
make a dynamic 15-second motion graphics video for @fal that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out. Use the fal API.
````

### Overthinking motion study
`gizakdag-cf4ae6` · @gizakdag · 2026-09-25 · 30 palavras · tags: Tipografia cinética
Fonte: https://www.prompt-motion.com/gizakdag-cf4ae6

````text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it’s your showreel exploring the concept of “Overthinking,” inspired by the attached graphics.
````

### Swiss-style motion showreel
`levabashidze-2d713a` · @levabashidze · 2026-09-26 · esforço Max · One-shot · 30 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/levabashidze-2d713a

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out. dont ask just make
````

### Motion designer portrait showreel
`ndhabarde11-f155b4` · @ndhabarde11 · 2026-09-26 · One-shot · 29 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/ndhabarde11-f155b4

````text
make a dynamic 15-second motion graphics video in portrait mode that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Code-only motion design reel
`johnsavage-ai-b091c0` · @johnsavage_ai · 2026-09-25 · 29 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/johnsavage-ai-b091c0

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume. go all out. use only code
````

### Kinetic shapes showreel
`shinskinakamoto-20190b` · @Shinskinakamoto · 2026-09-25 · 27 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/shinskinakamoto-20190b

````text
Make a dynamic 15 second motion graphics video that shows what an incredible motion designer you are, like its your showreel for a resume, go all out!
````

### Claude motion designer showreel
`stephanlivera-df17a2` · @stephanlivera · 2026-09-25 · esforço Max · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/stephanlivera-df17a2

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Bold kinetic type showreel
`shneural-2abdfa` · @shneural · 2026-09-24 · 26 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/shneural-2abdfa

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Abstract motion design reel
`ajith-io-b5626e` · @ajith_io · 2026-09-25 · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/ajith-io-b5626e

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Claude motion design reel
`tequilafunks-97f6c9` · @tequilafunks · 2026-09-25 · Remotion · 26 palavras · tags: Tipografia cinética, Formas, Partículas, Música
Fonte: https://www.prompt-motion.com/tequilafunks-97f6c9

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

### Claude motion design showreel
`ayushunleashed-ece3e3` · @ayushunleashed · 2026-09-26 · 26 palavras · tags: Tipografia cinética, Formas, Partículas, Música
Fonte: https://www.prompt-motion.com/ayushunleashed-ece3e3

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

### Particle sphere motion reel
`blue-clarity-ef56d0` · @blue_clarity · 2026-09-25 · esforço Medium · One-shot · 26 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/blue-clarity-ef56d0

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Claude motion reel
`codestackr-c071bf` · @codeSTACKr · 2026-09-26 · 26 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/codestackr-c071bf

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume. go all out
````

### Claude motion designer showreel
`mrtanviir-132457` · @mrtanviir · 2026-09-25 · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/mrtanviir-132457

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Type, form, space showreel
`web3wesley-7bb108` · @Web3Wesley · 2026-09-26 · esforço Max · One-shot · 26 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/web3wesley-7bb108

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Kinetic type and particle showreel
`m1n9-k7-ff9ab9` · @m1n9_k7 · 2026-09-25 · esforço High · One-shot · 26 palavras · tags: Tipografia cinética, Partículas, Música
Fonte: https://www.prompt-motion.com/m1n9-k7-ff9ab9

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

### Motion designer showreel
`zaqailo-212ad3` · @zaqailo · 2026-09-26 · 26 palavras · tags: Tipografia cinética, Formas, Partículas, Música
Fonte: https://www.prompt-motion.com/zaqailo-212ad3

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Claude motion designer showreel
`crazyalphaaa-bc7e75` · @CrazyAlphaaa · 2026-09-25 · 26 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/crazyalphaaa-bc7e75

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Blue editorial motion showreel
`fionntobin-97b7af` · @fionntobin · 2026-09-25 · One-shot · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/fionntobin-97b7af

````text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Kinetic type showreel
`itsuki-dev-10942d` · @itsuki_dev · 2026-09-25 · One-shot · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/itsuki-dev-10942d

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Motion design principles reel
`tolgayhickiran-e90799` · @tolgayhickiran · 2026-09-25 · esforço Medium · One-shot · 26 palavras · tags: Tipografia cinética, Formas, Partículas, Música
Fonte: https://www.prompt-motion.com/tolgayhickiran-e90799

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Nohandslabs brand promo
`robvjourney-ce3e1a` · @robvjourney · 2026-09-26 · 26 palavras · tags: Tipografia cinética, Partículas, Código
Fonte: https://www.prompt-motion.com/robvjourney-ce3e1a

````text
Can you make a 15-second motion graphic video of https://t.co/4AZZ7AlJvi? Go ALL OUT and make the most badass video you possibly can use everything you've got.
````

### Geometric motion designer showreel
`leonkohli-6dc01b` · @LeonKohli · 2026-09-25 · One-shot · 26 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/leonkohli-6dc01b

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Motion design showreel
`safarkhanshuvo-ffd52d` · @safarkhanshuvo · 2026-09-25 · One-shot · 26 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/safarkhanshuvo-ffd52d

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out
````

### 3D motion design showreel
`sahildesigner23-ee3155` · @sahildesigner23 · 2026-09-25 · esforço Max · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/sahildesigner23-ee3155

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Shape and dot motion showreel
`umangratani-57f86a` · @umangratani · 2026-09-25 · 26 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/umangratani-57f86a

````text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
````

### Claude motion design showreel
`rendesr-86be44` · @rendesr · 2026-09-25 · 25 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/rendesr-86be44

````text
Make a dynamic 15 second motion graphics video that shows off what an incredible motion designer you are. Imagine it's your showreel for a resume!
````

### Motion designer showreel
`vanshwtfff-db0466` · @VanshWTFFF · 2026-09-26 · esforço Max · 24 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/vanshwtfff-db0466

````text
make a dynamic 10 second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a resume.
````

### Motion designer showreel
`hanifproduktif-54bdee` · @hanifproduktif · 2026-09-25 · 23 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/hanifproduktif-54bdee

````text
You are applying as a motion designer in my agency. Make 15s video to showcase your skills and capabilities. Send me a showreel
````

### Lightspark social promo video
`davidmarcus-a28a60` · @davidmarcus · 2026-09-25 · One-shot · 20 palavras · tags: Tipografia cinética, Código
Fonte: https://www.prompt-motion.com/davidmarcus-a28a60

````text
make a punchy and modern short video for social that promotes @lightspark capabilities. Needs to be production grade with sound
````

### Easing and morphing showreel
`roundtablespace-d3a1be` · @RoundtableSpace · 2026-09-28 · esforço Max · One-shot · 18 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/roundtablespace-d3a1be

````text
make a 15-second motion graphics showreel that proves what an incredible motion designer you are, go all out.
````

### Poster breaking its frame
`pankajkumar-dev-0bee87` · @pankajkumar_dev · 2026-09-25 · One-shot · 14 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/pankajkumar-dev-0bee87

````text
create a motion design video of a poster breaking out of its own frame.
````

### Festival lineup promo reel
`gonzalomacagno-2de1a9` · @GonzaloMacagno · 2026-09-23 · 13 palavras · tags: Tipografia cinética
Fonte: https://www.prompt-motion.com/gonzalomacagno-2de1a9

````text
Necesito que armes un reel con esta info en 10 segundos, bien publicitario
````

### Kinetic type showreel
`zheke-38deff` · @zheke · 2026-09-25 · 12 palavras · tags: Tipografia cinética, Formas
Fonte: https://www.prompt-motion.com/zheke-38deff

````text
Hello Opus 5.5 show me what an incredible motion designer you are.
````

### Personal research intro reel
`madhav-xo-f97f20` · @Madhav_XO · 2026-09-25 · 11 palavras · tags: Tipografia cinética, Partículas, Código
Fonte: https://www.prompt-motion.com/madhav-xo-f97f20

````text
make a 10 sec video on whatever you know about me
````

### Photon journey from the Sun
`apoorvjain25-d24184` · @apoorvjain25 · 2026-09-29 · One-shot · 11 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/apoorvjain25-d24184

````text
make a 20-second video about anything, your call; make it crazy.
````

### Handwoven textiles brand explainer
`amitsingha89-150378` · @AmitSingha89 · 2026-09-26 · One-shot · 11 palavras · tags: Tipografia cinética, Fotos
Fonte: https://www.prompt-motion.com/amitsingha89-150378

````text
Make a professional explainer video for https://anuprerna.com for a first-time visitor.
````

### GravityDEX anime hype edit
`micheleharmonic-77628e` · @MicheleHarmonic · 2026-09-24 · One-shot · 10 palavras · tags: Tipografia cinética
Fonte: https://www.prompt-motion.com/micheleharmonic-77628e

````text
Make a GravityDEX x Gojo Satoru edit that goes hard
````

### Claude motion design reel
`ghinaiya-nirmal-5d8fec` · @ghinaiya_nirmal · 2026-09-25 · 9 palavras · tags: Tipografia cinética, Formas, Música
Fonte: https://www.prompt-motion.com/ghinaiya-nirmal-5d8fec

````text
make your own 15-second motion reel. go all out
````

### ODATANO Cardano hype edit
`maxalexweber-67688b` · @maxalexweber · 2026-09-24 · One-shot · 7 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/maxalexweber-67688b

````text
Make a ODATANO edit that goes hard
````

### Chain.wtf pitch video
`spearwtf-3c1fd1` · @SPEARwtf · 2026-09-26 · 7 palavras · tags: Tipografia cinética
Fonte: https://www.prompt-motion.com/spearwtf-3c1fd1

````text
Create a 30sec pitch video for @chaindotwtf
````

### Claude motion design showreel
`sudo-kiran-49176d` · @sudo_kiran · 2026-09-25 · One-shot · 3 palavras · tags: Tipografia cinética, Formas, Partículas
Fonte: https://www.prompt-motion.com/sudo-kiran-49176d

````text
Go all out.
````

### Keyframe motion design reel
`grace-sunnyy-29bc61` · @Grace_sunnyy · 2026-10-03 · 3 palavras · tags: Tipografia cinética, Partículas, Música
Fonte: https://www.prompt-motion.com/grace-sunnyy-29bc61

````text
制作一段 15 秒的动态图形视频，展示你是一位多么出色的动态设计师，就像是你简历上的作品集一样，使用任何你认为能产出最佳效果的工具或技术。你拥有完全的创作自由，优先追求卓越的视觉设计、大胆的艺术指导、引人注目的构图和富有力量的动态表现，让每一秒都有价值。全力以赴。
````

### Shin Majin-shiki promo
`majin-appsheet-2d3c1a` · @Majin_AppSheet · 2026-09-25 · HyperFrames · 1 palavras · tags: Tipografia cinética
Fonte: https://www.prompt-motion.com/majin-appsheet-2d3c1a

````text
シンまじん式のPV作って
````

### What day is it
`tankazunori0914-0fc886` · @tankazunori0914 · 2026-10-02 · HyperFrames · 1 palavras · tags: Tipografia cinética, Música
Fonte: https://www.prompt-motion.com/tankazunori0914-0fc886

````text
今日何曜日だっけ？BGM付きの30秒のかっこいいモーショングラフィックスで教えて（全力を出してください）
````

### Kinetic type motion showreel
`topi-003-9ca6b5` · @_topi_003 · 2026-09-27 · 1 palavras · tags: Tipografia cinética, Partículas
Fonte: https://www.prompt-motion.com/topi-003-9ca6b5

````text
あなたがどれほど素晴らしいモーションデザイナーかを示す、ダイナミックな15秒のモーショングラフィックスビデオを作成してください。履歴書用のショーリールのような感じで、全力でやって。
````

### Anime maid dance showreel
`topi-003-b0e12c` · @_topi_003 · 2026-09-27 · 1 palavras · tags: Tipografia cinética, Personagens, Música
Fonte: https://www.prompt-motion.com/topi-003-b0e12c

````text
この画像の女の子がエキサイトなダンスをする、ダイナミックな15秒のモーショングラフィックスビデオを作成してください。履歴書用のショーリールのような感じで、全力でやって。
````

