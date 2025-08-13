import { Link } from "react-router-dom";

const TopProjects = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <p className="font-slabo text-4xl text-white">Top Projects.</p>
        <Link
          to="/work"
          className="text-xs JetBrains text-gray-300 bg-gray-600 px-3 py-1 rounded-md 
             hover:scale-110 transition-transform duration-200
             hover:bg-gray-800 hover:text-blue-500 cursor-pointer"
          style={{ display: "inline-block" }}
        >
          <p className="text-sm transform-none">View more</p>
        </Link>
      </div>
      <div className="mt-6">
        <Card />
      </div>
    </>
  );
};

const Card = (image, text, link) => {

  return (
    <div className="h-fit w-full rounded-lg bg-gray-800/60 p-5">
      <div className="h-[400px] border rounded-md"></div>
      <div className="mt-3">
        <p className="JetBrains px-2 text-gray-400">Web App 2024</p>
        <p className="px-2 text-2xl text-white">
          Journio : A new generation social media platform
        </p>
      </div>
    </div>
  );
};

export default TopProjects;
