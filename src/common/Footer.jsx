import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import reactIcon from "../assets/structure.png";
import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import { Link } from "react-router-dom";

const Footer = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const links = [
    {
      id: 1,
      label: "experiences",
      link: "/experiences",
    },
    {
      id: 2,
      label: "projects",
      link: "/projects",
    },
    {
      id: 1,
      label: "journey",
      link: "/journey",
    },
    {
      id: 1,
      label: "resume",
      link: "/resume",
    },
    {
      id: 1,
      label: "contact",
      link: "/contact",
    },
  ];
  return (
    <div
      className={`${
        theme === "light" ? " bg-[#f2e8de]" : " bg-[#1f1f1f] h-fit py-12"
      } px-24 pb-12 w-full justify-between items-center flex fivo`}
    >
      <div className={`${theme === "light" ? "" : "text-white"} fivo`}>
        <div className="uppercase text-3xl font-extrabold tracking-wide">
          <div className="flex gap-4 items-center">
            <div className="relative skew">
              <p
                className={`relative ${
                  theme === "light" ? "bgAnimaLight" : "bgAnimaDark"
                } px-4`}
              >
                Tech
              </p>
              <span
                className={`show absolute -top-3 -right-3 ${
                  theme === "light" ? "bg-[#F2E8DE]" : "bg-[#1f1f1f]"
                }  p-1.5 rounded-full`}
              >
                <img className="h-3 spin" src={reactIcon} alt="" />
              </span>
            </div>
            <p>savvy</p>
          </div>
          <p>mastering the</p>
          <p>
            coding realm<span className=" text-[#dc143c]">.</span>
          </p>
        </div>
      </div>
      <div
        className={`space-x-10 ${
          theme === "dark" ? " text-[#f2e8de]" : " text-[#1f1f1f]"
        } uppercase `}
      >
        {links.map((i) => (
          <Link
            className="hover:scale-105 duration-100 font-semibold"
            to={i.link}
          >
            {i.label}
          </Link>
        ))}
      </div>
      <div
        className={`space-x-10 ${
          theme === "dark" ? " text-[#f2e8de]" : " text-[#1f1f1f]"
        } uppercase `}
      >
        <Link
          target="blank"
          className="hover:font-semibold duration-200"
          to="mailto:pkcofficial24@gmail.com"
        >
          Mail
        </Link>
        <Link
          target="blank"
          className="hover:font-semibold duration-200"
          to="https://www.linkedin.com/in/princechaurasia/"
        >
          Linkedin
        </Link>
        <Link
          target="blank"
          className="hover:font-semibold duration-200"
          to="https://www.instagram.com/dev_.prince/"
        >
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default Footer;
