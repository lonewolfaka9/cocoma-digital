import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import AuthorInfo from "../common/authorInfo";

export default function SingleWebSeriesData({ itemData }) {
  return (
    <>
      <div className="container-fluid text-white bg-black py-5">
        {/* Movie Header */}
        <div className="container">
          <h2 className="fw-bold mb-3">
            {itemData.title} ({itemData.year})
          </h2>
          <p>YouTube Marketing</p>
          <AuthorInfo autherId={itemData.author_template_id} />

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
                arrows={"false"}
                controls={true}
                interval={3000}
              >
                {itemData.images && itemData.images.length > 0 ? (
                  itemData.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={image.image}
                        alt={`Slide ${index + 1}`}
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
