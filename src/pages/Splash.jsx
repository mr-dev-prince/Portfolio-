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
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-[#1f1f1f]"
    >
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-30 grid-rows-18 gap-0.5 overflow-hidden">
        {Array.from({ length: 30 * 18 }).map((_, i) => (
          <span key={i} className="z-10 bg-[#1f1f1f]" />
        ))}
      </div>
      <div
        className="pointer-events-none absolute -z-0 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-sky-300 via-amber-300 to-green-300 blur-3xl"
        style={{
          top: `${cursor.y - 128}px`,
          left: `${cursor.x - 126}px`,
        }}
      />
      <div className="z-50 flex h-full w-full flex-col items-start justify-center gap-20 px-44 text-white">
        <AnimatedComponent delay={0}>
          <p className="fivo text-6xl font-light uppercase">Hi,</p>
        </AnimatedComponent>
        <AnimatedComponent delay={1}>
          <p className="fivo text-6xl font-medium uppercase">
            I am{" "}
            <span className="font-extrabold transition-all duration-1000 hover:text-[#c5dc4a]">
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
            className="rounded-lg bg-slate-400/5 px-24 py-3 font-mono uppercase backdrop-blur-2xl transition-all duration-500 hover:scale-95"
          >
            Show portfolio
          </button>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default Splash;
