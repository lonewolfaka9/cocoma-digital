import React from "react";

const ClientRequirement = ({ itemData }) => {
  return (
    <div className="container py-5">
      {/* Client Requirement Section */}
      <section className="text-center">
        <h2 className="fw-bold">Client Requirement</h2>
        <p className="mb-4">{itemData.client_requirement_text}</p>

        {/* Objectives */}
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column align-items-center text-center">
              <div
                className="bg-dark text-white rounded-pill d-flex justify-content-center align-items-center mb-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="fw-bold">1</span>
              </div>
              <p className="m-0">{itemData.client_requirement_1}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column align-items-center text-center">
              <div
                className="bg-dark text-white rounded-pill d-flex justify-content-center align-items-center mb-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="fw-bold">2</span>
              </div>
              <p className="m-0">{itemData.client_requirement_2}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column align-items-center text-center">
              <div
                className="bg-dark text-white rounded-pill d-flex justify-content-center align-items-center mb-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="fw-bold">3</span>
              </div>
              <p className="m-0">{itemData.client_requirement_3}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column align-items-center text-center">
              <div
                className="bg-dark text-white rounded-pill d-flex justify-content-center align-items-center mb-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="fw-bold">4</span>
              </div>
              <p className="m-0">{itemData.client_requirement_4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas, Strategy & Planning */}
      <section className="row mt-5 align-items-center">
        <div className="col-12 col-md-6 order-2 order-lg-1 order-md-1">
          <h3 className="fw-bold">{itemData.ideas_strategy_planning_title}</h3>
          <p>{itemData.ideas_strategy_planning_description}</p>
        </div>
        <div className="col-12 col-md-6 text-center order-1 order-lg-2 order-md-2">
          <img
            src={itemData.ideas_strategy_planning_image}
            alt={itemData.ideas_strategy_planning_title}
            className="img-fluid rounded"
          />
        </div>
      </section>
    </div>
  );
};

export default ClientRequirement;
