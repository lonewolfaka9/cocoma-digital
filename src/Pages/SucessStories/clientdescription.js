import React from "react";
import DOMPurify from "dompurify";
import "./client.css";
const ClientDescription = ({ description }) => {
  // Sanitize the HTML
  const sanitizedHTML = DOMPurify.sanitize(description);

  return (
    <div className="client-description">
      <div className="content-wrapper">
        {/* Split content into sections dynamically */}
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    </div>
  );
};

export default ClientDescription;
