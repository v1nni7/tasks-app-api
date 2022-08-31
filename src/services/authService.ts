import { PrismaClient, Users } from "@prisma/client";
import authRepository from "../repositories/authRepository";
import {
  handleConflictError,
  handleUnauthorizedError,
} from "../utils/errorUtils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export type UserData = Omit<Users, "id">;

const signIn = async (data: UserData) => {
  const user = await authRepository.findByEmail(data.email);

  if (!user) throw handleUnauthorizedError("Invalid credentials");

  const comparePassword = bcrypt.compareSync(data.password, user.password);

  if (!comparePassword) throw handleUnauthorizedError("Invalid credentials");

  const token = jwt.sign({ userId: user.id }, "@TeST3_ToK3n");

  return token;
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
