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
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between py-10 pr-8 lg:px-36">
      <div className="fixed lg:static">
        <button
          className="fivo cursor-grab text-5xl font-extrabold uppercase"
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
      <div className="fixed right-7 top-20 flex items-center gap-4 lg:static">
        <Dashboard />
        <button
          onClick={onSwitch}
          className="border border-gray-400 px-4 py-2 text-sm font-semibold text-white duration-500 hover:bg-gray-200 dark:hover:bg-blue-700"
        >
          v2
        </button>
      </div>
    </div>
  );
};
