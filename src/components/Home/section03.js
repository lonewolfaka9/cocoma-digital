import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section03 = ({ ServidcesToShow }) => {
  const services = ServidcesToShow.services || [];

  // Filter out the category with name "Service Platform"
  const filteredServices = services.filter(
    (category) => category.service_category_name !== "Service Platform"
  );

  const [activeTab, setActiveTab] = useState(filteredServices[0]?.id);
  const activeCategory = filteredServices.find(
    (category) => category.id === activeTab
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          <Slider {...sliderSettings} className="category-slider mt-4">
            {filteredServices.map((category) => (
              <div key={category.id} className="category-slide">
                <button
                  className={`tab-button ${
                    activeTab === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.service_category_name}
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Services Section */}
      <div className="row services mt-4">
        {activeCategory?.service_items?.length > 0 ? (
          activeCategory.service_items.map((service) => (
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
    </div>
  );
};

export default Section03;
