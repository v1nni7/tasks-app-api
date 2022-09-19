import { Request, Response } from "express";
import workspaceService from "../services/workspaceService";

const getBoards = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    const boards = await workspaceService.getBoards(userId);

    return res.status(200).json(boards);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getBoard = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const board = await workspaceService.getBoard(id);

    return res.status(200).json(board);
  }
  catch (error) {
    console.log(error)
    return res.status(400).json({ message: error.message });
  }
};


const createBoard = async (req: Request, res: Response) => {
  const boardData = req.body;

  try {
    await workspaceService.createBoard(boardData);

    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createColumn = async (req: Request, res: Response) => {
  const columnData = req.body;

  try {
    await workspaceService.createColumn(columnData);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: error.message });
  }
};

const createTask = async (req: Request, res: Response) => {
  const taskData = req.body;

  try {
    await workspaceService.createTask(taskData);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: error.message });
  }
};

export default { createBoard, getBoards, createColumn, createTask, getBoard };
