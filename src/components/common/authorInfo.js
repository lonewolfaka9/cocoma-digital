import React, { useEffect, useState } from "react";

export default function AuthorInfo({ autherId }) {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    if (autherId) {
      fetchAuthorData(autherId);
    }
  }, [autherId]);

  const fetchAuthorData = async (authorId) => {
    try {
      const response = await fetch(
        `https://admin.cocomadigital.com/public/api/author`
      );
      if (!response.ok) {
        throw new Error(`Error fetching author data: ${response.status}`);
      }
      const result = await response.json();

      if (
        result.status === "success" &&
        result.data &&
        result.data.author_template
      ) {
        // Find the matching author data by ID
        const author = result.data.author_template.find(
          (author) => author.id === authorId
        );
        if (author) {
          setAuthorData(author);
        } else {
          console.warn("No author found with the provided ID.");
        }
      } else {
        console.warn("Invalid API response structure.");
      }
    } catch (error) {
      console.error("Error fetching author data:", error);
    }
  };

  // Ensure `authorData` is loaded before rendering
  if (!authorData) {
    return <div>Loading author information...</div>;
  }

  return (
    <div className="container-fluid mt-3">
      <div className="container">
        <div className="row d-flex align-items-center mb-4">
          <div className="col-lg-1">
            <img
              src={authorData.author_image}
              alt="Author"
              className="me-3 img-fluid "
            />
          </div>

          <div className="col-lg-11">
            <p style={{ color: "#C1C1C1" }}>
              {authorData.author_description} &nbsp;
              <span>
                <a
                  href="/ScheduleMeeting"
                  className="text-warning text-decoration-none text-decoration-underline"
                >
                  click here.
                </a>
              </span>
            </p>
            <p className="mb-0">
              Author:{" "}
              <span className="fw-bold text-warning">
                {authorData.author_name}
              </span>{" "}
              | Founder -{" "}
              <span className="text-warning">{authorData.founder_text}</span> &
              CTO - <span className="text-warning">{authorData.cto_text}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
