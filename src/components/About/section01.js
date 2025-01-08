import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Section01 = ({ bannerData }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container-fluid">
      <Slider {...settings} style={{ padding: "0px" }}>
        {bannerData.map((banner) => (
          <div key={banner.id} className="row d-flex align-items-center">
            {/* Text Section */}
            <div className="col-md-6 col-lg-6 text-center text-md-start">
              <h2 className="fw-bold mt-3">{banner.group_banner_heading}</h2>
              <p className="text-muted">{banner.group_banner_subheading}</p>
              <Link
                to={"/ScheduleMeeting"}
                className="btn btn-warning fw-bold mb-5"
              >
                {banner.group_banner_button_text} <span>→</span>
              </Link>
            </div>
            {/* Image Section */}
            <div className="col-md-6 col-lg-6 d-flex justify-content-center">
              <img
                src={banner.group_banner_img}
                alt={banner.group_banner_heading}
                className="img-fluid youtube-graphic"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section01;
