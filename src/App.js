import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CapitalOne from "./pages/CapitalOne";
import AbbVie from "./pages/AbbVie";
import UIUC from "./pages/UIUC";
import Cisco from "./pages/Cisco";
import TheCodingSchool from "./pages/TheCodingSchool";
import Stanford from "./pages/Stanford";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/capitalone" element={<CapitalOne />} />
          <Route path="/work/abbvie" element={<AbbVie />} />
          <Route path="/work/uiuc" element={<UIUC />} />
          <Route path="/work/cisco" element={<Cisco />} />
          <Route path="/work/thecodingschool" element={<TheCodingSchool />} />
          <Route path="/work/stanford" element={<Stanford />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
