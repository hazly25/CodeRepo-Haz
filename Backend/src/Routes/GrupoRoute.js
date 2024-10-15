import express from 'express';
import { getAllG } from '../Controller/GrupoController.js';
const router = express.Router();

router.get('/', getAllG);

export default router;