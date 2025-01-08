import React, { useState } from "react";
import CaseStudies from "../../components/Contact_us/CaseStudy";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import AdminService from "../../Service/apiService";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    type: "",
    email: "",
    media_budget: "",
    message: "",
    newsletter: false,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? "1" : "0") : value, // Map checkbox to "1" or "0"
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponseMessage("");

    try {
      const response = await AdminService.ContactUs(formData); // POST API call
      setResponseMessage(
        response.data.message || "Form submitted successfully!"
      );
      setFormData({
        first_name: "",
        last_name: "",
        type: "",
        email: "",
        media_budget: "",
        message: "",
        newsletter: false,
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-3 text-end">
            <button className="btn text-center contact-us-top-button">
              <span className="btn-inner-phone">
                <FaPhoneAlt size={20} />
              </span>
              <span className="btn-inner-text">Contact Us</span>
            </button>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-5 order-lg-1 order-md-1 order-2">
            <img
              src="../../Images/about/contact_us.svg"
              alt="contact-container"
              width={"100%"}
            />
            <div className="p-4">
              <h3>
                Ready to meet your
                <br /> Growth Partner?
              </h3>
              <p className="mt-5">
                We seek lasting relationships to help our clients unlock rapid
                growth at efficient economics. Tell us where you are and where
                you want to be.
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-md-2 order-1">
            <div className="contact-us-container pt-5">
              <center>
                <h2>Welcoming serious inquiries.</h2>
              </center>
              {responseMessage && (
                <p className="text-success text-center">{responseMessage}</p>
              )}
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label className="form-label">FIRST NAME *</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="form-control form-control-contactus"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">LAST NAME *</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="form-control form-control-contactus"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">INDIVIDUAL OR BUSINESS *</label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="form-control form-control-contactus"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">WORK EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-control-contactus"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">Monthly Media Budget *</label>
                  <input
                    type="text"
                    name="media_budget"
                    value={formData.media_budget}
                    onChange={handleChange}
                    className="form-control form-control-contactus"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control form-control-contactus"
                    required
                  ></textarea>
                </div>
                <div className="d-flex mt-4">
                  <div>
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter === "1"}
                      onChange={handleChange}
                      className="form-check-input form-checkbox-custom p-2"
                    />
                  </div>
                  <label className="form-label ms-3">
                    Yes, I want to experience the greatest growth newsletter on
                    the internet.
                  </label>
                </div>
                <div className="mt-4 text-center">
                  <button
                    type="submit"
                    className="btn m-auto btn-Submit-your-message"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Your Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <CaseStudies />
        </div>
      </div>
    </>
  );
}
