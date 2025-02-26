import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { BsPersonVideo2 } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { LuArrowBigRight } from "react-icons/lu";

const Section09 = () => {
  const steps = [
    {
      number: "1",
      title: "Explore Our Services",
      icon: <FaSearch size={40} />,
    },
    {
      number: "2",
      title: "Add Suitable Services",
      icon: <FiShoppingBag size={40} />,
    },
    {
      number: "3",
      title: "Schedule Meeting",
      icon: <BsPersonVideo2 size={40} />,
    },
    {
      number: "4",
      title: "Start The Project",
      icon: <AiOutlinePlayCircle size={40} />,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-uppercase">How it work?</h2>
      <div
        className="d-flex flex-wrap justify-content-center align-items-center p-3"
        style={{
          backgroundColor: "#FFC107",
          borderRadius: "10px",
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="text-center mx-3 mb-3"
              style={{ minWidth: "150px", flex: "1" }}
            >
              <div
                className="text-white position-absolute"
                style={{
                  fontSize: "44px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {step.number}
              </div>
              <div className="mb-2 mt-5">{step.icon}</div>
              <p style={{ fontWeight: "500" }}>{step.title}</p>
            </div>
            {index < steps.length - 1 && (
              <div
                className="d-none d-md-flex align-items-center"
                style={{ margin: "0 10px" }}
              >
                <LuArrowBigRight size={50} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Section09;
