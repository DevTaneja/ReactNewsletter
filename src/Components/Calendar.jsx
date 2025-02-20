import React, { useEffect } from 'react';

const Calendar = () => {
    console.log("hi");
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/script.js"; // Path to your script in public folder
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script); // Cleanup when component unmounts
        };
    }, []);

    return (
        <section id="calendar">
            <div className="page-2 newspaper-theme">
                <h2 className="section-title">
                    Activities Conducted from 1st July 2024 to 30th September 2024
                </h2>
                <div className="calendar-container">
                    <div className="calendar-header">
                        <button id="prev-month">❮</button>
                        <h2 id="month-year">August 2024</h2>
                        <button id="next-month">❯</button>
                    </div>
                    <div className="days-row">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div id="calendar-grid"></div>
                    <div id="event-modal" className="modal">
                        <div className="modal-content">
                            <span className="close-button" id="close-modal">×</span>
                            <h3 id="event-title"></h3>
                            <p id="event-description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calendar;
