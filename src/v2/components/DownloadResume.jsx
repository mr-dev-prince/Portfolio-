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
      <div className="w-full flex justify-between items-center">
        <p className="font-slabo text-4xl text-white">Are You Hiring ?</p>
        <Link
          to="mailto:pkcofficial24@gmail.com"
          className="bg-gray-600 text-gray-300 px-3 py-1 rounded-md
                     hover:scale-110 transition-transform duration-200
                     hover:bg-gray-800 hover:text-blue-500 cursor-pointer"
        >
          Hire Me
        </Link>
      </div>

      <div className="mt-6 flex justify-start items-start flex-col">
        <div ref={containerRef} className="w-32 h-32"></div>
        <p className="text-gray-400 text-lg mt-4 font-slabo">
          Bringing strong problem-solving skills, a passion for clean code, and
          just the right amount of caffeine. Whether it’s building from scratch
          or improving existing systems — I’m ready to deliver.
        </p>
        <a
          href={resume}
          download='prince@latest_resume.pdf'
          className="mt-5  bg-gray-700/50 text-white px-5 py-2 rounded-lg shadow-sm
                     hover:bg-blue-600 hover:shadow-md hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-2"
        >
          <FaCloudDownloadAlt />
          Download Resume
        </a>
        <p className="text-gray-500 text-xs mt-3 font-mono text-center">
          A quick PDF — no fuss, no fluff. Just my experience and skills in one
          neat package.
        </p>
      </div>
    </div>
  );
};

export default DownloadResume;
