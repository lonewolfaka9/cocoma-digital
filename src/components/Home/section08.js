import React, { useState } from "react";

const Section08 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample data with categories
  const items = [
    {
      title: "Mirzapur",
      category: "Web Series",
      imgSrc: "../../Images/mirzapur.svg",
    },
    {
      title: "Another Movie",
      category: "Film",
      imgSrc: "../../Images/mirzapur.svg",
    },
    {
      title: "Podcast Show",
      category: "Podcast",
      imgSrc: "../../Images/mirzapur.svg",
    },
    {
      title: "Music Album",
      category: "Music",
      imgSrc: "../../Images/mirzapur.svg",
    },
    {
      title: "TV Show",
      category: "TV Shows",
      imgSrc: "../../Images/mirzapur.svg",
    },
    {
      title: "Live Match",
      category: "Live Matches",
      imgSrc: "../../Images/mirzapur.svg",
    },
    {
      title: "Mirzapur 2",
      category: "Web Series",
      imgSrc: "../../Images/mirzapur.svg",
    },
    // Add more items as needed
  ];

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="container my-4">
      <h2 className="text-center">LATEST WORK FROM</h2>
      <h3 className="text-center">OUR MARKETING HOUSE</h3>

      {/* Filter buttons */}
      <div className="d-flex flex-wrap justify-content-center my-3">
        {[
          "All",
          "Film",
          "Web Series",
          "TV Shows",
          "Podcast",
          "Music",
          "Live Matches",
        ].map((category) => (
          <button
            key={category}
            className={`btn mx-1 mb-2 ${
              selectedCategory === category ? "btn-warning" : "btn-light"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of items */}
      <div className="row">
        {filteredItems.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
            <div className="card">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-center">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section08;
