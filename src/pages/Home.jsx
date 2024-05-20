import React from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import Hero from "../components/Home/Hero";

const Home = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  return (
    <div className={`flex pl-36 min-h-screen app ${theme}`}>
      <Hero />
    </div>
  );
};

export default Home;
