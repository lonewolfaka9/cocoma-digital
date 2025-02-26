// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Section08 = ({ MarketingHouseSection }) => {
//   const [category, setCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState([]);

//   // Settings for the slider
//   const sliderSettings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 5,
//     arrows: false,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   useEffect(() => {
//     if (MarketingHouseSection) {
//       if (category === "All") {
//         const allItems = MarketingHouseSection.marketing_house.flatMap((cat) =>
//           cat.items.map((item) => ({
//             id: item.id,
//             imgSrc: item.poster_image.startsWith("http")
//               ? item.poster_image
//               : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.poster_image}`,
//             url: item.marketing_house_url,
//             category: cat.category_name,
//           }))
//         );
//         setFilteredItems(allItems);
//       } else {
//         const selectedCategory = MarketingHouseSection.marketing_house.find(
//           (cat) => cat.category_name === category
//         );
//         if (selectedCategory) {
//           const filtered = selectedCategory.items.map((item) => ({
//             id: item.id,
//             imgSrc: item.poster_image.startsWith("http")
//               ? item.poster_image
//               : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/marketting-house-image/${item.poster_image}`,
//             url: item.marketing_house_url,
//             category: selectedCategory.category_name,
//           }));
//           setFilteredItems(filtered);
//         } else {
//           setFilteredItems([]);
//         }
//       }
//     }
//   }, [category, MarketingHouseSection]);

//   return (
//     <div className="container my-4">
//       <div className="row">
//         <div className="col-lg-10 col-md-9 col-sm-9 col-12">
//           <p
//             className="text-uppercase text-muted mb-3"
//             style={{ fontSize: "20px" }}
//           >
//             LATEST WORK FROM
//           </p>
//           <h2 className="fw-bold">OUR MARKETING HOUSE</h2>
//         </div>
//         <div className="col-lg-2 col-md-3 col-sm-3 col-12 d-flex justify-content-end align-items-center">
//           <Link
//             to="/View-all-Series"
//             className="text-warning view-all-link-text"
//           >
//             View All
//           </Link>
//         </div>
//       </div>

//       {/* Category Slider */}
//       <div className="my-3">
//         <Slider {...sliderSettings} className="SliderCustom-width">
//           <button
//             className={`cat-filter-button btn w-auto me-2 ${
//               category === "All" ? "btn-warning" : "btn-outline-secondary"
//             }`}
//             onClick={() => setCategory("All")}
//           >
//             All
//           </button>
//           {MarketingHouseSection?.marketing_house?.map((cat) => (
//             <button
//               key={cat.id}
//               className={`cat-filter-button btn w-auto me-2 ${
//                 category === cat.category_name
//                   ? "btn-warning"
//                   : "btn-outline-secondary"
//               }`}
//               onClick={() => setCategory(cat.category_name)}
//             >
//               {cat.category_name}
//             </button>
//           ))}
//         </Slider>
//       </div>

//       {/* Filtered Items */}
//       <div className="row mt-3">
//         {filteredItems.length > 0 ? (
//           filteredItems.slice(0, 8).map((item) => (
//             <div
//               key={item.id}
//               className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
//             >
//               <div className="card">
//                 <Link to={`Web-Series-Individual/${item.id}`}>
//                   <img
//                     src={item.imgSrc}
//                     alt={item.category}
//                     className="card-img-top"
//                   />
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No items available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Section08;

import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const Section08 = ({ MarketingHouseSection = { marketing_house: [], all_button_priority_marketing_house: {} } }) => {
  const [category, setCategory] = useState("All");

  
  const [filteredItems, setFilteredItems] = useState([]);
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAllItems, setShowAllItems] = useState(true);

  useEffect(() => {
    if (showAllItems) {
      const priorityItemIds = Object.values(MarketingHouseSection.all_button_priority_marketing_house).map(
        (button) => button.marketing_house_item_id.toString()
      );

      

      const allItems = MarketingHouseSection?.marketing_house
        ?.flatMap((cat) => cat.items || []) // Ensure items is always an array
        .filter((item) => priorityItemIds.includes(item.id.toString()));

      
      setFilteredItems(allItems || []);
    } else {
      const selectedCategory = MarketingHouseSection?.marketing_house?.find(
        (cat) => cat.category_name === category
      );
      setFilteredItems(selectedCategory?.items || []);
    }
  }, [category, MarketingHouseSection, showAllItems]);

  const handleAllItemsClick = () => {
    setCategory("All");
    setShowAllItems(true);
  };

  const handleCategoryClick = (catName) => {
    setCategory(catName);
    setShowAllItems(false);
  };

  const handleCloseModal = () => {
    setVideoToPlay(null);
    setShowModal(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 col-md-9 col-sm-9 col-12">
          <h3 className="text-uppercase text-muted mb-3" style={{ fontSize: "20px" }}>
            LATEST WORK FROM
          </h3>
          <h2 className="fw-bold">OUR MARKETING HOUSE</h2>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 col-12 d-flex justify-content-end align-items-center">
          <Link to="/Creative-House" className="text-warning view-all-link-text">
            View All
          </Link>
        </div>
      </div>

      <div className="mb-5 mt-2">
        <Slider {...sliderSettings} className="SliderCustom-width">
          <button
            className={`cat-filter-button btn me-2 ${category === "All" ? "btn-warning" : "btn-outline-secondary"}`}
            onClick={handleAllItemsClick}
          >
            All
          </button>
          {MarketingHouseSection?.marketing_house?.slice(0, 7).map((cat) => (
            <button
              key={cat.id}
              className={`cat-filter-button btn me-2 ${
                category === cat.category_name ? "btn-warning" : "btn-outline-secondary"
              }`}
              onClick={() => handleCategoryClick(cat.category_name)}
            >
              {cat.category_name}
            </button>
          ))}
        </Slider>
      </div>

      <div className="row">
        {filteredItems.slice(0, 16).map((item) => (
          <div key={item.id} className="col-md-3 col-lg-3 col-sm-6 col-6 col-xs-6 mb-4">
            <div className="card-CreativeHouse position-relative">
              <img
                src={
                  item.poster_image.startsWith("http")
                    ? item.poster_image
                    : `https://cocomadigitalmediabucket.s3.eu-north-1.amazonaws.com/creative-house-thumbnail/${item.poster_image}`
                }
                alt={item.marketing_house_video_title}
              />
              {item.category !== "Posters" && (
                <div className="position-absolute top-50 start-50 translate-middle">
                  <button
                    className="btn rounded-circle creative-house-play-button"
                    onClick={() => {
                      setVideoToPlay({
                        url: item.marketing_house_video_url,
                        title: item.marketing_house_video_title,
                        VideoId: item.id,
                      });
                      setShowModal(true);
                    }}
                  >
                    <FaPlay className="fs-2" size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {videoToPlay && (
        <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static" size="lg" className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>{videoToPlay.title}</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="video-container" style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url={videoToPlay.url}
                controls
                playing={true}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "white" }}>
            <Link to={`/Single-Video/${videoToPlay.VideoId}`}>
              <button className="btn btn-warning">See How We Edit</button>
            </Link>
            <Link to={`/ScheduleMeeting`}>
              <button className="btn btn-light">Book A Demo Call</button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Section08;
