import { Router } from "express";
import userRouter from "./userRouter";
import workspaceRouter from "./workspaceRouter";

const router = Router();

router.use(userRouter);
router.use(workspaceRouter);

export default router;
