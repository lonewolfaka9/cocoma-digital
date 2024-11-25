import React from "react";

const BusinessCareerSection = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="business-career-box p-4 rounded">
            <h3 className="business-career-title">
              Find Right For Your Business
            </h3>
            <p className="business-career-text">
              Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc
              Elementum Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis
              Nunc Elementum
            </p>
            <a href="#hire-us" className="business-career-button">
              Hire Us <span className="business-career-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="business-career-box p-4 rounded">
            <h3 className="business-career-title">
              Find Right For Your Career
            </h3>
            <p className="business-career-text">
              Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc
              Elementum Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis
              Nunc Elementum
            </p>
            <a href="#join-us" className="business-career-button">
              Join Us <span className="business-career-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCareerSection;
