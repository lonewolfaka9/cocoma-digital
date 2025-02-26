import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import { MdOutlineArrowOutward } from "react-icons/md";

const Section01 = ({ bannerData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container-fluid section01-container">
      {bannerData.length > 1 ? (
        <Slider {...settings}>
          {bannerData.map((banner) => (
            <div key={banner.id} className="slider-slide">
              <div className="row align-items-center g-0">
                <div className="col-md-6 col-lg-6 text-md-start p-4 p-lg-5 p-md-5">
                  <h1 className="section-heading-01">{banner.group_banner_heading}</h1>
                  <div className="section-title mt-4 mb-3">{banner.group_banner_subheading}</div>
                  <Link to="/ScheduleMeeting" className="btn btn-warning clam-free-consultation-button mt-4">
                    {banner.group_banner_button_text}
                    <MdOutlineArrowOutward className="clam-free-consultation-button-icon" />
                  </Link>
                </div>
                {/* Image Section */}
                <div className="col-md-6 col-lg-6 d-flex justify-content-center">
                  <img src={banner.group_banner_img} alt={banner.group_banner_heading} className="img-fluid banner-img" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Single banner case
        bannerData.map((banner) => (
          <div key={banner.id} className="row align-items-center g-0">
            <div className="col-md-6 col-lg-6 text-center text-md-start p-5">
              <h1 className="fw-bold mt-3">{banner.group_banner_heading} {banner.id}</h1>
              <p className="text-muted">{banner.group_banner_subheading}</p>
              <Link to="/ScheduleMeeting" className="btn btn-warning clam-free-consultation-button">
                {banner.group_banner_button_text}
                <MdOutlineArrowOutward className="clam-free-consultation-button-icon" />
              </Link>
            </div>
            {/* Image Section */}
            <div className="col-md-6 col-lg-6 d-flex justify-content-center">
              <img src={banner.group_banner_img} alt={banner.group_banner_heading} className="img-fluid banner-img" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Section01;
  