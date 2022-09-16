import { prisma } from "../database";

const getUserWorkspaces = (id: number) => {
  return prisma.workspaces.findMany({
    where: {
      userId: id,
    },
  });
};

export default { getUserWorkspaces };
