import workspaceRepository from "../repositories/workspaceRepository";

type WorkspaceDataType = {
  name: string;
  userId: number;
  background: string;
};

const createWorkspace = async (data: WorkspaceDataType) => {
  const createdWorkspace = await workspaceRepository.create(data);
  return createdWorkspace;
};

const getWorkspaces = async (userId: number) => {
  const workspaces = await workspaceRepository.getWorkspaces(userId);
  return workspaces;
};

export default { createWorkspace, getWorkspaces };
