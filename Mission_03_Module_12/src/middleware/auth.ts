import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(500).json({
          message: "You are not allowed to access this route!!",
        });
      }
      const decoded = jwt.verify(token, config.secret_key as string);
      console.log({ decoded });
      req.user = decoded as JwtPayload;
      next();
    } catch (err: any) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  };
};
export default auth;
