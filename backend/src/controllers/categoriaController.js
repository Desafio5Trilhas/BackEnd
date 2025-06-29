import categoriaService from '../services/categoriaService.js';

const criarCategoria = async (req, res) => {
  try {
    const userId = req.user.id;
    const { nome, descricao } = req.body;

    const categoria = await categoriaService.createCategoria({ nome, descricao, userId });

    res.status(201).json({ message: 'Categoria criada com sucesso!', categoria });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

const listarCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.listarCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  criarCategoria,
  listarCategorias,
};
