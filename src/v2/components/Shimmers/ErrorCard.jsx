import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import errorIcon from "../../assets/error.json";

const ErrorCard = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      animationData: errorIcon,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => animation.destroy();
  }, []);

  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-gray-800/60 p-3 w-full">
      <div className="h-[400px] w-full flex flex-col justify-center items-center bg-gray-900/50 rounded-lg">
        <div ref={containerRef} className="w-32 h-32"></div>
        <p className="text-gray-300 text-md font-slabo mt-4">
          {text || "Something went wrong"}
        </p>
      </div>
    </div>
  );
};

export default ErrorCard;
