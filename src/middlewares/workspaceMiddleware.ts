import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateUserToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(authorization, process.env.JWT_SECRET);

    req.body.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default { validateUserToken };
