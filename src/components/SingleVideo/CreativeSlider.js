import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaPlay, FaPause, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReactPlayer from "react-player";
import { FaArrowLeft } from "react-icons/fa";

const CreativeSlider = ({ CreativeSliderData }) => {
  const sliderRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null); // state to track which video is playing

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 768, // For tablets and smaller
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Use creative_house_approach data
  const sliderContent = CreativeSliderData?.creative_house_approach || [];

  const handlePlayClick = (videoUrl) => {
    setPlayingVideo(videoUrl); // Set the video URL to be played
  };

  const handlePauseClick = () => {
    setPlayingVideo(null); // Clear the video URL to stop playing
  };

  return (
    <div className="creative-approach-bg pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center fw-bold mb-4">Creative Approach</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <Slider {...settings} ref={sliderRef}>
              {sliderContent.map((item, index) => (
                <div key={index} className="p-3">
                  <div className="slider-image-wrapper position-relative mb-3">
                    {playingVideo === item.approach_video_url ? (
                      // Show ReactPlayer if video is playing
                      <ReactPlayer
                        url={item.approach_video_url}
                        playing={true}
                        controls={true}
                        width="100%"
                        height="400px"
                      />
                    ) : (
                      // Show the thumbnail image
                      <img
                        src={item.approach_thumbnail}
                        alt={item.approach_heading}
                        className=""
                        style={{
                          width: "100%",
                          maxHeight: "400px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    )}

                    <button
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        padding: "10px 15px",
                        zIndex: 10, // Ensure button is on top of the image
                      }}
                      onClick={
                        playingVideo === item.approach_video_url
                          ? handlePauseClick // Pause if the video is already playing
                          : () => handlePlayClick(item.approach_video_url) // Play the video
                      }
                    >
                      {playingVideo === item.approach_video_url ? (
                        <FaPause size={20} />
                      ) : (
                        <FaPlay size={20} />
                      )}
                    </button>
                  </div>
                  <div className="d-flex align-items-end">
                    <p className="creative-house-approach-text">{index + 1}</p>
                    <h4 className="fw-bold ">{item.approach_heading}</h4>
                  </div>
                  <div>
                    <p className="text-muted ">{item.approach_description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-12 text-end position-relative">
            <button
              className="btn btn-dark creative-approach-arrow-button translate-middle-y"
              style={{ zIndex: 5 }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaArrowLeft size={25} />
            </button>
            <button
              className="btn btn-light creative-approach-arrow-button translate-middle-y"
              style={{ zIndex: 5 }}
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSlider;
