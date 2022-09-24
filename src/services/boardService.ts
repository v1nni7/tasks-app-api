import boardRepository from "../repositories/boardRepository";
import { v4 as uuidv4 } from "uuid";

const getBoards = async (userId: number) => {
  const boards = await boardRepository.getBoards(userId);

  return boards;
};

const getBoardData = async (boardId: string) => {
  let boardData = {
    tasks: {},
    columns: {},
    columnOrder: [],
  };

  const boardDataInDatabase = await boardRepository.getBoardData(boardId);

  const sortColumns = boardDataInDatabase.sort((a: any, b: any) => {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
  });

  sortColumns.map((column: any) => {
    let taskIds = [];

    column.taskIds.forEach((task) => {
      boardData.tasks[task.uuid] = task;
    });

    const sortTasks = column.taskIds.sort((a: any, b: any) => {
      return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
    });

    sortTasks.map((task: any) => {
      taskIds.push(task.uuid);
    });

    boardData.columnOrder.push(column.uuid);
    boardData.columns[column.uuid] = {
      ...column,
      taskIds,
    };
  });

  return boardData;
};

const createBoard = async (data) => {
  const board = await boardRepository.createBoard(data);

  return board;
};

const createColumn = async (data) => {
  const column = await boardRepository.createColumn({
    uuid: uuidv4(),
    title: data.title,
    order: data.order,
    boardId: data.boardId,
  });

  return column;
};

const createTask = async (data) => {
  const task = await boardRepository.createTask({
    uuid: uuidv4(),
    title: data.title,
    order: data.order,
    columnId: data.columnId,
  });

  return task;
};

const updateColumn = async (data) => {
  const column = await boardRepository.updateColumn({
    uuid: data.uuid,
    title: data.title,
    order: data.order,
  });

  return column;
};

const updateTask = async (data) => {
  const task = await boardRepository.updateTask({
    uuid: data.uuid,
    title: data.title,
    order: data.order,
  });

  return task;
};

export default {
  getBoards,
  getBoardData,
  createBoard,
  createColumn,
  createTask,
  updateColumn,
  updateTask,
};
