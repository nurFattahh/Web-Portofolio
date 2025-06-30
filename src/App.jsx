import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Organization from "./components/Organization/Organization";
import Experience from "./components/Experience/Experience";

import ProjectDetail from "./components/Project/ProjectDetails";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    
    </Routes>
    <Footer />
  </Router>
);

export default App;
