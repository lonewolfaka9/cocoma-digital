import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { FaPause, FaPlay } from "react-icons/fa";

const Portfolio = ({ PortfolioData }) => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videosPerPage = 6;

  const categories =
    PortfolioData?.group_single_service_portfolio_category || [];

  const videos = categories.flatMap((category) =>
    (category.group_single_service_portfolio_item || []).map((video) => ({
      ...video,
      portfolio_category_name: category.portfolio_category_name,
    }))
  );

  const filteredVideos =
    filter === "All"
      ? videos
      : videos.filter((video) => video.portfolio_category_name === filter);

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
    setPlayingVideoId(id);
  };

  const handlePause = (id) => {
    if (playingVideoId === id) {
      setPlayingVideoId(null);
    }
  };

  const handleEnd = () => {
    setPlayingVideoId(null);
  };

  return (
    <div className="container my-5">
      <div>
        <h2 className="fw-bold text-uppercase mb-4">Portfolio</h2>
      </div>
      <div className="mb-4">
        <Slider {...sliderSettings}>
          <button
            className={`category-button-cat-buttons ${
              filter === "All" ? "active" : "inactive"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button-cat-buttons ${
                filter === category.portfolio_category_name
                  ? "active"
                  : "inactive"
              }`}
              onClick={() => {
                setFilter(category.portfolio_category_name);
              }}
            >
              {category.portfolio_category_name}
            </button>
          ))}
        </Slider>
      </div>

      <div className="row">
        {currentVideos.map((video) => (
          <div key={video.id} className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="position-relative videoplayer-and-thumbnail">
              {playingVideoId === video.id ? (
                <div className="video-wrapper">
                  <ReactPlayer
                    url={video.portfolio_video_url}
                    playing={true}
                    controls={false}
                    muted={false}
                    width="100%"
                    height="600px"
                    className="VideoPlayer"
                    onEnded={handleEnd}
                  />

                  <div
                    className="control-button"
                    onClick={() => handlePause(video.id)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(0, 0, 0, 0.7)",
                      padding: "10px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <FaPause size={30} color="white" />
                  </div>
                </div>
              ) : (
                <div
                  className="thumbnail-container"
                  onClick={() => handlePlay(video.id)}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <img
                    src={
                      video.portfolio_video_thumbnail ||
                      "https://via.placeholder.com/150"
                    }
                    alt="Video Thumbnail"
                    className="img-fluid video-thumbnail"
                    style={{ width: "100%", height: "auto" }}
                  />

                  <div
                    className="control-button"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <FaPlay size={30} color="white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

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
