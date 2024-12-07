import React from "react";
import "./about.css";

const Timeline = () => {
  const timelineData = [
    {
      year: "2023",
      title: "Chronicles",
      description:
        "M Ipsum Dolor Sit Ametm Ipsum Dolor Sit Amet Consectetur. Non Tortor Malesuada Lectus Libero. Consectetur. Non Tortor Malesuada Lectus Libero.",
    },
    {
      year: "2022",
      title: "Journey",
      description:
        "M Ipsum Dolor Sit Ametm Ipsum Dolor Sit Amet Consectetur. Non Tortor Malesuada Lectus Libero. Consectetur. Non Tortor Malesuada Lectus Libero.",
    },
    {
      year: "2021",
      title: "Milestones",
      description:
        "M Ipsum Dolor Sit Ametm Ipsum Dolor Sit Amet Consectetur. Non Tortor Malesuada Lectus Libero. Consectetur. Non Tortor Malesuada Lectus Libero.",
    },
    {
      year: "2020",
      title: "Evolution",
      description:
        "M Ipsum Dolor Sit Ametm Ipsum Dolor Sit Amet Consectetur. Non Tortor Malesuada Lectus Libero. Consectetur. Non Tortor Malesuada Lectus Libero.",
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">A Brief History</h2>
      <p className="timeline-subtext">
        Lorem Ipsum Dolor Sit Amet Consectetur. Non Tortor Malesuada Lectus
        Libero. Ipsum Commodo Pellentesque Elementum Ut Molestie Neque Mauris.
        Sed Sapien Sed Fringilla Amet.
      </p>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-circle">
              <span className="timeline-year">{item.year}</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-title">{item.title}</div>
              <p className="timeline-description">{item.description}</p>
              <a href="#" className="timeline-link">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
