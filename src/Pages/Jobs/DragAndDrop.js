import React, { useState } from "react";

const FileUploadBox = () => {
  const [resume, setResume] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files[0];
    setResume(file);
  };

  const handleBoxClick = () => {
    document.getElementById("resumeUpload").click(); // Explicitly trigger the file input click
  };

  return (
    <div className="col-12 ">
      <label className="form-label">Upload or Drop Your Resume</label>
      <div
        className={`d-flex justify-content-center job-application-form-input align-items-center border rounded py-3 ${
          dragActive ? "border-primary bg-light" : "job-application-form-input"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBoxClick} // Handle clicks on the box
        style={{ cursor: "pointer" }}
      >
        {resume ? (
          <div className="text-center">
            <i className="bi bi-file-earmark-check text-success fs-2"></i>
            <p className="mt-2 text-success">{resume.name}</p>
          </div>
        ) : (
          <div className="text-center ">
            <i className="bi bi-upload fs-2 text-muted "></i>
          </div>
        )}
        {/* Hidden file input */}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          id="resumeUpload"
          className="d-none"
        />
      </div>
    </div>
  );
};

export default FileUploadBox;
