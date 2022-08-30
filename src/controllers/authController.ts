import { Request, Response } from "express";
import authService from "../services/authService";

const signIn = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    authService.signIn();
    res.sendStatus(200);
  } catch (error) {
    res.status(401).send(error);
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    await authService.signUp(userData);

    res.sendStatus(201);
  } catch (error) {
    res.status(422).send(error);
  }
};

export default { signIn, signUp };
