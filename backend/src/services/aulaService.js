import aulaRepository from '../repositories/aulaRepository.js';
import categoriaRepository from '../repositories/categoriaRepository.js';
import userRepository from '../repositories/userRepository.js';

const createAula = async ({ titulo, descricao, linkYoutube, categoriaId, tutorId }) => {
  const tutor = await userRepository.findById(tutorId);
  if (!tutor) throw new Error('Tutor não encontrado.');
  if (tutor.tipoUsuario !== 'tutor' && tutor.tipoUsuario !== 'admin') {
    throw new Error('Você não tem permissão para cadastrar aulas.');
  }

  const categoria = await categoriaRepository.findById(categoriaId);
  if (!categoria) throw new Error('Categoria não encontrada.');

  return await aulaRepository.create({ titulo, descricao, linkYoutube, categoriaId, tutorId });
};

const listarAulas = async () => {
  return await aulaRepository.findAll();
};

const buscarAulaPorId = async (id) => {
  const aula = await aulaRepository.findById(id);
  if (!aula) throw new Error('Aula não encontrada.');
  return aula;
};

export default { createAula, listarAulas, buscarAulaPorId };
