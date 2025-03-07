import { useState, useEffect } from "react";

const TypingAnimation = () => {
  const words = [
    "Your seamless check-in solution.",
    "Scan, check-in, and move forward.",
    "Built with security and simplicity in mind.",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < words[wordIndex].length) {
          setText(text + words[wordIndex][charIndex]);
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setText(text.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(!isDeleting);
          if (!isDeleting) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else {
            setWordIndex((wordIndex + 1) % words.length);
            setTimeout(() => setIsDeleting(false), 500);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, charIndex, isDeleting, wordIndex]);

  return <div className="text-lg text-gray-300 font-semibold">{text}</div>;
};

export default TypingAnimation;
