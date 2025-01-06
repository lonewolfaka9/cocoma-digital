import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const RecentlyWorkedWith = ({ RecentWorkData }) => {
  const videoData = RecentWorkData?.group_single_service_recent_work || [];

  console.log("RecentWorkData>>", videoData);

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
                url={item.recent_work_video}
                light={
                  playingVideo !== item.id ? item.recent_work_video : undefined
                }
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
                onClickPreview={() => setPlayingVideo(item.id)}
                onEnded={() => setPlayingVideo(null)}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyWorkedWith;
