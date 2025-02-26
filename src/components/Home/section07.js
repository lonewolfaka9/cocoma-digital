import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Section07 = ({ ClientData }) => {
  const clients = ClientData.client || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="container my-5 mt-5" style={{ overflow: "hidden" }}>
      <h3
        className="text-uppercase text-muted mb-3"
        style={{ fontSize: "20px" }}
      >
        Our Clients
      </h3>
      <h2 className="fw-bold text-uppercase">Latest Success Stories</h2>
      <Slider {...settings}>
        {clients.map((client) => (
          <div className="p-3 d-flex" key={client.id}>
            <div className="client-card">
              <Link to={`/client-sucess-stories/${client.id}`} >
              <img
                src={client.client_img}
                className="card-img-top"
                alt={client.client_description}
              /></Link>
              <div className="client-card-body">
                <p className="card-text fw-bold text-left">
                  {client.client_title}
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
