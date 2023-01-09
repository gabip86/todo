import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";

import { createError } from "../utils/error";
import config from "../config/config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, config.JWT, (err: any, user: any) => {
    if (err) return next(createError(403, "Token is not valid!"));

    (<any>req).user = user;
    next();
  });
};
