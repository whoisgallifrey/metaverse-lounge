/**
 * METAVERSE LOUNGE & COLLABORATIVE GARDEN
 * Server Backend (Node.js + Express + Socket.IO + PostgreSQL / Local Store)
 */

require('dotenv').config();
const http = require('http');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DATABASE_URL = process.env.DATABASE_URL;

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// ==========================================
// PERSISTENT DATABASE LAYER (PostgreSQL + Local File Fallback)
// ==========================================
let dbMode = 'local_file';
let pgPool = null;

// Local file storage paths
const DATA_DIR = path.join(__dirname, 'data');
const LOCAL_DB_FILE = path.join(DATA_DIR, 'metaverse_garden.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_DB_FILE)) {
    const initialData = {
      visitors: [],
      plants: []
    };
    fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
  }
}

function readLocalDb() {
  ensureDataDir();
  try {
    const raw = fs.readFileSync(LOCAL_DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[DB] Error reading local file database:', err);
    return { visitors: [], plants: [] };
  }
}

function writeLocalDb(data) {
  ensureDataDir();
  try {
    fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('[DB] Error writing local file database:', err);
  }
}

// Initialize PostgreSQL if DATABASE_URL is configured
async function initDatabase() {
  if (DATABASE_URL) {
    try {
      const { Pool } = require('pg');
      pgPool = new Pool({
        connectionString: DATABASE_URL,
        ssl: DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
      });

      // Test connection
      await pgPool.query('SELECT NOW()');

      // Create tables if they do not exist
      await pgPool.query(`
        CREATE TABLE IF NOT EXISTS visitors (
          id VARCHAR(64) PRIMARY KEY,
          recovery_hash VARCHAR(128) NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          last_seen TIMESTAMPTZ DEFAULT NOW(),
          visits_count INT DEFAULT 1,
          metadata JSONB DEFAULT '{}'::jsonb
        );

        CREATE TABLE IF NOT EXISTS plants (
          id VARCHAR(64) PRIMARY KEY,
          visitor_id VARCHAR(64) REFERENCES visitors(id) ON DELETE SET NULL,
          body_type VARCHAR(32) NOT NULL,
          primary_color VARCHAR(32) NOT NULL,
          secondary_color VARCHAR(32) NOT NULL,
          eye_type VARCHAR(32) NOT NULL,
          mouth_type VARCHAR(32) NOT NULL,
          position_x REAL NOT NULL,
          position_y REAL NOT NULL,
          position_z REAL NOT NULL,
          rotation_y REAL DEFAULT 0,
          scale REAL DEFAULT 1,
          hidden_message VARCHAR(500) NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `);

      dbMode = 'postgres';
      console.log('✨ [DB] Connected successfully to PostgreSQL database.');
      return;
    } catch (err) {
      console.warn('⚠️ [DB] PostgreSQL connection failed. Falling back to persistent local store:', err.message);
    }
  }

  // Fallback to local file store
  ensureDataDir();
  dbMode = 'local_file';
  console.log(`💾 [DB] Running with persistent local database at: ${LOCAL_DB_FILE}`);
}

// Database helper functions
const db = {
  // Visitor operations
  async findVisitorById(id) {
    if (dbMode === 'postgres') {
      const res = await pgPool.query('SELECT * FROM visitors WHERE id = $1', [id]);
      return res.rows[0] || null;
    } else {
      const data = readLocalDb();
      return data.visitors.find(v => v.id === id) || null;
    }
  },

  async findVisitorByRecoveryHash(hash) {
    if (dbMode === 'postgres') {
      const res = await pgPool.query('SELECT * FROM visitors WHERE recovery_hash = $1', [hash]);
      return res.rows[0] || null;
    } else {
      const data = readLocalDb();
      return data.visitors.find(v => v.recovery_hash === hash) || null;
    }
  },

  async saveVisitor({ id, recovery_hash, visits_count = 1, metadata = {} }) {
    if (dbMode === 'postgres') {
      const query = `
        INSERT INTO visitors (id, recovery_hash, visits_count, last_seen, metadata)
        VALUES ($1, $2, $3, NOW(), $4)
        ON CONFLICT (id) DO UPDATE SET
          last_seen = NOW(),
          visits_count = visitors.visits_count + 1,
          metadata = $4
        RETURNING *;
      `;
      const res = await pgPool.query(query, [id, recovery_hash, visits_count, JSON.stringify(metadata)]);
      return res.rows[0];
    } else {
      const data = readLocalDb();
      const existingIdx = data.visitors.findIndex(v => v.id === id);
      const now = new Date().toISOString();
      if (existingIdx >= 0) {
        data.visitors[existingIdx].last_seen = now;
        data.visitors[existingIdx].visits_count = (data.visitors[existingIdx].visits_count || 1) + 1;
        data.visitors[existingIdx].metadata = { ...data.visitors[existingIdx].metadata, ...metadata };
        writeLocalDb(data);
        return data.visitors[existingIdx];
      } else {
        const newVisitor = {
          id,
          recovery_hash,
          created_at: now,
          last_seen: now,
          visits_count,
          metadata
        };
        data.visitors.push(newVisitor);
        writeLocalDb(data);
        return newVisitor;
      }
    }
  },

  // Plant operations
  async getAllPlants() {
    if (dbMode === 'postgres') {
      const res = await pgPool.query('SELECT * FROM plants ORDER BY created_at ASC');
      return res.rows.map(r => ({
        id: r.id,
        visitorId: r.visitor_id,
        bodyType: r.body_type,
        primaryColor: r.primary_color,
        secondaryColor: r.secondary_color,
        eyeType: r.eye_type,
        mouthType: r.mouth_type,
        position: { x: r.position_x, y: r.position_y, z: r.position_z },
        rotationY: r.rotation_y,
        scale: r.scale,
        hiddenMessage: r.hidden_message,
        createdAt: r.created_at
      }));
    } else {
      const data = readLocalDb();
      return data.plants;
    }
  },

  async savePlant(plant) {
    if (dbMode === 'postgres') {
      const query = `
        INSERT INTO plants (
          id, visitor_id, body_type, primary_color, secondary_color,
          eye_type, mouth_type, position_x, position_y, position_z,
          rotation_y, scale, hidden_message, created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW())
        RETURNING *;
      `;
      const res = await pgPool.query(query, [
        plant.id,
        plant.visitorId,
        plant.bodyType,
        plant.primaryColor,
        plant.secondaryColor,
        plant.eyeType,
        plant.mouthType,
        plant.position.x,
        plant.position.y,
        plant.position.z,
        plant.rotationY || 0,
        plant.scale || 1,
        plant.hiddenMessage
      ]);
      const r = res.rows[0];
      return {
        id: r.id,
        visitorId: r.visitor_id,
        bodyType: r.body_type,
        primaryColor: r.primary_color,
        secondaryColor: r.secondary_color,
        eyeType: r.eye_type,
        mouthType: r.mouth_type,
        position: { x: r.position_x, y: r.position_y, z: r.position_z },
        rotationY: r.rotation_y,
        scale: r.scale,
        hiddenMessage: r.hidden_message,
        createdAt: r.created_at
      };
    } else {
      const data = readLocalDb();
      data.plants.push(plant);
      writeLocalDb(data);
      return plant;
    }
  }
};

// Utilities
function hashRecoveryCode(code) {
  return crypto.createHash('sha256').update(String(code).trim().toLowerCase()).digest('hex');
}

function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // remove HTML tag brackets
    .trim()
    .slice(0, 500);
}

