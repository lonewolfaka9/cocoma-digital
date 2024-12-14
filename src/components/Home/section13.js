import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const CommunityOutreachSlider = ({ SocialWorkData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (SocialWorkData?.social_work) {
      const allCategories = [
        "All",
        ...new Set(
          SocialWorkData.social_work.map((cat) => cat.social_work_category_name)
        ),
      ];
      setCategories(allCategories);
      setFilteredItems(SocialWorkData.social_work);
    }
  }, [SocialWorkData]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(SocialWorkData.social_work);
    } else {
      const categoryData = SocialWorkData.social_work.find(
        (cat) => cat.social_work_category_name === selectedCategory
      );
      setFilteredItems(categoryData ? [categoryData] : []);
    }
  }, [selectedCategory, SocialWorkData]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container my-5">
      <h6 className="text-uppercase text-muted">Our Latest</h6>
      <h2 className="fw-bold mb-4">Social Work</h2>

      <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
        {categories.map((category, index) => (
          <button
            key={index} // Use index if `category` values are unique
            onClick={() => setSelectedCategory(category)}
            className={`btn ${
              selectedCategory === category ? "btn-warning" : "btn-light"
            } me-2 mb-2 mb-sm-0`}
            style={{ minWidth: "100px" }}
          >
            {category}
          </button>
        ))}
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        arrows={true}
      >
        {filteredItems.length > 0 ? (
          filteredItems.flatMap((category) =>
            category.items.map((item) => (
              <div
                key={`${category.social_work_category_name}-${item.id}`}
                className="p-2"
              >
                <img
                  className="d-block w-100 rounded"
                  src={item.social_work_img}
                  alt={item.social_work_title}
                  onError={(e) =>
                    (e.target.src = "../../Images/default-image.svg")
                  }
                />
                <h5 className="mt-3">{item.social_work_title}</h5>
              </div>
            ))
          )
        ) : (
          <div className="text-center">
            <p className="text-muted">No items available for this category.</p>
          </div>
        )}
      </Carousel>

      <div className="text-center mt-3">
        <Link to="#" className="text-warning fw-bold">
          View All
        </Link>
      </div>
    </div>
  );
};

export default CommunityOutreachSlider;
