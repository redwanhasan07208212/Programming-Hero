import { Request, Response } from "express";
import { authService } from "./auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUserIntoDb(email, password);
    res.status(201).json({
      success: true,
      message: "User created Successfully",
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
};
