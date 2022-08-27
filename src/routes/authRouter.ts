import { Router } from "express";
import authController from "../controllers/authController";
import authSchemaMiddleware from "../middlewares/authSchemaMiddleware";
import authSchema from "../schema/authSchema";

const authRouter = Router();

authRouter.post(
  "/sign-in",
  authSchemaMiddleware(authSchema),
  authController.signIn
);

export default authRouter;
