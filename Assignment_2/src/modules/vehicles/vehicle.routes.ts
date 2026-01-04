import { Router } from "express";
import * as vehicleController from "./vehicle.controller";
import { authMiddleware, adminMiddleware } from "../../middleware/auth";

const router = Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  vehicleController.createVehicle
);
router.get("/", vehicleController.getAllVehicles);
router.get("/:vehicleId", vehicleController.getVehicleById);
router.put(
  "/:vehicleId",
  authMiddleware,
  adminMiddleware,
  vehicleController.updateVehicle
);
router.delete(
  "/:vehicleId",
  authMiddleware,
  adminMiddleware,
  vehicleController.deleteVehicle
);

export default router;
