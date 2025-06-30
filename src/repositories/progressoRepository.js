import prisma from '../prismaClient.js';

const marcarComoConcluida = async (userId, aulaId) => {
  return await prisma.progresso.create({
    data: {
      userId,
      aulaId,
      concluido: true,
    },
  });
};

const jaConcluiu = async (userId, aulaId) => {
  return await prisma.progresso.findUnique({
    where: {
      userId_aulaId: {
        userId,
        aulaId,
      },
    },
  });
};

const listarProgressoPorUsuario = async (userId) => {
  return await prisma.progresso.findMany({
    where: { userId },
    include: {
      aula: {
        include: {
          categoria: true,
        },
      },
    },
    orderBy: { data: 'desc' },
  });
};

export default { marcarComoConcluida, jaConcluiu, listarProgressoPorUsuario };
