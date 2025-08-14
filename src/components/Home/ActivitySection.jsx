import React from "react";
import { ThemeState } from "../../context/atoms/themeState";
import { useRecoilState } from "recoil";

const ActivitySection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const color = theme === "light" ? "1e649a" : "dc143c";

  return (
    <div className="fivo flex h-screen w-full justify-between px-36 py-10">
      <div />
      <div className="flex h-full w-[60%] flex-col items-center justify-center p-3 px-10">
        <div className="flex h-[46%] w-full flex-col items-center justify-center">
          <div className="flex h-[30%] items-center justify-center">
            <img
              src={`https://ghchart.rshah.org/${color}/mr-dev-prince`}
              alt="GitHub Contributions Graph"
              className="z-50 h-full w-full scale-125 object-contain"
            />
          </div>
        </div>
        <div className={`h-[50%] w-full`}>
          <div className="flex h-full flex-col items-start text-left text-xl">
            <div className={`space-y-4 text-left font-bold tracking-wide`}>
              <p
                className={`${
                  theme === "dark" ? "text-[#dc143c]" : "text-[#1e649a]"
                }`}
              >
                03
              </p>
              <p className={`fivo text-3xl uppercase`}>Activity</p>
            </div>
            <div>
              <p className="text-justify font-semibold">
                In my journey as a full-stack web developer, I've mastered a
                diverse array of technologies that empower me to build robust
                and dynamic applications from the ground up. Here's a glimpse
                into the tools and frameworks I leverage to bring ideas to life.
                <span
                  className={`underline ${
                    theme === "dark"
                      ? "cursor-pointer px-2 underline-offset-4 transition-colors duration-200 hover:bg-[#dc143c] hover:text-[#1f1f1f]"
                      : "cursor-pointer px-2 underline-offset-4 transition-colors duration-200 hover:bg-[#1e649a] hover:text-[#1f1f1f]"
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
