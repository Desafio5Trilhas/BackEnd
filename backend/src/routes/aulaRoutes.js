import express from 'express';
import aulaController from '../controllers/aulaController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Protegido por login (e restrição de perfil dentro do controller)
router.post(
    '/', 
    authMiddleware,
    roleMiddleware('tutor', 'admin'), 
    aulaController.criarAula
);

// Abertas a todos os usuários
router.get('/', aulaController.listarAulas);
router.get('/:id', aulaController.buscarAula);

export default router;
