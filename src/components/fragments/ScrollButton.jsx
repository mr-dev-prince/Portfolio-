import React from "react";
import { assets } from "../../constants/images";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";

const ScrollButton = () => {
  const [theme] = useRecoilState(ThemeState);
  return (
    <div className="absolute bottom-0 left-0 z-50 flex h-24 w-full items-center justify-center py-4">
      <div
        className={`h-full border-2 ${
          theme === "light" ? "border-[#1e649a]" : "border-[#DC143C]"
        } animateUpDown flex w-8 items-start justify-center rounded-b-full rounded-t-full pt-8`}
      >
        <img src={assets.globe} alt="" className="h-7 w-7" />
      </div>
    </div>
  );
};

export default ScrollButton;
