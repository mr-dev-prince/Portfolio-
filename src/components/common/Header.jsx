import { useState } from "react";
import logo from "../../Assets/name2.png";
import logo2 from "../../Assets/P.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [activeOption, setActiveOption] = useState("Profile");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  const [openDashboard, setOpenDashboard] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex justify-between px-8 items-center w-full fixed z-50">
      <div>
        <img className="h-16" src={logo2} alt="" />
      </div>
      <div className="">
        <img
          className=" h-24 backdrop:shadow-xl backdrop:shadow-white"
          src={logo}
          alt=""
        />
      </div>
      <div>
        <div
          onClick={() => setOpenDashboard(!openDashboard)}
          className=" flex w-40 gap-4 relative cursor-pointer items-center bg-white select-none myfont p-2 px-8 justify-between"
        >
          <p>Dashboard</p>
          <p>{openDashboard ? "-" : "+"}</p>
        </div>
        <div
          className={`bg-transparent w-40 ${
            openDashboard ? "absolute" : "hidden"
          } flex flex-col gap-8 justify-start pl-6 border-l-2 border-r-2 border-b-8 pt-8 pb-4 myfont text-xl text-white  items-center tracking-wide`}
        >
          <div className="flex flex-col justify-start w-full gap-1">
            <Link to="/" onClick={() => handleOptionClick("Profile")}>
              <p
                className={
                  activeOption === "Profile"
                    ? "dash-hover active"
                    : "dash-hover"
                }
              >
                Profile
              </p>
            </Link>
            <Link to="/about" onClick={() => handleOptionClick("About")}>
              <p
                className={
                  activeOption === "About" ? "dash-hover active" : "dash-hover"
                }
              >
                About
              </p>
            </Link>
            <Link to="/projects" onClick={() => handleOptionClick("Projects")}>
              <p
                className={
                  activeOption === "Projects"
                    ? "dash-hover active"
                    : "dash-hover"
                }
              >
                Projects
              </p>
            </Link>
            <Link to="/journey" onClick={() => handleOptionClick("Journey")}>
              <p
                className={
                  activeOption === "Journey"
                    ? "dash-hover active"
                    : "dash-hover"
                }
              >
                Journey
              </p>
            </Link>
            <Link to="/resume" onClick={() => handleOptionClick("Resume")}>
              <p
                className={
                  activeOption === "Resume" ? "dash-hover active" : "dash-hover"
                }
              >
                Resume
              </p>
            </Link>
            <Link to="/contact" onClick={() => handleOptionClick("Contact")}>
              <p
                className={
                  activeOption === "Contact"
                    ? "dash-hover active"
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
    </div>
  );
};
