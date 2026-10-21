# Sound and rhythm: BPM, music, effects, voice and subtitles

## 1. The rhythm math

`beat = 60 / BPM` seconds · `bar (4 beats) = 240 / BPM` seconds. In the kit: `bpm` in `M.boot`, `M.beat(n)` returns the time of beat `n`.

| BPM | Beat | Bar | Frames/beat at 30 fps | Genre and use |
|---|---|---|---|---|
| 90 | 0.667 s | 2.67 s | 20 | slow hip-hop, luxury, institutional |
| 100 | 0.600 s | 2.40 s | 18 | modern corporate, explainer with rhythm |
| **120** | **0.500 s** | **2.00 s** | **15** | **the showreel/launch default** (bar = 2 s: 8 bars = 16 s) |
| 124 | 0.484 s | 1.94 s | 14.5 | house (a lighter "product" rhythm) |
| 128 | 0.469 s | 1.88 s | 14.06 | house/electronic, tech |
| 130 | 0.462 s | 1.85 s | 13.85 | tech, a product drop |
| 140 | 0.429 s | 1.71 s | 12.86 | dubstep, hype, sport |
| 150 to 170 | 0.40 to 0.35 s | 1.6 to 1.4 s | 12 to 10.6 | drum & bass, a short hype edit |

**Choosing the BPM:** use 120 as a safe default. With defined music, **measure** (do not guess). With no music: choose by genre and by duration (15 s at 120 BPM = 30 beats = 7.5 bars; to close on whole bars, 16 s = 8 bars).
At 124 BPM (a fraction) plan cuts in real time (`0.048 + 0.4838·k`) and **not in whole frames**; a "hard" cut lands 2 frames **before** the beat so the eye feels it on top.

## 2. Music structure for video (15 to 30 s)

| Stretch | Function | Matching visual |
|---|---|---|
| Intro (1 bar) | hook; few elements | a hook word, the through-line object is born |
| Build (2 to 3 bars) | tension: the kick enters, a riser | UI actions, typing, the cursor |
| **Drop** (1 bar) | the highest energy | flood, a hard cut, the main reveal |
| Sustain (2 to 3 bars) | development | cards, bento, data, camera |
| Climax (second-to-last) | the strongest moment | the signature shot, the hero number |
| Outro (½ to 1 bar) | resolution | the through-line object becomes the logo, the end card |

With stock music: start the track **N beats before the drop** so the drop lands on the right scene. With a synthetic track (kit): the cues are born from the actions.

## 3. `sound.py` cues and how to use them

| Cue | When |
|---|---|
| `hit` / `big` | a light / large impact: reveal, flood, ending. **On the event's exact frame.** |
| `rise {len}` | a riser: grows during anticipation/contraction and **ends on the hit** |
| `whoosh {len}` | scene swaps and fast moves (whip, iris) |
| `pop` | an element that appears (card, icon, word) |
| `tick` | counting, cursor, rare micro-events |
| `click` | the cursor's click; **always on the click frame** |
| `type {len, rate}` | typing (len = duration; rate = characters/s) |
| `notes {notes, step}` | a short opening/closing arpeggio |
| `pulse {n, every}` | a constant background pulse (techno) |
| `swell {len}` | a pad swelling in an emotional moment |
| `end` | the final signature |
| `chord` | a supporting chord |

Moods: **`grave`** (default: cinematic in D minor, warm pad, soft piano, deep impacts; no highs and no wind), `epico`, `tech`, `clean`, `ambient`, `pop`; key with `--key`.

**Scoring rules:**
1. **One sound per element that appears; silence on the rest.** No sound on every micro-movement.
2. **Peak on the frame.** The impact lands exactly on the reveal frame (compare the cue time with the frame).
3. **Silence before the impact:** 0.3 to 0.5 s drier gives weight.
4. **Layers:** music (−14 LUFS at the master), SFX low under the music; voice in the foreground, music **ducked** under the voice.
5. **Master:** −14 LUFS, true peak −1.5 dBTP (`render.mjs` normalizes in 2 passes; `--lufs` changes it). Re-measure after AAC.
6. **No sound requested:** also deliver the version with a track and say it can be removed.
7. **Third-party music:** only CC0, licensed for the platform or **generated**; log the source; avoid "trending" music with no license.

## 4. The user's (or stock) music: align by measurement

The kit **does not analyze** existing tracks; it is an extra step:
1. Load the audio (numpy/scipy or an equivalent tool), compute **tempo**, **beat grid**, **energy per bar** and the **drop**.
2. **Calibrate the grid on the real kicks** (the theoretical grid drifts).
3. Mark each cut on a strong beat and each UI hit on a beat; place each effect by the file's **measured peak** (not its start).
4. Pass the file in `--audio` and the measured times in `M.beat`/`M.cue`.

## 5. Voice, narration and subtitles

Flow for explainers and narrated videos (a voice tool **external to the kit**):
1. **Script first**, line by line, noting what is on screen for each line.
2. **Generate each line separately** (TTS: `edge-tts`, the system voice, ElevenLabs with the user's key). For brand/cloned voices: **only with consent** and a synthetic-voice notice in ads.
3. **Time the animation by each audio's real duration** (not the other way around).
4. Several takes and pick; **regenerate only the bad line** and splice; shorten pauses > 0.28 s to ~0.2 s; level the phrases (pull ~85% toward the median, adjusting gain only in the pauses).
5. **Subtitles:** split the speech at pauses ≥ 100 ms, transcribe each stretch (Whisper with timestamps) and align the first word to the **measured onset** (a single pass lags by up to 0.5 s). Check by ear.
6. Language: subtitles and voice in the request's language; a font that covers the alphabet.
7. Emotion tags in voice, **sparingly** (only on the lines that need them), no tag on the opener.

## 6. What to do in each type of video

| Type | Sound |
|---|---|
| Showreel / launch | a track on the beat (kick per beat, a riser before the climax, a hit per scene change) + light SFX per element |
| UI motion | interface SFX (click, pop, tick) under light 120 BPM music; each sound at its measured peak |
| Sting / logo reveal | one gesture: a deep impact + pad; a short riser; `end` |
| Narrated explainer | voice + low music; **no SFX on every element** (it tires) |
| Silent short | **sound tells half the story**: synced foley (steps, objects, ambience) |
| Hype edit | heavy bass on the impact, cuts on the beat, 0.3 s of silence before the drop |
| README loop | optional; if present, the audio loops seamlessly too |
