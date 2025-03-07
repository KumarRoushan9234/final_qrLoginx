import express from "express";
import { register, login,updateUserProfile, changePassword } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.put("/update", protect, updateUserProfile);

router.put("/change-password", protect, changePassword);

export default router;
