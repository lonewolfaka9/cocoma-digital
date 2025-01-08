import React from "react";
import "./Job.css"; // Optional: Use for additional custom styling
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const { successMessage } = location.state || {};

  return (
    <div className="thankyou-container container text-center py-5">
      {/* Thank You Illustration */}
      <div className="thankyou-image mb-4">
        <img
          src="../../Images/thankYou.svg"
          alt="Thank You"
          className="img-fluid"
          style={{ maxWidth: "300px" }} // Adjust max width as per design
        />
      </div>
      {/* Thank You Heading */}
      {successMessage && (
        <div className="alert " role="alert">
          <h1 className="thankyou-title fw-bold">{successMessage}</h1>
          <button
            className="btn btn-warning mt-3"
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </button>
        </div>
      )}

      {/* Thank You Message */}
      {/* <p className="thankyou-message text-muted mt-3">
        We appreciate your interest in joining our team! Your application has
        been successfully submitted, and our hiring team is currently reviewing
        it with care. We're thrilled that you’re considering a career with us
        and taking the time to connect.
      </p> */}
    </div>
  );
};

export default ThankYouPage;
