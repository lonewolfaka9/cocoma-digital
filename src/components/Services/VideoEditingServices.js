import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Service/redux/cartSlice"; // Import removeItemFromCart action
const VideoEditingServices = ({ groupServiceItems }) => {
  const sliderRef = React.useRef(null);
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux state

  // Function to check if an item is in the cart
  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.id === itemId);
  };

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

      const containerRef = useRef(null);

  
const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  // Check scroll position and update button states
  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setScrollStart(scrollLeft <= 0);
      setScrollEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    containerRef.current?.addEventListener("scroll", checkScrollPosition);
    return () => containerRef.current?.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="container my-5 position-relative">
      <div className="row">
        <div>
          <h2 className="fw-bold text-uppercase mb-4">
            Other Video Editing Services
          </h2>
        </div>
        <div>
          <button
            className="custom-prev-arrow d-none d-lg-block d-md-block "
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </button>
          <button
            className="custom-next-arrow d-none d-lg-block d-md-block"
            onClick={scrollRight}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="row service-slider" ref={containerRef}>
        {groupServiceItems.map((service, index) => (
         <div className="col-lg-4 d-flex new-single-service-card-box  " key={index}>
                        <div className="new-single-service-card-box-image">
                         <Link to={`/Single_Services/${service.id}`}>
                          <img  src={service.group_service_item_thumbnail} alt={service.group_service_item_title} />
                          </Link>
                        </div>
                        <div  className="new-singel-service-card-text" > 
                         <Link to={`/Single_Services/${service.id}`}>
                          <p>
                          {service.group_service_item_title}
                          </p>
                         </Link>
                          <button
                               className={` new-single-service-card-button  ${
                                 isItemInCart(service.id) ? "btn-success" : "btn-dark"
                               }`}
                               onClick={() => handleToggleCart(service)}
                             >
                                {isItemInCart(service.id) ? "-" : "+"}
                             </button>
                          
                        </div> 
                    </div>  
        ))}
      </div>
    </div>
  );
};

export default VideoEditingServices;
