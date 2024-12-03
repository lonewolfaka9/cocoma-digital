import React, { useState } from "react";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoReorderFourSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AddToCart() {
  const cartItems = [
    {
      title: "Content Services",
      services: [
        {
          title: "YouTube Video Editing",
          description: "High-quality video editing for your YouTube channel.",
          image: "../../Images/about/cartItem.svg",
        },
        {
          title: "Instagram Content Creation",
          description: "Creative posts for your Instagram audience.",
          image: "../../Images/about/cartItem.svg",
        },
        {
          title: "Blog Writing",
          description: "Engaging blogs written by professional writers.",
          image: "../../Images/about/cartItem.svg",
        },
        {
          title: "Blog Writing",
          description: "Engaging blogs written by professional writers.",
          image: "../../Images/about/cartItem.svg",
        },
      ],
    },
    {
      title: "Web Development Services",
      services: [
        {
          title: "Website Design",
          description: "Custom designs to make your website stand out.",
          image: "../../Images/about/cartItem.svg",
        },
        {
          title: "E-commerce Setup",
          description: "Complete setup of your online store.",
          image: "../../Images/about/cartItem.svg",
        },
        {
          title: "SEO Optimization",
          description: "Boost your website's ranking on search engines.",
          image: "../../Images/about/cartItem.svg",
        },
      ],
    },
  ];
  const [viewMode, setViewMode] = useState("CartCard");

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Your cart of services</h1>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-2 d-flex justify-content-end">
            <button
              onClick={() => setViewMode("CartCard")}
              className={`btn ${
                viewMode === "CartCard" ? "btn-primary" : "btn-outline-primary"
              } me-2`}
            >
              <PiCirclesFourLight />
            </button>
            <button
              onClick={() => setViewMode("row")}
              className={`btn ${
                viewMode === "row" ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              <IoReorderFourSharp />
            </button>
          </div>
        </div>

        {cartItems && cartItems.length > 0 ? (
          <>
            {cartItems.map((category, index) => (
              <div key={index} className="cart-container mt-4 p-5">
                <h2 className="mb-3">
                  {index + 1}. {category.title}
                </h2>
                <div
                  className={`row g-3 ${
                    viewMode === "row" ? "flex-column" : ""
                  }`}
                >
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`${
                        viewMode === "CartCard"
                          ? "col-lg-4 col-md-6 col-sm-12"
                          : "col-12"
                      } d-flex align-items-stretch `}
                    >
                      <div className=" cart-card-bg w-100 p-3 ">
                        <div className="d-flex  justify-content-between">
                          {index + 1}.{serviceIndex + 1}
                          <RiDeleteBin6Line size={20} />
                        </div>
                        <div
                          className={`${
                            viewMode === "CartCard" ? "d-block" : "d-flex"
                          }`}
                        >
                          <img
                            src={service.image}
                            // className="cart-img-top mt-3"
                            alt={service.title}
                            className={`${
                              viewMode === "CartCard" ? "cart-img-top" : ""
                            }`}
                          />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text">{service.description}</p>
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
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center mt-4 mb-4">
              <button className="btn sehedule-meeting-btn">
                Schedule Meeting <FaArrowRightLong />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <img
              src="empty-cart-image.png"
              alt="Empty Cart"
              className="img-fluid mb-3"
              style={{ maxWidth: "200px" }}
            />
            <h2>Your cart is Empty</h2>
            <p>Add Services to Schedule Meeting</p>
          </div>
        )}
      </div>
    </>
  );
}
