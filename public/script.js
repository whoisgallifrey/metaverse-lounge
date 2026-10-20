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
    id: "abogamer-vr-decompression",
    title: "Diving Decompression and VR Aftercare",
    author: "Micaela Mantegna (Abogamer)",
    year: "2023",
    color: "#2dd4bf",
    sourceUrl: "https://www.abogamer.com/resources",
    directUrl: "https://www.abogamer.com/news-1/diving-decompression-vr-aftercare",
    downloadUrl: "/api/resources/abogamer/vr-decompression.txt",
    sections: [
      {
        heading: "1. Lessons from the Deep & The Drop",
        text: `What does BDSM, diving, and the metaverse have in common? This article explores the novel idea of "immersive aftercare protocols", to shape the way we safely reinsert back from virtual reality.\n\nWhen divers return to the surface, they have to follow a process to reintroduce their bodies to the atmosphere. To avoid decompression sickness, during their ascent divers make either a series of stops (staged decompression), or follow a slow but continuous process. It is a deliberate process of acclimatization to protect the body from the changes of going from one state of pressure to another.\n\nInterestingly similar, kink lifestyles implement a stage of aftercare following an intense session to deal with the physical and emotional exhaustion ("the drop"). Both have in common the care placed in how to transition back from an immersive experience to mundane life.`
      },
      {
        heading: "2. The Virtual Transition & Sensory Disconnect",
        text: `Digital immersive experiences could extrapolate some of those lessons, as current technological attention is mostly placed in entering, rather than exiting, XR environments.\n\nWhich steps do we need to take to safely go back from a deeply immersive VR experience? How do we re-enter our physical body and space after experiencing virtual embodiment? In the long term, can you separate the effects in our cognition, when your body and mind are tricked into feeling something as real?\n\nStudies have linked immersive virtual reality with post-session dissociation and a lower sense of presence in objective reality. We need deliberate rituals of VR aftercare.`
      }
    ]
  },
  {
    id: "abogamer-arteficial",
    title: "ARTEficial: Creatividad, IA y Derecho de Autor",
    author: "Micaela Mantegna (Abogamer)",
    year: "2022 / 2025",
    color: "#01cdfe",
    sourceUrl: "https://www.abogamer.com/resources",
    directUrl: "https://www.abogamer.com/news-1/arteficial%3A-",
    downloadUrl: "/api/resources/abogamer/arteficial.txt",
    sections: [
      {
        heading: "1. Creatividad Humana vs. Generación Algorítmica",
        text: `La intersección entre la inteligencia artificial generativa y el derecho de autor plantea preguntas fundamentales sobre la naturaleza misma de la creatividad humana y los límites de la propiedad intelectual.\n\nEl derecho de autor moderno fue edificado sobre una concepción romántica del genio individual. Frente a sistemas de IA que procesan millones de parámetros y datasets colectivos, esta visión entra en crisis. La creatividad es intrínsecamente relacional y comunitaria.`
      },
      {
        heading: "2. Datasets de Entrenamiento y Dominio Público",
        text: `Debemos distinguir con claridad entre el uso de obras para el entrenamiento de modelos (minería de texto y datos como lectura computacional) y las obras generadas como resultado (output).\n\nAplicar el copyright de forma restrictiva al aprendizaje de máquinas arriesga privatizar el conocimiento y consolidar monopolios en manos de unos pocos gigantes tecnológicos. Las obras creadas sin intervención creativa humana genuina no deben recibir monopolios de exclusividad artificiales: el dominio público es la savia de la cultura humana.`
      }
    ]
  },
  {
    id: "abogamer-deadlock-dilemma",
    title: "Generative AI, Copyright & The Deadlock Dilemma",
    author: "Micaela Mantegna (Abogamer)",
    year: "2024",
    color: "#fffb96",
    sourceUrl: "https://www.abogamer.com/resources",
    directUrl: "https://www.abogamer.com/news-1/artificial-why-copyright-is-not-the-right-policy-tool-to-deal-with-generative-ai",
    downloadUrl: "/api/resources/abogamer/deadlock-dilemma.txt",
    sections: [
      {
        heading: "The Copyright Deadlock",
        text: `AI & Copyright are locked in a zero-sum game. One vs the other, in a tug-of-war where compromise seems out of the question. But what if expanding copyright is not the right policy tool?\n\nCreative industries and artists feel threatened by unauthorized scraping, while tech companies claim blanket fair use. Expanding copyright scope creates licensing cartels that hurt indie creators while failing to resolve ethical questions. We need collective remuneration mechanisms and public digital commons (Published on SSRN: 5090127).`
      }
    ]
  },
  {
    id: "abogamer-dumb-gods",
    title: "The Internet of Dumb Gods",
    author: "Micaela Mantegna (Abogamer)",
    year: "2022",
    color: "#b757ff",
    sourceUrl: "https://www.abogamer.com/resources",
    directUrl: "https://www.abogamer.com/news-1/the-internet-of-dumb-gods",
    downloadUrl: "/api/resources/abogamer/dumb-gods.txt",
    sections: [
      {
        heading: "Lovecraft and the Cult of the Algorithm",
        text: `People are becoming increasingly ritualistic in dealing with AI in social media. We pose and post in certain ways, even without knowing how those actions impact the result.\n\nThrough the lenses of Lovecraft’s cosmic horror pantheon, this article explores the deification of AI and the "cult of the algorithm": opaque, automated systems that govern online speech and livelihood like indifferent cosmic deities.`
      }
    ]
  },
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

      this.waterFilter = bandpass;

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

  // Playful planting pop sound effect
  playPlantPop() {
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(780, t + 0.12);
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.2);
  }

  // Dreamy discovery chime when finding a plant message
  playDiscoveryChime() {
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t + i * 0.07);
      gain.gain.setValueAtTime(0.18, t + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.6);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + i * 0.07);
      osc.stop(t + i * 0.07 + 0.65);
    });
  }

  // Couch Garden Contemplation audio mixing: radio off, cascade volume up +250%
  setCouchAmbient(isSitting) {
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (isSitting) {
      // 1. Radio goes off immediately
      this.stopLofiMusic();

      // 2. Cascade waterfall goes up in volume 250% more (base 0.04 -> 0.14, a 250% boost)
      if (this.waterGain) {
        const currentGain = this.waterGain.gain.value;
        this.waterGain.gain.cancelScheduledValues(t);
        this.waterGain.gain.setValueAtTime(currentGain, t);
        this.waterGain.gain.linearRampToValueAtTime(0.14, t + 1.2);
      }
      if (this.waterFilter) {
        this.waterFilter.frequency.cancelScheduledValues(t);
        this.waterFilter.frequency.linearRampToValueAtTime(530, t + 1.2);
        this.waterFilter.Q.linearRampToValueAtTime(0.9, t + 1.2);
      }
    } else {
      // Restore normal waterfall ambient volume (0.04)
      if (this.waterGain) {
        const currentGain = this.waterGain.gain.value;
        this.waterGain.gain.cancelScheduledValues(t);
        this.waterGain.gain.setValueAtTime(currentGain, t);
        this.waterGain.gain.linearRampToValueAtTime(0.04, t + 1.0);
      }
      if (this.waterFilter) {
        this.waterFilter.frequency.cancelScheduledValues(t);
        this.waterFilter.frequency.linearRampToValueAtTime(450, t + 1.0);
        this.waterFilter.Q.linearRampToValueAtTime(1.2, t + 1.0);
      }
    }
  }

  // Alias for backward compatibility
  setNightMode(isNight) {
    this.setCouchAmbient(isNight);
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
let ambientLight = null, pinkDir = null, warmPoint = null, couchNightIndicator = null;

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
  ambientLight = new THREE.AmbientLight("#4d226a", 1.8);
  scene.add(ambientLight);

  // Hot Pink Directional Light
  pinkDir = new THREE.DirectionalLight("#ff71ce", 2.2);
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
  warmPoint = new THREE.PointLight("#fffb96", 2.0, 14);
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
  createCollaborativeGarden();

  // Load persistent garden plants into 3D scene
  loadGardenPlants();

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

  // Position couch in open space horizontally facing the garden (zero collision, clear walkway)
  couchGroup.position.set(9.5, 0, -1.2);
  couchGroup.rotation.y = 0; // Horizontal, facing South directly into the garden
  scene.add(couchGroup);
}

// ============================================================================
// 6. WINGED KAWAII PURRING CAT & NEKO CUSTOMIZATION SYSTEM
// ============================================================================
const NEKO_WISDOM_QUOTES = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "It is no use going back to yesterday, because I was a different person then.", author: "Lewis Carroll" },
  { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "What you seek is seeking you.", author: "Rumi" },
  { text: "There is nothing either good or bad, but thinking makes it so.", author: "William Shakespeare" },
  { text: "Silence is a source of great strength.", author: "Lao Tzu" },
  { text: "The only journey is the one within.", author: "Rainer Maria Rilke" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "Until you make peace with who you are, you will never be content with what you have.", author: "Doris Mortman" },
  { text: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
  { text: "To see a World in a Grain of Sand and a Heaven in a Wild Flower.", author: "William Blake" }
];

let nekoConfig = {
  name: "Mochi",
  coat: "peach",        // peach, calico, tabby, tuxedo, sakura, white, void
  spotColor: "#78350f",
  eyeColor: "#1e1b4b",  // hex or "hetero"
  wingType: "angel",    // angel, pixie, bat, star
  accessory: "halo"     // halo, bow, sakura, wizard, none
};

