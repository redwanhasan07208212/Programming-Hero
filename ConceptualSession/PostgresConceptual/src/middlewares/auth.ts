import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";
import { pool } from "../config/db";
const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("You are not Authorized!!");
    }
    const decoded = jwt.verify(
      token,
      config.secret_key as string
    ) as JwtPayload;
    const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      decoded.email,
    ]);
    if ((user.rows, length === 0)) {
      throw new Error("User not Found");
    }
    next();
  };
};

export default auth;
