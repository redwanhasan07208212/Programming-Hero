import { Router } from "express";
import { authController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { Roles } from "./auth.constant";

const router = Router();
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/", auth(Roles.ADMIN), authController.getAllUser);

export const authRouter = router;
