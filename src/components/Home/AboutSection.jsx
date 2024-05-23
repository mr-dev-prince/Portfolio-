import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import { Link } from "react-router-dom";
import me from "../../Assets/me.jpeg";
import me2 from "../../Assets/me2.jpg";
import CardComponent from "../fragments/CardComponent";

const AboutSection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const [frontCard, setFrontCard] = useState(null);

  const bringToFront = (cardTitle) => {
    setFrontCard(cardTitle);
  };
  return (
    <div className="min-h-screen w-full max-w-full px-36">
      <div className="w-full flex">
        <div className="w-[50%] h-[550px] flex flex-col gap-10 items-start justify-end text-md">
          <div className="grid gap-3">
            <p
              className={`${
                theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
              } font-bold tracking-widest `}
            >
              01
            </p>
            <p className={` text-3xl font-bold tracking-wide `}>About Me</p>
          </div>
          <div className="grid gap-4  tracking-wide w-[90%]">
            <p>
              I'm{" "}
              <span
                className={`${
                  theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
                } font-extrabold tracking-widest`}
              >
                Prince Chaurasia
              </span>
              , a sophomore pursuing a Bachelor of Technology in Computer
              Science with a fervent passion for web development. Equipped with
              proficiency in C++, JavaScript, and Python, I thrive at the
              intersection of creativity and functionality.
              <strong
                className={`${
                  theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
                }`}
              >
                {" "}
                My toolkit includes Next.js, React.js, Express, and MongoDB
              </strong>
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
              theme === "light"
                ? "bg-[#dc143c] text-white"
                : " bg-[#c5dc4a] text-[#1f1f1f]"
            } w-fit font-bold`}
          >
            <button className="btn-23">
              <span className="text">Explore my work</span>
              <span className={`marquee text-[#1f1f1f]`}>Explore my work</span>
            </button>
          </Link>
        </div>
        <div className="w-[50%] relative ">
          <div className=" relative">
            <CardComponent
              className={`absolute ${
                frontCard === "me" ? "z-50" : "z-40"
              } left-20 top-10`}
              onMouseDown={() => bringToFront("me")}
              src={me}
              title="me"
            />
            <CardComponent
              className={`absolute ${
                frontCard === "me2" ? "z-50" : "z-40"
              } left-64 top-32`}
              onMouseDown={() => bringToFront("me2")}
              src={me2}
              title="me2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
