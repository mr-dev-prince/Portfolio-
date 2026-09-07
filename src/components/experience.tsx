"use client";

import { FaChevronRight } from "react-icons/fa";
import { IExperience } from "../interfaces/components";
import Image from "next/image";
import { useState } from "react";

const ExperienceCard = ({ data }: { data: IExperience }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div 
        className="flex items-center justify-between gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
            <Image
              src={data.logo as any}
              alt={data.company}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-medium text-md">{data.company}</h3>
            <p className="text-white/60 text-xs font-light">{data.role}</p>
          </div>
        </div>
        <div className=" flex gap-5 items-center">
          <p className="text-white/50 text-xs font-light">{data.duration}</p>
          <FaChevronRight size={10} color="gray" className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <ul className="mt-4 space-y-2">
            {data.description.map((item, index) => (
              <li
                key={index}
                className="relative pl-6 text-white/60 text-sm font-light"
              >
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
