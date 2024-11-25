import React from "react";
import Slider from "react-slick";

const Section07 = () => {
  const stories = [
    {
      id: 1,
      title: "300% Growth In Subscriber In 9 Months",
      imgSrc: "../../Images/story01.svg", // Replace with actual image source
    },
    {
      id: 2,
      title: "300% Growth In Subscriber In 9 Months",
      imgSrc: "../../Images/story01.svg", // Replace with actual image source
    },
    {
      id: 3,
      title: "300% Growth In Subscriber In 9 Months",
      imgSrc: "../../Images/story01.svg", // Replace with actual image source
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5" style={{ overflow: "hidden" }}>
      <h3 className="text-uppercase text-muted mb-3">Our Clients</h3>
      <h2 className="fw-bold">Latest Success Stories</h2>
      <Slider {...settings} className="mt-4">
        {stories.map((story) => (
          <div className="p-3" key={story.id}>
            <div className="card">
              <img
                src={story.imgSrc}
                className="card-img-top"
                alt={story.title}
              />
              <div className="card-body">
                <p className="card-text fw-bold text-center">{story.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section07;
