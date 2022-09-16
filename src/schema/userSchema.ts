import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const signUpSchema = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    username: Joi.string().required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(422).json(error.message);
  }

  next();
};

const signInSchema = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  next();
};

export default { signUpSchema, signInSchema };
