import { useState, useEffect, useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import icons

export default function ExploreOurServices({ ServidcesToShow }) {
  // Ensure data exists and default to an empty array if not
  const services = ServidcesToShow?.services || [];

  // Ensure at least one category is set as active
  const [activeCategory, setActiveCategory] = useState(services[0] || null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const categoryRef = useRef(null);

  useEffect(() => {
    if (services.length > 0) {
      setActiveCategory(services[0]); // Set first category as active
    }
  }, [services]);

  // Scroll function
  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = 100;
      categoryRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position to show/hide buttons
  useEffect(() => {
    const checkScroll = () => {
      if (categoryRef.current) {
        setCanScrollUp(categoryRef.current.scrollTop > 0);
        setCanScrollDown(
          categoryRef.current.scrollTop + categoryRef.current.clientHeight <
            categoryRef.current.scrollHeight
        );
      }
    };

    categoryRef.current?.addEventListener("scroll", checkScroll);
    return () => categoryRef.current?.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1 className="all-service-heading-home">EXPLORE OUR SERVICES</h1>
      </div>

      <div className="row mt-3 position-relative">
        {/* Up Arrow */}
        {canScrollUp && (
          <button className="scroll-btn up " onClick={() => scrollCategories("up")}>
            <FaChevronUp />
          </button>
        )}

        {/* Categories */}
        <div
          className="col-lg-8 col-md-10 col-sm-12 col-3 text-center m-lg-auto services-category-scroll"
          ref={categoryRef}
        >
          {services.map((category) => (
            <div
              key={category.id}
              className={`services-category-item-home ${
                activeCategory?.id === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.service_category_name}
            </div>
          ))}
        </div>

        {/* Down Arrow */}
        {canScrollDown && (
          <button className="scroll-btn down d-lg-none d-md-none d-sm-none d-block  " onClick={() => scrollCategories("down")}>
            <FaChevronDown />
          </button>
        )}

        {/* Services List */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-9 mt-lg-5 services-container-new-home">
          {activeCategory?.service_items?.map((service, index) => (
            <div key={index} className="service-card-new-home">
                <img src={service.service_image} alt={service.service_title}  className="img-flud w-100"/>
              <h3>{service.service_title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
