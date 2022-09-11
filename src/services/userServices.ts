import { hashSync, compareSync } from "bcrypt";
import { Users } from "@prisma/client";

import { conflictError, unauthorizedError } from "../utils/errorUtils";
import userRepository from "../repositories/userRepository";

type SignUpType = Omit<Users, "id">;

const getUsers = async () => {
  return await userRepository.getUsers();
};

const signUp = async (signUpData: SignUpType) => {
  const isAvailableEmail = await userRepository.findByEmail(signUpData.email);

  if (isAvailableEmail) {
    throw conflictError("Email already in use");
  }

  const hashedPassword = hashSync(signUpData.password, 10);

  await userRepository.createUser({
    ...signUpData,
    password: hashedPassword,
  });

  return;
};

const signIn = async (signInData: { email: string; password: string }) => {
  const user = await userRepository.findByEmail(signInData.email);

  if (!user) {
    throw unauthorizedError("Invalid credentials");
  }

  const isPasswordCorrect = compareSync(signInData.password, user.password);

  if (!isPasswordCorrect) {
    throw unauthorizedError("Invalid credentials");
  }

  return user;
};

export default { getUsers, signUp, signIn };
