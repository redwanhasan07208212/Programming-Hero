import { Router } from "express";
import { authController } from "./auth.controller";
import auth from "../../middlewares/auth";

const router = Router();
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/", auth(), authController.getAllUser);

export const authRouter = router;
