import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import usuariosRouter from './rutas/rutas.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', usuariosRouter);

app.listen(PORT, () => {
    console.log(`Server On http://localhost:${PORT}`)
});