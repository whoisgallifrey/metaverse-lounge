/**
 * CYBERPUNK VAPORWAVE KAWAII METAVERSE LIBRARY (script.js)
 * Features:
 * - 2D Pixel Door Landing Page with Japanese Kana/Kanji & Knock Knock animation
 * - 3D Volumetric Vaporwave Metaverse Backroom (Three.js)
 * - Tiled room with pool, caustics, and cascading waterfall
 * - Pink flamingo pool floaties bobbing in water
 * - Central library with interactive public domain e-books (publicdomainlibrary.org)
 * - Bright pink inflatable couch with cozy sit-and-read view
 * - Winged kawaii floating cat with realistic Web Audio purr & interactive petting
 * - Retro boombox / radio playing open lo-fi music & generative chill synth
 * - 3D Exit door returning to the 2D landing page
 */

// ============================================================================
// 1. PUBLIC DOMAIN BOOKS DATABASE (publicdomainlibrary.org/en/ebooks)
// ============================================================================
const PUBLIC_DOMAIN_BOOKS = [
  {
    id: "alice",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: "1865",
    color: "#ff71ce",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Chapter I: Down the Rabbit-Hole",
        text: `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'\n\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.\n\nThere was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.`
      },
      {
        heading: "Chapter II: The Pool of Tears",
        text: `'Curiouser and curiouser!' cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); 'now I'm opening out like the largest telescope that ever was! Good-bye, feet!' (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). 'Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I'm sure I shan't be able!'\n\n'Dear, dear! How queer everything is to-day! And yesterday things went on just as usual. I wonder if I've been changed in the night? Let me think: was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same, the next question is, Who in the world am I? Ah, THAT'S the great puzzle!'`
      }
    ]
  },
  {
    id: "metamorphosis",
    title: "The Metamorphosis",
    author: "Franz Kafka",
    year: "1915",
    color: "#01cdfe",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Part I: An Awakening",
        text: `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.\n\n"What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table—Samsa was a travelling salesman—and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.`
      },
      {
        heading: "Part II: The Room",
        text: `Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state he couldn't get into that position. However hard he threw himself onto his right, he always rolled back to where he was.`
      }
    ]
  },
  {
    id: "timemachine",
    title: "The Time Machine",
    author: "H.G. Wells",
    year: "1895",
    color: "#05ffa1",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Chapter I: The Fourth Dimension",
        text: `The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burnt brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses.\n\n"You must follow me carefully. I shall have to controvert one or two ideas that are almost universally accepted. The geometry, for instance, they taught you at school is founded on a misconception. There are really four dimensions, three which we call the three planes of Space, and a fourth, Time."`
      }
    ]
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    year: "1818",
    color: "#fffb96",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Chapter IV: The Spark of Being",
        text: `It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.`
      }
    ]
  },
  {
    id: "theprophet",
    title: "The Prophet",
    author: "Kahlil Gibran",
    year: "1923",
    color: "#b757ff",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "On Love and Beauty",
        text: `Then said Almitra, Speak to us of Love.\nAnd he raised his head and looked upon the people, and there fell a stillness upon them. And with a great voice he said:\nWhen love beckons to you, follow him,\nThough his ways are hard and steep.\nAnd when his wings enfold you yield to him,\nThough the sword hidden among his pinions may wound you.\nAnd when he speaks to you believe in him,\nThough his voice may shatter your dreams as the north wind lays waste the garden.\n\nLove gives naught but itself and takes naught but from itself.\nLove possesses not nor would it be possessed;\nFor love is sufficient unto love.`
      }
    ]
  },
  {
    id: "artofwar",
    title: "The Art of War",
    author: "Sun Tzu",
    year: "5th C. BC",
    color: "#f472b6",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Chapter III: Strategic Attack",
        text: `Sun Tzu said: In the practical art of war, the best thing of all is to take the enemy's country whole and intact; to shatter and destroy it is not so good. So, too, it is better to recapture an army entire than to destroy it, to capture a regiment, a detachment or a company entire than to destroy them.\n\nHence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.\n\nThus the highest form of generalship is to balk the enemy's plans; the next best is to prevent the junction of the enemy's forces; the next in order is to attack the enemy's army in the field; and the worst policy of all is to besiege walled cities.`
      }
    ]
  },
  {
    id: "doriangray",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: "1890",
    color: "#38bdf8",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Chapter I: The Studio",
        text: `The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.\n\nFrom the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flame-like as their own.`
      }
    ]
  },
  {
    id: "yellowwallpaper",
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    year: "1892",
    color: "#facc15",
    sourceUrl: "https://publicdomainlibrary.org/en/ebooks",
    sections: [
      {
        heading: "Entry I: The Colonial Mansion",
        text: `It is very seldom that mere ordinary people like John and myself secure ancestral halls for the summer. A colonial mansion, a hereditary estate, I would say a haunted house, and reach the height of romantic felicity—but that would be asking too much of fate!\n\nStill I will proudly declare that there is something queer about it. Else, why should it be let so cheaply? And why have stood so long untenanted? John laughs at me, of course, but one expects that in marriage.`
      }
    ]
  }
];

// ============================================================================
// 2. AUDIO SYNTHESIZER & OPEN LO-FI MUSIC ENGINE
// ============================================================================
class AudioManager {
  constructor() {
    this.ctx = null;
    this.initialized = false;
    this.musicPlaying = false;
    this.purrPlaying = true;
    this.masterVolume = 0.75;

    // Cat Purr Nodes
    this.purrGain = null;
    this.purrOsc1 = null;
    this.purrOsc2 = null;
    this.purrLfo = null;

    // Waterfall ambient nodes
    this.waterGain = null;
    this.waterNoise = null;

    // Lo-Fi Generative Chords Engine
    this.lofiTimer = null;
    this.currentTrackIndex = 0;
    this.tracks = [
      { title: "2 AM Debug Loop (Open Lo-Fi)", bpm: 72, root: 220 },
      { title: "Cassette Pastel Nights", bpm: 68, root: 196 },
      { title: "Midnight Sakura Bloom", bpm: 75, root: 261.63 },
      { title: "Cyber Petals by the Pool", bpm: 70, root: 174.61 }
    ];

    // External stream / audio element
    this.audioElement = new Audio();
    this.audioElement.crossOrigin = "anonymous";
    this.audioElement.loop = true;
  }

  init() {
    if (this.initialized) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    this.setupCatPurr();
    this.setupWaterfallAmbient();
    this.initialized = true;
  }

