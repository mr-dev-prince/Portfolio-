import React from "react";
import { ThemeState } from "../../context/atoms/themeState";
import { useRecoilState } from "recoil";


const ActivitySection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const color = theme === "light" ? "1e649a" : "dc143c";

  return (
    <div className="h-screen w-full flex justify-between px-36 fivo py-10">
      <div />
      <div className="flex flex-col justify-center items-center px-10 h-full w-[60%] p-3">
        <div className="w-full h-[46%] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-[30%]">
            <img
              src={`https://ghchart.rshah.org/${color}/mr-dev-prince`}
              alt="GitHub Contributions Graph"
              className="w-full h-full object-contain scale-125 z-50"
            />
          </div>
        </div>
        <div className={`w-full h-[50%]`}>
          <div className="flex flex-col h-full text-left items-start text-xl">
            <div className={`text-left font-bold tracking-wide space-y-4 `}>
              <p
                className={`${
                  theme === "dark" ? "text-[#dc143c]" : "text-[#1e649a]"
                }`}
              >
                03
              </p>
              <p className={`text-3xl fivo uppercase`}>Activity</p>
            </div>
            <div>
              <p className="font-semibold text-justify">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies that empower me to build robust
                and dynamic applications from the ground up. Here's a glimpse
                into the tools and frameworks I leverage to bring ideas to life.
                <span
                  className={`underline ${
                    theme === "dark"
                      ? "hover:bg-[#dc143c] hover:text-[#1f1f1f] underline-offset-4 cursor-pointer px-2 transition-colors duration-200"
                      : "hover:bg-[#1e649a] hover:text-[#1f1f1f] underline-offset-4 cursor-pointer px-2 transition-colors duration-200 "
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
