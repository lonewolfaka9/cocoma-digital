import React, { useEffect, useState } from "react";
import AdminService from "../../Service/apiService";

const BusinessCareerSection = () => {
  const [hireUsData, setHireUsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    AdminService.HireUS()
      .then((response) => {
        setHireUsData(response.data.data?.hire_us || []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        {hireUsData.map((item) => (
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
