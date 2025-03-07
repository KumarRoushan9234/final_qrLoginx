import QRCode from "qrcode";
import Partner from "../models/Partner.js";

export const generateQRCode = async (req, res) => {
  try {
    const partnerId = req.user.id; 

    const partner = await Partner.findById(partnerId);
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    const qrData = {
      companyName: partner.companyName,
      email: partner.email,
      phone: partner.phone,
      partnerId: partner._id,
    };

    const qrCode = await QRCode.toDataURL(JSON.stringify(qrData));

    partner.qrCode = qrCode;
    await partner.save();

    res.json({ message: "QR Code generated successfully", qrCode });
  } catch (error) {
    console.error("Error generating QR Code:", error);
    res.status(500).json({ message: "Error generating QR Code", error });
  }
};


