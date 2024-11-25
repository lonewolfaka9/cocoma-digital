import React from "react";

const Section01 = () => {
  return (
    <div className="youtube-service container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 text-center text-md-start">
          <h2 className="fw-bold mt-5">
            YouTube Services To Boost Your Channel's Success
          </h2>
          <p className="text-muted">
            Welcome to Cocoma, your go-to partner for professional YouTube
            services designed to elevate your online presence and amplify your
            voice.
          </p>
          <a href="#consultation" className="btn btn-warning fw-bold mb-5">
            Claim Free Consultation <span>→</span>
          </a>
        </div>

        <div
          className="col-md-6 col-lg-6 d-flex mb-2 justify-content-end"
          style={{ padding: "0px" }}
        >
          <img
            src="../../Images/about/section-1main.svg"
            alt="YouTube Graphic"
            className="img-fluid youtube-graphic"
          />
        </div>
      </div>
    </div>
  );
};

export default Section01;
