import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { myTechStack } from "../../constants/tech";
import { Link } from "react-router-dom";
import ShowTechDetails from "../fragments/ShowTechDetails";

const SlidingTechSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const techRef = useRef(null);
  const containerRef = useRef(null);
  const [details, setDetails] = useState({});
  const detailsRef = useRef();

  useEffect(() => {
    if (Object.keys(details).length !== 0) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [details]);

  useEffect(() => {
    const textElement = techRef.current;
    const conRef = containerRef.current;

    if (textElement) {
      gsap.fromTo(
        textElement,
        { x: "-50%" },
        {
          x: "35%",
          scrollTrigger: {
            trigger: conRef,
            scroller: "body",
            start: "top 0%",
            end: "top -300%",
            scrub: 2,
            pin: true,
          },
        }
      );
    }
  }, []);
  return (
    <div ref={containerRef} className={`h-screen relative fivo`}>
      <div className=" absolute top-28 flex justify-center items-center">
        <div ref={techRef} className="flex flex-row-reverse">
          {myTechStack.map((tech, idx) => (
            <Link
              onClick={() => {
                setDetails({});
                setDetails(tech);
              }}
              key={idx}
              className={`p-7 duration-300 z-40 h-44 w-44 hover:scale-105 transition-all `}
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
      <div
        className={`flex gap-2 h-[65%] pt-24 justify-start items-start w-full`}
      >
        <div className={`flex flex-col-reverse items-start `}>
          <div className={`flex gap-2 -mt-10`}>
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
          <div className={`flex gap-2 `}>
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
      <div className="w-full h-[35%] flex justify-between">
        <div
          className={`w-[50%] h-full flex justify-center items-center`}
        >
          <div className="flex flex-col text-left text-lg justify-center items-start px-32">
            <div className={`text-left font-bold tracking-wide space-y-4 `}>
              <p
                className={`${
                  theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
                }`}
              >
                02
              </p>
              <p className={`text-3xl fivo uppercase`}>
                Tech stack
              </p>
            </div>
            <div>
              <p className="font-semibold text-justify text-lg">
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
        <div
          className=" w-[50%] p-2 h-full flex justify-center items-center"
          ref={detailsRef}
        >
          {Object.keys(details).length !== 0 && (
            <ShowTechDetails details={details} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SlidingTechSection;
