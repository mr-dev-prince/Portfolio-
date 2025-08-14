import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { projects } from "../constants/projects";
import ScrollButton from "../components/fragments/ScrollButton";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [theme] = useRecoilState(ThemeState);

  const textRef = useRef([]);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const imgRefs = useRef([]);
  const detailsRefs = useRef([]);

  const bgColor = theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f]";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const accentBgColor = theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]";

  useEffect(() => {
    if (containerRef.current && textRef.current.length) {
      gsap.fromTo(
        textRef.current,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
            pin: true,
          },
        },
      );
    }

    // Animation for each project section
    sectionRefs.current.forEach((section, index) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 2,
        },
      });

      timeline.fromTo(
        imgRefs.current[index],
        {
          height: "100vh",
          width: "100vw",
        },
        {
          height: "60vh",
          width: "60vw",
          ease: "power3.out",
        },
      );

      timeline.fromTo(
        detailsRefs.current[index],
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          ease: "power3.out",
        },
        "<",
      );
    });
  }, []);

  return (
    <div className={`${bgColor} relative h-fit`}>
      <div
        ref={containerRef}
        className="fivo relative flex h-screen flex-col items-center justify-center overflow-hidden"
      >
        <div
          className={`uppercase ${textColor} flex space-x-1 text-8xl font-extrabold tracking-wider`}
        >
          {"projects".split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => (textRef.current[index] = el)}
              className="inline-block"
            >
              {char}
            </span>
          ))}
        </div>
        <ScrollButton />
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`relative flex h-screen w-full items-center justify-center overflow-hidden`}
        >
          <div
            ref={(el) => (imgRefs.current[index] = el)}
            className={`flex h-full w-full items-center justify-center overflow-hidden`}
          >
            <img
              src={project.url}
              alt={`project_img_${index}`}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div
            ref={(el) => (detailsRefs.current[index] = el)}
            className={`absolute right-0 top-[60vh] flex h-[30vh] w-1/2 flex-col items-start justify-center rounded-l-md ${accentBgColor} p-8 text-white shadow-lg`}
          >
            <p className="mb-2 text-2xl font-bold">{project.details[0]}</p>
            <p className="mb-4 text-lg">{project.details[1]}</p>
            <p className="text-sm">{project.details[2]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
