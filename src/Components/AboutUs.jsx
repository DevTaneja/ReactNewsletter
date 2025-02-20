import React from 'react';

const AboutUs = () => {
  return (  
    <section id="About-Us">
      <div className="about-us">
        <header className="header">
          <h2 id="indexx">About Us</h2>
        </header>

        <div className="content">
          <div className="member">
            <img src="/assets/img/devfinalnewsletter.jpg" alt="Dev Taneja" />
            <h2>Dev Taneja</h2>
            <a href="http://linkedin.com/in/dev-taneja-57625327b" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>

          <div className="member">
            <img src="/assets/img/mahinewsletterfinal.jpg" alt="Mahi Shah" />
            <h2>Mahi Shah</h2>
            <a href="http://linkedin.com/in/mahi-shah-417975212" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="teacher-section">
          <img src="/assets/img/jbj pict.jpg" alt="Dr. J B Jagdale" />
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
