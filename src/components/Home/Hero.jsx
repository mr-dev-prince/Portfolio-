import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react from "../../assets/structure.png";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import BackgroundMusic from "../fragments/BackgroundMusic.jsx";

const Hero = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  gsap.registerPlugin(useGSAP);

  const textRef = useRef();

  useGSAP(() => {
    gsap.from(".text", { y: 100 });
  });

  return (
    <div id="trigger-music" className=" h-full px-36 pt-96 min-h-screen flex flex-col gap-12 fivo">
      <div>
        <p ref={textRef} className="text text-3xl font-semibold tracking-wide">
          Hi, I am Prince.
        </p>
      </div>
      <div className="uppercase text-8xl font-extrabold tracking-wide">
        <div className="flex gap-4 items-center">
          <div className="relative skew">
            <p
              className={`relative ${
                theme === "light" ? "bgAnimaLight" : "bgAnimaDark"
              } px-4`}
            >
              Tech
            </p>
            <span
              className={`show absolute -top-5 -right-4 ${
                theme === "light" ? "bg-[#F2E8DE]" : "bg-[#1f1f1f]"
              }  p-2 rounded-full`}
            >
              <img className="h-5 spin" src={react} alt="" />
            </span>
          </div>
          <p>savvy</p>
        </div>
        <p>mastering the</p>
        <p>
          coding realm<span className=" text-[#dc143c]">.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