function loadNekoConfig() {
  try {
    const saved = localStorage.getItem("neko_metaverse_config");
    if (saved) {
      nekoConfig = { ...nekoConfig, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Could not load neko config:", e);
  }
}

function saveNekoConfig() {
  try {
    localStorage.setItem("neko_metaverse_config", JSON.stringify(nekoConfig));
  } catch (e) {
    console.warn("Could not save neko config:", e);
  }
}

let catWings = [];
let catParts = {};
let isPettedHappy = false;
let happyEyeTimer = null;
let wisdomBubbleTimeout = null;
let activeHeartParticles = [];

function createHeartTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ff2a85";
  ctx.beginPath();
  ctx.moveTo(32, 20);
  ctx.bezierCurveTo(32, 10, 16, 10, 16, 26);
  ctx.bezierCurveTo(16, 42, 32, 52, 32, 58);
  ctx.bezierCurveTo(32, 52, 48, 42, 48, 26);
  ctx.bezierCurveTo(48, 10, 32, 10, 32, 20);
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

function createNameTagTexture(name) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(36, 12, 60, 0.85)";
  ctx.roundRect ? ctx.roundRect(8, 8, 240, 48, 10) : ctx.fillRect(8, 8, 240, 48);
  ctx.fill();
  ctx.strokeStyle = "#ff71ce";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.font = "bold 26px 'Comfortaa', sans-serif";
  ctx.fillStyle = "#fffb96";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`🐾 ${name} 🐾`, 128, 32);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function createWingedKawaiiCat() {
  loadNekoConfig();
  const cat = new THREE.Group();
  catParts = {
    openEyes: [],
    closedEyes: [],
    spots: [],
    stripes: [],
    accessories: {},
    wingGroups: {}
  };

  // Base Fur Material
  const furMat = new THREE.MeshStandardMaterial({
    color: "#fed7aa",
    roughness: 0.55
  });
  catParts.furMat = furMat;

  const innerPinkMat = new THREE.MeshStandardMaterial({
    color: "#ff71ce",
    roughness: 0.4
  });
  catParts.innerPinkMat = innerPinkMat;

  // Spot Material
  const spotMat = new THREE.MeshStandardMaterial({
    color: nekoConfig.spotColor,
    roughness: 0.55
  });
  catParts.spotMat = spotMat;

  // Eye Material
  const eyeLeftMat = new THREE.MeshBasicMaterial({ color: "#1e1b4b" });
  const eyeRightMat = new THREE.MeshBasicMaterial({ color: "#1e1b4b" });
  catParts.eyeLeftMat = eyeLeftMat;
  catParts.eyeRightMat = eyeRightMat;

  // Chubby Cat Body
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), furMat);
  body.scale.set(1, 0.9, 1.25);
  body.castShadow = true;
  cat.add(body);
  catParts.body = body;

  // Spots and Patches Group on Body
  const spotsGroup = new THREE.Group();
  cat.add(spotsGroup);
  catParts.spotsGroup = spotsGroup;

  // Calico Patches on back & side
  const patch1 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), spotMat);
  patch1.position.set(-0.35, 0.25, 0.1);
  patch1.scale.set(1, 0.6, 1.2);
  spotsGroup.add(patch1);
  catParts.spots.push(patch1);

  const patch2 = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), spotMat);
  patch2.position.set(0.28, 0.35, -0.3);
  patch2.scale.set(1.1, 0.5, 1);
  spotsGroup.add(patch2);
  catParts.spots.push(patch2);

  // Tabby Stripes on Back
  for (let s = -2; s <= 2; s++) {
    const stripe = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.04, 6, 16, Math.PI), spotMat);
    stripe.rotation.x = Math.PI / 2;
    stripe.position.set(0, 0.05, s * 0.22);
    stripe.scale.set(0.9, 1.2, 0.8);
    spotsGroup.add(stripe);
    catParts.stripes.push(stripe);
  }

  // Tuxedo White Chest & Belly Patch
  const tuxedoMat = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.6 });
  const tuxedoChest = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), tuxedoMat);
  tuxedoChest.position.set(0, -0.05, 0.35);
  tuxedoChest.scale.set(0.9, 1.1, 0.8);
  spotsGroup.add(tuxedoChest);
  catParts.tuxedoChest = tuxedoChest;

  // Head Group (for nuzzling & tilting)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.45, 0.7);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.52, 20, 20), furMat);
  head.castShadow = true;
  headGroup.add(head);
  catParts.head = head;
  catParts.headGroup = headGroup;

  // Ears
  [-0.32, 0.32].forEach(x => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 8), furMat);
    ear.position.set(x, 0.5, -0.05);
    ear.rotation.z = x > 0 ? -0.2 : 0.2;
    headGroup.add(ear);

    const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 8), innerPinkMat);
    innerEar.position.set(x, 0.49, 0.01);
    innerEar.rotation.z = x > 0 ? -0.2 : 0.2;
    headGroup.add(innerEar);
  });

  // Eyes System: Open Eyes vs Cute Happy Closed Eyes (^ . ^)
  const eyeOffsets = [-0.18, 0.18];
  eyeOffsets.forEach((x, idx) => {
    const eyeMat = idx === 0 ? eyeLeftMat : eyeRightMat;

    // 1) Open Anime Eye (Sphere + Glint)
    const openEyeGroup = new THREE.Group();
    const eyeBall = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 14), eyeMat);
    openEyeGroup.add(eyeBall);

    const glint = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 8, 8),
      new THREE.MeshBasicMaterial({ color: "#ffffff" })
    );
    glint.position.set(0.02, 0.03, 0.06);
    openEyeGroup.add(glint);

    openEyeGroup.position.set(x, 0.03, 0.45);
    headGroup.add(openEyeGroup);
    catParts.openEyes.push(openEyeGroup);

    // 2) Closed Happy Eye (^ . ^) Crescent Curve
    const closedEye = new THREE.Mesh(
      new THREE.TorusGeometry(0.065, 0.02, 8, 16, Math.PI),
      new THREE.MeshBasicMaterial({ color: "#1e1b4b" })
    );
    closedEye.position.set(x, 0.03, 0.48);
    closedEye.rotation.z = Math.PI; // Inverted arc = happy closed eye ^
    closedEye.visible = false;
    headGroup.add(closedEye);
    catParts.closedEyes.push(closedEye);
  });

  // Blushing Cheeks
  [-0.28, 0.28].forEach(x => {
    const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.08, 12), innerPinkMat);
    cheek.position.set(x, -0.07, 0.44);
    cheek.rotation.y = x > 0 ? 0.3 : -0.3;
    headGroup.add(cheek);
  });

  // Tiny Cute Nose & Mouth
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.06, 6), innerPinkMat);
  nose.position.set(0, -0.05, 0.5);
  nose.rotation.x = Math.PI / 2;
  headGroup.add(nose);

  cat.add(headGroup);

  // Swaying Tail
  const tailGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.9, 12);
  const tail = new THREE.Mesh(tailGeo, furMat);
  tail.position.set(0, 0.4, -0.85);
  tail.rotation.x = -Math.PI / 3;
  cat.add(tail);
  cat.userData.tail = tail;

  // ==========================================
  // WINGS VARIANTS (Angel, Pixie, Bat, Star)
  // ==========================================
  const wingsMasterGroup = new THREE.Group();
  wingsMasterGroup.position.set(0, 0.45, -0.1);
  cat.add(wingsMasterGroup);
  catParts.wingsMasterGroup = wingsMasterGroup;

  catWings = [];

  // 1) Angel Feather Wings (Default)
  const angelWingMat = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#01cdfe",
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 0.85,
    roughness: 0.1
  });
  const angelGroup = new THREE.Group();
  [-1, 1].forEach(side => {
    const wingG = new THREE.Group();
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.05), angelWingMat);
    wing.position.set(side * 0.4, 0, 0);
    wingG.add(wing);
    wingG.position.set(side * 0.3, 0, 0);
    angelGroup.add(wingG);
    catWings.push({ group: wingG, side: side, type: "angel" });
  });
  wingsMasterGroup.add(angelGroup);
  catParts.wingGroups.angel = angelGroup;

  // 2) Pixie Translucent Wings
  const pixieWingMat = new THREE.MeshStandardMaterial({
    color: "#ff71ce",
    emissive: "#ff71ce",
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.7,
    roughness: 0.1
  });
  const pixieGroup = new THREE.Group();
  [-1, 1].forEach(side => {
    const wingG = new THREE.Group();
    const wing = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.85, 12), pixieWingMat);
    wing.position.set(side * 0.45, 0.2, 0);
    wing.rotation.z = side * -Math.PI / 3;
    wingG.add(wing);
    wingG.position.set(side * 0.3, 0, 0);
    pixieGroup.add(wingG);
    catWings.push({ group: wingG, side: side, type: "pixie" });
  });
  wingsMasterGroup.add(pixieGroup);
  catParts.wingGroups.pixie = pixieGroup;

  // 3) Kawaii Bat Wings
  const batWingMat = new THREE.MeshStandardMaterial({
    color: "#381254",
    emissive: "#9333ea",
    emissiveIntensity: 0.35,
    roughness: 0.3
  });
  const batGroup = new THREE.Group();
  [-1, 1].forEach(side => {
    const wingG = new THREE.Group();
    const batW = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.28, 0.04), batWingMat);
    batW.position.set(side * 0.38, 0, 0);
    batW.rotation.z = side * -0.2;
    wingG.add(batW);
    wingG.position.set(side * 0.3, 0, 0);
    batGroup.add(wingG);
    catWings.push({ group: wingG, side: side, type: "bat" });
  });
  wingsMasterGroup.add(batGroup);
  catParts.wingGroups.bat = batGroup;

  // 4) Stardust Crystal Wings
  const starWingMat = new THREE.MeshStandardMaterial({
    color: "#fffb96",
    emissive: "#fffb96",
    emissiveIntensity: 0.7,
    roughness: 0.1
  });
  const starGroup = new THREE.Group();
  [-1, 1].forEach(side => {
    const wingG = new THREE.Group();
    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), starWingMat);
    crystal.position.set(side * 0.45, 0.15, 0);
    crystal.scale.set(0.6, 1.4, 0.4);
    wingG.add(crystal);
    wingG.position.set(side * 0.3, 0, 0);
    starGroup.add(wingG);
    catWings.push({ group: wingG, side: side, type: "star" });
  });
  wingsMasterGroup.add(starGroup);
  catParts.wingGroups.star = starGroup;

  // ==========================================
  // ACCESSORIES (Halo, Bow, Sakura Pin, Wizard Hat)
  // ==========================================
  const accessoriesGroup = new THREE.Group();
  headGroup.add(accessoriesGroup);
  catParts.accessoriesGroup = accessoriesGroup;

  // 1) Glowing Halo
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.35, 0.04, 8, 24),
    new THREE.MeshBasicMaterial({ color: "#fffb96" })
  );
  halo.position.set(0, 0.8, 0);
  halo.rotation.x = Math.PI / 2;
  accessoriesGroup.add(halo);
  catParts.accessories.halo = halo;

  // 2) Pink Collar Bow
  const bowMat = new THREE.MeshStandardMaterial({ color: "#ff2a85", roughness: 0.3 });
  const bowGroup = new THREE.Group();
  const bowCenter = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), bowMat);
  bowGroup.add(bowCenter);
  [-0.1, 0.1].forEach(x => {
    const loop = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.16, 8), bowMat);
    loop.rotation.z = x > 0 ? -Math.PI / 2 : Math.PI / 2;
    loop.position.set(x, 0, 0);
    bowGroup.add(loop);
  });
  bowGroup.position.set(0, -0.4, 0.42);
  accessoriesGroup.add(bowGroup);
  catParts.accessories.bow = bowGroup;

  // 3) Sakura Flower Pin on Ear
  const flowerGroup = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const petal = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 8, 8),
      new THREE.MeshStandardMaterial({ color: "#ff71ce" })
    );
    petal.scale.set(0.6, 1.2, 0.4);
    petal.position.set(Math.cos(i * 1.25) * 0.08, Math.sin(i * 1.25) * 0.08, 0);
    flowerGroup.add(petal);
  }
  const centerPollen = new THREE.Mesh(
    new THREE.SphereGeometry(0.04, 8, 8),
    new THREE.MeshBasicMaterial({ color: "#fffb96" })
  );
  flowerGroup.add(centerPollen);
  flowerGroup.position.set(0.32, 0.45, 0.12);
  accessoriesGroup.add(flowerGroup);
  catParts.accessories.sakura = flowerGroup;

  // 4) Wizard / Cyber Witch Hat
  const hatMat = new THREE.MeshStandardMaterial({ color: "#381254", roughness: 0.4 });
  const hatGroup = new THREE.Group();
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.04, 16), hatMat);
  hatGroup.add(brim);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.7, 16), hatMat);
  cone.position.set(0, 0.35, 0);
  hatGroup.add(cone);
  const band = new THREE.Mesh(
    new THREE.TorusGeometry(0.33, 0.03, 8, 20),
    new THREE.MeshBasicMaterial({ color: "#fffb96" })
  );
  band.rotation.x = Math.PI / 2;
  band.position.set(0, 0.06, 0);
  hatGroup.add(band);
  hatGroup.position.set(0, 0.55, -0.05);
  hatGroup.rotation.x = -0.15;
  accessoriesGroup.add(hatGroup);
  catParts.accessories.wizard = hatGroup;

  // 3D Floating Name Tag Billboard
  const nameSpriteMat = new THREE.SpriteMaterial({
    map: createNameTagTexture(nekoConfig.name),
    transparent: true
  });
  const nameSprite = new THREE.Sprite(nameSpriteMat);
  nameSprite.scale.set(1.4, 0.35, 1);
  nameSprite.position.set(0, 1.55, 0.7);
  headGroup.add(nameSprite);
  catParts.nameSprite = nameSprite;

  // Interactive Hitbox
  const catHitbox = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 12, 12),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  catHitbox.userData = {
    type: "cat",
    label: `Pet ${nekoConfig.name} (🐾 nyaa~)`
  };
  cat.add(catHitbox);
  interactiveObjects.push(catHitbox);
  catParts.hitbox = catHitbox;

  cat.position.set(-2, 3.2, 0);
  scene.add(cat);
  wingedCatMesh = cat;

  // Apply loaded configuration immediately
  applyNekoCustomization();
}

// Update 3D Cat Model based on nekoConfig
function applyNekoCustomization() {
  if (!catParts || !catParts.furMat) return;

  // 1. Fur Coat Patterns & Colors
  const coatColors = {
    peach: "#fed7aa",
    calico: "#fff7ed",
    tabby: "#e2e8f0",
    tuxedo: "#1e142e",
    sakura: "#fbcfe8",
    white: "#ffffff",
    void: "#110720"
  };

  const furColor = coatColors[nekoConfig.coat] || "#fed7aa";
  catParts.furMat.color.set(furColor);

  // Spot / Patch color
  catParts.spotMat.color.set(nekoConfig.spotColor);

  // Show/Hide Spots & Stripes depending on Coat
  const isCalico = nekoConfig.coat === "calico";
  const isTabby = nekoConfig.coat === "tabby";
  const isTuxedo = nekoConfig.coat === "tuxedo";

  catParts.spots.forEach(p => p.visible = isCalico);
  catParts.stripes.forEach(s => s.visible = isTabby);
  if (catParts.tuxedoChest) {
    catParts.tuxedoChest.visible = isTuxedo;
  }

  // 2. Eye Colors
  if (nekoConfig.eyeColor === "hetero") {
    catParts.eyeLeftMat.color.set("#01cdfe");  // Sapphire
    catParts.eyeRightMat.color.set("#fffb96"); // Golden
  } else {
    catParts.eyeLeftMat.color.set(nekoConfig.eyeColor);
    catParts.eyeRightMat.color.set(nekoConfig.eyeColor);
  }

  // 3. Wings Variant
  Object.keys(catParts.wingGroups).forEach(wingKey => {
    catParts.wingGroups[wingKey].visible = (wingKey === nekoConfig.wingType);
  });

  // 4. Accessories
  Object.keys(catParts.accessories).forEach(accKey => {
    catParts.accessories[accKey].visible = (accKey === nekoConfig.accessory);
  });

  // 5. Update Nametag Billboard & Hitbox Label
  if (catParts.nameSprite) {
    catParts.nameSprite.material.map = createNameTagTexture(nekoConfig.name);
    catParts.nameSprite.material.needsUpdate = true;
  }
  if (catParts.hitbox) {
    catParts.hitbox.userData.label = `Pet ${nekoConfig.name} (🐾 nyaa~)`;
  }
}

