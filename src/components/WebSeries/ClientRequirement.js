import React from "react";

const ClientRequirement = ({ itemData }) => {
  return (
    <>
      <section className="container mt-5 mb-5">
        <h2 className="fw-bold text-uppercase">Client Requirement</h2>
        <h5 className="">{itemData.client_requirement_text}</h5>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3 p-5">
            <div className="d-flex flex-column ">
              <div className="bg-dark text-white rounded-pill w-50 d-flex  mb-2">
                <span className="fw-bold d-flex m-3 ">
                  <img src="../../Images/line.svg" />
                </span>
              </div>
              <p className="m-0 text-start ">{itemData.client_requirement_1}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-5">
            <div className="d-flex flex-column ">
              <div className="bg-dark text-white rounded-pill w-50 d-flex  mb-2">
                <span className="fw-bold d-flex m-3">
                  <img src="../../Images/line_2.svg" />
                </span>
              </div>
              <p className="m-0 text-start ">{itemData.client_requirement_2}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-5">
            <div className="d-flex flex-column">
              <div className="bg-dark text-white rounded-pill w-50 d-flex  mb-2">
                <span className="fw-bold d-flex m-3">
                  <img src="../../Images/line3.svg" />
                </span>
              </div>
              <p className="m-0 text-start ">{itemData.client_requirement_3}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-5">
            <div className="d-flex flex-column">
              <div className="bg-dark text-white rounded-pill w-50 d-flex  mb-2">
                <span className="fw-bold d-flex m-3">
                  <img src="../../Images/line4.svg" />
                </span>
              </div>
              <p className="m-0 text-start ">{itemData.client_requirement_4}</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" ideas-planning-container container ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 order-2 order-lg-1 order-md-1">
            <h1 className="fw-bold mt-3">
              {itemData.ideas_strategy_planning_title}
            </h1>
            <p className="mt-3 ideas-planning-text">
              {itemData.ideas_strategy_planning_description}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 text-center order-1 order-lg-2 order-md-2">
            <img
              src={itemData.ideas_strategy_planning_image}
              alt={itemData.ideas_strategy_planning_title}
              className="img-fluid "
              width={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientRequirement;
