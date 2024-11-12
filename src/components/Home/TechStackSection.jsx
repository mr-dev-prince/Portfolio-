import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../context/atoms/themeState";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import py from "../../assets/py.png";
import cpp from "../../assets/cpp.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import tailwind from "../../assets/tailwind.png";
import recoil from "../../assets/recoil.svg";
import radix from "../../assets/radix.svg";
import mongo from "../../assets/mongo.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import prisma from "../../assets/prisma.png";
import github from "../../assets/github.png";
import zustand from "../../assets/zustand.png";
import docker from "../../assets/docker.png";
import { myTechStack } from "../../constants/tech";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];

  const [details, setDetails] = useState({});

  console.log("details", details);

  const isEven = (num) => {
    if (num % 2 === 0) return true;
    return false;
  };

  return (
    <div className={`px-36 h-screen overflow-hidden w-full gap-12 flex`}>
      <div className="flex h-full w-[50%] justify-between flex-col items-center px-4 pb-12">
        <div className={`w-full h-[400px] flex justify-center items-start`}>
          <div className="flex flex-col text-left justify-center items-start">
            <div className={`text-left font-bold tracking-wide space-y-4 `}>
              <p
                className={`${
                  theme === "light" ? "text-[#dc143c]" : "text-[#c5dc4a]"
                }`}
              >
                02
              </p>
              <p className={`text-3xl fivo uppercase`}>
                My <br /> Tech stack
              </p>
            </div>
            <div>
              <p className="JetBrains font-semibold text-justify">
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
        <div />
      </div>
      <div
        className={`w-[50%] border-white h-full flex justify-between flex-col items-end`}
      >
        <div
          className={`h-[60%] w-full rounded-xl grid grid-cols-4 grid-rows-3 gap-5 overflow-hidden`}
        >
          {myTechStack.map((tech, idx) => (
            <Link
              onClick={() => {
                setDetails(tech);
              }}
              key={tech.id}
              className={`bg-[#52525242] w-full p-3 backdrop-blur-xl hover:scale-105 duration-300 z-50`}
            >
              <img
                src={tech.image}
                className="h-full w-full object-contain "
                alt="react"
              />
            </Link>
          ))}
        </div>
        <div className="h-[40%] w-full">
          {Object.keys(details).length !== 0 && (
            <div className="h-full w-full relative p-3 rounded-2xl border ">
              <img
                src={details.image}
                className="absolute top-0 left-0 object-contain h-full w-full opacity-30 blur-sm"
                alt=""
              />
              <div className="h-full w-full p-2 flex">
                <div className="w-[40%]">
                  <div className="flex justify-start items-start space-y-2 flex-col">
                    <img src={details.image} className="h-24" alt="" />
                    <p className="JetBrains uppercase">{details.name}</p>
                  </div>
                  <div className="flex flex-col w-full justify-start items-start uppercase JetBrains mt-3">
                    <p>Level:</p>
                    <p className="font-semibold mt-2">
                      {details.experienceLevel}
                    </p>
                  </div>
                  <div className="flex flex-col w-full justify-start items-start uppercase JetBrains mt-3">
                    <p>Projects:</p>
                    <div className="font-semibold mt-2 flex flex-col">
                      {details.projects.map((i) => (
                        <Link className="hover:ml-4 z-50 duration-300">
                          {i.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="h-[50%]">
                    <p>Strong Hold Topics:</p>
                    <div className="font-semibold mt-2 flex flex-col overflow-hidden overflow-y-scroll">
                      {details.strongHold.map((i) => (
                        <>
                          <Link className="hover:ml-4 z-50 duration-300">
                            {i.topic}
                          </Link>
                          <Link className="hover:ml-4 z-50 duration-300">
                            {i.topic}
                          </Link>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="h-[50%]">
                    <p>Strong Hold Topics:</p>
                    <div className="font-semibold mt-2 flex flex-col">
                      {details.strongHold.map((i) => (
                        <Link className="hover:ml-4 z-50 duration-300">
                          {i.topic}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ShowTechDetails = ({ detail }) => {
  return <div></div>;
};

export default TechStackSection;
