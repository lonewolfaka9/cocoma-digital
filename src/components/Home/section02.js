import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AdminService from "../../Service/apiService";

export default function Section02() {
  const [BrandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AdminService.Brands()
      .then((response) => {
        setBrandData(response.data.data?.brands || []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="trusted-brand">
        <center>
          <h4
            className="all-service-heading-home pt-3 pb-3"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            Trusted by Leading Brands Worldwide
          </h4>
        </center>
        <Marquee className="mt-3 mb-3">
          {BrandData.map((brand) => (
            <img
              key={brand.id}
              src={brand.brand_image}
              alt={brand.brand_name || "Brand Logo"}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}
