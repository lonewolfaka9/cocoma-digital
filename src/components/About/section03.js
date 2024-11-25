import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Section03 = () => {
  const sliderRef = useRef(null); // Reference to control the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    ],
  };

  const cards = [
    {
      title: "Growth-Hacking Services",
      img: "../../Images/about/youtube-channel.svg",
    },
    {
      title: "UI/UX Design for Websites",
      img: "../../Images/about/youtube-channel.svg",
    },
    {
      title: "Website Design and Development",
      img: "../../Images/about/youtube-channel.svg",
    },
    {
      title: "Landing Page Design",
      img: "../../Images/about/youtube-channel.svg",
    },
  ];

  return (
    <div className="container my-5 position-relative">
      <h2 className="font-weight-bold mb-4">
        YouTube Channel Growth Hacking Services
      </h2>
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 5 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 5 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        <IoIosArrowForward size={30} />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2">
            <div className="card h-100">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body ">
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section03;