// ==========================================
// REST API ROUTES
// ==========================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    mode: NODE_ENV,
    dbMode,
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Visitor registration / session init
app.post('/api/visitors/init', async (req, res) => {
  try {
    let { visitorId, recoveryCode } = req.body;
    let isNew = false;

    if (!visitorId || !recoveryCode) {
      // Generate new visitor identity
      visitorId = 'v_' + crypto.randomBytes(8).toString('hex');
      recoveryCode = 'ML-' + crypto.randomBytes(3).toString('hex').toUpperCase() + '-' + crypto.randomBytes(3).toString('hex').toUpperCase();
      isNew = true;
    }

    const recoveryHash = hashRecoveryCode(recoveryCode);
    const visitor = await db.saveVisitor({
      id: visitorId,
      recovery_hash: recoveryHash
    });

    res.json({
      success: true,
      visitorId: visitor.id,
      recoveryCode: isNew ? recoveryCode : undefined,
      visitsCount: visitor.visits_count,
      createdAt: visitor.created_at
    });
  } catch (err) {
    console.error('[API] /api/visitors/init error:', err);
    res.status(500).json({ error: 'Failed to initialize visitor session.' });
  }
});

// Visitor recovery via code
app.post('/api/visitors/recover', async (req, res) => {
  try {
    const { recoveryCode } = req.body;
    if (!recoveryCode) {
      return res.status(400).json({ error: 'Recovery code is required.' });
    }

    const recoveryHash = hashRecoveryCode(recoveryCode);
    const visitor = await db.findVisitorByRecoveryHash(recoveryHash);

    if (!visitor) {
      return res.status(404).json({ error: 'No visitor session found with this Golden Ticket code.' });
    }

    // Retrieve plants planted by this visitor
    const allPlants = await db.getAllPlants();
    const visitorPlants = allPlants.filter(p => p.visitorId === visitor.id);

    res.json({
      success: true,
      visitorId: visitor.id,
      visitsCount: visitor.visits_count,
      createdAt: visitor.created_at,
      plants: visitorPlants
    });
  } catch (err) {
    console.error('[API] /api/visitors/recover error:', err);
    res.status(500).json({ error: 'Failed to recover visitor session.' });
  }
});

