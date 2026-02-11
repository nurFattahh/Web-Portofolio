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
                {workData.map((work, index) => {
                const isLast = index === workData.length - 1;
                const isOdd = workData.length % 2 !== 0;

                return (
                    <div
                    key={work.id}
                    className={`col-md-6 ${
                        isOdd && isLast ? "offset-md-3" : ""
                    }`}
                    >
                    <div className="work-card">
                        <img
                        src={work.logo}
                        alt="company logo"
                        className="work-logo"
                        />
                        <h3 className="work-position">{work.position}</h3>
                        <h5 className="work-company">{work.company}</h5>
                        <p className="work-duration">{work.duration}</p>
                        <p className="work-description">{work.description}</p>

                        <div className="work-tech">
                        {work.tech.map((item, idx) => (
                            <span key={idx} className="tech-badge">
                            {item}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
    </section>
  );
};

export default Work;
