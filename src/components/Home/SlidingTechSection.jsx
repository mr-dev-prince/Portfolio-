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
        { opacity: 0, y: 10 },
        { opacity: 1, y: -20, duration: 0.6, ease: "power2.out" }
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
    <div ref={containerRef} className={`h-screen relative fivo border `}>
      <div className=" absolute top-40 flex justify-center items-center">
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
      <div className={`flex gap-2 justify-start items-start w-full`}>
        <div className={`flex flex-col-reverse items-start `}>
          <div className={`flex gap-2 -mt-10`}>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram2 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
          </div>
          <div className={`flex gap-2 `}>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram2 z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram2 z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
            <div
              className={`parallelogram z-40 ${
                theme === "light" ? "bg-[#c5dc4a]" : "bg-[#dc143c]"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between border ">
        <div></div>
        <div className="w-[50%]">
          <div className="h-[40%] w-full" ref={detailsRef}>
            {Object.keys(details).length !== 0 && (
              <ShowTechDetails details={details} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingTechSection;
