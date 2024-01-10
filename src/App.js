import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  // Get the current location
  const location = useLocation();

  // Conditionally render the About component based on the route
  const renderAbout = location.pathname === "/about";

  return (
    <>
      <Nav />
      {/* Conditionally render the About component */}
      {renderAbout && <About />}
      <Background />
      <Routes>
        {/* Redirect the root path to "/about" */}
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </>
  );
};

export default App;
