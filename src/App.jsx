import React from "react";
import AboutUs from "./Components/AboutUs";
import Indexx from "./Components/indexx";
import Achievements from "./Components/Achievements";
import Articles from "./Components/Articles";
import Calendar from "./Components/Calendar";
import FrontPage from "./Components/FrontPage";
import Clubs from "./Components/Clubs";
import Toppers from "./Components/CollegeToppers";
import Footer from "./Components/footer";
import Gallery from "./Components/gallery";
import HOD from "./Components/HOD";
import Internships from "./Components/Internships";
import Main from "./main";
import PDA from "./Components/PDA";
import Placements from "./Components/Placements";
import Projects from "./Components/Projects";
import Report from "./Components/report";
import "./index.css"; // Global CSS for all sections

const App = () => {
  return (
    <div className="container">
      <FrontPage />
      <Indexx/>
      <HOD />
      <Clubs />
      <Achievements />
      <Toppers />
      <Placements />
      <Internships />
      <Projects />
      <Calendar />
      <Gallery />
      <Report />
      <PDA />
      <Articles />
      <div className="container"><button id="bt1">Random button</button></div>
      <AboutUs />
      <Footer />
    </div>
  );
};
console.log("React App is Mounting...");

export default App;
