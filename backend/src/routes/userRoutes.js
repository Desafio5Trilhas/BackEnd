import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

router.post('/cadastro', userController.registerUser);
router.post('/login', userController.loginUser);

export default router;