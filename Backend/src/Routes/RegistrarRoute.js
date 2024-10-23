import express from 'express';
import { Registro } from '../Controller/RegistrarController.js';

const router = express.Router();

router.post('/crear_usuario', Registro); 
export default router;
