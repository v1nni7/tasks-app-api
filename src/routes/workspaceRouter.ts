import { Router, Request, Response } from "express";
import workspaceController from "../controllers/workspaceController";
import { workspaces, tasksDb, columnsDb, columnsTasks } from "./simulationDb";

const workspaceRouter = Router();

workspaceRouter.get("/workspaces", (req: Request, res: Response) => {
  res.status(200).send(workspaces.sort().reverse());
});

workspaceRouter.get("/workspace/:id", workspaceController.selectedWorkspace);

export default workspaceRouter;
