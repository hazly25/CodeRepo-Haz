import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/UsuarioRoute.js';
import { getConnection } from './Config/Connection.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/listaru', router); 

app.listen(process.env.PORT, () => {
    getConnection(); 
    console.log(`Conectados a través del puerto ${process.env.PORT}`);
});
