import React, { useState, useEffect, useRef } from "react";
import { FaChevronUp, FaChevronDown, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const Section09 = ({ CreativeHouseSection = { creative_house: [], all_button_priority_creative_house: {} } }) => {
  const categories = CreativeHouseSection?.creative_house || [];
  const [activeCategory, setActiveCategory] = useState(null); // null means "Show All"
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const categoryRef = useRef(null);
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(null); // Default to "Show All"
    }
  }, [categories]);

  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = 100;
      categoryRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      if (categoryRef.current) {
        setCanScrollUp(categoryRef.current.scrollTop > 0);
        setCanScrollDown(
          categoryRef.current.scrollTop + categoryRef.current.clientHeight < categoryRef.current.scrollHeight
        );
      }
    };

    categoryRef.current?.addEventListener("scroll", checkScroll);
    return () => categoryRef.current?.removeEventListener("scroll", checkScroll);
  }, []);

  // Get items based on selected category
  const filteredItems =
    activeCategory === null
      ? categories.flatMap((category) => category.items || []) // Show all items
      : activeCategory.items;

  return (
    <div className="container">
       <div className="row mt-5 ">
              <div className="col-lg-8">
              <h3
        className="text-uppercase text-muted mb-3"
        style={{ fontSize: "20px" }}
      >
        Latest work  from
      </h3>
      <h2 className="fw-bold text-uppercase">our creative house</h2>
              </div>
              <div className="col-lg-4 d-flex justify-content-end align-items-end">
                  <Link to="/Creative-House">
                    <button className="btn" >
                        View All  
                    </button>
                  </Link>
              </div>
              
            </div>
    

      <div className="row mt-3 position-relative">
        {canScrollUp && (
          <button className="scroll-btn up" onClick={() => scrollCategories("up")}>
            <FaChevronUp />
          </button>
        )}

        <div className="col-lg-8 col-md-10 col-sm-12 col-3 text-center services-category-scroll" ref={categoryRef}>
          {/* "Show All" button */}
          <div
            className={`services-category-item-home mx-lg-3 ${activeCategory === null ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              className={`services-category-item-home ${activeCategory?.id === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
                <img src= {category.creative_house_icon} className="new-services-cat-images"/>
              <p>
              {category.creative_house_category_name}
              </p>
              
              
            </div>
          ))}
        </div>


        {canScrollDown && (
          <button className="scroll-btn down d-lg-none d-md-none d-sm-none d-block" onClick={() => scrollCategories("down")}>
            <FaChevronDown />
          </button>
        )}

        <div className="col-lg-12 col-md-12 col-sm-12 col-9 mt-lg-5 creative-container-new-home">
          <div className="row">
            {filteredItems.slice(0, 8).map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                <div className="position-relative">
                  <img
                    src={
                      item.creative_house_thumbnail.startsWith("http")
                        ? item.creative_house_thumbnail
                        : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.creative_house_thumbnail}`
                    }
                    alt={item.creative_house_video_title}
                    className="img-fluid"
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
        </div>
      </div>
       <div className="row">
              <div className="col-12 d-lg-none d-md-none d-sm-none  text-center">
                <Link to="/Creative-House">
                <button className="explore-button">
                    View All  
                </button>
                </Link>
              </div>
            </div>
      

      {videoToPlay && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static" size="lg" className="custom-modal">
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
