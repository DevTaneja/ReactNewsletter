import React from 'react';

// Importing images
import kartik_patil from '/src/assets/img/kartik_patil.jpg';
import ssamyak_jain from '/src/assets/img/ssamyak_jain.jpg';
import devesh_bedmutha from '/src/assets/img/devesh_bedmutha.jpg';
import mahek_mulla from '/src/assets/img/mahek_mulla.jpg';
import shreya_shetti from '/src/assets/img/shreya_shetti.jpg';

import Sarvadnya from '/src/assets/img/Sarvadnya.jpg';
import Atharva_Banasure from '/src/assets/img/Atharva_Banasure.jpg';
import Tanmay_Kokate from '/src/assets/img/Tanmay_Kokate.jpg';
import Shantanu_Jadhav from '/src/assets/img/Shantanu_Jadhav.jpg';
import diya_oswal from '/src/assets/img/diya_oswal.jpg';

import Ankita_Adam from '/src/assets/img/Ankita_Adam.jpg';
import sayali_lagad from '/src/assets/img/sayali_lagad.jpg';
import Sahil_Katkamwar from '/src/assets/img/Sahil_Katkamwar.jpeg';
import mahi_shahteit from '/src/assets/img/mahi_shahteit.jpg';
import Sejal_Patil from '/src/assets/img/Sejal_Patil.jpeg';

const CollegeToppers = () => {
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
                    <div className="topper-box">
                        <div className="topper-photo"><img src={kartik_patil} alt="Patil Kartik Tushar" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Patil Kartik<br />Tushar</span>
                            <p className="topper-marks">9.74</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={ssamyak_jain} alt="Jain Samyak Vijay" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Jain Samyak<br />Vijay</span>
                            <p className="topper-marks">9.71</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={devesh_bedmutha} alt="Bedmutha Devesh Sandeep" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Bedmutha Devesh<br />Sandeep</span>
                            <p className="topper-marks">9.66</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={mahek_mulla} alt="Mulla Mahek Najir" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Mulla Mahek<br />Najir</span>
                            <p className="topper-marks">9.66</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={shreya_shetti} alt="Shetti Shreya Shridhar" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Shetti Shreya<br />Shridhar</span>
                            <p className="topper-marks">9.6</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TE-IT Branch Toppers */}
            <div className="branch-toppers">
                <h3 className="branch-title">TE-IT Branch Toppers</h3>
                <div className="toppers-row">
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Sarvadnya} alt="Barate Sarvadnyaa Jitendra" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Barate Sarvadnyaa<br />Jitendra</span>
                            <p className="topper-marks">10</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Atharva_Banasure} alt="Banasure Atharva Rambhau" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Banasure Atharva<br />Rambhau</span>
                            <p className="topper-marks">9.93</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Tanmay_Kokate} alt="Kokate Tanmay Baban" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Kokate Tanmay<br />Baban</span>
                            <p className="topper-marks">9.93</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Shantanu_Jadhav} alt="Jadhav Shantanu Ankush" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Jadhav Shantanu<br />Ankush</span>
                            <p className="topper-marks">9.86</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={diya_oswal} alt="Oswal Diya Prakash" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Oswal Diya<br />Prakash</span>
                            <p className="topper-marks">9.86</p>
                        </div>
                    </div>
                </div>
            </div>


             {/* SE-IT Branch Toppers */}
             <div className="branch-toppers">
                <h3 className="branch-title">SE-IT Branch Toppers</h3>
                <div className="toppers-row">
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Ankita_Adam} alt="Adam Ankita Ramesh" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Adam Ankita<br />Ramesh</span>
                            <p className="topper-marks">10</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={sayali_lagad} alt="Lagad Sayali Sunil" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Lagad Sayali<br />Sunil</span>
                            <p className="topper-marks">9.98</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Sahil_Katkamwar} alt="Katkamwar Sahil Sanjay" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Katkamwar Sahil<br />Sanjay</span>
                            <p className="topper-marks">9.91</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={mahi_shahteit} alt="Shah Mahi Mukesh" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Shah Mahi<br />Mukesh</span>
                            <p className="topper-marks">9.86</p>
                        </div>
                    </div>
                    <div className="topper-box">
                        <div className="topper-photo"><img src={Sejal_Patil} alt="Patil Sejal Kailas" /></div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">Patil Sejal<br />Kailas</span>
                            <p className="topper-marks">9.75</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollegeToppers;
