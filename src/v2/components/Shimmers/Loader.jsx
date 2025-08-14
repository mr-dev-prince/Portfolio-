import React, { useEffect, useRef } from "react";
import loaderIcon from "../../assets/loader.json";
import Lottie from "lottie-web";

const Loader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: containerRef.current,
      animationData: loaderIcon,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => animation.destroy();
  }, []);
  return (
    <div className="min-h-screen pl-6 md:mx-[25%]">
      <div className="mt-28 flex h-full w-full flex-col items-center justify-center">
        <div ref={containerRef} className="h-24" />
        <p className="font-slabo text-lg text-white">
          Wait... my server having a coffee.
        </p>
      </div>
    </div>
  );
};

export default Loader;