// Toggle Cat Eyes: Open vs Happy Closed (^ . ^)
function setCatEyesClosed(isClosed) {
  if (!catParts.openEyes || !catParts.closedEyes) return;
  catParts.openEyes.forEach(eye => eye.visible = !isClosed);
  catParts.closedEyes.forEach(eye => eye.visible = isClosed);
}

// Show Words of Wisdom Speech Bubble
function showNekoWisdomQuote() {
  const bubble = document.getElementById("cat-wisdom-bubble");
  const quoteText = document.getElementById("wisdom-quote-text");
  const quoteAuthor = document.getElementById("wisdom-quote-author");

  const randomQuote = NEKO_WISDOM_QUOTES[Math.floor(Math.random() * NEKO_WISDOM_QUOTES.length)];
  quoteText.innerText = `"${randomQuote.text}"`;
  quoteAuthor.innerText = `— ${randomQuote.author}`;

  bubble.classList.remove("hidden");
  updateNekoWisdomBubblePosition();

  if (wisdomBubbleTimeout) clearTimeout(wisdomBubbleTimeout);
  wisdomBubbleTimeout = setTimeout(() => {
    bubble.classList.add("hidden");
  }, 6500);
}

// Project Cat's 3D Coordinates to 2D Screen for Wisdom Bubble
function updateNekoWisdomBubblePosition() {
  const bubble = document.getElementById("cat-wisdom-bubble");
  if (!bubble || bubble.classList.contains("hidden") || !wingedCatMesh || !camera) return;

  const worldPos = wingedCatMesh.position.clone().add(new THREE.Vector3(0, 1.45, 0));
  worldPos.project(camera);

  // If object is behind camera, hide bubble
  if (worldPos.z > 1) {
    bubble.style.display = "none";
    return;
  }
  bubble.style.display = "block";

  const x = (worldPos.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-(worldPos.y * 0.5) + 0.5) * window.innerHeight;

  bubble.style.left = `${Math.round(x)}px`;
  bubble.style.top = `${Math.round(y)}px`;
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

  btnUp.addEventListener("touchstart", (e) => { e.preventDefault(); moveForward = true; if (isSittingOnCouch) standUpFromCouch(); });
  btnUp.addEventListener("touchend", () => { moveForward = false; });
  btnDown.addEventListener("touchstart", (e) => { e.preventDefault(); moveBackward = true; if (isSittingOnCouch) standUpFromCouch(); });
  btnDown.addEventListener("touchend", () => { moveBackward = false; });
  btnLeft.addEventListener("touchstart", (e) => { e.preventDefault(); moveLeft = true; if (isSittingOnCouch) standUpFromCouch(); });
  btnLeft.addEventListener("touchend", () => { moveLeft = false; });
  btnRight.addEventListener("touchstart", (e) => { e.preventDefault(); moveRight = true; if (isSittingOnCouch) standUpFromCouch(); });
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
    standUpFromCouch();
    petTheWingedCat();
  });

  const gardenBtn = document.getElementById("cam-garden");
  if (gardenBtn) {
    gardenBtn.addEventListener("click", () => {
      setActivePreset("cam-garden");
      standUpFromCouch();
      transitionCamera(new THREE.Vector3(9.5, 4.5, 16.5), new THREE.Vector3(9.5, 1.2, 9.5));
      showCatStatusToast("Exploring the Collaborative Metaverse Garden! 🌿✨");
    });
  }

  const studioBtn = document.getElementById("open-garden-studio-btn");
  if (studioBtn) {
    studioBtn.addEventListener("click", openPlantStudio);
  }

  const ticketBtn = document.getElementById("open-golden-ticket-btn");
  if (ticketBtn) {
    ticketBtn.addEventListener("click", openGoldenTicketModal);
  }

  const recoverBtn = document.getElementById("open-recovery-btn");
  if (recoverBtn) {
    recoverBtn.addEventListener("click", openRecoveryModal);
  }

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
      openNekoSalon();
      break;
    case "radio":
      audioMgr.nextTrack();
      spawnNoteParticle();
      break;
    case "exit":
      exitTo2DLanding();
      break;
    case "plant":
      discoverPlantMessage(obj.userData.plantData, obj);
      break;
    case "garden_ground":
      openPlantStudio();
      break;
  }
}

// Sit on Pink Inflatable Couch & Garden Contemplation Mode
function sitOnInflatableCouch() {
  isSittingOnCouch = true;
  setActivePreset("cam-couch");

  // 1) Smooth camera transition & rotation: position on the couch seat cushion looking straight South into the garden
  // Couch is horizontally placed at (9.5, 0, -1.2). Eye-level sitting on cushion is (9.5, 1.45, -1.0).
  // Target faces straight South across the Collaborative Garden lawn at (9.5, 1.15, 9.5).
  const couchCamPos = new THREE.Vector3(9.5, 1.45, -1.0);
  const gardenCenterTarget = new THREE.Vector3(9.5, 1.15, 9.5);
  transitionCamera(couchCamPos, gardenCenterTarget);

  // 2) Radio goes off & sound of cascade waterfall goes up in volume 250% more
  audioMgr.setCouchAmbient(true);

  // Activate Couch Contemplation / Night Mode visual palette
  document.body.classList.add("couch-night-mode");

  if (pinkDir) {
    pinkDir.color.set("#8b5cf6"); // Deep purple moonlight
    pinkDir.intensity = 1.3;
  }
  if (ambientLight) {
    ambientLight.color.set("#1e1035");
    ambientLight.intensity = 1.0;
  }
  if (warmPoint) {
    warmPoint.intensity = 0.6;
  }
  if (scene) {
    scene.background.set("#090314");
    scene.fog.color.set("#090314");
  }

  if (!couchNightIndicator) {
    couchNightIndicator = document.createElement("div");
    couchNightIndicator.className = "night-mode-indicator";
    couchNightIndicator.innerHTML = "🌙 COUCH GARDEN CONTEMPLATION • CASCADE AMBIENT (Click Walk to get up)";
    document.body.appendChild(couchNightIndicator);
  }
  couchNightIndicator.style.display = "block";

  showCatStatusToast("Sitting on pink couch... 🛋️✨ Radio off, cascade louder (+250%), contemplating the garden!");
}

function standUpFromCouch() {
  if (!isSittingOnCouch) return;
  isSittingOnCouch = false;
  setActivePreset("cam-free");

  // Restore normal cascade ambient audio volume (down from +250% back to normal 0.04)
  audioMgr.setCouchAmbient(false);

  // Deactivate Night Mode
  document.body.classList.remove("couch-night-mode");

  if (pinkDir) {
    pinkDir.color.set("#ff71ce");
    pinkDir.intensity = 2.2;
  }
  if (ambientLight) {
    ambientLight.color.set("#4d226a");
    ambientLight.intensity = 1.8;
  }
  if (warmPoint) {
    warmPoint.intensity = 2.0;
  }
  if (scene) {
    scene.background.set("#1a0c2e");
    scene.fog.color.set("#1a0c2e");
  }

  if (couchNightIndicator) {
    couchNightIndicator.style.display = "none";
  }

  showCatStatusToast("Standing up from the couch. Free walk mode active! 🚶‍♀️✨");
}

function burstHeartParticles(originPos) {
  const heartTex = createHeartTexture();
  for (let i = 0; i < 8; i++) {
    const mat = new THREE.SpriteMaterial({
      map: heartTex,
      transparent: true,
      opacity: 0.95
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(0.35, 0.35, 1);
    sprite.position.copy(originPos).add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.6,
      0.3 + Math.random() * 0.4,
      (Math.random() - 0.5) * 0.6
    ));
    scene.add(sprite);
    activeHeartParticles.push({
      sprite: sprite,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        0.025 + Math.random() * 0.03,
        (Math.random() - 0.5) * 0.02
      ),
      life: 1.0
    });
  }
}

