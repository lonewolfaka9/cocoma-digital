import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CreativeHouseServices = () => {
  const services = [
    {
      id: 1,
      title: "Promos & Trailer Editing",
      image: "../../Images/image(1).svg", // Replace with actual image
      link: "#",
    },
    {
      id: 2,
      title: "Podcasts Planning Productin And Editing",
      image: "../../Images/image(1).svg",
      link: "#",
    },
    {
      id: 3,
      title: "Podcasts Planning Productin And Editing",
      image: "../../Images/image(1).svg",
      link: "#",
    },
    {
      id: 4,
      title: "Podcasts Planning Productin And Editing",
      image: "../../Images/image(1).svg",
      link: "#",
    },
    {
      id: 5,
      title: "Podcasts Planning Productin And Editing",
      image: "../../Images/image(1).svg",
      link: "#",
    },
    {
      id: 6,
      title: "Podcasts Planning Productin And Editing",
      image: "../../Images/image(1).svg",
      link: "#",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Our Latest Promos",
      link: "#",
      icon: "../../Images/creativehouseVideoicon.svg",
    },
    {
      id: 2,
      name: "Our Latest Trailers",
      link: "#",
      icon: "../../Images/creativehouseVideoicon.svg",
    },
    {
      id: 3,
      name: "Our Latest Reels",
      link: "#",
      icon: "../../Images/creativehouseVideoicon.svg",
    },
    {
      id: 4,
      name: "Tiktok Videos",
      link: "#",
      icon: "../../Images/creativehouseVideoicon.svg",
    },
  ];

  return (
    <div className="container py-5">
      {/* Services Section */}
      <div className="text-center mb-4">
        <h2>Creative House Services</h2>
      </div>
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-6 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={service.image}
                alt={service.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{service.title}</h5>
                <a
                  href={service.link}
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  Explore Now &nbsp; <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="text-center mt-5">
        <h3>
          Explore More &nbsp;
          <span className="fw-bold text-decoration-underline">
            &lt; Creative Categories &gt;
          </span>
        </h3>
        <div className="row mt-4 g-3">
          {categories.map((category) => (
            <div key={category.id} className="col-6 col-md-3">
              <a
                href={category.link}
                className="d-block text-center text-dark text-decoration-none p-3 border rounded shadow-sm"
              >
                <div className="mb-2 d-flex align-items-center justify-content-center">
                  <img src={category.icon} alt={category.name} />
                </div>
                <h5 className=" pt-2 fw-bold ">{category.name}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeHouseServices;
