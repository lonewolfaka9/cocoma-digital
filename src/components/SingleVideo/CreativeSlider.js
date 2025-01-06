import React, { useRef } from "react";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CreativeSlider = ({ CreativeSliderData }) => {
  const sliderRef = useRef(null);

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
          arrows: true,
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
  console.log(sliderContent);
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
                  <div className="slider-image-wrapper mb-3">
                    <img
                      src={item.approach_thumbnail} // Use image property from API
                      alt={item.approach_heading}
                      className="position-relative"
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <button
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        padding: "10px 15px",
                      }}
                    >
                      <FaPlay size={20} />
                    </button>
                  </div>
                  <div>
                    <h4 className="fw-bold">
                      {index + 1} {item.approach_heading}
                    </h4>
                    <p className="text-muted px-4">
                      {item.approach_description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-12 text-end position-relative">
            <button
              className="btn btn-dark translate-middle-y"
              style={{ zIndex: 5 }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <IoIosArrowBack size={30} />
            </button>
            <button
              className="btn btn-light translate-middle-y"
              style={{ zIndex: 5 }}
              onClick={() => sliderRef.current.slickNext()}
            >
              <IoIosArrowForward size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSlider;
