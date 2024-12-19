import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick"; // import react-slick
import "slick-carousel/slick/slick.css"; // slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // slick-theme styles
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CommunityOutreachSlider = ({ SocialWorkData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const sliderRef = useRef(null); // Reference to control the slider
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

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5 position-relative">
      <h6 className="text-uppercase text-muted">Our Latest</h6>
      <h2 className="fw-bold mb-4">Social Work</h2>

      <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
        {categories.map((category, index) => (
          <button
            key={index}
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
      <button
        className="btn btn-warning position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 5 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="btn  btn-warning position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 5 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        <IoIosArrowForward size={30} />
      </button>

      <Slider {...settings} ref={sliderRef} className="social-slider-width">
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
      </Slider>

      <div className="text-center mt-3">
        <Link to="#" className="text-warning fw-bold">
          View All
        </Link>
      </div>
    </div>
  );
};

export default CommunityOutreachSlider;
