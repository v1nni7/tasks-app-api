import { PrismaClient } from "@prisma/client";
import { TypeData } from "../services/authService";

const prisma = new PrismaClient();

const findByEmail = (email: string) => {
  const result = prisma.users.findUnique({
    where: {
      email,
    },
  });

  return result;
};

const createUser = (data: TypeData) => {
  const result = prisma.users.create({ data });
  return result;
};

export default { findByEmail, createUser };
