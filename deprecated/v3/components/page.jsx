import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="relative w-full max-w-7xl mx-auto px-6 flex flex-col">
      <Header />
      <div id="intro">
        <Hero />
      </div>

      <div id="work">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact" className="pb-32">
        <Contact />
      </div>
    </main>
  );
}
