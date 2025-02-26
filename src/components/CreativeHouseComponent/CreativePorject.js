import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./CreativeHouse.css";
const CreativeHouseProject = ({ CreativeHouseProjectCategory }) => {
  const [category, setCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [hoveredItem, setHoveredItem] = useState(null);

  // Fetch categories and update filtered items when category changes
  useEffect(() => {
    if (CreativeHouseProjectCategory?.creative_house) {
      const allCategories = [
        "All",
        ...new Set(
          CreativeHouseProjectCategory.creative_house.map(
            (cat) => cat.creative_house_category_name
          )
        ),
      ];
      setCategories(allCategories);

      if (category === "All") {
        const allItems = CreativeHouseProjectCategory.creative_house.flatMap(
          (cat) => cat.items
        );
        setFilteredItems(allItems);
      } else {
        const selectedCategory =
          CreativeHouseProjectCategory.creative_house.find(
            (cat) => cat.creative_house_category_name === category
          );
        setFilteredItems(selectedCategory?.items || []);
      }
    }
  }, [category, CreativeHouseProjectCategory]);

  // Paginate videos
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedVideos = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="container py-4">
      <FilterBar
        categories={categories}
        currentCategory={category}
        onCategoryChange={handleCategoryChange}
      />
      <VideoGrid
        videos={paginatedVideos}
        setHoveredItem={setHoveredItem}
        hoveredItem={hoveredItem}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

const FilterBar = ({ categories, currentCategory, onCategoryChange }) => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-3">
      <Slider {...sliderSettings} className="SliderCustom-width">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn w-auto my-1 me-2 ${
              currentCategory === cat ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </Slider>
    </div>
  );
};

const VideoGrid = ({ videos, setHoveredItem, hoveredItem }) => {
  return (
    <div className="row">
      {videos.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card-CreativeHouse">
            {/* Main Thumbnail */}
            <Link to={`/Single-Video/${item.id}`}>
              <img
                src={
                  item.creative_house_thumbnail.startsWith("http")
                    ? item.creative_house_thumbnail
                    : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.creative_house_thumbnail}`
                }
                className="card-img-top"
                alt="Video Thumbnail"
              />
            </Link>

            {/* Hover Content */}
            {/* <div className="card-CreativeHouse-show-afterImage-Hover">
              <div>
                <h6>{item.creative_house_video_title}</h6>
                <p>{item.requirement_description}</p>
              </div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CreativeHouseProject;
