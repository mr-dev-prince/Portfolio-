import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { TbMoonStars } from "react-icons/tb";
import { LuSunDim } from "react-icons/lu";

const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(ThemeState);

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
  };

  return (
    <button
      className="flex justify-center items-center text-sm text-center"
      onClick={toggleTheme}
    >
      <span
        className={`outline rounded-full group-hover:animate-spin flex justify-center items-center text-center p-0.5 z-50 ${
          theme === "dark" ? "bg-[#1f1f1f] text-[#dc143c]" : "bg-[#f2e8de] text-[#1e649a]"
        }`}
      >
        {theme === 'light' ? (
          <TbMoonStars color="#1e649a" size={24} />
        ) : (
          <LuSunDim color="#dc143c" size={24} />
        )}
      </span>

      <p
        className={`uppercase outline group outline-1 ${
          theme === "light"
            ? " text-[#1e649a]"
            : " text-[#dc143c]"
        }  py-1 -ml-1 rounded-r-full w-28 text-center `}
      >
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </p>
    </button>
  );
};

export default ToggleTheme;
