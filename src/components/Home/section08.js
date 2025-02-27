import React, { useState, useEffect, useRef } from "react";
import { FaChevronUp, FaChevronDown, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const Section08 = ({ MarketingHouseSection = { marketing_house: [], all_button_priority_marketing_house: {} } }) => {
  const categories = MarketingHouseSection?.marketing_house || [];
  const [activeCategory, setActiveCategory] = useState(null); // null means "Show All"
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const categoryRef = useRef(null);
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [showModal, setShowModal] = useState(false);

  console.log("MarketingHouseSection", MarketingHouseSection);
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
      ? categories.flatMap((category) => category.items) // Show all items
      : activeCategory.items;

  return (
    <div className="container">
      <div className="row mt-5 ">
        <h3 className="text-uppercase text-muted mb-3" style={{ fontSize: "20px" }}>
          Latest work  from
        </h3>
        <h2 className="fw-bold text-uppercase"> Our marketing house </h2>
      </div>

      <div className="row mt-3 position-relative">
        {canScrollUp && (
          <button className="scroll-btn up" onClick={() => scrollCategories("up")}>
            <FaChevronUp />
          </button>
        )}

        <div className="col-lg-8 col-md-10 col-sm-12 col-3 text-center px-2 services-category-scroll" ref={categoryRef}>
          {/* "Show All" button */}
          <div
            className={`services-category-item-home ${activeCategory === null ? "active" : ""}`}
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
              {category.category_name}
            </div>
          ))}
        </div>
        <div className="col-lg-4 justify-content-end d-lg-flex d-md-flex d-sm-none d-none mt-3">
        <Link to="/View-all-Series">
          <button className="explore-button">
              View All  
          </button>
          </Link>
        </div>

        {canScrollDown && (
          <button className="scroll-btn down d-lg-none d-md-none d-sm-none d-block" onClick={() => scrollCategories("down")}>
            <FaChevronDown />
          </button>
        )}

        <div className="col-lg-12 col-md-12 col-sm-12 col-9 mt-lg-5 marketinghouse-container-new-home">
          <div className="row w-100">
            {filteredItems.slice(0, 8).map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 col-xs-12 mb-3">
                <div className="position-relative">
                  <img
                    src={
                      item.poster_image.startsWith("http")
                        ? item.poster_image
                        : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.poster_image}`
                    }
                    alt={item.marketing_house_video_title}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-lg-none d-md-none d-sm-none  text-center">
          <Link to="/View-all-Series">
          <button className="explore-button">
              View All  
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Section08;
