import boardRepository from "../repositories/boardRepository";

const getBoards = async (userId: number) => {
  const boards = await boardRepository.getBoards(userId);

  return boards;
};

const createBoard = async (data) => {
  const board = await boardRepository.createBoard(data);

  return board;
};

const createColumn = async (data) => {
  const newColumnData = {
    title: data.title,
    order: data.order,
    boardId: data.boardId,
    stringId: data.stringId,
  };

  const column = await boardRepository.createColumn(newColumnData);

  return column;
};

export default { getBoards, createBoard, createColumn };
