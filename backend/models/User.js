import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { 
      type: String,
      required: true,
      // trim: true 
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
    checkIns: [
      {
        partnerId: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: "Partner" 
        },
        partnerName: { 
          type: String 
        },
        status: { 
          type: String, 
          enum: ["Pending", "Approved", "Rejected"], 
          default: "Pending" 
        },
        checkInTime: { 
          type: Date, 
          default: Date.now 
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
