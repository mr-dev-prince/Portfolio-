import React from "react";
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
      id: 3,
      label: "resume",
      link: "/resume",
    },
    {
      id: 4,
      label: "contact",
      link: "/contact",
    },
  ];
  return (
    <div
      className={`${
        theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f] h-fit py-5"
      }  py-12 w-full justify-center items-center flex fivo relative`}
    >
      <div
        className={`space-x-10 ${
          theme === "dark" ? " text-[#f2e8de]" : " text-[#1f1f1f]"
        } uppercase `}
      >
        {links.map((i) => (
          <Link
            key={i.id}
            className="hover:scale-105 duration-100 font-semibold"
            to={i.link}
          >
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
