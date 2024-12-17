import React from "react";
import Slider from "react-slick";

const Section07 = ({ ClientData }) => {
  const clients = ClientData.client || []; // Safely access 'client' array

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 2000, // Time between slides in milliseconds
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <Slider {...settings}>
        {clients.map((client) => (
          <div className="p-3 d-flex" key={client.id}>
            <div className="card">
              <img
                src={client.client_img}
                className="card-img-top"
                alt={client.client_description}
              />
              <div className="card-body">
                <p className="card-text fw-bold text-center">
                  {client.client_description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section07;
