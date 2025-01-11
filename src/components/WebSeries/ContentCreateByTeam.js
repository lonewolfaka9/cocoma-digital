import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import ReactPlayer from "react-player";
const ITEMS_PER_PAGE = 6;

const ContentCreateByTeam = ({ itemData }) => {
  const [activeFilter, setActiveFilter] = useState("Videos");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Filter content based on category name
  const filteredCategory = itemData.content_created_category.find(
    (category) => category.category_name === activeFilter
  );

  // If category is "Carousels", fetch from content_created_carousal
  const filteredContent =
    activeFilter === "Carousels"
      ? filteredCategory?.content_created_carousal || []
      : filteredCategory?.content_created_item || [];

  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedContent = filteredContent.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Handle Play
  const handlePlay = (id) => {
    setPlayingVideo(id);
  };

  // Handle Pause
  const handlePause = (id) => {
    if (playingVideo === id) {
      setPlayingVideo(null);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Content Created By Our Team</h2>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center mb-4">
        {itemData.content_created_category.slice(0, 4).map((category) => (
          <button
            key={category.id}
            className={`btn mx-2 ${
              activeFilter === category.category_name
                ? "btn-warning text-dark"
                : "btn-light"
            }`}
            onClick={() => {
              setActiveFilter(category.category_name);
              setCurrentPage(1);
              setPlayingVideo(null);
            }}
          >
            {category.category_name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="row g-4">
        {paginatedContent.map((item) => (
          <div className="col-12 col-md-4" key={item.id}>
            <div className="position-relative video-wrapper">
              {item.url ? (
                activeFilter === "Posters" ? ( // Hide play/pause for "Poster" category
                  <img
                    src={item.image}
                    alt="Content"
                    className="img-fluid w-100 rounded"
                  />
                ) : playingVideo === item.id ? (
                  <div className="play-overlay">
                    <ReactPlayer
                      url={item.url}
                      playing={true}
                      controls={true}
                      className="img-fluid w-100 rounded"
                      width="100%"
                      onEnded={() => setPlayingVideo(null)} // Stop video after it finishes
                    />
                    <button
                      className="play-btn btn btn-danger mt-2"
                      onClick={() => handlePause(item.id)}
                    >
                      <CiPause1 />
                    </button>
                  </div>
                ) : (
                  <div
                    className="play-overlay"
                    onClick={() => handlePlay(item.id)}
                  >
                    <img
                      src={item.image}
                      alt="Thumbnail"
                      className="img-fluid w-100 rounded"
                    />
                    <button className="btn btn-dark rounded-circle play-btn">
                      <FaPlay />
                    </button>
                  </div>
                )
              ) : (
                <img
                  src={item.image}
                  alt="Content"
                  className="Carousels-images"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn mx-1 ${
              currentPage === index + 1 ? "btn-dark text-white" : "btn-light"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentCreateByTeam;
