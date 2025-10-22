# Maurice’s GrooveHub (v1)

**A live-streaming, crate-digger–style radio shelf** built for discovery and deep listening.

## Features
- 🎧 Five verified live stations
- 🎚 Crossfade (1s)
- 💿 Vinyl crackle toggle (off by default)
- 🧠 Rotating trivia every 10s
- 🪞 Gold-gloss crate theme
- 🟫 Color placeholders for testing

## How to Add or Swap Stations
Edit the `<div class="record">` elements in `index.html`:
```html
<div class="record" data-stream="STREAM_URL" data-color="#hexcolor">Station Name</div>
