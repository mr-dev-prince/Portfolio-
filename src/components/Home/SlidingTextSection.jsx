import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const SlidingTextSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const conRef = containerRef.current;

    if (textElement) {
      gsap.fromTo(
        textElement,
        { x: "100%" },
        {
          x: "-50%",
          scrollTrigger: {
            trigger: conRef,
            scroller: "body",
            start: "top 20%",
            end: "top -300%",
            scrub: 2,
            pin: true,
          },
        },
      );
    }
  }, []);
  return (
    <div ref={containerRef} className={`fivo relative min-h-screen`}>
      <div className="absolute top-36 flex items-center justify-center">
        <p ref={textRef} className={`z-30 text-[15vh] font-bold uppercase`}>
          I Believe in my code.
        </p>
      </div>
      <div className={`flex w-full items-end justify-end gap-2`}>
        <div className={`flex flex-col items-end`}>
          <div className={`flex gap-2`}>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram2 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
          </div>
          <div className={`-mt-10 flex gap-2`}>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram2 z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram2 z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingTextSection;

// #c5dc4a #dc143c
