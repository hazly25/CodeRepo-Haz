import express from 'express';
import { getAllE } from '../Controller/EnvioController.js';
const router = express.Router();

router.get('/', getAllE);

export default router;