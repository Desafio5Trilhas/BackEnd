import prisma from '../prismaClient.js';

const findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

const create = async ({ nome, email, senha }) => {
  return await prisma.user.create({
    data: {
      nome,
      email,
      senha,
    },
  });
};

const findById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const updateTipoUsuario = async (id, tipoUsuario) => {
  return await prisma.user.update({
    where: { id },
    data: { tipoUsuario },
  });
};

export default {
  findByEmail,
  create,
  findById,
  updateTipoUsuario,
};
