import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";

const HireingCard = ({ itemData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredData = itemData.pre_launch_activity;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredData.length) % filteredData.length
    );
  };

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-lg-12 text-center">
          <h3 className="fw-bold">Pre-Launch Activities</h3>
        </div>
      </div>
      <div className="border rounded p-4" style={{ background: "#F1F1F1" }}>
        {filteredData.length > 0 ? (
          <div>
            <div className="row">
              <div className="col-md-8">
                <h2 className="fw-bold">{filteredData[currentIndex]?.title}</h2>
                <p className="pt-3">
                  {filteredData[currentIndex]?.description}
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={filteredData[currentIndex]?.image}
                  alt={filteredData[currentIndex]?.title}
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
        ) : (
          <p className="text-center">No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default HireingCard;
