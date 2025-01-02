import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoEditingServices = () => {
  const services = [
    {
      id: 1,
      title: "Whiteboard Animation",
      image: "../../Images/about/youtube-channel.svg",
    },
    {
      id: 2,
      title: "Motion Graphics",
      image: "../../Images/about/youtube-channel.svg",
    },
    {
      id: 3,
      title: "Video Editing",
      image: "../../Images/about/youtube-channel.svg",
    },
    {
      id: 4,
      title: "3D Animation",
      image: "../../Images/about/youtube-channel.svg",
    },
  ];

  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: 2,
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
        {services.map((service) => (
          <div key={service.id} className="px-3">
            <div className="card text-center">
              <div className="card-body">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid mb-3"
                />
                <h5 className="card-title">{service.title}</h5>
                <button className="btn btn-dark">Add</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoEditingServices;
