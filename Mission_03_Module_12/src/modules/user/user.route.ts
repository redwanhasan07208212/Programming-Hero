import { Router } from "express";

import { userController } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", userController.createUser);

router.get("/", logger, auth("admin"), userController.getUser);

router.get("/:id", auth("admin", "user"), userController.singleUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

export const userRoutes = router;
