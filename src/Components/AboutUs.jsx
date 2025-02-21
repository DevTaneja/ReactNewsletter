import React from 'react';
import devfinalnewsletter from "../assets/img/devfinalnewsletter.jpg";
import mahinewsletterfinal from "../assets/img/mahinewsletterfinal.jpg";
import jbj_pict from "../assets/img/jbj_pict.jpg";

const AboutUs = () => {
  return (  
    <section id="About-Us">
      <div className="about-us">
        <header className="header">
          <h2 id="indexx">About Us</h2>
        </header>

        <div className="content">
          <div className="member">
            <img src={devfinalnewsletter} alt="Dev Taneja" />
            <h2>Dev Taneja</h2>
            <a href="http://linkedin.com/in/dev-taneja-57625327b" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>

          <div className="member">
            <img src={mahinewsletterfinal} alt="Mahi Shah" />
            <h2>Mahi Shah</h2>
            <a href="http://linkedin.com/in/mahi-shah-417975212" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="teacher-section">
          <img src={jbj_pict} alt="Dr. J B Jagdale" />
          <h2>Dr. J B Jagdale</h2>
          <a href="http://linkedin.com/in/dr-jayashree-balaso-j-19ba9716" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
