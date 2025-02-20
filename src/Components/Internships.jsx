import React from 'react';

const Internships = () => {
  return (
    <section id="internships">
      <h2 className="section-title">Internships Overview</h2>
      <div className="internship-section">
        <div className="internship-container">
          <div className="internship-box">
            <p className="internship-title">Highest Summer Internship Received</p>
            <p className="internship-amount">75K</p>
          </div>
          <div className="internship-box">
            <p className="internship-title">Total Internship Offers Received</p>
            <p className="internship-amount">29*</p>
          </div>
        </div>
        <p className="internship-note">*: ongoing</p>
      </div>
      <table className="internship-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Company</th>
            <th>No. of Students</th>
            <th>Stipend</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, company: "Bajaj Byte Spark", students: 5, stipend: "20,000" },
            { id: 2, company: "Barclays", students: 6, stipend: "75,000" },
            { id: 3, company: "BMC", students: 9, stipend: "8,000" },
            { id: 4, company: "Mastercard", students: 4, stipend: "40,000" },
            { id: 5, company: "Metro-GSC", students: 3, stipend: "10,000" },
            { id: 6, company: "Tracelink", students: 2, stipend: "35,000" },
          ].map((internship) => (
            <tr key={internship.id}>
              <td>{internship.id}</td>
              <td>{internship.company}</td>
              <td>{internship.students}</td>
              <td>{internship.stipend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Internships;
