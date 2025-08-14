import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import resumeIcon from "../assets/resume.json";
import { FaCloudDownloadAlt } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const DownloadResume = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: containerRef.current,
      animationData: resumeIcon,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => animation.destroy();
  }, []);

  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <p className="font-slabo text-4xl text-white">Are You Hiring ?</p>
        <Link
          to="mailto:pkcofficial24@gmail.com"
          className="cursor-pointer rounded-md bg-gray-600 px-3 py-1 text-gray-300 transition-transform duration-200 hover:scale-110 hover:bg-gray-800 hover:text-blue-500"
        >
          Hire Me
        </Link>
      </div>

      <div className="mt-6 flex flex-col items-start justify-start">
        <div ref={containerRef} className="h-32 w-32"></div>
        <p className="mt-4 font-slabo text-lg text-gray-400">
          Bringing strong problem-solving skills, a passion for clean code, and
          just the right amount of caffeine. Whether it’s building from scratch
          or improving existing systems — I’m ready to deliver.
        </p>
        <a
          href={resume}
          download="prince@latest_resume.pdf"
          className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-gray-700/50 px-5 py-2 text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:shadow-md"
        >
          <FaCloudDownloadAlt />
          Download Resume
        </a>
        <p className="mt-3 text-center font-mono text-xs text-gray-500">
          A quick PDF — no fuss, no fluff. Just my experience and skills in one
          neat package.
        </p>
      </div>
    </div>
  );
};

export default DownloadResume;