  ensureContext() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Realistic feline purring synthesis using dual low-frequency oscillators with breathing LFO
  setupCatPurr() {
    if (!this.ctx) return;
    try {
      this.purrGain = this.ctx.createGain();
      this.purrGain.gain.setValueAtTime(0.09, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(110, this.ctx.currentTime);
      filter.Q.setValueAtTime(3.5, this.ctx.currentTime);

      // Low frequency vibration
      this.purrOsc1 = this.ctx.createOscillator();
      this.purrOsc1.type = "sawtooth";
      this.purrOsc1.frequency.setValueAtTime(26, this.ctx.currentTime);

      this.purrOsc2 = this.ctx.createOscillator();
      this.purrOsc2.type = "triangle";
      this.purrOsc2.frequency.setValueAtTime(52, this.ctx.currentTime);

      // Amplitude modulation for purr "rumble"
      const modOsc = this.ctx.createOscillator();
      modOsc.frequency.setValueAtTime(24, this.ctx.currentTime);
      const modGain = this.ctx.createGain();
      modGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      modOsc.connect(modGain.gain);

      // Gentle breathing envelope
      this.purrLfo = this.ctx.createOscillator();
      this.purrLfo.frequency.setValueAtTime(0.35, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      this.purrLfo.connect(lfoGain);
      lfoGain.connect(this.purrGain.gain);

      this.purrOsc1.connect(filter);
      this.purrOsc2.connect(filter);
      filter.connect(this.purrGain);
      this.purrGain.connect(this.masterGain);

      this.purrOsc1.start();
      this.purrOsc2.start();
      this.purrLfo.start();
      modOsc.start();
    } catch (e) {
      console.warn("Purr synthesis fallback:", e);
    }
  }

  // Waterfall / Pool ambient sound
  setupWaterfallAmbient() {
    if (!this.ctx) return;
    try {
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.1;
      }

      this.waterNoise = this.ctx.createBufferSource();
      this.waterNoise.buffer = noiseBuffer;
      this.waterNoise.loop = true;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = "bandpass";
      bandpass.frequency.setValueAtTime(450, this.ctx.currentTime);
      bandpass.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.waterGain = this.ctx.createGain();
      this.waterGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      this.waterNoise.connect(bandpass);
      bandpass.connect(this.waterGain);
      this.waterGain.connect(this.masterGain);
      this.waterNoise.start();
    } catch (e) {
      console.warn("Water ambient fallback:", e);
    }
  }

  // 8-Bit Retro Knock Sound for Landing Page
  playKnockKnock() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    [0, 0.18].forEach(delay => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(140, t + delay);
      osc.frequency.exponentialRampToValueAtTime(45, t + delay + 0.09);

      gain.gain.setValueAtTime(0.4, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.1);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + delay);
      osc.stop(t + delay + 0.12);
    });
  }

  // Magical portal opening chime
  playPortalOpen() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t + idx * 0.08);

      gain.gain.setValueAtTime(0.15, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.5);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.55);
    });
  }

  // Cute feline meow sound
  playCatMeow() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(780, t + 0.18);
    osc.frequency.exponentialRampToValueAtTime(420, t + 0.45);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.2, t + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.48);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.5);

    // Briefly boost purr
    if (this.purrGain) {
      this.purrGain.gain.setValueAtTime(0.18, t);
      this.purrGain.gain.exponentialRampToValueAtTime(0.09, t + 2.5);
    }
  }

  // Lo-Fi Generative Chillhop Chords Synthesizer (Zero network dependencies, always works!)
  startLofiMusic() {
    this.ensureContext();
    this.musicPlaying = true;
    this.playNextLofiChord();
    updateRadioUI(true, this.tracks[this.currentTrackIndex].title);
  }

  stopLofiMusic() {
    this.musicPlaying = false;
    if (this.lofiTimer) {
      clearTimeout(this.lofiTimer);
      this.lofiTimer = null;
    }
    updateRadioUI(false, "Radio Off");
  }

  playNextLofiChord() {
    if (!this.musicPlaying || !this.ctx) return;

    const track = this.tracks[this.currentTrackIndex];
    const chords = [
      [220, 261.63, 329.63, 392.00], // Am7
      [174.61, 220, 261.63, 329.63], // Fmaj7
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];
    const chord = chords[Math.floor(Math.random() * chords.length)];
    const t = this.ctx.currentTime;
    const duration = (60 / track.bpm) * 3.8;

    // Rhodes / Electric Piano chord tone
    chord.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.07 / (i + 1), t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + duration);
    });

    // Soft sub-bass note
    const bassOsc = this.ctx.createOscillator();
    const bassGain = this.ctx.createGain();
    bassOsc.type = "sine";
    bassOsc.frequency.setValueAtTime(chord[0] / 2, t);
    bassGain.gain.setValueAtTime(0.09, t);
    bassGain.gain.exponentialRampToValueAtTime(0.001, t + duration * 0.9);
    bassOsc.connect(bassGain);
    bassGain.connect(this.masterGain);
    bassOsc.start(t);
    bassOsc.stop(t + duration);

    // Subtle lo-fi vinyl pop
    const popOsc = this.ctx.createOscillator();
    const popGain = this.ctx.createGain();
    popOsc.type = "triangle";
    popOsc.frequency.setValueAtTime(60, t);
    popGain.gain.setValueAtTime(0.08, t);
    popGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    popOsc.connect(popGain);
    popGain.connect(this.masterGain);
    popOsc.start(t);
    popOsc.stop(t + 0.1);

    this.lofiTimer = setTimeout(() => {
      this.playNextLofiChord();
    }, duration * 950);
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    if (this.musicPlaying) {
      if (this.lofiTimer) clearTimeout(this.lofiTimer);
      this.playNextLofiChord();
    }
    updateRadioUI(this.musicPlaying, this.tracks[this.currentTrackIndex].title);
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
    if (this.musicPlaying) {
      if (this.lofiTimer) clearTimeout(this.lofiTimer);
      this.playNextLofiChord();
    }
    updateRadioUI(this.musicPlaying, this.tracks[this.currentTrackIndex].title);
  }

  togglePurrAndWater() {
    this.purrPlaying = !this.purrPlaying;
    if (this.purrGain) {
      this.purrGain.gain.setValueAtTime(this.purrPlaying ? 0.09 : 0, this.ctx.currentTime);
    }
    if (this.waterGain) {
      this.waterGain.gain.setValueAtTime(this.purrPlaying ? 0.04 : 0, this.ctx.currentTime);
    }
    return this.purrPlaying;
  }

  setVolume(vol) {
    this.masterVolume = vol;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    }
  }
}

const audioMgr = new AudioManager();

// ============================================================================
// 3. 2D LANDING PAGE WITH PIXEL DOOR & STARS CANVAS
// ============================================================================
function initLandingPage() {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  const stars = [];
  const petals = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Pixel Stars
  for (let i = 0; i < 90; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() > 0.8 ? 3 : 2,
      color: Math.random() > 0.5 ? "#fffb96" : "#01cdfe",
      twinkleSpeed: 0.02 + Math.random() * 0.04,
      alpha: Math.random()
    });
  }

  // Floating Sakura Petals
  for (let i = 0; i < 30; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0.5 + Math.random() * 1.2,
      vy: 0.6 + Math.random() * 1.5,
      size: 4 + Math.random() * 6,
      angle: Math.random() * Math.PI * 2,
      vAngle: 0.01 + Math.random() * 0.03
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Stars
    stars.forEach(s => {
      s.alpha += s.twinkleSpeed;
      const opacity = 0.3 + Math.abs(Math.sin(s.alpha)) * 0.7;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = opacity;
      ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.size, s.size);
    });

    // Petals
    petals.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.vAngle;

      if (p.x > width + 20) p.x = -20;
      if (p.y > height + 20) p.y = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = "#ff71ce";
      ctx.globalAlpha = 0.65;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  // Door click interaction
  const doorWrapper = document.getElementById("pixel-door-wrapper");
  const knockBalloon = document.getElementById("knock-balloon");
  const doorLeft = document.getElementById("door-left");
  const doorRight = document.getElementById("door-right");
  const portalLight = document.getElementById("portal-light");
  const landingPage = document.getElementById("landing-page");
  const metaverseContainer = document.getElementById("metaverse-container");

  let isOpening = false;

  doorWrapper.addEventListener("click", () => {
    if (isOpening) return;
    isOpening = true;

    // 1) Sound effect & Knock speech balloon
    audioMgr.playKnockKnock();
    knockBalloon.classList.remove("hidden");

    // 2) After knock pause, open the door leaves
    setTimeout(() => {
      audioMgr.playPortalOpen();
      doorLeft.classList.add("open");
      doorRight.classList.add("open");
      portalLight.classList.add("active");

      // 3) Smooth fade and wash into the 3D space
      setTimeout(() => {
        landingPage.classList.add("fade-out");
        metaverseContainer.classList.remove("hidden");

        // Start 3D world & ambient sound
        initThreeWorld();
        audioMgr.ensureContext();
        audioMgr.startLofiMusic();

        setTimeout(() => {
          landingPage.classList.add("hidden");
        }, 1000);
      }, 1000);
    }, 700);
  });
}

