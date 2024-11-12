import React from "react";
import { ThemeState } from "../../context/atoms/themeState";
import { useRecoilState } from "recoil";

const ActivitySection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const color = theme === "light" ? "dc143c" : "c5dc4a";

  return (
    <div>
      <img
        src={`https://ghchart.rshah.org/${color}/mr-dev-prince`}
        alt="GitHub Contributions Graph"
        className="h-52"
      />
    </div>
  );
};

export default ActivitySection;
