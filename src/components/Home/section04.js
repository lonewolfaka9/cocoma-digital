import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Section04 = ({ ServidcesToShow }) => {
  const services = ServidcesToShow.services || [];

  // Filter to get only the "Service Platform" category
  const servicePlatform = services.find(
    (category) => category.service_category_name === "Service Platform"
  );

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12">
          <center>
            <h1 className="all-service-heading-home">
              Our Services By Platform
            </h1>
          </center>
        </div>
      </div>

      {/* Render services for the "Service Platform" category */}
      <div className="row services mt-1">
        {servicePlatform?.service_items?.length > 0 ? (
          servicePlatform.service_items.map((service) => (
            <div className="col-md-6 col-lg-4 col-sm-6  col-xs-6 col-6 mt-5" key={service.id}>
              <div className="service-card pb-4 text-center">
                <Link to={`service/${service.id}`} style={{ width: "100%" }}>
                  <img
                    src={service.service_image}
                    alt={service.service_title}
                    className="service-image"
                  />
                </Link>
                <h3>{service.service_title}</h3>
                <Link to={`service/${service.id}`}>
                  <button className="explore-button">
                    {service.service_button_text} <GoArrowUpRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">
            No services available for "Service Platform".
          </p>
        )}
      </div>
    </div>
  );
};

export default Section04;
