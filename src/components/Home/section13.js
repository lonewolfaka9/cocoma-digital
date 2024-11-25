import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const CommunityOutreachSlider = () => {
  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample data (replace with your actual data)
  const items = [
    {
      id: 1,
      category: "Animal",
      title: "Animal Welfare",
      imageUrl: "../../Images/plantedtree.svg",
    },
    {
      id: 2,
      category: "Human",
      title: "Helping Hands",
      imageUrl: "../../Images/plantedtree.svg",
    },
    {
      id: 3,
      category: "Environmental",
      title: "Tree Plantation",
      imageUrl: "../../Images/plantedtree.svg",
    },
    {
      id: 4,
      category: "Human",
      title: "Educational Support",
      imageUrl: "../../Images/plantedtree.svg",
    },
    {
      id: 5,
      category: "Animal",
      title: "Rescue Operations",
      imageUrl: "../../Images/plantedtree.svg",
    },
    {
      id: 6,
      category: "Animal",
      title: "Animal Welfare",
      imageUrl: "../../Images/plantedtree.svg",
    },
    {
      id: 7,
      category: "Animal",
      title: "Animal Welfare",
      imageUrl: "../../Images/plantedtree.svg",
    },
  ];

  // Categories for the filter buttons
  const categories = ["All", "Animal", "Human", "Environmental"];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container my-5">
      <h6 className="text-uppercase text-muted">Our Latest</h6>
      <h2 className="fw-bold mb-4">Social Work</h2>
      <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn ${
              selectedCategory === category ? "btn-warning" : "btn-light"
            } me-2 mb-2 mb-sm-0`}
            style={{ minWidth: "100px" }} // Ensure buttons don't collapse too small
          >
            {category}
          </button>
        ))}
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        arrows={true}
      >
        {filteredItems.map((item) => (
          <div key={item.id} className="p-2">
            <img
              className="d-block w-100 rounded"
              src={item.imageUrl} // Use actual image URL
              alt={item.title}
            />
            <h5 className="mt-3">{item.title}</h5>
          </div>
        ))}
      </Carousel>

      <div className="text-center mt-3">
        <Link to="#" className="text-warning fw-bold">
          View All
        </Link>
      </div>
    </div>
  );
};

export default CommunityOutreachSlider;
