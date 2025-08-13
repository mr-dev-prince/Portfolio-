import { useExperiences } from "../../queries/blogs";
import CardShimmer from "../components/Shimmers/CardShimmer";
import ErrorCard from "../components/Shimmers/ErrorCard";

const Experience = () => {
  const { data, isLoading, error } = useExperiences();
  return (
    <div className="min-h-screen mx-[25%] pl-6">
      <div className="w-full h-full flex mt-28 flex-col justify-start items-start gap-2">
        <p className="font-slabo text-white text-4xl">My Experiences.</p>
        <p className="text-2xl mt-2 text-gray-400 font-slabo">
          Places I showed up, did stuff, and occasionally coffee-ed.
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
          data.map((e) => <ExperienceCard key={e.documentId} experience={e} />)}

        {!isLoading && !error && data?.length === 0 && (
          <ErrorCard
            text={
              "I think I forgot that I have a blogs section on my portfolio."
            }
          />
        )}
      </div>
      <div className="pb-8">
        <p className=" font-slabo text-lg text-gray-400">
          Thanks for reading ! Rumor has it, footers increase coding skills by
          0.01%.
        </p>
      </div>
    </div>
  );
};

export const ExperienceCard = ({ experience }) => {
  const { org_name, start_date, end_date, description, org_logo } = experience;

  return (
    <div className="text-white p-3 flex flex-col gap-4 transition-transform duration-300 font-slabo border-b border-dashed border-gray-500">
      <div className="flex items-center gap-4">
        <img
          src={org_logo.url}
          alt={`${org_name} logo`}
          className="w-16 h-16 object-contain rounded-md bg-white p-1"
        />
        <div>
          <h3 className="text-2xl font-slabo">{org_name}</h3>
          <p className="text-gray-400 text-sm">
            {new Date(start_date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}{" "}
            {end_date && " - "}
            {end_date &&
              new Date(end_date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {description.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p key={index} className="text-gray-300 text-lg">
                {block.children.map((child) => child.text).join(" ")}
              </p>
            );
          }

          if (block.type === "list" && block.format === "unordered") {
            return (
              <ul
                key={index}
                className="list-disc list-outside text-gray-300 text-lg space-y-2 pl-4"
              >
                {block.children.map((item, idx) => (
                  <li key={idx}>
                    {item.children.map((child) => child.text).join(" ")}
                  </li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Experience;
