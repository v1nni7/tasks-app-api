import { prisma } from "../database";

type UserDataType = {
  email: string;
  password: string;
  username: string;
};

const getUsers = () => {
  return prisma.users.findMany();
};

const findByEmail = (email: string) => {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
};

const findByUsername = (username: string) => {
  return prisma.users.findUnique({
    where: {
      username,
    },
  });
};

const createUser = (userData: UserDataType) => {
  return prisma.users.create({
    data: userData,
  });
};

export default { findByEmail, findByUsername, createUser, getUsers };
