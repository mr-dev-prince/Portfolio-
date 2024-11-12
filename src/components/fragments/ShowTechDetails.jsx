import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShowTechDetails = ({ details }) => {
  const containerVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="h-full w-full relative p-3 rounded-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <img
        src={details.image}
        className="absolute top-0 left-0 object-contain h-full w-full opacity-30 blur-sm"
        alt=""
      />
      <div className="h-full w-full p-2 flex">
        <div className="w-[40%]">
          <div className="flex justify-start items-start space-y-2 flex-col">
            <motion.img
              src={details.image}
              className="h-24"
              alt=""
              variants={itemVariant}
            />
            <motion.p className="JetBrains uppercase" variants={itemVariant}>
              {details.name}
            </motion.p>
          </div>
          <div className="flex flex-col w-full justify-start items-start uppercase JetBrains mt-3">
            <p>Level:</p>
            <motion.p className="font-semibold mt-2" variants={itemVariant}>
              {details.experienceLevel}
            </motion.p>
          </div>
          <div className="flex flex-col w-full justify-start items-start uppercase JetBrains mt-3">
            <p>Projects:</p>
            <div className="font-semibold mt-2 flex flex-col">
              {details.projects.map((i) => (
                <motion.div key={i.id} variants={itemVariant}>
                  <Link className="hover:ml-4 z-50 duration-300">{i.name}</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="h-[50%]">
            <p>Strong Hold Topics:</p>
            <div className="font-semibold mt-2 flex flex-col overflow-hidden overflow-y-scroll">
              {details.strongHold.map((i) => (
                <motion.div key={i.id} variants={itemVariant}>
                  <Link className="hover:ml-4 z-50 duration-300">{i.name}</Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-[50%]">
            <p>Strong Hold Topics:</p>
            <div className="font-semibold mt-2 flex flex-col">
              {details.strongHold.map((i) => (
                <motion.div key={i.id} variants={itemVariant}>
                  <Link className="hover:ml-4 z-50 duration-300">
                    {i.topic}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowTechDetails;
