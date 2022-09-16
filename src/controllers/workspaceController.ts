import { Request, Response } from "express";
import workspaceService from "../services/workspaceService";

const selectedWorkspace = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const workspaceData = workspaceService.getSelectedWorkspace(id);

    return res.status(200).send(workspaceData);
  } catch (error) {
    return res.status(422).send(error);
  }
};

const createdWorkspaces = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const createdWorkspacesData = await workspaceService.getCreatedWorkspaces(id);

    return res.status(200).send(createdWorkspacesData);
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { selectedWorkspace, createdWorkspaces };
