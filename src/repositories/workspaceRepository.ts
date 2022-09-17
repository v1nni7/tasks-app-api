import { prisma } from "../database";

const getUserWorkspaces = (id: number) => {
  return prisma.workspaces.findMany({
    where: {
      userId: id,
    },
  });
};

const create = (data: any) => {
  return prisma.workspaces.create({
    data,
  });
};

export default { getUserWorkspaces, create };
