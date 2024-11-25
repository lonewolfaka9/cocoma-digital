import React, { useState } from "react";

const servicesData = {
  content: [
    {
      title: "Video Production & Editing Services",
      img: "../../Images/image(2).svg",
    },
    {
      title: "Podcasts Planning Production And Editing",
      img: "../../Images/video-production.svg",
    },
    { title: "Design Services", img: "../../Images/image(1).svg" },
    { title: "Live Matches", img: "../../Images/image(4).svg" },
    { title: "Motion Graphics", img: "../../Images/image(5).svg" },
    { title: "Post Production", img: "../../Images/image(6).svg" },
  ],
  performance: [
    { title: "SEO Optimization", img: "../../Images/image(2).svg" },
    { title: "Content Marketing", img: "../../Images/image(2).svg" },
    { title: "Social Media Marketing", img: "../../Images/image(2).svg" },
  ],
  itServices: [
    { title: "Web Development", img: "../../Images/image(1).svg" },
    { title: "App Development", img: "../../Images/image(1).svg" },
    { title: "Cloud Solutions", img: "../../Images/image(1).svg" },
  ],
};

const Section03 = () => {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12">
          <center>
            <h1>EXPLORE OUR SERVICES</h1>
          </center>
          <div className="tab-buttons d-flex justify-content-center mt-4 flex-wrap">
            <button
              className={`tab-button ${
                activeTab === "content" ? "active" : ""
              }`}
              onClick={() => setActiveTab("content")}
            >
              Content Services
            </button>
            <button
              className={`tab-button ${
                activeTab === "performance" ? "active" : ""
              }`}
              onClick={() => setActiveTab("performance")}
            >
              Performance & Marketing Services
            </button>
            <button
              className={`tab-button ${
                activeTab === "itServices" ? "active" : ""
              }`}
              onClick={() => setActiveTab("itServices")}
            >
              IT, Web & Apps Services
            </button>
          </div>
        </div>
      </div>
      <div className="row services mt-4">
        {servicesData[activeTab].map((service, index) => (
          <div key={index} className="col-md-4 col-lg-4 col-sm-6 mt-5">
            <div className="service-card pb-4 text-center">
              <img
                src={service.img}
                alt={service.title}
                className="service-image"
              />
              <h3>{service.title}</h3>
              <button className="explore-button">Explore Now &#8594;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section03;
