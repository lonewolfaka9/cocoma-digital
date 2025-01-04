import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = ({ FinalOutputData }) => {
  console.log(FinalOutputData);
  const sliderContent = FinalOutputData?.creative_house_final_output || [];

  console.log("sliderContent>>>>>>>>>>>", sliderContent);

  // Initialize current video and thumbnail from sliderContent
  const [currentVideo, setCurrentVideo] = useState(
    sliderContent[0]?.final_output_video_url || ""
  );
  const [currentThumbnail, setCurrentThumbnail] = useState(
    sliderContent[0]?.final_output_thumbnail || ""
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleThumbnailClick = (
    final_output_video_url,
    final_output_thumbnail
  ) => {
    setCurrentVideo(final_output_video_url);
    setCurrentThumbnail(final_output_thumbnail);
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
            {sliderContent.map((video) => (
              <div key={video.id} className="px-2">
                <div
                  className="position-relative"
                  onClick={() =>
                    handleThumbnailClick(
                      video.final_output_video_url,
                      video.final_output_thumbnail
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={video.final_output_thumbnail}
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
                <p className="text-center mt-2">{video.final_output_title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
