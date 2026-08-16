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
    <div className="w-full overflow-hidden rounded-xl bg-gray-800/60 p-3 shadow-md">
      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-900/50 md:h-[400px]">
        <div ref={containerRef} className="h-32 w-32"></div>
        <p className="text-md mt-4 font-slabo text-gray-300">
          {text || "Something went wrong"}
        </p>
      </div>
    </div>
  );
};

export default ErrorCard;
