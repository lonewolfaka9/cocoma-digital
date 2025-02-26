import React from "react";

export default function Section06() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-3">
        <div className="col-12">
          <center>
            <h1 className="all-service-heading-home text-uppercase">
              Industries We Serve
            </h1>
          </center>
        </div>
      </div>

      <div className="row justify-content-center text-center pt-5">
        <div className="col-lg-1 col-md-3 col-sm-5 col-6 industries-serve">
          <img src="../../Images/media.svg" alt="Film & Media" height={40} />
          <p className="mt-3">Film & Media</p>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-5 col-6 industries-serve">
          <img src="../../Images/ott.svg" alt="OTT / Streaming" height={40} />
          <p className="mt-3">OTT / Streaming</p>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-5 col-6 industries-serve">
          <img
            src="../../Images/podcast.svg"
            alt="Podcast & Music"
            height={40}
          />
          <p className="mt-3">Podcast & Music</p>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-5 col-6 industries-serve">
          <img src="../../Images/edtech.svg" alt="EdTech & LMS" height={40} />
          <p className="mt-3">EdTech & LMS</p>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-5 col-6 industries-serve">
          <img src="../../Images/ev.svg" alt="eV" height={40} />
          <p className="mt-3">eV</p>
        </div>
        <div className="col-lg-1 col-md-3 col-sm-5 col-6 industries-serve">
          <img src="../../Images/saas.svg" alt="SAAS Businesses" height={40} />
          <p className="mt-3">SAAS Businesses</p>
        </div>
      </div>
    </div>
  );
}
