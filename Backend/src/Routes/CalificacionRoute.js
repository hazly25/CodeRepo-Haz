import express from 'express';
import { getAllC } from '../Controller/CalificacionController.js';
const router = express.Router();

router.get('/', getAllC);

export default router;