import me from "../assets/me-ai.png";

const About = () => {
  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-2 font-slabo md:mt-28">
        <p className="text-4xl text-white">About Me.</p>
        <p className="mt-2 text-xl text-gray-400">Software Engineering</p>
        <p className="mt-2 font-slabo text-gray-400">
          Interned, debugged, survived… and so did the databases.
        </p>
      </div>
      <div className="mt-8">
        <img src={me} alt="" className="rounded-3xl" />
      </div>
      <section className="mt-8 font-slabo text-lg text-gray-300">
        <p className="mb-4">
          My journey into technology started earlier than I expected. What began
          as curiosity about how things work quickly became a habit of building
          just to see if I could. The first time I shipped something and watched
          it come alive on screen, I was hooked.
        </p>

        <p className="mb-4">
          By my sophomore year in B.Tech, I was already taking on freelance
          projects-shipping websites and apps for real businesses. Those
          projects taught me what textbooks don’t : solving problems under
          pressure, listening to users, and delivering value in the messy real
          world.
        </p>

        <p className="mb-4">
          From there, things snowballed. I founded a small digital solutions
          company, jumped into hackathons, and learned to thrive on tight
          deadlines and big ideas. Some highlights: winning positions at{" "}
          <strong>Citronics 2024</strong> and <strong>Savishkar</strong>, plus
          representing my team in the <strong>SIH 2023 Grand Finale</strong>.
          Each event sharpened my ability to think fast, code clean, and
          collaborate well.
        </p>

        <p className="mb-4">
          Along the way I built products close to my heart-like{" "}
          <strong>Journio</strong>, a travel social platform, and{" "}
          <strong>Kisaan AI</strong>, an AI-powered tool that helps farmers make
          smarter crop and market decisions. These were not just coding
          exercises; they were end-to-end builds involving backend architecture,
          API design, and making technology genuinely useful.
        </p>

        <p className="mb-4">
          I also interned at <strong>AERCHAIN</strong> and{" "}
          <strong>Sherwa.Tech</strong>, where I learned to move fast, iterate
          faster, and balance technical depth with business goals. I have taught
          myself new frameworks, dug deep into backend systems, and kept
          leveling up with every sprint.
        </p>

        <p className="mb-4">
          If there is one theme to my journey, it's this: tech is more than
          code. It's resilience, adaptability, and the courage to keep building
          when the path isn't clear. Whether I am crafting scalable backends,
          exploring AI, or sketching the next product idea, I love that sweet
          spot where problem-solving meets creativity.
        </p>

        <p className="mb-8">
          When I am not coding, I am usually exploring emerging tech, reading,
          or tinkering with the next bootstrapped idea. The best chapters are
          still ahead-and I am excited to keep writing them, one project at a
          time.
        </p>
      </section>
      <div className="flex flex-col gap-3 border-t-2 border-dashed border-gray-500 pb-8 pt-8 font-slabo text-gray-400">
        <p>
          You made it to the bottom ! Congratulations, you're officially a
          curiosity detective.
        </p>
        <p>
          Legend has it, those who read footers gain +10 creativity points and a
          mysterious urge to build something unexpected.
        </p>
        <p>
          Hidden secret : somewhere in this page lies a rogue semicolon that
          refuses to follow rules. Can you spot it?
        </p>
      </div>
    </div>
  );
};

export default About;
