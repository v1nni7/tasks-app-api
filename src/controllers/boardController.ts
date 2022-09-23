import { Request, Response } from "express";
import boardService from "../services/boardService";

const getBoards = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;

    const boards = await boardService.getBoards(userId);

    res.status(200).json(boards);
  } catch (error) {
    res.status(error.status || 503).json(error.message);
  }
};

const createBoard = async (req: Request, res: Response) => {
  try {
    const boardData = req.body;

    const board = await boardService.createBoard(boardData);

    res.status(201).json(board);
  } catch (error) {
    res.status(error.status || 500).json(error.message);
  }
};

const createColumn = async (req: Request, res: Response) => {
  try {
    const columnData = req.body;

    const column = await boardService.createColumn(columnData);

    res.status(201).json({...column, taskIds: []});
  } catch (error) {
    res.status(error.status || 500).json(error.message);
  }
}

export default { getBoards, createBoard, createColumn };
