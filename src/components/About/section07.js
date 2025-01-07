import React, { useRef } from "react";
import Slider from "react-slick";

const Slider07 = () => {
  const sliderRef = useRef(null); // Reference to control the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Emily Brown",
      imgSrc: "../../Images/about/success_story01.svg", // Replace with your image URL
      description: "How to Promote Your Business",
      subtext:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Adipiscing Mattis Ullamcorper.",
    },
    {
      title: "Emily Brown",
      imgSrc: "../../Images/about/seccess_story02.svg", // Replace with your image URL
      description: "$50,000 Per Month",
      subtext:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Adipiscing Mattis Ullamcorper.",
    },
    {
      title: "Emily Brown",
      imgSrc: "../../Images/about/seccess_story03.svg", // Replace with your image URL
      description: "Custom YouTube Thumbnails",
      subtext:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Adipiscing Mattis Ullamcorper.",
    },
  ];

  return (
    <div className="container my-5 position-relative">
      <h2 className="font-weight-bold mb-4">Youtube SUCCESS STORIES</h2>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((card, index) => (
          <div key={index} className="p-2">
            <div className="success-stories-card h-100">
              <img
                src="../../Images/about/upperDots.svg"
                className="upperDots position-absolute"
                alt="upper dots"
              />
              <h2 className="card-title p-3">{card.title}</h2>

              <img
                src={card.imgSrc}
                className="success-stories-card-img-top p-3"
                alt={card.title}
                width={"100%"}
              />
              <div className="card-body">
                {card.subtext}
                <br />
                <u>See More</u>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider07;
