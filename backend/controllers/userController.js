import User from "../models/User.js";
import Partner from "../models/Partner.js";

export const getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find().select("-password"); 
    
    res.status(200).json({ partners });
  } catch (error) {
    console.error("Error fetching partners:", error);
    res.status(500).json({ message: "Error fetching partners", error });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};
