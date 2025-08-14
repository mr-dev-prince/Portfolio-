import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      link: "mailto:pkcofficial24@gmail.com",
      text: "If you want to send me a virtual pigeon, email works best!",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/princechaurasia/",
      text: "If you want to talk jobs or collabs, LinkedIn is my playground.",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "https://www.instagram.com/dev_.prince",
      text: "If you want memes, vibes, or travel pics, hit me up on Insta!",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/mr-dev-prince",
      text: "If you want to peek at my code experiments, GitHub is the place.",
    },
    {
      icon: <FaXTwitter />,
      label: "Twitter",
      link: "https://x.com/shutup_prince",
      text: "If you want to chat about tech, trends, or just say hi, Twitter is where I hang out.",
    },
  ];

  return (
    <div className="min-h-screen mx-[25%] mt-28 flex flex-col gap-6">
      <p className="font-slabo text-white text-4xl">Contact Me.</p>
      <p className="text-2xl text-gray-400 font-slabo">
        Available everywhere humans communicate – let's talk about jobs,
        projects, or random ideas!
      </p>
      <div className="flex flex-col gap-8 mt-6 w-full">
        {contacts.map((contact, index) => (
          <Link
            key={index}
            to={contact.link}
            target="_blank"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full hover:bg-gray-600/50 duration-300 transition-all p-2 rounded-3xl"
          >
            <span className="text-4xl text-blue-400 h-24 w-24 flex justify-center items-center bg-gray-800 rounded-2xl ">
              {contact.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-white font-bold font-sans text-xl">
                {contact.label}
              </span>
              <span className="text-gray-300 mt-2 text-lg font-slabo ">
                {contact.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t-2 border-gray-600 border-dashed pt-6 mb-8">
        <p className="text-gray-400 font-slabo text-lg tracking-wide">
          Thanks for reaching out ! I'll reply faster than a hot reload after
          saving your code.
        </p>
      </div>
    </div>
  );
};

export default Contact;
