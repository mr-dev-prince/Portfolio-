import Circles from "../components/Circles.jsx";
import CTA from "../components/CTA.jsx";
import Divider from "../components/Divider.jsx";
import Ventures from "../components/Ventures.jsx";
import IntroSection from "../components/IntroSection.jsx";
import TopProjects from "../components/TopProjects.jsx";
import RecentBlogs from "../components/RecentBlogs.jsx";
import DownloadResume from "../components/DownloadResume.jsx";
import Footer from "../common/Footer.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";

const Home = () => {
  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full items-center justify-start md:mt-28">
        <Circles />
      </div>
      <RevealOnScroll>
        <IntroSection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <CTA />
      </RevealOnScroll>

      <Divider />

      <RevealOnScroll delay={0.2}>
        <Ventures />
      </RevealOnScroll>

      <Divider />

      <RevealOnScroll delay={0.3}>
        <TopProjects />
      </RevealOnScroll>

      <Divider />

      <RevealOnScroll delay={0.4}>
        <RecentBlogs />
      </RevealOnScroll>

      <Divider />

      <RevealOnScroll delay={0.5}>
        <DownloadResume />
      </RevealOnScroll>

      <Footer />
    </div>
  );
};

export default Home;
