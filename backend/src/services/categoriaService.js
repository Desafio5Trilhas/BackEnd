import categoriaRepository from '../repositories/categoriaRepository.js';
import userRepository from '../repositories/userRepository.js';

const createCategoria = async ({ nome, descricao, userId }) => {
  const user = await userRepository.findById(userId);
  if (!user || user.tipoUsuario !== 'admin') {
    throw new Error('Apenas administradores podem criar categorias.');
  }

  return await categoriaRepository.create({ nome, descricao });
};

const listarCategorias = async () => {
  return await categoriaRepository.findAll();
};

export default {
  createCategoria,
  listarCategorias,
};