// ============================================================================
// 4. 3D METAVERSE VOLUMETRIC SCENE (THREE.JS)
// ============================================================================
let scene, camera, renderer;
let clock, animatedObjects = [];
let interactiveObjects = [];
let raycaster, mouse;
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let isSittingOnCouch = false;
let cameraTargetPos = null, cameraTargetLook = null;
let currentLookAt = new THREE.Vector3(0, 2, 0);
let hoveredObject = null;
let wingedCatMesh = null;
let floatingNoteGroup = null;

function initThreeWorld() {
  if (scene) return; // already initialized

  clock = new THREE.Clock();
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Scene & Fog (Vaporwave pastel atmosphere)
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#1a0c2e");
  scene.fog = new THREE.FogExp2("#1a0c2e", 0.022);

  // Camera
  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 150);
  camera.position.set(0, 2.5, 9);
  currentLookAt.set(0, 2.2, 0);
  camera.lookAt(currentLookAt);

  // WebGL Renderer
  const container = document.getElementById("webgl-canvas-container");
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  container.appendChild(renderer.domElement);

  // Lighting (Cyberpunk Vaporwave)
  const ambientLight = new THREE.AmbientLight("#4d226a", 1.8);
  scene.add(ambientLight);

  // Hot Pink Directional Light
  const pinkDir = new THREE.DirectionalLight("#ff71ce", 2.2);
  pinkDir.position.set(10, 15, 8);
  pinkDir.castShadow = true;
  pinkDir.shadow.mapSize.width = 1024;
  pinkDir.shadow.mapSize.height = 1024;
  scene.add(pinkDir);

  // Teal Point Light near the Pool & Waterfall
  const tealPoint = new THREE.PointLight("#01cdfe", 3.0, 25);
  tealPoint.position.set(-6, 4, -4);
  scene.add(tealPoint);

  // Warm Yellow Lamp near Couch
  const warmPoint = new THREE.PointLight("#fffb96", 2.0, 14);
  warmPoint.position.set(6, 3, 2);
  scene.add(warmPoint);

  // Build the Environment
  createTiledRoom();
  createPoolAndWaterfall();
  createFlamingoFloaties();
  createCentralLibrary();
  createInflatablePinkCouch();
  createWingedKawaiiCat();
  createRetroBoomboxRadio();
  createExitDoor();

  // Setup Event Listeners
  setupControls();
  window.addEventListener("resize", onWindowResize);

  // Start Animation Loop
  animate();
}

// Procedural Checkered Grid Texture Generator for Vaporwave Flooring
function generateCheckeredGridTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Grid background
  const tileSize = 64;
  for (let x = 0; x < canvas.width; x += tileSize) {
    for (let y = 0; y < canvas.height; y += tileSize) {
      const isEven = (x / tileSize + y / tileSize) % 2 === 0;
      ctx.fillStyle = isEven ? "#2e1248" : "#3b175d";
      ctx.fillRect(x, y, tileSize, tileSize);

      // Neon grid lines
      ctx.strokeStyle = "#ff71ce";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, tileSize, tileSize);

      // Inner subtle glow dots
      ctx.fillStyle = "#01cdfe";
      ctx.fillRect(x + tileSize / 2 - 1, y + tileSize / 2 - 1, 2, 2);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  return texture;
}

// 1. Tiled Room, Neon Arches, Holographic Wireframe Windows
function createTiledRoom() {
  const roomGroup = new THREE.Group();

  // Floor
  const floorGeo = new THREE.PlaneGeometry(36, 36);
  const floorMat = new THREE.MeshStandardMaterial({
    map: generateCheckeredGridTexture(),
    roughness: 0.35,
    metalness: 0.25
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  roomGroup.add(floor);

  // Back Wall
  const wallMat = new THREE.MeshStandardMaterial({
    color: "#1e0b38",
    roughness: 0.7
  });

  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(36, 14), wallMat);
  backWall.position.set(0, 7, -18);
  roomGroup.add(backWall);

  // Left Wall
  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(36, 14), wallMat);
  leftWall.position.set(-18, 7, 0);
  leftWall.rotation.y = Math.PI / 2;
  roomGroup.add(leftWall);

  // Right Wall
  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(36, 14), wallMat);
  rightWall.position.set(18, 7, 0);
  rightWall.rotation.y = -Math.PI / 2;
  roomGroup.add(rightWall);

  // Glowing Neon Columns with Vaporwave pastel colors
  const colMat = new THREE.MeshStandardMaterial({
    color: "#e2e8f0",
    roughness: 0.2,
    metalness: 0.6
  });
  const ringMat = new THREE.MeshBasicMaterial({ color: "#01cdfe" });

  [-14, 14].forEach(x => {
    [-14, -2, 10].forEach(z => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, 12, 16), colMat);
      col.position.set(x, 6, z);
      col.castShadow = true;
      roomGroup.add(col);

      // Glowing Neon Ring around pillar
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.06, 8, 24), ringMat);
      ring.position.set(x, 7, z);
      ring.rotation.x = Math.PI / 2;
      roomGroup.add(ring);
    });
  });

  // Holographic Cyberpunk Window with Wireframe Sunset Grid
  const windowFrame = new THREE.Mesh(
    new THREE.BoxGeometry(10, 6, 0.4),
    new THREE.MeshStandardMaterial({ color: "#ff71ce", roughness: 0.3 })
  );
  windowFrame.position.set(0, 8, -17.8);
  roomGroup.add(windowFrame);

  // Sunset Sun in window
  const sunGeo = new THREE.CircleGeometry(2.2, 32);
  const sunMat = new THREE.MeshBasicMaterial({ color: "#ff71ce" });
  const sun = new THREE.Mesh(sunGeo, sunMat);
  sun.position.set(0, 8.5, -17.5);
  roomGroup.add(sun);

  scene.add(roomGroup);
}

// 2. Pool with Animated Water Shader & Cascading Waterfall
let waterMesh = null;
let waterfallParticles = null;

