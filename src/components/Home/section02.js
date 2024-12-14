import React from "react";
import Marquee from "react-fast-marquee";

export default function Section02({ BrandData }) {
  return (
    <>
      <div className="trusted-brand">
        <center>
          <p>Trusted by Leading Brands Worldwide</p>
        </center>
        <Marquee className="mt-3">
          {BrandData?.brands?.map((brand) => (
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
