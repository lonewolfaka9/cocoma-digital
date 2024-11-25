import React, { useState } from "react";
import { Link } from "react-router-dom";

const platformServicesData = [
  {
    title: "LinkedIn Growth & Management Services",
    img: "../../Images/linkedin.svg",
  },
  {
    title: "YouTube Growth & Management Services",
    img: "../../images/youtube.svg",
  },
  {
    title: "Instagram Growth & Management Services",
    img: "../../Images/instagram.svg",
  },
  {
    title: "Facebook Growth & Management Services",
    img: "../../Images/facebook.svg",
  },
  {
    title: "TikTok Growth & Management Services",
    img: "../../Images/tiktok.svg",
  },
  { title: "Twitter Growth & Management Services", img: "../../Images/x.svg" },
];

const Section04 = () => {
  const [showMore, setShowMore] = useState(false);

  // Display either 3 or all items based on "Show More" state
  const displayedServices = showMore
    ? platformServicesData
    : platformServicesData.slice(0, 6);

  return (
    <div className="container text-center my-5">
      <h2>OUR SERVICES BY PLATFORM</h2>
      <div className="row">
        {displayedServices.map((service, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={service.img}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <Link to="#" className="btn btn-dark">
                  Explore Now &#8594;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-outline-dark mt-3"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"} &#8595;
      </button>
    </div>
  );
};

export default Section04;
