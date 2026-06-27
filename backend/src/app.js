import express, { urlencoded } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import incidentRoutes from "./routes/incidentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import path from 'path';
import { errorHandler } from "./middlewares/errorMiddleware.js";
import profileRoutes from "./routes/profileRoutes.js";

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

app.use('/api/admin', adminRoutes)

app.use('/api/profile', profileRoutes)

app.get('/', (req, res) => {
    res.send('Sentinel api running');
});


app.use(errorHandler);

export default app;