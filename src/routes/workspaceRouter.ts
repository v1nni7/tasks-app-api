import { Router, Request, Response } from "express";
import workspaceController from "../controllers/workspaceController";
import { workspaces } from "./simulationDb";

const workspaceRouter = Router();

workspaceRouter.get("/workspaces", (req: Request, res: Response) => {
  res.status(200).send(workspaces);
});

workspaceRouter.get("/workspace/:id", workspaceController.selectedWorkspace);

export default workspaceRouter;
