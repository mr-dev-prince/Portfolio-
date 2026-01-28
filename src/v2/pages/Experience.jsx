import { experiences } from "../constants/experiences";

const Experience = () => {
  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-2 md:mt-28">
        <p className="font-slabo text-4xl text-white">My Experiences.</p>
        <p className="mt-2 font-slabo text-lg text-gray-400 md:text-2xl">
          Places I showed up, did stuff, and occasionally coffee-ed.
        </p>
      </div>
      <div className="my-8 flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
      <div className="pb-8">
        <p className="font-slabo text-lg text-gray-400">
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
    <div className="flex flex-col gap-4 border-b border-dashed border-gray-500 p-3 font-slabo text-white transition-transform duration-300">
      <div className="flex items-center gap-4">
        <img
          src={org_logo.url}
          alt={`${org_name} logo`}
          className="h-16 w-16 rounded-md bg-white object-contain p-1"
        />
        <div>
          <h3 className="font-slabo text-2xl">{org_name}</h3>
          <p className="text-sm text-gray-400">
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
              <p key={index} className="text-lg text-gray-300">
                {block.children.map((child) => child.text).join(" ")}
              </p>
            );
          }

          if (block.type === "list" && block.format === "unordered") {
            return (
              <ul
                key={index}
                className="list-outside list-disc space-y-2 pl-4 text-lg text-gray-300"
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
