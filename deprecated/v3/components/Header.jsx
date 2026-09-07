import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-center">
      <nav className="bg-[#f9f5ee] text-[#0b1c3a] px-12 md:px-24 py-3 rounded-b-[2.5rem] flex gap-8 md:gap-16 text-sm font-medium tracking-widest shadow-xl">
        <Link href="#intro" className="hover:text-red-500 transition-colors">
          INTRO
        </Link>
        <Link href="#work" className="hover:text-red-500 transition-colors">
          WORK
        </Link>
        <Link
          href="#experience"
          className="hover:text-red-500 transition-colors"
        >
          EXPERIENCE
        </Link>
        <Link href="#skills" className="hover:text-red-500 transition-colors">
          SKILLS
        </Link>
        <Link href="#contact" className="hover:text-red-500 transition-colors">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
