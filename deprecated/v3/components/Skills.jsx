"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const col1 = [
    "Python",
    "Typescript",
    "React",
    "Next",
    "Express",
    "Node",
    "MongoDB",
  ];
  const col2 = [
    "DBMS",
    "System Design",
    "Operating System",
    "Computer Networks",
    "Applied AI",
    "Prompt Engineering",
    "Mobile Development",
    "SDKs",
  ];

  return (
    <section
      id="skills"
      className="h-screen pt-20 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 justify-between"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-caveat text-6xl md:text-7xl">Skills</h2>
          <button className="bg-[#f9f5ee] text-[#EF3F4D] px-6 py-2.5 rounded-full font-poppins font-semibold text-sm tracking-wider flex items-center gap-3 hover:bg-white hover:shadow-[0_0_15px_rgba(239,63,77,0.4)] hover:-translate-y-1 transition-all">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            RESUME
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 font-poppins text-lg text-gray-300 font-light tracking-wide">
          <div className="flex flex-col gap-5 flex-1">
            {col1.map((skill, index) => (
              <motion.div
                whileHover={{ x: 8, color: "#ffffff" }}
                key={`col1-${index}`}
                className="flex items-center gap-4 cursor-default transition-colors whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-[#EF3F4D] shadow-[0_0_8px_rgba(239,63,77,0.6)] flex-shrink-0"></div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-5 flex-1">
            {col2.map((skill, index) => (
              <motion.div
                whileHover={{ x: 8, color: "#ffffff" }}
                key={`col2-${index}`}
                className="flex items-center gap-4 cursor-default transition-colors whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-[#EF3F4D] shadow-[0_0_8px_rgba(239,63,77,0.6)] flex-shrink-0"></div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, rotate: -2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="flex-1 w-full flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <div className="w-full max-w-[420px] aspect-[3/4] relative overflow-hidden shadow-[0_0_40px_rgba(239,63,77,0.15)] border border-gray-800 bg-[#11244e] group cursor-pointer">
          <Image
            src="/assets/skill-image.png"
            alt="Developer Sketch"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3a] via-[#0b1c3a]/20 to-transparent opacity-90 pointer-events-none group-hover:opacity-60 transition-opacity duration-700"></div>
        </div>
      </motion.div>
    </section>
  );
}
