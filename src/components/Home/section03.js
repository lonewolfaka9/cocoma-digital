import React, { useState } from "react";

const Section03 = ({ ServiceData }) => {
  const services = ServiceData.services || []; // Access the 'services' property or use an empty array
  const [activeTab, setActiveTab] = useState(services[0]?.id); // Default to the first category

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12">
          <center>
            <h1>EXPLORE OUR SERVICES</h1>
          </center>
          {/* Dynamic Tabs */}
          <div className="tab-buttons d-flex justify-content-center mt-4 flex-wrap">
            {services.map((category) => (
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

      {/* Services Based on Active Tab */}
      <div className="row services mt-4">
        {services
          .filter((category) => category.id === activeTab)
          .map((category) =>
            category.items.map((service) => (
              <div className="col-md-4 col-lg-4 col-sm-6 mt-5" key={service.id}>
                <div className="service-card pb-4 text-center">
                  <img
                    src={service.service_image}
                    alt={service.service_title}
                    className="service-image"
                  />
                  <h3>{service.service_title}</h3>
                  <button
                    className="explore-button"
                    onClick={() =>
                      window.open(service.service_button_url, "_blank")
                    }
                  >
                    {service.service_button_text} &#8594;
                  </button>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default Section03;
