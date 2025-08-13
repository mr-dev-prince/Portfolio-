import homeIcon from "../assets/home.json";
import homeIconBlue from "../assets/home-blue.json";
import workIcon from "../assets/work.json";
import workIconBlue from "../assets/work-blue.json";
import blogIcon from "../assets/blogs.json";
import blogIconBlue from "../assets/blog-blue.json";
import contactIcon from "../assets/contact.json";
import contactIconBlue from "../assets/contact-blue.json";
import aboutIcon from "../assets/about.json";
import aboutIconBlue from "../assets/about-blue.json";
import NavButton from "../components/NavButton";
import experienceIcon from "../assets/experience.json";
import experienceIconBlue from "../assets/experience-blue.json";

const icons = [
  {
    id: 1,
    icon: homeIcon,
    iconBlue: homeIconBlue,
    text: "home",
    href: ".",
  },
  {
    id: 2,
    icon: aboutIcon,
    iconBlue: aboutIconBlue,
    text: "about",
    href: "about",
  },
  {
    id: 3,
    icon: workIcon,
    iconBlue: workIconBlue,
    text: "work",
    href: "work",
  },
  {
    id: 6,
    icon: experienceIcon,
    iconBlue: experienceIconBlue,
    text: "experience",
    href: "experience",
  },
  {
    id: 4,
    icon: blogIcon,
    iconBlue: blogIconBlue,
    text: "blog",
    href: "blogs",
  },
  {
    id: 5,
    icon: contactIcon,
    iconBlue: contactIconBlue,
    text: "contact",
    href: "contact",
  },
];

const Navbar = ({ onSwitch }) => {
  return (
    <nav className=" fixed top-[30%] rounded-lg left-12 bg-gray-600 hover:bg-gray-700 duration-200 transition-all w-[4%] h-fit shadow-md z-50 flex flex-col gap-3 justify-start items-center py-2 px-2">
      {icons.map((i) => (
        <NavButton key={i.id} {...i} />
      ))}
      <div>
        <button
          onClick={onSwitch}
          className="text-white bg-blue-500/50 hover:bg-blue-500 duration-300 hover:scale-90 px-2 py-1 rounded-xl transition-colors"
        >
          v1
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