// Pet the Winged Kawaii Cat
function petTheWingedCat() {
  audioMgr.playCatMeow();
  isPettedHappy = true;

  // 1. Kawaii Closed Eyes (^ . ^) for 4 seconds
  setCatEyesClosed(true);

  // 2. Head nuzzle upward tilt
  if (catParts.headGroup) {
    catParts.headGroup.rotation.x = -0.28;
  }

  // 3. Heart particle explosion & Happy spin
  if (wingedCatMesh) {
    burstHeartParticles(wingedCatMesh.position);

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

  // 4. Words of Wisdom Speech Bubble
  showNekoWisdomQuote();

  // Reset happy eye state after 4.5 seconds
  if (happyEyeTimer) clearTimeout(happyEyeTimer);
  happyEyeTimer = setTimeout(() => {
    isPettedHappy = false;
    setCatEyesClosed(false);
    if (catParts.headGroup) {
      catParts.headGroup.rotation.x = 0;
    }
  }, 4500);

  showCatStatusToast(`${nekoConfig.name} is purring with joy! (ฅ^•ﻌ•^ฅ nyaa~ ♥)`);
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

    // Natural idle blinking & subtle head tilt (when not petted)
    if (!isPettedHappy) {
      const blinkCycle = time % 3.6;
      const isBlinking = blinkCycle < 0.15;
      setCatEyesClosed(isBlinking);
      if (catParts.headGroup) {
        catParts.headGroup.rotation.x = Math.sin(time * 1.6) * 0.05;
      }
    }

    // Update floating Words of Wisdom bubble position
    updateNekoWisdomBubblePosition();

    // Floating heart particles update
    for (let i = activeHeartParticles.length - 1; i >= 0; i--) {
      const hp = activeHeartParticles[i];
      hp.sprite.position.add(hp.velocity);
      hp.life -= delta * 0.9;
      hp.sprite.material.opacity = Math.max(0, hp.life);
      if (hp.life <= 0) {
        scene.remove(hp.sprite);
        activeHeartParticles.splice(i, 1);
      }
    }
  }

  // 5. 3D Boombox Equalizer Bars
  if (radioEqualizerBars.length > 0 && audioMgr.musicPlaying) {
    radioEqualizerBars.forEach((bar, i) => {
      const scale = 0.5 + Math.abs(Math.sin(time * 6 + i * 1.5)) * 1.8;
      bar.scale.y = scale;
    });
  }

  // 5b. Animate Collaborative Garden Plants (Idle wind sway)
  if (typeof gardenPlantMeshes !== 'undefined' && gardenPlantMeshes && gardenPlantMeshes.length > 0) {
    gardenPlantMeshes.forEach(p => {
      const u = p.userData;
      p.rotation.z = Math.sin(time * u.swaySpeed + u.swayPhase) * 0.05;
      p.rotation.x = Math.cos(time * (u.swaySpeed * 0.7) + u.swayPhase) * 0.04;
    });
  }

  // 6. Camera Movement & Smooth Transitions
  if (isSalonOpen && wingedCatMesh) {
    // 3D Turntable Camera Orbit around Neko while salon is open
    salonTurntableAngle += delta * 0.75;
    const orbitRadius = 2.4;
    camera.position.x = wingedCatMesh.position.x + Math.sin(salonTurntableAngle) * orbitRadius;
    camera.position.z = wingedCatMesh.position.z + Math.cos(salonTurntableAngle) * orbitRadius;
    camera.position.y = wingedCatMesh.position.y + 0.25;
    camera.lookAt(wingedCatMesh.position);

    // Live Render 2D Pixel Art Cat on Game Boy LCD Screen
    render2DPixelCat(time);
  } else if (cameraTargetPos && cameraTargetLook) {
    camera.position.lerp(cameraTargetPos, 0.05);
    currentLookAt.lerp(cameraTargetLook, 0.05);
    camera.lookAt(currentLookAt);

    if (camera.position.distanceTo(cameraTargetPos) < 0.04 && currentLookAt.distanceTo(cameraTargetLook) < 0.04) {
      camera.position.copy(cameraTargetPos);
      currentLookAt.copy(cameraTargetLook);
      camera.lookAt(currentLookAt);
      cameraTargetPos = null;
      cameraTargetLook = null;

      // Sync cameraRotation angles so mouse panning starts seamlessly from current gaze
      const forwardDir = new THREE.Vector3().subVectors(currentLookAt, camera.position).normalize();
      cameraRotation.pitch = Math.asin(forwardDir.y);
      cameraRotation.yaw = Math.atan2(forwardDir.x, -forwardDir.z);
    }
  } else if (isSittingOnCouch) {
    // When sitting on couch, hold position comfortably on the seat cushion facing South into the garden
    camera.position.set(9.5, 1.45, -1.0);
    const lookVector = new THREE.Vector3(
      Math.sin(cameraRotation.yaw) * Math.cos(cameraRotation.pitch),
      Math.sin(cameraRotation.pitch),
      -Math.cos(cameraRotation.yaw) * Math.cos(cameraRotation.pitch)
    );
    currentLookAt.copy(camera.position).add(lookVector);
    camera.lookAt(currentLookAt);
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

    // Keep camera inside room & garden boundaries
    camera.position.x = Math.max(-15, Math.min(16.5, camera.position.x));
    camera.position.z = Math.max(-15, Math.min(16.5, camera.position.z));
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

  let extraLinksHtml = "";
  if (currentBook.directUrl || currentBook.downloadUrl || currentBook.sourceUrl) {
    extraLinksHtml = `
      <div style="margin-top: 20px; padding-top: 14px; border-top: 1px dashed rgba(255, 113, 206, 0.4); display: flex; gap: 14px; flex-wrap: wrap; font-size: 12px; align-items: center;">
        ${currentBook.directUrl ? `<a href="${currentBook.directUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--vapor-teal); text-decoration: underline; font-weight: bold; padding: 4px 8px; background: rgba(45, 212, 191, 0.1); border-radius: 4px; border: 1px solid rgba(45, 212, 191, 0.3);">🔗 Ver artículo en abogamer.com</a>` : ''}
        ${currentBook.downloadUrl ? `<a href="${currentBook.downloadUrl}" target="_blank" download style="color: var(--vapor-yellow); text-decoration: underline; font-weight: bold; padding: 4px 8px; background: rgba(253, 224, 71, 0.1); border-radius: 4px; border: 1px solid rgba(253, 224, 71, 0.3);">💾 Descargar texto completo (.txt)</a>` : ''}
        ${currentBook.sourceUrl && !currentBook.directUrl ? `<a href="${currentBook.sourceUrl}" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.7); text-decoration: underline;">🌐 Fuente: ${currentBook.sourceUrl}</a>` : ''}
      </div>
    `;
  }

  container.innerHTML = `
    <h3 style="color: var(--vapor-pink); margin-bottom: 12px; font-family: var(--font-pixel); font-size: 12px;">
      ${section.heading}
    </h3>
    <div style="font-size: ${currentFontSize}px; white-space: pre-wrap; line-height: 1.6;">${section.text}</div>
    ${extraLinksHtml}
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
// 9. RETRO GAME BOY / TAMAGOTCHI 2D PIXEL CAT SALON
// ============================================================================
let isSalonOpen = false;
let salonTurntableAngle = 0;

function openNekoSalon() {
  isSalonOpen = true;
  const modal = document.getElementById("neko-salon-modal");
  modal.classList.remove("hidden");

  // Populate name input
  const nameInput = document.getElementById("neko-name-input");
  if (nameInput) nameInput.value = nekoConfig.name;

  // Zoom camera gently into a close-up turntable orbit around the cat
  if (wingedCatMesh) {
    salonTurntableAngle = 0;
    transitionCamera(
      new THREE.Vector3(wingedCatMesh.position.x + 1.8, wingedCatMesh.position.y + 0.3, wingedCatMesh.position.z + 1.8),
      wingedCatMesh.position
    );
  }
}

function closeNekoSalon() {
  isSalonOpen = false;
  const modal = document.getElementById("neko-salon-modal");
  modal.classList.add("hidden");
}

// 2D Pixel Art Cat Renderer for Game Boy LCD Screen
function render2DPixelCat(time) {
  const canvas = document.getElementById("pixel-cat-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Clear with dark vaporwave LCD background
  ctx.fillStyle = "#0c1524";
  ctx.fillRect(0, 0, width, height);

  // Subtle LCD scanline grid
  ctx.fillStyle = "rgba(1, 205, 254, 0.05)";
  for (let y = 0; y < height; y += 4) {
    ctx.fillRect(0, y, width, 2);
  }

  // Motion physics
  const centerX = width / 2;
  const centerY = height / 2 + 10;
  const bobY = Math.sin(time * 3.2) * 3;
  const tilt = Math.sin(time * 1.6) * 0.12;
  const breathe = Math.sin(time * 4.0) * 1.5;
  const wingFlap = Math.sin(time * 7.5) * 8;
  const tailSway = Math.sin(time * 3.8) * 7;
  const blink = (time % 3.2) < 0.16;

  // Coat colors
  const coatMap = {
    peach: "#fed7aa",
    calico: "#fff7ed",
    tabby: "#e2e8f0",
    tuxedo: "#1e142e",
    sakura: "#fbcfe8",
    white: "#ffffff",
    void: "#120824"
  };
  const bodyColor = coatMap[nekoConfig.coat] || "#fed7aa";
  const spotColor = nekoConfig.spotColor || "#78350f";

  ctx.save();
  ctx.translate(centerX, centerY + bobY);

  // 1. Wings (behind body)
  if (nekoConfig.wingType !== "none") {
    ctx.save();
    let wingFill = "#01cdfe";
    if (nekoConfig.wingType === "pixie") wingFill = "#ff71ce";
    if (nekoConfig.wingType === "bat") wingFill = "#9333ea";
    if (nekoConfig.wingType === "star") wingFill = "#fffb96";

    ctx.fillStyle = wingFill;
    [-1, 1].forEach(side => {
      ctx.save();
      ctx.translate(side * 24, -14);
      ctx.rotate(side * (0.2 + wingFlap * 0.04));
      
      // Draw pixel wing shape
      if (nekoConfig.wingType === "bat") {
        ctx.fillRect(-12 * side, -10, 24, 12);
        ctx.fillRect(-8 * side, 2, 16, 6);
      } else if (nekoConfig.wingType === "star") {
        ctx.fillRect(-8, -8, 16, 16);
      } else {
        ctx.fillRect(-10 * side, -14, 22, 16);
        ctx.fillRect(-6 * side, 2, 14, 10);
      }
      ctx.restore();
    });
    ctx.restore();
  }

  // 2. Tail (swaying behind body)
  ctx.save();
  ctx.fillStyle = bodyColor;
  ctx.fillRect(-34 + tailSway, 2, 14, 8);
  ctx.fillRect(-42 + tailSway, -6, 10, 10);
  ctx.fillRect(-46 + tailSway, -16, 8, 12);
  ctx.restore();

  // 3. Body
  ctx.fillStyle = bodyColor;
  ctx.fillRect(-28 - breathe * 0.5, -16, 56 + breathe, 40);
  // Paws
  ctx.fillRect(-24, 24, 14, 8);
  ctx.fillRect(10, 24, 14, 8);

  // Calico Patches or Tabby Stripes on Body
  if (nekoConfig.coat === "calico") {
    ctx.fillStyle = spotColor;
    ctx.fillRect(-18, -12, 16, 16);
    ctx.fillRect(8, 0, 14, 14);
  } else if (nekoConfig.coat === "tabby") {
    ctx.fillStyle = spotColor;
    ctx.fillRect(-20, -10, 40, 4);
    ctx.fillRect(-16, 0, 32, 4);
    ctx.fillRect(-12, 10, 24, 4);
  } else if (nekoConfig.coat === "tuxedo") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-10, -6, 20, 24);
  }

  // 4. Head (with tilting angle)
  ctx.save();
  ctx.translate(0, -22);
  ctx.rotate(tilt);

  // Ears
  ctx.fillStyle = bodyColor;
  // Left Ear
  ctx.fillRect(-26, -26, 14, 16);
  ctx.fillRect(-22, -34, 8, 10);
  // Right Ear
  ctx.fillRect(12, -26, 14, 16);
  ctx.fillRect(14, -34, 8, 10);

  // Inner Pink Ear
  ctx.fillStyle = "#ff71ce";
  ctx.fillRect(-20, -28, 6, 10);
  ctx.fillRect(14, -28, 6, 10);

  // Head Base
  ctx.fillStyle = bodyColor;
  ctx.fillRect(-28, -20, 56, 40);

  // Forehead patch for calico
  if (nekoConfig.coat === "calico") {
    ctx.fillStyle = spotColor;
    ctx.fillRect(4, -20, 18, 12);
  }

  // Blushing Cheeks
  ctx.fillStyle = "#ff71ce";
  ctx.fillRect(-24, 2, 8, 6);
  ctx.fillRect(16, 2, 8, 6);

  // Nose
  ctx.fillStyle = "#ff71ce";
  ctx.fillRect(-3, 0, 6, 4);

  // Eyes (Open vs Happy Closed ^ . ^)
  if (blink || isPettedHappy) {
    // Happy Closed Eyes (^ . ^)
    ctx.fillStyle = "#1e1b4b";
    ctx.fillRect(-18, -8, 10, 3);
    ctx.fillRect(-16, -11, 6, 3);
    ctx.fillRect(8, -8, 10, 3);
    ctx.fillRect(10, -11, 6, 3);
  } else {
    // Open Big Anime Eyes
    let leftEye = nekoConfig.eyeColor === "hetero" ? "#01cdfe" : nekoConfig.eyeColor;
    let rightEye = nekoConfig.eyeColor === "hetero" ? "#fffb96" : nekoConfig.eyeColor;

    // Left Eye
    ctx.fillStyle = leftEye;
    ctx.fillRect(-18, -12, 10, 12);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-16, -10, 4, 4);

    // Right Eye
    ctx.fillStyle = rightEye;
    ctx.fillRect(8, -12, 10, 12);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(10, -10, 4, 4);
  }

  // 5. Head Accessory (Halo, Bow, Sakura, Wizard)
  if (nekoConfig.accessory === "halo") {
    ctx.fillStyle = "#fffb96";
    ctx.fillRect(-20, -42 + Math.sin(time * 4) * 2, 40, 5);
    ctx.clearRect(-14, -40 + Math.sin(time * 4) * 2, 28, 2);
  } else if (nekoConfig.accessory === "bow") {
    ctx.fillStyle = "#ff2a85";
    ctx.fillRect(-8, 20, 16, 8);
    ctx.fillRect(-14, 18, 8, 12);
    ctx.fillRect(6, 18, 8, 12);
  } else if (nekoConfig.accessory === "sakura") {
    ctx.fillStyle = "#ff71ce";
    ctx.fillRect(14, -30, 12, 12);
    ctx.fillStyle = "#fffb96";
    ctx.fillRect(18, -26, 4, 4);
  } else if (nekoConfig.accessory === "wizard") {
    ctx.fillStyle = "#4a126d";
    ctx.fillRect(-22, -32, 44, 6);
    ctx.fillRect(-14, -46, 28, 14);
    ctx.fillRect(-8, -58, 16, 12);
    ctx.fillStyle = "#fffb96";
    ctx.fillRect(-12, -36, 24, 4);
  }

  ctx.restore(); // end head
  ctx.restore(); // end root

  // Update status strip name badge
  const nameBadge = document.getElementById("pixel-cat-name-badge");
  if (nameBadge) nameBadge.innerText = `🐾 ${nekoConfig.name}`;
}

function setupNekoSalonEvents() {
  const openBtn = document.getElementById("open-neko-salon-btn");
  const closeBtn = document.getElementById("close-salon-btn");
  const backdrop = document.getElementById("salon-backdrop");
  const nameInput = document.getElementById("neko-name-input");
  const saveBtn = document.getElementById("save-neko-btn");
  const resetBtn = document.getElementById("reset-neko-btn");

  if (openBtn) openBtn.addEventListener("click", openNekoSalon);
  if (closeBtn) closeBtn.addEventListener("click", closeNekoSalon);
  if (backdrop) backdrop.addEventListener("click", closeNekoSalon);

  // Live Name Input
  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      nekoConfig.name = e.target.value.trim() || "Neko";
      applyNekoCustomization();
    });
  }

  // Coat Selection Buttons
  const coatBtns = document.querySelectorAll("#coat-selection .t-pill-btn");
  coatBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      coatBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      nekoConfig.coat = btn.dataset.coat;
      applyNekoCustomization();
    });
  });

  // Spot Color Swatches
  const spotSwatches = document.querySelectorAll("#spot-swatches .t-swatch");
  spotSwatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      spotSwatches.forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      nekoConfig.spotColor = swatch.dataset.color;
      applyNekoCustomization();
    });
  });

  // Eye Color Swatches
  const eyeSwatches = document.querySelectorAll("#eye-swatches .t-swatch");
  eyeSwatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      eyeSwatches.forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      nekoConfig.eyeColor = swatch.dataset.eye;
      applyNekoCustomization();
    });
  });

  // Wings Selection
  const wingBtns = document.querySelectorAll("#wings-selection .t-pill-btn");
  wingBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      wingBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      nekoConfig.wingType = btn.dataset.wing;
      applyNekoCustomization();
    });
  });

  // Accessory Selection
  const accBtns = document.querySelectorAll("#acc-selection .t-pill-btn");
  accBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      accBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      nekoConfig.accessory = btn.dataset.acc;
      applyNekoCustomization();
    });
  });

  // Save & Adopt - Smoothly returns to the lounge with companion floating beside you
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      audioMgr.playCatMeow();
      audioMgr.playPortalOpen();
      saveNekoConfig();
      closeNekoSalon();

      // Smoothly return camera to lounge view
      transitionCamera(new THREE.Vector3(0, 2.5, 9), new THREE.Vector3(0, 2.2, 0));

      // Cat floats gently beside the user / camera in the lounge!
      if (wingedCatMesh) {
        wingedCatMesh.position.set(1.5, 2.5, 6.8);
      }

      showCatStatusToast(`🐾 ${nekoConfig.name} adopted! Floating beside you in the lounge ✨ (ฅ^•ﻌ•^ฅ)`);
      setActivePreset("cam-free");
    });
  }

  // Reset Defaults
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      nekoConfig = {
        name: "Mochi",
        coat: "peach",
        spotColor: "#78350f",
        eyeColor: "#1e1b4b",
        wingType: "angel",
        accessory: "halo"
      };
      if (nameInput) nameInput.value = "Mochi";
      applyNekoCustomization();
      saveNekoConfig();
      showCatStatusToast("Neko restored to default pastel angel! ✦");
    });
  }
}

