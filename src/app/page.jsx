import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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
