import { Router, Request, Response } from "express";
import workspaceController from "../controllers/workspaceController";
import workspaceMiddleware from "../middlewares/workspaceMiddleware";
import { workspaces } from "./simulationDb";

const workspaceRouter = Router();

workspaceRouter.get("/workspaces/:id", workspaceController.createdWorkspaces);

workspaceRouter.get("/workspace/:id", workspaceController.selectedWorkspace);

workspaceRouter.post(
  "/workspace",
  workspaceMiddleware.validateUserToken,
  workspaceController.createWorkspace
);

export default workspaceRouter;
