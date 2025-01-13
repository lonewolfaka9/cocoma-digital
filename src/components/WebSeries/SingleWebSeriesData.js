import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function SingleWebSeriesData({ itemData }) {
  console.log("itemData>>>>>>", itemData.author_template_id);
  const [authorData, setAuthorData] = useState(null);

  console.log(authorData);
  useEffect(() => {
    // Fetch author data when author_template_id is available
    if (itemData.author_template_id) {
      fetchAuthorData(itemData.author_template_id);
    }
  }, [itemData.author_template_id]);

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
          console.log("Fetched Author Data:", author);
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
      <div className="container-fluid text-white bg-black py-5">
        {/* Movie Header */}
        <div className="container">
          <h2 className="fw-bold mb-3">
            {itemData.title} ({itemData.year})
          </h2>
          <p>YouTube Marketing</p>

          {/* Author Section */}
          <div className=" row d-flex align-items-center mb-4">
            <div className="col-lg-1">
              <img
                src={authorData.author_image} // Replace with the actual image URL
                alt="Author"
                className="rounded-circle me-3"
              />
            </div>

            <div className="col-lg-11">
              <p>
                {authorData.author_description} &nbsp;
                <span>
                  <a
                    href="/ScheduleMeeting"
                    className="text-warning text-decoration-none"
                  >
                    click here.
                  </a>
                </span>
              </p>
              <p className="mb-0">
                Author:{" "}
                <span className="fw-bold text-warning">
                  {authorData.author_name}
                </span>{" "}
                | Founder -{" "}
                <span className="text-warning">{authorData.founder_text}</span>{" "}
                & CTO -{" "}
                <span className="text-warning">{authorData.cto_text}</span>
              </p>
            </div>
          </div>

          {/* Movie Details */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <p>
                <strong>Client :</strong> {itemData.client}
              </p>
              <p>
                <strong>Genre :</strong> {itemData.genre}
              </p>
              <p>
                <strong>Cast :</strong> {itemData.cast}
              </p>
              <p>
                <strong>Directors :</strong> {itemData.directors}
              </p>
              <p>
                <strong>Year :</strong> {itemData.year}
              </p>
              <p>{itemData.description}</p>
            </div>

            {/* Image Slider */}
            <div className="col-md-6">
              <Carousel
                indicators={true}
                arrows={false}
                controls={true}
                interval={3000}
              >
                {itemData.images && itemData.images.length > 0 ? (
                  itemData.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={image.image}
                        alt="Slide 3"
                        className="d-block w-100 img-fluid"
                      />
                    </Carousel.Item>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
