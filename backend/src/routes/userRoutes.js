import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/cadastro', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/me', authMiddleware, userController.getLoggedUser);

export default router;