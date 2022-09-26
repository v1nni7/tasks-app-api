import { Router } from "express";
import userRouter from "./userRouter";
import boardRouter from "./boardRouter";

const router = Router();

router.use(userRouter);
router.use(boardRouter);

export default router;
