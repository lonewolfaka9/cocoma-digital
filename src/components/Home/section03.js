import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Section03 = ({ ServidcesToShow }) => {
  const services = ServidcesToShow.services || [];
  const [activeTab, setActiveTab] = useState(services[0]?.id);
  const activeCategory = services.find((category) => category.id === activeTab);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12">
          <center>
            <p style={{ fontSize: "40px", fontWeight: 500 }}>
              EXPLORE OUR SERVICES
            </p>
          </center>

          <div className="tab-buttons d-flex justify-content-center mt-4 flex-wrap">
            {ServidcesToShow.services.slice(0, 3).map((category) => (
              <button
                key={category.id}
                className={`tab-button ${
                  activeTab === category.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.service_category_name}
              </button>
            ))}
          </div>
        </div>
      </div>

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