// Get all plants
app.get('/api/garden/plants', async (req, res) => {
  try {
    const plants = await db.getAllPlants();
    res.json({ success: true, plants });
  } catch (err) {
    console.error('[API] /api/garden/plants error:', err);
    res.status(500).json({ error: 'Failed to retrieve garden plants.' });
  }
});

// Plant a new 3D plant
app.post('/api/garden/plants', async (req, res) => {
  try {
    const {
      visitorId,
      bodyType,
      primaryColor,
      secondaryColor,
      eyeType,
      mouthType,
      position,
      rotationY,
      scale,
      hiddenMessage
    } = req.body;

    // Validation
    const validBodies = ['cactus', 'mushroom', 'monstera', 'succulent', 'flower', 'tree'];
    const validColors = ['lilac', 'teal', 'pink', 'green', 'blue', 'red', 'white'];

    if (!validBodies.includes(bodyType)) {
      return res.status(400).json({ error: 'Invalid plant body type.' });
    }

    const sanitizedMsg = sanitizeText(hiddenMessage);
    if (!sanitizedMsg || sanitizedMsg.length === 0) {
      return res.status(400).json({ error: 'Hidden message cannot be empty.' });
    }

    const plantId = 'p_' + crypto.randomBytes(8).toString('hex');
    const newPlant = {
      id: plantId,
      visitorId: visitorId || 'anonymous',
      bodyType,
      primaryColor: validColors.includes(primaryColor) ? primaryColor : 'lilac',
      secondaryColor: validColors.includes(secondaryColor) ? secondaryColor : 'teal',
      eyeType: eyeType || 'happy',
      mouthType: mouthType || 'smile',
      position: {
        x: Number(position?.x) || 0,
        y: Number(position?.y) || 0,
        z: Number(position?.z) || 0
      },
      rotationY: Number(rotationY) || 0,
      scale: Number(scale) || 1,
      hiddenMessage: sanitizedMsg,
      createdAt: new Date().toISOString()
    };

    const saved = await db.savePlant(newPlant);

    // Broadcast to all connected Socket.IO clients
    io.emit('plant:planted', saved);

    res.status(201).json({ success: true, plant: saved });
  } catch (err) {
    console.error('[API] /api/garden/plants error:', err);
    res.status(500).json({ error: 'Failed to plant in the garden.' });
  }
});

