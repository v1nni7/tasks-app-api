import { Router, Request, Response } from "express";
import workspaceController from "../controllers/workspaceController";
import { workspaces } from "./simulationDb";

const workspaceRouter = Router();

workspaceRouter.get("/workspaces/:id", workspaceController.createdWorkspaces);

workspaceRouter.get("/workspace/:id", workspaceController.selectedWorkspace);

export default workspaceRouter;
