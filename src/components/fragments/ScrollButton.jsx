import React from "react";
import { assets } from "../../constants/images";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const ScrollButton = () => {
  const [theme] = useRecoilState(ThemeState);
  return (
    <div className="absolute bottom-0 left-0 flex justify-center items-center w-full h-24 py-4 z-50">
      <div
        className={`h-full border-2 ${
          theme === "light" ? "border-[#1e649a]" : "border-[#DC143C]"
        }  w-8 rounded-t-full rounded-b-full flex justify-center items-start pt-8 animateUpDown`}
      >
        <img src={assets.globe} alt="" className="h-7 w-7" />
      </div>
    </div>
  );
};

export default ScrollButton;
