import { Link } from "react-router-dom";
import { useWorks } from "../../queries/blogs";
import CardShimmer from "./Shimmers/CardShimmer";
import ErrorCard from "./Shimmers/ErrorCard";

const TopProjects = () => {
  const { data, isLoading, error } = useWorks();
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <p className="font-slabo text-4xl text-white">Top Projects.</p>
        <Link
          to="/work"
          className="cursor-pointer rounded-md bg-gray-600 px-3 py-1 font-mono text-xs text-gray-300 transition-transform duration-200 hover:scale-110 hover:bg-gray-800 hover:text-blue-500"
          style={{ display: "inline-block" }}
        >
          <p className="transform-none text-sm">View more</p>
        </Link>
      </div>
      <div className="mt-6 flex flex-col gap-8">
        {isLoading && (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        )}

        {error && (
          <ErrorCard message="Oops! Something went wrong while fetching top projects." />
        )}

        {!isLoading &&
          !error &&
          data?.length > 0 &&
          data.map((e) => <ProjectCard key={e.documentId} {...e} />)}

        {!isLoading && !error && data?.length === 0 && (
          <p className="text-center text-gray-400">
            I built projects, I swear.
          </p>
        )}
      </div>
    </>
  );
};

export const ProjectCard = ({ cover_image, title, deployed_link }) => {
  return (
    <Link
      target="blank"
      to={deployed_link}
      className="h-fit w-full rounded-lg bg-gray-800/60 p-3"
    >
      <div className="overflow-hidden rounded-lg md:h-[400px]">
        <img
          src={cover_image.formats.large.url}
          alt={cover_image.alternativeText}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3">
        <p className="px-2 font-sans tracking-wide text-gray-400">
          Personal Software Project
        </p>
        <p className="mt-2 px-2 text-xl font-bold text-white md:text-2xl">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default TopProjects;
