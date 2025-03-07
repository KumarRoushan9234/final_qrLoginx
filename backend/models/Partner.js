import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema(
  {
    companyName: { 
      type: String, 
      required: true, 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true 
    },
    phone: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    qrCode: { 
      type: String 
    },

    companyMotto: { 
      type: String, 
      trim: true 
    },
    companyDetails: { 
      type: String, 
      trim: true 
    },
    industryType: { 
      type: String, 
      enum: ["Tech", "Finance", "Healthcare", "Retail", "Education", "Other"], 
      default: "Other" 
    },
    website: { 
      type: String, 
      trim: true 
    },
    logo: { 
      type: String, 
      default: "" // Store URL or file path
    },

    // Address Object
    address: {
      street: { type: String, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      zipCode: { type: String, required: true, trim: true }
    },
    
    pendingCheckIns: [
      {
        userId: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: "User" 
        },
        userName: { 
          type: String 
        },
        email: { 
          type: String 
        },
        status: { 
          type: String, 
          enum: ["Pending", "Approved", "Rejected"], 
          default: "Pending" 
        },
        requestedAt: { 
          type: Date, 
          default: Date.now 
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Partner", PartnerSchema);
