import express from "express";
import { getAllPartners, getUserProfile } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js"; 

const router = express.Router();

// Get all partners with QR codes
router.get("/partners", getAllPartners);

// Get user profile (protected)
router.get("/profile", authMiddleware, getUserProfile);

export default router;
