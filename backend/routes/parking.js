import express from 'express';
import { getDatabase } from '../database.js';

const router = express.Router();

// Obtener todos los parqueaderos
router.get('/', async (req, res) => {
    try {
        const db = getDatabase();
        const parkingLots = await db.query('SELECT * FROM parking_lots');
        res.json(parkingLots);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Crear parqueadero
router.post('/', async (req, res) => {
    try {
        const { name, location, totalSpaces, pricePerHour } = req.body;
        const db = getDatabase();

        await db.run(
            `INSERT INTO parking_lots (name, location, total_spaces, available_spaces, price_per_hour) 
             VALUES (?, ?, ?, ?, ?)`,
            [name, location, totalSpaces, totalSpaces, pricePerHour]
        );

        res.status(201).json({ message: 'Parqueadero creado exitosamente' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Actualizar parqueadero
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, totalSpaces, availableSpaces, pricePerHour } = req.body;
        const db = getDatabase();

        await db.run(
            `UPDATE parking_lots SET name = ?, location = ?, total_spaces = ?, available_spaces = ?, price_per_hour = ? 
             WHERE id = ?`,
            [name, location, totalSpaces, availableSpaces, pricePerHour, id]
        );

        res.json({ message: 'Parqueadero actualizado exitosamente' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Eliminar parqueadero
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = getDatabase();

        await db.run('DELETE FROM parking_lots WHERE id = ?', [id]);
        res.json({ message: 'Parqueadero eliminado exitosamente' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

export default router;
