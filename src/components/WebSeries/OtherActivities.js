import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const activitiesData = [
  {
    category: "Influencer Marketing",
    slides: [
      {
        title: "YouTube Creator & Influencer Marketing",
        description:
          "Lorem Ipsum Dolor Sit Amet Consectetur. Et Egestas Duis Nunc Elementum Velit Sed Nulla Ut.",
        image: "../../Images/OtherActivitiesimg.svg",
        footer: "Ulvinor Convallis. Ornare Vivamus Eget Neque Dolor Condime",
      },
      {
        title: "Collaborate with Top Influencers",
        description:
          "Collaborate with high-reach influencers to maximize audience engagement.",
        image: "../../Images/OtherActivitiesimg.svg",
        footer: "Collaboration Creates Impact.",
      },
    ],
  },
  {
    category: "SEO",
    slides: [
      {
        title: "SEO Optimization & Analysis",
        description:
          "Improve your search rankings with cutting-edge SEO strategies.",
        image: "https://via.placeholder.com/500x300?text=SEO+Slide+1",
        footer: "Boost Your Rankings with Strategic Analysis.",
      },
    ],
  },
];

const OtherActivities = () => {
  const [activeCategory, setActiveCategory] = useState("Influencer Marketing");
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  // Filter data based on category
  const selectedCategory = activitiesData.find(
    (item) => item.category === activeCategory
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setActiveSlide(current), // Track current slide
  };

  return (
    <div className="container-fluid bg-black">
      <div className="container bg-black text-white py-5">
        {/* Header */}
        <h2 className="text-center fw-bold mb-4">Other Activities</h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-4">
          {activitiesData.map((item) => (
            <button
              key={item.category}
              className={`btn me-2 ${
                activeCategory === item.category
                  ? "btn-outline-light"
                  : "btn-outline-secondary"
              }`}
              onClick={() => {
                setActiveCategory(item.category);
                setActiveSlide(0); // Reset slide index when category changes
              }}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="row mt-5 px-3">
          {/* Text Content */}
          <div className="col-12 col-md-6 mb-4 mt-5 mb-md-0">
            <h4 className="fw-bold text-warning">
              {selectedCategory.slides[activeSlide].title}
            </h4>
            <p>{selectedCategory.slides[activeSlide].description}</p>
          </div>

          {/* Image Slider */}
          <div className="col-12 col-md-6 position-relative">
            <Slider {...sliderSettings} ref={sliderRef}>
              {selectedCategory.slides.map((slide, index) => (
                <div key={index}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className=" img-fluid rounded"
                  />
                  <div className="text-center mt-3">
                    <p>{slide.footer}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <button
              className="btn btn-warning position-absolute  start-0 translate-middle-y"
              style={{ zIndex: 5 }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <IoIosArrowBack size={30} />
            </button>
            <button
              className="btn  btn-warning position-absolute  end-0 translate-middle-y"
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

export default OtherActivities;
