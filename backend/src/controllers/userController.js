import userService from '../services/userService.js';

const registerUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios.' });
    }
    const user = await userService.registerUser({ nome, email, senha });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }
    
    const token = await userService.loginUser({ email, senha });

    res.status(200).json({ message: 'Login realizado com sucesso!', token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getLoggedUser = async (req, res) => {
  try {
    const user = req.user; // vem do middleware
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações do usuário.' });
  }
};

const promoverUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipoUsuario } = req.body;

    const userAtualizado = await userService.promoverUsuario({ id: Number(id), tipoUsuario });
    res.status(200).json({ message: 'Usuário atualizado com sucesso!', user: userAtualizado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { registerUser, loginUser, getLoggedUser, promoverUsuario };
