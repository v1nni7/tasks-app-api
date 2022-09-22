import { Router } from "express";
import userController from "../controllers/userController";
import userSchema from "../schema/userSchema";

const userRouter = Router();

userRouter.get("/users", userController.getUsers);

userRouter.post("/auth/sign-up", userSchema.signUp, userController.signUp);

userRouter.post("/auth/sign-in", userSchema.signIn, userController.signIn);

export default userRouter;
