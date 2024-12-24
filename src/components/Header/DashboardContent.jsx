import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const DashboardContent = ({ openDashboard, toggleDashboard }) => {
  const [theme] = useRecoilState(ThemeState);

  const handleOptionClickAndUpdateText = (option) => {
    localStorage.setItem("selectedOption", option);
  };

  const getOptionClassName = (option) =>
    `dash-hover ${
      localStorage.getItem("selectedOption") === option
        ? theme === "dark"
          ? "text-[#dc143c] animate-pulse"
          : "text-[#1e649a] animate-pulse"
        : ""
    }`;

  return (
    <div className="group z-50">
      <div
        className={`w-40 cursor-grab gap-4 relative flex items-center ${
          theme === "dark"
            ? "bg-[#F2E8DE] text-[#1f1f1f] group-hover:bg-[#dc143c] duration-200"
            : "bg-[#1f1f1f] text-[#F2E8DE] group-hover:bg-[#1e649a] duration-200"
        } justify-center fivo uppercase font-bold p-2`}
      >
        <p>Dashboard</p>
        <p className="cursor-pointer w-7 text-center" onClick={toggleDashboard}>
          {openDashboard ? "-" : "+"}
        </p>
      </div>
      <div
        className={`bg-transparent w-40 ${
          openDashboard ? "absolute" : "hidden"
        } flex flex-col gap-8 justify-start pl-6 border-l-2 border-r-2 ${
          theme === "dark"
            ? "border-[#F2E8DE] text-[#F2E8DE] group-hover:border-[#dc143c] duration-200"
            : "border-[#1f1f1f] text-[#1f1f1f] group-hover:border-[#1e649a] duration-200"
        } border-b-8 pt-8 pb-4 fivo uppercase font-bold text-md items-center`}
      >
        <div className="flex flex-col justify-start w-full gap-2">
          {[
            { path: "/", label: "Profile" },
            { path: "/experiences", label: "Experiences" },
            { path: "/projects", label: "Projects" },
            { path: "/resume", label: "Resume" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={label}
              to={path}
              onClick={() => handleOptionClickAndUpdateText(label)}
            >
              <p className={getOptionClassName(label)}>{label}</p>
            </Link>
          ))}
        </div>
        <div className="w-full -ml-5 text-center">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
