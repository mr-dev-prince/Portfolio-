import React, { useState } from "react";
import AnimatedComponent from "../components/fragments/AnimatedComponent";

const Splash = ({ onEnter }) => {
  const [cursor, setCursor] = useState({ x: -1, y: -1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursor({ x: clientX, y: clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-screen w-full overflow-hidden bg-[#1f1f1f] relative flex justify-center items-center z-10"
    >
      <div className="w-full h-full overflow-hidden grid grid-cols-30 grid-rows-18 gap-0.5 absolute top-0 left-0">
        {Array.from({ length: 30 * 18 }).map((_, i) => (
          <span key={i} className="bg-[#1f1f1f] z-10" />
        ))}
      </div>
      <div
        className="h-64 w-64 bg-gradient-to-br animate-pulse from-sky-300 to-green-300 via-amber-300 rounded-full blur-3xl absolute pointer-events-none -z-0"
        style={{
          top: `${cursor.y - 128}px`,
          left: `${cursor.x - 126}px`,
        }}
      />
      <div className="w-full h-full flex justify-center items-start px-44 flex-col gap-20   z-50 text-white">
        <AnimatedComponent delay={0}>
          <p className="fivo text-6xl font-light uppercase">Hi,</p>
        </AnimatedComponent>
        <AnimatedComponent delay={1}>
          <p className="fivo text-6xl font-medium uppercase">
            I am{" "}
            <span className="font-extrabold hover:text-[#c5dc4a] transition-all duration-1000">
              prince chaurasia.
            </span>
          </p>
        </AnimatedComponent>
        <AnimatedComponent delay={2}>
          <p className="fivo text-6xl font-medium uppercase">
            Welcome to my portfolio.
          </p>
        </AnimatedComponent>
        <AnimatedComponent delay={3}>
          <button
            onClick={() => {
              console.log("i was clicked");
              onEnter();
            }}
            className="px-24 py-3 bg-slate-400/5 rounded-lg backdrop-blur-2xl font-mono uppercase hover:scale-95 duration-500 transition-all"
          >
            Show portfolio
          </button>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default Splash;
