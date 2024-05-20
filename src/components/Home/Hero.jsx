import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import react from "../../Assets/structure.png";
import React, { useRef } from 'react'
import { useRecoilState } from 'recoil';
import { ThemeState } from '../../context/atoms/themeState';

const Hero = () => {
    const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
    gsap.registerPlugin(useGSAP);

  const textRef = useRef();

  useGSAP(() => {
    gsap.from(".text", { y: 100 });
  });

  return (
    <div className=" h-full mt-56 flex flex-col gap-12">
        <div>
          <p
            ref={textRef}
            className="text text-3xl font-semibold tracking-wide"
          >
            Hi, I am Prince.
          </p>
        </div>
        <div className="uppercase text-8xl font-bold fivo tracking-wide">
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
            <p>ninja</p>
          </div>
          <p>mastering</p>
          <p>digital domains.</p>
        </div>
      </div>
  )
}

export default Hero