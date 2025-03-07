import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import usePartnerStore from "../store/PartnerStore";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaIndustry,
} from "react-icons/fa";

const Mypartner = () => {
  const { partner } = usePartnerStore();

  if (!partner)
    return <p className="text-center text-gray-500 text-lg">Loading...</p>;

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white/70 backdrop-blur-lg shadow-lg rounded-xl mt-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        <h3 className="text-4xl font-semibold text-gray-900">
          {partner?.companyName || "N/A"}
        </h3>
        <h6 className="text-xl font-semibold text-gray-900">
          {partner.companyMotto}
        </h6>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          className="text-center p-4 bg-gray-100 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          {partner?._id ? (
            <>
              <QRCodeCanvas value={partner._id} size={180} />
              <p className="text-gray-600 mt-2 font-medium">Scan Me</p>
            </>
          ) : (
            <p className="text-gray-400">QR Code Unavailable</p>
          )}
        </motion.div>

        <div className="flex flex-col gap-3 text-gray-700">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" /> {partner?.email || "N/A"}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-500" /> {partner?.phone || "N/A"}
          </p>
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> Address:
            </h3>
            <p className="text-gray-600">{partner?.address?.street || "N/A"}</p>
            <p className="text-gray-600">
              {partner?.address?.city || "N/A"},{" "}
              {partner?.address?.state || "N/A"},{" "}
              {partner?.address?.country || "N/A"} -{" "}
              {partner?.address?.zipCode || "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Additional Details
        </h3>
        <p className="flex items-center gap-2 text-gray-700">
          <FaIndustry className="text-purple-500" /> Industry:{" "}
          {partner?.industryType || "N/A"}
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <FaGlobe className="text-blue-600" /> Website:{" "}
          {partner?.website || "N/A"}
        </p>
        <p className="text-gray-700">
          Description: {partner?.companyDetails || "N/A"}
        </p>
      </div>
    </motion.div>
  );
};

export default Mypartner;
