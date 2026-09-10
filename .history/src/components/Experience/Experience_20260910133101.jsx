import React, { useState } from "react";

import certifications from "../../data/Experience";

import "./Experience.css";

const Experience = () => {
  const [activeDocId, setActiveDocId] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState("campus");

  const toggleDocs = (id) => {
    setActiveDocId(activeDocId === id ? null : id);
  };

  const openModal = (img) => setModalImg(img);

  const closeModal = () => setModalImg(null);

  const filteredCertifications = certifications.filter(
    (cert) => cert.category === activeCategory
  );

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">
          <span className="certifications-text">Certifications</span>{" "}
          & Achievements
        </h2>

        {/* Category Tabs */}
        <div className="experience-tabs">
          <button
            className={`experience-tab ${
              activeCategory === "campus" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("campus")}
          >
            Campus Activity
          </button>

          <button
            className={`experience-tab ${
              activeCategory === "course" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("course")}
          >
            Course Certifications
          </button>

          <button
            className={`experience-tab ${
              activeCategory === "professional" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("professional")}
          >
            Professional
          </button>
        </div>

        {/* Certification Content */}
        {filteredCertifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`experience-row ${
              index % 2 === 0 ? "row-left" : "row-right"
            }`}
          >
            <div className="experience-img">
              <img src={cert.image} alt={cert.title} />
            </div>

            <div className="experience-content">
              <h3>{cert.title}</h3>

              <p className="experience-date">{cert.date}</p>

              <p>{cert.description}</p>

              {cert.docs && cert.docs.length > 0 && (
                <>
                  <button
                    onClick={() => toggleDocs(cert.id)}
                    className="doc-button"
                  >
                    {activeDocId === cert.id
                      ? "Hide Documentation"
                      : "Show Documentation"}
                  </button>

                  <div
                    className="doc-gallery-wrapper"
                    style={{ minHeight: "80px" }}
                  >
                    {activeDocId === cert.id && (
                      <div className="doc-gallery">
                        {cert.docs.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`doc-${i}`}
                            className="doc-img"
                            onClick={() => openModal(img)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Empty Category */}
        {filteredCertifications.length === 0 && (
          <div className="empty-category">
            <p>No certifications available in this category yet.</p>
          </div>
        )}
      </div>

      {/* Modal Image Preview */}
      {modalImg && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="modal-content-img"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImg} alt="Preview" />

            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
