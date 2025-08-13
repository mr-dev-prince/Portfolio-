import { Link, NavLink } from "react-router-dom";
import { useExperiences } from "../../queries/blogs";
import CardShimmer from "./Shimmers/CardShimmer";
import ErrorCard from "./Shimmers/ErrorCard";
import SmallCardShimmer from "./Shimmers/SmallCardShimmer";

const Ventures = () => {
  const { data, isLoading, error } = useExperiences();
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="font-slabo text-4xl text-white">Experiences.</p>
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
      <div className="grid grid-cols-3 gap-3 mt-6">
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
          data?.length > 0 &&
          data.map((e) => <Card key={e.documentId} {...e} />)}

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
      className="flex justify-center items-center flex-col border border-gray-700 py-8 rounded-xl gap-4"
    >
      <div className="border-4 border-blue-500/80 p-1 rounded-full h-24 w-24">
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
