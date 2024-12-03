import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import SlidingTextSection from "../components/Home/SlidingTextSection";
import ActivitySection from "../components/Home/ActivitySection";
import SlidingTechSection from "../components/Home/SlidingTechSection";

const Home = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  return (
    <div
      className={`min-h-screen fivo app ${
        theme === "light" ? "light-mode-bg-gradient" : "dark-mode-bg-gradient"
      }`}
    >
      <Hero />
      <AboutSection />
      <SlidingTextSection />
      <SlidingTechSection />
      <ActivitySection />
    </div>
  );
};
export default Home;
