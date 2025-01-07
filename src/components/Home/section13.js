import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CommunityOutreachSlider = ({ SocialWorkData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const sliderRef = useRef(null);
  const fixSlickAriaHidden = () => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide) => {
      if (slide.getAttribute("aria-hidden") === "true") {
        slide.setAttribute("inert", "true");
        slide.removeAttribute("aria-hidden");
      } else {
        slide.removeAttribute("inert");
      }
    });
  };

  useEffect(() => {
    fixSlickAriaHidden();
    const observer = new MutationObserver(fixSlickAriaHidden);
    const slider = document.querySelector(".slick-slider");
    if (slider) {
      observer.observe(slider, { attributes: true, subtree: true });
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (SocialWorkData?.social_work) {
      const allCategories = [
        "All",
        ...SocialWorkData.social_work
          .filter((cat) => cat.social_work_category_name !== "All")
          .map((cat) => cat.social_work_category_name),
      ];
      setCategories(allCategories);
      setFilteredItems(SocialWorkData.social_work.flatMap((cat) => cat.items));
    }
  }, [SocialWorkData]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(SocialWorkData.social_work.flatMap((cat) => cat.items));
    } else {
      const categoryData = SocialWorkData.social_work.find(
        (cat) => cat.social_work_category_name === selectedCategory
      );
      setFilteredItems(categoryData?.items || []);
    }
  }, [selectedCategory, SocialWorkData]);

  const settings = {
    infinite: true,
    speed: 500,
    afterChange: fixSlickAriaHidden,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="row">
        <div className="col-lg-11">
          {" "}
          <h3
            className="text-uppercase text-muted mb-3"
            style={{ fontSize: "20px" }}
          >
            LATEST WORK FROM
          </h3>
          <h2 className="fw-bold">Social Work</h2>
        </div>
        <div className="col-lg-1">
          {" "}
          {/* <a
            href="/Creative-House"
            className="ms-auto text-warning text-decoration-none"
          >
            View All
          </a> */}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={` cat-filter-button  btn ${
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
        style={{
          zIndex: 5,
          borderRadius: "50%", // Makes the button circular
          width: "50px", // Adjust width to make it circular
          height: "50px", // Adjust height to make it circular
          display: "flex", // Centers the icon
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        className="btn  btn-warning position-absolute top-50 end-0 translate-middle-y"
        style={{
          zIndex: 5,
          borderRadius: "50%", // Makes the button circular
          width: "50px", // Adjust width to make it circular
          height: "50px", // Adjust height to make it circular
          display: "flex", // Centers the icon
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => sliderRef.current.slickNext()}
      >
        <IoIosArrowForward size={30} />
      </button>

      <Slider {...settings} ref={sliderRef}>
        {filteredItems.map((item) => (
          <div key={item.id} className="p-2">
            <img
              className="d-block w-100 rounded"
              src={item.social_work_img}
              alt={item.social_work_title}
              onError={(e) => (e.target.src = "../../Images/default-image.svg")}
            />
            <h5 className="mt-3">{item.social_work_title}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommunityOutreachSlider;
