"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const experienceData = {
  sih: {
    company: "Smart India Hackathon",
    role: "Participant / Winner",
    date: "2022",
    details: [
      "Collaborated with a team to build a comprehensive software solution.",
      "Implemented key frontend features and ensured a seamless user experience.",
      "Won accolades for innovation and technical execution.",
    ],
  },
  aerchain: {
    company: "Aerchain",
    role: "Software Engineering Intern",
    date: "2023",
    details: [
      "Developed and maintained responsive web applications.",
      "Optimized rendering performance and reduced load times.",
      "Collaborated closely with designers and product managers.",
    ],
  },
  playarka_intern: {
    company: "Playarka",
    role: "Software Engineering Intern",
    date: "2023 - 2024",
    details: [
      "Assisted in the migration of legacy codebases to modern frameworks.",
      "Implemented new UI components and integrated RESTful APIs.",
      "Wrote unit tests to improve code reliability and maintainability.",
    ],
  },
  playarka_sde1: {
    company: "Playarka",
    role: "SDE-1",
    date: "2024 - Present",
    details: [
      "Leading the development of core product features.",
      "Mentoring junior developers and conducting code reviews.",
      "Architecting scalable frontend solutions using Next.js and Tailwind.",
    ],
  },
};

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto relative h-[600px] mt-10">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
          style={{
            left: "-20px",
            top: "20px",
            height: "calc(100% - 20px)",
            width: "calc(100% + 20px)",
          }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="white" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="100%"
            x2="0"
            y2="0"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="100%"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </svg>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={{
              left: "-20px",
              top: "20px",
              height: "calc(100% - 20px)",
              width: "calc(100% + 20px)",
            }}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 0,600 C 50,600 50,540 100,540 C 200,540 200,420 300,420 C 450,420 450,240 600,240 C 750,240 750,60 900,60 L 1000,60"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
          </svg>

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              left: "-20px",
              top: "20px",
              height: "calc(100% - 20px)",
              width: "calc(100% + 20px)",
            }}
          >
            <div className="absolute left-[10%] top-[90%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.5 }}
                onClick={() => setSelectedExperience(experienceData.sih)}
                className="w-4 h-4 bg-[#EF3F4D] rounded-full shadow-[0_0_10px_rgba(239,63,77,0.8)] cursor-pointer"
              />
            </div>
            <div className="absolute left-[30%] top-[70%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.5 }}
                onClick={() => setSelectedExperience(experienceData.aerchain)}
                className="w-4 h-4 bg-[#EF3F4D] rounded-full shadow-[0_0_10px_rgba(239,63,77,0.8)] cursor-pointer"
              />
            </div>
            <div className="absolute left-[60%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.5 }}
                onClick={() =>
                  setSelectedExperience(experienceData.playarka_intern)
                }
                className="w-4 h-4 bg-[#EF3F4D] rounded-full shadow-[0_0_10px_rgba(239,63,77,0.8)] cursor-pointer"
              />
            </div>
            <div className="absolute left-[90%] top-[10%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.5 }}
                onClick={() =>
                  setSelectedExperience(experienceData.playarka_sde1)
                }
                className="w-4 h-4 bg-[#EF3F4D] rounded-full shadow-[0_0_10px_rgba(239,63,77,0.8)] cursor-pointer"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-[10%] bottom-[13%] font-caveat text-4xl -translate-x-1/2"
            >
              SIH
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-[30%] top-[73%] flex flex-col items-center -translate-x-1/2"
            >
              <span className="font-caveat text-4xl">Aerchain</span>
              <span className="font-poppins text-sm tracking-widest text-gray-400">
                INTERN
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute left-[60%] bottom-[63%] flex flex-col items-center -translate-x-1/2"
            >
              <span className="font-caveat text-4xl">Playarka</span>
              <span className="font-poppins text-sm tracking-widest text-gray-400">
                INTERN
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="absolute left-[90%] top-[13%] flex flex-col items-center -translate-x-1/2"
            >
              <span className="font-caveat text-4xl">Playarka</span>
              <span className="font-poppins text-sm tracking-widest text-gray-400">
                SDE-1
              </span>
            </motion.div>
          </div>
        </motion.div>
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="absolute top-0 left-0 z-40 bg-[#11244e]/90 backdrop-blur-md border border-gray-700/50 p-6 rounded-2xl max-w-sm w-full shadow-2xl"
            >
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="font-caveat text-3xl text-[#EF3F4D] mb-1">
                {selectedExperience.company}
              </h3>
              <p className="font-poppins text-base font-semibold text-white mb-1">
                {selectedExperience.role}
              </p>
              <p className="font-poppins text-xs text-gray-400 mb-4">
                {selectedExperience.date}
              </p>

              <ul className="space-y-2">
                {selectedExperience.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-300 font-poppins text-xs leading-relaxed"
                  >
                    <span className="text-[#EF3F4D] mr-2 mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