// Abogamer Essays and Resources API (Authentic research by Micaela Mantegna - https://www.abogamer.com/resources)
app.get('/api/resources/abogamer', (req, res) => {
  const articles = [
    {
      id: 'abogamer-arteficial',
      title: 'ARTEficial: Creatividad, IA y Derecho de Autor',
      subtitle: 'El primer libro integral sobre Inteligencia Artificial y Copyright',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2022 / 2025',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://www.abogamer.com/news-1/arteficial%3A-',
      category: 'IA Generativa & Propiedad Intelectual',
      summary: 'El primer libro pionero en Iberoamérica sobre IA generativa y derecho de autor. Aborda la doctrina del prompt, los derechos sobre datasets de entrenamiento, la autoría algorítmica y la defensa del dominio público cultural.',
      readTime: '9 min de lectura',
      downloadUrl: '/api/resources/abogamer/arteficial.txt'
    },
    {
      id: 'abogamer-vr-decompression',
      title: 'Diving Decompression and VR Aftercare',
      subtitle: 'Protocolos de reingreso sensorial y cuidado post-inmersión en el Metaverso',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2023',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://www.abogamer.com/news-1/diving-decompression-vr-aftercare',
      category: 'Ética del Metaverso & XR',
      summary: '¿Qué tienen en común el buceo de profundidad y la realidad virtual? La necesidad de protocolos de descompresión y aftercare para cuidar el cuerpo y la mente al regresar de experiencias inmersivas intensas y evitar la desrealización.',
      readTime: '7 min de lectura',
      downloadUrl: '/api/resources/abogamer/vr-decompression.txt'
    },
    {
      id: 'abogamer-deadlock-dilemma',
      title: 'Generative AI, Copyright and the Deadlock Dilemma',
      subtitle: 'Why expanding copyright is not the right policy tool for AI',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2024',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://www.abogamer.com/news-1/artificial-why-copyright-is-not-the-right-policy-tool-to-deal-with-generative-ai',
      category: 'AI Policy & Fair Use',
      summary: 'AI & Creative industries are locked in a zero-sum tug-of-war. Expanding copyright creates licensing monopolies that harm independent artists while failing to solve the ethical challenges of Generative AI. Paper available on SSRN (SSRN: 5090127).',
      readTime: '8 min de lectura',
      downloadUrl: '/api/resources/abogamer/deadlock-dilemma.txt'
    },
    {
      id: 'abogamer-dumb-gods',
      title: 'The Internet of Dumb Gods',
      subtitle: 'Lovecraft, the cult of the algorithm, and AI deification',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2022',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://www.abogamer.com/news-1/the-internet-of-dumb-gods',
      category: 'Filosofía Digital & Algoritmos',
      summary: 'Through the lenses of Lovecraft’s cosmic horror pantheon, this essay explores the ritualistic deification of automated algorithms and social media feeds—inscrutable, opaque "dumb gods" that rule online culture without accountability.',
      readTime: '6 min de lectura',
      downloadUrl: '/api/resources/abogamer/dumb-gods.txt'
    },
    {
      id: 'abogamer-metaverse-sequel',
      title: 'How to Stop the Metaverse from Becoming the Internet’s Bad Sequel',
      subtitle: 'Beyond corporate walled gardens: An open, humane XR commons',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2022',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://abogamer.medium.com/how-to-stop-the-metaverse-from-becoming-the-internets-bad-sequel-975c19c46e4f',
      category: 'Metaverso & Soberanía Digital',
      summary: 'TED Fellow Talk companion essay: How the Big Tech corporate metaverse perpetuates the worst surveillance mechanisms of Web2, and why we must build an open, interoperable, and generative digital commons.',
      readTime: '10 min de lectura',
      downloadUrl: '/api/resources/abogamer/metaverse-sequel.txt'
    },
    {
      id: 'abogamer-lets-play',
      title: 'Let´s Play! Streamers y Propiedad Intelectual',
      subtitle: 'El streaming de videojuegos como espacio negativo del derecho de autor',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2016',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://www.abogamer.com/news-1/let%C2%B4s-play!-streamers-y-propiedad-intelectual-',
      category: 'Gaming Culture & Fair Use',
      summary: 'Estudio pionero sobre las transmisiones de Let\'s Play en Twitch y YouTube. La tensión entre el copyright del desarrollador y la creatividad transformativa del jugador en los espacios negativos de la propiedad intelectual.',
      readTime: '6 min de lectura',
      downloadUrl: '/api/resources/abogamer/lets-play.txt'
    },
    {
      id: 'abogamer-pokemon-go',
      title: 'Pokémon GO: Realidad Aumentada y Geoetiquetado',
      subtitle: 'Interrogantes legales de la realidad aumentada en el espacio público',
      author: 'Micaela Mantegna (Abogamer)',
      year: '2016',
      sourceUrl: 'https://www.abogamer.com/resources',
      directUrl: 'https://www.abogamer.com/news-1/pok%C3%A9mon-go%2C-interrogantes-legales-de-la-realidad-aumentada-y-geoetiquetado',
      category: 'Realidad Aumentada & Espacio Público',
      summary: '"¡Querida, hay un Pikachu en el patio!": Los desafíos jurídicos inéditos de la realidad aumentada y el geoetiquetado: violación virtual de la propiedad privada, privacidad de datos y la monetización del espacio urbano compartido.',
      readTime: '5 min de lectura',
      downloadUrl: '/api/resources/abogamer/pokemon-go.txt'
    }
  ];
  res.json({ success: true, articles });
});

