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
              The department aspires to be a transformative force in Information Technology education and research, developing globally competitive professionals.
            </p>
          </div>
          <div className="Mission">
            <h2>Institute Mission</h2>
            <ul>
              <p>Provide rigorous academic training that equips students to excel in their professional careers with the development of universal human values.</p>
              <p>Foster research and innovation culture amongst faculty and students by encouraging interdisciplinary collaborations, thereby contributing to technological advancements.</p>
              <p>Nurture leadership qualities in students through development of analytical thinking, problem-solving, and effective communication skills.</p>
            </ul>
          </div>
          <div className="Mission">
            <h2>Department Mission</h2>
            <p>
              <p>Inculcate an environment of academic rigor in Information Technology education promoting critical thinking, creativity, and problem-solving skills.</p>
              <p>Foster research and industry collaboration by promoting multidisciplinary engagement among students and faculty, driving technological advancements to address societal challenges.</p>
              <p>Cultivate skilled professionals who embody effective communication, leadership, and ethical values.</p>
            </p>
          </div>
        </div>
      </div>

      <div className="faculty-container">
        <img src={facultyImage} alt="Large Faculty Image" />
      </div>

      <div className="faculty-list" style={{ fontSize: '0.8em', lineHeight: '1.1' }}> {/* Reduced font size and line height */}
        <p>
          Sitting: Mr. A. A. Chavan, Dr. S. C. Dharmadhakari, Dr. A. M. Baghade, Dr. P. T. Kulkarni, Dr. S. T. Gandhe, Dr. A. S. Archana Ghotkar, Dr. S. S. Pande, Dr. Emmanuel M.,
          Mr. V. R. Bhoi, Mr. P. S. Patil
        </p>
        <p>
          1st Row: Ms. P. P. Verma, Ms. K. Y. Digholkar, Ms. A. S. Kadam, Ms. S. R. Hiray, Ms. B. M. Deshpande, Ms. R. R. Chhajed, Ms. P. S. Shinde
        </p>
        <p>
          2nd Row: Dr. J. B. .lagdale, Mis. S. I. Rane, Ms. A. M. Kulkarni, Mis. A. A. Patil, Ms. B. M. Deshpande, Ms. A. S. Jakhete
        </p>
        <p>
          3rd Row: Mr. B. S. Jadhav, Mr. S. R. Shelar, Mr. N. V. Buradhkar, Mr. R. V. Murumkar, Mr. A. G. Dhamankar
        </p>
      </div>
    </section>
  );
};

export default FrontPage;