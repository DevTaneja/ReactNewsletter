import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import OmNikam from "../assets/img/Om_Nikam.jpeg";
import VishalPatil from "../assets/img/Vishal_Patil.jpg";
import AnkurMusmade from "../assets/img/ankur_musmade.jpg";
import RajNirankari from "../assets/img/raj_nirankari.jpg";

import AniketHend from '../assets/img/Aniket_Hend.jpg';
// import AtharvaDingare from '../assets/img/Atharva_Dingare.JPG';
const AtharvaDingare = new URL("../assets/img/Atharva_Dingare.JPG", import.meta.url).href;

const Placements = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const companyNames = [
    "PhonePe",
    "Arista",
    "BNY Mellon",
    "ION",
    "Ittiam Systems Pvt Ltd",
    "BMC",
    "ZS Associates",
    "MasterCard",
    "Barclays",
    "ACI Worldwide",
    "HSBC",
    "Merilytics",
  ];

  const packagesOffered = [
    33.54, 29.44, 21.64, 17.3, 16, 14, 13.65, 13.6, 13, 12.3, 9, 8.5,
  ];

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: companyNames,
          datasets: [
            {
              label: "Package Offered (LPA)",
              data: packagesOffered,
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000,
            easing: "easeInOutQuad",
          },
          scales: {
            x: {
              title: { display: true, text: "Company Name" },
              ticks: { autoSkip: false },
            },
            y: {
              title: { display: true, text: "Package Offered (LPA)" },
            },
          },
        },
      });
    }
  }, []);

  return (
    <section id="placements">
      <h2 className="section-title">Placements Overview</h2>
      <h2>Placement Statistics</h2>
      <span id="subHeading">
        Out of <b>255</b> total students, <b>129</b> have been placed.
      </span>

      <div className="chart-container" style={{ height: "500px" }}>
        <canvas ref={chartRef}></canvas>
      </div>

      <div className="table-container">
        <table id="placements-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Package (LPA)</th>
            </tr>
          </thead>
          <tbody>
            {companyNames.map((company, index) => (
              <tr key={index}>
                <td>{company}</td>
                <td>{packagesOffered[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {[  
        {
          title: "Placed in PhonePe",
          package: "₹33 LPA",
          students: [
            { name: "Atharva Dingare", img: AtharvaDingare },
            { name: "Aniket Hend", img: AniketHend },
          ],
        },
        {
          title: "Placed in ARISTA",
          package: "₹29.44 LPA",
          students: [
            { name: "Om Nikam", img: OmNikam },
            { name: "Vishal Patil", img: VishalPatil },
            { name: "Ankur Musmade", img: AnkurMusmade},
            { name: "Raj Nirankari", img: RajNirankari },
          ],
        },
      ].map((placement, index) => (
        <div key={index} className="phonepe-placement">
          <h3 className="phonepe-title">{placement.title}</h3>
          <div className="phonepe-student-container">
            {placement.students.map((student, idx) => (
              <div className="student-box" key={idx}>
                <div className="student-photo">
                  <img src={student.img} alt={student.name} loading="lazy" />
                </div>
                <div className="student-details">
                  <p className="student-name">{student.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="placement-package">
            <p className="package-text">Package: {placement.package}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Placements;
