import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// Mock Job Data
const jobData = [
  {
    id: 1,
    title: "Sr. YouTube Manager",
    experience: "+3 year",
    type: "Full Time",
    location: "Andheri West",
    mode: "On Site",
  },
  {
    id: 2,
    title: "Content Writer",
    experience: "+1 year",
    type: "Part Time",
    location: "Remote",
    mode: "Remote",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    experience: "+2 year",
    type: "Full Time",
    location: "Andheri West",
    mode: "On Site",
  },
  {
    id: 4,
    title: "Graphic Designer",
    experience: "+1 year",
    type: "Freelance",
    location: "Remote",
    mode: "Remote",
  },
  {
    id: 5,
    title: "Web Developer",
    experience: "+2 year",
    type: "Full Time",
    location: "Andheri West",
    mode: "On Site",
  },
];

// Reusable Job Card Component
const JobCard = ({ title, experience, type, location, mode, id }) => {
  const navigate = useNavigate();
  return (
    <div className="card p-3 shadow-sm">
      <h5 className="fw-bold">{title}</h5>
      <p className="mb-1">
        <i className="bi bi-person"></i> {experience}
      </p>
      <p className="mb-1">
        <i className="bi bi-building"></i> {mode}
      </p>
      <p className="mb-1">
        <i className="bi bi-clock"></i> {type}
      </p>
      <p>
        <i className="bi bi-geo-alt"></i> {location}
      </p>
      <button
        className="btn btn-dark"
        onClick={() => navigate(`/job-details/${id}`)} // Navigate to JobDetails
      >
        Read More →
      </button>
    </div>
  );
};

// Main Career Component
const Career = () => {
  const [jobs, setJobs] = useState(jobData); // State for job list
  const [search, setSearch] = useState(""); // State for search term
  const [filters, setFilters] = useState({ mode: "All", type: "All" }); // State for filters

  // Handle Search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    // Filter jobs by title or location
    const filteredJobs = jobData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm)
    );
    setJobs(filteredJobs);
  };

  // Handle Filters with Toggle
  const handleFilter = (filterKey, filterValue) => {
    const isSameFilterSelected = filters[filterKey] === filterValue;

    // If the same filter is clicked again, reset to "All"
    const updatedFilters = {
      ...filters,
      [filterKey]: isSameFilterSelected ? "All" : filterValue,
    };

    // Apply filtering logic
    const filteredJobs = jobData.filter((job) => {
      const matchesMode =
        updatedFilters.mode === "All" || job.mode === updatedFilters.mode;
      const matchesType =
        updatedFilters.type === "All" || job.type === updatedFilters.type;
      return matchesMode && matchesType;
    });

    setFilters(updatedFilters);
    setJobs(filteredJobs);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Make an impact at front</h1>
        <p className="text-muted">
          Make A Lasting Impact On Your Team, We’d Love To Have More Talented
          People On Board.
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by title or location"
          style={{ maxWidth: "300px" }}
          value={search}
          onChange={handleSearch}
        />
        {/* Filter Buttons */}
      </div>
      <div className="row mt-2 mb-2">
        <div className="btn-group">
          <button
            className={`btn ${
              filters.mode === "All" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => handleFilter("mode", "All")}
          >
            All
          </button>
          <button
            className={`btn ${
              filters.mode === "On Site" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => handleFilter("mode", "On Site")}
          >
            On Site
          </button>
          <button
            className={`btn ${
              filters.mode === "Remote" ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => handleFilter("mode", "Remote")}
          >
            Remote
          </button>
          <button
            className={`btn ${
              filters.type === "Full Time"
                ? "btn-dark"
                : "btn-outline-secondary"
            }`}
            onClick={() => handleFilter("type", "Full Time")}
          >
            Full Time
          </button>
          <button
            className={`btn ${
              filters.type === "Part Time"
                ? "btn-dark"
                : "btn-outline-secondary"
            }`}
            onClick={() => handleFilter("type", "Part Time")}
          >
            Part Time
          </button>
          <button
            className={`btn ${
              filters.type === "Freelance"
                ? "btn-dark"
                : "btn-outline-secondary"
            }`}
            onClick={() => handleFilter("type", "Freelance")}
          >
            Freelance
          </button>
        </div>
      </div>
      {/* Job Listings */}
      <div className="row gy-4">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <JobCard {...job} />
            </div>
          ))
        ) : (
          <p className="text-center">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default Career;
