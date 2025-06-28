// Simulação com banco de dados em memória ou usando um ORM (ex: Sequelize, Prisma, etc.)

const { User } = require('../models'); // ajuste conforme o caminho correto ao model

const findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const create = async ({ nome, email, senha }) => {
  return await User.create({ nome, email, senha });
};

module.exports = {
  findByEmail,
  create
};
