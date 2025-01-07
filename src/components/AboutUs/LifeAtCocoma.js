import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LifeAtCocoma = () => {
  const [filter, setFilter] = useState("All");

  // Slider data
  const slides = [
    { id: 1, category: "Social Work", image: "/Images/about/aboutStory.png" },
    { id: 2, category: "Education", image: "/Images/about/aboutStory.png" },
    { id: 3, category: "Environment", image: "/Images/about/aboutStory.png" },
    { id: 4, category: "Social Work", image: "/Images/about/aboutStory.png" },
    { id: 5, category: "Education", image: "/Images/about/aboutStory.png" },
    { id: 6, category: "Environment", image: "/Images/about/aboutStory.png" },
  ];

  // Categories
  const categories = ["All", "Social Work", "Education", "Environment"];

  // Filtering logic
  const filteredSlides =
    filter === "All"
      ? slides
      : slides.filter((slide) => slide.category === filter);

  // Slider settings for categories
  const categorySliderSettings = {
    infinite: false,
    slidesToShow: categories.length > 7 ? 3 : categories.length, // Dynamically adjust to number of items
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 5 } },
      { breakpoint: 576, settings: { slidesToShow: 3 } },
    ],
  };

  // Main slider settings for slides
  const mainSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-center">Life at Cocoma</h1>
        <p className="text-muted">
          Lorem Ipsum Dolor Sit Amet Consectetur. Non Tortor Malesuada Lectus
          Libero. Ipsum Commodo Pellentesque Elementum Ut.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="mb-4">
        <Slider {...categorySliderSettings} className="SliderCustom-width">
          {categories.map((category) => (
            <button
              key={category}
              className={` btn w-auto  ${
                filter === category ? "btn-dark" : "btn-light"
              } mx-2`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>

      {/* Slides */}
      {filter === "All" ? (
        <Slider {...mainSliderSettings}>
          {filteredSlides.map((slide) => (
            <div key={slide.id} className="px-3">
              <div className="card border-0 shadow-sm">
                <img
                  src={slide.image}
                  className="card-img-top"
                  alt={slide.category}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{slide.category}</h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="row">
          {filteredSlides.map((slide) => (
            <div key={slide.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src={slide.image}
                  className="card-img-top"
                  alt={slide.category}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{slide.category}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LifeAtCocoma;
