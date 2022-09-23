import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";

const boardRouter = Router();

boardRouter.get(
  "/boards",
  authMiddleware.validateToken,
  boardController.getBoards
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

export default boardRouter;
