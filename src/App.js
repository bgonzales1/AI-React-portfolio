import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  // State to manage the background class
  const [showBackground, setShowBackground] = useState(true);

  // Function to turn off the background class
  const turnOffBackground = () => {
    setShowBackground(false);
  };

  return (
    <Router>
      <Nav />
      {/* Apply the background class conditionally */}
      {showBackground && <Background />}

      <Routes>
        {/* Redirect the root path to "/about" */}
        <Route path="/" element={<Navigate to="/about" />} />
        <Route
          path="/about"
          element={<About turnOffBackground={turnOffBackground} />}
        />
        <Route
          path="/skills"
          element={<Skills turnOffBackground={turnOffBackground} />}
        />
        <Route
          path="/projects"
          element={<Projects turnOffBackground={turnOffBackground} />}
        />
        <Route
          path="/contact"
          element={<Contact turnOffBackground={turnOffBackground} />}
        />
      </Routes>

      <PlayerStats />
    </Router>
  );
};

export default App;