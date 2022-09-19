import { prisma } from "../database";

const getBoards = (id: number) => {
  return prisma.boards.findMany({
    where: {
      userId: id,
    },
  });
};

const getBoard = async (id: string) => {
  let tasks = {};
  let columns = {};
  let columnOrder = [];

  const columnsInDatabase = await prisma.columns.findMany({
    where: {
      boardId: id,
    },
  });

  const tasksInDatabase = await prisma.tasks.findMany({
    where: {
      boardId: id,
    },
  });

  tasksInDatabase.map((task) => {
    tasks = {
      ...tasks,
      [task.stringId]: {
        ...task,
      },
    };
  });

  columnsInDatabase.map((column) => {
    let taskIds = [];

    tasksInDatabase.filter((task) => {
      if (task.columnId === column.id) {
        taskIds.push(task.stringId);
      }
    });

    columns = {
      ...columns,
      [column.stringId]: {
        ...column,
        taskIds,
      },
    };
  });

  const sortColumns = columnsInDatabase.sort((a: any, b: any) => {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
  });

  sortColumns.map((order) => {
    columnOrder.push(order.stringId);
  });

  const boardData = {
    tasks,
    columns,
    columnOrder,
  };

  return boardData;
};

const getColumns = (id: string) => {
  return prisma.columns.findMany({
    where: {
      boardId: id,
    },
  });
};

const getTasks = (id: string) => {
  return prisma.tasks.findMany({
    where: {
      boardId: id,
    },
  });
};

const create = (data: any) => {
  return prisma.boards.create({
    data,
  });
};

const createColumn = (data: any) => {
  return prisma.columns.create({
    data,
  });
};

const createTask = (data: any) => {
  return prisma.tasks.create({
    data,
  });
};

export default {
  getBoards,
  getBoard,
  getColumns,
  getTasks,
  create,
  createColumn,
  createTask,
};
