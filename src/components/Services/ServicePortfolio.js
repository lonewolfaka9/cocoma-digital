import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
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

    const [activeCategory, setActiveCategory] = useState(categories[0] || null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const categoryRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    // Drag scroll functionality
    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - categoryRef.current.offsetLeft;
      scrollLeft.current = categoryRef.current.scrollLeft;
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - categoryRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // Adjust speed
      categoryRef.current.scrollLeft = scrollLeft.current - walk;
    };
  
    const handleMouseUp = () => {
      isDragging.current = false;
    };
  
    // Check scroll position
    useEffect(() => {
      const checkScroll = () => {
        if (categoryRef.current) {
          setCanScrollLeft(categoryRef.current.scrollLeft > 0);
          setCanScrollRight(
            categoryRef.current.scrollLeft + categoryRef.current.clientWidth <
              categoryRef.current.scrollWidth
          );
        }
      };
  
      categoryRef.current?.addEventListener("scroll", checkScroll);
      return () => categoryRef.current?.removeEventListener("scroll", checkScroll);
    }, []);

  return (
    <div className="container my-5">
      <div>
        <h2 className="fw-bold text-uppercase mb-4">Portfolio</h2>

      </div>
      <div className="row">

      <div
  className="col-lg-10 col-md-10 col-sm-12 col-3 m-lg-auto services-category-scroll"
  ref={categoryRef}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseUp}
  onMouseUp={handleMouseUp}
>
  <div
    className={`services-category-item-home mx-lg-5 ${
      filter === "All" ? "active" : "inactive"
    }`}
    onClick={() => setFilter("All")}
  >
    All
  </div>

  {categories.map((category) => (
    <div
      key={category.id}
      className={`services-category-item-home  mx-lg-5 ${
        filter === category.portfolio_category_name ? "active" : "inactive"
      }`}
      onClick={() => setFilter(category.portfolio_category_name)}
    >
      {category.portfolio_category_name}
    </div>
  ))}
</div>

        <div className="col-lg-12 col-9 services-container-new-home justify-content-center mt-lg-5">

        {currentVideos.map((video) => (
          <div key={video.id} className="col-12 col-md-3 col-lg-3 mb-4">
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

      </div>
      {/* <div className="mb-4">
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
      </div> */}

      {/* <div className="row">
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
      </div> */}

      {/* <div className="d-flex justify-content-center mt-4">
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
      </div> */}
    </div>
  );
};

export default Portfolio;
