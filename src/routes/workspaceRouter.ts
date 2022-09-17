import { Router } from "express";
import workspaceController from "../controllers/workspaceController";
import authMiddleware from "../middlewares/authMiddleware";

const workspaceRouter = Router();

workspaceRouter.post(
  "/workspace",
  authMiddleware.validateToken,
  workspaceController.createWorkspace
);

workspaceRouter.get(
  "/workspaces",
  authMiddleware.validateToken,
  workspaceController.getWorkspaces
);

export default workspaceRouter;
