import React, { useState, useEffect } from "react";

const Section10 = ({ DevelopmentHouseData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Extract categories from DevelopmentHouseData
    if (DevelopmentHouseData?.development_house) {
      const allCategories = [
        "All",
        ...DevelopmentHouseData.development_house.map(
          (cat) => cat.development_house_category_name
        ),
      ];
      setCategories(allCategories);
      setFilteredItems(DevelopmentHouseData.development_house);
    }
  }, [DevelopmentHouseData]);

  useEffect(() => {
    // Filter items based on the selected category
    if (selectedCategory === "All") {
      setFilteredItems(DevelopmentHouseData.development_house);
    } else {
      const categoryData = DevelopmentHouseData.development_house.find(
        (cat) => cat.development_house_category_name === selectedCategory
      );
      setFilteredItems(categoryData ? [categoryData] : []);
    }
  }, [selectedCategory, DevelopmentHouseData]);

  return (
    <div className="container my-5">
      <h2 className="fw-bold">LATEST WORK FROM</h2>
      <h3 className="fw-bold">OUR DEVELOPMENT HOUSE</h3>

      {/* Category Buttons */}
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

      {/* Grid of Items */}
      <div className="row mt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((category) =>
            category.items.length > 0 ? (
              category.items.map((item) => (
                <div key={item.id} className="col-md-4 col-sm-6 col-12 mb-4">
                  <div className="card h-100">
                    <img
                      src={item.development_house_img}
                      className="card-img-top"
                      alt="Development Work"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Development Work</h5>
                      <a
                        href={item.development_house_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                      >
                        Explore Now <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div key={category.id} className="col-12 text-center">
                <p className="text-muted">
                  No items available in{" "}
                  {category.development_house_category_name}.
                </p>
              </div>
            )
          )
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No items available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section10;
