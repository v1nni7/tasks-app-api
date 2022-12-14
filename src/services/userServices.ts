import jwt from "jsonwebtoken";
import { hashSync, compareSync } from "bcrypt";

import userRepository from "../repositories/userRepository";
import { conflictError, unauthorizedError } from "../utils/errorUtils";

type SignUpType = {
  email: string;
  username: string;
  password: string;
};

const getUsers = async () => {
  return await userRepository.getUsers();
};

const signUp = async (signUpData: SignUpType) => {
  const isAvailableEmail = await userRepository.findByEmail(signUpData.email);
  const isAvailableUsername = await userRepository.findByUsername(
    signUpData.username
  );

  if (isAvailableEmail || isAvailableUsername) {
    throw conflictError("Email or username already in use");
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

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "14 days",
  });

  return { user, token };
};

export default { getUsers, signUp, signIn };
