import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardContent = ({
  activeOption,
  handleOptionClick,
  openDashboard,
  darkMode,
  setDarkMode,
  toggleDashboard,
  isLargeScreen,
}) => {
  const [selectedOptionText, setSelectedOptionText] = useState("Dashboard");

  const handleOptionClickAndUpdateText = (option, optionText) => {
    handleOptionClick(option);
    setSelectedOptionText(optionText);
  };

  return (
    <div>
      <div className=" flex w-40 gap-4 relative items-center bg-white select-none myfont p-2 px-8 justify-between">
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
        } flex flex-col gap-8 justify-start pl-6 border-l-2 border-r-2 border-b-8 pt-8 pb-4 myfont text-xl text-white  items-center tracking-wide`}
      >
        <div className="flex flex-col justify-start w-full gap-1">
          <Link
            to="/"
            onClick={() => handleOptionClickAndUpdateText("Profile", "Profile")}
          >
            <p
              className={
                activeOption === "Profile"
                  ? "dash-hover active animate-pulse"
                  : "dash-hover"
              }
            >
              Profile
            </p>
          </Link>
          <Link
            to="/about"
            onClick={() => handleOptionClickAndUpdateText("About", "About")}
          >
            <p
              className={
                activeOption === "About"
                  ? "dash-hover active animate-pulse"
                  : "dash-hover"
              }
            >
              About
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
                  ? "dash-hover active animate-pulse"
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
                  ? "dash-hover active animate-pulse"
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
                  ? "dash-hover active animate-pulse"
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
                  ? "dash-hover active animate-pulse"
                  : "dash-hover"
              }
            >
              Contact
            </p>
          </Link>
        </div>
        <div className=" text-lg flex flex-col justify-start items-center gap-4 w-full">
          <p
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center w-full gap-4 cursor-pointer "
          >
            <span
              className={`h-4 w-4 rounded-full outline outline-2 ${
                darkMode ? null : "bg-[#D9F24F]"
              }`}
            ></span>
            Light Mode
          </p>
          <p
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center w-full gap-4 cursor-pointer "
          >
            <span
              className={`h-4 w-4 rounded-full outline outline-1 ${
                darkMode ? "bg-[#D9F24F]" : null
              }`}
            ></span>
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
