import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const links = document.querySelectorAll(".navbar-collapse .nav-link");
    const navbar = navbarRef.current;

    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbar && navbar.classList.contains("show")) {
          new window.bootstrap.Collapse(navbar).hide(); // collapse on mobile
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand" to="/">
        My Portfolio
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        ref={navbarRef}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
