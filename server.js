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

// Abogamer Essays and Resources API
app.get('/api/resources/abogamer', (req, res) => {
  const articles = [
    {
      id: 'abogamer-terms-of-service',
      title: 'Términos y Condiciones en Videojuegos',
      subtitle: 'El contrato invisible que aceptamos sin leer',
      author: 'Guillermo E. Rodriguez (Abogamer)',
      sourceUrl: 'https://www.abogamer.com/resources',
      category: 'Derecho Informático & Videojuegos',
      summary: 'Análisis detallado sobre los contratos de adhesión, EULAs y términos de servicio en la industria del videojuego. Cómo operan los derechos de los usuarios y las limitaciones legales de las desarrolladoras.',
      readTime: '6 min de lectura',
      downloadUrl: '/api/resources/abogamer/terms-of-service.txt'
    },
    {
      id: 'abogamer-intellectual-property',
      title: 'Propiedad Intelectual en el Desarrollo Indie',
      subtitle: 'Protección de marcas, código, arte y mecánicas lúdicas',
      author: 'Guillermo E. Rodriguez (Abogamer)',
      sourceUrl: 'https://www.abogamer.com/resources',
      category: 'Propiedad Intelectual',
      summary: 'Guía esencial para creadores de videojuegos: qué aspectos del juego están amparados por el derecho de autor, la distinción entre idea y expresión, y cómo resguardar el patrimonio del estudio independiente.',
      readTime: '8 min de lectura',
      downloadUrl: '/api/resources/abogamer/intellectual-property.txt'
    },
    {
      id: 'abogamer-virtual-assets',
      title: 'Bienes Virtuales y Cuentas de Usuario',
      subtitle: '¿De quién son realmente tus skins y personajes?',
      author: 'Guillermo E. Rodriguez (Abogamer)',
      sourceUrl: 'https://www.abogamer.com/resources',
      category: 'Economía Virtual & Legales',
      summary: 'El debate legal en torno a la propiedad de los activos digitales dentro de los mundos virtuales. Licencias de uso vs. propiedad real frente al cierre de servidores.',
      readTime: '5 min de lectura',
      downloadUrl: '/api/resources/abogamer/virtual-assets.txt'
    }
  ];
  res.json({ success: true, articles });
});

// Essay text content downloads
app.get('/api/resources/abogamer/:slug.txt', (req, res) => {
  const slug = req.params.slug;
  const contentMap = {
    'terms-of-service': `TÉRMINOS Y CONDICIONES EN VIDEOJUEGOS
Autor: Guillermo E. Rodriguez (Abogamer) - https://www.abogamer.com/resources

Los contratos de adhesión en el ecosistema de los videojuegos constituyen una de las herramientas jurídicas más recurrentes y menos comprendidas por los usuarios finales.

1. La naturaleza jurídica del EULA (End User License Agreement):
Al comprar o descargar un videojuego, la mayoría de los usuarios cree estar adquiriendo un "producto". Sin embargo, en términos estrictamente legales, se adquiere una licencia de uso limitada, no exclusiva, revocable e intransferible.

2. Cláusulas abusivas y límites jurisdiccionales:
Las compañías suelen incorporar cláusulas de exoneración total de responsabilidad y sumisión a tribunales extranjeros. En legislaciones de protección al consumidor (como en América Latina y la UE), muchas de estas estipulaciones resultan nulas de pleno derecho.

3. Conclusión:
La transparencia contractual es el pilar de una comunidad sana entre jugadores y desarrolladores.`,
    'intellectual-property': `PROPIEDAD INTELECTUAL EN EL DESARROLLO INDIE
Autor: Guillermo E. Rodriguez (Abogamer) - https://www.abogamer.com/resources

El desarrollo independiente de videojuegos conjuga creatividad técnica y artística. Conocer las herramientas de protección legal evita disputas costosas.

1. Idea vs. Expresión:
Las mecánicas de juego en abstracto (un juego de plataformas, un roguelike) no son patentables ni protegibles per se. Lo que la ley ampara es la *expresión concreta*: el código fuente, los gráficos, los diálogos, la música y el diseño de niveles.

2. Contratos de cesión de derechos con colaboradores:
Es imperativo que todo artista, músico o programador externo firme un acuerdo de cesión o "work for hire" antes del lanzamiento para evitar reclamos posteriores sobre la autoría de los activos.

3. Registro de marcas:
Registrar el título y logotipo del estudio antes de la campaña de marketing previene el secuestro de marca (cybersquatting).`,
    'virtual-assets': `BIENES VIRTUALES Y CUENTAS DE USUARIO
Autor: Guillermo E. Rodriguez (Abogamer) - https://www.abogamer.com/resources

¿Qué sucede con los ítems cosméticos, skins y monedas virtuales cuando un juego cierra sus servidores?

1. El estatus de la tenencia digital:
La mayoría de las plataformas estipula que los bienes virtuales carecen de valor monetario en el mundo real y representan meras funcionalidades dentro del software.

2. Desafíos regulatorios contemporáneos:
El auge de los mercados secundarios y la evolución de los mundos persistentes (metaversos) están empujando a los tribunales a reconsiderar el valor patrimonial de las cuentas de usuario y los deberes de custodia de las compañías editoras.`
  };

  const text = contentMap[slug] || 'Artículo no encontrado.';
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
