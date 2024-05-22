import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState("Profile");
  const [openDashboard, setOpenDashboard] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth > 768;
      if (isLarge !== isLargeScreen) {
        window.location.reload(); // Reload window if screen size changes
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
          <div>
            <DashboardContent
              activeOption={activeOption}
              handleOptionClick={handleOptionClick}
              openDashboard={openDashboard}
              toggleDashboard={toggleDashboard}
              isLargeScreen={isLargeScreen}
            />
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
