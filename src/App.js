import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { Header } from "./common/Header";
import Experiences from "./pages/Experiences";
import Footer from "./common/Footer";
import Splash from "./pages/Splash";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "F12") {
  //     event.preventDefault();
  //   }

  //   if (event.ctrlKey && event.shiftKey && event.key === "I") {
  //     event.preventDefault();
  //   }

  //   if (event.ctrlKey && event.shiftKey && event.key === "J") {
  //     event.preventDefault();
  //   }

  //   if (event.ctrlKey && event.key === "U") {
  //     event.preventDefault();
  //   }
  // });

  const [enter, setEnter] = useState(() => {
    return localStorage.getItem("entered") === "true";
  });

  const handleEnter = () => {
    setEnter(true);
    window.location.href = "/";
    localStorage.setItem("entered", "true");
  };

  return (
    <Router>
      {enter ? (
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Splash onEnter={handleEnter} />
      )}
    </Router>
  );
}

export default App;
