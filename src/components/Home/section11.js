import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Section11 = () => {
  const data = [
    {
      id: 1,
      title: "Summary",
      description:
        "We strategically released the launch date through a dramatic video that played on audience suspense, ensuring the news went viral.We strategically released the launch date through a dramatic video that played on audience suspense, ensuring the news went viral.",
      image: "../../Images/summary.png", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Summary",
      description:
        "We strategically released the launch date through a dramatic video that played on audience suspense, ensuring the news went viral.We strategically released the launch date through a dramatic video that played on audience suspense, ensuring the news went viral.",
      image: "../../Images/videosthumb.png", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Summary",
      description:
        "We strategically released the launch date through a dramatic video that played on audience suspense, ensuring the news went viral.We strategically released the launch date through a dramatic video that played on audience suspense, ensuring the news went viral.",
      image: "../../Images/summary.png", // Replace with actual image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler to go to the next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Handler to go to the previous item
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="fw-bold">MONTHLY PERFORMANCE SHOWCASE</h2>
        </div>
        <div className="col-lg-4">
          <div className="d-flex justify-content-end ">
            <p className="text-muted mb-0">June–August 2024 Highlights</p>
          </div>
        </div>
      </div>
      <div className="border rounded p-4" style={{ background: "#F1F1F1" }}>
        <div className="row">
          <div className="col-md-8">
            <h2 className="fw-bold">{data[currentIndex].title}</h2>
            <p className="pt-3">{data[currentIndex].description}</p>
          </div>
          <div className="col-md-4">
            <img
              src={data[currentIndex].image}
              alt="Performance Showcase"
              className="img-fluid rounded summary-images"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button
            className="btn btn-light me-2"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <FaAngleLeft />
          </button>
          <button
            className="btn btn-light"
            onClick={handleNext}
            aria-label="Next"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section11;
