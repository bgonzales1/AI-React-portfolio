import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  
  return (
    <Router>
      <Nav />
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
    </Router>
  );
};

export default App;
