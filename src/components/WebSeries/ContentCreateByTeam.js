import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";

const ITEMS_PER_PAGE = 6;

const ContentCreateByTeam = ({ itemData }) => {
  const [activeFilter, setActiveFilter] = useState("Videos");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({}); // Ref to store video elements

  // Filter content by the active category name
  const filteredCategory = itemData.content_created_category.find(
    (category) => category.category_name === activeFilter
  );

  // Handle the case where no items are found
  const filteredContent =
    filteredCategory?.content_created_item ||
    filteredCategory?.content_created_carousal ||
    [];

  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedContent = filteredContent.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Handle Play
  const handlePlay = (id) => {
    // Pause currently playing video (if any)
    if (playingVideo && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo].pause();
      videoRefs.current[playingVideo].currentTime = 0; // Reset current playing video
    }

    // Play selected video
    setPlayingVideo(id);
    const video = videoRefs.current[id];
    if (video) {
      video.play();
    }
  };

  // Handle Pause
  const handlePause = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to the start
    }
    setPlayingVideo(null);
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
                playingVideo === item.id ? (
                  <div className="play-overlay">
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      className="img-fluid w-100 rounded"
                      onEnded={() => setPlayingVideo(null)}
                      autoPlay
                    >
                      <source src={item.url} type="video/mp4" />
                    </video>

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
                  className="img-fluid w-100 rounded"
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
