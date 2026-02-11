import React from "react";
import "./Work.css";
import workData from "../../data/Work";

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
