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

const getBoardData = (boardId: string) => {
  return prisma.columns.findMany({
    where: {
      boardId,
    },
    include: {
      taskIds: true,
    },
  });
};

const createColumn = (data) => {
  return prisma.columns.create({
    data,
  });
};

const createTask = (data) => {
  console.log(data);
  return prisma.tasks.create({
    data,
  });
};

export default {
  getBoards,
  createBoard,
  createColumn,
  createTask,
  getBoardData
};
