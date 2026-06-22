import express, { urlencoded } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import incidentRoutes from "./routes/incidentRoutes.js";
import path from 'path';


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)
app.use('/api/incidents', incidentRoutes)

app.use(
    "/uploads",
    express.static("uploads")
);

app.get('/', (req, res) => {
    res.send('Sentinel api running');
});

export default app;