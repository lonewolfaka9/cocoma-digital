import React, { useState, useEffect } from "react";

const Section08 = ({ MarketingHouseData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (
      MarketingHouseData?.marketting_house &&
      Array.isArray(MarketingHouseData.marketting_house)
    ) {
      // Extract unique categories
      const allCategories = [
        "All",
        ...MarketingHouseData.marketting_house.map(
          (cat) => cat.marketting_house_category_name
        ),
      ];
      setCategories(allCategories);

      // Flatten items into a single array
      const allItems = MarketingHouseData.marketting_house.flatMap((cat) =>
        cat.items.map((item) => ({
          id: item.id,
          imgSrc: item.marketting_house_img.startsWith("http")
            ? item.marketting_house_img
            : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.marketting_house_img}`,
          url: item.marketting_house_url,
          category: cat.marketting_house_category_name,
        }))
      );

      setFilteredItems(allItems);
    }
  }, [MarketingHouseData]);

  const handleFilter = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      // Show all items
      const allItems = MarketingHouseData.marketting_house.flatMap((cat) =>
        cat.items.map((item) => ({
          id: item.id,
          imgSrc: item.marketting_house_img.startsWith("http")
            ? item.marketting_house_img
            : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.marketting_house_img}`,
          url: item.marketting_house_url,
          category: cat.marketting_house_category_name,
        }))
      );
      setFilteredItems(allItems);
    } else {
      // Filter items by category
      const filtered = MarketingHouseData.marketting_house
        .filter((cat) => cat.marketting_house_category_name === category)
        .flatMap((cat) =>
          cat.items.map((item) => ({
            id: item.id,
            imgSrc: item.marketting_house_img.startsWith("http")
              ? item.marketting_house_img
              : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.marketting_house_img}`,
            url: item.marketting_house_url,
            category: cat.marketting_house_category_name,
          }))
        );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="container my-4">
      <h4 className="">LATEST WORK FROM</h4>
      <h1 className="fw-bold">OUR MARKETING HOUSE</h1>

      {/* Filter buttons */}
      <div className="d-flex flex-wrap justify-content-center my-3 mb-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn mx-1 mb-2 ${
              selectedCategory === category ? "btn-warning" : "btn-light"
            }`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of items */}
      <div className="row mt-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
            >
              <div className="card">
                <img
                  src={item.imgSrc}
                  alt={item.category}
                  className="card-img-top"
                />
                {/* <div className="card-body">
                  <h5 className="card-title text-center">{item.category}</h5>
                  <a
                    href={item.url}
                    className="btn btn-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View More
                  </a>
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items available</p>
        )}
      </div>
    </div>
  );
};

export default Section08;
