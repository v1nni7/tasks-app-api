import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";

const boardRouter = Router();

boardRouter.get(
  "/boards",
  authMiddleware.validateToken,
  boardController.getBoards
);

boardRouter.get(
  "/boards/data/:boardId",
  authMiddleware.validateToken,
  boardController.getBoardData
);

boardRouter.post(
  "/boards",
  authMiddleware.validateToken,
  boardController.createBoard
);

boardRouter.post(
  "/boards/columns",
  authMiddleware.validateToken,
  boardController.createColumn
);

boardRouter.post(
  "/boards/tasks",
  authMiddleware.validateToken,
  boardController.createTask
);

boardRouter.put(
  "/boards/columns",
  authMiddleware.validateToken,
  boardController.updateColumn
);

boardRouter.put(
  "/boards/tasks",
  authMiddleware.validateToken,
  boardController.updateTask
);

export default boardRouter;
