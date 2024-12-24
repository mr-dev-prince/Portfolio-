import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import DashboardContent from "./DashboardContent";
import BackgroundMusic from "../fragments/BackgroundMusic";

const Dashboard = () => {

  const [openDashboard, setOpenDashboard] = useState(false);
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


  const toggleDashboard = () => {
    setOpenDashboard((prevState) => !prevState);
  };

  return (
    <div>
      <Draggable>
        <div id="trigger-music">
          <DashboardContent
            openDashboard={openDashboard}
            toggleDashboard={toggleDashboard}
          />
          <BackgroundMusic playMusic={playMusic} />
        </div>
      </Draggable>
    </div>
  );
};

export default Dashboard;
