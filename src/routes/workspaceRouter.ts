import { Router } from "express";
import workspaceController from "../controllers/workspaceController";
import authMiddleware from "../middlewares/authMiddleware";

const workspaceRouter = Router();

workspaceRouter.post(
  "/workspaces/create/column",
  //authMiddleware.validateToken,
  workspaceController.createColumn
);

workspaceRouter.post(
  "/workspaces/create/task",
  //authMiddleware.validateToken,
  workspaceController.createTask
);

workspaceRouter.get(
  "/workspaces",
  authMiddleware.validateToken,
  workspaceController.getBoards
);

workspaceRouter.get(
  "/board/:id",
  workspaceController.getBoard
)

export default workspaceRouter;
