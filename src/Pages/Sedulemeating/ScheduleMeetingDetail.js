import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import adminService from "../../Service/apiService";
import { BsTwitterX } from "react-icons/bs";
import { useDispatch } from "react-redux"; // Import useDispatch
// import { clearCart } from "../../redux/cartSlice"; // Import the clearCart action

import { clearCart } from "../../Service/redux/cartSlice";
const ScheduleMeetingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const { date, time, cartItems, timeZone } = state || {};
  const [error, setError] = useState();
  const dispatch = useDispatch();

  console.log(error);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    websiteLink: "",
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    message: "",
    timezone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate only required fields
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // If date or time are required, validate them as well
    if (!date) newErrors.date = "Schedule date is required";
    if (!time) newErrors.time = "Schedule time is required";

    const localDate = new Date(date);

    // Convert to IST (Indian Standard Time)
    const dateOnly = localDate.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    console.log(dateOnly);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const formattedCartItems = cartItems
      ? cartItems.map((item, index) => {
          const group_service_category_id = item.group_service_category_id;
          const group_service_item_id = item.id; // Use 'id' as 'group_service_item_id'
          const oneTime = item.OneTimeOnly || false; // Default to false if not provided
          const recurring = item.Recurring || false; // Default to false if not provided

          // Only return the necessary fields
          return {
            group_service_category_id: group_service_category_id,
            group_service_item_id: group_service_item_id, // 'id' is used as 'group_service_item_id'
            one_time: oneTime,
            recurring: recurring,
          };
        })
      : [];

    // Filter out any invalid items
    const validCartItems = formattedCartItems.filter((item) => item !== null);
    // Prepare API payload
    const payload = {
      schedule_date: dateOnly,
      schedule_time: time,
      schedule_duration: "120", // Example duration
      first_name: formData.firstName,
      timezone: timeZone,
      last_name: formData.lastName,
      company_name: formData.companyName,
      phone_no: formData.phoneNumber,
      email: formData.email,
      website_link: formData.websiteLink,
      instagram_link: formData.instagram,
      facebook_link: formData.facebook,
      x_link: formData.twitter,
      youtube_link: formData.youtube,
      msg: formData.message,
      free_consultaion_item: validCartItems,
    };

    // Call API
    adminService
      .FreeConsultation(payload)
      .then((response) => {
        console.log("API Response:", response.data);

        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          phoneNumber: "",
          email: "",
          websiteLink: "",
          instagram: "",
          facebook: "",
          twitter: "",
          youtube: "",
          message: "",
        });
        dispatch(clearCart()); // Clear the cart after success

        // Redirect to home page and clear date/time
        navigate("/ThankYou", {
          state: {
            date: null,
            time: null,
            successMessage: "Meeting scheduled successfully!",
          },
        });
      })
      .catch((err) => {
        console.error("API Error:", err.response?.data || err.message);
        setError(err.message); // Optional: Set error message to display to the user
      })
      .finally(() => {
        console.log("API call completed");
      });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Fill Out The Form</h2>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <small className="text-danger">{errors.companyName}</small>
                )}
              </div>
              <div className="col-md-6">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <small className="text-danger">{errors.phoneNumber}</small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="col-md-6">
                <label>Website Link</label>
                <input
                  type="url"
                  name="websiteLink"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  placeholder="Website Link"
                  value={formData.websiteLink}
                  onChange={handleChange}
                />
                {errors.websiteLink && (
                  <small className="text-danger">{errors.websiteLink}</small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label>Social Media Links</label>
                <div className="mb-4 mt-4">
                  <div className="d-flex">
                    <FaInstagram className="me-2" size={40} />
                    <input
                      type="text"
                      name="instagram"
                      className="form-control"
                      style={{ backgroundColor: "#f8f8f8" }}
                      placeholder="Instagram URL or handle"
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.instagram && (
                    <small className="text-danger">{errors.instagram}</small>
                  )}
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <FaFacebook className="me-2" size={40} />
                    <input
                      type="text"
                      name="facebook"
                      className="form-control"
                      style={{ backgroundColor: "#f8f8f8" }}
                      placeholder="Facebook URL or handle"
                      value={formData.facebook}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.facebook && (
                    <small className="text-danger">{errors.facebook}</small>
                  )}
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <BsTwitterX className="me-2" size={40} />
                    <input
                      type="text"
                      name="twitter"
                      className="form-control"
                      style={{ backgroundColor: "#f8f8f8" }}
                      placeholder="Twitter ( X ) URL or handle"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.twitter && (
                    <small className="text-danger">{errors.twitter}</small>
                  )}
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <FaYoutube className="me-2" size={40} />
                    <input
                      type="text"
                      name="youtube"
                      className="form-control"
                      style={{ backgroundColor: "#f8f8f8" }}
                      placeholder="YouTube URL or handle"
                      value={formData.youtube}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.youtube && (
                    <small className="text-danger">{errors.youtube}</small>
                  )}
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <label>Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  style={{ backgroundColor: "#f8f8f8" }}
                  rows="4"
                  placeholder="Write here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 text-center">
                {date && time ? (
                  <p>
                    <strong>Scheduled Date:</strong>{" "}
                    {new Date(date).toDateString()} <br />
                    <strong>Scheduled Time:</strong> {time}
                    <br></br>
                    <strong>Time Zone: </strong>
                    {timeZone}
                  </p>
                ) : (
                  <p className="text-danger">No date and time selected!</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning px-4 py-2"
                style={{
                  backgroundColor: "#f9c74f",
                  border: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                Schedule Meeting →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingDetails;
