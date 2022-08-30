import { Router } from "express";
import authController from "../controllers/authController";
import authSchemaMiddleware from "../middlewares/authSchemaMiddleware";
import authSchema from "../schema/authSchema";

const authRouter = Router();

authRouter.post(
  "/sign-in",
  authSchemaMiddleware(authSchema.signIn),
  authController.signIn
);

authRouter.post(
  "/sign-up",
  authSchemaMiddleware(authSchema.signUp),
  authController.signUp
);

export default authRouter;
