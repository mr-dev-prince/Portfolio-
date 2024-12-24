import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import gsap from "gsap";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Contact = () => {
  const [theme] = useRecoilState(ThemeState);

  const bgColor = theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f]";
  const textColor = theme === "light" ? "text-black" : "text-white";

  const titleRef = useRef(null);
  const contactInfoRef = useRef([]);
  const socialIconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = titleRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      contactInfoRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.4,
            ease: "power3.out",
          }
        );
      });

      socialIconsRef.current.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            delay: index * 0.3 + 0.7,
            ease: "power3.out",
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${bgColor} ${textColor} h-fit px-36`}>
      <div className="h-screen flex flex-col justify-center items-center fivo">
        <div className="h-[90vh] flex justify-center items-center">
          <p
            ref={titleRef}
            className="text-8xl font-extrabold uppercase tracking-wide"
          >
            <span className="inline-block">
              {"Contact".split("").map((char, index) => (
                <span key={`contact-${index}`} className="inline-block">
                  {char}
                </span>
              ))}
            </span>
            <span className="inline-block ml-8">
              {"Me".split("").map((char, index) => (
                <span key={`me-${index}`} className="inline-block">
                  {char}
                </span>
              ))}
            </span>
          </p>
        </div>
        <div className="flex w-full h-[10vh] justify-between items-center p-5">
          <span
            ref={(el) => (contactInfoRef.current[0] = el)}
            className="flex justify-center items-center gap-4 opacity-0"
          >
            <MdOutlinePhoneInTalk size={32} />
            <p className="font-semibold text-xl">+91 8090900602</p>
          </span>
          <span
            ref={(el) => (contactInfoRef.current[1] = el)}
            className="flex justify-center items-center gap-4 opacity-0"
          >
            <IoIosMail size={32} />
            <p className="font-semibold text-xl">pkcofficial24@gmail.com</p>
          </span>
          <span className="flex overflow-hidden">
            <span
              ref={(el) => (socialIconsRef.current[0] = el)}
              className="mx-3 text-3xl hover:scale-110 transition-all duration-300 transform"
            >
              <FaLinkedin size={32} />
            </span>
            <span
              ref={(el) => (socialIconsRef.current[1] = el)}
              className="mx-3 text-3xl hover:scale-110 transition-all duration-300 transform"
            >
              <FaSquareInstagram size={32} />
            </span>
            <span
              ref={(el) => (socialIconsRef.current[2] = el)}
              className="mx-3 text-3xl hover:scale-110 transition-all duration-300 transform"
            >
              <FaSquareXTwitter size={32} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
