import { Link } from "react-router-dom";
import { useWorks } from "../../queries/blogs";
import CardShimmer from "./Shimmers/CardShimmer";
import ErrorCard from "./Shimmers/ErrorCard";

const TopProjects = () => {
  const { data, isLoading, error } = useWorks();
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="font-slabo text-4xl text-white">Top Projects.</p>
        <Link
          to="/work"
          className="text-xs font-mono text-gray-300 bg-gray-600 px-3 py-1 rounded-md 
             hover:scale-110 transition-transform duration-200
             hover:bg-gray-800 hover:text-blue-500 cursor-pointer"
          style={{ display: "inline-block" }}
        >
          <p className="text-sm transform-none">View more</p>
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
          <p className="text-gray-400 text-center">
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
      <div className="h-[400px] rounded-lg overflow-hidden">
        <img
          src={cover_image.formats.large.url}
          alt={cover_image.alternativeText}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3">
        <p className="font-sans tracking-wide px-2 text-gray-400">
          Personal Software Project
        </p>
        <p className="px-2 text-2xl text-white font-bold mt-2">{title}</p>
      </div>
    </Link>
  );
};

export default TopProjects;
