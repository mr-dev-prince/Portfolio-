import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import react from "../../assets/structure.png";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { assets } from "../../constants/images.js";

const Hero = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  gsap.registerPlugin(useGSAP);

  const textRef = useRef();

  useGSAP(() => {
    gsap.from(".text", { y: 100 });
  });

  return (
    <div
      id="trigger-music"
      className="min-h-screen px-36 pb-10 flex flex-col justify-end fivo relative"
    >
      <div>
        <div className="mb-12">
          <p
            ref={textRef}
            className="text text-3xl font-semibold tracking-wide uppercase"
          >
            Hi, I am Prince.
          </p>
        </div>
        <div className="uppercase text-[8vh] font-extrabold tracking-wide">
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
                  theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f]"
                }  p-2 rounded-full`}
              >
                <img className="h-5 spin" src={react} alt="" />
              </span>
            </div>
            <p>savvy</p>
          </div>
          <p>surfing the</p>
          <p>
            coding realm
            <span
              className={`${
                theme === "light" ? "text-[#1e649a]" : "text-[#DC143C]"
              }`}
            >
              .
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex justify-center items-center w-full h-24 py-4">
        <div
          className={`h-full border-2 ${
            theme === "light" ? "border-[#1e649a]" : "border-[#DC143C]"
          }  w-8 rounded-t-full rounded-b-full flex justify-center items-start pt-8 animateUpDown`}
        >
          <img src={assets.globe} alt="" className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
