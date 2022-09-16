import { Request, Response } from "express";
import userServices from "../services/userServices";

const getUsers = async (req: Request, res: Response) => {
  const users = await userServices.getUsers();

  return res.status(200).json(users);
};

const signUp = async (req: Request, res: Response) => {
  try {
    const signUpData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    await userServices.signUp(signUpData);

    res.sendStatus(201);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const signInData = req.body;

    const user = await userServices.signIn(signInData);

    res.status(200).json(user);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};

export default { getUsers, signUp, signIn };
