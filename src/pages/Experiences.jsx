import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const containerRef = useRef(null);
  const spanRef = useRef([]);

  const [cursor, setCursor] = useState({ x: -1, y: -1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursor({ x: clientX, y: clientY });
  };

  useEffect(() => {
    gsap.fromTo(
      spanRef.current,
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

  return (
    <div onMouseMove={handleMouseMove} className={`h-fit relative`}>
      <div className="h-screen w-full overflow-hidden bg-[#1f1f1f] fixed top-0 left-0">
        <div className="w-full h-full overflow-hidden grid grid-cols-30 grid-rows-18 gap-0.5 absolute top-0 left-0">
          {Array.from({ length: 30 * 18 }).map((_, i) => (
            <span key={i} className="bg-[#1f1f1f] z-10" />
          ))}
        </div>
        <div
          className="h-64 w-64 bg-gradient-to-br animate-pulse from-sky-300 to-green-300 via-amber-300 rounded-full blur-3xl absolute pointer-events-none -z-0"
          style={{
            top: `${cursor.y - 128}px`,
            left: `${cursor.x - 126}px`,
          }}
        />
      </div>
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center w-full uppercase text-white text-9xl font-extrabold fivo"
      >
        {["ex", "p", "eri", "en", "ce"].map((item, index) => (
          <span
            className={`${index === 1 && "text-blue-600"} z-50`}
            key={index}
            ref={(el) => (spanRef.current[index] = el)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Experiences;
