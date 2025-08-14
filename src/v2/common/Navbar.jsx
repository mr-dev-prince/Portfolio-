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
    <nav className="fixed top-8 z-[999] flex h-fit items-center justify-start gap-3 rounded-lg bg-gray-600 px-2 py-2 shadow-md transition-all duration-200 hover:bg-gray-700 md:left-12 md:top-[30%] md:w-[4%] md:flex-col">
      {icons.map((i) => (
        <NavButton key={i.id} {...i} />
      ))}
      <div>
        <button
          onClick={onSwitch}
          className="hidden rounded-xl bg-blue-500/50 px-2 py-1 text-white transition-colors duration-300 hover:scale-90 hover:bg-blue-500 md:block"
        >
          v1
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
