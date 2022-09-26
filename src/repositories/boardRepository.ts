import { prisma } from "../database";

const getBoards = (userId: number) => {
  return prisma.boards.findMany({
    where: {
      userId,
    },
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

const createTask = (data) => {
  return prisma.tasks.create({
    data,
  });
};

const updateColumn = (data) => {
  return prisma.columns.update({
    where: {
      uuid: data.uuid,
    },
    data: {
      title: data.title,
      order: data.order,
    },
  });
};

const updateTask = (data) => {
  return prisma.tasks.update({
    where: {
      uuid: data.uuid,
    },
    data: {
      title: data.title,
      order: data.order,
      columnId: data.columnId,
    },
  });
};

export default {
  getBoards,
  createBoard,
  createColumn,
  createTask,
  getBoardData,
  updateColumn,
  updateTask,
};
