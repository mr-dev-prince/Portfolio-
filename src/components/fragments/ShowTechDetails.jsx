import React from "react";
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

  console.log("details", details);

  return (
    <motion.div
      className="h-full w-full relative p-3 rounded-xl fivo border-2"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <img
        src={details.image}
        className="absolute top-0 left-0 object-contain h-full w-full opacity-30 blur-md fivo"
        alt="details"
      />
      <div className="h-full w-full p-2 flex">
        <div className="w-[30%] flex flex-col justify-start">
          <div className="flex justify-center items-start gap-3 flex-col w-full">
            <motion.img
              src={details.image}
              className="h-24"
              alt=""
              variants={itemVariant}
            />
            <motion.p
              className="uppercase font-extrabold text-xl"
              variants={itemVariant}
            >
              {details.name}
            </motion.p>
          </div>
          <div className="flex flex-col w-full justify-start items-start uppercase mt-3">
            <p className="font-semibold">Level:</p>
            <motion.p className="font-medium mt-2" variants={itemVariant}>
              {details.experienceLevel}
            </motion.p>
          </div>
        </div>
        <div className="h-full grid grid-cols-2 w-[70%] p-1">
          <div>
            <p className="uppercase font-semibold text-xl">
              Concepts I am good at
            </p>
            <div className="font-medium mt-2 h-[50%]">
              {details?.strongHold?.map((i) => (
                <motion.div
                  key={i.id}
                  className="flex justify-start items-center mb-0.5"
                  variants={itemVariant}
                >
                  <p className="text-lg font-medium">{i.topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-[60%]">
            <p className="uppercase font-semibold text-xl">
              Concepts I learning
            </p>
            <div className="font-medium mt-2 h-[50%]">
              {details?.learning?.map((i) => (
                <motion.div
                  key={i.id}
                  className="flex justify-start items-center mb-0.5"
                  variants={itemVariant}
                >
                  <p className="text-lg font-medium">{i.topic}</p>
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
