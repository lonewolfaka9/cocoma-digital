import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = ({joblist}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const jobData = [
    {
      id: 5,
      title: "Sr. YouTube Manager",
      experience: "+3 year",
      type: "Full Time",
      location: "Andheri West",
      mode: "On Site",
      description: "...",
    },
    {
      id: 2,
      title: "Content Writer",
      experience: "+1 year",
      type: "Part Time",
      location: "Remote",
      mode: "Remote",
      description: "...",
    },
  ];
  
  const job = joblist.find((job) => job.id === parseInt(id));
  
  console.log("idddd", job);
  if (!job) {
    return (
      <div className="container py-5">
        <h2 className="text-center text-danger">Job not found</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="container py-5">
        {/* Job Title Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center border-bottom pb-3 mb-4">
          <div>
            <h1 className="fw-bold">{job.job_title}</h1>
            <p className="mb-1">
              <strong>Location:</strong> {job.job_location}
            </p>
            <p className="mb-1">
              <strong>Job Type:</strong> {job.job_type}
            </p>
            <p className="mb-0">
              <strong>Salary:</strong> Negotiable
            </p>
          </div>
          <a href={`/job-Application/${job.id}`} className="btn btn-dark mt-3 mt-md-0">Apply Now</a>
        </div>
        <section className="mb-5">
        <div dangerouslySetInnerHTML={{ __html: job.job_description }} className="mt-3 border-top pt-2"></div>
        </section>

        {/* Footer Section */}
        <div className="text-center border-top pt-4">
          <h3 className="fw-bold mb-3">Get to know us and join our team</h3>
          <a href={`/job-Application/${job.id}`} className="btn btn-dark btn-lg">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
