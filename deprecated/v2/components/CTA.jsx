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
      <div className="mt-8 flex h-fit w-full items-center justify-start gap-4 font-slabo">
        <button
          onClick={openModal}
          className="flex h-12 items-center gap-2 rounded-lg bg-white px-5 text-black transition-colors duration-300 hover:bg-blue-700 hover:text-white"
        >
          <RiSendPlaneFill size={16} />
          Reach Out
        </button>

        <Link
          to={"https://github.com/mr-dev-prince"}
          target="_blank"
          className="flex h-12 w-12 items-center justify-center gap-2 rounded-lg bg-gray-800 text-gray-400 transition-colors duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaGithub size={20} />
        </Link>

        <Link
          to={"https://linkedin.com/in/princechaurasia"}
          target="_blank"
          className="flex h-12 w-12 items-center justify-center gap-2 rounded-lg bg-gray-800 text-gray-400 transition-colors duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaLinkedin size={20} />
        </Link>

        <Link
          to={"https://x.com/shutup_prince"}
          target="_blank"
          className="flex h-12 w-12 items-center justify-center gap-2 rounded-lg bg-gray-800 text-gray-400 transition-colors duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaXTwitter size={20} />
        </Link>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-1.5/4 relative rounded-lg border border-blue-500 bg-gray-900 p-6">
            <button
              onClick={closeModal}
              className="absolute -right-8 -top-8 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-xl text-gray-400 transition-colors duration-300 hover:text-white"
            >
              &times;
            </button>
            <div>
              <p className="font-slabo text-4xl text-orange-700">
                Let's Connect
              </p>
              <p className="mt-2 font-slabo text-gray-400">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out !
              </p>
              <div className="mt-6 flex w-full items-center justify-between rounded-lg bg-gray-800 p-3">
                <span className="font-mono text-white">{email}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
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
