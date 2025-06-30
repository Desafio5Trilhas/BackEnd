import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Aqui você pode acessar req.user.id, req.user.email, etc.
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};

export default authMiddleware;
