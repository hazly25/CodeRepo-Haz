import express from 'express';
import { getAllU } from '../Controller/UsuarioController.js';
const router = express.Router();

router.get('/', getAllU);

export default router;