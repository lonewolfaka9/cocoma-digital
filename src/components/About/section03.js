import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Service/redux/cartSlice"; // Import removeItemFromCart action
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5 position-relative">
      <h2 className="fw-bold text-uppercase mb-4">{categoryDataTitle}</h2>

      {/* Check if only one item exists */}
      {items.length > 1 ? (
        <>
         

          {/* Slider */}

          <button className={`arrow left`} onClick={scrollLeft} disabled={scrollStart}>
        <FaChevronLeft />
      </button>

          <div className="row service-slider" ref={containerRef}>
          {items.map((item, index) => (
            <>
             {/* <Link to={`/Single_Services/${item.id}`}>  */}
               <div className="col-lg-4 d-flex new-single-service-card-box" key={index}>
               <div className="new-single-service-card-box-image">
                <Link to={`/Single_Services/${item.id}`}>
                 <img  src={item.group_service_item_thumbnail} alt={item.group_service_item_title} />
                 </Link>
               </div>
               <div  className="new-singel-service-card-text" > 
                <Link to={`/Single_Services/${item.id}`}>
                 <p>
                 {item.group_service_item_title}
                 </p>
                </Link>
                  <button
                        className={` new-single-service-card-button  ${
                          isItemInCart(item.id) ? "btn-success" : "btn-dark"
                        }`}
                        onClick={() => handleToggleCart(item)}
                      >
                        {isItemInCart(item.id) ? "-" : "+"}
                      </button>
                 
               </div> 
           </div>  
              
           {/* </Link> */}
           </>
            ))}
           
          </div>

          <button className={`arrow right `} onClick={scrollRight} disabled={scrollEnd}>
        <FaChevronRight />
      </button>

         


 <Slider ref={sliderRef} {...settings}>
            
          </Slider> 
        </>
      ) : (
        // If there's only one item, render it outside the slider
        <div className="p-2 w-100 d-flex">
          <div className="card h-100">
            <Link to={`/Single_Services/${items[0].id}`}>
              <img
                src={items[0].group_service_item_thumbnail}
                className="card-img-top"
                alt={items[0].group_service_item_title}
              />
            </Link>

            <div className="card-body">
              <h6 className="">{items[0].group_service_item_title}</h6>
            </div>
            <div className="card-body text-center">
              <button
                className={`explore-button ${
                  isItemInCart(items[0].id) ? "btn-success" : "btn-dark"
                }`}
                onClick={() => handleToggleCart(items[0])}
              >
                {isItemInCart(items[0].id) ? "Added" : "ADD"}
              </button>
            </div>
           
                  <div className="services-related-box-card-text d-lg-none d-md-none d-sm-none d-flex mt-2">
                    {items[0].group_service_item_title}
                    <button
                      className={`explore-button w-50 border-rounded mt-4 fw-bold  ${
                        isItemInCart(items[0].id) ? "btn-dark" : "btn-dark"
                      }`}
                      onClick={() => handleToggleCart(items[0])}
                    >
                      {isItemInCart(items[0].id) ? "-" : "+"}
                    </button>
                  </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section03;
