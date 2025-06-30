import express from 'express';
import categoriaController from '../controllers/categoriaController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Apenas admin pode criar categorias
router.post('/', authMiddleware, categoriaController.criarCategoria);

// Listar categorias (público)
router.get('/', categoriaController.listarCategorias);

export default router;
