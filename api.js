// API principal - Punto de entrada para Vercel
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Health endpoint - SIEMPRE disponible
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        message: 'API funcionando',
        timestamp: new Date().toISOString(),
        DB_TYPE: process.env.DB_TYPE || 'no definido',
        has_DATABASE_URL: !!process.env.DATABASE_URL
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'API de Parqueadero', version: '1.0.0' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

export default app;
