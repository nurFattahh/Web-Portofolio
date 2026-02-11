import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Project from "./components/Project/Project";
import Organization from "./components/Organization/Organization";
import Experience from "./components/Experience/Experience";
import ProjectDetail from "./components/Project/ProjectDetails";

import MotionWrapper from "./components/Animations/MotionWrapper";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        <Route path="/work" element={<MotionWrapper><Work /></MotionWrapper>} />
        <Route path="/experience" element={<MotionWrapper><Experience /></MotionWrapper>} />
        <Route path="/projects" element={<MotionWrapper><Project /></MotionWrapper>} />
        <Route path="/organization" element={<MotionWrapper><Organization /></MotionWrapper>} />
        <Route path="/projects/:id" element={<MotionWrapper><ProjectDetail /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <Navbar />
    <AnimatedRoutes />
    <Footer />
  </Router>
);

export default App;
