"use client";

import Image from "next/image";
import prince from "../assets/prince.png";

import Button from "./button";
import { ISocialButton } from "../interfaces/components";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaRegFileAlt,
  FaCog,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-[430px] mx-96 flex flex-col justify-center px-6 text-white/80">
      <div className="flex items-start justify-between w-full mb-5">
        <div className="flex items-center gap-4">
          <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden border border-white/20 bg-[#1a1a1a] p-1">
            <Image
              src={prince}
              alt="Prince Chaurasia"
              className="w-full h-full object-cover rounded-xl bg-white/10"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-serif tracking-tight flex items-center gap-2 text-white">
              Hi, I'm Prince Chaurasia{" "}
            </h1>
            <p className="text-white/60 font-serif text-lg tracking-wide">
              cse • firmware • ai
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-5 py-1.5 rounded-lg border border-white/10 bg-black/40 text-xs font-medium text-white/40 hover:bg-white/5 transition-colors">
          <span>⌘</span>
          <span>K</span>
        </button>
      </div>
      <div className="space-y-2 text-[16px] font-light leading-relaxed max-w-2xl text-white/60">
        <p>
          i am a{" "}
          <span className="relative inline-block text-white font-normal">
            computer science graduate
            <svg
              className="absolute w-[105%] h-[8px] -bottom-1.5 -left-[2.5%] text-white/40"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M1,7 Q50,2 98,6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M2,3 Q50,8 99,4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          currently working as a{" "}
          <span className="relative inline-block text-white font-normal">
            software engineer
            <svg
              className="absolute w-[105%] h-[8px] -bottom-1.5 -left-[2.5%] text-white/40"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M1,7 Q50,2 98,6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M2,3 Q50,8 99,4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          and building cool things.
        </p>
        <p className="leading-loose">
          i use <span className="text-white">react</span> to build frontends,{" "}
          <span className="text-white">fastify</span> and{" "}
          <span className="text-white">fastAPI</span> for backends,{" "}
          <span className="text-white">Next.js</span> to create complete
          full-stack web apps, and by using modern databases like{" "}
          <span className="text-white">PostgreSQL</span> and{" "}
          <span className="text-white">MongoDB</span>.
        </p>
      </div>
      <div className="mt-4">
        <Button
          text="Let's Talk! "
          icon={<FaCog className="text-white/80 group-hover:animate-spin" />}
          onClick={() => {}}
        />
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-white/60 text-sm">
          Here are my <span className="text-white">socials</span>
        </p>
        <div className="flex items-center gap-3">
          <SocialButton icon={<FaGithub />} label="GitHub" link="#" />
          <SocialButton icon={<FaTwitter />} label="Twitter" link="#" />
          <SocialButton icon={<FaLinkedin />} label="LinkedIn" link="#" />
          <SocialButton icon={<FaDiscord />} label="Discord" link="#" />
          <SocialButton icon={<FaRegFileAlt />} label="Resume" link="#" />
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label, link }: ISocialButton) => (
  <a
    href={link}
    className="flex items-center gap-1.5 px-3 py-1 rounded-xl border border-white/5 bg-[#0f0f0f] hover:bg-white/10 transition-colors text-white/70 text-sm font-light"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Hero;
