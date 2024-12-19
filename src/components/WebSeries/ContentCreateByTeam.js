import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";

const contentData = [
  {
    id: 1,
    type: "Videos",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Mirzapur+1",
  },
  {
    id: 2,
    type: "Videos",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Mirzapur+2",
  },
  {
    id: 3,
    type: "Videos",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Mirzapur+3",
  },
  {
    id: 4,
    type: "Shorts",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://via.placeholder.com/300x200?text=Short+1",
  },
];

const ITEMS_PER_PAGE = 6;

const ContentCreateByTeam = () => {
  const [activeFilter, setActiveFilter] = useState("Videos");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({}); // Ref to store video elements

  const filteredContent = contentData.filter(
    (item) => item.type === activeFilter
  );
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
        {["Videos", "Shorts"].map((filter) => (
          <button
            key={filter}
            className={`btn mx-2 ${
              activeFilter === filter ? "btn-warning text-dark" : "btn-light"
            }`}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentPage(1);
              setPlayingVideo(null);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="row g-4">
        {paginatedContent.map((item) => (
          <div className="col-12 col-md-4" key={item.id}>
            <div className="position-relative video-wrapper">
              {playingVideo === item.id ? (
                <div className="play-overlay">
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    className="img-fluid w-100 rounded"
                    onEnded={() => setPlayingVideo(null)}
                    autoPlay
                  >
                    <source src={item.video} type="video/mp4" />
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
                    src={item.thumbnail}
                    alt="Thumbnail"
                    className="img-fluid w-100 rounded"
                  />
                  <button className="btn btn-dark rounded-circle play-btn">
                    <FaPlay />
                  </button>
                </div>
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