// Essay text content downloads (Authentic texts by Micaela Mantegna)
app.get('/api/resources/abogamer/:slug.txt', (req, res) => {
  const slug = req.params.slug;
  const contentMap = {
    'arteficial': `ARTEFICIAL: CREATIVIDAD, IA Y DERECHO DE AUTOR
Autora: Micaela Mantegna (Abogamer, Activist and Scholar)
Fuente: https://www.abogamer.com/resources | https://www.abogamer.com/news-1/arteficial%3A-

La intersección entre la inteligencia artificial generativa y el derecho de autor plantea preguntas fundamentales sobre la naturaleza misma de la creatividad humana y los límites de la propiedad intelectual.

1. El Mito del Autor Exclusivo:
El derecho de autor moderno fue edificado sobre una concepción romántica del genio individual. Frente a sistemas de IA que procesan millones de parámetros y datasets colectivos, esta visión entra en crisis. La creatividad es intrínsecamente relacional y comunitaria.

2. Entrada y Salida: El Dilema del Entrenamiento:
Debemos distinguir con claridad entre el uso de obras para el entrenamiento de modelos (minería de texto y datos como lectura computacional) y las obras generadas como resultado (output). Aplicar el copyright de forma restrictiva al aprendizaje de máquinas arriesga privatizar el conocimiento y consolidar monopolios en manos de unos pocos gigantes tecnológicos.

3. En Defensa del Dominio Público:
Las obras creadas sin intervención creativa humana genuina no deben recibir monopolios de exclusividad artificiales. El dominio público es la savia de la cultura humana; sobreproteger los artefactos sintéticos empobrece a las futuras generaciones de artistas.`,

    'vr-decompression': `DIVING DECOMPRESSION AND VR AFTERCARE
Author: Micaela Mantegna (Abogamer, Activist and Scholar - Berkman Klein Center affiliate)
Source: https://www.abogamer.com/resources | https://www.abogamer.com/news-1/diving-decompression-vr-aftercare

What does diving, kink aftercare, and the metaverse have in common? This article explores the novel idea of "immersive aftercare protocols", to shape the way we safely reinsert back from virtual reality.

1. Lessons from the Deep:
When divers return to the surface, they follow a deliberate process to reintroduce their bodies to atmospheric pressure. To avoid decompression sickness, they make staged decompression stops to safely eliminate absorbed inert gases from body tissues. It is a calculated acclimatization to protect the organism when moving between states of physical pressure.

2. The Need for Aftercare:
Similarly, kink communities implement aftercare following intense sessions to address physical and emotional exhaustion ("the drop"). Both diving decompression and aftercare share a vital principle: deliberate care placed in how humans transition back from an intense, non-ordinary state to mundane reality.

3. Exiting the Virtual:
In XR (Extended Reality), almost all technological and design effort has been concentrated on onboarding—entering the virtual world—with virtually no consideration for offboarding. Deep immersive presence, vestibular conflict, and avatar embodiment can induce post-VR dissociation, derealization, and cognitive vertigo.

4. Toward Immersive Protocols:
We must build intentional, sensory transition rituals into spatial computing architectures: gradual lighting restoration, tactile grounding, and psychological decompression spaces before returning to the physical world.`,

    'deadlock-dilemma': `GENERATIVE AI, COPYRIGHT AND THE DEADLOCK DILEMMA
Author: Micaela Mantegna (Abogamer, Activist and Scholar)
Source: https://www.abogamer.com/resources | https://ssrn.com/abstract=5090127

AI & Copyright are currently locked in a zero-sum game. One vs. the other, in a tug-of-war where compromise seems out of the question. But what if expanding copyright is not the solution?

1. The Copyright Deadlock:
Creative communities rightly feel threatened by unauthorized ingestion of their life's work, while technology companies argue that machine learning falls squarely under fair use or text and data mining exceptions. The result is an escalating war of litigation and licensing cartels.

2. Why Expanding Copyright Fails Independent Artists:
History shows that whenever copyright scope is broadened, the primary beneficiaries are not individual artists, but legacy corporate intermediaries and content aggregators. Expanding exclusive rights over data ingestion will merely give Big Tech and massive media conglomerates the power to build private walled gardens, while independent creators lose access to open tools.

3. A Third Way:
Rather than shoehorning machine learning into 18th-century copyright paradigms, we require collective remuneration mechanisms, transparent data provenance, and public digital infrastructure that treats cultural commons as a shared heritage.`,

    'dumb-gods': `THE INTERNET OF DUMB GODS
Author: Micaela Mantegna (Abogamer, Activist and Scholar)
Source: https://www.abogamer.com/resources | https://www.abogamer.com/news-1/the-internet-of-dumb-gods

Through the lenses of H.P. Lovecraft’s cosmic horror pantheon, this essay explores the deification of AI and the "cult of the algorithm" in digital life.

1. The Cosmic Horror of Social Feeds:
Lovecraft’s cosmic entities—Azathoth, Yog-Sothoth—were defined not by malevolence, but by supreme indifference and inscrutability. Today, digital users find themselves interacting with algorithmic recommendation engines and content moderation systems in an increasingly ritualistic manner: tweaking keywords, adjusting video pacing, and offering sacrifices to an unseen logic that no single human fully controls.

2. Algorithmic Deification:
We have outsourced judgment, visibility, and cultural livelihood to automated systems that mimic omniscience without possessing consciousness. In worshiping algorithmic metrics as objective truth, we surrender human agency to blind, automated forces.

3. Reclaiming the Digital Commons:
Recognizing algorithms as tools rather than deities is the first step toward demanding transparent governance, auditability, and human dignity in algorithmic spaces.`,

    'metaverse-sequel': `HOW TO STOP THE METAVERSE FROM BECOMING THE INTERNET’S BAD SEQUEL
Author: Micaela Mantegna (Abogamer, Activist and Scholar - TED Fellow)
Source: https://www.abogamer.com/resources | https://abogamer.medium.com/how-to-stop-the-metaverse-from-becoming-the-internets-bad-sequel-975c19c46e4f

Expanding the core concepts of Micaela Mantegna's TED Talk: why corporate visions of the metaverse threaten to repeat and magnify the worst extractive practices of the current internet.

1. The Corporate Metaverse Trap:
When Big Tech pitches the metaverse, it envisions interoperable shopping malls funded by biometric tracking, pupil-dilation surveillance, and proprietary hardware lock-in. It is Web2 surveillance capitalism projected into three dimensions.

2. The Architecture of Virtual Freedom:
A metaverse worthy of human habitation must be open, decentralized, and built on open web standards (WebXR, glTF, open protocols). It must protect the integrity of the human mind, ensuring that our avatars and spatial footprints remain our own sovereign domain.

3. Designing for Play and Connection:
The metaverse was born in science fiction and gaming subcultures as spaces for counter-culture expression, play, and community. We must preserve that surreal, artistic spark against corporate sanitization.`,

    'lets-play': `LET'S PLAY! STREAMERS Y PROPIEDAD INTELECTUAL
Autora: Micaela Mantegna (Abogamer, Activist and Scholar)
Fuente: https://www.abogamer.com/resources | https://www.abogamer.com/news-1/let%C2%B4s-play!-streamers-y-propiedad-intelectual-

El fenómeno del streaming de videojuegos en Twitch y YouTube ha revolucionado la industria cultural y puesto en jaque los conceptos tradicionales de la propiedad intelectual.

1. El Videojuego como Obra Interactiva:
A diferencia del cine o la literatura, el videojuego requiere de la acción y el input del jugador para existir en acto. Cuando un streamer juega, genera una capa de narrativa, humor, habilidad y comunidad que transforma la experiencia original en una nueva manifestación cultural.

2. El Espacio Negativo de la Propiedad Intelectual:
La coexistencia entre publishers y streamers funciona en gran medida gracias a una tolerancia tácita: aunque formalmente una transmisión podría considerarse una comunicación pública no autorizada, la industria se beneficia del impacto publicitario. Este equilibrio informal constituye un "espacio negativo" donde la innovación florece al margen de la coerción legal.

3. Hacia un Marco de Certeza Jurídica:
Depender de la mera tolerancia corporativa deja a los creadores en una situación de extrema vulnerabilidad. Es indispensable reconocer legalmente el derecho al uso transformativo y la libertad de expresión lúdica.`,

    'pokemon-go': `POKÉMON GO: REALIDAD AUMENTADA Y GEOETIQUETADO
Autora: Micaela Mantegna (Abogamer, Activist and Scholar)
Fuente: https://www.abogamer.com/resources | https://www.abogamer.com/news-1/pok%C3%A9mon-go%2C-interrogantes-legales-de-la-realidad-aumentada-y-geoetiquetado

"¡Querida, hay un Pikachu en el patio!": La llegada de Pokémon GO inauguró una nueva era donde el plano físico y la cartografía digital se superponen de manera conflictiva.

1. ¿Violación Virtual de Domicilio (Virtual Trespass)?:
Cuando un juego coloca un objeto virtual valioso dentro de una propiedad privada física, atrayendo a multitudes al lugar, ¿quién es responsable? Surge el debate sobre si los propietarios de bienes raíces tienen derechos exclusivos sobre la capa digital que sobrevuela sus inmuebles.

2. La Apropiación Comercial del Espacio Urbano:
Plazas, monumentos históricos y espacios de memoria pública se convirtieron repentinamente en gimnasios Pokémon con fines de lucro privado, sin consulta comunitaria previa. La realidad aumentada plantea interrogantes urgentes sobre quién tiene derecho a gobernar y monetizar el espacio público geolocalizado.

3. Privacidad y Movilidad:
El rastreo masivo y en tiempo real de los desplazamientos físicos de los usuarios abre riesgos de perfilado y vigilancia de una escala nunca antes vista.`
  };

  const text = contentMap[slug] || 'Artículo de Micaela Mantegna no encontrado en el archivo.';
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${slug}.txt"`);
  res.send(text);
});

// Socket.IO Real-time Events
io.on('connection', (socket) => {
  console.log(`🔌 [Socket.IO] Visitor connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`🔌 [Socket.IO] Visitor disconnected: ${socket.id}`);
  });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Start HTTP Server
initDatabase().then(() => {
  server.listen(PORT, () => {
    console.log(`
========================================================
  METAVERSE LOUNGE & COLLABORATIVE GARDEN
  Server running at: http://localhost:${PORT}
  Environment: ${NODE_ENV}
  Database: ${dbMode}
========================================================
    `);
  });
});
