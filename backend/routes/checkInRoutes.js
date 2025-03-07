import express from "express";
import { submitCheckIn, getPartnerCheckIns, updateCheckInStatus } from "../controllers/checkInController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Submit check-in request
router.post("/submit", protect, submitCheckIn);

// Get all check-in requests for a partner
router.get("/partner-checkins", protect, getPartnerCheckIns);

// Approve/Reject check-in request
router.put("/update-status", protect, updateCheckInStatus);

export default router;