function createPoolAndWaterfall() {
  const poolGroup = new THREE.Group();

  // Sunken Pool Rim
  const rimMat = new THREE.MeshStandardMaterial({
    color: "#2dd4bf",
    roughness: 0.2,
    metalness: 0.4
  });
  const rim = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 8), rimMat);
  rim.position.set(-8, 0.15, -4);
  poolGroup.add(rim);

  // Pool Basin Floor (Inside pool)
  const basinMat = new THREE.MeshStandardMaterial({
    color: "#0f766e",
    roughness: 0.4
  });
  const basin = new THREE.Mesh(new THREE.BoxGeometry(9.2, 0.1, 7.2), basinMat);
  basin.position.set(-8, -0.6, -4);
  poolGroup.add(basin);

  // Animated Water Surface
  const waterGeo = new THREE.PlaneGeometry(9, 7, 32, 32);
  const waterMat = new THREE.MeshStandardMaterial({
    color: "#05ffa1",
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.78
  });
  waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.position.set(-8, 0.1, -4);
  poolGroup.add(waterMesh);

  // Waterfall (Cascade) against the left wall spilling into pool
  const fallMat = new THREE.MeshBasicMaterial({
    color: "#01cdfe",
    transparent: true,
    opacity: 0.75,
    wireframe: false
  });
  const waterfall = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 9), fallMat);
  waterfall.position.set(-8, 4.5, -7.5);
  poolGroup.add(waterfall);

  // Splash Particle System at the base of the waterfall
  const particleCount = 180;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const speeds = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = -8 + (Math.random() - 0.5) * 3.5;
    positions[i * 3 + 1] = 0.2 + Math.random() * 0.8;
    positions[i * 3 + 2] = -7.2 + (Math.random() - 0.5) * 1.5;
    speeds.push({
      vy: 0.02 + Math.random() * 0.04,
      vx: (Math.random() - 0.5) * 0.02,
      vz: (Math.random() - 0.5) * 0.02,
      baseY: 0.2
    });
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: "#ffffff",
    size: 0.12,
    transparent: true,
    opacity: 0.85
  });

  waterfallParticles = new THREE.Points(particleGeo, particleMat);
  waterfallParticles.userData = { speeds: speeds };
  poolGroup.add(waterfallParticles);

  scene.add(poolGroup);
}

// 3. Pink Flamingo Pool Floaties
let flamingoFloaties = [];

function createFlamingoFloaties() {
  const positions = [
    { x: -9, z: -3.5, rot: 0.4 },
    { x: -6.8, z: -5.0, rot: -1.2 },
    { x: -7.5, z: -2.0, rot: 2.1 }
  ];

  positions.forEach((pos, idx) => {
    const flamingo = new THREE.Group();

    // Body (Inflatable Donut / Torus)
    const donutMat = new THREE.MeshStandardMaterial({
      color: "#ff71ce",
      roughness: 0.2,
      metalness: 0.1
    });
    const donut = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.25, 16, 24), donutMat);
    donut.rotation.x = Math.PI / 2;
    donut.castShadow = true;
    flamingo.add(donut);

    // Neck (Curved cylinder / spline)
    const neckGeo = new THREE.CylinderGeometry(0.12, 0.16, 1.1, 12);
    const neck = new THREE.Mesh(neckGeo, donutMat);
    neck.position.set(0, 0.65, 0.55);
    neck.rotation.x = 0.35;
    neck.castShadow = true;
    flamingo.add(neck);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), donutMat);
    head.position.set(0, 1.25, 0.75);
    flamingo.add(head);

    // Beak (Curved cone with black tip)
    const beakBase = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.3, 12),
      new THREE.MeshStandardMaterial({ color: "#fffb96" })
    );
    beakBase.position.set(0, 1.15, 0.95);
    beakBase.rotation.x = Math.PI / 2 + 0.3;
    flamingo.add(beakBase);

    const beakTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.15, 12),
      new THREE.MeshStandardMaterial({ color: "#111827" })
    );
    beakTip.position.set(0, 1.08, 1.05);
    beakTip.rotation.x = Math.PI / 2 + 0.3;
    flamingo.add(beakTip);

    // Tail Feathers
    const tail = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.45, 8),
      donutMat
    );
    tail.position.set(0, 0.25, -0.75);
    tail.rotation.x = -Math.PI / 3;
    flamingo.add(tail);

    flamingo.position.set(pos.x, 0.12, pos.z);
    flamingo.rotation.y = pos.rot;

    flamingo.userData = {
      baseY: 0.12,
      baseRot: pos.rot,
      phase: idx * 2.1
    };

    scene.add(flamingo);
    flamingoFloaties.push(flamingo);
  });
}

// 4. Central Library & Interactive Bookshelf
let bookshelfMesh = null;
let bookSpineMeshes = [];

function createCentralLibrary() {
  const libGroup = new THREE.Group();

  // Grand Bookshelf Frame (Pastel Vaporwave Wood & Neon Edges)
  const frameMat = new THREE.MeshStandardMaterial({
    color: "#271242",
    roughness: 0.35,
    metalness: 0.2
  });
  const neonMat = new THREE.MeshBasicMaterial({ color: "#ff71ce" });

  const mainShelf = new THREE.Mesh(new THREE.BoxGeometry(8, 7.5, 1.2), frameMat);
  mainShelf.position.set(0, 3.8, -12);
  mainShelf.castShadow = true;
  libGroup.add(mainShelf);

  // Glowing Neon Frame around Bookshelf
  const shelfArch = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.2, 1.3), neonMat);
  shelfArch.position.set(0, 7.6, -12);
  libGroup.add(shelfArch);

  // Holographic Library Sign
  const signCanvas = document.createElement("canvas");
  signCanvas.width = 512;
  signCanvas.height = 128;
  const sCtx = signCanvas.getContext("2d");
  sCtx.fillStyle = "#1e0b38";
  sCtx.fillRect(0, 0, 512, 128);
  sCtx.strokeStyle = "#01cdfe";
  sCtx.lineWidth = 6;
  sCtx.strokeRect(4, 4, 504, 120);
  sCtx.font = "bold 34px sans-serif";
  sCtx.fillStyle = "#ff71ce";
  sCtx.textAlign = "center";
  sCtx.fillText("PUBLIC DOMAIN LIBRARY", 256, 52);
  sCtx.font = "24px monospace";
  sCtx.fillStyle = "#01cdfe";
  sCtx.fillText("電子図書館 • EBOOKS ON SHELF", 256, 95);

  const signTex = new THREE.CanvasTexture(signCanvas);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(4.8, 1.2),
    new THREE.MeshBasicMaterial({ map: signTex, transparent: true })
  );
  sign.position.set(0, 8.4, -11.9);
  libGroup.add(sign);

  // Add Books to Shelves (3 rows)
  const rows = [1.8, 3.6, 5.4];
  let bookCounter = 0;

  rows.forEach((yPos) => {
    // Shelf divider
    const shelfDivider = new THREE.Mesh(
      new THREE.BoxGeometry(7.6, 0.15, 1.1),
      new THREE.MeshStandardMaterial({ color: "#4c1d95" })
    );
    shelfDivider.position.set(0, yPos - 0.1, -12);
    libGroup.add(shelfDivider);

    // Books on this shelf
    let currentX = -3.2;
    while (currentX < 3.2 && bookCounter < PUBLIC_DOMAIN_BOOKS.length) {
      const bookData = PUBLIC_DOMAIN_BOOKS[bookCounter];
      const bookWidth = 0.25 + Math.random() * 0.15;
      const bookHeight = 1.1 + Math.random() * 0.35;
      const bookDepth = 0.8;

      const bookMat = new THREE.MeshStandardMaterial({
        color: bookData.color,
        roughness: 0.3,
        metalness: 0.1
      });

      const bookGeo = new THREE.BoxGeometry(bookWidth, bookHeight, bookDepth);
      const book = new THREE.Mesh(bookGeo, bookMat);
      book.position.set(currentX, yPos + bookHeight / 2, -11.8);
      book.castShadow = true;

      book.userData = {
        type: "book",
        bookData: bookData,
        originalZ: -11.8,
        label: `Read: ${bookData.title}`
      };

      libGroup.add(book);
      interactiveObjects.push(book);
      bookSpineMeshes.push(book);

      currentX += bookWidth + 0.12;
      bookCounter++;
    }
  });

  scene.add(libGroup);
}

