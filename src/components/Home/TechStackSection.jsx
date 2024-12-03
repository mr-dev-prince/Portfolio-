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
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [details]);

  const isEven = (num) => {
    if (num % 2 === 0) return true;
    return false;
  };

  return (
    <div className={`px-36 h-screen overflow-hidden w-full gap-12 flex fivo`}>
      <div className="flex h-fit w-[50%] justify-start flex-col items-center px-4 pb-12">
        <div className={`w-full h-[400px] flex justify-center items-start`}>
          <div className="flex flex-col text-left justify-center items-start">
            <div className={`text-left font-bold tracking-wide space-y-4 `}>
              <p
                className={`${
                  theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
                }`}
              >
                02
              </p>
              <p className={`text-3xl fivo uppercase`}>
                My <br /> Tech stack
              </p>
            </div>
            <div>
              <p className="font-semibold text-justify text-xl">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies that empower me to build robust
                and dynamic applications from the ground up. Here's a glimpse
                into the tools and frameworks I leverage to bring ideas to life.
                <span
                  className={`underline ${
                    theme === "light"
                      ? ""
                      : "hover:bg-[#1e649a] hover:text-[#1f1f1f] underline-offset-4 cursor-pointer px-2 transition-colors duration-200 "
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
            <ShowTechDetails details={details}/>
          )}
        </div>
      </div>
      <div
        className={`w-[50%] border-white h-full flex justify-start flex-col items-center`}
      >
        <div
          className={`h-fit w-fit rounded-xl grid grid-cols-4 grid-rows-4 gap-5 overflow-hidden`}
        >
          {myTechStack.map((tech, idx) => (
            <Link
              onClick={() => {
                setDetails({});
                setDetails(tech);
              }}
              key={idx}
              className={`p-7 backdrop-blur-xl duration-300 z-50 h-44 w-44
                ${
                  details.name === tech.name
                    ? theme === "light" ? "bg-[#dc143c]" : "bg-[#c6dc4a]" 
                    : "bg-[#52525242]" 
                }
                hover:scale-105 transition-all `}
            >
              <img
                src={tech.image}
                className="h-full w-full object-contain "
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
