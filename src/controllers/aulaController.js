import aulaService from '../services/aulaService.js';

const criarAula = async (req, res) => {
  try {
    const tutorId = req.user.id; // ID do usuário logado via JWT
    const { titulo, descricao, linkYoutube, categoriaId } = req.body;

    const aula = await aulaService.createAula({
      titulo,
      descricao,
      linkYoutube,
      categoriaId,
      tutorId,
    });

    res.status(201).json({ message: 'Aula criada com sucesso!', aula });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarAulas = async (req, res) => {
  try {
    const aulas = await aulaService.listarAulas();
    res.status(200).json(aulas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const buscarAula = async (req, res) => {
  try {
    const aula = await aulaService.buscarAulaPorId(Number(req.params.id));
    res.status(200).json(aula);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default { criarAula, listarAulas, buscarAula };
