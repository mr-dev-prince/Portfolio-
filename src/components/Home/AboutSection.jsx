import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { Link } from "react-router-dom";
import me from "../../assets/me.jpeg";
import CardComponent from "../fragments/CardComponent";

const AboutSection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const [frontCard, setFrontCard] = useState(null);

  const bringToFront = (cardTitle) => {
    setFrontCard(cardTitle);
  };
  return (
    <div className="fivo h-screen min-h-screen w-full max-w-full px-36">
      <div className="flex h-full w-full">
        <div className="text-md flex h-full w-[50%] items-end justify-center">
          <div className="flex flex-col gap-10">
            <div className="grid gap-3">
              <p
                className={`${
                  theme === "dark" ? "text-[#dc143c]" : "text-[#1e649a]"
                } font-bold tracking-widest`}
              >
                01
              </p>
              <p className={`fivo text-3xl font-bold uppercase tracking-wide`}>
                About Me
              </p>
            </div>
            <div className="grid w-[90%] gap-4 text-justify text-base font-medium tracking-wide">
              <p>
                Hi, I'm{" "}
                <span
                  className={`${
                    theme === "dark" ? "text-[#dc143c]" : "text-[#1e649a]"
                  } font-extrabold uppercase tracking-widest`}
                >
                  Prince Chaurasia
                </span>
                , a pre-final year student pursuing Bachelor of Technology in
                Computer Science with a fervent passion for web development.
                Equipped with proficiency in C++, JavaScript, and Python, I
                thrive at the intersection of creativity and functionality.{" "}
                <span
                  className={`${
                    theme === "dark"
                      ? "font-medium text-[#dc143c]"
                      : "text-[#1e649a]"
                  }`}
                >
                  My toolkit includes Next.js, React.js, Express, and MongoDB
                </span>
                , enabling me to craft robust, dynamic web solutions.
              </p>
              <p>
                Driven by precision and innovation, I am adept with essential
                tools like Git, GitHub, and Docker, ensuring streamlined
                development and collaboration. Currently honing my skills as a
                Fullstack Developer, I am committed to transforming ideas into
                seamless digital experiences.
              </p>
              <p>Let's innovate together.</p>
            </div>
            <Link
              to={"/projects"}
              className={` ${
                theme === "dark"
                  ? "bg-[#dc143c] text-white"
                  : "bg-[#1e649a] text-[#1f1f1f]"
              } w-fit font-bold`}
            >
              <button className="btn-23 text-white">
                <span className="text">Explore my work</span>
                <span className={`marquee text-[#1f1f1f]`}>
                  Explore my work
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-[50%]">
          <div className="relative flex h-full w-full items-center justify-center">
            <CardComponent
              className={` ${frontCard === "me" ? "z-50" : "z-40"}`}
              onMouseDown={() => bringToFront("me")}
              src={me}
              title="me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
