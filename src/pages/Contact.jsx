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
        },
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
          },
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
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${bgColor} ${textColor} h-fit px-36`}>
      <div className="fivo flex h-screen flex-col items-center justify-center">
        <div className="flex h-[90vh] items-center justify-center">
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
            <span className="ml-8 inline-block">
              {"Me".split("").map((char, index) => (
                <span key={`me-${index}`} className="inline-block">
                  {char}
                </span>
              ))}
            </span>
          </p>
        </div>
        <div className="flex h-[10vh] w-full items-center justify-between p-5">
          <span
            ref={(el) => (contactInfoRef.current[0] = el)}
            className="flex items-center justify-center gap-4 opacity-0"
          >
            <MdOutlinePhoneInTalk size={32} />
            <p className="text-xl font-semibold">+91 8090900602</p>
          </span>
          <span
            ref={(el) => (contactInfoRef.current[1] = el)}
            className="flex items-center justify-center gap-4 opacity-0"
          >
            <IoIosMail size={32} />
            <p className="text-xl font-semibold">pkcofficial24@gmail.com</p>
          </span>
          <span className="flex overflow-hidden">
            <span
              ref={(el) => (socialIconsRef.current[0] = el)}
              className="mx-3 transform text-3xl transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={32} />
            </span>
            <span
              ref={(el) => (socialIconsRef.current[1] = el)}
              className="mx-3 transform text-3xl transition-all duration-300 hover:scale-110"
            >
              <FaSquareInstagram size={32} />
            </span>
            <span
              ref={(el) => (socialIconsRef.current[2] = el)}
              className="mx-3 transform text-3xl transition-all duration-300 hover:scale-110"
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
