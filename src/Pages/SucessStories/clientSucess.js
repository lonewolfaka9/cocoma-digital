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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0">
            <div style={{ position: "relative" }}>
              <img
                src={
                  clientData.client_img || "https://via.placeholder.com/800x400"
                }
                alt={clientData.client_title}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
                }}
              />
            </div>
            <div className="card-body">
              <h1 className="card-title text-center mb-4">
                {clientData.client_title}
              </h1>
              <div className="row">
                <div className="col-md-12">
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
  );
};

export default ClientPage;
