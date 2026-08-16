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
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
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
        },
      );
    }
  }, []);

  const getThemeClass = (lightClass, darkClass) =>
    theme === "light" ? lightClass : darkClass;

  return (
    <div ref={containerRef} className="fivo relative h-screen">
      <div className="absolute top-28 flex items-center justify-center">
        <div ref={techRef} className="flex flex-row-reverse">
          {myTechStack?.map((tech, idx) => (
            <Link
              onClick={() => setDetails(tech)}
              key={tech.id}
              className="group relative z-40 h-44 w-44 p-7 transition-all duration-300 hover:scale-105"
            >
              <img
                src={tech.image}
                className="h-full w-full object-contain"
                alt="tech"
              />
              <span className="absolute -top-2 right-8 hidden rounded bg-red-600 px-2 py-1 text-xl font-semibold text-white delay-100 duration-100 group-hover:flex">
                Click me
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex h-[65%] w-full items-start justify-start gap-2 pt-24">
        <div className="flex flex-col-reverse items-start">
          <div className="-mt-10 flex gap-2">
            <div
              className={`parallelogram z-40 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]",
              )}`}
            />
            <div
              className={`parallelogram2 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]",
              )}`}
            />
            <div
              className={`parallelogram z-40 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]",
              )}`}
            />
            <div
              className={`parallelogram2 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]",
              )}`}
            />
            <div
              className={`parallelogram z-40 ${getThemeClass(
                "bg-[#1e649a]",
                "bg-[#dc143c]",
              )}`}
            />
          </div>
        </div>
      </div>
      <div className="flex h-[35%] w-full justify-between">
        <div className="flex h-full w-[50%] items-center justify-center">
          <div className="flex flex-col items-start justify-center px-32 text-left text-lg">
            <div className="space-y-4 text-left font-bold tracking-wide">
              <p className={getThemeClass("text-[#1e649a]", "text-[#dc143c]")}>
                02
              </p>
              <p className="fivo text-3xl uppercase">Tech stack</p>
            </div>
            <div>
              <p className="text-justify text-lg font-semibold">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies and i am constantly learning new
                things and upskilling on daily basis.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex h-full w-[50%] items-center justify-center p-2"
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
