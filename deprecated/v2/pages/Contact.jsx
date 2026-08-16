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
      text: "If you want to chat about tech, trends, or just say hi.",
    },
  ];

  return (
    <div className="mx-[5%] mt-40 flex min-h-screen flex-col gap-6 md:mx-[25%] md:mt-28">
      <p className="font-slabo text-4xl text-white">Contact Me.</p>
      <p className="font-slabo text-2xl text-gray-400">
        Available everywhere humans communicate – let's talk about jobs,
        projects, or random ideas!
      </p>
      <div className="mt-6 flex w-full flex-col gap-8">
        {contacts.map((contact, index) => (
          <Link
            key={index}
            to={contact.link}
            target="_blank"
            className="flex w-full items-start gap-6 rounded-3xl p-2 transition-all duration-300 hover:bg-gray-600/50"
          >
            <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-800 text-4xl text-blue-400">
              {contact.icon}
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-xl font-bold text-white">
                {contact.label}
              </span>
              <span className="mt-2 font-slabo text-lg text-gray-300">
                {contact.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mb-8 border-t-2 border-dashed border-gray-600 pt-6">
        <p className="font-slabo text-lg tracking-wide text-gray-400">
          Thanks for reaching out ! I'll reply faster than a hot reload after
          saving your code.
        </p>
      </div>
    </div>
  );
};

export default Contact;
