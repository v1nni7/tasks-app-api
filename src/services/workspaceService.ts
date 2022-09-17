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

export default { createWorkspace };