// 5. Bright Pink Inflatable Couch
let couchGroup = null;

function createInflatablePinkCouch() {
  couchGroup = new THREE.Group();

  const vinylPink = new THREE.MeshStandardMaterial({
    color: "#ff2a85",
    roughness: 0.15,
    metalness: 0.45,
    emissive: "#ff007f",
    emissiveIntensity: 0.15
  });

  // Main Inflatable Seat Cushion (Puffy rounded capsule)
  const seatGeo = new THREE.BoxGeometry(4.2, 0.8, 2.4);
  const seat = new THREE.Mesh(seatGeo, vinylPink);
  seat.position.set(0, 0.45, 0);
  seat.castShadow = true;
  couchGroup.add(seat);

  // Inflatable Backrest
  const backGeo = new THREE.CylinderGeometry(0.7, 0.7, 4.2, 16);
  const back = new THREE.Mesh(backGeo, vinylPink);
  back.rotation.z = Math.PI / 2;
  back.position.set(0, 1.2, -1.0);
  back.castShadow = true;
  couchGroup.add(back);

  // Inflatable Armrests (Left & Right)
  [-2.1, 2.1].forEach(x => {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.4, 16), vinylPink);
    arm.rotation.x = Math.PI / 2;
    arm.position.set(x, 0.85, 0);
    arm.castShadow = true;
    couchGroup.add(arm);
  });

  // Kawaii Pillows on Couch (Pastel yellow & cyan)
  const pillow1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.8, 0.35),
    new THREE.MeshStandardMaterial({ color: "#fffb96", roughness: 0.5 })
  );
  pillow1.position.set(-1.2, 0.95, -0.6);
  pillow1.rotation.y = 0.3;
  couchGroup.add(pillow1);

  const pillow2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.8, 0.35),
    new THREE.MeshStandardMaterial({ color: "#01cdfe", roughness: 0.5 })
  );
  pillow2.position.set(1.2, 0.95, -0.6);
  pillow2.rotation.y = -0.3;
  couchGroup.add(pillow2);

  // Clickable hitbox / object trigger
  const couchHitbox = new THREE.Mesh(
    new THREE.BoxGeometry(4.8, 2.0, 3.0),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  couchHitbox.position.set(0, 1, 0);
  couchHitbox.userData = {
    type: "couch",
    label: "Sit & Relax on Inflatable Couch"
  };
  couchGroup.add(couchHitbox);
  interactiveObjects.push(couchHitbox);

  couchGroup.position.set(7.5, 0, 1.5);
  couchGroup.rotation.y = -Math.PI / 4;
  scene.add(couchGroup);
}

// 6. Winged Kawaii Purring Cat
let catWings = [];

function createWingedKawaiiCat() {
  const cat = new THREE.Group();

  const furMat = new THREE.MeshStandardMaterial({
    color: "#fed7aa", // pastel peach/cream
    roughness: 0.6
  });
  const pinkMat = new THREE.MeshStandardMaterial({
    color: "#ff71ce",
    roughness: 0.4
  });
  const eyeMat = new THREE.MeshBasicMaterial({ color: "#1e1b4b" });

  // Chubby Cat Body
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), furMat);
  body.scale.set(1, 0.9, 1.25);
  body.castShadow = true;
  cat.add(body);

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.52, 20, 20), furMat);
  head.position.set(0, 0.45, 0.7);
  head.castShadow = true;
  cat.add(head);

  // Ears
  [-0.32, 0.32].forEach(x => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 8), furMat);
    ear.position.set(x, 0.95, 0.65);
    ear.rotation.z = x > 0 ? -0.2 : 0.2;
    cat.add(ear);

    // Inner pink ear
    const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 8), pinkMat);
    innerEar.position.set(x, 0.94, 0.71);
    innerEar.rotation.z = x > 0 ? -0.2 : 0.2;
    cat.add(innerEar);
  });

  // Eyes (Big kawaii anime eyes)
  [-0.18, 0.18].forEach(x => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), eyeMat);
    eye.position.set(x, 0.48, 1.15);
    cat.add(eye);

    // Eye highlight
    const glint = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 8, 8),
      new THREE.MeshBasicMaterial({ color: "#ffffff" })
    );
    glint.position.set(x + 0.02, 0.51, 1.21);
    cat.add(glint);
  });

  // Blushing Cheeks
  [-0.28, 0.28].forEach(x => {
    const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.08, 12), pinkMat);
    cheek.position.set(x, 0.38, 1.14);
    cheek.rotation.y = x > 0 ? 0.3 : -0.3;
    cat.add(cheek);
  });

  // Tiny Nose & Mouth
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.06, 6), pinkMat);
  nose.position.set(0, 0.4, 1.2);
  nose.rotation.x = Math.PI / 2;
  cat.add(nose);

  // Swaying Tail
  const tailGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.9, 12);
  const tail = new THREE.Mesh(tailGeo, furMat);
  tail.position.set(0, 0.4, -0.85);
  tail.rotation.x = -Math.PI / 3;
  cat.add(tail);
  cat.userData.tail = tail;

  // Angel / Fairy Wings (Gentle flapping animation!)
  const wingMat = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#01cdfe",
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 0.85,
    roughness: 0.1
  });

  [-1, 1].forEach(side => {
    const wingGroup = new THREE.Group();
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.05), wingMat);
    wing.position.set(side * 0.4, 0, 0);
    wingGroup.add(wing);

    wingGroup.position.set(side * 0.3, 0.45, -0.1);
    cat.add(wingGroup);
    catWings.push({ group: wingGroup, side: side });
  });

  // Floating Halo above Cat
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.35, 0.04, 8, 24),
    new THREE.MeshBasicMaterial({ color: "#fffb96" })
  );
  halo.position.set(0, 1.25, 0.7);
  halo.rotation.x = Math.PI / 2;
  cat.add(halo);

  // Interactive Hitbox
  const catHitbox = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 12, 12),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  catHitbox.userData = {
    type: "cat",
    label: "Pet Winged Purring Cat (🐾 nyaa~)"
  };
  cat.add(catHitbox);
  interactiveObjects.push(catHitbox);

  cat.position.set(-2, 3.2, 0);
  scene.add(cat);
  wingedCatMesh = cat;
}

// 7. Retro Boombox / Radio Playing Open Lo-Fi
let radioEqualizerBars = [];

