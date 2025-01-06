import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
const Section09 = ({ CreativeHouseSection }) => {
  const [category, setCategory] = useState("Videos");
  const [filteredItems, setFilteredItems] = useState([]);
  const [videoToPlay, setVideoToPlay] = useState(null);

  useEffect(() => {
    const selectedCategory = CreativeHouseSection?.creative_house?.find(
      (cat) => cat.creative_house_category_name === category
    );
    if (selectedCategory) {
      setFilteredItems(selectedCategory.items);
    }
  }, [category, CreativeHouseSection]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-11">
          {" "}
          <h5 className="text-secondary">LATEST WORK FROM</h5>
          <h2 className="fw-bold">OUR CREATIVE HOUSE</h2>
        </div>
        <div className="col-lg-1">
          {" "}
          <a
            href="/Creative-House"
            className="ms-auto text-warning text-decoration-none"
          >
            View All
          </a>
        </div>
      </div>

      <div className="mb-5 mt-2">
        <Slider {...sliderSettings} className="SliderCustom-width">
          {CreativeHouseSection?.creative_house?.slice(0, 7).map((cat) => (
            <button
              key={cat.id}
              className={`cat-filter-button btn w-auto me-2 ${
                category === cat.creative_house_category_name
                  ? "btn-warning"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setCategory(cat.creative_house_category_name)}
            >
              {cat.creative_house_category_name}
            </button>
          ))}
        </Slider>
      </div>

      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card-CreativeHouse position-relative">
              <img
                src={
                  item.creative_house_thumbnail.startsWith("http")
                    ? item.creative_house_thumbnail
                    : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.creative_house_thumbnail}`
                }
                alt="Thumbnail"
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <button
                  className="btn btn-light rounded-circle"
                  onClick={() => setVideoToPlay(item.creative_house_video_url)}
                >
                  <FaPlay className="fs-2" size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {videoToPlay && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Video Player</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setVideoToPlay(null)}
                ></button>
              </div>
              <div className="modal-body">
                <video
                  controls
                  style={{ width: "100%" }}
                  src={videoToPlay.startsWith("http") ? videoToPlay : ""}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section09;
