import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { myTechStack } from "../../constants/tech";
import { Link } from "react-router-dom";
import ShowTechDetails from "../fragments/ShowTechDetails";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const [details, setDetails] = useState({});

  const detailsRef = useRef();

  useEffect(() => {
    if (Object.keys(details).length !== 0) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
    }
  }, [details]);

  return (
    <div className={`fivo flex h-screen w-full gap-12 overflow-hidden px-36`}>
      <div className="flex h-fit w-[50%] flex-col items-center justify-start px-4 pb-12">
        <div className={`flex h-[400px] w-full items-start justify-center`}>
          <div className="flex flex-col items-start justify-center text-left">
            <div className={`space-y-4 text-left font-bold tracking-wide`}>
              <p
                className={`${
                  theme === "dark" ? "text-[#dc143c]" : "text-[#1e649a]"
                }`}
              >
                02
              </p>
              <p className={`fivo text-3xl uppercase`}>
                My <br /> Tech stack
              </p>
            </div>
            <div>
              <p className="text-justify text-xl font-semibold">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies that empower me to build robust
                and dynamic applications from the ground up. Here's a glimpse
                into the tools and frameworks I leverage to bring ideas to life.
                <span
                  className={`underline ${
                    theme === "light"
                      ? ""
                      : "cursor-pointer px-2 underline-offset-4 transition-colors duration-200 hover:bg-[#1e649a] hover:text-[#1f1f1f]"
                  }`}
                >
                  explore more
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[40%] w-full" ref={detailsRef}>
          {Object.keys(details).length !== 0 && (
            <ShowTechDetails details={details} />
          )}
        </div>
      </div>
      <div
        className={`flex h-full w-[50%] flex-col items-center justify-start border-white`}
      >
        <div
          className={`grid h-fit w-fit grid-cols-4 grid-rows-4 gap-5 overflow-hidden rounded-xl`}
        >
          {myTechStack.map((tech, idx) => (
            <Link
              onClick={() => {
                setDetails({});
                setDetails(tech);
              }}
              key={idx}
              className={`z-50 h-44 w-44 p-7 backdrop-blur-xl duration-300 ${
                details.name === tech.name
                  ? theme === "light"
                    ? "bg-[#dc143c]"
                    : "bg-[#c6dc4a]"
                  : "bg-[#52525242]"
              } transition-all hover:scale-105`}
            >
              <img
                src={tech.image}
                className="h-full w-full object-contain"
                alt="react"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
