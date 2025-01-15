import React, { useState, useEffect } from "react";

export default function InviteForService({ matchingItemId }) {
  const [authorData, setAuthorData] = useState(null);

  console.log(authorData, matchingItemId);
  useEffect(() => {
    // Fetch author data when author_template_id is available
    if (matchingItemId) {
      fetchAuthorData(matchingItemId);
    }
  }, [matchingItemId]);

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
      }
    } catch (error) {
      console.error("Error fetching author data:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-2 col-sm-11 col-11">
              <img
                src={
                  authorData
                    ? authorData.author_image
                    : "../../Images/Owner.svg"
                }
                alt={authorData ? authorData.author_name : "Anil"}
              />
            </div>
            <div className="col-lg-11 mt-3 col-md-10 col-sm-11 col-11">
              {authorData ? (
                <>
                  <h5>
                    {authorData.author_description}{" "}
                    <a href="/ScheduleMeeting">
                      <span
                        style={{
                          fontWeight: 900,
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        click here
                      </span>
                    </a>
                  </h5>
                  <h5>
                    Owner :{" "}
                    <span
                      style={{ fontWeight: 900, textDecoration: "underline" }}
                    >
                      {" "}
                      {authorData.author_name}
                    </span>
                    | Founder -{" "}
                    <span
                      style={{ fontWeight: 900, textDecoration: "underline" }}
                    >
                      {authorData.founder_text}
                    </span>{" "}
                    & CTO -{" "}
                    <span
                      style={{ fontWeight: 900, textDecoration: "underline" }}
                    >
                      {authorData.cto_text}
                    </span>
                  </h5>
                </>
              ) : (
                <h5>Loading author information...</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
