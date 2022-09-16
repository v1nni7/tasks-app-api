import { Router } from "express";
import userController from "../controllers/userController";
import userSchema from "../schema/userSchema";

const userRouter = Router();

userRouter.get("/users", userController.getUsers);

userRouter.post("/sign-up", userSchema.signUpSchema, userController.signUp);

userRouter.post("/sign-in", userController.signIn);

export default userRouter;
