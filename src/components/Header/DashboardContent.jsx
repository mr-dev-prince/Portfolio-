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
        className={`relative flex w-40 cursor-grab items-center gap-4 ${
          theme === "dark"
            ? "bg-[#F2E8DE] text-[#1f1f1f] duration-200 group-hover:bg-[#dc143c]"
            : "bg-[#1f1f1f] text-[#F2E8DE] duration-200 group-hover:bg-[#1e649a]"
        } fivo justify-center p-2 font-bold uppercase`}
      >
        <p>Dashboard</p>
        <p className="w-7 cursor-pointer text-center" onClick={toggleDashboard}>
          {openDashboard ? "-" : "+"}
        </p>
      </div>
      <div
        className={`w-40 bg-transparent ${
          openDashboard ? "absolute" : "hidden"
        } flex flex-col justify-start gap-8 border-l-2 border-r-2 pl-6 ${
          theme === "dark"
            ? "border-[#F2E8DE] text-[#F2E8DE] duration-200 group-hover:border-[#dc143c]"
            : "border-[#1f1f1f] text-[#1f1f1f] duration-200 group-hover:border-[#1e649a]"
        } fivo text-md items-center border-b-8 pb-4 pt-8 font-bold uppercase`}
      >
        <div className="flex w-full flex-col justify-start gap-2">
          {[
            { path: ".", label: "Profile" },
            { path: "experiences", label: "Experiences" },
            { path: "projects", label: "Projects" },
            { path: "resume", label: "Resume" },
            { path: "contact", label: "Contact" },
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
        <div className="-ml-5 w-full text-center">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
