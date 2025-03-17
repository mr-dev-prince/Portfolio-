import React, { useState } from "react";
import Draggable from "react-draggable";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {

  const [openDashboard, setOpenDashboard] = useState(false);

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
        </div>
      </Draggable>
    </div>
  );
};

export default Dashboard;
