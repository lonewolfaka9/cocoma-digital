import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Service/redux/cartSlice"; // Ensure `removeItemFromCart` is available in your slice
import Slider from "react-slick";

const SingleServiceSlider = ({ matchingItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("One Time Only"); // Default value

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the item is in the cart
  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.id === itemId);
  };

  const handleToggleCart = (item) => {
    if (isItemInCart(item.id)) {
      // If item is in cart, remove it
      dispatch(removeItemFromCart(item.id));
    } else {
      // If item is not in cart, add it with the selected option
      const itemWithCategory = {
        ...item,
        subscriptionType: selectedOption, // Add selected option
      };
      dispatch(addItemToCart(itemWithCategory));
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
            <h3>{matchingItem.group_service_item_title}</h3>
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
            <button
              className={`btn ${
                selectedOption === "One Time Only"
                  ? "btn-warning"
                  : "btn-outline-secondary"
              } me-2`}
              onClick={() => handleOptionSelect("One Time Only")}
            >
              One Time Only
            </button>
            <button
              className={`btn ${
                selectedOption === "Recurring"
                  ? "btn-warning"
                  : "btn-outline-secondary"
              }`}
              onClick={() => handleOptionSelect("Recurring")}
            >
              Recurring
            </button>
          </div>

          <button
            className={`btn mt-4 px-4 py-2 ${
              isItemInCart(matchingItem.id) ? "btn-warning" : "btn-dark"
            }`}
            onClick={() => handleToggleCart(matchingItem)}
          >
            {isItemInCart(matchingItem.id) ? "Added" : "ADD"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceSlider;