// ============================================================================
// 9. COLLABORATIVE METAVERSE GARDEN & PROCEDURAL 3D PLANT SYSTEM
// ============================================================================

const PLANT_PALETTE = {
  lilac: { main: "#d8b4fe", accent: "#c084fc", emissive: "#7c3aed" },
  teal: { main: "#2dd4bf", accent: "#0f766e", emissive: "#05ffa1" },
  pink: { main: "#f472b6", accent: "#db2777", emissive: "#ff71ce" },
  green: { main: "#4ade80", accent: "#16a34a", emissive: "#22c55e" },
  blue: { main: "#38bdf8", accent: "#0284c7", emissive: "#01cdfe" },
  red: { main: "#f87171", accent: "#dc2626", emissive: "#ef4444" },
  white: { main: "#f8fafc", accent: "#cbd5e1", emissive: "#ffffff" }
};

// Visitor Session State (backed by server & localStorage)
let visitorSession = {
  visitorId: localStorage.getItem("metaverse_visitorId") || null,
  recoveryCode: localStorage.getItem("metaverse_recoveryCode") || null,
  visitsCount: 1,
  plantsCount: 0,
  createdAt: new Date().toISOString()
};

let gardenPlants = [];
let gardenPlantMeshes = [];
let gardenSpores = null;

// Initialize or resume visitor session with the Node server
async function initVisitorSession() {
  try {
    const res = await fetch("/api/visitors/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId: visitorSession.visitorId,
        recoveryCode: visitorSession.recoveryCode
      })
    });
    const data = await res.json();
    if (data.success) {
      visitorSession.visitorId = data.visitorId;
      if (data.recoveryCode) {
        visitorSession.recoveryCode = data.recoveryCode;
      }
      visitorSession.visitsCount = data.visitsCount;
      visitorSession.createdAt = data.createdAt;

      localStorage.setItem("metaverse_visitorId", visitorSession.visitorId);
      if (visitorSession.recoveryCode) {
        localStorage.setItem("metaverse_recoveryCode", visitorSession.recoveryCode);
      }

      updateGoldenTicketUI();
      console.log("🎫 [Visitor] Session active:", visitorSession.visitorId);
    }
  } catch (err) {
    console.warn("[Visitor] Offline or local fallback mode:", err);
  }
}

// 1. Create the Collaborative Garden 3D Grass Parcel & Border
function createCollaborativeGarden() {
  const gardenGroup = new THREE.Group();

  // Vibrant grass parcel with vaporwave green/cyan gradient texture
  const grassCanvas = document.createElement("canvas");
  grassCanvas.width = 512;
  grassCanvas.height = 512;
  const gCtx = grassCanvas.getContext("2d");
  const grad = gCtx.createRadialGradient(256, 256, 20, 256, 256, 256);
  grad.addColorStop(0, "#22c55e");
  grad.addColorStop(0.65, "#10b981");
  grad.addColorStop(1, "#059669");
  gCtx.fillStyle = grad;
  gCtx.fillRect(0, 0, 512, 512);

  // Subtle surreal grid lines on grass
  gCtx.strokeStyle = "rgba(45, 212, 191, 0.25)";
  gCtx.lineWidth = 3;
  const step = 64;
  for (let x = 0; x <= 512; x += step) {
    gCtx.beginPath(); gCtx.moveTo(x, 0); gCtx.lineTo(x, 512); gCtx.stroke();
    gCtx.beginPath(); gCtx.moveTo(0, x); gCtx.lineTo(512, x); gCtx.stroke();
  }

  const grassTex = new THREE.CanvasTexture(grassCanvas);
  grassTex.wrapS = THREE.RepeatWrapping;
  grassTex.wrapT = THREE.RepeatWrapping;
  grassTex.repeat.set(3, 3);

  // Main Grass Parcel (14x14m elevated slightly above floor)
  const grassMat = new THREE.MeshStandardMaterial({
    map: grassTex,
    roughness: 0.6,
    metalness: 0.15
  });
  const grassMesh = new THREE.Mesh(new THREE.BoxGeometry(14, 0.25, 14), grassMat);
  grassMesh.position.set(9.5, 0.12, 9.5);
  grassMesh.receiveShadow = true;
  gardenGroup.add(grassMesh);

  // Hitbox on grass to open Plant Studio on click
  const grassHitbox = new THREE.Mesh(
    new THREE.BoxGeometry(14, 0.3, 14),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  grassHitbox.position.set(9.5, 0.15, 9.5);
  grassHitbox.userData = {
    type: "garden_ground",
    label: "🌱 Click Grass to Open Plant Studio!"
  };
  gardenGroup.add(grassHitbox);
  interactiveObjects.push(grassHitbox);

  // Glowing Neon Border Stones around the parcel perimeter
  const borderMat = new THREE.MeshStandardMaterial({
    color: "#2dd4bf",
    roughness: 0.3,
    metalness: 0.4,
    emissive: "#05ffa1",
    emissiveIntensity: 0.25
  });

  // Perimeter border curb (North, South, East, and split West with entrance gateway)
  const curbNorth = new THREE.Mesh(new THREE.BoxGeometry(14.4, 0.35, 0.4), borderMat);
  curbNorth.position.set(9.5, 0.2, 2.5);
  gardenGroup.add(curbNorth);

  const curbSouth = new THREE.Mesh(new THREE.BoxGeometry(14.4, 0.35, 0.4), borderMat);
  curbSouth.position.set(9.5, 0.2, 16.5);
  gardenGroup.add(curbSouth);

  const curbEast = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.35, 14.4), borderMat);
  curbEast.position.set(16.5, 0.2, 9.5);
  gardenGroup.add(curbEast);

  // West curb segments with 3.4m entrance opening for stepping stone path (well away from the couch at 7.5, 1.5)
  const curbWestNorth = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.35, 5.2), borderMat);
  curbWestNorth.position.set(2.5, 0.2, 5.1);
  gardenGroup.add(curbWestNorth);

  const curbWestSouth = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.35, 5.2), borderMat);
  curbWestSouth.position.set(2.5, 0.2, 13.9);
  gardenGroup.add(curbWestSouth);

  // Stepping stones path connecting Lounge to Garden
  const stoneMat = new THREE.MeshStandardMaterial({ color: "#e2e8f0", roughness: 0.4 });
  for (let i = 0; i < 4; i++) {
    const stone = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.1, 16), stoneMat);
    stone.position.set(2.5 - (i + 1) * 0.9, 0.08, 9.5 + (i % 2 === 0 ? 0.3 : -0.3));
    gardenGroup.add(stone);
  }

  // Holographic Garden Entrance Arch Sign (Positioned at garden walkway entrance x=2.5, z=9.5, 10m away from couch)
  const archCanvas = document.createElement("canvas");
  archCanvas.width = 512;
  archCanvas.height = 128;
  const aCtx = archCanvas.getContext("2d");
  aCtx.fillStyle = "#160b2e";
  aCtx.fillRect(0, 0, 512, 128);
  aCtx.strokeStyle = "#05ffa1";
  aCtx.lineWidth = 6;
  aCtx.strokeRect(4, 4, 504, 120);
  aCtx.font = "bold 26px sans-serif";
  aCtx.fillStyle = "#2dd4bf";
  aCtx.textAlign = "center";
  aCtx.fillText("METAVERSE GARDEN", 256, 50);
  aCtx.font = "20px monospace";
  aCtx.fillStyle = "#ff71ce";
  aCtx.fillText("共同庭園 • PLANT & DISCOVER", 256, 92);

  const archTex = new THREE.CanvasTexture(archCanvas);

  // Outer sign face: specifically oriented with rotation.y = -Math.PI / 2 (facing -X) so it is 100% properly legible from the stepping stones entrance
  const archSignOuter = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 0.9),
    new THREE.MeshBasicMaterial({ map: archTex, transparent: true, side: THREE.FrontSide })
  );
  archSignOuter.position.set(2.48, 3.8, 9.5);
  archSignOuter.rotation.y = -Math.PI / 2; // Directly faces visitors approaching along stepping stones
  gardenGroup.add(archSignOuter);

  // Inner sign face: specifically oriented with rotation.y = Math.PI / 2 (facing +X) so it is also 100% legible from inside the garden looking back
  const archSignInner = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 0.9),
    new THREE.MeshBasicMaterial({ map: archTex, transparent: true, side: THREE.FrontSide })
  );
  archSignInner.position.set(2.52, 3.8, 9.5);
  archSignInner.rotation.y = Math.PI / 2; // Directly faces visitors inside the garden
  gardenGroup.add(archSignInner);

  // Top cyber crossbar connecting the entrance posts
  const archCrossbar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 3.6, 12),
    new THREE.MeshStandardMaterial({ color: "#4c1d95", metalness: 0.5 })
  );
  archCrossbar.rotation.x = Math.PI / 2;
  archCrossbar.position.set(2.5, 3.8, 9.5);
  gardenGroup.add(archCrossbar);

  // Arch Posts framing the entrance walkway
  const postMat = new THREE.MeshStandardMaterial({ color: "#4c1d95", metalness: 0.5 });
  const neonRingMat = new THREE.MeshStandardMaterial({
    color: "#05ffa1",
    emissive: "#05ffa1",
    emissiveIntensity: 0.6,
    roughness: 0.2
  });
  [-1.7, 1.7].forEach(zOff => {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 3.8, 12), postMat);
    post.position.set(2.5, 1.9, 9.5 + zOff);
    gardenGroup.add(post);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 24), neonRingMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(2.5, 2.2, 9.5 + zOff);
    gardenGroup.add(ring);
  });

  // Floating Pollen / Spores Particle System
  const sporeCount = 120;
  const sporeGeo = new THREE.BufferGeometry();
  const sporePos = new Float32Array(sporeCount * 3);
  for (let i = 0; i < sporeCount; i++) {
    sporePos[i * 3 + 0] = 3.5 + Math.random() * 12;
    sporePos[i * 3 + 1] = 0.5 + Math.random() * 3.5;
    sporePos[i * 3 + 2] = 3.5 + Math.random() * 12;
  }
  sporeGeo.setAttribute("position", new THREE.BufferAttribute(sporePos, 3));
  const sporeMat = new THREE.PointsMaterial({
    color: "#fffb96",
    size: 0.15,
    transparent: true,
    opacity: 0.85
  });
  gardenSpores = new THREE.Points(sporeGeo, sporeMat);
  gardenGroup.add(gardenSpores);

  scene.add(gardenGroup);
}

