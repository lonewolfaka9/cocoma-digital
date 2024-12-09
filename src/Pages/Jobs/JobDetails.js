import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("idddd", id);
  const jobData = [
    {
      id: 1,
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

  const job = jobData.find((job) => job.id === parseInt(id));

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
            <h1 className="fw-bold">{job.title}</h1>
            <p className="mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="mb-1">
              <strong>Job Type:</strong> {job.type}
            </p>
            <p className="mb-0">
              <strong>Salary:</strong> Negotiable
            </p>
          </div>
          <button className="btn btn-dark mt-3 mt-md-0">Apply Now</button>
        </div>

        {/* About the Company */}
        <section className="mb-5">
          <h2 className="fw-bold">About the Company</h2>
          <p className="text-muted">
            Cocoma Digital Private Limited is a leading YouTube specialist that
            helps media companies promote their films, web series,
            documentaries, digital products, and more on YouTube. With a focus
            on YouTube video production and growth hacking, we aim to enhance
            the visibility and engagement of our clients' channels through
            strategic marketing efforts.
          </p>
          <p className="text-muted">
            At Cocoma Digital, we thrive on creativity, innovation, and
            collaborative efforts to deliver exceptional digital experiences for
            our clients.
          </p>
        </section>

        {/* About the Role */}
        <section className="mb-5">
          <h2 className="fw-bold">About the Role</h2>
          <p className="text-muted">
            We are seeking a skilled UI/UX Designer who is passionate about
            creating visually stunning and user-friendly digital interfaces. As
            a UI/UX Designer at Cocoma Digital, you will have the opportunity to
            work on diverse projects, contributing to the design and development
            of cutting-edge digital solutions.
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-5">
          <h2 className="fw-bold">Responsibilities</h2>
          <ul className="text-muted">
            <li>
              Collaborate with cross-functional teams, including developers and
              marketers, to understand project requirements and user needs.
            </li>
            <li>
              Create wireframes, prototypes, and design mockups for digital
              interfaces.
            </li>
            <li>
              Conduct user research and usability testing to gather valuable
              insights for design improvements.
            </li>
            <li>
              Stay updated on industry trends, design tools, and emerging
              technologies to enhance design processes.
            </li>
            <li>
              Translate complex concepts into intuitive and visually appealing
              designs.
            </li>
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-5">
          <h2 className="fw-bold">Requirements</h2>
          <ul className="text-muted">
            <li>A minimum of 2 years of experience as a UI/UX designer.</li>
            <li>
              Bachelor's degree in Design, Human-Computer Interaction, or a
              related field.
            </li>
            <li>Strong portfolio showcasing a range of design projects.</li>
            <li>
              Proficient in design tools such as Adobe Creative Suite, Sketch,
              Figma, etc.
            </li>
            <li>
              Understanding of user-centered design principles and best
              practices.
            </li>
            <li>Excellent communication and collaboration skills.</li>
            <li>
              Degree in Design, Human-Computer Interaction, or a related field.
            </li>
            <li>
              Excellent writing and editing skills, with the ability to write
              clear, concise, and engaging copy that resonates with the target
              audience.
            </li>
            <li>
              If you are a highly creative and talented UI/UX designer looking
              for a new challenge, we encourage you to apply for this exciting
              opportunity at Cocoma Digital Pvt Ltd.
            </li>
          </ul>
        </section>

        {/* Footer Section */}
        <div className="text-center border-top pt-4">
          <h3 className="fw-bold mb-3">Get to know us and join our team</h3>
          <button className="btn btn-dark btn-lg">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
