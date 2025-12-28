import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SpecializedAreas from "./pages/specialized-areas";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SampleWork from "./pages/sample-work";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Project1 from "./projects/project1";
import Project2 from "./projects/project2";
import Project3 from "./projects/project3";
import Ardabil from "./pages/Ardebil";
import Tabriz from "./pages/Tabriz";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="/Specialized-areas"
            element={<SpecializedAreas />}
          ></Route>
          <Route path="/samplework" element={<SampleWork />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/portfolio/project1" element={<Project1 />} />
          <Route path="/portfolio/project2" element={<Project2 />} />
          <Route path="/portfolio/project3" element={<Project3 />} />
          <Route path="/ardabil" element={<Ardabil />} />
          <Route path="/tabriz" element={<Tabriz />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
