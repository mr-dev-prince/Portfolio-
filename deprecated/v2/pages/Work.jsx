import { ProjectCard } from "../components/TopProjects";
import { projects } from "../constants/work";

const Work = () => {
  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-2 md:mt-28">
        <p className="font-slabo text-4xl text-white">My Work.</p>
        <p className="mt-2 font-slabo text-2xl text-gray-400">
          Things I broke, then fixed… maybe.
        </p>
      </div>
      <div className="my-8 flex flex-col gap-8">
        {projects.map((e) => (
          <ProjectCard key={e.documentId} {...e} />
        ))}
      </div>
      <div className="mb-8 border-t-2 border-dashed border-gray-600 pt-6">
        <p className="font-slabo text-lg text-gray-400">
          Thanks for checking out my work ! I promise, it's not all just coffee
          stains and broken code.
        </p>
      </div>
    </div>
  );
};

export default Work;
