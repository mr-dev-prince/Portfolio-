import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const DashboardContent = ({
  activeOption,
  handleOptionClick,
  openDashboard,
  toggleDashboard,
  isLargeScreen,
}) => {
  const [selectedOptionText, setSelectedOptionText] = useState("Dashboard");

  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const handleOptionClickAndUpdateText = (option, optionText) => {
    handleOptionClick(option);
    setSelectedOptionText(optionText);
  };

  return (
    <div className="group z-50">
      <div
        className={`w-40 cursor-grab gap-4 relative flex  items-center ${
          theme === "light"
            ? "bg-[#1f1f1f] text-[#F2E8DE] group-hover:bg-[#dc143c] duration-200"
            : "bg-[#F2E8DE] text-[#1f1f1f] group-hover:bg-[#D9F24F] duration-200"
        } justify-center fivo uppercase font-bold p-2`}
      >
        <p>{isLargeScreen ? "Dashboard" : selectedOptionText}</p>
        <p
          className="cursor-pointer w-7 text-center "
          onClick={toggleDashboard}
        >
          {openDashboard ? "-" : "+"}
        </p>
      </div>
      <div
        className={`bg-transparent w-40 ${
          openDashboard ? "absolute" : "hidden"
        } flex flex-col gap-8 justify-start pl-6 border-l-2 border-r-2 ${
          theme === "light"
            ? "border-[#1f1f1f] text-[#1f1f1f] group-hover:border-[#dc143c] duration-200"
            : "border-[#F2E8DE] text-[#F2E8DE] group-hover:border-[#D9F24F] duration-200"
        } border-b-8 pt-8 pb-4 fivo uppercase font-bold text-md   items-center `}
      >
        <div className="flex flex-col justify-start w-full gap-2">
          <Link
            to="/"
            onClick={() => handleOptionClickAndUpdateText("Profile", "Profile")}
          >
            <p
              className={
                activeOption === "Profile"
                  ? `dash-hover ${
                      theme === "light" ? "text-[#dc143c]" : "text-[#D9F24F]"
                    } animate-pulse`
                  : "dash-hover"
              }
            >
              Profile
            </p>
          </Link>
          <Link
            to="/experiences"
            onClick={() => handleOptionClickAndUpdateText("Experience", "Experience")}
          >
            <p
              className={
                activeOption === "Experience"
                  ? `dash-hover ${
                      theme === "light" ? "text-[#dc143c]" : "text-[#D9F24F]"
                    } animate-pulse`
                  : "dash-hover"
              }
            >
              Experiences
            </p>
          </Link>
          <Link
            to="/projects"
            onClick={() =>
              handleOptionClickAndUpdateText("Projects", "Projects")
            }
          >
            <p
              className={
                activeOption === "Projects"
                  ? `dash-hover ${
                      theme === "light" ? "text-[#dc143c]" : "text-[#D9F24F]"
                    } animate-pulse`
                  : "dash-hover"
              }
            >
              Projects
            </p>
          </Link>
          <Link
            to="/journey"
            onClick={() => handleOptionClickAndUpdateText("Journey", "Journey")}
          >
            <p
              className={
                activeOption === "Journey"
                  ? `dash-hover ${
                      theme === "light" ? "text-[#dc143c]" : "text-[#D9F24F]"
                    } animate-pulse`
                  : "dash-hover"
              }
            >
              Journey
            </p>
          </Link>
          <Link
            to="/resume"
            onClick={() => handleOptionClickAndUpdateText("Resume", "Resume")}
          >
            <p
              className={
                activeOption === "Resume"
                  ? `dash-hover ${
                      theme === "light" ? "text-[#dc143c]" : "text-[#D9F24F]"
                    } animate-pulse`
                  : "dash-hover"
              }
            >
              Resume
            </p>
          </Link>
          <Link
            to="/contact"
            onClick={() => handleOptionClickAndUpdateText("Contact", "Contact")}
          >
            <p
              className={
                activeOption === "Contact"
                  ? `dash-hover ${
                      theme === "light" ? "text-[#dc143c]" : "text-[#D9F24F]"
                    } animate-pulse`
                  : "dash-hover"
              }
            >
              Contact
            </p>
          </Link>
        </div>
        <div className="w-full -ml-5 text-center">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
