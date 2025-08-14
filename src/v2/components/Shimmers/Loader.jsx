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
    <div className="min-h-screen mx-[25%] pl-6">
      <div className="w-full h-full flex mt-28 flex-col justify-center items-center">
        <div ref={containerRef} className="h-24 " />
        <p className="font-slabo text-white text-lg">
          Wait... my server having a coffee.
        </p>
      </div>
    </div>
  );
};

export default Loader;
