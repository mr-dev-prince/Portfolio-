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
      className="fivo relative flex min-h-screen flex-col justify-end px-36 pb-10"
    >
      <div>
        <div className="mb-12">
          <p
            ref={textRef}
            className="text text-3xl font-semibold uppercase tracking-wide"
          >
            Hi, I am Prince.
          </p>
        </div>
        <div className="text-[8vh] font-extrabold uppercase tracking-wide">
          <div className="flex items-center gap-4">
            <div className="skew relative">
              <p
                className={`relative ${
                  theme === "light" ? "bgAnimaLight" : "bgAnimaDark"
                } px-4`}
              >
                Tech
              </p>
              <span
                className={`show absolute -right-4 -top-5 ${
                  theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f]"
                } rounded-full p-2`}
              >
                <img className="spin h-5" src={react} alt="" />
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
      <div className="absolute bottom-0 left-0 flex h-24 w-full items-center justify-center py-4">
        <div
          className={`h-full border-2 ${
            theme === "light" ? "border-[#1e649a]" : "border-[#DC143C]"
          } animateUpDown flex w-8 items-start justify-center rounded-b-full rounded-t-full pt-8`}
        >
          <img src={assets.globe} alt="" className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
