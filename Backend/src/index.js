import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuariorouter from './Routes/UsuarioRoute.js';
import materiarouter from './Routes/MateriaRoute.js';
import gruporouter from './Routes/GrupoRoute.js';
import trabajosrouter from './Routes/TrabajosRoute.js';
import eviorouter from './Routes/EnvioRoute.js';
import calificacionrouter from './Routes/CalificacionRoute.js';
import { getConnection } from './Config/Connection.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/listaru', usuariorouter); 
app.use('/listarm', materiarouter); 
app.use('/listarg', gruporouter);
app.use('/listart', trabajosrouter);
app.use('/listare', eviorouter);
app.use('/listarc', calificacionrouter);

app.listen(process.env.PORT, () => {
    getConnection(); 
    console.log(`Conectados a través del puerto ${process.env.PORT}`);
});
