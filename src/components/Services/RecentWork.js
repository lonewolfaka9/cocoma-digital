import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const RecentlyWorkedWith = ({ RecentWorkData }) => {
  const videoData = RecentWorkData?.group_single_service_recent_work || [];
  const sliderRef = React.useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
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
          <h2 className="fw-bold text-uppercase mb-4">Recently Worked With</h2>
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
              {playingVideo === item.id ? (
                <ReactPlayer
                  url={item.recent_work_video}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  onEnded={() => setPlayingVideo(null)} // Stop video after it finishes
                />
              ) : (
                <div
                  className=" position-relative"
                  onClick={() => setPlayingVideo(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.recent_work_video_thumbnail}
                    alt="Video Thumbnail"
                    className="img-fluid rounded"
                    height={200}
                  />
                  <div className="play-icon ">
                    <FaPlay size={30} color="white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyWorkedWith;
