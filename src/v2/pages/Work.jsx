import React from "react";
import { useWorks } from "../../queries/blogs";
import { ProjectCard } from "../components/TopProjects";
import ErrorCard from "../components/Shimmers/ErrorCard";
import CardShimmer from "../components/Shimmers/CardShimmer";

const Work = () => {
  const { data, isLoading, error } = useWorks();

  return (
    <div className="min-h-screen mx-[25%] pl-6">
      <div className="w-full h-full flex mt-28 flex-col justify-start items-start gap-2">
        <p className="font-slabo text-white text-4xl">My Work.</p>
        <p className="text-2xl mt-2 text-gray-400 font-slabo">
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
      <div className="border-t-2 border-gray-600 border-dashed pt-6 mb-8">
        <p className="font-slabo text-lg text-gray-400">
          Thanks for checking out my work ! I promise, it's not all just coffee
          stains and broken code.
        </p>
      </div>
    </div>
  );
};

export default Work;
