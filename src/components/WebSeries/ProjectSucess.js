import React from "react";

const ProjectSuccess = () => {
  return (
    <div className="container mb-5 p-0 position-relative">
      {/* Background Image */}
      <img
        src="../../Images/project-banner.svg"
        alt="Project Success Banner"
        className=" project-sucess-bg"
      />

      {/* Text Content Over Image */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white p-3"
        style={{ width: "90%", maxWidth: "800px" }}
      >
        <h1 className="fw-bold mb-4" style={{ color: "white" }}>
          Want to make your project a success?
        </h1>
        <p className="mb-4">
          Let’s chat about how we can help you craft the perfect marketing
          strategy for your film, web-series, or TV show.
        </p>
        <button className="btn btn-warning fw-bold px-4 py-2">
          Book A Call With Us
        </button>
      </div>
    </div>
  );
};

export default ProjectSuccess;
