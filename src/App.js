import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { Header } from "./common/Header";
import Experiences from "./pages/Experiences";
import Footer from "./common/Footer";

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

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
