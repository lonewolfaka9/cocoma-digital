import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SocialWorkSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  const cards = [
    {
      image: "../../Images/about/socialWork.svg", // Replace with actual image URL
      title: "Lorem Ipsum",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non To",
    },
    {
      image: "../../Images/about/socialWork.svg", // Replace with actual image URL
      title: "Lorem Ipsum",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non To",
    },
    {
      image: "../../Images/about/socialWork.svg", // Replace with actual image URL
      title: "Lorem Ipsum",
      text: "Lorem Ipsum Dolor Sit Amet Consectetur. Non To",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Social Work</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-3 mb-3">
            <div className="card">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SocialWorkSlider;
