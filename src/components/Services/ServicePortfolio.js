import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const Portfolio = () => {
  const videoData = [
    {
      id: 1,
      category: "Explainer",
      image: "../../Images/portFolio.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      category: "Motion Graphics",
      image: "../../Images/portFolio.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      category: "Sales Video",
      image: "../../Images/portFolio.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const categories = ["All", "Explainer", "Motion Graphics", "Sales Video"];

  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videosPerPage = 6;

  const filteredVideos =
    filter === "All"
      ? videoData
      : videoData.filter((video) => video.category === filter);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const sliderSettings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handlePlay = (id) => {
    // Set the currently playing video
    setPlayingVideoId(id);
  };

  const handleEnd = () => {
    // Reset playing video when it ends
    setPlayingVideoId(null);
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Portfolio</h3>

      {/* Filter Slider */}
      <div className="mb-4">
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                filter === category ? "active" : "inactive"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>

      {/* Video Grid */}
      <div className="row">
        {currentVideos.map((video) => (
          <div key={video.id} className="col-12 col-md-6 col-lg-6 mb-4">
            <div className="position-relative videoplayer-and-thumbnail">
              <ReactPlayer
                url={video.videoUrl}
                light={playingVideoId === video.id ? false : video.image} // Show thumbnail for other videos
                playing={playingVideoId === video.id} // Play only the selected video
                controls={false} // Hide controls
                muted={false} // Required for autoplay
                className="VideoPlayer"
                playIcon={
                  <div className="play-icon d-flex justify-content-center align-items-center">
                    <FaPlay size={30} color="white" />
                  </div>
                }
                onClickPreview={() => handlePlay(video.id)} // Start playing video
                onEnded={handleEnd} // Reset playingVideoId on end
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <li
                  key={pageNumber}
                  className={`page-item ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Portfolio;
