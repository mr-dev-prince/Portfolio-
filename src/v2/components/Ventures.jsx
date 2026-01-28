import { Link, NavLink } from "react-router-dom";

import { experiences } from "../constants/experiences";

const Ventures = () => {
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
        {experiences.map(
          (e, idx) => idx < 6 && <Card key={e.documentId} {...e} />,
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
      <p className="text-md text-white text-center">{org_name}</p>
    </NavLink>
  );
};

export default Ventures;
