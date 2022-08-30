import { PrismaClient } from "@prisma/client";
import authRepository from "../repositories/authRepository";

const prisma = new PrismaClient();

export interface TypeData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  profilePicture: string;
}

const signIn = async () => {};

const signUp = async (data: TypeData) => {
  const existingEmail = authRepository.findByEmail(data.email);
  
  if (existingEmail)
    throw { type: "conflict", message: "Email must be unique" };

  await authRepository.createUser(data);
};

export default { signIn, signUp };
