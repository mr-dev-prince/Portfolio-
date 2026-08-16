import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../context/atoms/themeState";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaLocationPin } from "react-icons/fa6";
import { BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import ScrollButton from "../components/fragments/ScrollButton";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const [theme] = useRecoilState(ThemeState);

  const bgColor = theme === "light" ? "bg-[#FFFFE4]" : "bg-[#1f1f1f]";
  const textColor = theme === "light" ? "text-black" : "text-white";
  const accentBgColor = theme === "light" ? "bg-[#1e649a]" : "bg-[#dc143c]";

  const titleRef = useRef(null);

  const headerRef = useRef(null);
  const summaryRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const eduRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

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
  }, []);

  return (
    <div
      className={`${bgColor} ${textColor} fivo flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <div className="relative flex h-screen w-full items-center justify-center">
        <p
          ref={titleRef}
          className="text-8xl font-extrabold uppercase tracking-wide"
        >
          <span>
            {"Resume".split("").map((char, index) => (
              <span key={`resume-${index}`} className="inline-block">
                {char}
              </span>
            ))}
          </span>
        </p>
        <ScrollButton />
      </div>
      <div
        className={`relative mb-24 mt-12 flex h-fit w-[50%] flex-col items-center justify-center rounded-xl border border-gray-400 bg-slate-500/20 p-4 py-10 text-justify font-medium shadow-lg backdrop-blur-lg ${
          theme === "light" ? "shadow-[#1e649a]" : "shadow-[#dc143c]"
        } `}
      >
        <div
          ref={headerRef}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <h1 className="fivo text-[4vh] font-semibold uppercase underline">
            Prince Chaurasia
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <span className="flex items-center justify-center gap-2">
              <FaLocationPin />
              <p className="text-[1.5vh]">Banglore, Karnataka, India</p>
            </span>
            <Link
              to={"mailto:pkcofficial24@gmail.com"}
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <GoMail />
              <p className="text-[1.5vh]">pkcofficial24@gmail.com</p>
            </Link>
            <Link
              to={"https://wa.link/5lk0rp"}
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <BiPhone />
              <p className="text-[1.5vh]">+91 8090900602</p>
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/princechaurasia/"}
              className="flex items-center justify-center gap-2"
            >
              <FaLinkedin />
              <p className="text-[1.5vh]">@princechaurasia</p>
            </Link>
          </div>
          <span className={`h-0.5 w-full ${accentBgColor}/50 -mt-4`} />
        </div>
        <div
          ref={summaryRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Summary</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <p className="description">
            Passionate Full Stack Developer and pre-final year student,
            currently interning at a product-based company, building scalable
            and impactful web applications.
          </p>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
        </div>
        <div
          ref={experienceRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Experience</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <span className="topic flex w-full items-center justify-between">
            <p>Software Developer Intern</p>
            <p>Aug 2024 - Present</p>
          </span>
          <span className="subTopic flex w-full items-center justify-between">
            <p>Aerchain</p>
            <p>Bengaluru, Karnataka</p>
          </span>
          <span className="mt-2 pl-3">
            <ul className="list-disc">
              <li className="description">
                Developed and deployed an end-to-end internal application using
                Appsmith, streamlining operational workflows.
              </li>
              <li className="description">
                Optimized database queries and managed data effectively using
                PostgreSQL, ensuring system reliability and performance.
              </li>
              <li className="description">
                Collaborated with cross-functional teams to address critical
                bugs in a fast-paced hotfix environment and contributed to
                product enhancements.
              </li>
            </ul>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
          <span className="topic flex w-full items-center justify-between">
            <p>Software Developer Intern</p>
            <p>Feb 2024 - Aug 2024</p>
          </span>
          <span className="subTopic flex w-full items-center justify-between">
            <p>Sherwa.Tech</p>
            <p>Indore, Madhya Pradesh</p>
          </span>
          <span className="mt-2 pl-3">
            <ul className="list-disc">
              <li className="description">
                Designed and developed high-performance, client-focused web
                applications using Next.js, React, Firebase, and MongoDB.
              </li>
              <li className="description">
                Delivered end-to-end solutions remotely, ensuring seamless
                functionality and user experience for diverse client
                requirements.
              </li>
              <li className="description">
                Optimized application performance and implemented scalable
                backend services to meet project deadlines and client
                expectations.
              </li>
            </ul>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
        </div>
        <div
          ref={projectsRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Projects</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <span className="mt-3 flex w-full items-center justify-between">
            <span className="topic flex items-center justify-center gap-3">
              <p>Journey Journals</p>
              <p className="text-base font-light">
                Next.Js, PostGres, TailwindCSS
              </p>
            </span>
            <span>
              <p>Jan 2023 - Sept 2023</p>
            </span>
          </span>
          <span className="mt-2 pl-3">
            <ul className="list-disc">
              <li className="description">
                Designed and developed Journey Journals, a social media platform
                enabling users to share and track their journeys interactively
                with milestones, badges, and live video hosting, using Next.js
                and TailwindCSS.
              </li>
              <li className="description">
                Implemented secure vault functionality for private content
                storage and integrated WebRTC and WebSockets for real-time live
                video streaming and updates.
              </li>
              <li className="description">
                Built a robust backend with PostgreSQL, ensuring scalability,
                data integrity, and seamless user experience.
              </li>
            </ul>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
          <span className="mt-3 flex w-full items-center justify-between">
            <span className="topic flex items-center justify-center gap-3">
              <p>Edu-Craft</p>
              <p className="text-base font-light">
                React, Redux, TailwindCSS, PostGres
              </p>
            </span>
            <span>
              <p>Sept 2023 - Dec 2023</p>
            </span>
          </span>
          <span className="mt-2 pl-3">
            <ul className="list-disc">
              <li className="description">
                Developed an EdTech platform for online courses using React.js,
                Redux, and TailwindCSS, providing a user-friendly interface for
                course management and learning.
              </li>
              <li className="description">
                Integrated dynamic course listings, user authentication, and
                personalized dashboards to enhance user experience and
                engagement.
              </li>
              <li className="description">
                Utilized state management with Redux to efficiently handle user
                data, course progress, and real-time updates across the
                platform.
              </li>
            </ul>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
        </div>
        <div
          ref={skillsRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Technical Skills</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <span className="">
            <ul className="flex flex-wrap gap-2">
              <li className="description">C++ |</li>
              <li className="description">Java |</li>
              <li className="description">HTML |</li>
              <li className="description">CSS |</li>
              <li className="description">JavaScript |</li>
              <li className="description">TypeScript |</li>
              <li className="description">Tailwind CSS |</li>
              <li className="description">PostGres SQL |</li>
              <li className="description">Mongo DB |</li>
              <li className="description">Express |</li>
              <li className="description">Node Js |</li>
              <li className="description">Redux |</li>
              <li className="description">Git & GitHub |</li>
              <li className="description">BitBucket |</li>
              <li className="description">Jira |</li>
              <li className="description">OS |</li>
              <li className="description">DBMS |</li>
              <li className="description">Computer Networks |</li>
              <li className="description">DS & Algo |</li>
            </ul>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
        </div>
        <div
          ref={achievementsRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Achievements</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <span className="mt-2 pl-3">
            <ul className="list-disc">
              <li className="description">
                Secured a spot in the Grand Finale of Smart India Hackathon
                2023, showcasing innovative problem-solving skills.
              </li>
              <li className="description">
                Achieved Runner-up position at Citronics'24 Hackathon, winning a
                cash prize of ₹10,000 for outstanding performance.
              </li>
            </ul>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
        </div>
        {/* eduRef */}
        <div
          ref={eduRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Education</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <span className="relative mt-2 w-full">
            <span className="topic">
              <p>Bachelor of Technology in Computer Science & Engineering</p>
            </span>
            <span className="description flex gap-2">
              <p>IES College of Technology |</p>
              <p>Madhya Pradesh |</p>
              <p>2026 |</p>
              <p className="font-medium">CGPA : 7.52</p>
            </span>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
          <span className="mt-2 w-full">
            <span className="topic">
              <p>Senior Secondary</p>
            </span>
            <span className="description flex gap-2">
              <p>Maharana Pratap Inter College |</p>
              <p>Uttar Pradesh |</p>
              <p>2022 |</p>
              <p className="font-medium">Score : 82 %</p>
            </span>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
          <span className="mt-2 w-full">
            <span className="topic">
              <p>Higher Secondary</p>
            </span>
            <span className="description flex gap-2">
              <p>P D Academy |</p>
              <p>Uttar Pradesh |</p>
              <p>2020 |</p>
              <p className="font-medium">Score : 95.2 %</p>
            </span>
          </span>
          <span className={`h-0.5 w-full ${accentBgColor}/50 mt-4`} />
        </div>
        <div
          ref={linksRef}
          className="mt-3 flex w-full flex-col items-start justify-start"
        >
          <h1 className="heading">Links</h1>
          <span className={`h-0.5 w-full ${accentBgColor}`} />
          <span className="w-full px-3">
            <ul className="flex w-full list-disc items-center justify-between">
              <Link className="description">Portfolio</Link>
              <Link className="description">Github</Link>
              <Link className="description">Leetcode</Link>
              <Link className="description">GeeksForGeeks</Link>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
