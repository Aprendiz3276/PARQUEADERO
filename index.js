import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './backend/routes/auth.js';
import parkingRoutes from './backend/routes/parking.js';
import reservationRoutes from './backend/routes/reservations.js';
import userRoutes from './backend/routes/users.js';
import { initializeDatabase } from './backend/database.js';

dotenv.config();

const app = express();

// Flag para rastrear inicialización
let dbInitialized = false;
let initError = null;

// Middleware
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Inicializar base de datos (solo una vez)
const initDB = async () => {
    if (!dbInitialized && !initError) {
        try {
            await initializeDatabase();
            dbInitialized = true;
            console.log('✅ Base de datos inicializada');
        } catch (error) {
            console.error('❌ Error inicializando base de datos:', error);
            initError = error;
        }
    }
};

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: dbInitialized ? 'ok' : 'initializing',
        message: 'Servidor funcionando',
        timestamp: new Date().toISOString(),
        environment: 'Vercel',
        nodeEnv: process.env.NODE_ENV,
        dbStatus: dbInitialized ? 'connected' : (initError ? 'error' : 'connecting')
    });
});

// Rutas API
app.use('/api/auth', authRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Error interno del servidor',
        status: err.status || 500,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        error: true, 
        message: 'Ruta no encontrada',
        path: req.path
    });
});

// ✅ EXPORT para Vercel serverless (CRÍTICO)
export default async (req, res) => {
    // Inicializar DB en primera invocación
    await initDB();
    
    // Si hay error de DB y no es health check, responder error
    if (initError && req.url !== '/api/health') {
        return res.status(500).json({ 
            error: true,
            message: 'Error de conexión a base de datos',
            details: initError.message 
        });
    }
    
    // Pasar request a Express
    return app(req, res);
};
