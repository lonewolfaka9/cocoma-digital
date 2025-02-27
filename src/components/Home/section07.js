import React, { useState } from "react";
import { Link } from "react-router-dom";

const Section07 = ({ ClientData }) => {
  const clients = ClientData.client || [];
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    if (visibleCount >= clients.length) {
      setVisibleCount(4); // Reset to initial 4 if all are shown
    } else {
      setVisibleCount(visibleCount + 4);
    }
  };

  return (
    <div className="container my-5 mt-5">
      <h3 className="text-uppercase text-muted mb-3" style={{ fontSize: "20px" }}>
        Our Clients
      </h3>
      <h2 className="fw-bold text-uppercase">Latest Success Stories</h2>

      <div className="row">
        {clients.slice(0, visibleCount).map((client) => (
          <div className="col-md-3 col-12 mb-4 d-flex" key={client.id}>
            <div className="client-card w-100">
              <Link to={`/client-sucess-stories/${client.id}`}>
                <img src={client.client_img} className="card-img-top" alt={client.client_description} />
              </Link>
              <div className="client-card-body">
                <p className="card-text fw-bold">{client.client_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {clients.length > 4 && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleShowMore}>
            {visibleCount >= clients.length ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Section07;
