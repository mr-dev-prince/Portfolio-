import React from "react";
import { ThemeState } from "../../context/atoms/themeState";
import { useRecoilState } from "recoil";
import { assets } from "../../constants/images";
import { links } from "../../constants/links";

const ActivitySection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const color = theme === "light" ? "111" : "000";

  return (
    <div className="h-screen w-full flex px-36 fivo">
      <div className="w-[50%] h-full flex flex-col">
        <div className="border p-2 rounded-lg flex flex-col justify-center items-center relative px-5">
          <p className="font-extrabold text-xl mt-1 uppercase">
            Github Heat-Map
          </p>
          <img
            src={`https://ghchart.rshah.org/${color}/mr-dev-prince`}
            alt="GitHub Contributions Graph"
            className="h-52 object-contain z-50"
          />
          
        </div>
        <div className="flex flex-col justify-center items-center h-[70%] w-full">
          <p className="font-semibold text-2xl uppercase">
            Activity Tracking Board
          </p>
        </div>
      </div>
      <div className="w-[50%] flex px-10">
        <div className={`w-full h-[400px] flex justify-center items-start`}>
          <div className="flex flex-col text-left justify-center items-start">
            <div className={`text-left font-bold tracking-wide space-y-4 `}>
              <p
                className={`${
                  theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
                }`}
              >
                03
              </p>
              <p className={`text-3xl fivo uppercase`}>
                My <br /> Activity
              </p>
            </div>
            <div>
              <p className="font-semibold text-justify text-lg">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies that empower me to build robust
                and dynamic applications from the ground up. Here's a glimpse
                into the tools and frameworks I leverage to bring ideas to life.
                <span
                  className={`underline ${
                    theme === "light"
                      ? ""
                      : "hover:bg-[#c5dc4a] hover:text-[#1f1f1f] underline-offset-4 cursor-pointer px-2 transition-colors duration-200 "
                  }`}
                >
                  explore more
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
