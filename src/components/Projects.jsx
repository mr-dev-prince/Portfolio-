"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen pt-20 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-start gap-4"
      >
        <div className="w-full aspect-[16/10] bg-[#f9f5ee] rounded-xl shadow-lg"></div>
        <p className="font-poppins text-lg text-gray-300 max-w-sm mt-2">
          Smart Expense Management
          <br />& Expense Splitting Application
        </p>
        <button className="bg-[#f9f5ee] text-[#EF3F4D] px-6 py-2 rounded-md font-poppins font-medium hover:bg-white transition-colors shadow-md mt-2">
          TAKE A LOOK
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1 relative flex flex-col items-center md:items-start"
      >
        <div className="absolute -left-20 top-10 hidden md:block w-32 h-32">
          <Image
            src="/assets/work-curve-arrow.svg"
            alt="arrow"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="font-caveat text-6xl md:text-7xl mb-12">SPLITO</h2>

        <div className="flex flex-col gap-3 font-poppins text-xl text-gray-300 font-light tracking-wide">
          <p>React</p>
          <p>TailwindCSS</p>
          <p>FastAPI</p>
        </div>
      </motion.div>
    </section>
  );
}
