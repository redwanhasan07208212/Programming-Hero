import { Request, Response } from "express";
import { authService } from "./auth.service";

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await authService.registerUserIntoDb(name, email, password);
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUserIntoDb(email, password);
    res.status(201).json({
      success: true,
      message: "User Login Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const authController = {
  login,
  register,
};
