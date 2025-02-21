import React, { useState } from "react";

const events = {
    "2024-07-13": {
      name: "BE-Orientation Session",
      description:
        "The Objective of the session was to understand Project activities, Research Paper writing , tools techniques for project management",
      color: "rgba(71, 215, 255, 0.6)", // Tomato Red with transparency
    },
  
    "2024-07-27": {
      name: "Expert session on tools and techniques on Project Development and Management",
      description:
        "The Objective of the session was to get familiar with Project development and management,and get familiar with tools like Jira, Agile etc.",
      color: "rgba(255, 71, 212, 0.6)", // Tomato Red with transparency
    },
    "2024-07-30": {
      name: "Training Session on 'Get ready for placements'",
      description:
        "The Objective was to create awareness about the placement and internship process , to provide guidance for Interview prepration, amcat and aptitude tests , and inspire students to take proactive steps to achieve thier future goals",
      color: "rgba(71, 255, 77, 0.6)", // Tomato Red with transparency
    },
    "2024-07-31": {
      name: "Training Session on 'Get ready for placements'",
      description:
        "The Objective was to create awareness about the placement and internship process , to provide guidance for Interview prepration, amcat and aptitude tests , and inspire students to take proactive steps to achieve thier future goals",
      color: "rgba(71, 255, 77, 0.6)", // Tomato Red with transparency
    },
  
    "2024-08-12": {
      name: "Resume Writing and AWS Cloud Fundamentals Bootcamp",
      description:
        "Learn how to write an effective resume.",
      color: "rgba(255, 99, 71, 0.6)", // Tomato Red with transparency
    },
    "2024-08-20": {
        name: "Flipped Classroom DSA in SE-10",
        description:
          " Student will be able to employ Fibonacci search method on the given set of numbers, test various test cases..",
        color: "rgba(255, 71, 246, 0.6)",
      },
      "2024-08-30": {
        name: "Goal Setting and Self-Regulation ",
        description:
          " Empower students to take control of their learning and career path, ensuring continuous growth and development in the ever-evolving IT field.",
        color: "rgba(249, 163, 33, 0.6)",
      },
  
      "2024-08-31": {
        name: "Insem Exam (TE/BE)",
        description:
          "The Insem exams of Third Year and Fourth Year students started.",
        color: "rgba(33, 249, 141, 0.6)",
      },
  
      "2024-09-02": {
        name: "Insem Exam (TE/BE)",
        description:
          "The Insem exams of Third Year and Fourth Year students .",
        color: "rgba(33, 249, 141, 0.6)",
      },
  
      "2024-09-03": {
        name: "Insem Exam (TE/BE)",
        description:
          "The Insem exams of Third Year and Fourth Year students .",
        color: "rgba(249, 33, 33, 0.6)",
      },
      "2024-09-04": {
        name: "Insem Exam (TE/BE)",
        description:
          "The Insem exams of Third Year and Fourth Year students .",
        color: "rgba(227, 33, 249, 0.6)",
      },
  
      "2024-09-05": {
        name: "Insem Exam (TE/BE)",
        description:
          "The Insem exams of Third Year and Fourth Year students .",
        color: "rgba(224, 249, 33, 0.6)",
      },
  
      "2024-09-06": {
        name: "Insem Exam (TE/BE)",
        description:
          "The Insem exams of Third Year and Fourth Year students .",
        color: "rgba(33, 123, 249, 0.6)",
      },
    
    "2024-09-06": {
      name: "Stress Management",
      description:
        "The workshop aimed to equip students with creating awareness and importance of yoga for peaceful body and mind and how it helps in managing stress and anxiety and keeps you relaxing.",
      color: "rgba(145, 255, 71, 0.6)", // Tomato Red with transparency
    },
  
    "2024-09-13": {
      name: "Technical Dumb Charades",
      description:
        "As part of Paperless Day, the event Technical Dumb Charades was organized to foster creative learning and engagement among students.",
      color: "rgba(154, 71, 255, 0.6)", // Tomato Red with transparency
    },
  
    "2024-09-11": {
      name: "Aptitude Quiz ",
      description:
        "The Aptitude quiz was organized by the PDA.",
      color: "rgba(72, 253, 193, 0.6)", // Green with transparency
    },
  
    "2024-09-19": {
      name: "Art of Smart Work",
      description: "A workshop on productivity and smart work techniques.",
      color: "rgba(255, 165, 0, 0.6)", // Orange with transparency
    },
    "2024-09-30": {
      name: "Zonal BB",
      description: "A sports event at the zonal level.",
      color: "rgba(34, 193, 195, 0.6)", // Turquoise with transparency
    },
  
    "2024-09-20": {
      name: "OOP Challenge quest : An OOP coding Competition ",
      description:
        "The session focuses on familiarizing students with HackerRank, improving their coding challenge skills, and preparing them for competitive programming and future career opportunities. ",
      color: "rgba(253, 72, 72, 0.6)", // Tomato Red with transparency
    },
  
  
    "2024-09-21": {
      name: "Session on Cracking Internships and  Placements : A strategic Guide ",
      description:
        "The Objective was to inspire and motive students through various success stories and provide insights into how to fetch into the job opportunities",
      color: "rgba(71, 255, 77, 0.6)", // Tomato Red with transparency
    },
  
  
    "2024-09-24": {
      name: "Expert session on Quality Research Publication techniques",
      description:
        "The Objective of the session was to understand  Research Paper writing, tools and techniques for project management",
      color: "rgba(255, 71, 212, 0.6)", // Tomato Red with transparency
    },
  
    "2024-10-13": {
      name: "Algomania",
      description:
        "To build momentum toward achieving greater competitive programming & DSA goals.To find strong core motivation to solve problems daily and progress in the journey of DSA.",
      color: "rgba(154, 71, 255, 0.6)", // Tomato Red with transparency
    },
    
      "2024-10-13": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)", // Tomato Red with transparency
      },
      "2024-10-14": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-15": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-16": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-17": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-18": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-19": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-20": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-21": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-22": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-23": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-24": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-25": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-26": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-27": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-28": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-29": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-30": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
      "2024-10-31": {
        name: "Algomania",
        description:
          "To build momentum toward achieving greater competitive programming & DSA goals. To find strong core motivation to solve problems daily and progress in the journey of DSA.",
        color: "rgba(154, 71, 255, 0.6)",
      },
  
    
    "2024-10-03": {
      name: "Career in VLSI",
      description: "A session on career opportunities in VLSI.",
      color: "rgba(253, 108, 158, 0.6)", // Pink with transparency
    },
    "2024-11-25": {
      name: "AI Bootcamp",
      description: "An intensive AI workshop for beginners and professionals.",
      color: "rgba(75, 0, 130, 0.6)", // Indigo with transparency
    },
    
     
      
        "2024-11-28": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-11-29": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-11-30": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-02": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-03": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-04": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-05": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-06": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-07": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-09": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-10": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-11": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-12": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-13": { "name": "Endsem Exams", "description": "Endsem exams for SE/TE/BE.", "color": "rgba(0, 255, 255, 0.4)" }, 
        "2024-12-14": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-17": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-17": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-16": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-18": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-19": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-20": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-21": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" }, 
        "2024-12-23": { "name": "Practical Exams", "description": "Practical Exams for SE/BE/TE.", "color": "rgba(255, 0, 43, 0.5)" },
      
    
    "2024-12-15": {
      name: "Hackathon Finale",
      description: "The grand finale of the annual hackathon.",
      color: "rgba(0, 255, 255, 0.6)", // Cyan with transparency
    },
  };
  
 
  
  const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(6); // July
    const [currentYear] = useState(2024);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const handlePrevMonth = () => {
      if (currentMonth > 6) setCurrentMonth(currentMonth - 1);
    };
  
    const handleNextMonth = () => {
      if (currentMonth < 11) setCurrentMonth(currentMonth + 1);
    };
  
    const handleEventClick = (eventKey) => {
      if (events[eventKey]) {
        setSelectedEvent(events[eventKey]);
      }
    };
  
    const closeModal = () => {
      setSelectedEvent(null);
    };
  
    const renderCalendar = () => {
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const days = [];
  
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const eventKey = `${currentYear}-${String(currentMonth + 1).padStart(
          2,
          "0"
        )}-${String(day).padStart(2, "0")}`;
        const eventData = events[eventKey];
  
        days.push(
          <div
            key={day}
            className={`calendar-day ${eventData ? "event-day" : ""}`}
            style={{
              backgroundColor: eventData ? eventData.color : "white",
              cursor: eventData ? "pointer" : "default",
            }}
            onClick={() => eventData && handleEventClick(eventKey)}
          >
            {day}
          </div>
        );
      }
  
      return days;
    };
  
    return (
      <section id="calendar">
        <div className="page-2 newspaper-theme">
          <h2 className="section-title">
            Activities Conducted from 1st July 2024 to 30th September 2024
          </h2>
          <div className="calendar-container">
            <div className="calendar-header">
              <button
                className="prev-month"
                onClick={handlePrevMonth}
                disabled={currentMonth === 6}
              >
                ❮
              </button>
              <h2 className="calendar-title">
                {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <button
                className="next-month"
                onClick={handleNextMonth}
                disabled={currentMonth === 11}
              >
                ❯
              </button>
            </div>
            <div className="calendar-days">
              <div className="day-label">Sun</div>
              <div className="day-label">Mon</div>
              <div className="day-label">Tue</div>
              <div className="day-label">Wed</div>
              <div className="day-label">Thu</div>
              <div className="day-label">Fri</div>
              <div className="day-label">Sat</div>
            </div>
            <div id="calendar-grid">{renderCalendar()}</div>
          </div>
        </div>
  
        {selectedEvent && (
          <div className="calendar-popup-overlay" onClick={closeModal}>
            <div
              className="calendar-popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close-popup" onClick={closeModal}>
                ×
              </span>
              <h3>{selectedEvent.name}</h3>
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        )}
      </section>
    );
  };
  
  export default Calendar;
  
  