// 2. Procedural Cartoon Face Texture Generator (Art-toy style)
function generatePlantFaceTexture(eyeType = "happy", mouthType = "smile") {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  // Transparent background
  ctx.clearRect(0, 0, 256, 256);

  // Soft Kawaii Pink Blush Cheeks
  ctx.fillStyle = "rgba(244, 114, 182, 0.65)";
  ctx.beginPath(); ctx.arc(58, 142, 22, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(198, 142, 22, 0, Math.PI * 2); ctx.fill();

  ctx.strokeStyle = "#1e1b4b";
  ctx.fillStyle = "#1e1b4b";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Cartoon Eyes
  switch (eyeType) {
    case "happy": // ^ ^
      ctx.beginPath(); ctx.arc(75, 100, 22, Math.PI, 0); ctx.stroke();
      ctx.beginPath(); ctx.arc(181, 100, 22, Math.PI, 0); ctx.stroke();
      break;

    case "sleepy": // - - with cute lash
      ctx.beginPath(); ctx.moveTo(52, 98); ctx.lineTo(98, 98); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(158, 98); ctx.lineTo(204, 98); ctx.stroke();
      break;

    case "playful": // > <
      ctx.beginPath();
      ctx.moveTo(55, 82); ctx.lineTo(92, 100); ctx.lineTo(55, 118);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(201, 82); ctx.lineTo(164, 100); ctx.lineTo(201, 118);
      ctx.stroke();
      break;

    case "mysterious": // • • with little glint
      ctx.beginPath(); ctx.arc(75, 96, 15, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(181, 96, 15, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(71, 92, 5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(177, 92, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#1e1b4b";
      break;

    case "uncanny": // ◉ ◉ wide concentric hypnotic rings
      ctx.beginPath(); ctx.arc(75, 96, 26, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(181, 96, 26, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(75, 96, 12, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(181, 96, 12, 0, Math.PI * 2); ctx.fill();
      break;

    default:
      ctx.beginPath(); ctx.arc(75, 100, 20, Math.PI, 0); ctx.stroke();
      ctx.beginPath(); ctx.arc(181, 100, 20, Math.PI, 0); ctx.stroke();
  }

  // Cartoon Mouths
  ctx.strokeStyle = "#1e1b4b";
  ctx.fillStyle = "#1e1b4b";
  ctx.lineWidth = 6;

  switch (mouthType) {
    case "smile": // ‿
      ctx.beginPath(); ctx.arc(128, 140, 26, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
      break;

    case "cat": // ω
      ctx.beginPath(); ctx.arc(114, 146, 14, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke();
      ctx.beginPath(); ctx.arc(142, 146, 14, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke();
      break;

    case "whistle": // o
      ctx.beginPath(); ctx.arc(128, 154, 11, 0, Math.PI * 2); ctx.stroke();
      break;

    case "mischievous": // ∇
      ctx.beginPath();
      ctx.moveTo(112, 144); ctx.lineTo(144, 144); ctx.lineTo(128, 168); ctx.closePath();
      ctx.fill();
      break;

    case "open": // O
      ctx.beginPath(); ctx.ellipse(128, 156, 16, 22, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#ff71ce";
      ctx.beginPath(); ctx.ellipse(128, 164, 10, 10, 0, 0, Math.PI); ctx.fill();
      break;

    default:
      ctx.beginPath(); ctx.arc(128, 142, 22, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
  }

  return new THREE.CanvasTexture(canvas);
}

// 3. Procedural 3D Plant Model Generator (6 Bodies: Cactus, Mushroom, Monstera, Succulent, Flower, Tree)
function createPlantMesh(data) {
  const group = new THREE.Group();
  const bodyType = data.bodyType || "mushroom";
  const pPal = PLANT_PALETTE[data.primaryColor] || PLANT_PALETTE.lilac;
  const sPal = PLANT_PALETTE[data.secondaryColor] || PLANT_PALETTE.teal;

  const mainMat = new THREE.MeshStandardMaterial({
    color: pPal.main,
    roughness: 0.35,
    metalness: 0.15,
    emissive: pPal.emissive,
    emissiveIntensity: 0.12
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: sPal.main,
    roughness: 0.3,
    metalness: 0.2,
    emissive: sPal.emissive,
    emissiveIntensity: 0.15
  });

  const potMat = new THREE.MeshStandardMaterial({
    color: "#2a114d",
    roughness: 0.4,
    metalness: 0.3
  });

  // Face decal texture
  const faceTex = generatePlantFaceTexture(data.eyeType || "happy", data.mouthType || "smile");
  const faceMat = new THREE.MeshBasicMaterial({
    map: faceTex,
    transparent: true,
    opacity: 0.95
  });

  if (bodyType === "mushroom") {
    // Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.52, 1.3, 16), accentMat);
    stem.position.set(0, 0.65, 0);
    stem.castShadow = true;
    group.add(stem);

    // Mushroom Cap
    const capGeo = new THREE.SphereGeometry(1.05, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const cap = new THREE.Mesh(capGeo, mainMat);
    cap.position.set(0, 1.25, 0);
    cap.castShadow = true;
    group.add(cap);

    // Gills ring under cap
    const gills = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.35, 0.08, 16), potMat);
    gills.position.set(0, 1.25, 0);
    group.add(gills);

    // Polka dots on cap
    const dotGeo = new THREE.SphereGeometry(0.16, 8, 8);
    const dotPositions = [
      { x: 0, y: 1.85, z: 0.55 },
      { x: -0.6, y: 1.65, z: 0.4 },
      { x: 0.6, y: 1.65, z: 0.4 },
      { x: 0, y: 1.95, z: 0 },
      { x: -0.45, y: 1.7, z: -0.45 },
      { x: 0.45, y: 1.7, z: -0.45 }
    ];
    dotPositions.forEach(dp => {
      const dot = new THREE.Mesh(dotGeo, accentMat);
      dot.position.set(dp.x, dp.y, dp.z);
      group.add(dot);
    });

    // Face Decal on stem
    const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.65), faceMat);
    facePlane.position.set(0, 0.72, 0.48);
    group.add(facePlane);

  } else if (bodyType === "cactus") {
    // Vertical Main Body
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.46, 1.8, 16), mainMat);
    trunk.position.set(0, 0.9, 0);
    trunk.castShadow = true;
    group.add(trunk);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), mainMat);
    dome.position.set(0, 1.8, 0);
    group.add(dome);

    // Left Arm
    const leftArmH = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.45, 12), mainMat);
    leftArmH.rotation.z = Math.PI / 2;
    leftArmH.position.set(-0.48, 0.95, 0);
    group.add(leftArmH);

    const leftArmV = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.6, 12), mainMat);
    leftArmV.position.set(-0.7, 1.25, 0);
    group.add(leftArmV);

    // Right Arm
    const rightArmH = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.4, 12), mainMat);
    rightArmH.rotation.z = -Math.PI / 2;
    rightArmH.position.set(0.45, 1.2, 0);
    group.add(rightArmH);

    const rightArmV = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.5, 12), mainMat);
    rightArmV.position.set(0.65, 1.45, 0);
    group.add(rightArmV);

    // Little Blossom Flower on Top
    const flowerTop = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), accentMat);
    flowerTop.position.set(0, 2.15, 0);
    group.add(flowerTop);

    // Face Decal on Trunk
    const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.65), faceMat);
    facePlane.position.set(0, 1.05, 0.46);
    group.add(facePlane);

  } else if (bodyType === "monstera") {
    // Planter Pot Base
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.38, 0.7, 16), potMat);
    pot.position.set(0, 0.35, 0);
    group.add(pot);

    // 4 Wide Fan Leaves with decorative notch cutouts
    const leafAngles = [0.4, -0.4, 1.8, -1.8];
    leafAngles.forEach((angle, idx) => {
      const leafGroup = new THREE.Group();
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.2, 8), accentMat);
      stem.position.set(0, 0.6, 0);
      leafGroup.add(stem);

      const leafBlade = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 12, 12),
        mainMat
      );
      leafBlade.scale.set(0.9, 1.3, 0.12);
      leafBlade.position.set(0, 1.3, 0);
      leafGroup.add(leafBlade);

      leafGroup.rotation.z = angle * 0.7;
      leafGroup.rotation.y = angle + idx;
      leafGroup.position.set(0, 0.55, 0);
      group.add(leafGroup);
    });

    // Face Decal on Pot
    const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.55), faceMat);
    facePlane.position.set(0, 0.4, 0.49);
    group.add(facePlane);

  } else if (bodyType === "succulent") {
    // Low Planter Bowl
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 0.4, 16), potMat);
    bowl.position.set(0, 0.2, 0);
    group.add(bowl);

    // Concentric Rosette Petals (Outer, Middle, Inner rings)
    const rings = [
      { count: 7, radius: 0.65, size: 0.55, y: 0.35, rotX: 0.6 },
      { count: 5, radius: 0.42, size: 0.45, y: 0.55, rotX: 0.45 },
      { count: 3, radius: 0.2, size: 0.35, y: 0.72, rotX: 0.25 }
    ];

    rings.forEach((ring, rIdx) => {
      const mat = rIdx % 2 === 0 ? mainMat : accentMat;
      for (let i = 0; i < ring.count; i++) {
        const theta = (i / ring.count) * Math.PI * 2;
        const petal = new THREE.Mesh(new THREE.ConeGeometry(0.24, ring.size, 8), mat);
        petal.position.set(Math.sin(theta) * ring.radius, ring.y, Math.cos(theta) * ring.radius);
        petal.rotation.x = ring.rotX;
        petal.rotation.y = theta;
        petal.castShadow = true;
        group.add(petal);
      }
    });

    // Face Decal on Bowl Front
    const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), faceMat);
    facePlane.position.set(0, 0.22, 0.62);
    group.add(facePlane);

  } else if (bodyType === "flower") {
    // Green Stalk
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.4, 12), accentMat);
    stalk.position.set(0, 0.7, 0);
    stalk.castShadow = true;
    group.add(stalk);

    // Stalk Leaves
    [-0.3, 0.3].forEach((xOff, idx) => {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.6, 8), accentMat);
      leaf.position.set(xOff, 0.6 + idx * 0.25, 0);
      leaf.rotation.z = xOff > 0 ? -1.1 : 1.1;
      group.add(leaf);
    });

    // Central Pistil Disc
    const pistil = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.18, 20), accentMat);
    pistil.rotation.x = Math.PI / 2;
    pistil.position.set(0, 1.5, 0.05);
    group.add(pistil);

    // 8 Round Flower Petals radiating outward
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), mainMat);
      petal.scale.set(1.0, 1.4, 0.35);
      petal.position.set(Math.sin(angle) * 0.72, 1.5 + Math.cos(angle) * 0.72, 0);
      petal.rotation.z = -angle;
      group.add(petal);
    }

    // Face Decal on Central Pistil
    const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.68), faceMat);
    facePlane.position.set(0, 1.5, 0.18);
    group.add(facePlane);

  } else if (bodyType === "tree") {
    // Bonsai Trunk (Twisted cylinders)
    const baseTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, 0.9, 12), potMat);
    baseTrunk.position.set(0, 0.45, 0);
    group.add(baseTrunk);

    const midTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.8, 12), potMat);
    midTrunk.position.set(0.12, 1.1, 0);
    midTrunk.rotation.z = -0.22;
    group.add(midTrunk);

    // 3 Cloud-like Spherical Foliage Puffs
    const puffPositions = [
      { x: -0.4, y: 1.6, z: 0, r: 0.58 },
      { x: 0.45, y: 1.7, z: 0.1, r: 0.52 },
      { x: 0.05, y: 2.05, z: -0.05, r: 0.7 }
    ];
    puffPositions.forEach(p => {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(p.r, 16, 16), mainMat);
      puff.position.set(p.x, p.y, p.z);
      puff.castShadow = true;
      group.add(puff);
    });

    // Face Decal on Main Trunk Front
    const facePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.48), faceMat);
    facePlane.position.set(0, 0.5, 0.42);
    group.add(facePlane);
  }

  group.userData = {
    type: "plant",
    plantData: data,
    label: `Examine: ${bodyType.toUpperCase()} (Planted by ${data.visitorId || 'guest'})`,
    swaySpeed: 1.6 + Math.random() * 0.8,
    swayPhase: Math.random() * Math.PI * 2
  };

  return group;
}

// 4. Garden Network Loading & Real-time Broadcasting
async function loadGardenPlants() {
  try {
    const res = await fetch("/api/garden/plants");
    const data = await res.json();
    if (data.success && Array.isArray(data.plants)) {
      gardenPlants = data.plants;
      // Clear existing garden plant meshes
      gardenPlantMeshes.forEach(mesh => {
        if (scene) scene.remove(mesh);
        const idx = interactiveObjects.indexOf(mesh);
        if (idx !== -1) interactiveObjects.splice(idx, 1);
      });
      gardenPlantMeshes = [];

      gardenPlants.forEach(plant => {
        addPlantToGardenScene(plant, false);
      });

      // Update plants count on ticket
      if (visitorSession.visitorId) {
        visitorSession.plantsCount = gardenPlants.filter(p => p.visitorId === visitorSession.visitorId).length;
        updateGoldenTicketUI();
      }

      console.log(`🌿 [Garden] Loaded ${gardenPlants.length} plants into the metaverse.`);
    }
  } catch (err) {
    console.warn("[Garden] Could not load plants from API:", err);
  }
}

function addPlantToGardenScene(plantData, isAnimated = false) {
  if (!scene) return;

  const mesh = createPlantMesh(plantData);
  const posX = Number(plantData.position?.x) || 9.5;
  const posY = Number(plantData.position?.y) || 0.25;
  const posZ = Number(plantData.position?.z) || 9.5;

  mesh.position.set(posX, posY, posZ);
  mesh.rotation.y = Number(plantData.rotationY) || Math.random() * Math.PI * 2;
  const baseScale = Number(plantData.scale) || 1.0;

  if (isAnimated) {
    // Satisfying bouncy planting popup animation
    mesh.scale.set(0.01, 0.01, 0.01);
    scene.add(mesh);
    interactiveObjects.push(mesh);
    gardenPlantMeshes.push(mesh);

    let progress = 0;
    const animInterval = setInterval(() => {
      progress += 0.08;
      // Elastic overshoot curve
      const s = baseScale * (Math.sin(progress * Math.PI * 0.7) * 1.25);
      mesh.scale.set(s, s, s);

      if (progress >= 1.0) {
        clearInterval(animInterval);
        mesh.scale.set(baseScale, baseScale, baseScale);
      }
    }, 16);
  } else {
    mesh.scale.set(baseScale, baseScale, baseScale);
    scene.add(mesh);
    interactiveObjects.push(mesh);
    gardenPlantMeshes.push(mesh);
  }
}

