import React from "react";

const Section12 = () => {
  return (
    <div className="container">
      <div className="row  border rounded ">
        {/* Left Side (Image) */}
        <div
          className="col-md-4 text-center mb-3 mb-md-0"
          style={{ background: "#F9F9F9" }}
        >
          <img
            src="../../Images/bookACall.png"
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Right Side (Text and Button) */}
        <div className="col-md-8 pt-5">
          <h2>
            See How My Team Can Make Your Web Series Go Viral On Social Media?
          </h2>

          <div className="my-3">
            <h5>Youtube Marketing</h5>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc
              Elementum
            </p>
          </div>

          <div className="my-3">
            <h5>Youtube Marketing</h5>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc
              Elementum
            </p>
          </div>

          <button className="btn btn-warning mt-3">Book A Call</button>
        </div>
      </div>
    </div>
  );
};

export default Section12;
