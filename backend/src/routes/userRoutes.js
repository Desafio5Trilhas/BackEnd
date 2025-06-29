import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

router.post('/cadastro', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/me', authMiddleware, userController.getLoggedUser);

router.put(
  '/:id/promover',
  authMiddleware,
  roleMiddleware('admin'), // ✅ só admin pode promover
  userController.promoverUsuario
);

export default router;