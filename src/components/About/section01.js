import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
const Section01 = ({ bannerData }) => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay delay in milliseconds
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Hide arrows
    fade: true, // Use fade transition
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Ensure arrows are hidden on small screens
        },
      },
    ],
  };

  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      {bannerData.length > 1 ? (
        <Slider {...settings}>
          {bannerData.map((banner) => (
            <div key={banner.id} className="slider-slide">
              <div className="row d-flex ">
                <div className="col-md-6 col-lg-6  p-4 p-lg-5 p-md-5  text-md-start ">
                  <h1 className="section-heading-01" style={{ color: "black" }}>
                    {banner.group_banner_heading} 
                  </h1>
                  <div className="section-title mt-5 mb-3">
                    {banner.group_banner_subheading}
                  </div>
                  <Link
                    to={"/ScheduleMeeting"}
                    className="btn mt-5 m btn-warning clam-free-consultation-button"
                  >
                    {banner.group_banner_button_text}{" "}
                    <span>
                      <MdOutlineArrowOutward className="clam-free-consultation-button" />
                    </span>
                  </Link>
                </div>
                {/* Image Section */}
                <div className="col-md-6 col-lg-6 d-flex justify-content-center services-page-banner ">
                  <img
                    src={banner.group_banner_img}
                    alt={banner.group_banner_heading}
                    className="img-fluid youtube-graphic w-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Single banner case, don't show slider
        bannerData.map((banner) => (
          <div key={banner.id} className="row d-flex align-items-center">
            {/* Text Section */}
            <div className="col-md-6 col-lg-6 text-center text-md-start text-white p-5">
              <h1 className="fw-bold mt-3" style={{ color: "black" }}>
                {banner.group_banner_heading} {banner.id}
              </h1>
              <p className="text-muted">{banner.group_banner_subheading}</p>
              <Link
                to={"/ScheduleMeeting"}
                className="btn btn-warning clam-free-consultation-button"
              >
                {banner.group_banner_button_text}{" "}
                <span>
                  <MdOutlineArrowOutward className="clam-free-consultation-button" />
                </span>
              </Link>
            </div>
            {/* Image Section */}
            <div className="col-md-6 col-lg-6 d-flex justify-content-center">
              <img
                src={banner.group_banner_img}
                alt={banner.group_banner_heading}
                className="img-fluid youtube-graphic"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Section01;