function createRetroBoomboxRadio() {
  const radioGroup = new THREE.Group();

  // Boombox Body (Pastel purple & pink)
  const bodyMat = new THREE.MeshStandardMaterial({
    color: "#4a126d",
    roughness: 0.3,
    metalness: 0.4
  });
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.2, 0.9), bodyMat);
  body.castShadow = true;
  radioGroup.add(body);

  // Speakers (Left & Right)
  const speakerMat = new THREE.MeshStandardMaterial({
    color: "#180629",
    roughness: 0.7
  });
  const rimMat = new THREE.MeshBasicMaterial({ color: "#01cdfe" });

  [-0.6, 0.6].forEach(x => {
    const speaker = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 16), speakerMat);
    speaker.rotation.x = Math.PI / 2;
    speaker.position.set(x, 0, 0.46);
    radioGroup.add(speaker);

    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.03, 8, 24), rimMat);
    rim.position.set(x, 0, 0.47);
    radioGroup.add(rim);
  });

  // Cassette Deck & Center Screen
  const screen = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.08),
    new THREE.MeshBasicMaterial({ color: "#ff71ce" })
  );
  screen.position.set(0, 0, 0.46);
  radioGroup.add(screen);

  // Antenna
  const antenna = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.02, 1.2, 8),
    new THREE.MeshStandardMaterial({ color: "#fffb96", metalness: 0.8 })
  );
  antenna.position.set(0.7, 1.0, -0.2);
  antenna.rotation.z = -0.3;
  radioGroup.add(antenna);

  // 3D Visualizer Bars on top of radio
  const barMat = new THREE.MeshBasicMaterial({ color: "#05ffa1" });
  for (let i = 0; i < 5; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.3, 0.08), barMat);
    bar.position.set(-0.25 + i * 0.12, 0.75, 0.3);
    radioGroup.add(bar);
    radioEqualizerBars.push(bar);
  }

  // Floating Musical Notes Container
  floatingNoteGroup = new THREE.Group();
  radioGroup.add(floatingNoteGroup);

  // Table under the Radio
  const tableMat = new THREE.MeshStandardMaterial({ color: "#250d3d", roughness: 0.4 });
  const table = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 1.6, 16), tableMat);
  table.position.set(0, -1.4, 0);
  table.castShadow = true;
  radioGroup.add(table);

  // Hitbox
  const radioHitbox = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 1.6, 1.2),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  radioHitbox.userData = {
    type: "radio",
    label: "Toggle Lo-Fi Music / Next Track"
  };
  radioGroup.add(radioHitbox);
  interactiveObjects.push(radioHitbox);

  radioGroup.position.set(-7.5, 1.6, 3.5);
  scene.add(radioGroup);
}

// 8. Exit Door in 3D Space (Returning to 2D Landing Page)
function createExitDoor() {
  const exitGroup = new THREE.Group();

  const doorFrameMat = new THREE.MeshStandardMaterial({
    color: "#4c1d95",
    roughness: 0.2
  });
  const portalCoreMat = new THREE.MeshBasicMaterial({
    color: "#ff71ce"
  });

  // Frame
  const frame = new THREE.Mesh(new THREE.BoxGeometry(2.8, 5.0, 0.4), doorFrameMat);
  exitGroup.add(frame);

  // Portal Glow
  const portal = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 4.4), portalCoreMat);
  portal.position.set(0, 0, 0.22);
  exitGroup.add(portal);

  // Neon Exit Sign
  const signCanvas = document.createElement("canvas");
  signCanvas.width = 256;
  signCanvas.height = 80;
  const ctx = signCanvas.getContext("2d");
  ctx.fillStyle = "#e11d48";
  ctx.fillRect(0, 0, 256, 80);
  ctx.font = "bold 24px monospace";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText("EXIT TO 2D / 戻る", 128, 48);

  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.0, 0.6),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(signCanvas) })
  );
  sign.position.set(0, 2.8, 0.25);
  exitGroup.add(sign);

  const exitHitbox = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 5.0, 0.8),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  exitHitbox.userData = {
    type: "exit",
    label: "Exit to 2D Landing Page (🚪 戻る)"
  };
  exitGroup.add(exitHitbox);
  interactiveObjects.push(exitHitbox);

  exitGroup.position.set(0, 2.5, 17.5);
  exitGroup.rotation.y = Math.PI;
  scene.add(exitGroup);
}

// ============================================================================
// 5. USER CONTROLS, RAYCASTING & INTERACTION
// ============================================================================
let isPointerDragging = false;
let previousPointerPos = { x: 0, y: 0 };
let cameraRotation = { pitch: 0, yaw: 0 };

function setupControls() {
  const container = document.getElementById("webgl-canvas-container");

  // Keyboard navigation (WASD & Arrows)
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "KeyW": case "ArrowUp": moveForward = true; break;
      case "KeyS": case "ArrowDown": moveBackward = true; break;
      case "KeyA": case "ArrowLeft": moveLeft = true; break;
      case "KeyD": case "ArrowRight": moveRight = true; break;
      case "KeyE": triggerCenterAction(); break;
    }
    // If user presses movement key while sitting on couch, stand up smoothly
    if (isSittingOnCouch && (moveForward || moveBackward || moveLeft || moveRight)) {
      standUpFromCouch();
    }
  });

  window.addEventListener("keyup", (e) => {
    switch (e.code) {
      case "KeyW": case "ArrowUp": moveForward = false; break;
      case "KeyS": case "ArrowDown": moveBackward = false; break;
      case "KeyA": case "ArrowLeft": moveLeft = false; break;
      case "KeyD": case "ArrowRight": moveRight = false; break;
    }
  });

  // Mouse drag to look around
  container.addEventListener("mousedown", (e) => {
    isPointerDragging = true;
    previousPointerPos = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener("mouseup", () => {
    isPointerDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    // Mouse coords for raycaster
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    if (isPointerDragging) {
      const deltaX = e.clientX - previousPointerPos.x;
      const deltaY = e.clientY - previousPointerPos.y;

      cameraRotation.yaw -= deltaX * 0.003;
      cameraRotation.pitch -= deltaY * 0.003;
      cameraRotation.pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, cameraRotation.pitch));

      previousPointerPos = { x: e.clientX, y: e.clientY };
    }

    checkRaycastHover();
  });

  // Click on 3D objects
  container.addEventListener("click", () => {
    if (hoveredObject) {
      handleObjectClick(hoveredObject);
    }
  });

  // Mobile D-Pad Touch events
  const btnUp = document.getElementById("btn-up");
  const btnDown = document.getElementById("btn-down");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");
  const btnAction = document.getElementById("btn-touch-action");

  btnUp.addEventListener("touchstart", (e) => { e.preventDefault(); moveForward = true; });
  btnUp.addEventListener("touchend", () => { moveForward = false; });
  btnDown.addEventListener("touchstart", (e) => { e.preventDefault(); moveBackward = true; });
  btnDown.addEventListener("touchend", () => { moveBackward = false; });
  btnLeft.addEventListener("touchstart", (e) => { e.preventDefault(); moveLeft = true; });
  btnLeft.addEventListener("touchend", () => { moveLeft = false; });
  btnRight.addEventListener("touchstart", (e) => { e.preventDefault(); moveRight = true; });
  btnRight.addEventListener("touchend", () => { moveRight = false; });
  btnAction.addEventListener("click", triggerCenterAction);

  // Camera Presets Buttons
  document.getElementById("cam-free").addEventListener("click", () => {
    setActivePreset("cam-free");
    standUpFromCouch();
    transitionCamera(new THREE.Vector3(0, 2.5, 9), new THREE.Vector3(0, 2.2, 0));
  });

  document.getElementById("cam-couch").addEventListener("click", () => {
    setActivePreset("cam-couch");
    sitOnInflatableCouch();
  });

  document.getElementById("cam-library").addEventListener("click", () => {
    setActivePreset("cam-library");
    standUpFromCouch();
    transitionCamera(new THREE.Vector3(0, 3.8, -7.5), new THREE.Vector3(0, 3.8, -12));
  });

  document.getElementById("cam-pool").addEventListener("click", () => {
    setActivePreset("cam-pool");
    standUpFromCouch();
    transitionCamera(new THREE.Vector3(-6, 2.5, 1.5), new THREE.Vector3(-8, 0.5, -4));
  });

  document.getElementById("cam-cat").addEventListener("click", () => {
    setActivePreset("cam-cat");
    petTheWingedCat();
  });

  // Exit Portal Button
  document.getElementById("exit-btn").addEventListener("click", exitTo2DLanding);

  // Interaction prompt toast click
  document.getElementById("interaction-prompt").addEventListener("click", triggerCenterAction);
}

