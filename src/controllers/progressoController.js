import progressoService from '../services/progressoService.js';

const concluirAula = async (req, res) => {
  try {
    const userId = req.user.id;
    const aulaId = Number(req.params.aulaId);

    const progresso = await progressoService.concluirAula({ userId, aulaId });

    res.status(201).json({ message: 'Progresso registrado com sucesso!', progresso });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarConcluidas = async (req, res) => {
  try {
    const userId = req.user.id;

    const aulas = await progressoService.listarConcluidas(userId);

    res.status(200).json(aulas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { concluirAula, listarConcluidas };
