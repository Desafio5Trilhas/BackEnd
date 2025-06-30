import prisma from '../prismaClient.js';

const create = async ({ nome, descricao }) => {
  return await prisma.categoria.create({
    data: { nome, descricao },
  });
};

const findAll = async () => {
  return await prisma.categoria.findMany({
    orderBy: { nome: 'asc' },
  });
};

const findById = async (id) => {
  return await prisma.categoria.findUnique({
    where: { id },
  });
};

export default {
  create,
  findAll,
  findById,
};
