import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import { experiences } from "../constants/experiences";
import { VscTerminalUbuntu } from "react-icons/vsc";
import ScrollButton from "../components/fragments/ScrollButton";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const containerRef = useRef(null);
  const spanRefs = useRef([]);
  const sectionRefs = useRef([]);
  const gradientCircleRefs = useRef([]);
  const leftTextRefs = useRef([]);
  const rightBoxRefs = useRef([]);

  const [theme] = useRecoilState(ThemeState);

  const [cursor, setCursor] = useState({ x: -1, y: -1 });

  const bgColor = theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f]";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const accentTextColor =
    theme === "light" ? "text-[#1e649a]" : "text-[#dc143c]";
  const accentBgColor = theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]";

  const bubble =
    theme === "light"
      ? "from-red-700 to-black-700 via-yellow-700"
      : "from-sky-300 to-green-300 via-amber-300";

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    gsap.fromTo(
      spanRefs.current,
      {
        opacity: 0,
        x: (i) => (i === 0 ? "-200%" : i === 2 ? "200%" : 0),
        y: (i) => (i === 3 ? "-200%" : i === 4 ? "200%" : 0),
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    sectionRefs.current.forEach((section, idx) => {
      const leftTexts = leftTextRefs.current[idx] || [];
      const rightBox = rightBoxRefs.current[idx];
      const gradient = gradientCircleRefs.current[idx];

      gsap.fromTo(
        gradient,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "expo.in",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=250%",
            scrub: true,
            pin: true,
          },
        }
      );

      if (leftTexts.length) {
        gsap.fromTo(
          leftTexts,
          { x: "-100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            ease: "expo.in",
            stagger: 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=250%",
              scrub: true,
            },
          }
        );
      }

      gsap.fromTo(
        rightBox,
        { opacity: 0, x: "100%" },
        {
          opacity: 1,
          x: "0%",
          ease: "expo.in",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`h-fit relative ${
        theme === "light" ? "light-mode-bg-gradient" : "dark-mode-bg-gradient"
      }`}
    >
      <div
        className={`h-screen w-full overflow-hidden ${bgColor} fixed top-0 left-0`}
      >
        <div className="w-full h-full grid grid-cols-30 grid-rows-18 gap-0.5 absolute top-0 left-0">
          {Array.from({ length: 30 * 18 }).map((_, i) => (
            <span key={i} className={`${bgColor} z-10`} />
          ))}
        </div>
        <div
          className={`h-64 w-64 bg-gradient-to-br animate-pulse ${bubble} rounded-full blur-3xl absolute pointer-events-none -z-0`}
          style={{ top: `${cursor.y - 128}px`, left: `${cursor.x - 128}px` }}
        />
        <ScrollButton />
      </div>

      <div
        ref={containerRef}
        className={`h-screen flex items-center justify-center w-full uppercase ${textColor} text-9xl font-extrabold fivo`}
      >
        {["ex", "p", "eri", "en", "ce"].map((item, index) => (
          <span
            className={`${index === 1 && accentTextColor} z-50`}
            key={index}
            ref={(el) => (spanRefs.current[index] = el)}
          >
            {item}
          </span>
        ))}
      </div>

      {experiences.map((ex, idx) => (
        <div
          ref={(el) => (sectionRefs.current[idx] = el)}
          key={idx}
          className="h-screen flex justify-between items-center px-36"
        >
          <div className="w-[50%] h-full flex justify-start items-center relative overflow-hidden">
            <div
              ref={(el) => (gradientCircleRefs.current[idx] = el)}
              className={`h-96 w-96 ${accentBgColor} rounded-full absolute -left-[30%] blur-3xl`}
            />
            <div className="w-full h-full flex justify-start items-center ml-5 fivo">
              <div className="flex flex-col gap-5 z-50">
                {ex.experience.map((text, index) => (
                  <p
                    key={index}
                    className={`${
                      index === 0
                        ? "text-6xl font-extrabold tracking-wider"
                        : index === 1
                        ? "text-xl font-semibold"
                        : index === 2
                        ? "text-2xl font-semibold"
                        : "text-lg font-medium"
                    }`}
                    ref={(el) => {
                      if (!leftTextRefs.current[idx]) {
                        leftTextRefs.current[idx] = [];
                      }
                      leftTextRefs.current[idx][index] = el;
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-full w-[50%] justify-end items-center">
            <div
              ref={(el) => (rightBoxRefs.current[idx] = el)}
              className={`h-[40%] w-[90%] ${
                theme === "light" ? "bg-[#1e649a]/10" : "bg-[#dc143c]/10"
              } hover:${
                theme === "light" ? "bg-[#1e649a]/60" : "bg-[#dc143c]/60"
              } duration-1000 backdrop-blur-sm rounded-l-3xl z-50`}
            >
              <div className="flex flex-col justify-center group items-start pl-10 px-5 text-pretty h-full w-full gap-6 text-xl">
                {ex.details.map((detail, index) => (
                  <p
                    key={index}
                    className="flex justify-center items-start gap-2 font-medium"
                  >
                    <VscTerminalUbuntu
                      size={32}
                      color="white"
                      className="animate-spin group-hover:animate-none"
                    />{" "}
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