function setActivePreset(id) {
  document.querySelectorAll(".preset-btn").forEach(btn => btn.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function checkRaycastHover() {
  if (!raycaster || !camera) return;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(interactiveObjects, true);

  const prompt = document.getElementById("interaction-prompt");
  const promptLabel = document.getElementById("prompt-label");

  if (intersects.length > 0) {
    let topObj = intersects[0].object;
    while (topObj && !topObj.userData.type && topObj.parent) {
      topObj = topObj.parent;
    }

    if (topObj && topObj.userData.label) {
      hoveredObject = topObj;
      promptLabel.innerText = topObj.userData.label;
      prompt.classList.remove("hidden");
      document.body.style.cursor = "pointer";

      // If it's a book, slide it forward slightly
      if (topObj.userData.type === "book") {
        topObj.position.z = topObj.userData.originalZ + 0.35;
      }
      return;
    }
  }

  // Restore books
  bookSpineMeshes.forEach(b => {
    b.position.z = b.userData.originalZ;
  });

  hoveredObject = null;
  prompt.classList.add("hidden");
  document.body.style.cursor = "default";
}

function triggerCenterAction() {
  if (hoveredObject) {
    handleObjectClick(hoveredObject);
  } else if (!isSittingOnCouch) {
    // Default action: open first public domain book
    openBookReader(PUBLIC_DOMAIN_BOOKS[0]);
  }
}

function handleObjectClick(obj) {
  const type = obj.userData.type;
  switch (type) {
    case "book":
      openBookReader(obj.userData.bookData);
      break;
    case "couch":
      sitOnInflatableCouch();
      break;
    case "cat":
      petTheWingedCat();
      break;
    case "radio":
      audioMgr.nextTrack();
      spawnNoteParticle();
      break;
    case "exit":
      exitTo2DLanding();
      break;
  }
}

// Sit on Pink Inflatable Couch
function sitOnInflatableCouch() {
  isSittingOnCouch = true;
  setActivePreset("cam-couch");
  // Camera view sitting comfortably on the couch looking toward library, floating cat & pool
  transitionCamera(new THREE.Vector3(7.2, 1.45, 1.3), new THREE.Vector3(-1.0, 2.6, -5.0));

  showCatStatusToast("Sitting comfortably on the bright pink inflatable couch... 🛋️✨");
}

function standUpFromCouch() {
  if (!isSittingOnCouch) return;
  isSittingOnCouch = false;
  setActivePreset("cam-free");
}

// Pet the Winged Kawaii Cat
function petTheWingedCat() {
  audioMgr.playCatMeow();

  if (wingedCatMesh) {
    // 360 degree spin
    const startY = wingedCatMesh.rotation.y;
    let progress = 0;
    const spinInterval = setInterval(() => {
      progress += 0.15;
      wingedCatMesh.rotation.y = startY + progress * Math.PI * 2;
      if (progress >= 1) {
        clearInterval(spinInterval);
        wingedCatMesh.rotation.y = startY;
      }
    }, 16);
  }

  showCatStatusToast("Winged Cat is purring happily! (ฅ^•ﻌ•^ฅ nyaa~ ♥)");
}

function showCatStatusToast(text) {
  const toast = document.getElementById("cat-status-toast");
  const toastText = document.getElementById("cat-toast-text");
  toastText.innerText = text;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

// Exit back to 2D Landing Page
function exitTo2DLanding() {
  audioMgr.playPortalOpen();
  const metaverseContainer = document.getElementById("metaverse-container");
  const landingPage = document.getElementById("landing-page");
  const doorLeft = document.getElementById("door-left");
  const doorRight = document.getElementById("door-right");
  const portalLight = document.getElementById("portal-light");
  const knockBalloon = document.getElementById("knock-balloon");

  landingPage.classList.remove("hidden");
  setTimeout(() => {
    landingPage.classList.remove("fade-out");
    metaverseContainer.classList.add("hidden");

    // Close doors in 2D
    doorLeft.classList.remove("open");
    doorRight.classList.remove("open");
    portalLight.classList.remove("active");
    knockBalloon.classList.add("hidden");

    audioMgr.stopLofiMusic();
  }, 50);
}

// Smooth Camera Transition helper
function transitionCamera(targetPos, targetLookAt) {
  cameraTargetPos = targetPos.clone();
  cameraTargetLook = targetLookAt.clone();
}

// ============================================================================
// 6. ANIMATION & RENDER LOOP
// ============================================================================
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  const time = clock.getElapsedTime();

  // 1. Water Surface Animation
  if (waterMesh) {
    const pos = waterMesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const z = Math.sin(u * 1.5 + time * 2.2) * 0.08 + Math.cos(v * 1.5 + time * 1.8) * 0.06;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  }

  // 2. Waterfall Particles
  if (waterfallParticles) {
    const positions = waterfallParticles.geometry.attributes.position.array;
    const speeds = waterfallParticles.userData.speeds;
    for (let i = 0; i < speeds.length; i++) {
      positions[i * 3 + 1] -= speeds[i].vy;
      positions[i * 3 + 0] += speeds[i].vx;
      positions[i * 3 + 2] += speeds[i].vz;

      if (positions[i * 3 + 1] <= speeds[i].baseY) {
        positions[i * 3 + 1] = 0.8 + Math.random() * 0.4;
        positions[i * 3 + 0] = -8 + (Math.random() - 0.5) * 3.5;
        positions[i * 3 + 2] = -7.2 + (Math.random() - 0.5) * 1.5;
      }
    }
    waterfallParticles.geometry.attributes.position.needsUpdate = true;
  }

  // 3. Pink Flamingo Floaties Bobbing on Water
  flamingoFloaties.forEach(flamingo => {
    const data = flamingo.userData;
    flamingo.position.y = data.baseY + Math.sin(time * 2.0 + data.phase) * 0.05;
    flamingo.rotation.x = Math.sin(time * 1.5 + data.phase) * 0.06;
    flamingo.rotation.z = Math.cos(time * 1.2 + data.phase) * 0.05;
  });

  // 4. Winged Kawaii Cat Patrol & Wing Flapping
  if (wingedCatMesh) {
    // Gentle figure-8 flight path
    wingedCatMesh.position.x = -2 + Math.sin(time * 0.6) * 3.2;
    wingedCatMesh.position.z = Math.cos(time * 1.2) * 2.5;
    wingedCatMesh.position.y = 3.2 + Math.sin(time * 1.8) * 0.25;

    // Wing flapping
    catWings.forEach(w => {
      w.group.rotation.y = Math.sin(time * 9.0) * 0.45 * w.side;
    });

    // Tail sway
    if (wingedCatMesh.userData.tail) {
      wingedCatMesh.userData.tail.rotation.z = Math.sin(time * 4.0) * 0.35;
    }
  }

  // 5. 3D Boombox Equalizer Bars
  if (radioEqualizerBars.length > 0 && audioMgr.musicPlaying) {
    radioEqualizerBars.forEach((bar, i) => {
      const scale = 0.5 + Math.abs(Math.sin(time * 6 + i * 1.5)) * 1.8;
      bar.scale.y = scale;
    });
  }

  // 6. Camera Movement & Smooth Transitions
  if (cameraTargetPos && cameraTargetLook) {
    camera.position.lerp(cameraTargetPos, 0.06);
    currentLookAt.lerp(cameraTargetLook, 0.06);
    camera.lookAt(currentLookAt);

    if (camera.position.distanceTo(cameraTargetPos) < 0.05) {
      cameraTargetPos = null;
      cameraTargetLook = null;
    }
  } else if (!isSittingOnCouch) {
    // Free Walking Controls
    const moveSpeed = 6.0 * delta;
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const side = new THREE.Vector3(-forward.z, 0, forward.x);

    if (moveForward) camera.position.addScaledVector(forward, moveSpeed);
    if (moveBackward) camera.position.addScaledVector(forward, -moveSpeed);
    if (moveLeft) camera.position.addScaledVector(side, -moveSpeed);
    if (moveRight) camera.position.addScaledVector(side, moveSpeed);

    // Keep camera inside room boundaries
    camera.position.x = Math.max(-15, Math.min(15, camera.position.x));
    camera.position.z = Math.max(-15, Math.min(15, camera.position.z));
    camera.position.y = 2.5;

    // Apply look direction
    const lookVector = new THREE.Vector3(
      Math.sin(cameraRotation.yaw) * Math.cos(cameraRotation.pitch),
      Math.sin(cameraRotation.pitch),
      -Math.cos(cameraRotation.yaw) * Math.cos(cameraRotation.pitch)
    );
    currentLookAt.copy(camera.position).add(lookVector);
    camera.lookAt(currentLookAt);
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function spawnNoteParticle() {
  // Visual feedback on boombox
  showCatStatusToast("Playing next track from open-lofi collection! 📻🎶");
}

// ============================================================================
// 7. COZY E-BOOK READER MODAL (CYBER-READER v2.0)
// ============================================================================
let currentBook = null;
let currentSectionIdx = 0;
let currentFontSize = 15;

function openBookReader(bookData) {
  currentBook = bookData;
  currentSectionIdx = 0;

  const modal = document.getElementById("book-reader-modal");
  document.getElementById("book-title").innerText = bookData.title;
  document.getElementById("book-author").innerText = `${bookData.author} (${bookData.year})`;

  renderBookSection();
  modal.classList.remove("hidden");
}

function renderBookSection() {
  if (!currentBook) return;

  const section = currentBook.sections[currentSectionIdx];
  const container = document.getElementById("book-text-content");
  const indicator = document.getElementById("page-indicator");

  indicator.innerText = `Section ${currentSectionIdx + 1} / ${currentBook.sections.length}`;
  container.innerHTML = `
    <h3 style="color: var(--vapor-pink); margin-bottom: 12px; font-family: var(--font-pixel); font-size: 12px;">
      ${section.heading}
    </h3>
    <div style="font-size: ${currentFontSize}px; white-space: pre-wrap;">${section.text}</div>
  `;
  container.scrollTop = 0;
}

function setupBookReaderEvents() {
  const modal = document.getElementById("book-reader-modal");
  const closeBtn = document.getElementById("close-reader-btn");
  const backdrop = document.getElementById("reader-backdrop");
  const prevBtn = document.getElementById("prev-page-btn");
  const nextBtn = document.getElementById("next-page-btn");
  const couchBtn = document.getElementById("sit-and-read-btn");

  const fontInc = document.getElementById("font-increase");
  const fontDec = document.getElementById("font-decrease");

  const themeVapor = document.getElementById("theme-vapor");
  const themeParchment = document.getElementById("theme-parchment");
  const themeDark = document.getElementById("theme-dark");
  const textContent = document.getElementById("book-text-content");

  const closeModal = () => modal.classList.add("hidden");
  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  prevBtn.addEventListener("click", () => {
    if (currentBook && currentSectionIdx > 0) {
      currentSectionIdx--;
      renderBookSection();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentBook && currentSectionIdx < currentBook.sections.length - 1) {
      currentSectionIdx++;
      renderBookSection();
    }
  });

  couchBtn.addEventListener("click", () => {
    sitOnInflatableCouch();
    closeModal();
  });

  fontInc.addEventListener("click", () => {
    if (currentFontSize < 24) {
      currentFontSize += 2;
      renderBookSection();
    }
  });

  fontDec.addEventListener("click", () => {
    if (currentFontSize > 11) {
      currentFontSize -= 2;
      renderBookSection();
    }
  });

  themeVapor.addEventListener("click", () => {
    textContent.className = "book-text-content";
    setActiveThemeBtn(themeVapor);
  });

  themeParchment.addEventListener("click", () => {
    textContent.className = "book-text-content theme-parchment-mode";
    setActiveThemeBtn(themeParchment);
  });

  themeDark.addEventListener("click", () => {
    textContent.className = "book-text-content theme-dark-mode";
    setActiveThemeBtn(themeDark);
  });

  function setActiveThemeBtn(target) {
    [themeVapor, themeParchment, themeDark].forEach(b => b.classList.remove("active"));
    target.classList.add("active");
  }
}

// ============================================================================
// 8. RADIO UI & AUDIO CONTROLS
// ============================================================================
function updateRadioUI(isPlaying, trackTitle) {
  const badge = document.getElementById("radio-live-badge");
  const titleEl = document.getElementById("track-name");
  const viz = document.getElementById("visualizer-bars");
  const playBtn = document.getElementById("radio-play-btn");

  if (isPlaying) {
    badge.innerText = "ON AIR";
    badge.classList.add("live");
    titleEl.innerText = trackTitle;
    viz.classList.add("playing");
    playBtn.innerText = "⏸";
  } else {
    badge.innerText = "OFF";
    badge.classList.remove("live");
    titleEl.innerText = "Click Power To Start Lo-Fi";
    viz.classList.remove("playing");
    playBtn.innerText = "▶";
  }
}

function setupRadioEvents() {
  const powerBtn = document.getElementById("radio-power-btn");
  const playBtn = document.getElementById("radio-play-btn");
  const nextBtn = document.getElementById("radio-next-btn");
  const prevBtn = document.getElementById("radio-prev-btn");
  const purrBtn = document.getElementById("radio-cat-purr-toggle");
  const volSlider = document.getElementById("radio-volume");

  powerBtn.addEventListener("click", () => {
    if (audioMgr.musicPlaying) {
      audioMgr.stopLofiMusic();
    } else {
      audioMgr.startLofiMusic();
    }
  });

  playBtn.addEventListener("click", () => {
    if (audioMgr.musicPlaying) {
      audioMgr.stopLofiMusic();
    } else {
      audioMgr.startLofiMusic();
    }
  });

  nextBtn.addEventListener("click", () => audioMgr.nextTrack());
  prevBtn.addEventListener("click", () => audioMgr.prevTrack());

  purrBtn.addEventListener("click", () => {
    const isPurring = audioMgr.togglePurrAndWater();
    purrBtn.innerText = isPurring ? "🐱 SFX: ON" : "🐱 SFX: OFF";
    purrBtn.classList.toggle("active", isPurring);
  });

  volSlider.addEventListener("input", (e) => {
    audioMgr.setVolume(parseFloat(e.target.value));
  });
}

// ============================================================================
// INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initLandingPage();
  setupBookReaderEvents();
  setupRadioEvents();
});
