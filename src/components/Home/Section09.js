import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const Section09 = ({ CreativeHouseSection = { creative_house: [], all_button_priority: {} } }) => {
  const [category, setCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAllItems, setShowAllItems] = useState(true);

  useEffect(() => {
    if (showAllItems) {
      const priorityItemIds = Object.values(CreativeHouseSection.all_button_priority).map(
        (button) => button.creative_house_item_id.toString()
      );

      console.log("Priority Item IDs:", priorityItemIds);

      const allItems = CreativeHouseSection?.creative_house
        ?.flatMap((cat) => cat.items || []) // Ensure items is always an array
        .filter((item) => priorityItemIds.includes(item.id.toString()));

      console.log("Filtered Items:",allItems  );
      setFilteredItems(allItems || []);
    } else {
      const selectedCategory = CreativeHouseSection?.creative_house?.find(
        (cat) => cat.creative_house_category_name === category
      );
      setFilteredItems(selectedCategory?.items || []);
    }
  }, [category, CreativeHouseSection, showAllItems]);

  const handleAllItemsClick = () => {
    setCategory("All");
    setShowAllItems(true);
  };

  const handleCategoryClick = (catName) => {
    setCategory(catName);
    setShowAllItems(false);
  };

  const handleCloseModal = () => {
    setVideoToPlay(null);
    setShowModal(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 col-md-9 col-sm-9 col-12">
          <h3 className="text-uppercase text-muted mb-3" style={{ fontSize: "20px" }}>
            LATEST WORK FROM
          </h3>
          <h2 className="fw-bold">OUR CREATIVE HOUSE</h2>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 col-12 d-flex justify-content-end align-items-center">
          <Link to="/Creative-House" className="text-warning view-all-link-text">
            View All
          </Link>
        </div>
      </div>

      <div className="mb-5 mt-2">
        <Slider {...sliderSettings} className="SliderCustom-width">
          <button
            className={`cat-filter-button btn me-2 ${category === "All" ? "btn-warning" : "btn-outline-secondary"}`}
            onClick={handleAllItemsClick}
          >
            All
          </button>
          {CreativeHouseSection?.creative_house?.slice(0, 7).map((cat) => (
            <button
              key={cat.id}
              className={`cat-filter-button btn me-2 ${
                category === cat.creative_house_category_name ? "btn-warning" : "btn-outline-secondary"
              }`}
              onClick={() => handleCategoryClick(cat.creative_house_category_name)}
            >
              {cat.creative_house_category_name}
            </button>
          ))}
        </Slider>
      </div>

      <div className="row">
        {filteredItems.slice(0, 16).map((item) => (
          <div key={item.id} className="col-md-3 col-lg-3 col-sm-6 col-6 col-xs-6 mb-4">
            <div className="card-CreativeHouse position-relative">
              <img
                src={
                  item.creative_house_thumbnail.startsWith("http")
                    ? item.creative_house_thumbnail
                    : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.creative_house_thumbnail}`
                }
                alt={item.creative_house_video_title}
              />
              {item.category !== "Posters" && (
                <div className="position-absolute top-50 start-50 translate-middle">
                  <button
                    className="btn rounded-circle creative-house-play-button"
                    onClick={() => {
                      setVideoToPlay({
                        url: item.creative_house_video_url,
                        title: item.creative_house_video_title,
                        VideoId: item.id,
                      });
                      setShowModal(true);
                    }}
                  >
                    <FaPlay className="fs-2" size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {videoToPlay && (
        <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static" size="lg" className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>{videoToPlay.title}</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url={videoToPlay.url}
                controls
                playing={true}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "white" }}>
            <Link to={`/Single-Video/${videoToPlay.VideoId}`}>
              <button className="btn btn-warning">See How We Edit</button>
            </Link>
            <Link to={`/ScheduleMeeting`}>
              <button className="btn btn-light">Book A Demo Call</button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Section09;
