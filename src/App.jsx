import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
  <div className="min-h-screen flex flex-col bg-[#0F172A] text-white">
    <Navbar />

    <div className="grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    <Footer />
  </div>
</Router>

  );
}

export default App;
