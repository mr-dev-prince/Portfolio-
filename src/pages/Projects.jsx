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
        }
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
        }
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
        "<"
      );
    });
  }, []);

  return (
    <div className={`${bgColor} h-fit relative`}>
      <div
        ref={containerRef}
        className="h-screen flex flex-col justify-center items-center relative overflow-hidden fivo"
      >
        <div
          className={`uppercase ${textColor} text-8xl tracking-wider font-extrabold flex space-x-1`}
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
          className={`h-screen w-full flex justify-center items-center relative overflow-hidden`}
        >
          <div
            ref={(el) => (imgRefs.current[index] = el)}
            className={`w-full overflow-hidden flex justify-center items-center h-full`}
          >
            <img
              src={project.url}
              alt={`project_img_${index}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div
            ref={(el) => (detailsRefs.current[index] = el)}
            className={`absolute top-[60vh] rounded-l-md right-0 w-1/2 h-[30vh] flex flex-col justify-center items-start  ${accentBgColor} text-white p-8 shadow-lg`}
          >
            <p className="text-2xl font-bold mb-2">{project.details[0]}</p>
            <p className="text-lg mb-4">{project.details[1]}</p>
            <p className="text-sm">{project.details[2]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
