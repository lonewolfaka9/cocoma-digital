import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import FileUploadBox from "./DragAndDrop";
import "./Job.css";
import { RiTwitterXFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const JobApplicationForm = () => {
  return (
    <div className="container my-5">
      {/* Form Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Job Application for UI/UX Designer</h2>
        <p className="text-muted">
          Tell us more about you so we can get back to you with more info.
        </p>
      </div>

      {/* Form */}
      <form>
        <div className="row g-3">
          {/* First Name and Last Name */}
          <div className="col-md-6 col-sm-6 ">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control job-application-form-input  "
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <div className="input-group">
              <input
                type="text"
                id="lastName"
                className="form-control job-application-form-input"
              />
            </div>
          </div>

          {/* Phone Number and Email */}
          <div className="col-md-6 col-sm-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control job-application-form-input"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control job-application-form-input"
            />
          </div>

          {/* Experience and LinkedIn Profile */}
          <div className="col-md-6 col-sm-6">
            <label htmlFor="experience" className="form-label">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              className="form-control job-application-form-input"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="linkedin" className="form-label">
              LinkedIn Profile *
            </label>
            <input
              type="text"
              id="linkedin"
              className="form-control job-application-form-input"
            />
          </div>

          {/* Annual CTC and Job Preferences */}
          <div className="col-md-6 col-sm-6">
            <label htmlFor="ctc" className="form-label">
              Annual CTC
            </label>
            <input
              type="text"
              id="ctc"
              className="form-control job-application-form-input"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="jobPreference" className="form-label">
              Job Preferences *
            </label>
            <select
              id="jobPreference"
              className="form-select job-application-form-input"
            >
              <option defaultValue>Select One Option</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Notice Period and Portfolio Link */}
          <div className="col-md-6 col-sm-6">
            <label htmlFor="noticePeriod" className="form-label">
              Notice Period (days)
            </label>
            <input
              type="text"
              id="noticePeriod"
              className="form-control job-application-form-input"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="portfolio" className="form-label">
              Portfolio Link *
            </label>
            <input
              type="text"
              id="portfolio"
              className="form-control job-application-form-input"
            />
          </div>

          {/* Social Media Links */}
          <div className="col-12 d-none d-sm-block d-md-block d-lg-none">
            <label className="form-label">Social Media Links</label>
            <div className="d-flex flex-column gap-2">
              <div className="input-group">
                <span className="input-group-text job-application-form-input">
                  <RiInstagramFill size={25} />
                </span>
                <input
                  type="text"
                  className="form-control job-application-form-input"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text job-application-form-input">
                  <RiFacebookBoxFill size={25} />
                </span>
                <input
                  type="text"
                  className="form-control job-application-form-input"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text job-application-form-input">
                  <RiTwitterXFill size={25} />
                </span>
                <input
                  type="text"
                  className="form-control job-application-form-input"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text job-application-form-input">
                  <RiYoutubeFill size={25} />
                </span>
                <input
                  type="text"
                  className="form-control job-application-form-input"
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="col-12">
            <FileUploadBox />
          </div>

          {/* Apply Now Button */}
          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-dark btn-lg px-5">
              Apply Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
