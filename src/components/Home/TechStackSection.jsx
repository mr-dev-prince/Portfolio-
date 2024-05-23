import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { GrTools } from "react-icons/gr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const fRef = useRef(null);
  const bRef = useRef(null);
  const tRef = useRef(null);
  const cRef = useRef(null);

  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  useEffect(() => {
    const el2 = bRef.current;
    const el4 = cRef.current;

    gsap.fromTo(
      el2,
      { y: "100%" },
      {
        y: "-100%",
        scrollTrigger: {
          trigger: el4,
          scroller: "body",
          start: "top 20%",
          end: "top -100%",
          scrub: 2,
          pin: true,
        }
      }
    );
  }, []);

  return (
    <div ref={cRef} className={`px-36 min-h-screen flex`}>
      <div className={`w-[50%] flex items-start gap-4`}>
        <div className={`w-80 text-left font-bold tracking-wide space-y-4`}>
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
            In my journey as a full-stack web developer, I've mastered a diverse
            array of technologies that empower me to build robust and dynamic
            applications from the ground up. Here's a glimpse into the tools and
            frameworks I leverage to bring ideas to life.{" "}
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
      <div className={`h-[200px] outline overflow-hidden`}>
        <div ref={fRef} className={`bg-[#367de9] h-[200px] `}>
          Front-end
        </div>
        <div ref={bRef} className={`bg-[#d13232] h-[200px]`}>
          Backend
        </div>
        <div ref={tRef} className={`bg-[#31bd54] h-[200px]`}>
          Tools
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
