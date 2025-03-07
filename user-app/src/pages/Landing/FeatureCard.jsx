import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md w-[300px] text-center"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
