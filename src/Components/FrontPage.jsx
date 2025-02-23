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
            The department aspires to be a transformative force in Information Technology education and research, developing globally competitive professionals.            </p>
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
    </section>
  );
};

export default FrontPage;
