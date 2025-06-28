const userService = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const user = await userService.registerUser({ nome, email, senha });
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const token = await userService.loginUser({ email, senha });
    res.status(200).json({ message: 'Login realizado com sucesso!', token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
