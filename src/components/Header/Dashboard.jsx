import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import DashboardContent from "./DashboardContent";
import BackgroundMusic from "../fragments/BackgroundMusic";

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState("Profile");
  const [openDashboard, setOpenDashboard] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [playMusic, setPlayMusic] = useState(false);

  const handleMouseEnter = () => {
    setPlayMusic(true);
  };

  useEffect(() => {
    const el = document.getElementById("trigger-music");
    if (el) {
      el.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth > 768;
      if (isLarge !== isLargeScreen) {
        window.location.reload();
      }
      setIsLargeScreen(isLarge);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (!isLargeScreen) {
      toggleDashboard();
    }
  };

  const toggleDashboard = () => {
    setOpenDashboard((prevState) => !prevState);
  };

  return (
    <div>
      {isLargeScreen ? (
        <Draggable>
          <div id="trigger-music">
            <DashboardContent
              activeOption={activeOption}
              handleOptionClick={handleOptionClick}
              openDashboard={openDashboard}
              toggleDashboard={toggleDashboard}
              isLargeScreen={isLargeScreen}
            />
            <BackgroundMusic playMusic={playMusic} />
          </div>
        </Draggable>
      ) : (
        <DashboardContent
          activeOption={activeOption}
          handleOptionClick={handleOptionClick}
          openDashboard={openDashboard}
          toggleDashboard={toggleDashboard}
          isLargeScreen={isLargeScreen}
        />
      )}
    </div>
  );
};

export default Dashboard;
