import User from "../models/User.js";
import Partner from "../models/Partner.js";

export const submitCheckIn = async (req, res) => {
  try {
    const { userId, partnerId } = req.body;

    const user = await User.findById(userId);
    const partner = await Partner.findById(partnerId);

    if (!user || !partner) {
      return res.status(404).json({ message: "User or Partner not found" });
    }

    partner.pendingCheckIns.push({
      userId,
      userName: user.name,
      email: user.email,
      status: "Pending",
    });

    user.checkIns.push({
      partnerId,
      partnerName: partner.companyName,
      status: "Pending",
    });

    await partner.save();
    await user.save();

    res.json({ message: "Check-in request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting check-in", error });
  }
};

export const getPartnerCheckIns = async (req, res) => {
  try {
    const partnerId = req.user.id;
    const partner = await Partner.findById(partnerId).populate("pendingCheckIns.userId", "name email");

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    res.json({ pendingCheckIns: partner.pendingCheckIns });
  } catch (error) {
    res.status(500).json({ message: "Error fetching check-in requests", error });
  }
};

export const updateCheckInStatus = async (req, res) => {
  try {
    const { partnerId, userId, status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status update" });
    }

    const partner = await Partner.findById(partnerId);
    const user = await User.findById(userId);

    if (!partner || !user) {
      return res.status(404).json({ message: "User or Partner not found" });
    }

    const checkInIndex = partner.pendingCheckIns.findIndex((c) => c.userId.toString() === userId);

    if (checkInIndex === -1) {
      return res.status(404).json({ message: "Check-in request not found" });
    }

    partner.pendingCheckIns[checkInIndex].status = status;

    const userCheckInIndex = user.checkIns.findIndex((c) => c.partnerId.toString() === partnerId && c.status === "Pending");

    if (userCheckInIndex !== -1) {
      user.checkIns[userCheckInIndex].status = status;
    }

    partner.pendingCheckIns = partner.pendingCheckIns.filter((c) => c.userId.toString() !== userId);

    await partner.save();
    await user.save();

    res.json({ message: `Check-in ${status}` });
  } catch (error) {
    res.status(500).json({ message: "Error updating check-in status", error });
  }
};
