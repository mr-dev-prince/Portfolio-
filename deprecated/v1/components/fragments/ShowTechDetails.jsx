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

  return (
    <motion.div
      className="fivo relative h-full w-full rounded-xl border-2 p-3"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <img
        src={details.image}
        className="fivo absolute left-0 top-0 h-full w-full object-contain opacity-30 blur-md"
        alt="details"
      />
      <div className="flex h-full w-full p-2">
        <div className="flex w-[30%] flex-col justify-start">
          <div className="flex w-full flex-col items-start justify-center gap-3">
            <motion.img
              src={details.image}
              className="h-24"
              alt=""
              variants={itemVariant}
            />
            <motion.p
              className="text-xl font-extrabold uppercase"
              variants={itemVariant}
            >
              {details.name}
            </motion.p>
          </div>
          <div className="mt-3 flex w-full flex-col items-start justify-start uppercase">
            <p className="font-semibold">Level:</p>
            <motion.p className="mt-2 font-medium" variants={itemVariant}>
              {details.experienceLevel}
            </motion.p>
          </div>
        </div>
        <div className="grid h-full w-[70%] grid-cols-2 p-1">
          <div>
            <p className="text-xl font-semibold uppercase">
              Concepts I am good at
            </p>
            <div className="mt-2 h-[50%] font-medium">
              {details?.strongHold?.map((i) => (
                <motion.div
                  key={i.id}
                  className="mb-0.5 flex items-center justify-start"
                  variants={itemVariant}
                >
                  <p className="text-lg font-medium">{i.topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-[60%]">
            <p className="text-xl font-semibold uppercase">
              Concepts I learning
            </p>
            <div className="mt-2 h-[50%] font-medium">
              {details?.learning?.map((i) => (
                <motion.div
                  key={i.id}
                  className="mb-0.5 flex items-center justify-start"
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
