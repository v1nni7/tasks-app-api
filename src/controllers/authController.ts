import { Request, Response } from "express";
import authService from "../services/authService";

const signIn = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    authService.signIn(user);
    res.sendStatus(200);
  } catch (error) {
    res.status(401).send(error);
  }
};

const signUp = (req: Request, res: Response) => {};

export default { signIn, signUp };
