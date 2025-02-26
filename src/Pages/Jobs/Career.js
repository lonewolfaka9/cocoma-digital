import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// Job Card Component
const JobCard = ({ title, experience, type, workplace,id }) => {
  return (
    <div className="job-cards p-3 shadow-sm">
      <h5 className="fw-bold">{title}</h5>
      <p><i className="bi bi-person"></i> Experience: {experience} years</p>
      <p><i className="bi bi-briefcase"></i> Type: {type}</p>
      <p><i className="bi bi-geo-alt"></i> Workplace: {workplace}</p>
      <a href={`/job-details/${id}`} className="btn job-button ">
        Read More
      </a>
    </div>
  );
};

// Career Component
const Career = ({ joblist = [] }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setJobs(joblist); // Initialize jobs list
    extractCategories(joblist);
  }, [joblist]);

  // Extract unique job categories
  const extractCategories = (jobs) => {
    const uniqueCategories = ["All", ...new Set(jobs.map(job => job.job_type))];
    setCategories(uniqueCategories);
  };

  // Handle category filter
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setJobs(joblist);
    } else {
      setJobs(joblist.filter(job => job.job_type === category));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold">Job Categories</h2>

      {/* Category Buttons */}
      <div className="btn-group my-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "btn-dark" : "btn-outline-secondary"}`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="row gy-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <JobCard 
                title={job.job_title} 
                experience={job.job_experience} 
                type={job.job_type} 
                workplace={job.workplace_type} 
                id={job.id}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default Career;
