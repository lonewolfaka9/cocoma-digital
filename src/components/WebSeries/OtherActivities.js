import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OtherActivities = ({ itemData }) => {
  const [activeCategory, setActiveCategory] = useState(
    itemData.other_activity_category[0]?.category_name || ""
  );
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeTextItem, setActiveTextItem] = useState(null);
  const sliderRef = useRef(null);

  // Update filtered items and text content when the active category changes
  useEffect(() => {
    const selectedCategory = itemData.other_activity_category.find(
      (category) => category.category_name === activeCategory
    );

    if (selectedCategory) {
      const items = selectedCategory.other_activity_item || [];
      setFilteredItems(items);
      setActiveTextItem(items[0]); // Set the first item as the active text content
    }
  }, [activeCategory, itemData]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container-fluid bg-black">
      <div className="container bg-black text-white py-5">
        {/* Header */}
        <h2 className="text-center fw-bold mb-4">Other Activities</h2>

        {/* Filter Buttons */}
        <div className="d-flex mt-5 justify-content-center mb-4">
          {itemData.other_activity_category.map((item) => (
            <button
              key={item.category_name}
              className={`btn me-2 ${
                activeCategory === item.category_name
                  ? "btn-outline-light"
                  : "btn-outline-secondary"
              }`}
              onClick={() => {
                setActiveCategory(item.category_name);
              }}
            >
              {item.category_name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="row mt-5 px-3">
          {/* Text Content */}
          {activeTextItem ? (
            <div className="col-12 col-md-6 mb-4 mt-5 mb-md-0">
              <h3 className="fw-bold text-warning">{activeTextItem.title}</h3>
              <p className="other-activiy-text-slide">
                {activeTextItem.description}
              </p>
            </div>
          ) : (
            <div className="col-12 col-md-6">
              <p className="text-center">
                No items available for this category.
              </p>
            </div>
          )}

          {/* Image Slider */}
          <div className="col-12 col-md-6 position-relative">
            <Slider {...sliderSettings} ref={sliderRef}>
              {filteredItems.map((item) => {
                const images = [
                  item.image1,
                  item.image2,
                  item.image3,
                  item.image4,
                ].filter(Boolean); // Filter out undefined/null images
                return images.map((image, i) => (
                  <div key={`${item.id}-${i}`}>
                    <img
                      src={image}
                      alt={`Slide ${i + 1}`}
                      className="other-activity-slider-images"
                    />
                  </div>
                ));
              })}
            </Slider>
            <button
              className="btn btn-warning position-absolute other-activity-button-next-prev start-0 translate-middle-y"
              style={{ zIndex: 5 }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <IoIosArrowBack size={30} />
            </button>
            <button
              className="btn btn-warning position-absolute other-activity-button-next-prev end-0 translate-middle-y"
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
