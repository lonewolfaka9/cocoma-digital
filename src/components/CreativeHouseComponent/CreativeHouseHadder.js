import React from "react";

const CreativeProjects = () => {
  return (
    <div
      className="creative-projects d-flex align-items-center text-white"
      style={{
        backgroundImage: `url('../../Images/creativehousebg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4 fw-bold" style={{ color: "white" }}>
              Our Creative House Projects
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur. Pharetra euismod molestie
              maecenas nunc proin. Dolor mattis ut{" "}
              <a href="/" className="text-white text-decoration-underline">
                See More
              </a>
              .
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <h5 className="display-4 fw-bold">20000+</h5>
            <p className="fs-5">Total Videos Produced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeProjects;
