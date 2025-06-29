import prisma from '../prismaClient.js';

const create = async ({ titulo, descricao, linkYoutube, categoriaId, tutorId }) => {
  return await prisma.aula.create({
    data: {
      titulo,
      descricao,
      linkYoutube,
      categoriaId,
      tutorId,
    },
  });
};

const findAll = async () => {
  return await prisma.aula.findMany({
    include: {
      categoria: true,
      tutor: {
        select: { id: true, nome: true, email: true },
      },
    },
    orderBy: { dataPublicacao: 'desc' },
  });
};

const findById = async (id) => {
  return await prisma.aula.findUnique({
    where: { id },
    include: {
      categoria: true,
      tutor: { select: { id: true, nome: true, email: true } },
    },
  });
};

export default { create, findAll, findById };
