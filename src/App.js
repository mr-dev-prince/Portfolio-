// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Splash from "./pages/Splash";

// ---- v1 pages -----
import LegacyHome from "./pages/Home";
import LegacyExperiences from "./pages/Experiences";
import LegacyContact from "./pages/Contact";
import LegacyResume from "./pages/Resume";
import LegacyProjects from "./pages/Projects";

// ---- v2 pages -----
import Home from "./v2/pages/Home";
import About from "./v2/pages/About";
import Work from "./v2/pages/Work";
import Contact from "./v2/pages/Contact";
import Blogs from "./v2/pages/Blogs";

// ---- Layouts -----
import V2Layout from "./layouts/V2Layout";
import V1Layout from "./layouts/V1Layout";

function InnerApp({ entered, setEntered }) {
  const navigate = useNavigate();

  const handleEnter = (ver = "v2") => {
    setEntered(true);
    localStorage.setItem("entered", "true");
    localStorage.setItem("portfolioVersion", ver);
    navigate(ver === "v1" ? "/legacy" : "/");
  };

  useEffect(() => {
    const remembered = localStorage.getItem("portfolioVersion");
    if (
      remembered === "v1" &&
      !window.location.pathname.startsWith("/legacy")
    ) {
      navigate("/legacy", { replace: true });
    } else if (
      (!remembered || remembered === "v2") &&
      window.location.pathname.startsWith("/legacy")
    ) {
      navigate("/", { replace: true });
    }
  }, [entered, navigate]);

  if (!entered) return <Splash onEnter={handleEnter} />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/legacy/*"
          element={<V1Layout onSwitch={() => handleEnter("v2")} />}
        >
          <Route index element={<LegacyHome />} />
          <Route path="projects" element={<LegacyProjects />} />
          <Route path="resume" element={<LegacyResume />} />
          <Route path="contact" element={<LegacyContact />} />
          <Route path="experiences" element={<LegacyExperiences />} />
          <Route path="*" element={<Navigate to="/legacy" replace />} />
        </Route>
        <Route
          path="/"
          element={<V2Layout onSwitch={() => handleEnter("v1")} />}
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

{/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}

export default function App() {
  const [entered, setEntered] = useState(
    () => localStorage.getItem("entered") === "true"
  );

  // useEffect(() => {
  //   const onKeyDown = (event) => {
  //     if (event.key === "F12") event.preventDefault();
  //     if (
  //       event.ctrlKey &&
  //       event.shiftKey &&
  //       (event.key === "I" || event.key === "J")
  //     )
  //       event.preventDefault();
  //     if (event.ctrlKey && event.key === "U") event.preventDefault();
  //   };
  //   document.addEventListener("keydown", onKeyDown);
  //   return () => document.removeEventListener("keydown", onKeyDown);
  // }, []);

  return (
    <Router>
      <InnerApp entered={entered} setEntered={setEntered} />
    </Router>
  );
}
