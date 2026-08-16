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
      className="flex items-center justify-center text-center text-sm"
      onClick={toggleTheme}
    >
      <span
        className={`z-50 flex items-center justify-center rounded-full p-0.5 text-center outline group-hover:animate-spin ${
          theme === "dark"
            ? "bg-[#1f1f1f] text-[#dc143c]"
            : "bg-[#f2e8de] text-[#1e649a]"
        }`}
      >
        {theme === "light" ? (
          <TbMoonStars color="#1e649a" size={24} />
        ) : (
          <LuSunDim color="#dc143c" size={24} />
        )}
      </span>

      <p
        className={`group uppercase outline outline-1 ${
          theme === "light" ? "text-[#1e649a]" : "text-[#dc143c]"
        } -ml-2 w-28 rounded-r-full py-1 text-center`}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </p>
    </button>
  );
};

export default ToggleTheme;
