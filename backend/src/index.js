import express from 'express';
import userRoutes from './routes/userRoutes.js';

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());

server.use('/user', userRoutes);

server.get('/', (req, res) => {
  res.send('Backend rodando tranquilo e suave! 🚀');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