// Socket.IO Listener for instant collaborative planting
function setupGardenSocketIO() {
  try {
    if (typeof io !== "undefined") {
      const socket = io();
      socket.on("connect", () => {
        console.log("🔌 [Socket.IO] Connected to Collaborative Garden server!");
      });
      socket.on("plant:planted", (newPlant) => {
        // Prevent local double-spawning
        const alreadyExists = gardenPlantMeshes.some(m => m.userData?.plantData?.id === newPlant.id);
        if (!alreadyExists) {
          gardenPlants.push(newPlant);
          addPlantToGardenScene(newPlant, true);
          showCatStatusToast(`🌱 A visitor planted a new ${newPlant.bodyType} in the Metaverse Garden!`);
        }
      });
    }
  } catch (e) {
    console.warn("Socket.IO client init fallback:", e);
  }
}

// 5. Plant Discovery & Secret Message Reveal
let activeDiscoveredMesh = null;
let activeDiscoveredData = null;

function discoverPlantMessage(plantData, mesh) {
  activeDiscoveredData = plantData;
  activeDiscoveredMesh = mesh;

  audioMgr.playDiscoveryChime();

  const modal = document.getElementById("plant-discovery-modal");
  const iconEl = document.getElementById("discovery-icon");
  const typeEl = document.getElementById("discovery-plant-type");
  const creatorEl = document.getElementById("discovery-creator-tag");
  const dateEl = document.getElementById("discovery-date-tag");
  const msgEl = document.getElementById("discovery-message-text");

  const bodyIcons = {
    mushroom: "🍄",
    cactus: "🌵",
    monstera: "🍃",
    succulent: "🪴",
    flower: "🌸",
    tree: "🌳"
  };

  if (iconEl) iconEl.innerText = bodyIcons[plantData.bodyType] || "🌿";
  if (typeEl) typeEl.innerText = `Collectible 3D ${plantData.bodyType.toUpperCase()}`;
  if (creatorEl) creatorEl.innerText = `Planted by Visitor ${plantData.visitorId || 'Anonymous'}`;
  if (dateEl) {
    const d = new Date(plantData.createdAt || Date.now());
    dateEl.innerText = `Planted on ${d.toLocaleDateString()} at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  if (msgEl) msgEl.innerText = plantData.hiddenMessage || "No message left behind.";

  modal.classList.remove("hidden");
}

// Pet Plant Action in Discovery modal
function petDiscoveredPlant() {
  audioMgr.playPlantPop();
  if (activeDiscoveredMesh) {
    burstHeartParticles(activeDiscoveredMesh.position);

    // Cute gentle wiggle shake
    const startRotZ = activeDiscoveredMesh.rotation.z;
    let t = 0;
    const wiggleInt = setInterval(() => {
      t += 0.2;
      activeDiscoveredMesh.rotation.z = startRotZ + Math.sin(t * 12) * 0.15;
      if (t >= 2.0) {
        clearInterval(wiggleInt);
        activeDiscoveredMesh.rotation.z = startRotZ;
      }
    }, 16);
  }
  showCatStatusToast("You touched the plant! It swayed gently in the breeze... ♥");
}

// 6. PLANT CREATION STUDIO (Interactive 3D Turntable Preview)
let studioScene = null, studioCamera = null, studioRenderer = null;
let studioPreviewMesh = null;
let studioTurntableAngle = 0;
let isStudioDragging = false;
let studioPreviousPointerX = 0;
let studioAnimId = null;

let currentPlantConfig = {
  bodyType: "mushroom",
  primaryColor: "lilac",
  secondaryColor: "teal",
  eyeType: "happy",
  mouthType: "smile",
  hiddenMessage: ""
};

function openPlantStudio() {
  const modal = document.getElementById("plant-studio-modal");
  modal.classList.remove("hidden");
  initPlantStudioPreview();
  updateStudioPreviewPlant();
}

function closePlantStudio() {
  const modal = document.getElementById("plant-studio-modal");
  modal.classList.add("hidden");
  if (studioAnimId) {
    cancelAnimationFrame(studioAnimId);
    studioAnimId = null;
  }
}

function initPlantStudioPreview() {
  const container = document.getElementById("plant-preview-container");
  if (!container || studioRenderer) return;

  const w = container.clientWidth || 320;
  const h = container.clientHeight || 270;

  studioScene = new THREE.Scene();
  studioScene.background = new THREE.Color("#0f051e");

  studioCamera = new THREE.PerspectiveCamera(45, w / h, 0.1, 50);
  studioCamera.position.set(0, 1.6, 4.2);
  studioCamera.lookAt(0, 1.1, 0);

  studioRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  studioRenderer.setSize(w, h);
  studioRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  studioRenderer.shadowMap.enabled = true;
  container.innerHTML = "";
  container.appendChild(studioRenderer.domElement);

  // Studio Lights
  const amb = new THREE.AmbientLight("#581c87", 1.8);
  studioScene.add(amb);

  const dir1 = new THREE.DirectionalLight("#ff71ce", 2.2);
  dir1.position.set(4, 6, 5);
  studioScene.add(dir1);

  const dir2 = new THREE.DirectionalLight("#01cdfe", 1.8);
  dir2.position.set(-4, 3, -3);
  studioScene.add(dir2);

  // Turntable Pedestal Base
  const pedMat = new THREE.MeshStandardMaterial({
    color: "#271242",
    roughness: 0.3,
    metalness: 0.4
  });
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.6, 0.25, 24), pedMat);
  ped.position.set(0, -0.12, 0);
  studioScene.add(ped);

  const ringGlow = new THREE.Mesh(
    new THREE.TorusGeometry(1.45, 0.04, 8, 32),
    new THREE.MeshBasicMaterial({ color: "#2dd4bf" })
  );
  ringGlow.position.set(0, 0, 0);
  ringGlow.rotation.x = Math.PI / 2;
  studioScene.add(ringGlow);

  // Mouse & Touch Drag Turntable Controls
  container.addEventListener("pointerdown", (e) => {
    isStudioDragging = true;
    studioPreviousPointerX = e.clientX;
  });

  window.addEventListener("pointermove", (e) => {
    if (!isStudioDragging) return;
    const deltaX = e.clientX - studioPreviousPointerX;
    studioTurntableAngle += deltaX * 0.015;
    studioPreviousPointerX = e.clientX;
  });

  window.addEventListener("pointerup", () => {
    isStudioDragging = false;
  });

  // Render loop
  function animateStudio() {
    studioAnimId = requestAnimationFrame(animateStudio);
    if (!isStudioDragging) {
      studioTurntableAngle += 0.008; // gentle automatic spin
    }
    if (studioPreviewMesh) {
      studioPreviewMesh.rotation.y = studioTurntableAngle;
    }
    studioRenderer.render(studioScene, studioCamera);
  }
  animateStudio();
}

function updateStudioPreviewPlant() {
  if (!studioScene) return;

  if (studioPreviewMesh) {
    studioScene.remove(studioPreviewMesh);
  }

  studioPreviewMesh = createPlantMesh({
    bodyType: currentPlantConfig.bodyType,
    primaryColor: currentPlantConfig.primaryColor,
    secondaryColor: currentPlantConfig.secondaryColor,
    eyeType: currentPlantConfig.eyeType,
    mouthType: currentPlantConfig.mouthType
  });

  studioPreviewMesh.position.set(0, 0, 0);
  studioPreviewMesh.rotation.y = studioTurntableAngle;
  studioScene.add(studioPreviewMesh);

  // Update preview status name
  const nameEl = document.getElementById("preview-plant-name");
  if (nameEl) {
    const titles = {
      mushroom: "🍄 Surreal Neon Mushroom",
      cactus: "🌵 Kawaii Cyber Cactus",
      monstera: "🍃 Tropical Vapor Monstera",
      succulent: "🪴 Pastel Rosette Succulent",
      flower: "🌸 Radiant Cosmic Blossom",
      tree: "🌳 Floating Dream Bonsai"
    };
    nameEl.innerText = titles[currentPlantConfig.bodyType] || "Art-Toy Plant";
  }
}

// Submit & Plant in Garden
async function submitPlantToGarden() {
  const msgInput = document.getElementById("plant-msg-input");
  const statusEl = document.getElementById("plant-status-msg");
  const submitBtn = document.getElementById("submit-plant-btn");

  const message = (msgInput ? msgInput.value : "").trim();
  if (!message) {
    showStudioStatus("Please write a hidden message or note before planting!", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerText = "PLANTING IN GARDEN...";
  showStudioStatus("Contacting Metaverse Garden Network...", "success");

  // Generate random coordinate on the grass parcel (centered at 9.5, 9.5; parcel bounds 3.5 to 15.5)
  const randomX = Number((6.0 + Math.random() * 7.0).toFixed(2));
  const randomZ = Number((6.0 + Math.random() * 7.0).toFixed(2));

  const payload = {
    visitorId: visitorSession.visitorId || "guest",
    bodyType: currentPlantConfig.bodyType,
    primaryColor: currentPlantConfig.primaryColor,
    secondaryColor: currentPlantConfig.secondaryColor,
    eyeType: currentPlantConfig.eyeType,
    mouthType: currentPlantConfig.mouthType,
    position: { x: randomX, y: 0.25, z: randomZ },
    rotationY: Number((Math.random() * Math.PI * 2).toFixed(2)),
    scale: 1.0,
    hiddenMessage: message
  };

  try {
    const res = await fetch("/api/garden/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.success && data.plant) {
      audioMgr.playPlantPop();
      addPlantToGardenScene(data.plant, true);
      gardenPlants.push(data.plant);

      visitorSession.plantsCount++;
      updateGoldenTicketUI();

      showStudioStatus("★ Planted successfully! Your art-toy is flourishing! ★", "success");

      setTimeout(() => {
        closePlantStudio();
        submitBtn.disabled = false;
        submitBtn.innerText = "★ PLANT IN COLLABORATIVE GARDEN ★";
        if (msgInput) msgInput.value = "";

        // Smooth camera transition to view the newly planted plant!
        setActivePreset("cam-garden");
        transitionCamera(
          new THREE.Vector3(randomX + 1.8, 2.4, randomZ + 2.8),
          new THREE.Vector3(randomX, 0.9, randomZ)
        );
        showCatStatusToast(`🌱 You planted a new ${currentPlantConfig.bodyType}! Others can now discover your secret note.`);
      }, 1100);
    } else {
      showStudioStatus(data.error || "Failed to plant.", "error");
      submitBtn.disabled = false;
      submitBtn.innerText = "★ PLANT IN COLLABORATIVE GARDEN ★";
    }
  } catch (err) {
    console.error("Planting error:", err);
    showStudioStatus("Network connection error. Try again.", "error");
    submitBtn.disabled = false;
    submitBtn.innerText = "★ PLANT IN COLLABORATIVE GARDEN ★";
  }
}

function showStudioStatus(msg, type) {
  const el = document.getElementById("plant-status-msg");
  if (!el) return;
  el.className = `plant-status-msg ${type}`;
  el.innerText = msg;
  el.classList.remove("hidden");
}

// 7. GOLDEN TICKET MEMENTO & DOWNLOAD SYSTEM
function openGoldenTicketModal() {
  updateGoldenTicketUI();
  const modal = document.getElementById("golden-ticket-modal");
  modal.classList.remove("hidden");
}

function closeGoldenTicketModal() {
  const modal = document.getElementById("golden-ticket-modal");
  modal.classList.add("hidden");
}

function updateGoldenTicketUI() {
  const idEl = document.getElementById("ticket-visitor-id");
  const visitsEl = document.getElementById("ticket-visits-count");
  const plantsEl = document.getElementById("ticket-plants-count");
  const dateEl = document.getElementById("ticket-issued-date");
  const codeEl = document.getElementById("ticket-recovery-code");

  if (idEl) idEl.innerText = visitorSession.visitorId || "v_guest";
  if (visitsEl) visitsEl.innerText = visitorSession.visitsCount || 1;
  if (plantsEl) plantsEl.innerText = visitorSession.plantsCount || 0;
  if (dateEl) {
    const d = new Date(visitorSession.createdAt || Date.now());
    dateEl.innerText = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  }
  if (codeEl) codeEl.innerText = visitorSession.recoveryCode || "ML-DEMO-CODE";
}

function copyTicketCode() {
  const code = visitorSession.recoveryCode;
  if (!code) return;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showCopyToast();
    }).catch(() => {
      fallbackCopy(code);
    });
  } else {
    fallbackCopy(code);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showCopyToast();
}

function showCopyToast() {
  const toast = document.getElementById("ticket-copy-feedback");
  if (toast) {
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 3000);
  }
}

// Generate & Download PNG Souvenir Card using HTML5 Canvas
function downloadGoldenTicketCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 720;
  canvas.height = 420;
  const ctx = canvas.getContext("2d");

  // Golden metallic vaporwave gradient
  const grad = ctx.createLinearGradient(0, 0, 720, 420);
  grad.addColorStop(0, "#f59e0b");
  grad.addColorStop(0.35, "#fbbf24");
  grad.addColorStop(0.65, "#fffb96");
  grad.addColorStop(1, "#d97706");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 720, 420);

  // Ornate decorative border
  ctx.strokeStyle = "#451a03";
  ctx.lineWidth = 6;
  ctx.strokeRect(16, 16, 688, 388);
  ctx.strokeStyle = "#fef08a";
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, 676, 376);

  // Header
  ctx.font = "bold 15px monospace";
  ctx.fillStyle = "#78350f";
  ctx.textAlign = "left";
  ctx.fillText("🌸 METAVERSE LOUNGE & COLLABORATIVE GARDEN", 36, 52);
  ctx.textAlign = "right";
  ctx.fillText("OFFICIAL VISITOR PASS ✦", 684, 52);

  // Main Title
  ctx.font = "900 32px sans-serif";
  ctx.fillStyle = "#451a03";
  ctx.textAlign = "center";
  ctx.fillText("GOLDEN TICKET PASS", 360, 110);
  ctx.font = "bold 14px monospace";
  ctx.fillStyle = "#92400e";
  ctx.fillText("電脳庭園 • 黄金の訪問記念証 • IMMUTABLE RECORD", 360, 134);

  // Stats Box
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.fillRect(36, 155, 648, 70);
  ctx.strokeStyle = "#b45309";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(36, 155, 648, 70);

  ctx.textAlign = "center";
  ctx.font = "bold 11px monospace";
  ctx.fillStyle = "#92400e";
  ctx.fillText("VISITOR ID", 115, 180);
  ctx.fillText("VISITS COUNT", 280, 180);
  ctx.fillText("PLANTS PLANTED", 445, 180);
  ctx.fillText("ISSUED DATE", 610, 180);

  ctx.font = "bold 18px monospace";
  ctx.fillStyle = "#451a03";
  ctx.fillText(visitorSession.visitorId || "v_guest", 115, 208);
  ctx.fillText(String(visitorSession.visitsCount || 1), 280, 208);
  ctx.fillText(String(visitorSession.plantsCount || 0), 445, 208);
  const d = new Date(visitorSession.createdAt || Date.now());
  ctx.fillText(`${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`, 610, 208);

  // Secret Code Box
  ctx.fillStyle = "#1e0b38";
  ctx.fillRect(36, 245, 648, 75);
  ctx.strokeStyle = "#01cdfe";
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 245, 648, 75);

  ctx.font = "bold 11px monospace";
  ctx.fillStyle = "#fffb96";
  ctx.fillText("★ SECRET SESSION RECOVERY CODE ★", 360, 268);
  ctx.font = "bold 26px monospace";
  ctx.fillStyle = "#01cdfe";
  ctx.fillText(visitorSession.recoveryCode || "ML-D999DD-A3D73F", 360, 302);

  // Barcode stripes
  ctx.fillStyle = "#78350f";
  for (let x = 36; x < 684; x += 6) {
    const w = (x % 12 === 0) ? 3 : 1;
    ctx.fillRect(x, 340, w, 28);
  }

  ctx.font = "10px monospace";
  ctx.fillStyle = "#78350f";
  ctx.fillText("AUTHENTICATED BY METAVERSE GARDEN NETWORK • USE CODE TO RECOVER SESSION ON ANY DEVICE", 360, 390);

  // Trigger download
  const link = document.createElement("a");
  link.download = `metaverse-golden-ticket-${visitorSession.visitorId || 'pass'}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();

  showCatStatusToast("Golden Ticket downloaded! Save your secret code safely 🎫✨");
}

// 8. SESSION RECOVERY
function openRecoveryModal() {
  const modal = document.getElementById("recovery-modal");
  modal.classList.remove("hidden");
}

function closeRecoveryModal() {
  const modal = document.getElementById("recovery-modal");
  modal.classList.add("hidden");
}

async function submitRecoveryCode() {
  const input = document.getElementById("recovery-code-input");
  const resEl = document.getElementById("recovery-result-msg");
  const code = (input ? input.value : "").trim();

  if (!code) {
    if (resEl) {
      resEl.className = "recovery-result-msg error";
      resEl.innerText = "Please enter your Golden Ticket recovery code.";
      resEl.classList.remove("hidden");
    }
    return;
  }

  try {
    const res = await fetch("/api/visitors/recover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recoveryCode: code })
    });
    const data = await res.json();

    if (data.success) {
      visitorSession.visitorId = data.visitorId;
      visitorSession.recoveryCode = code;
      visitorSession.visitsCount = data.visitsCount;
      visitorSession.createdAt = data.createdAt;
      visitorSession.plantsCount = Array.isArray(data.plants) ? data.plants.length : 0;

      localStorage.setItem("metaverse_visitorId", visitorSession.visitorId);
      localStorage.setItem("metaverse_recoveryCode", visitorSession.recoveryCode);

      updateGoldenTicketUI();

      if (resEl) {
        resEl.className = "recovery-result-msg success";
        resEl.innerText = `✓ Session restored! Welcome back, ${visitorSession.visitorId} (${visitorSession.plantsCount} plants recovered).`;
        resEl.classList.remove("hidden");
      }

      setTimeout(() => {
        closeRecoveryModal();
        setActivePreset("cam-garden");
        transitionCamera(new THREE.Vector3(9.5, 4.5, 16.5), new THREE.Vector3(9.5, 1.2, 9.5));
        showCatStatusToast("Welcome back! Your garden contributions have been restored 🌿★");
      }, 1500);
    } else {
      if (resEl) {
        resEl.className = "recovery-result-msg error";
        resEl.innerText = data.error || "Recovery failed. Invalid code.";
        resEl.classList.remove("hidden");
      }
    }
  } catch (err) {
    console.error("Recovery error:", err);
    if (resEl) {
      resEl.className = "recovery-result-msg error";
      resEl.innerText = "Network connection failed. Try again.";
      resEl.classList.remove("hidden");
    }
  }
}

// 9. Load Abogamer Legal Essays into Library Reader (Micaela Mantegna)
async function loadAbogamerResources() {
  try {
    const res = await fetch("/api/resources/abogamer");
    const data = await res.json();
    if (data.success && Array.isArray(data.articles)) {
      data.articles.forEach(art => {
        const existingIdx = PUBLIC_DOMAIN_BOOKS.findIndex(b => b.id === art.id);
        const bookEntry = {
          id: art.id,
          title: art.title,
          author: art.author,
          year: art.year || "2024",
          color: "#2dd4bf",
          sourceUrl: art.sourceUrl,
          directUrl: art.directUrl,
          downloadUrl: art.downloadUrl,
          sections: [
            {
              heading: art.subtitle,
              text: `${art.summary}\n\n[Categoría: ${art.category} • ${art.readTime}]\n\nInvestigación de Micaela Mantegna (Abogamer, Activist and Scholar).\nPuedes consultar el artículo en línea o descargar el texto completo.`
            }
          ]
        };

        if (existingIdx >= 0) {
          // Merge metadata
          PUBLIC_DOMAIN_BOOKS[existingIdx] = {
            ...PUBLIC_DOMAIN_BOOKS[existingIdx],
            ...bookEntry,
            sections: PUBLIC_DOMAIN_BOOKS[existingIdx].sections || bookEntry.sections
          };
        } else {
          PUBLIC_DOMAIN_BOOKS.unshift(bookEntry);
        }
      });
      console.log(`📚 [Library] ${data.articles.length} authentic Abogamer research works by Micaela Mantegna loaded into Cyber-Reader.`);
    }
  } catch (err) {
    console.warn("Could not load Abogamer resources:", err);
  }
}

// 10. SETUP ALL GARDEN & STUDIO UI LISTENERS
function setupGardenStudioEvents() {
  // Body Selection
  const bodyBtns = document.querySelectorAll("#plant-body-grid .s-pill-btn");
  bodyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      bodyBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPlantConfig.bodyType = btn.dataset.body;
      updateStudioPreviewPlant();
    });
  });

  // Primary Color Selection
  const pColorBtns = document.querySelectorAll("#plant-primary-colors .s-color-btn");
  pColorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      pColorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPlantConfig.primaryColor = btn.dataset.color;
      updateStudioPreviewPlant();
    });
  });

  // Secondary Color Selection
  const sColorBtns = document.querySelectorAll("#plant-secondary-colors .s-color-btn");
  sColorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sColorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPlantConfig.secondaryColor = btn.dataset.color;
      updateStudioPreviewPlant();
    });
  });

  // Eyes Selection
  const eyeBtns = document.querySelectorAll("#plant-eyes-grid .s-pill-btn");
  eyeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      eyeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPlantConfig.eyeType = btn.dataset.eye;
      updateStudioPreviewPlant();
    });
  });

  // Mouth Selection
  const mouthBtns = document.querySelectorAll("#plant-mouth-grid .s-pill-btn");
  mouthBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mouthBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPlantConfig.mouthType = btn.dataset.mouth;
      updateStudioPreviewPlant();
    });
  });

  // Textarea character count
  const msgInput = document.getElementById("plant-msg-input");
  const counter = document.getElementById("plant-msg-counter");
  if (msgInput && counter) {
    msgInput.addEventListener("input", () => {
      counter.innerText = `${msgInput.value.length} / 500`;
    });
  }

  // Buttons
  const openStudioBtn = document.getElementById("open-garden-studio-btn");
  if (openStudioBtn) openStudioBtn.addEventListener("click", openPlantStudio);

  const submitBtn = document.getElementById("submit-plant-btn");
  if (submitBtn) submitBtn.addEventListener("click", submitPlantToGarden);

  const closeBtn = document.getElementById("close-studio-btn");
  if (closeBtn) closeBtn.addEventListener("click", closePlantStudio);

  const cancelBtn = document.getElementById("cancel-studio-btn");
  if (cancelBtn) cancelBtn.addEventListener("click", closePlantStudio);

  const backdrop = document.getElementById("plant-studio-backdrop");
  if (backdrop) backdrop.addEventListener("click", closePlantStudio);
}

