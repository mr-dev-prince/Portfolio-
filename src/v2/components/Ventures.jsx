import { Link, NavLink } from "react-router-dom";
import { useExperiences } from "../../queries/blogs";
import ErrorCard from "./Shimmers/ErrorCard";
import SmallCardShimmer from "./Shimmers/SmallCardShimmer";

const Ventures = () => {
  const { data, isLoading, error } = useExperiences();
  const { data: experiences } = data || {};
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <p className="font-slabo text-4xl text-white">Experiences.</p>
        <Link
          to="experience"
          className="cursor-pointer rounded-md bg-gray-600 px-3 py-1 font-mono text-xs text-gray-300 transition-transform duration-200 hover:scale-110 hover:bg-gray-800 hover:text-blue-500"
          style={{ display: "inline-block" }}
        >
          <p className="transform-none text-sm">View more</p>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {isLoading && (
          <>
            <SmallCardShimmer />
            <SmallCardShimmer />
            <SmallCardShimmer />
          </>
        )}

        {error && (
          <ErrorCard
            text={"I am actually experienced at generating errors..."}
          />
        )}

        {!isLoading &&
          !error &&
          experiences?.length > 0 &&
          experiences.map((e) => <Card key={e.documentId} {...e} />)}

        {!isLoading && !error && data?.length === 0 && (
          <ErrorCard
            text={
              "I promise I have some experiences, they just decided to hide."
            }
          />
        )}
      </div>
    </>
  );
};

const Card = ({ link, org_logo, org_name }) => {
  return (
    <NavLink
      to={link}
      className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-700 py-2 md:py-8"
    >
      <div className="h-24 w-24 rounded-full border-4 border-blue-500/80 p-1">
        <img
          src={org_logo.url}
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <p className="text-md text-white">{org_name}</p>
    </NavLink>
  );
};

export default Ventures;
