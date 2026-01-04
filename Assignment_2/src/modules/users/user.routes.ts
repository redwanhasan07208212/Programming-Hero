import { Router } from "express";
import * as userController from "./user.controller";
import { authMiddleware, adminMiddleware } from "../../middleware/auth";

const router = Router();

router.get("/", authMiddleware, adminMiddleware, userController.getAllUsers);
router.put("/:userId", authMiddleware, userController.updateUser);
router.delete(
  "/:userId",
  authMiddleware,
  adminMiddleware,
  userController.deleteUser
);

export default router;
