import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const Section09 = ({ CreativeHouseData }) => {
  const [category, setCategory] = useState("Videos");
  const [filteredItems, setFilteredItems] = useState([]);
  const [videoToPlay, setVideoToPlay] = useState(null);

  // Filter items based on the selected category
  useEffect(() => {
    if (
      CreativeHouseData?.creative_house &&
      Array.isArray(CreativeHouseData.creative_house)
    ) {
      const selectedCategory = CreativeHouseData.creative_house.find(
        (cat) => cat.creative_house_category_name === category
      );

      setFilteredItems(selectedCategory?.items || []);
    }
  }, [category, CreativeHouseData]);

  return (
    <div className="container my-5">
      <h5 className="text-secondary">LATEST WORK FROM</h5>
      <h2 className="fw-bold">OUR CREATIVE HOUSE</h2>

      {/* Category buttons */}
      <div className="d-flex align-items-center my-3">
        {CreativeHouseData?.creative_house?.map((cat) => (
          <button
            key={cat.id}
            className={`btn me-2 ${
              category === cat.creative_house_category_name
                ? "btn-warning"
                : "btn-outline-secondary"
            }`}
            onClick={() => setCategory(cat.creative_house_category_name)}
          >
            {cat.creative_house_category_name}
          </button>
        ))}
        <a href="/" className="ms-auto text-warning text-decoration-none">
          View All
        </a>
      </div>

      {/* Grid of items */}
      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card position-relative">
              <img
                src={
                  item.creative_house_thumbnail.startsWith("http")
                    ? item.creative_house_thumbnail
                    : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.creative_house_thumbnail}`
                }
                className="card-img-top"
                alt="Thumbnail"
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <button
                  className="btn btn-light rounded-circle"
                  onClick={() => setVideoToPlay(item.creative_house_video_url)}
                >
                  <FaPlay className="fs-2" size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {videoToPlay && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Video Player</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setVideoToPlay(null)}
                ></button>
              </div>
              <div className="modal-body">
                <video
                  controls
                  style={{ width: "100%" }}
                  src={videoToPlay.startsWith("http") ? videoToPlay : ""}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section09;
