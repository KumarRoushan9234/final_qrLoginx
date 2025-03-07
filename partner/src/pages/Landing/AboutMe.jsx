import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="py-20 px-6 bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white"
      >
        About Me
      </motion.h2>
      <p className="mt-4 text-lg text-gray-400">
        Hi, I'm{" "}
        <span className="text-blue-400 font-semibold">Kumar Roushan</span>, a
        passionate Web Developer and AI/ML enthusiast. Currently pursuing B.Tech
        CSE (3rd Year), I specialize in building scalable and intelligent
        applications.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/KumarRoushan9234"
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kumar-roushan-9870b425b/"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
