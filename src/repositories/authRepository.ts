import { PrismaClient } from "@prisma/client";
import { UserData } from "../services/authService";

const prisma = new PrismaClient();

const findByEmail = async (email: string) => {
  const result = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  return result;
};

const findByUsername = async (username: string) => {
  const result = await prisma.users.findUnique({
    where: {
      username,
    },
  });

  return result;
};

const createUser = (data: UserData) => {
  const result = prisma.users.create({ data });
  return result;
};

export default { findByEmail, findByUsername, createUser };
