// src/App.jsx
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./v2/pages/About";
import BlogDetails from "./v2/pages/BlogDetails";
import Blogs from "./v2/pages/Blogs";
import Contact from "./v2/pages/Contact";
import Experience from "./v2/pages/Experience";
// ---- v2 pages -----
import Home from "./v2/pages/Home";
import LegacyContact from "./pages/Contact";
import LegacyExperiences from "./pages/Experiences";
// ---- v1 pages -----
import LegacyHome from "./pages/Home";
import LegacyProjects from "./pages/Projects";
import LegacyResume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Splash from "./pages/Splash";
import V1Layout from "./layouts/V1Layout";
// ---- Layouts -----
import V2Layout from "./layouts/V2Layout";
import Work from "./v2/pages/Work";

function InnerApp({ entered, setEntered }) {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(false);

  const handleEnter = (ver = "v2") => {
    setEntered(true);
    localStorage.setItem("entered", "true");
    localStorage.setItem("portfolioVersion", ver);

    if (ver === "v1") {
      // Show Splash only when switching to legacy
      setShowSplash(false);
      navigate("/legacy");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const remembered = localStorage.getItem("portfolioVersion");

    // First-time visitors go directly to v2
    if (!entered && (!remembered || remembered === "v2")) {
      setEntered(true);
      localStorage.setItem("entered", "true");
      localStorage.setItem("portfolioVersion", "v2");
      navigate("/", { replace: true });
      return;
    }

    // Show Splash if user previously used v1 but not on /legacy path
    if (
      remembered === "v1" &&
      !window.location.pathname.startsWith("/legacy")
    ) {
      setShowSplash(true);
    }
  }, [entered, navigate, setEntered]);

  if (showSplash) return <Splash onEnter={handleEnter} />;

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
          <Route path="blogs/:slug" element={<BlogDetails />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  const [entered, setEntered] = useState(
    () => localStorage.getItem("entered") === "true"
  );


  return (
    <Router>
      <InnerApp entered={entered} setEntered={setEntered} />
    </Router>
  );
}
