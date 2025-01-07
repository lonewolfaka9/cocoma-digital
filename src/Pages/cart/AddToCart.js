import React, { useState } from "react";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoReorderFourSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../Service/redux/cartSlice";
import "./cart.css";
export default function AddToCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id)); // Dispatch the action to remove the item by ID
  };

  console.log(cartItems);
  const onScheduleMeeting = () => {
    // Prepare the JSON payload
    const payload = {
      cartItems, // Include all cart items
      timestamp: new Date().toISOString(), // Add a timestamp (optional)
    };

    // Log the JSON payload to the console
    console.log("Payload to be sent:", JSON.stringify(payload, null, 2));
  };

  const [viewMode, setViewMode] = useState("CartCard");

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Your cart of services</h1>
          </div>
          <div className="col-lg-4 "></div>
          <div className="col-lg-2 d-flex justify-content-end d-none d-lg-block d-md-block">
            <button
              onClick={() => setViewMode("CartCard")}
              className={`btn add-to-cart-grid-button ${
                viewMode === "CartCard"
                  ? "add-to-cart-grid-button-active"
                  : "btn-outline-primary"
              } me-2`}
            >
              <PiCirclesFourLight />
            </button>
            <button
              onClick={() => setViewMode("row")}
              className={`btn add-to-cart-grid-button ${
                viewMode === "row"
                  ? "add-to-cart-grid-button-active"
                  : "btn-outline-primary"
              }`}
            >
              <IoReorderFourSharp />
            </button>
          </div>
        </div>

        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="cart-container mt-4 p-5">
              <div
                className={`row g-3 ${viewMode === "row" ? "flex-column" : ""}`}
              >
                {cartItems.map((category, index) => (
                  <>
                    <div
                      key={index}
                      className={`${
                        viewMode === "CartCard"
                          ? "col-lg-4 col-md-6 col-sm-12"
                          : "col-12"
                      } d-flex align-items-stretch `}
                    >
                      <div className=" cart-card-bg w-100 p-3 ">
                        <div className="d-flex  justify-content-between">
                          <h2>{index + 1}</h2>
                          <button
                            className="btn btn-danger mb-3"
                            onClick={() => handleRemoveFromCart(category.id)} // Pass the item's ID
                          >
                            <RiDeleteBin6Line size={20} />
                          </button>
                        </div>
                        <div
                          className={`${
                            viewMode === "CartCard" ? "d-block" : "d-flex"
                          }`}
                        >
                          <img
                            src={category.group_service_item_thumbnail}
                            alt={category.group_service_item_title}
                            className={`${
                              viewMode === "CartCard" ? "cart-img-top" : ""
                            }`}
                          />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              {category.group_service_item_title}
                            </h5>
                            <p className="card-text">
                              {category.group_service_item_description2}
                            </p>
                            <div className=" d-flex  justify-content-between">
                              <button className="btn btn-primery-recurring me-2">
                                Recurring
                              </button>
                              <button className="btn btn-primery-one-time-only">
                                One Time Only
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="text-center mt-4 mb-4">
              <button
                className="btn sehedule-meeting-btn"
                onClick={onScheduleMeeting}
              >
                Schedule Meeting <FaArrowRightLong />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <img
              src="../../Images/EmptyCart.svg"
              alt="Empty Cart"
              className="img-fluid mb-3"
            />
          </div>
        )}
      </div>
    </>
  );
}
