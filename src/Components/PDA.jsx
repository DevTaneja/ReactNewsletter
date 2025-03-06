import React from 'react'
import PDA from "../assets/img/PDA.jpg";
import Image1 from "../assets/img/oop1.png";
import Image2 from "../assets/img/oop2.jpg";
import Image3 from "../assets/img/oop3.jpg";
import Image4 from "../assets/img/oop4.jpg";

const Pda = ()=> {
    return ( <section className="PDA">
        <h2 id="indexx">PDA</h2>
        <img src={PDA}></img>
    
       <h2>OOP Challenge Quest: An OOP Coding Competition</h2>
       
        
       
       <article>
  <section className="article-section">
    <div className="column left-column">
      <img src={Image1} alt="Competition Scene 1" />
      <img src={Image2} alt="Competition Scene 2" />
    </div>

    <div className="column middle-column">
      <p><strong>Date:</strong> 20th September, 2024</p>

      <h3>Objective of the Session:</h3>
      <ul>
        <li>To help students get familiar with the HackerRank platform and its features.</li>
        <li>To provide guidance and tips for effectively tackling coding challenges and competitive programming questions.</li>
        <li>Students will learn the importance of time management during coding competitions, as they will be given limited time to solve each problem.</li>
        <li>To promote healthy competition and peer learning among our students.</li>
        <li>To encourage students to participate in coding contests and competitions.</li>
        <li>To equip students with skills and knowledge that will be valuable in their internship and placement opportunities.</li>
      </ul>
      <div className='flexboxx'>
      <p><strong>Platform:</strong> HackerRank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Number of Participants:</strong> 375</p>
      </div>
      <p></p>
    </div>

    <div className="column right-column">
      <img src={Image3} alt="Competition Scene 3" />
      <img src={Image4} alt="Competition Scene 4" />
    </div>
  </section>
</article>  
   </section>)
}

export default Pda 