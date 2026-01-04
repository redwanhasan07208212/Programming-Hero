import { Router } from "express";
import * as bookingController from "./booking.controller";
import { authMiddleware } from "../../middleware/auth";

const router = Router();

router.post("/", authMiddleware, bookingController.createBooking);
router.get("/", authMiddleware, bookingController.getBookings);
router.put("/:bookingId", authMiddleware, bookingController.updateBooking);

export default router;
