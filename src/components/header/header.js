import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";
import "./Header.css";
// import LangOverlay from "./langOverlay";
import { IoIosArrowForward } from "react-icons/io";
// import { isMobile } from "react-device-detect";
import { FaFacebook } from "react-icons/fa";
import "./Language.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Header({ ServiceData }) {
  const services = ServiceData.services || [];
  const [expanded, setExpanded] = useState(false);
  const isMobile = () => window.innerWidth <= 768;
  const [activeTab, setActiveTab] = useState(services[0]?.id || "");

  // Find active category details
  const activeCategory = services.find((category) => category.id === activeTab);
  const location = useLocation(); // Get current location
  const currentPath = location.pathname; // Extract the current path

  // const categories = [
  //   "Creative Services",
  //   "Video Editing",
  //   "Design Services",
  //   "Post-Production",
  //   "Performance & Marketing",
  //   "Google Ads",
  //   "Meta Ads",
  //   "Influencer Marketing",
  //   "Digital Marketing",
  //   "Search Engine Marketing",
  //   "IT, Web & Apps",
  //   "Software Development",
  // ];
  // const solution = [
  //   "For Brands",
  //   "For Agencies",
  //   "For Creators",
  //   "For Entrepreneurs",
  //   "For Studios",
  // ];

  const toggleNavbar = () => {
    setExpanded((prev) => !prev);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveTab(categoryId);
  };

  return (
    <>
      <div className=" hide-div"></div>
      <Navbar
        className="header-top-nav custom-navbar"
        expand="lg"
        expanded={expanded} // Control collapse state
      >
        <Container>
          {/* Logo Section */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="../../Images/app_logo.svg"
              alt="app logo"
              className="logo-image"
            />
            <img
              src="../../Images/app_name.svg"
              alt="app name"
              className="logo-name d-none d-lg-inline" // Show name only on large screens
            />
          </Navbar.Brand>

          {/* Right-Side Buttons and Toggle */}
          <div className="d-flex align-items-center ms-auto">
            {/* Language Button (Mobile and Tablet) */}
            <div className="me-2 d-lg-none btn-language">
              {/* <LangOverlay /> */}
            </div>
            {/* Mobile Menu Toggle */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleNavbar}
            >
              <RiMenuFill size={24} />
            </Navbar.Toggle>
          </div>

          {/* Menu Items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-items">
              <Nav.Link
                href="/"
                className={`custom-nav-dropdown for-new-pos ${
                  currentPath === "/" ? "active-home" : ""
                }`}
              >
                Home
              </Nav.Link>

              {/* Our Services Dropdown */}
              <NavDropdown
                title="Our Services"
                id="services-dropdown"
                className="custom-nav-dropdown for-new-pos"
              >
                {isMobile() ? (
                  <div>
                    {services.map((category) => (
                      <div key={category.id}>
                        {/* Render Categories */}
                        <div
                          className={`dropdown-category ${
                            activeTab === category.id ? "active" : ""
                          }`}
                          onClick={() => handleCategoryClick(category.id)}
                        >
                          {category.service_category_name}
                        </div>

                        {/* Show Relevant Services When Category is Active */}
                        {activeTab === category.id && (
                          <div className="subcategory-container-mobile">
                            {category.service_items?.map((service, index) => (
                              <div key={index} className="subcategory-card">
                                <a href={`/service/${service.id}`}>
                                  <img
                                    src={service.service_image}
                                    alt={service.service_title}
                                    className="service-icon"
                                  />
                                  <strong>{service.service_title}</strong>
                                  <p>{service.description}</p>
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="dropdown-container">
                    {/* Left Column: Categories */}
                    <div className="dropdown-left">
                      <div className="p-2 px-3 py-4">
                        <h2>By Platform</h2>
                      </div>
                      <div className="d-flex mb-2 justify-content-around ">
                        <div className="headder-logo-bg p-1">
                          <a
                            href="https://www.youtube.com/channel/UCP3vqjxVD4VlLxDWiKeq1Mg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaYoutube
                              style={{ color: "#FF0000", fontSize: "45px" }}
                            />
                          </a>
                        </div>
                        <div className="headder-logo-bg p-1">
                          <a
                            href="https://www.instagram.com/cocomadigital/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram
                              style={{ color: "#E4405F", fontSize: "45px" }}
                            />
                          </a>
                        </div>
                        <div className="headder-logo-bg p-1">
                          <a
                            href="https://www.facebook.com/Cocoma-Digital-Private-Limited-107521348660701=pages_you_manage"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook
                              style={{ color: "#1877F2", fontSize: "45px" }}
                            />
                          </a>
                        </div>

                        <div className="headder-logo-bg p-1">
                          <a
                            href="https://wa.me/+918655643377?text=Hello,%20I%20need%20more%20information."
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsapp
                              style={{ color: "#25D366", fontSize: "45px" }}
                            />
                          </a>
                        </div>
                        {/* <div className="headder-logo-bg p-1">
                        <FaTiktok
                          style={{ color: "black", fontSize: "45px" }}
                        />
                      </div> */}
                        <div className="headder-logo-bg p-1">
                          <a
                            href="https://www.linkedin.com/company/cocomadigital/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin
                              style={{ color: "#0A66C2", fontSize: "45px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 10,
                          paddingTop: 10,
                          textTransform: "capitalize",
                        }}
                      >
                        <h4>our services by skills</h4>
                      </div>
                      {services.map((category) => (
                        <div
                          key={category.id}
                          className={`dropdown-category ${
                            activeTab === category.id ? "active" : ""
                          }`}
                          onClick={() => handleCategoryClick(category.id)}
                        >
                          {category.service_category_name}
                          <IoIosArrowForward size={25} />
                        </div>
                      ))}
                    </div>
                    <div className="dropdown-right p-3">
                      <div className="dropdown-right-cat-heading">
                        {activeCategory?.service_category_name}
                      </div>

                      <div className="services-header-grid mt-2">
                        {activeCategory?.service_items?.map(
                          (service, index) => (
                            <div key={index} className="services-header-item">
                              <a
                                href={`/service/${service.id}`}
                                className="d-flex"
                              >
                                <img
                                  src={service.service_image}
                                  alt={service.name}
                                  className="service-icon"
                                />
                                <div className="px-3">
                                  <strong>{service.service_title}</strong>
                                </div>
                              </a>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* Get Started Button and Language (Desktop Only) */}
          <div className="d-none d-lg-flex align-items-center">
            {/* <LangOverlay /> */}
            <Link to={"/contact_us"}>
              <Button variant="warning" className="btn-get-started">
                Get Started Today <HiArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
