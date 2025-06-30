import progressoRepository from '../repositories/progressoRepository.js';
import aulaRepository from '../repositories/aulaRepository.js';

const concluirAula = async ({ userId, aulaId }) => {
  const aula = await aulaRepository.findById(aulaId);
  if (!aula) throw new Error('Aula não encontrada.');

  const existente = await progressoRepository.jaConcluiu(userId, aulaId);
  if (existente) throw new Error('Aula já foi concluída por este usuário.');

  return await progressoRepository.marcarComoConcluida(userId, aulaId);
};

const listarConcluidas = async (userId) => {
  return await progressoRepository.listarProgressoPorUsuario(userId);
};

export default { concluirAula, listarConcluidas };
