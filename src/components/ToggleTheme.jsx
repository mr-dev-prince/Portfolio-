import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import { TbMoonStars } from "react-icons/tb";
import { LuSunDim } from "react-icons/lu";

const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(ThemeState);
  const [themeImg, setThemeImg] = useState();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setThemeImg(!themeImg);
  };

  return (
    <button
      className="flex justify-center items-center text-sm text-center"
      onClick={toggleTheme}
    >
      <span
        className={`outline rounded-full flex justify-center items-center text-center p-0.5 z-50 ${
          themeImg ? "bg-[#1f1f1f]" : "bg-[#f2e8de]"
        }`}
      >
        {themeImg ? (
          <TbMoonStars color="#c5dc4a" size={24} />
        ) : (
          <LuSunDim color="#dc143c" size={24} />
        )}
      </span>

      <p
        className={`uppercase ${
          themeImg ? "bg-[#f2e8de] text-[#1f1f1f]" : "bg-[#1f1f1f] text-[#f2e8de]"
        }  py-1 -ml-1 rounded-r-full w-28 text-center `}
      >
        {themeImg ? "Dark Mode" : "Light Mode"}
      </p>
    </button>
  );
};

export default ToggleTheme;
