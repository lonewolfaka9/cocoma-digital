import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const videoList = [
    {
      id: 1,
      title: "Montage",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "../../Images/videoThumbnail.svg",
    },
    {
      id: 2,
      title: "Final Draft",
      videoSrc: "https://www.w3schools.com/html/movie.mp4",
      thumbnail: "../../Images/videoThumbnail.svg",
    },
    {
      id: 3,
      title: "Story Line",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "../../Images/videoThumbnail.svg",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videoList[0].videoSrc);
  const [currentThumbnail, setCurrentThumbnail] = useState(
    videoList[0].thumbnail
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleThumbnailClick = (videoSrc, thumbnail) => {
    setCurrentVideo(videoSrc);
    setCurrentThumbnail(thumbnail);
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.load();
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <h2 className="text-center mb-4">Final Output</h2>

        {/* Large Video Section */}
        <div
          className="position-relative mb-4 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            className={isPlaying ? "d-block w-100" : "d-none"} // Show video only when playing
            onEnded={handleVideoEnd}
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Thumbnail */}
          {!isPlaying && (
            <div className="position-relative">
              <img
                src={currentThumbnail}
                alt="Current thumbnail"
                className="img-fluid w-100 rounded"
              />
              <button
                onClick={handlePlayPause}
                className="btn btn-light position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "24px",
                }}
              >
                ▶
              </button>
            </div>
          )}
        </div>

        {/* Thumbnail Slider */}
        <div>
          <Slider {...settings}>
            {videoList.map((video) => (
              <div key={video.id} className="px-2">
                <div
                  className="position-relative"
                  onClick={() =>
                    handleThumbnailClick(video.videoSrc, video.thumbnail)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="img-fluid rounded"
                  />
                  <div
                    className="position-absolute top-50 start-50 translate-middle bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    ▶
                  </div>
                </div>
                <p className="text-center mt-2">{video.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
