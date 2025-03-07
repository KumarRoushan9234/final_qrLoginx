import express from "express";
import { registerPartner, loginPartner, getPartnerProfile, generateQRCode, updateCheckInStatus,updatePartnerProfile,getCheckInRequests } from "../controllers/partnerController.js";
import protect from "../middleware/authMiddleware.js"; 

const router = express.Router();

// Partner Registration
router.post("/register", registerPartner);

// Partner Login
router.post("/login", loginPartner);

// Get Partner Profile (Protected Route)
router.get("/profile", protect, getPartnerProfile);

// Update Partner Profile with Additional Fields
router.put("/profile", protect, updatePartnerProfile);

// Generate QR Code for Partner
router.post("/generate-qr", protect, generateQRCode);

// Update Check-In Status (Approve/Reject)
router.patch("/checkin/:id", protect, updateCheckInStatus);

router.get("/checkin-requests", protect, getCheckInRequests);

// Update check-in status (approve/reject)
router.put("/checkin-requests/:requestId", protect, updateCheckInStatus);

export default router;
