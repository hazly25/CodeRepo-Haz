import express from 'express';
import { Iniciar } from '../Controller/Iniciar_sesionController.js';

const router = express.Router();

router.post('/login', Iniciar);
export default router;
