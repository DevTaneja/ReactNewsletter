import React from 'react';
import jbjPict from "../assets/img/jbjfinal.jpg";
import HODPict from "../assets/img/HODIT.jpg";


const HOD = () => {
    return (
        <section id="HOD">
            <div className="hod-message">
                <h1>Words from HoD and Newsletter In-charge!</h1>

                {/* HoD Section */}
                <div className="message-box">

                 

                    <div className="profile-image" style={{ textAlign: 'center' }}> {/* Center image */}
                        {/* Enlarged image */}

                    <div className="profile-container">
                        <img src={HODPict} alt="Dr. Archana Ghotkar" className="profile-image large" />
                        <div className="text-content">
                            <p>Presenting the first issue of the 2024-25 newsletter for the Department of Information Technology!</p>
                            <p>It is a privilege to lead the IT Department, working alongside a team of dedicated and highly skilled faculty members who bring immense expertise and passion to their fields. Their commitment to academic excellence and innovation continues to inspire and empower the next generation of technologists.</p>
                            <p>Our mission is to ignite curiosity, foster innovation, and encourage students to explore new frontiers in research and technology. We firmly believe in the transformative power of education and are dedicated to creating an environment that nurtures creativity, critical thinking, and technical proficiency.</p>
                            <p>As technology and education evolve, we remain steadfast in our pursuit of excellence, ensuring our students are well-equipped to navigate the ever-changing digital landscape. I extend my sincere appreciation to the entire IT Department community for their hard work and dedication toward this shared vision.</p>
                            <p><strong>- Dr. Archana Ghotkar</strong><br />Head, Department of Information Technology</p>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Newsletter In-Charge Section */}
                <div className="message-box">
                    <div className="profile-container reverse">
                        <img src={jbjPict} alt="Dr. J. B. Jagdale - Newsletter In-charge" className="profile-image large" />
                        <div className="text-content">
                            <p>Dear readers,</p>
                            <p>I feel happy to present to you Issue I of the newsletter for AY 24-25. The newsletter is the image of the department where one can see the efforts put in by the students and staff of the department.</p>
                            <p>Dear GenZ,</p>
                            <p>Firstly, congratulations for your dedication, resilience, creativity, and ability to easily adopt technology. The luxury of advanced technology in handheld devices comes with many challenges faced by the world now and in coming years, like lowered physical, mental, and psychological strength. Ambition to achieve goals, if coupled with humility and patience, can be a cherry on top. Your teachers will always be happy to see you flourish. All the best for your future and endeavors!!</p>
                            <p><strong>– Dr. J. B. Jagdale</strong><br />Newsletter In-Charge</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HOD;
