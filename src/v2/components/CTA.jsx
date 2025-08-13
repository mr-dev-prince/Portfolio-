import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = "pkcofficial24@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="font-slabo flex gap-4 items-center justify-start w-full h-fit mt-8">
        <button
          onClick={openModal}
          className="flex items-center gap-2 px-5 h-12 bg-white text-black hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <RiSendPlaneFill size={16} />
          Reach Out
        </button>

        <Link
          to={"https://github.com/mr-dev-prince"}
          target="_blank"
          className="flex items-center justify-center gap-2 h-12 w-12 bg-gray-800 text-gray-400 hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <FaGithub size={20} />
        </Link>

        <Link
          to={"https://linkedin.com/in/princechaurasia"}
          target="_blank"
          className="flex items-center justify-center gap-2 h-12 w-12 bg-gray-800 text-gray-400 hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </Link>

        <Link
          to={"https://x.com/shutup_prince"}
          target="_blank"
          className="flex items-center justify-center gap-2 h-12 w-12 bg-gray-800 text-gray-400 hover:text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <FaXTwitter size={20} />
        </Link>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-1.5/4 relative border border-blue-500">
            <button
              onClick={closeModal}
              className="absolute -top-8 -right-8 bg-gray-600 h-8 w-8 text-gray-400 hover:text-white text-xl flex justify-center items-center rounded-full transition-colors duration-300"
            >
              &times;
            </button>
            <div>
              <p className="text-4xl font-slabo text-orange-700">
                Let's Connect
              </p>
              <p className="text-gray-400 mt-2 font-slabo">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out !
              </p>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg w-full mt-6">
                <span className="text-white font-mono">{email}</span>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <IoCopy />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="mt-3 font-slabo text-gray-400">
                Reading emails without coffee is like compiling without a
                compiler. :P
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
