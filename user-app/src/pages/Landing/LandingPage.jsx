import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import SlidingFeatures from "./SlidingFeatures";
import Footer from "../../components/Footer";
import AboutMe from "./AboutMe";
import "./RainEffect.css";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      <div className="rain-overlay">
        <video autoPlay loop muted>
          <source src="/assets/bg_rain.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Welcome to QR Check-in
        </motion.h1>

        <div className="mt-4 text-xl text-gray-300">
          <TypingAnimation />
        </div>

        <div className="mt-6 flex gap-6">
          <motion.a
            href="/login"
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </motion.a>
          {/* <motion.a
            href="/login"
            whileHover={{ scale: 1.1 }}
            className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Login
          </motion.a> */}
        </div>
      </div>

      <SlidingFeatures />

      <AboutMe />
      <Footer />
    </div>
  );
};

export default LandingPage;
