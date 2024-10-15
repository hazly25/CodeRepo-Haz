import express from 'express';
import { getAllM } from '../Controller/MateriaController.js';
const router = express.Router();

router.get('/', getAllM);

export default router;