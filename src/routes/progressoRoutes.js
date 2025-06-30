import express from 'express';
import progressoController from '../controllers/progressoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Marcar uma aula como concluída (rota protegida)
router.post('/concluir/:aulaId', authMiddleware, progressoController.concluirAula);

// Listar todas as aulas concluídas do usuário logado
router.get('/', authMiddleware, progressoController.listarConcluidas);

export default router;
