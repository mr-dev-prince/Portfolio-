import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/name2.png";
import { RiMenu3Fill } from "react-icons/ri";
import Dashboard from "../components/Header/Dashboard";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const themeState = useRecoilState(ThemeState);

  const theme = themeState[0];

  return (
    <div className="fixed top-0 left-0 w-full py-10 z-50 flex justify-between items-center lg:px-36 pr-8">
      <div className="fixed lg:static">
        <Link
          className="cursor-grab fivo text-5xl font-extrabold uppercase"
          to={"/"}
        >
          <p
            className={`${theme === "light" ? "text-[#081B2A]" : "text-white"}`}
          >
            My Portfolio
            <span
              className={`${
                theme === "light" ? "text-[#1e649a]" : "text-[#DC143C]"
              }`}
            >
              .
            </span>
          </p>
        </Link>
      </div>
      <Link
        onClick={() => setMenuOpen(!menuOpen)}
        className=" outline outline-1 flex text-white lg:hidden p-2"
      >
        <RiMenu3Fill size={20} />
      </Link>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed lg:static right-7 top-20`}
      >
        <Dashboard />
      </div>
    </div>
  );
};
