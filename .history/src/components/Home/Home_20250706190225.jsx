import React from "react";
import "./Home.css"; 

import profil_image from "../../assets/Images/Fattah.png";

const Home = () => (
  <section id="home" className="container my-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img src={profil_image} className="img-fluid rounded" alt="Your Photo" />
        <div className="image-overlay-box"></div>
        <div className="body-overlay-box"></div>
        <div className="corner-circle left"></div>
        <div className="corner-circle right"></div>
      </div>
      <div className="col-md-6">
        <h1>Hi There!</h1>
        <p>
          I am Muhammad Nur Fattah, a Student of Computer Engineering at Brawijaya University. Welcome to my
          portfolio where I showcase my work, experience, and achievements. Feel free to explore and learn more about
          what I do.
        </p>
        <div className="social-media mt-4">
          <div className="row">
            <div className="col-3 text-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nurfattah36@gmail.com"
                target="_blank"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
                <div className="social-text">Email</div>
              </a>
            </div>
            <div className="col-3 text-center">
              <a href="https://instagram.com/mnurfatth" target="_blank" title="Instagram">
                <i className="fab fa-instagram"></i>
                <div className="social-text">Instagram</div>
              </a>
            </div>
            <div className="col-3 text-center">
              <a href="https://linkedin.com/in/yourusername" target="_blank" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
                <div className="social-text">LinkedIn</div>
              </a>
            </div>
            <div className="col-3 text-center">
              <a href="https://github.com/NurFattahh" target="_blank" title="GitHub">
                <i className="fab fa-github"></i>
                <div className="social-text">GitHub</div>
              </a>
            </div>
            
          </div>
          <div className="mt-5 text-center">
              Feel free to  <span className="connect-text">connect</span> with me
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
