import React from "react";

const ClientRequirement = () => {
  return (
    <div className="container py-5">
      {/* Client Requirement Section */}
      <section className="text-center">
        <h2 className="fw-bold">Client Requirement</h2>
        <p className="mb-4">
          The client, Excel Entertainment, approached us with the following key
          objectives:
        </p>

        {/* Objectives */}
        <div className="row g-4">
          {[
            "Create significant buzz and anticipation for the release of Season 2.",
            "Engage with existing fans while capturing the attention of new audiences.",
            "Increase YouTube presence with engaging, high-quality promotional content.",
            "Boost overall visibility through strategic influencer partnerships and digital marketing.",
          ].map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  className="bg-dark text-white rounded-pill d-flex justify-content-center align-items-center mb-2"
                  style={{ width: "40px", height: "40px" }}
                >
                  <span className="fw-bold">{index + 1}</span>
                </div>
                <p className="m-0">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ideas, Strategy & Planning */}
      <section className="row mt-5 align-items-center">
        <div className="col-12 col-md-6 order-2 order-lg-1 order-md-1">
          <h3 className="fw-bold">Ideas, Strategy & Planning</h3>
          <p>
            After receiving the initial brief, Team COCMA developed a
            comprehensive marketing strategy aimed at creating a buzz around
            Mirzapur Season 2. Our approach focused on aligning the content with
            audience expectations, emphasizing suspense, character depth, and
            unique story elements.
          </p>
          <p>
            The strategy was approved, and we immediately began execution
            planning, detailing each phase of the campaign from hype creation to
            post-launch amplification.
          </p>
        </div>
        <div className="col-12 col-md-6 text-center order-1 order-lg-2 order-md-2">
          <img
            src="../../Images/Owner01.svg"
            alt="Person pointing"
            className="img-fluid rounded"
          />
        </div>
      </section>
    </div>
  );
};

export default ClientRequirement;
