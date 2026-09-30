# 🌸 Cyberpunk Vaporwave Metaverse Lounge & Library

A cozy, relaxing 3D metaverse library and lounge built with HTML, CSS, JavaScript, and Three.js. Sourced with public domain e-books, a 2D pixel-art door entrance, pool with pink flamingo floaties, a cascading waterfall, a purring winged cat, and a retro lo-fi boombox.

![License](https://img.shields.io/badge/license-CC0--1.0-ff71ce)
![Style](https://img.shields.io/badge/aesthetic-cyberpunk%20vaporwave-01cdfe)
![Audio](https://img.shields.io/badge/music-open--lofi-05ffa1)

---

## ✨ Features

- **🚪 2D Pixel Door Entrance**: Minimalist vaporwave landing page with animated twinkling pixel stars, floating sakura petals, and a 2D pixel door. Clicking knocks (`トントン！ / KNOCK, KNOCK!`) and triggers a glowing 3D perspective door opening animation.
- **🏛️ 3D Tiled Metaverse Backroom**: Checkered pastel purple and teal tiles floor, Roman-style pillars with neon rings, and a holographic sunset window.
- **📚 Central Library & Cyber-Reader**: Bookshelf with interactive books sourced from [publicdomainlibrary.org/en/ebooks](https://publicdomainlibrary.org/en/ebooks) (*Alice in Wonderland*, *The Metamorphosis*, *The Time Machine*, *Frankenstein*, *The Prophet*, *The Art of War*, *The Picture of Dorian Gray*, *The Yellow Wallpaper*). Includes an in-game cyber-tablet reader with font sizing and color themes (Vapor, Parchment, Night).
- **🛋️ Bright Pink Inflatable Couch**: Users can relax on a glossy puffy hot-pink vinyl couch with pillows and take in the relaxing lounge view.
- **🦩 Flamingo Pool & Cascading Waterfall**: Sunken pool with animated water vertex ripples, 3D pink flamingo inflatable floaties bobbing in the water, and a glowing waterfall cascading down the wall with continuous splash particles.
- **🐱 Winged Kawaii Purring Cat**: Cute floating 3D cat with flapping wings that patrols the room. Features continuous synthesized feline purring via Web Audio API. When petted, its eyes close into happy anime crescents (`^ . ^`), it nuzzles upward, heart particles burst in 3D, and it shares **Words of Wisdom**!
- **📜 Words of Wisdom Speech Bubble**: When the cat is petted, a comic speech bubble pops up over the cat offering inspiring literary quotes from Goodreads classics (Oscar Wilde, Lewis Carroll, Marcus Aurelius, Camus, Lao Tzu, etc.).
- **🐾 Kawaii Neko Salon / Customizer (`🎨 Style Neko`)**: Tamagotchi-style salon interface to customize your cat companion:
  - Fur coats: Peach, Calico (三毛), Tabby stripes (虎), Tuxedo, Sakura Pink, Snow White, Midnight Void.
  - Spots and stripes color swatches.
  - Eye colors (including Heterochromia Blue/Gold).
  - Wings: Angel, Pixie, Kawaii Bat, Stardust.
  - Accessories: Glowing Halo, Pink Bow, Sakura Flower Pin, Cyber Witch Hat.
  - Custom name with 3D floating nametag saved in browser `localStorage`.
- **📻 Retro Lo-Fi Boombox**: 3D radio on a pedestal with animated equalizer bars playing open-source lo-fi music (`btahir/open-lofi`) with an offline generative lo-fi chillhop synthesizer fallback.
- **🚪 Exit Portal**: 3D door (`EXIT TO 2D / 戻る`) that transitions back to the 2D landing page.

---

## 🎮 Controls

| Action | Controls |
|---|---|
| **Move** | `W`, `A`, `S`, `D` or `Arrow Keys` |
| **Look around** | Click & drag mouse / touch drag |
| **Interact** | Click on Books, Couch, Cat, Radio, or Exit Door |
| **Camera Presets** | HUD buttons: `[🚶 Walk]`, `[🛋️ Couch]`, `[📚 Library]`, `[🦩 Pool]`, `[🐱 Cat]` |
| **Radio Controls** | Top-right widget: Power, Play/Pause, Next/Prev, Volume, SFX toggle |

---

## 🚀 Quick Start

Open `index.html` directly in any modern browser, or run a local static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then navigate to `http://localhost:8000`.
