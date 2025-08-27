import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Contact />
    </div>
  );
}

export default App;
