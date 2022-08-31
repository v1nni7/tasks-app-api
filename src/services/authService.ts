import { PrismaClient, Users } from "@prisma/client";
import authRepository from "../repositories/authRepository";
import { handleConflictError } from "../utils/errorUtils";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export type UserData = Omit<Users, "id">

const signIn = async (data: UserData) => {
  
};

const signUp = async (data: UserData) => {
  const encryptedPassword = bcrypt.hashSync(data.password, 12);
  const existingEmail = await authRepository.findByEmail(data.email);
  const existingUsername = await authRepository.findByUsername(data.username);

  if (existingEmail || existingUsername)
    throw handleConflictError("Email or username must be unique");

  await authRepository.createUser({ ...data, password: encryptedPassword });
};

export default { signIn, signUp };
