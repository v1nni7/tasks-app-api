import { Request, Response } from "express";
import workspaceService from "../services/workspaceService";

const createWorkspace = async (req: Request, res: Response) => {
  const workspaceData = req.body;

  try {
    await workspaceService.createWorkspace(workspaceData);

    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getWorkspaces = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    const workspaces = await workspaceService.getWorkspaces(userId);

    return res.status(200).json(workspaces);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default { createWorkspace, getWorkspaces };
