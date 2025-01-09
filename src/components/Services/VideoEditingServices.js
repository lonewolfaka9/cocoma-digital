import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const VideoEditingServices = ({ groupServiceItems }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 if 3 or more items, else show the number of items
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1, // Mobile: Show 1 item
        },
      },
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: groupServiceItems.length >= 2 ? 2 : 1, // Tablets: Show 2 if there are 2 items, else show 1
        },
      },
    ],
  };

  return (
    <div className="container my-5 position-relative">
      <div className="row">
        <div>
          <h3 className=" mb-4">Other Video Editing Services</h3>
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
        {groupServiceItems.map((service, index) => (
          <div className="card text-center">
            <a
              href={`/Single_Services/${service.id}`}
              style={{ color: "black" }}
            >
              <div className="card-body">
                <img
                  src={service.group_service_item_thumbnail}
                  alt={service.group_service_item_title}
                  className="mb-3"
                  width={"400px"}
                />
                <h5 className="card-title">
                  {service.group_service_item_title}
                </h5>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoEditingServices;
