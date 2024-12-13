// Import React, Bootstrap CSS, and Slick Slider dependencies
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videoData = [
  { id: 1, category: "Trailers" },
  { id: 2, category: "Promos" },
  { id: 3, category: "Posters" },
  { id: 4, category: "Videos" },
  { id: 5, category: "Shorts" },
  { id: 6, category: "Reels" },
  { id: 7, category: "Creatives" },
  // Repeat or add more entries as needed for pagination demo
];

const CreativeHouseProject = () => {
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [hoveredItem, setHoveredItem] = useState(null);

  // Filter videos based on category
  const filteredVideos =
    category === "All"
      ? videoData
      : videoData.filter((video) => video.category === category);

  // Paginate videos
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const paginatedVideos = filteredVideos.slice(
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

const FilterBar = ({ currentCategory, onCategoryChange }) => {
  const categories = [
    "All",
    "Trailers",
    "Promos",
    "Posters",
    "Videos",
    "Shorts",
    "Reels",
    "Creatives",
  ];

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
      <Slider {...sliderSettings} className="gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${
              currentCategory === cat ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => onCategoryChange(cat)}
            style={{ margin: "0 5px" }}
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
      {videos.map((video) => (
        <div
          key={video.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 "
          onMouseEnter={() => setHoveredItem(video.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="card position-relative">
            <img
              src={
                hoveredItem === video.id
                  ? "../../Images/puspa.svg"
                  : "../../Images/puspa.svg"
              }
              className="card-img-top"
              alt="Video Thumbnail"
            />
          </div>
          {hoveredItem === video.id && (
            <div
              className=" card-hover card position-absolute  bottom-20 start-10  bg-dark text-white p-3"
              style={{ zIndex: 10 }}
            >
              <h5 className="card-title">Pushpa</h5>
              <p>(2024)</p>
              <p>
                <strong>Cast:</strong> Lorem Ipsum Dolor Sit Amet Consectetur.
                Orci Faucibus Tincidunt Malesuada Convallis Phasellus. Urna Enim
                Est Purus Ut Sed Velit.
              </p>
              <p>
                <strong>Genres:</strong> Indian Drama, Movies, Funny Movies
              </p>
              <a href="#" className="btn btn-warning">
                Our Work &rarr;
              </a>
            </div>
          )}
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
