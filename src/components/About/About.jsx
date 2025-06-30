import React from "react";
import "./About.css"; 
import Skillset from "./Skillset";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About <span className="me-text">Me</span></h2>
        <p className="about-description">
          Hello! My name is <strong>Muhammad Nur Fattah</strong>, a passionate
          Computer Engineering student at <strong>Brawijaya University</strong>.
        </p>
        <p className="about-description">
          I specialize in <strong>software development</strong>,{" "}
          <strong>artificial intelligence</strong>, and{" "}
          <strong>embedded systems</strong>, with a keen interest in solving
          real-world problems through technology. Over the course of my academic
          journey, I have worked on various projects, from{" "}
          <strong>building smart systems</strong> to{" "}
          <strong>developing innovative applications</strong>, showcasing my
          commitment to learning and growth.
        </p>
        <p className="about-description">
          In addition to academics, I actively participate in community programs
          and technology events, which allow me to connect with like-minded
          individuals and contribute to impactful initiatives.
        </p>
        <h3 className="about-subtitle">Interests and Skills</h3>
        <ul className="skills-list">
          {/* <li><strong>Programming Languages</strong>: Python, C++, JavaScript, Golang</li> */}
          <li><strong>Technologies</strong>: Machine Learning, Internet of Things (IoT), Computer Vision</li>
          <li><strong>Hobbies</strong>: Coding, photography, and gaming</li>
        </ul>
        <p className="about-closing">
          I believe in continuous learning and innovation as a way to drive
          positive change. My goal is to combine my technical expertise with
          creative problem-solving to make a difference in the world.  
        </p>
        <p className="about-connect">Feel free to connect with me and explore more about my work!</p>
        <Skillset />
      </div>
      
    </section>
  );
};

export default About;
