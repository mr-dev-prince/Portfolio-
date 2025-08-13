import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Header/Dashboard";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";

export const Header = ({ onSwitch }) => {
  const [theme] = useRecoilState(ThemeState);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("selectedOption", "Profile");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full py-10 z-50 flex justify-between items-center lg:px-36 pr-8">
      <div className="fixed lg:static">
        <button
          className="cursor-grab fivo text-5xl font-extrabold uppercase"
          onClick={handleClick}
        >
          <p className={theme === "light" ? "text-[#081B2A]" : "text-white"}>
            My Portfolio
            <span
              className={
                theme === "light" ? "text-[#1e649a]" : "text-[#DC143C]"
              }
            >
              .
            </span>
          </p>
        </button>
      </div>
      <div className="flex items-center gap-4 fixed lg:static right-7 top-20">
        <Dashboard />
        <button
          onClick={onSwitch}
          className="px-4 py-2 text-sm font-semibold border border-gray-400 hover:bg-gray-200 dark:hover:bg-blue-700 duration-500 text-white"
        >
          v2
        </button>
      </div>
    </div>
  );
};
