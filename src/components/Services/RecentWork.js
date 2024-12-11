import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const RecentlyWorkedWith = () => {
  const videoData = [
    {
      id: 1,
      image: "../../Images/recent-work.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      image: "../../Images/recent-work.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      image: "../../Images/recent-work.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      image: "../../Images/recent-work.svg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const sliderRef = React.useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null); // State to track the currently playing video

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides on larger screens
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5 position-relative">
      <div className="row">
        <div>
          <h3 className="mb-4">Recently Worked With</h3>
        </div>
        <div>
          <button
            className="custom-prev-arrow d-none d-lg-block d-md-block "
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaChevronLeft />
          </button>
          <button
            className="custom-next-arrow d-none d-lg-block d-md-block"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {videoData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="video-thumbnail position-relative">
              <ReactPlayer
                url={item.videoUrl}
                light={playingVideo !== item.id ? item.image : undefined}
                playing={playingVideo === item.id}
                controls={false}
                width="100%"
                playIcon={
                  playingVideo === item.id ? null : (
                    <div className="play-icon d-flex justify-content-center align-items-center">
                      <FaPlay size={30} color="white" />
                    </div>
                  )
                }
                onClickPreview={() => setPlayingVideo(item.id)} // Start playing on play button click
                onEnded={() => setPlayingVideo(null)} // Reset to thumbnail after video ends
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyWorkedWith;
