import React from 'react';

const Toppers = () => {
    return (
        <section id="college-toppers" className="toppers-section">
            <h2 className="section-title">Congratulations to Our Toppers!</h2>
            <p className="congrats-message">
                We are proud to celebrate the achievements of our top-performing students. Keep shining bright!
            </p>

            {/* BE-IT Branch Toppers */}
            <div className="branch-toppers">
                <h3 className="branch-title">BE-IT Branch Toppers</h3>
                <div className="toppers-row">
                    {/** Topper 1 */}
                    <div className="topper-box">
                        <div className="topper-photo">
                            <img src="img/kartik_patil.jpg" alt="Topper - Patil Kartik Tushar" />
                        </div>
                        <h4 className="topper-name">Patil Kartik Tushar</h4>
                        <p className="topper-marks">CGPA: 9.74</p>
                    </div>

                    {/** Topper 2 */}
                    <div className="topper-box">
                        <div className="topper-photo">
                            <img src="img/ssamyak_jain.jpg" alt="Topper - Jain Samyak Vijay" />
                        </div>
                        <h4 className="topper-name">Jain Samyak Vijay</h4>
                        <p className="topper-marks">CGPA: 9.71</p>
                    </div>

                    {/** Topper 3 */}
                    <div className="topper-box">
                        <div className="topper-photo">
                            <img src="img/devesh_bedmutha.jpg" alt="Topper - Bedmutha Devesh Sandeep" />
                        </div>
                        <h4 className="topper-name">Bedmutha Devesh Sandeep</h4>
                        <p className="topper-marks">CGPA: 9.66</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toppers;
