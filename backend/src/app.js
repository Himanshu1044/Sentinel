import express, { urlencoded } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import incidentRoutes from "./routes/incidentRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)
app.use('/api/incidents', incidentRoutes)

app.get('/', (req, res) => {
    res.send('Sentinel api running');
});

export default app;