import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Section08 = ({ MarketingHouseData }) => {
  const [category, setCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (MarketingHouseData) {
      if (category === "All") {
        const allItems = MarketingHouseData.marketing_house.flatMap((cat) =>
          cat.items.map((item) => ({
            id: item.id,
            imgSrc: item.poster_image.startsWith("http")
              ? item.poster_image
              : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.poster_image}`,
            url: item.marketing_house_url,
            category: cat.category_name,
          }))
        );
        setFilteredItems(allItems);
      } else {
        const selectedCategory = MarketingHouseData.marketing_house.find(
          (cat) => cat.category_name === category
        );
        if (selectedCategory) {
          const filtered = selectedCategory.items.map((item) => ({
            id: item.id,
            imgSrc: item.poster_image.startsWith("http")
              ? item.poster_image
              : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.poster_image}`,
            url: item.marketing_house_url,
            category: selectedCategory.category_name,
          }));
          setFilteredItems(filtered);
        } else {
          setFilteredItems([]);
        }
      }
    }
  }, [category, MarketingHouseData]);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-11">
          {" "}
          <p
            className="text-uppercase text-muted mb-3"
            style={{ fontSize: "20px" }}
          >
            LATEST WORK FROM
          </p>
          <h2 className="fw-bold">OUR MARKETING HOUSE</h2>
        </div>
        <div className="col-lg-1">
          {" "}
          <a
            href="/View-all-Series "
            className="ms-auto text-warning text-decoration-none"
          >
            View All
          </a>
        </div>
      </div>

      <div className="d-flex flex-wrap my-3 mb-3">
        <button
          className={`cat-filter-button btn w-auto me-2 ${
            category === "All" ? "btn-warning" : "btn-outline-secondary"
          }`}
          onClick={() => setCategory("All")}
        >
          All
        </button>
        {MarketingHouseData?.marketing_house?.map((cat) => (
          <button
            key={cat.id}
            className={`cat-filter-button btn w-auto me-2 ${
              category === cat.category_name
                ? "btn-warning"
                : "btn-outline-secondary"
            }`}
            onClick={() => setCategory(cat.category_name)}
          >
            {cat.category_name}
          </button>
        ))}
      </div>

      <div className="row mt-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
            >
              <div className="card">
                <Link to={`/${item.id}`}>
                  <img
                    src={item.imgSrc}
                    alt={item.category}
                    className="card-img-top"
                  />
                </Link>
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
