import React from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import SlidingTextSection from "../components/Home/SlidingTextSection";
import TechStackSection from "../components/Home/TechStackSection";
import ActivitySection from "../components/Home/ActivitySection";

const Home = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  return (
    <div className={`min-h-screen fivo app ${theme}`}>
      <Hero />
      <AboutSection />
      <SlidingTextSection />
      <TechStackSection />
      <ActivitySection/>
    </div>
  );
};

export default Home;
