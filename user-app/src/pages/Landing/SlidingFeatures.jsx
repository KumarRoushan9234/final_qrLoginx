import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Fast & Secure Check-in",
    description:
      "Scan QR codes and check-in within seconds. Securely stores user data with encryption.",
    icon: "🚀",
  },
  {
    title: "Built on Modern Tech",
    description:
      "Developed using MERN (MongoDB, Express, React, Node.js) with Firebase authentication.",
    icon: "🛠️",
  },
  {
    title: "Real-time Approvals",
    description:
      "Admins can instantly approve or reject check-ins, ensuring smooth operations.",
    icon: "✅",
  },
  {
    title: "Fully Responsive UI",
    description:
      "Optimized for mobile and web with a dark mode for a seamless user experience.",
    icon: "📱",
  },
];

const SlidingFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-6 bg-gray-800">
      <h2 className="text-3xl text-center font-bold text-white mb-10">
        Key Features
      </h2>
      <div className="flex justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-gray-900 text-white p-8 rounded-lg shadow-lg text-center"
        >
          <div className="text-5xl">{features[currentIndex].icon}</div>
          <h3 className="text-2xl font-semibold mt-4">
            {features[currentIndex].title}
          </h3>
          <p className="mt-2 text-gray-400">
            {features[currentIndex].description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingFeatures;
