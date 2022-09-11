import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get('/users', userController.getUsers);

userRouter.post("/sign-up", userController.signUp);

userRouter.post("/sign-in", userController.signIn);

export default userRouter;
