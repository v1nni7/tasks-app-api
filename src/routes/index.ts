import { Router } from "express";
import userRouter from "./userRouter";
import boardRouter from "./boardRouter";
import workspaceRouter from "./workspaceRouter";

const router = Router();

router.use(userRouter);
router.use(boardRouter)
router.use(workspaceRouter);

export default router;
