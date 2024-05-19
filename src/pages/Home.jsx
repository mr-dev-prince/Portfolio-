import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import react from "../Assets/structure.png";

const Home = () => {
  gsap.registerPlugin(useGSAP);

  const textRef = useRef();
  const rRef = useRef();

  useGSAP(() => {
    gsap.from(".text", { y: 100 });
    setTimeout(() => {
      gsap.from(".react", { y: 100, opacity:0 });
    }, 1000);
  });

  return (
    <div className="flex pl-36 min-h-screen">
      <div className=" h-full mt-56 flex flex-col gap-12">
        <div>
          <p
            ref={textRef}
            className="text text-3xl font-semibold tracking-wide text-white"
          >
            Hi, I am Prince...
          </p>
        </div>
        <div className="uppercase text-[#F2E8DE] text-8xl font-bold fivo tracking-wide">
          <div className="flex gap-4 items-center">
            <div className="relative -rotate-6">
              <p className="relative bg-[#C5DC4A] text-[#1f1f1f] px-4">Tech</p>
              <span
                ref={rRef}
                className=" react absolute -top-7 -right-5 bg-[#1f1f1f] p-3 rounded-full"
              >
                <img className="h-5 animate-spin" src={react} alt="" />
              </span>
            </div>
            <p>ninja</p>
          </div>
          <p>mastering</p>
          <p>digital domains.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
