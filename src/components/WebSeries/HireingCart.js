import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

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
    <div className="container-fluid mt-5" style={{ background: "#F7F7F7" }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="fw-bold text-uppercase">Pre-Launch Activities</h2>
          </div>
        </div>
        <div className="rounded p-5">
          {filteredData.length > 0 ? (
            <div>
              <div className="row">
                <div className="col-md-7 pt-5">
                  <h2 className="fw-bold">
                    {filteredData[currentIndex]?.title}
                  </h2>
                  <p className="pt-3">
                    {filteredData[currentIndex]?.description}
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={filteredData[currentIndex]?.image}
                    alt={filteredData[currentIndex]?.title}
                    className="img-fluid rounded summary-images"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn monthly-performance-left-btn me-3"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <IoMdArrowBack />
                </button>
                <button
                  className="btn monthly-performance-right-btn"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <IoMdArrowForward />
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center">No items available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HireingCard;
