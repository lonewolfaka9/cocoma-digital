import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Section03 = ({ ServidcesToShow }) => {
  const services = ServidcesToShow.services || [];
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const [sliderLength, setSliderLength] = useState(0); // Total number of slides

  // Filter out the category with name "Service Platform"
  const filteredServices = services.filter(
    (category) => category.service_category_name !== "Service Platform"
  );

  const [activeTab, setActiveTab] = useState(filteredServices[0]?.id);
  const activeCategory = filteredServices.find(
    (category) => category.id === activeTab
  );

  const [visibleItems, setVisibleItems] = useState(6);

  const showMoreItems = () => {
    setVisibleItems((prev) =>
      Math.min(prev + 3, activeCategory?.service_items?.length || 0)
    );
  };

  const showLessItems = () => {
    setVisibleItems(3);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentSlide(next); // Update current slide on beforeChange
    },
    afterChange: (index) => {
      setCurrentSlide(index); // Set the current slide after change
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12">
          <center>
            <h1 className="all-service-heading-home">EXPLORE OUR SERVICES</h1>
          </center>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-center">
          {/* Custom navigation buttons */}
          <Slider
            {...sliderSettings}
            className="category-slider mt-4"
            ref={setSliderRef}
            afterChange={(index) => setSliderLength(filteredServices.length)}
          >
            {filteredServices.map((category) => (
              <div
                key={category.id}
                className="category-slide position-relative"
              >
                <button
                  className={`tab-button ${
                    activeTab === category.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(category.id);
                    setVisibleItems(3);
                  }}
                >
                  {category.service_category_name}
                </button>
              </div>
            ))}
          </Slider>

          <div className="d-flex justify-content-between mt-3 position-relative">
            <button
              className="btn btn-light custom-prev-btn position-absolute "
              onClick={() => sliderRef?.slickPrev()} // Trigger slickPrev()
              aria-label="Previous"
              disabled={currentSlide === 0} // Disable if on the first slide
            >
              <FaAngleLeft />
            </button>
            <button
              className="btn btn-light custom-next-btn position-absolute "
              onClick={() => sliderRef?.slickNext()} // Trigger slickNext()
              aria-label="Next"
              disabled={currentSlide === filteredServices.length - 1} // Disable if on the last slide
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="row services mt-4">
        {activeCategory?.service_items?.length > 0 ? (
          activeCategory.service_items.slice(0, visibleItems).map((service) => (
            <div className="col-md-6 col-lg-4 col-sm-12 mt-5" key={service.id}>
              <div className="service-card pb-4 text-center">
                <img
                  src={service.service_image}
                  alt={service.service_title}
                  className="service-image"
                />
                <h3>{service.service_title}</h3>
                <button className="explore-button">
                  <Link to={`service/${service.id}`}>
                    {service.service_button_text} <GoArrowUpRight size={24} />
                  </Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">
            No services available for this category.
          </p>
        )}
      </div>

      {/* Show More and Hide Button */}
      <div className="row mt-3">
        <div className="col-lg-12 text-center">
          {visibleItems < (activeCategory?.service_items?.length || 0) ? (
            <button className="show-more-button" onClick={showMoreItems}>
              Show More
            </button>
          ) : (
            <button className="show-less-button" onClick={showLessItems}>
              Hide
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section03;
