import HorizontalLines from "../components/horizontal-lines";
import VerticalLines from "../components/vertical-lines";
import Hero from "../components/hero";
import Heading from "../components/heading";
import ExperienceCard from "../components/experience";
import { Experience } from "../constants/experience";

const page = () => {
  return (
    <div className="mb-60 w-full flex flex-col relative">
      <div className="fixed left-96 top-0 h-screen w-[1px] z-[-1]">
        <VerticalLines />
      </div>
      <div className="fixed right-96 top-0 h-screen w-[1px] z-[-1]">
        <VerticalLines />
      </div>
      <div className="h-52" />
      <HorizontalLines />
      <Hero />
      <HorizontalLines />
      <Heading text="Experience" />
      <div className="w-full flex flex-col">
        {Experience.map((item, index) => (
          <div key={index} className="flex flex-col w-full">
            <HorizontalLines />
            <div className="mx-96 px-6 py-4">
              <ExperienceCard data={item} />
            </div>
          </div>
        ))}
        <HorizontalLines />
        <Heading text="Skills" />
        <HorizontalLines />
      </div>
    </div>
  );
};

export default page;
