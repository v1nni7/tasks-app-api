import { Request, Response } from "express";
import workspaceService from "../services/workspaceService";

const selectedWorkspace = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const workspaceData = workspaceService.getSelectedWorkspace(id);

    res.status(200).send(workspaceData);
  } catch (error) {
    res.status(422).send(error);
  }
};

export default { selectedWorkspace };
