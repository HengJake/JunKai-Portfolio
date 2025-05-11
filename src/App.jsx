import { useState } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navBar";
import Home from "./containers/Home/index";
import About from "./containers/About/index";
import Contact from "./containers/Contact/index";
import Portfolio from "./containers/Portfolio/index";
import Resume from "./containers/Resume/index";
import Skills from "./containers/Skills/index";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./util/particle.js";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticle = location.pathname === "/";

  return (
    <div className="App">
      {/*particle*/}

      {renderParticle && (
        <Particles
          id="particles"
          init={handleInit}
          options={particlesOptions}
        />
      )}

      {/*navbar*/}
      <Navbar />

      {/*Main content */}
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
