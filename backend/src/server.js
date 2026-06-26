import dotenv from 'dotenv'
dotenv.config();

import { createServer } from "http";

import app from './app.js';
import pool from './config/db.js';
import { initSocket } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

try {
    await pool.query('select now()')
    console.log('postgres connected');

    const server = createServer(app);
    initSocket(server);

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
} catch (error) {
    console.log(`Database connection failed`)
    console.log(error);
}
