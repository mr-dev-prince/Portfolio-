import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgPentagonRight } from "react-icons/cg";

const ShowTechDetails = ({ details }) => {
  const containerVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  console.log("details", details);

  return (
    <motion.div
      className="h-full w-full relative p-3 rounded-2xl fivo border"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <img
        src={details.image}
        className="absolute top-0 left-0 object-contain h-full w-full opacity-30 blur-md fivo"
        alt="image"
      />
      <div className="h-full w-full p-2 flex">
        <div className="w-[30%] flex flex-col justify-start">
          <div className="flex justify-center items-center space-y-2 flex-col w-fit">
            <motion.img
              src={details.image}
              className="h-24"
              alt=""
              variants={itemVariant}
            />
            <motion.p className="uppercase font-extrabold text-xl" variants={itemVariant}>
              {details.name}
            </motion.p>
          </div>
          <div className="flex flex-col w-full justify-start items-start uppercase mt-3">
            <p className="font-semibold">Level:</p>
            <motion.p className="font-medium mt-2" variants={itemVariant}>
              {details.experienceLevel}
            </motion.p>
          </div>
          <div className="flex flex-col w-full justify-start items-start uppercase mt-3">
            <p className="font-semibold">Projects:</p>
            <div className="font-medium mt-2 flex flex-col">
              {details.projects.map((i) => (
                <motion.div key={i.id} variants={itemVariant}>
                  <Link className="hover:ml-4 z-50 duration-300">{i.name}</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-[70%] p-1">
          <div className="h-[60%]">
            <p className="uppercase font-extrabold">Strong Hold Concepts:</p>
            <div className="font-medium mt-2 h-[50%]">
              {details.strongHold.map((i) => (
                <motion.div
                  key={i.id}
                  className="flex justify-start items-center mb-0.5"
                  variants={itemVariant}
                >
                  <CgPentagonRight size={24} />
                  <p className="text-lg">{i.topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-[40%] flex flex-col justify-end items-start mt-2">
            <p className="uppercase font-extrabold">Summary:</p>
            <div className="font-medium mt-1 flex flex-col">
              <motion.div variants={itemVariant}>
                <p className="hover:ml-4 z-50 duration-300">
                  {details.summary}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowTechDetails;
