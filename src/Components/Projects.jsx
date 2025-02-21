import React from 'react';
import projectDev1 from "../assets/img/projectDev1.jpg";
import projectDev2 from "../assets/img/projectDev2.jpg";
import projectDev3 from "../assets/img/ProjectDev3.jpg";

const Projects = () => {
  const projectData = [
    { company: "Veritas", groups: 3 },
    { company: "Tech Mahindra", groups: 3 },
    { company: "Jash Data Sciences Pvt. Ltd.", groups: 1 },
    { company: "ATX Lab", groups: 1 },
    { company: "L3Cube", groups: 1 },
    { company: "ElasticRun", groups: 1 },
    { company: "Sasefied Limited", groups: 2 },
    { company: "TechPeek", groups: 1 },
    { company: "Ordway", groups: 1 },
    { company: "AlgoAnalytics", groups: 1 },
    { company: "Hitansh Enterprises", groups: 1 },
    { company: "RGSTC, PICT", groups: 2 },
    { company: "Sarvatra Technologies", groups: 1 },
    { company: "KIDSPROTECT", groups: 1 },
  ];

  return (
    <section id="projectdevelopment">
      <div className="Gallery-2">
      <div className="Gallery-2-big">
        <img src={projectDev1} alt="Project Development 1" />
      </div>
      <div className="Gallery-2-small">
        <img src={projectDev2} alt="Project Development 2" />
        <img src={projectDev3} alt="Project Development 3" />
      </div>
    </div>
      <div className="project-development-section">
        <h2 className="section-title">Project Development</h2>
        <div className="project-development-table">
          <div className="project-development-head">
            <div className="company-column">Company</div>
            <div className="group-column">Groups</div>
          </div>
          {projectData.map((project, index) => (
            <div className="project-development-row" key={index}>
              <div className="company-column">{project.company}</div>
              <div className="group-column">{project.groups}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
