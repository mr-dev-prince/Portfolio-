import React from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";

const Footer = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  return (
    <div className={`${theme === "light" ? " bg-[#f2e8de]" : " bg-[#1f1f1f]"}`}>
      Footer
    </div>
  );
};

export default Footer;
