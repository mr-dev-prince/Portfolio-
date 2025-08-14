import React from "react";
import { useWorks } from "../../queries/blogs";
import { ProjectCard } from "../components/TopProjects";
import ErrorCard from "../components/Shimmers/ErrorCard";
import CardShimmer from "../components/Shimmers/CardShimmer";

const Work = () => {
  const { data, isLoading, error } = useWorks();

  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-2 md:mt-28">
        <p className="font-slabo text-4xl text-white">My Work.</p>
        <p className="mt-2 font-slabo text-2xl text-gray-400">
          Things I broke, then fixed… maybe.
        </p>
      </div>
      <div className="my-8 flex flex-col gap-8">
        {isLoading && (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        )}

        {error && (
          <ErrorCard
            text={"Blogs refused to load ! They need some coffee..."}
          />
        )}

        {!isLoading &&
          !error &&
          data?.length > 0 &&
          data.map((e) => <ProjectCard key={e.documentId} {...e} />)}

        {!isLoading && !error && data?.length === 0 && (
          <ErrorCard
            text={
              "I think I forgot that I have a blogs section on my portfolio."
            }
          />
        )}
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
