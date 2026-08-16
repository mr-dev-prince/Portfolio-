'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="h-screen pt-64 pb-10 w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-4 items-center px-6">
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://www.linkedin.com/in/princechaurasia/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-sm tracking-widest transition-colors bg-[#f9f5ee]/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white hover:text-[#0b1c3a]"
          >
            LINKEDIN
          </a>
          <svg className="hidden md:block w-24 h-24 text-gray-500 mt-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M 90,90 Q 50,90 50,20" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M 50,20 L 40,30 M 50,20 L 60,30" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="hidden md:block"></div>

        <div className="flex flex-col items-center justify-center">
          <a
            href="https://www.instagram.com/littlebitprince"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-sm tracking-widest transition-colors bg-[#f9f5ee]/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white hover:text-[#0b1c3a]"
          >
            INSTAGRAM
          </a>
          <svg className="hidden md:block w-24 h-24 text-gray-500 mt-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M 10,90 Q 50,90 50,20" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M 50,20 L 40,30 M 50,20 L 60,30" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="hidden md:block"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center justify-center py-10 md:py-0 z-10"
        >
          <h2 className="font-caveat text-7xl md:text-8xl tracking-wider mb-2 text-white">
            LET&apos;S CONNECT
          </h2>
          <p className="font-poppins text-lg text-gray-400">
            Always open to discuss ideas.
          </p>
        </motion.div>

        <div className="hidden md:block"></div>

        <div className="flex flex-col items-center justify-center">
          <svg className="hidden md:block w-24 h-24 text-gray-500 mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M 90,10 Q 50,10 50,80" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M 50,80 L 40,70 M 50,80 L 60,70" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <a
            href="mailto:pkcofficial24@gmail.com"
            className="font-poppins text-sm tracking-widest transition-colors bg-[#f9f5ee]/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white hover:text-[#0b1c3a]"
          >
            EMAIL
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <svg className="hidden md:block w-24 h-24 text-gray-500 mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M 50,10 L 50,80" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M 50,80 L 40,70 M 50,80 L 60,70" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <a
            href="https://github.com/mr-dev-prince"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-sm tracking-widest bg-[#f9f5ee] text-[#0b1c3a] px-8 py-3 rounded-full shadow-[0_0_20px_rgba(239,63,77,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all font-semibold mt-4 md:mt-0"
          >
            GITHUB ACCOUNT
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <svg className="hidden md:block w-24 h-24 text-gray-500 mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M 10,10 Q 50,10 50,80" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M 50,80 L 40,70 M 50,80 L 60,70" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <a
            href="https://x.com/shutup_prince"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-sm tracking-widest transition-colors bg-[#f9f5ee]/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white hover:text-[#0b1c3a]"
          >
            TWITTER
          </a>
        </div>
      </div>
    </section>
  );
}
