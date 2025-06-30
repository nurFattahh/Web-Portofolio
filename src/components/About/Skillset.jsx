import React from "react";
import "./Skillset.css"; 
import { FaCuttlefish, FaMicrochip, FaNetworkWired, FaPython, FaRobot, FaServer, FaDatabase, FaGithub } from "react-icons/fa";
import { SiPostgresql,SiTerraform , SiAnsible  } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const skills = [
  { name: "C++", icon: <FaCuttlefish className="skill-icon" /> },
  { name: "Embedded System", icon: <FaMicrochip className="skill-icon" /> },
  { name: "MQTT", icon: <FaNetworkWired className="skill-icon" /> },
  { name: "Python", icon: <FaPython className="skill-icon" /> },
  { name: "AI / ML", icon: <FaRobot className="skill-icon" /> },
  { name: "Go", icon: <FaGolang className="skill-icon" /> },
  { name: "Backend", icon: <FaServer className="skill-icon" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon" /> },
  { name: "GitHub", icon: <FaGithub className="skill-icon" /> },
  { name: "Terraform", icon: <SiTerraform className="skill-icon" /> },
  { name: "Ansible", icon: <SiAnsible className="skill-icon" /> },
];

const Skillset = () => {
  return (
    <div className="skillset-section">
      <h3 className="skillset-title">Professional Skillset</h3>
      <div className="skillset-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
