import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/Projects";
import "./ProjectDetails.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImg, setModalImg] = useState(null);
  const project = projects.find((p) => p.id === parseInt(id));

  const openModal = (img) => {
    setModalImg(img.startsWith("/") ? img : `/${img}`);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  if (!project) {
    return <p className="text-center mt-5 text-light">Project not found</p>;
  }

  return (
    <section className="project-detail-section">
      <div className="project-detail-container">
        <h2 className="project-detail-title">{project.name}</h2>
        <p className="project-detail-date">{project.date}</p>
        <p className="project-detail-description">{project.description}</p>

        {project.features && (
          <>
            <h4>Key Features</h4>
            <ul>
              {project.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </>
        )}

        {project.tech && (
          <>
            <h4>Technologies Used</h4>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </>
        )}

        <h4 className="image-title mt-4">Project Images</h4>
        <div className="image-gallery">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img.startsWith("/") ? img : `/${img}`}
              alt={`project-${idx}`}
              className="detail-img"
              onClick={() => openModal(img)}
            />
          ))}
        </div>

        <div className="project-details-buttons mt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning mr-2"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Live Demo
            </a>
          )}
        </div>

        <div className="back-button" onClick={() => navigate("/projects")}>
          ← Back to Projects
        </div>
      </div>

      {/* Modal Preview */}
      {modalImg && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content-img" onClick={(e) => e.stopPropagation()}>
            <img src={modalImg} alt="Enlarged preview" />
            <button className="close-modal" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
