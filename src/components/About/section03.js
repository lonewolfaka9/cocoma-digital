import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Service/redux/cartSlice"; // Import removeItemFromCart action
import { Link } from "react-router-dom";

const Section03 = ({ categoryDataTitle, items }) => {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux state

  // Function to check if an item is in the cart
  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.id === itemId);
  };

  // Function to toggle adding/removing item to/from cart
  const handleToggleCart = (item) => {
    if (isItemInCart(item.id)) {
      // If item is in the cart, remove it
      dispatch(removeItemFromCart(item.id));
    } else {
      // If item is not in the cart, add it with the "One Time Only" value
      const itemWithCategory = {
        ...item,
        group_service_category_id: item.group_service_category_id,
        subscriptionType: "One Time Only", // Add the subscription type
      };
      dispatch(addItemToCart(itemWithCategory));
    }
  };

  const sliderRef = useRef(null); // Reference to control the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
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
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5 position-relative">
      <h2 className="font-weight-bold mb-4">{categoryDataTitle}</h2>
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 5 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 5 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        <IoIosArrowForward size={30} />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div className="p-2 w-100 d-flex" key={index}>
            <div className="card h-100">
              <Link to={`/Single_Services/${item.id}`}>
                <img
                  src={item.group_service_item_thumbnail}
                  className="card-img-top"
                  alt={item.group_service_item_title}
                />
              </Link>

              <div className="card-body">
                <h6 className="">{item.group_service_item_title}</h6>
              </div>
              <div className="card-body text-center">
                <button
                  className={`explore-button ${
                    isItemInCart(item.id) ? "btn-success" : "btn-dark"
                  }`}
                  onClick={() => handleToggleCart(item)}
                >
                  {isItemInCart(item.id) ? "Added" : "ADD"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section03;
