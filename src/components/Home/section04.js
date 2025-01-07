import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Section04 = ({ ServidcesToShow }) => {
  const services = ServidcesToShow.services || [];

  // Set default active tab to the 3rd index (if it exists)
  const [activeTab, setActiveTab] = useState(
    services[3]?.service_category_name
  );

  const activeCategory = services.find(
    (category) => category.service_category_name === activeTab
  );

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12">
          <center>
            <p
              style={{
                fontSize: "40px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Our Services By Platform
            </p>
          </center>
        </div>
      </div>

      {/* Render services for the active category */}
      <div className="row services mt-1">
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
                <Link to={`service/${service.id}`}>
                  <button className="explore-button">
                    {service.service_button_text} <GoArrowUpRight size={24} />
                  </button>
                </Link>
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

export default Section04;
