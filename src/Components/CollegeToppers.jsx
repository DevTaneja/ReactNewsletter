    import React from 'react';

// Importing images (ensure images are in src/assets/img/)
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
            <BranchToppers
                title="BE-IT Branch Toppers"
                toppers={[
                    { img: kartik_patil, name: "Patil Kartik Tushar", marks: "9.74" },
                    { img: ssamyak_jain, name: "Jain Samyak Vijay", marks: "9.71" },
                    { img: devesh_bedmutha, name: "Bedmutha Devesh Sandeep", marks: "9.66" },
                    { img: mahek_mulla, name: "Mulla Mahek Najir", marks: "9.66" },
                    { img: shreya_shetti, name: "Shetti Shreya Shridhar", marks: "9.6" }
                ]}
            />

            {/* TE-IT Branch Toppers */}
            <BranchToppers
                title="TE-IT Branch Toppers"
                toppers={[
                    { img: Sarvadnya, name: "Barate Sarvadnyaa Jitendra", marks: "10" },
                    { img: Atharva_Banasure, name: "Banasure Athrava Rambhau", marks: "9.93" },
                    { img: Tanmay_Kokate, name: "Kokate Tanmay Baban", marks: "9.93" },
                    { img: Shantanu_Jadhav, name: "Jadhav Shantanu Ankush", marks: "9.86" },
                    { img: diya_oswal, name: "Oswal Diya Prakash", marks: "9.86" }
                ]}
            />

            {/* SE-IT Branch Toppers */}
            <BranchToppers
                title="SE-IT Branch Toppers"
                toppers={[
                    { img: Ankita_Adam, name: "Adam Ankita Ramesh", marks: "10" },
                    { img: sayali_lagad, name: "Lagad Sayali Sunil", marks: "9.98" },
                    { img: Sahil_Katkamwar, name: "Katkamwar Sahil Sanjay", marks: "9.91" },
                    { img: mahi_shahteit, name: "Shah Mahi Mukesh", marks: "9.86" },
                    { img: Sejal_Patil, name: "Patil Sejal Kailas", marks: "9.75" }
                ]}
            />
        </section>
    );
};

const BranchToppers = ({ title, toppers }) => {
    return (
        <div className="branch-toppers">
            <h3 className="branch-title">{title}</h3>
            <div className="toppers-row">
                {toppers.map((topper, index) => (
                    <div className="topper-box" key={index}>
                        <div className="topper-photo">
                            <img src={topper.img} alt={topper.name} />
                        </div>
                        <div className="topper-name-container">
                            <span className="topper-first-names">{topper.name.split(' ').slice(0, -1).join(' ')}</span>
                            <span className="topper-last-name">{topper.name.split(' ').pop()}</span>
                        </div>
                        <p className="topper-marks">{topper.marks}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeToppers;