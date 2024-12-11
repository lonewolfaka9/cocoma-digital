import React, { useState } from "react";
import Slider from "react-slick";

const SingleServiceSlider = () => {
  const slides = [
    {
      image: "../../Images/singleServiceImage.png",
      title: "Complete Podcast Video Editing Service",
      description: `
        Characters included
        Voice over recording
        Storyboard
        Script writing
        Illustrated background included
        Subtitles included
      `,
    },
    {
      image: "../../Images/singleServiceImage.png",
      title: "Advanced Podcast Editing Service",
      description: `
        Premium characters included
        Professional voice overs
        Detailed storyboarding
        Advanced scriptwriting
        3D illustrated backgrounds
        Auto subtitles included
      `,
    },
    {
      image: "../../Images/singleServiceImage.png",
      title: "Complete Podcast Video Editing Service",
      description: `
        Characters included
        Voice over recording
        Storyboard
        Script writing
        Illustrated background included
        Subtitles included
      `,
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "Lorem ipsum dolor sit amet consectetur. Faucibus nulla habitant condimentum neque placerat volutpat laoreet ultrices pharetra. Additional text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lectus libero. Sed venenatis, ipsum sit amet gravida aliquam, purus justo laoreet dolor, et fermentum enim erat eu arcu.";

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const visibleText = isExpanded ? fullText : truncateText(fullText, 120);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (current) => setCurrentSlideIndex(current),
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="">Podcast Video Editing</h1>
        <p className=" text-muted">
          Home / Services / Video Editing / 2D Video Editing
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="single-service-slider-image"
                />
              </div>
            ))}
          </Slider>
          <i className="bi bi-play-circle-fill text-dark fs-4 me-2"></i>
          <div className="d-flex align-items-center mt-3">
            <p className="mb-0">
              {visibleText}{" "}
              <span
                className="text-primary cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Hide" : "Show More"}
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-1 d-none d-sm-none d-lg-block d-md-block "></div>
        <div className="col-md-5">
          <h1 className="fw-bold">{slides[currentSlideIndex].title}</h1>
          <ul className="list-unstyled text-muted">
            {slides[currentSlideIndex].description
              .trim()
              .split("\n")
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>

          <h5 className="mt-4">Running Time</h5>
          <div className="d-flex">
            <button className="btn btn-warning me-2">One Time Only</button>
            <button className="btn btn-outline-secondary">Recurring</button>
          </div>

          <button className="btn btn-dark mt-4 px-4 py-2">Add</button>
        </div>
      </div>

      {/* Floating Button */}
      {/* <div className="floating-cart position-fixed bottom-0 end-0 me-4 mb-4">
        <button className="btn btn-warning rounded-pill px-3 py-2">
          <i className="bi bi-cart-fill me-2"></i>1 service
        </button>
      </div> */}
    </div>
  );
};

export default SingleServiceSlider;
