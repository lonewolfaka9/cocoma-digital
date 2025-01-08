import React from "react";

const Section12 = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row  border rounded ">
        <div
          className="col-md-6 col-lg-5  text-center mb-3 mb-md-0 position-relative"
          style={{ background: "#F9F9F9", height: "auto" }}
        >
          <img
            src="../../Images/bookACall.png"
            alt="Profile"
            className="img-fluid  "
            style={{ Width: "100%", height: "100%" }}
          />
        </div>

        <div className="col-md-6 col-lg-7 pt-5">
          <h2>
            See How My Team Can Make Your Web Series Go Viral On Social Media?
          </h2>

          <div className="my-3 mt-5">
            <h5>Youtube Marketing</h5>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc
              Elementum
            </p>
          </div>

          <div className="my-3 mt-5">
            <h5>Youtube Marketing</h5>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc
              Elementum
            </p>
          </div>

          <button className="btn btn-warning mt-5 mb-5">Book A Call</button>
        </div>
      </div>
    </div>
  );
};

export default Section12;
