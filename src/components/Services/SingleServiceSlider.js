import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Service/redux/cartSlice";
import Slider from "react-slick";

const SingleServiceSlider = ({ matchingItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.id === itemId);
  };

  const handleAddToCart = (matchingItem) => {
    const itemWithCategory = {
      ...matchingItem,
    };
    dispatch(addItemToCart(itemWithCategory));
  };

  const fullText = matchingItem.group_service_item_description2;
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const visibleText = isExpanded ? fullText : truncateText(fullText, 120);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="container my-5">
      <div className="row">
        <h1>{matchingItem.group_service_item_title}</h1>
        <p className="text-muted">
          Home / Services / {matchingItem.group_service_item_title}
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Slider {...settings}>
            {matchingItem.group_single_service_image.map((images, index) => (
              <div key={index}>
                <img
                  src={images.single_service_img}
                  alt={`Slide ${index + 1}`}
                  className="single-service-slider-image"
                />
              </div>
            ))}
          </Slider>

          <div className="d-flex align-items-center mt-3">
            <p className="mb-0">
              {visibleText}{" "}
              <span
                className="text-primary cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Hide" : "Show More"}
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-1 d-none d-sm-none d-lg-block d-md-block"></div>
        <div className="col-md-5">
          <ul className="list-unstyled text-muted">
            {matchingItem.featureed_description
              .split("</p>")
              .filter((tag) => tag.trim() !== "")
              .map((tag, index) => (
                <div key={index} style={{ marginBottom: "5px" }}>
                  {tag.replace("<p>", "").trim()}
                </div>
              ))}
          </ul>

          <h5 className="mt-4">Running Time</h5>
          <div className="d-flex">
            <button className="btn btn-warning me-2">One Time Only</button>
            <button className="btn btn-outline-secondary">Recurring</button>
          </div>

          <button
            className="btn btn-dark mt-4 px-4 py-2"
            onClick={() => handleAddToCart(matchingItem)}
          >
            {isItemInCart(matchingItem.id) ? "Added" : "ADD"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceSlider;
