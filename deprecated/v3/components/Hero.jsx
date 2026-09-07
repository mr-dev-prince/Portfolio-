"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 pt-20">
      <motion.div
        initial={{ opacity: 0, rotate: -10, y: 50 }}
        animate={{ opacity: 1, rotate: -4, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-[400px] md:w-[600px] drop-shadow-2xl flex-shrink-0"
      >
        <div className="absolute top-4 left-64 md:-top-10 md:left-20 w-12 h-12 md:w-20 md:h-20 z-20">
          <Image
            src="/assets/pin.svg"
            alt="Pin"
            fill
            className="object-contain drop-shadow-md"
          />
        </div>

        <div className="relative w-full aspect-square">
          <Image
            src="/assets/hero-image.png"
            alt="Prince Chaurasia"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white w-full"
      >
        <p className="font-caveat text-2xl md:text-3xl tracking-wider text-gray-300 mb-2 md:mb-4">
          DRIVEN BY HUMAN, POWERED BY AI
        </p>
        <h1 className="font-caveat text-5xl md:text-8xl mb-4 md:mb-8 text-[#f9f5ee]">
          Prince Chaurasia
        </h1>
        <p className="font-poppins text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          Computer Science graduate &<br />
          Software Engineer
        </p>
      </motion.div>
    </section>
  );
}