function setupGoldenTicketEvents() {
  const openTicketBtn = document.getElementById("open-golden-ticket-btn");
  if (openTicketBtn) openTicketBtn.addEventListener("click", openGoldenTicketModal);

  const openRecBtn = document.getElementById("open-recovery-btn");
  if (openRecBtn) openRecBtn.addEventListener("click", openRecoveryModal);

  const closeBtn = document.getElementById("close-ticket-btn");
  if (closeBtn) closeBtn.addEventListener("click", closeGoldenTicketModal);

  const backdrop = document.getElementById("golden-ticket-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeGoldenTicketModal);

  const copyBtn = document.getElementById("copy-ticket-code-btn");
  if (copyBtn) copyBtn.addEventListener("click", copyTicketCode);

  const downloadBtn = document.getElementById("download-ticket-btn");
  if (downloadBtn) downloadBtn.addEventListener("click", downloadGoldenTicketCard);

  // Recovery Modal Events
  const closeRecBtn = document.getElementById("close-recovery-btn");
  if (closeRecBtn) closeRecBtn.addEventListener("click", closeRecoveryModal);

  const recBackdrop = document.getElementById("recovery-backdrop");
  if (recBackdrop) recBackdrop.addEventListener("click", closeRecoveryModal);

  const submitRecBtn = document.getElementById("submit-recovery-btn");
  if (submitRecBtn) submitRecBtn.addEventListener("click", submitRecoveryCode);

  // Discovery Modal Events
  const closeDiscBtn = document.getElementById("close-discovery-btn");
  if (closeDiscBtn) closeDiscBtn.addEventListener("click", () => {
    document.getElementById("plant-discovery-modal").classList.add("hidden");
  });

  const dismissDiscBtn = document.getElementById("dismiss-discovery-btn");
  if (dismissDiscBtn) dismissDiscBtn.addEventListener("click", () => {
    document.getElementById("plant-discovery-modal").classList.add("hidden");
  });

  const discBackdrop = document.getElementById("discovery-backdrop");
  if (discBackdrop) discBackdrop.addEventListener("click", () => {
    document.getElementById("plant-discovery-modal").classList.add("hidden");
  });

  const petBtn = document.getElementById("pet-plant-btn");
  if (petBtn) petBtn.addEventListener("click", petDiscoveredPlant);
}

// ============================================================================
// INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initLandingPage();
  setupBookReaderEvents();
  setupRadioEvents();
  setupNekoSalonEvents();
  setupGardenStudioEvents();
  setupGoldenTicketEvents();
  initVisitorSession();
  setupGardenSocketIO();
  loadGardenPlants();
  loadAbogamerResources();
});

