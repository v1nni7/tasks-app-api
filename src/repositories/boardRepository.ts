import { prisma } from "../database";

const getBoards = (userId: number) => {
  return prisma.boards.findMany({
    where: {
      userId,
    },
  });
};

const createBoard = (data) => {
  return prisma.boards.create({
    data,
  });
};

const createColumn = (data) => {
  return prisma.columns.create({
    data,
  });
};

export default { getBoards, createBoard, createColumn };
