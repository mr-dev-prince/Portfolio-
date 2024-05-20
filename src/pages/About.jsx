import React from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";

const About = () => {
  const themeState = useRecoilState(ThemeState);

  const theme = themeState[0];

  console.log("about theme----->", theme);
  return <div className={`${theme} min-h-screen`}>
    <p className=" bg-blue-900 dark:bg-red-600">princuuuu</p>
  </div>;
};

export default About;
