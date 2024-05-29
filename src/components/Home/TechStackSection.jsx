import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import js from "../../Assets/js.png";
import ts from "../../Assets/ts.png";
import py from "../../Assets/py.png";
import cpp from "../../Assets/cpp.png";
import react from "../../Assets/react.png";
import next from "../../Assets/next.png";
import tailwind from "../../Assets/tailwind.png";
import recoil from "../../Assets/recoil.svg";
import radix from "../../Assets/radix.svg";
import mongo from "../../Assets/mongo.png";
import express from "../../Assets/express.png";
import firebase from "../../Assets/firebase.png";
import prisma from "../../Assets/prisma.png";
import github from "../../Assets/github.png";
import zustand from "../../Assets/zustand.png";
import docker from "../../Assets/docker.png";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const fRef = useRef(null);
  const bRef = useRef(null);
  const tRef = useRef(null);
  const cRef = useRef(null);
  const oRef = useRef(null);

  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  useEffect(() => {
    const el2 = bRef.current;
    const el3 = tRef.current;
    const el4 = oRef.current;
    const mainEl = cRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainEl,
        scroller: "body",
        start: "top 0%",
        end: "top, -300%",
        scrub: 3,
        pin: true,
      },
    });

    tl.to(el2, { y: -400, duration: 3 })
      .to(el3, { y: -800, duration: 3 })
      .to(el4, { y: -1200, duration: 3 });
  }, []);

  return (
    <div
      ref={cRef}
      className={`px-36 min-h-screen flex justify-center items-center gap-12`}
    >
      <div className={`w-[50%] h-[400px] flex justify-center items-end`}>
        <div className="flex flex-col text-left justify-center items-start">
          <div className={`text-left font-bold tracking-wide space-y-4 `}>
            <p
              className={`${
                theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
              }`}
            >
              02
            </p>
            <p className={`text-3xl`}>
              My <br /> Tech stack
            </p>
          </div>
          <div>
            <p className="text-left">
              In my journey as a full-stack web developer, I've mastered a
              diverse array of technologies that empower me to build robust and
              dynamic applications from the ground up. Here's a glimpse into the
              tools and frameworks I leverage to bring ideas to life.{" "}
              <span
                className={`underline ${
                  theme === "light"
                    ? ""
                    : "hover:bg-[#c5dc4a] hover:text-[#1f1f1f] underline-offset-4 cursor-pointer px-2 transition-colors duration-200 "
                }`}
              >
                explore more
              </span>
            </p>
          </div>
        </div>
      </div>
      <div ref={cRef} className={`h-[400px] w-[50%] overflow-hidden  `}>
        <div
          ref={fRef}
          className={`${
            theme === "light" ? "bg-[#F2E8DE]" : "bg-[#1f1f1f]"
          } h-full grid grid-cols-2 place-items-center`}
        >
          <img src={js} className=" h-40 rounded-xl" alt="Javascript" />
          <img src={ts} className=" h-40 rounded-xl" alt="Typescript" />
          <img src={py} className=" h-40 rounded-xl" alt="Python" />
          <img src={cpp} className=" h-40 rounded-xl" alt="cpp" />
        </div>
        <div
          ref={bRef}
          className={`${
            theme === "light" ? "bg-[#F2E8DE]" : "bg-[#1f1f1f]"
          } grid grid-cols-2 place-items-center h-full`}
        >
          <img src={react} className=" h-28 rounded-xl" alt="react" />
          <img src={next} className=" h-28 rounded-xl" alt="next" />
          <img src={mongo} className=" h-28 rounded-xl" alt="mongo" />
          <img src={express} className=" h-28 rounded-xl" alt="express" />
        </div>
        <div
          ref={tRef}
          className={`${
            theme === "light" ? "bg-[#F2E8DE]" : "bg-[#1f1f1f]"
          } grid grid-cols-2 place-items-center h-full`}
        >
          <img src={firebase} className=" h-28 rounded-xl" alt="firebase" />
          <img src={prisma} className=" h-28 rounded-xl" alt="prisma" />
          <img src={zustand} className=" h-28 rounded-xl" alt="zustand" />
          <img src={recoil} className=" h-28 rounded-xl" alt="recoil" />
        </div>
        <div
          ref={oRef}
          className={`${
            theme === "light" ? "bg-[#F2E8DE]" : "bg-[#1f1f1f]"
          } grid grid-cols-2 place-items-center h-full`}
        >
          <img src={tailwind} className=" h-28 rounded-xl" alt="tailwind" />
          <img src={radix} className=" h-28 rounded-xl" alt="radix" />
          <img src={docker} className=" h-28 rounded-xl" alt="docker" />
          <img src={github} className=" h-28 rounded-xl" alt="github" />
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
