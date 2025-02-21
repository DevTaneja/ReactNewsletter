import React from "react";
import SIH1 from "/src/assets/img/SIH_1.jpg";
import SIH2 from "/src/assets/img/SIH_2.jpg";
import SIH3 from "/src/assets/img/SIH_3.jpg";
import SIH4 from "/src/assets/img/SIH_4.jpg";
import BasketballVictory from "/src/assets/img/Picture16.jpg";

const Achievements = () => {
  return (
    <section className="achievements">
      <h2 id="indexx">Student Achievements</h2>
      <div className="Grid">
        <div className="student-box-1 achievementBox">
          <div className="grid3x1">
            <img src={SIH1} alt="SIH 2024 Finalists 1" />
            <img src={SIH2} alt="SIH 2024 Finalists 2" />
            <img src={SIH3} alt="SIH 2024 Finalists 3" />
          </div>
          <h4>SIH 2024 Finalists 🎉</h4>
          <p>
            Congratulations to Rudraksh Khandelwal, Aarav Nair, and Naman Labhsetwar for making it to the Smart India
            Hackathon (SIH) Finals! Your hard work and dedication have paid off—wishing you all the best for the final
            round! 🎉🚀
          </p>
        </div>

        <div className="student-box-1 achievementBox">
          <img src={BasketballVictory} alt="Basketball Victory" />
          <h4>Basketball Victory !!!🏀🏀</h4>
          <p>
            Riya Pande (SE 10), Tanaya Akkalkote (TE 10), Mega Nadar (BE 11), Kanak Agarwal (TE 9) and Riya Pendse along
            with the team won the Basketball tournament. Riya Pande also represented SPPU in an event in Gwalior.
          </p>
        </div>

        <div className="student-box-1 achievementBox">
          <img src={SIH4} alt="SIH 2024 Finalists 4" />
          <h4>SIH 2024 Finalists 🎉</h4>
          <p>
            Kartik Sirsilla, Sarish Sonawane, and Sakshi Chougule, along with their team Narcotrace, had the honor of
            participating in the Grand Finale of Smart India Hackathon 2024 held at Oriental Institute of Science and
            Technology, Bhopal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
