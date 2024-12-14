import React from "react";

const BusinessCareerSection = ({ HireUsData }) => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {HireUsData?.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="business-career-box p-4 rounded">
              <h3 className="business-career-title">
                {item.user_choice_title}
              </h3>
              <p className="business-career-text">
                {item.user_choice_description}
              </p>
              <a
                href={item.user_choice_button_url}
                className="business-career-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.user_choice_button_text}{" "}
                <span className="business-career-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCareerSection;
