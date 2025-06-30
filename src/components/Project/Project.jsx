import React from "react";
import "./Project.css";
import projects from "../../data/Projects";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="project" className="about-section">
      <h2>My Recent <span className="works-text">Works</span></h2>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 container text-center">
              <div
                className="project"
                onClick={(e) => {
                  if (
                    !e.target.closest(".carousel-control-prev") &&
                    !e.target.closest(".carousel-control-next") &&
                    !e.target.closest(".btn")
                  ) {
                    navigate(`/projects/${project.id}`);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <h3 className="project-title">{project.name}</h3>
                <div
                  id={`carouselExample${project.id}`}
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img src={image} className="d-block w-100" alt="slide" />
                      </div>
                    ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href={`#carouselExample${project.id}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#carouselExample${project.id}`}
                    role="button"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
                <p className="project-desc">{project.shortDescription} </p>
                <div className="project-buttons mt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-warning mr-2">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                    Demo / Video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
