import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import speedtestRouter from './routes/speedtest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// CORS setup to allow speed test measurements
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Cache-Control', 'Pragma', 'X-Requested-With', 'Range'],
  exposedHeaders: ['Content-Length', 'Content-Range', 'Timing-Allow-Origin', 'Date']
}));

// Basic JSON parser for non-upload endpoints
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Speed test API routes
app.use('/api/speedtest', speedtestRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'NETSPEEDPRO Measurement Backend',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend static build if available (production mode)
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback for SPA routing in production
app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('NETSPEEDPRO Backend API is active. Start Vite development server for frontend UI.');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'An unexpected error occurred.'
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`=========================================`);
  console.log(`  NETSPEEDPRO Server Running Successfully!`);
  console.log(`  URL:  http://localhost:${PORT}          `);
  console.log(`  IP:   http://127.0.0.1:${PORT}          `);
  console.log(`  API:  http://localhost:${PORT}/api/speedtest/ping`);
  console.log(`=========================================`);
});

process.on('SIGTERM', () => {
  server.close(() => console.log('Server terminated'));
});
