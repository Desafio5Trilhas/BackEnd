const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const JWT_SECRET = 'seusegredoaqui';

const registerUser = async ({ nome, email, senha }) => {
  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) throw new Error('E-mail já cadastrado.');

  const hashedPassword = await bcrypt.hash(senha, 10);
  const newUser = await userRepository.create({ nome, email, senha: hashedPassword });
  return newUser;
};

const loginUser = async ({ email, senha }) => {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new Error('Usuário não encontrado.');

  const isMatch = await bcrypt.compare(senha, user.senha);
  if (!isMatch) throw new Error('Senha incorreta.');

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = {
  registerUser,
  loginUser
};
