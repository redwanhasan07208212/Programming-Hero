import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import { JwtPayload } from "../types/type";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
        statusCode: 401,
      });
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(
      token,
      config.secret_key as string
    ) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
      statusCode: 401,
    });
  }
};

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Admin access required",
        statusCode: 403,
      });
    }
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Forbidden: Access denied",
      statusCode: 403,
    });
  }
};

export const customerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user || req.user.role !== "customer") {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Customer access required",
        statusCode: 403,
      });
    }
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Forbidden: Access denied",
      statusCode: 403,
    });
  }
};
