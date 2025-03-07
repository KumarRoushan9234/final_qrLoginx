import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-[#111] text-white w-10 h-10 rounded-full shadow-lg hover:brightness-125 transition flex items-center justify-center text-lg font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        ?
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-14 right-4 bg-[#111] p-3 rounded-md shadow-lg text-white w-52"
            ref={modalRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <h2 className="text-base font-bold">Need Help?</h2>
            <p className="text-gray-300 text-xs mt-1">
              Scan, submit, and get approved! | | Scan, submit, and get
              approved! |
            </p>
            {/* <button
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs hover:bg-blue-700 transition"
            >
              Close
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHelp;
