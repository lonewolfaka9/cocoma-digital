import { useState, useEffect, useRef } from "react";
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function ExploreOurServices({ ServidcesToShow }) {
  const services = ServidcesToShow?.services || [];
  const [activeCategory, setActiveCategory] = useState(services[0] || null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const categoryRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (services.length > 0) {
      setActiveCategory(services[0]);
    }
  }, [services]);

  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = 150; // Adjust as needed
      categoryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Drag scroll functionality
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - categoryRef.current.offsetLeft;
    scrollLeft.current = categoryRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - categoryRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust speed
    categoryRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Check scroll position
  useEffect(() => {
    const checkScroll = () => {
      if (categoryRef.current) {
        setCanScrollLeft(categoryRef.current.scrollLeft > 0);
        setCanScrollRight(
          categoryRef.current.scrollLeft + categoryRef.current.clientWidth <
            categoryRef.current.scrollWidth
        );
      }
    };

    categoryRef.current?.addEventListener("scroll", checkScroll);
    return () => categoryRef.current?.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="all-service-heading-home">EXPLORE OUR SERVICES</h1>
      </div>

      <div className="row mt-3 position-relative">
        

        {/* Categories Scrollable Area */}
        <div
          className="col-lg-8 col-md-10 col-sm-12 col-3 m-lg-auto services-category-scroll"
          ref={categoryRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
         {services
  .filter(category => category.service_category_name !== "Service Platform")
  .map((category) => (
    <div
      key={category.id}
      className={`services-category-item-home mx-lg-5 ${activeCategory?.id === category.id ? "active" : ""}`}
      onClick={() => setActiveCategory(category)}
    >
      <img src={category.service_icon} className="new-services-cat-images" />
      <p>{category.service_category_name}</p>
    </div>
  ))}

        </div>
        {/* Down Arrow (For Mobile) */}
        {/* <button className="scroll-btn down  d-md-none d-block" onClick={() => scrollCategories("up")}>
          <FaChevronUp />
        </button> */}

        {/* Services List */}
        <div className="col-lg-12  col-md-12 col-sm-12 col-9 mt-lg-5  services-container-new-home">
          {activeCategory?.service_items?.map((service, index) => (
            <div key={index} className="service-card-new-home text-center ">
              <Link to={`service/${service.id}`} style={{ width: "100%" }}>
                <img src={service.service_image} alt={service.service_title} className="img-fluid w-100" />
                <h3 className="mt-2" style={{ color: "black" }}>{service.service_title}</h3>
                <button className="explore-button   " >
                  <Link to={`service/${service.id}`}>
                    {service.service_button_text} <GoArrowUpRight size={24} />
                  </Link>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
