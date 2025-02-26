import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ClientDescription from "./clientdescription";
const ClientPage = () => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.cocomadigital.com/public/api/client"
        ); // Fetch the complete list of clients
        const result = await response.json();

        if (result.status === "success") {
          const matchedClient = result.data.client.find(
            (client) => client.id === parseInt(id, 10)
          ); // Find client by ID
          if (matchedClient) {
            setClientData(matchedClient);
          } else {
            setError("Client not found");
          }
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h1 className="text-danger">{error}</h1>
        <p className="text-muted">
          We couldn’t find the client data you’re looking for.
        </p>
        <Link to="/clients" className="btn btn-secondary mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  
  return (
    <div className="container py-3 py-md-5">
      <div className="row justify-content-center">
        <div className="col-10 col-md-10 col-xl-10">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            {/* Image Section with Gradient Overlay */}
            <div className="position-relative">
              <img
                src={clientData.client_img || "https://via.placeholder.com/800x400"}
                alt={clientData.client_title}
                className="card-img-top img-fluid"
                style={{ 
                  height: "50vh",
                  minHeight: "400px",
                  maxHeight: "600px",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
              <div className="gradient-overlay" />
            </div>

            {/* Content Section */}
            <div className="card-body p-4 p-md-5">
              <div className="row">
                <div className="col-12">
                  <div className="content-block p-3 p-md-4 rounded-3 bg-light">
                    <ClientDescription 
                      description={clientData.client_description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientPage;
