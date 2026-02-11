import React from "react";
import "./Work.css";

const workData = [
  {
    id: 1,
    position: "Software Engineer Intern",
    company: "PT Example Company",
    duration: "Jan 2025 - Mar 2025",
    description:
      "Developed internal web dashboard using React and Node.js. Implemented REST API integration and optimized database queries.",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    id: 2,
    position: "IT Support",
    company: "ABC Corporation",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Maintained internal network infrastructure and handled troubleshooting for 100+ employees.",
    tech: ["Networking", "MikroTik", "Linux"],
  },
];

const Work = () => {
  return (
    <section id="work">
      <h2>
        My Professional <span className="works-text">Experience</span>
      </h2>

      <div className="container">
        <div className="row">
          {workData.map((work) => (
            <div key={work.id} className="col-md-6">
              <div className="work-card">
                <h3 className="work-position">{work.position}</h3>
                <h5 className="work-company">{work.company}</h5>
                <p className="work-duration">{work.duration}</p>

                <p className="work-description">{work.description}</p>

                <div className="work-tech">
                  {work.tech.map((item, index) => (
                    <span key={index} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
