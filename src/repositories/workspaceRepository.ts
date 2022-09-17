import { prisma } from "../database";

const getWorkspaces = (id: number) => {
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

export default { getWorkspaces, create };
