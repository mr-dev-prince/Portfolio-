import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { myTechStack } from "../../constants/tech.js";
import { Link } from "react-router-dom";
import ShowTechDetails from "../fragments/ShowTechDetails.jsx";

const SlidingTechSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [theme] = useRecoilState(ThemeState);

  const techRef = useRef(null);
  const containerRef = useRef(null);
  const [details, setDetails] = useState({});
  const detailsRef = useRef();

  useEffect(() => {
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [details]);

  useEffect(() => {
    const textElement = techRef.current;
    const conRef = containerRef.current;

    if (textElement && conRef) {
      gsap.fromTo(
        textElement,
        { x: "-50%" },
        {
          x: "35%",
          scrollTrigger: {
            trigger: conRef,
            scroller: "body",
            start: "top 0%",
            end: "bottom top",
            scrub: 2,
            pin: conRef,
            pinSpacing: true,
          },
        }
      );
    }
  }, []);

  const getThemeClass = (lightClass, darkClass) =>
    theme === "light" ? lightClass : darkClass;

  return (
    <div ref={containerRef} className="h-screen relative fivo">
      <div className="absolute top-28 flex justify-center items-center">
        <div ref={techRef} className="flex flex-row-reverse">
          {myTechStack?.map((tech, idx) => (
            <Link
              onClick={() => setDetails(tech)}
              key={tech.id}
              className="p-7 duration-300 group z-40 h-44 w-44 hover:scale-105 transition-all relative"
            >
              <img
                src={tech.image}
                className="h-full w-full object-contain"
                alt="tech"
              />
              <span className="hidden group-hover:flex duration-100 delay-100 text-xl font-semibold absolute -top-2 rounded right-8 bg-red-600 text-white px-2 py-1">
                Click me
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-2 h-[65%] pt-24 justify-start items-start w-full">
        <div className="flex flex-col-reverse items-start">
          <div className="flex gap-2 -mt-10">
            <div
              className={`parallelogram z-40 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]"
              )}`}
            />
            <div
              className={`parallelogram2 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]"
              )}`}
            />
            <div
              className={`parallelogram z-40 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]"
              )}`}
            />
            <div
              className={`parallelogram2 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]"
              )}`}
            />
            <div
              className={`parallelogram z-40 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]"
              )}`}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[35%] flex justify-between">
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="flex flex-col text-left text-lg justify-center items-start px-32">
            <div className="text-left font-bold tracking-wide space-y-4">
              <p className={getThemeClass("text-[#1e649a]", "text-[#dc143c]")}>
                02
              </p>
              <p className="text-3xl fivo uppercase">Tech stack</p>
            </div>
            <div>
              <p className="font-semibold text-justify text-lg">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies and i am constantly learning new
                things and upskilling on daily basis.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[50%] p-2 h-full flex justify-center items-center"
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
