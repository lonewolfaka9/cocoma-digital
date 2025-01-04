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
          <p>Trusted by Leading Brands Worldwide</p>
        </center>
        <Marquee className="mt-3">
          {BrandData.map((brand) => (
            <img
              key={brand.id}
              src={brand.brand_image || "../../Images/default-brand.svg"}
              alt={brand.brand_name || "Brand Logo"}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}
