import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

const CTA = () => {
  return (
    <div className="font-slabo flex gap-4 items-center justify-start w-full h-fit mt-8">
      <button className="flex items-center gap-2 px-5 h-12 bg-white text-black hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <RiSendPlaneFill size={16} />
        Reach Out
      </button>
      <button className="flex items-center justify-center gap-2 h-12 w-12 bg-gray-800 text-gray-400 hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <FaGithub size={20} />
      </button>
      <button className="flex items-center justify-center gap-2 h-12 w-12 bg-gray-800 text-gray-400 hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <FaLinkedin size={20} />
      </button>
      <button className="flex items-center justify-center gap-2 h-12 w-12 bg-gray-800 text-gray-400 hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        <FaXTwitter size={20} />
      </button>
    </div>
  );
};

export default CTA;
