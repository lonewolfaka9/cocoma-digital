import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Service/redux/cartSlice";
import { Link } from "react-router-dom";

const Section03 = ({ categoryDataTitle, items }) => {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux state

  const handleAddToCart = (item) => {
    const itemWithCategory = {
      ...item,
      group_service_category_id: item.group_service_category_id,
    };
    dispatch(addItemToCart(itemWithCategory)); // Dispatch action with additional property
  };

  const isItemInCart = (itemId) => {
    // Use `id` to check if the item exists in the cart
    return cartItems.some((cartItem) => cartItem.id === itemId);
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
      <h2 className="font-weight-bold mb-4">{categoryDataTitle} </h2>
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
                  className="explore-button"
                  disabled={isItemInCart(item.id)}
                  onClick={() => handleAddToCart(item)}
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
