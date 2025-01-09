import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";

const Section11 = ({ MonthlyPerformanaceData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    MonthlyPerformanaceData[0]?.mps_category_name || ""
  );

  // Filter items by the selected category
  const filteredCategory = MonthlyPerformanaceData.find(
    (category) => category.mps_category_name === selectedCategory
  );
  const filteredData = filteredCategory?.mps_items || [];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredData.length) % filteredData.length
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reset index when category changes
  };

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-lg-9">
          <h3 className="fw-bold">MONTHLY PERFORMANCE SHOWCASE</h3>
        </div>
        <div className="col-lg-3">
          <div className="d-flex text-center justify-content-end">
            <RxCountdownTimer size={30} />
            <select
              className="form-select "
              style={{ border: "none " }}
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {MonthlyPerformanaceData.map((category) => (
                <option key={category.id} value={category.mps_category_name}>
                  {category.mps_category_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="border rounded p-4" style={{ background: "#F1F1F1" }}>
        {filteredData.length > 0 ? (
          <div>
            <div className="row">
              <div className="col-md-8">
                <h2 className="fw-bold">
                  {filteredData[currentIndex]?.mps_title}
                </h2>
                <p className="pt-3">
                  {filteredData[currentIndex]?.mps_description}
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={filteredData[currentIndex]?.mps_img}
                  alt={filteredData[currentIndex]?.mps_title}
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

export default Section11;
