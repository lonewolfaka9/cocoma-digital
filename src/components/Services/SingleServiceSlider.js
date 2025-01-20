import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Service/redux/cartSlice";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from react-bootstrap
import { FaPlay } from "react-icons/fa";

const SingleServiceSlider = ({ matchingItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("One Time Only");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [videoUrl, setVideoUrl] = useState(""); // State to store the video URL

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.id === itemId);
  };

  const handleToggleCart = (item) => {
    if (isItemInCart(item.id)) {
      dispatch(removeItemFromCart(item.id));
    } else {
      const itemWithCategory = {
        ...item,
        subscriptionType: selectedOption,
      };
      dispatch(addItemToCart(itemWithCategory));
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePlayVideo = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsModalOpen(true); // Open the modal when play is clicked
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

  // Placeholder image URL
  const placeholderImage =
    "https://placehold.jp/000000/ffffff/150x150.png?text=Cocoma%20Digitals"; // Replace with the actual placeholder image path

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
          {matchingItem.group_single_service_image &&
          matchingItem.group_single_service_image.length > 0 ? (
            <Slider {...settings}>
              {matchingItem.group_single_service_image.map((images, index) => (
                <div key={index}>
                  <img
                    src={images.single_service_img || placeholderImage} // Use placeholder if image is not available
                    alt={`Slide ${index + 1}`}
                    className="single-service-slider-image"
                  />
                  {images.single_service_upload_video && (
                    <button
                      className="btn  mt-2"
                      onClick={() =>
                        handlePlayVideo(images.single_service_upload_video)
                      }
                    >
                      <FaPlay size={30} />
                    </button>
                  )}
                </div>
              ))}
            </Slider>
          ) : (
            <div>
              <img
                src={placeholderImage} // Use placeholder image when no images are available
                alt="Placeholder"
                className="single-service-slider-image"
              />
            </div>
          )}

          <div className="d-flex align-items-center mt-5">
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
                  {tag
                    .replace("<p>", "")
                    .replace(/&nbsp;/g, " ")
                    .trim()}
                </div>
              ))}
          </ul>

          <h3 className="mt-4 fw-bold">Running Time</h3>
          <div className="d-flex w-100">
            <button
              className={`btn w-50 p-2 single-service-add-recurring-button-text ${
                selectedOption === "One Time Only"
                  ? "btn-warning"
                  : "btn-outline-secondary"
              } me-2`}
              onClick={() => handleOptionSelect("One Time Only")}
            >
              One Time Only
            </button>
            <button
              className={`btn w-50 single-service-add-recurring-button-text ${
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
            className={`btn w-100 mt-4 p-2 px-4 py-2 single-service-add-recurring-button-text me-2 ${
              isItemInCart(matchingItem.id) ? "btn-warning" : "btn-dark"
            }`}
            onClick={() => handleToggleCart(matchingItem)}
          >
            {isItemInCart(matchingItem.id) ? "Added" : "ADD"}
          </button>
        </div>
      </div>

      {/* React Bootstrap Modal */}
      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        centered
        size="lg"
      >
        <Modal.Header
          style={{ background: "white" }}
          closeButton
        ></Modal.Header>
        <Modal.Body style={{ background: "white" }}>
          <ReactPlayer
            url={videoUrl}
            controls
            playing
            width="100%"
            height="100%"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SingleServiceSlider;
