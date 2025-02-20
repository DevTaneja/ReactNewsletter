import React from 'react';
import collegeImage from '../assets/img/college.jpg';
import facultyImage from '../assets/img/itfaculty.jpg';

const FrontPage = () => {
  return (
    <section id="FrontPage">
      <hr className="line-1" />
      <hr className="line-2" />
      
      <div className="heading">
        <h3 id="SCTR">SCTR's</h3>
        <h1>Pune Institute of Computer Technology</h1>
        <h2>Department of Information Technology (2024 - Issue 2)</h2>
      </div>

      <hr className="line-2" />
      <hr className="line-1" />

      <div className="page-1">
        <div className="image-container">
          <img src={collegeImage} alt="Large Image" />
        </div>
        <div className="text-container">
          <div className="Vision">
            <h2>Institute Vision</h2>
            <p>
              SCTR's Pune Institute of Computer Technology envisions to be a
              centre of excellence in higher technical education and research,
              producing global leaders in the field of technology.
            </p>
          </div>
          <div className="Vision">
            <h2>Department Vision</h2>
            <p>
              The department endeavors to be recognized globally as a centre of
              academic excellence and research in Information Technology.
            </p>
          </div>
          <div className="Mission">
            <h2>Institute Mission</h2>
            <ul>
              <li>Provide rigorous academic training...</li>
              <li>Foster research and innovation culture...</li>
              <li>Nurture leadership qualities in students...</li>
            </ul>
          </div>
          <div className="Mission">
            <h2>Department Mission</h2>
            <p>
              To inculcate research culture among students by imparting
              information technology-related fundamental knowledge, recent
              technological trends, and ethics to get recognized as globally
              acceptable and socially responsible professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="faculty-container">
        <img src={facultyImage} alt="Large Faculty Image" />
      </div>
    </section>
  );
};

export default FrontPage;
