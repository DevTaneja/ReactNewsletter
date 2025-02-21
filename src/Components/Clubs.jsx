import React from "react";
import GoalsImage from "/src/assets/img/GoalsandStrengths-removebg.png";
import TechClubsImage from "/src/assets/img/TechCLubsss-removebg.png";
import NonTechClubsImage from "/src/assets/img/clubs111-removebg.png";

const Clubs = () => {
  return (
    <section className="clubs-section">
      <div className="club-row">
        <div className="club-label">GOALS & STRENGTH</div>
        <img src={GoalsImage} alt="Goals and Strength" />
      </div>

      <div className="club-row">
        <div className="club-label">TECHNICAL CLUBS</div>
        <img src={TechClubsImage} alt="Technical Clubs" />
      </div>

      <div className="club-row">
        <div className="club-label">NON-TECHNICAL CLUBS</div>
        <img src={NonTechClubsImage} alt="Non-Technical Clubs" />
      </div>
    </section>
  );
};

export default Clubs;
