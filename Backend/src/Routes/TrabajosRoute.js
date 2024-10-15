import express from 'express';
import { getAllT } from '../Controller/TrabajosController.js';
const router = express.Router();

router.get('/', getAllT);

export default router;