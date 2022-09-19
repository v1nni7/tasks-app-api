import workspaceRepository from "../repositories/workspaceRepository";

type WorkspaceDataType = {
  name: string;
  userId: number;
  background: string;
};

const createBoard = async (data: WorkspaceDataType) => {
  const createdBoard = await workspaceRepository.create(data);
  return createdBoard;
};

const createColumn = async (data: any) => {
  const stringId = data.title.replace(/\s+/g, "-").toLowerCase();

  const createdColumn = await workspaceRepository.createColumn({
    ...data,
    stringId,
  });

  return createdColumn;
};

const createTask = async (data: any) => {
  const stringId = data.title.replace(/\s+/g, "-").toLowerCase();

  const createdTask = await workspaceRepository.createTask({
    ...data,
    stringId,
  });

  return createdTask;
};

const getBoards = async (userId: number) => {
  const boards = await workspaceRepository.getBoards(userId);
  return boards;
};

const getBoard = async (id: string) => {
  const boardData = await workspaceRepository.getBoard(id);
  return boardData;
};

export default { createBoard, getBoards, getBoard, createColumn, createTask };
