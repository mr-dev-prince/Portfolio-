import React from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";

const Home = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  return (
    <div className={`px-36 min-h-screen app ${theme}`}>
      <Hero />
      <AboutSection />
    </div>
  );
};

export default Home;
