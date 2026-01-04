import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user, token } = await authService.signin(req.body);
    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};
