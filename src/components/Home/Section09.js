import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
const Section09 = () => {
  const [category, setCategory] = useState("Videos");

  // Sample data for video cards
  const data = [
    { id: 1, category: "Videos", thumbnail: "../../Images/videosthumb.png" },
    { id: 2, category: "Videos", thumbnail: "../../Images/videosthumb.png" },
    { id: 3, category: "Shorts", thumbnail: "../../Images/videosthumb.png" },
    { id: 4, category: "Videos", thumbnail: "../../Images/videosthumb.png" },
    { id: 5, category: "Videos", thumbnail: "../../Images/videosthumb.png" },
    { id: 6, category: "Shorts", thumbnail: "../../Images/videosthumb.png" },
    { id: 7, category: "Videos", thumbnail: "../../Images/videosthumb.png" },
    { id: 8, category: "Videos", thumbnail: "../../Images/videosthumb.png" },
    { id: 9, category: "Shorts", thumbnail: "../../Images/videosthumb.png" },
    {
      id: 10,
      category: "Creatives",
      thumbnail: "../../Images/videosthumb.png",
    },
    // Add more items as needed
  ];

  // Filtered data based on category
  const filteredData = data.filter((item) => item.category === category);

  return (
    <div className="container my-5">
      <h5 className="text-secondary">LATEST WORK FROM</h5>
      <h2 className="fw-bold">OUR CREATIVE HOUSE</h2>

      <div className="d-flex align-items-center my-3">
        <button
          className={`btn me-2 ${
            category === "Videos" ? "btn-warning" : "btn-outline-secondary"
          }`}
          onClick={() => setCategory("Videos")}
        >
          Videos
        </button>
        <button
          className={`btn me-2 ${
            category === "Shorts" ? "btn-warning" : "btn-outline-secondary"
          }`}
          onClick={() => setCategory("Shorts")}
        >
          Shorts
        </button>
        <button
          className={`btn ${
            category === "Creatives" ? "btn-warning" : "btn-outline-secondary"
          }`}
          onClick={() => setCategory("Creatives")}
        >
          Creatives
        </button>
        <a
          href="/view-all"
          className="ms-auto text-warning text-decoration-none"
        >
          View All
        </a>
      </div>

      <div className="row">
        {filteredData.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt="Thumbnail"
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <button className="btn btn-light rounded-circle">
                  <FaPlay className="fs-2" size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section09;
