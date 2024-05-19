import React, { useState } from "react";
import logo from "../Assets/name2.png";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import Dashboard from "../components/Dashboard";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isAnimating, setAnimating] = useState(false);

  const handleLogoClick = (e) => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center lg:px-8 pr-8">
      <Link onClick={handleLogoClick} className="hidden lg:block">
        <div className="outline h-12 w-20 rounded-full"></div>
      </Link>
      <Link onClick={handleLogoClick} to={"/"}>
        <img
          className={`h-24 ${isAnimating ? "heartbeat":""} `}
          src={logo}
          alt=""
        />
      </Link>
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
