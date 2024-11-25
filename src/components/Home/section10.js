import React, { useState } from "react";

const Section10 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const data = [
    {
      id: 1,
      category: "UI UX",
      title: "UI/UX Development",
      imageUrl: "../../Images/developmentHouse.png",
    },
    {
      id: 2,
      category: "LMS",
      title: "LMS Development",
      imageUrl: "../../Images/developmentHouse.png",
    },
    {
      id: 3,
      category: "Website",
      title: "Website Development",
      imageUrl: "../../Images/developmentHouse.png",
    },
    {
      id: 4,
      category: "Mobile & Web Apps",
      title: "App Development",
      imageUrl: "../../Images/developmentHouse.png",
    },
    {
      id: 5,
      category: "MVP",
      title: "MVP Development",
      imageUrl: "../../Images/developmentHouse.png",
    },
    {
      id: 6,
      category: "Custom Softwares",
      title: "Custom Software Development",
      imageUrl: "../../Images/developmentHouse.png",
    },
    // Add more items if needed
  ];

  const categories = [
    "All",
    "UI UX",
    "Website",
    "Mobile & Web Apps",
    "MVP",
    "Custom Softwares",
  ];

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="container my-5">
      <h2 className="fw-bold">LATEST WORK FROM</h2>
      <h3 className="fw-bold">OUR DEVELOPMENT HOUSE</h3>

      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="d-flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${
                selectedCategory === category
                  ? "btn-warning"
                  : "btn-outline-secondary"
              } me-2 mb-2`}
            >
              {category}
            </button>
          ))}
        </div>
        <a href="#view-all" className="text-warning">
          View All
        </a>
      </div>

      <div className="row mt-4">
        {filteredData.map((item) => (
          <div key={item.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <a href="#explore" className="btn btn-dark">
                  Explore Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section10;
