import express from 'express';
import userRoutes from './userRoutes.js';
import aulaRoutes from './aulaRoutes.js';
import categoriaRoutes from './categoriaRoutes.js';
import progressoRoutes from './progressoRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/aulas', aulaRoutes);
router.use('/categorias', categoriaRoutes);
router.use('/progresso', progressoRoutes);

export default router;
