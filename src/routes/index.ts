import { Router } from "express";
import authRouter from "./authRouter";
import workspaceRouter from "./workspaceRouter";

const router = Router();

router.use(authRouter);
router.use(workspaceRouter);

export default router;
