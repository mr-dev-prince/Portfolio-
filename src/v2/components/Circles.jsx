import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import codeIcon from "../assets/code.json";
import lottie from "lottie-web";

const Circles = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: codeIcon,
    });

    return () => {
      animationRef.current?.destroy();
    };
  }, []);

  const circles = [
    { color: "bg-blue-600", z: "z-50", content: true },
    { color: "bg-blue-700", z: "z-40" },
    { color: "bg-blue-800", z: "z-30" },
    { color: "bg-blue-900", z: "z-20" },
    { color: "bg-blue-950", z: "z-10" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2, // staggered delay for wave effect
            ease: "easeOut",
          }}
          className={`h-20 w-20 ${circle.color} rounded-full ${circle.z} ${
            index !== 0 ? "-ml-8" : ""
          } flex items-center justify-center`}
        >
          {circle.content && (
            <div
              ref={containerRef}
              style={{ width: 50, height: 50, cursor: "pointer", zIndex: 10 }}
            ></div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Circles;
