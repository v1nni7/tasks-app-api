import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(422).json(error.message);
  }

  next();
};

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    stayLoggedIn: Joi.boolean(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(422).json(error.message);
  }

  next();
};

export default { signUp, signIn };
