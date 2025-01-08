import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiMenuFill } from "react-icons/ri";
import "./Header.css";
import LangOverlay from "./langOverlay";

// import { isMobile } from "react-device-detect";
import { FaFacebook } from "react-icons/fa";
import "./Language.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ ServiceData }) {
  const services = ServiceData.services || [];
  const [expanded, setExpanded] = useState(false);
  const isMobile = () => window.innerWidth <= 768;
  const [activeTab, setActiveTab] = useState(services[0]?.id || "");

  // Find active category details
  const activeCategory = services.find((category) => category.id === activeTab);

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
    <Navbar
      className="header-top-nav custom-navbar"
      expand="lg"
      expanded={expanded} // Control collapse state
    >
      <Container fluid>
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
            <Nav.Link href="/">Home</Nav.Link>

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
                              <img
                                src={service.service_image}
                                alt={service.service_title}
                                className="service-icon"
                              />
                              <strong>{service.service_title}</strong>
                              <p>{service.description}</p>
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
                    <div className="p-2">
                      <h2>By Platform</h2>
                    </div>
                    <div className="d-flex mb-2 justify-content-around ">
                      <div className="headder-logo-bg p-1">
                        <FaYoutube
                          style={{ color: "#FF0000", fontSize: "50px" }}
                        />
                      </div>
                      <div className="headder-logo-bg p-1">
                        <FaInstagram
                          style={{ color: "#E4405F", fontSize: "50px" }}
                        />
                      </div>
                      <div className="headder-logo-bg p-1">
                        {/* <img src={facebook} alt="" /> */}
                        <FaFacebook
                          style={{ color: "#1877F2", fontSize: "50px" }}
                        />
                      </div>

                      <div className="headder-logo-bg p-1">
                        <FaXTwitter
                          style={{ color: "black", fontSize: "50px" }}
                        />
                      </div>
                      <div className="headder-logo-bg p-1">
                        <FaTiktok
                          style={{ color: "black", fontSize: "50px" }}
                        />
                      </div>
                      <div className="headder-logo-bg p-1">
                        {/* <img src={linkedin} alt="" /> */}
                        <FaLinkedin
                          style={{ color: "#0A66C2", fontSize: "50px" }}
                        />
                      </div>
                    </div>
                    <div style={{ paddingLeft: 10, paddingTop: 10 }}>
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
                      </div>
                    ))}
                  </div>
                  <div className="dropdown-right p-3">
                    <h3>{activeCategory?.service_category_name}</h3>
                    <div className="services-header-grid mt-2">
                      {activeCategory?.service_items?.map((service, index) => (
                        <div key={index} className="services-header-item">
                          <img
                            src={service.service_image}
                            alt={service.name}
                            className="service-icon"
                          />
                          <div>
                            <strong>{service.service_title}</strong>
                            <p>{service.description}</p>
                          </div>
                        </div>
                      ))}
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
  );
}

export default Header;
