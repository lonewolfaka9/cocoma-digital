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
function Header() {
  const [expanded, setExpanded] = useState(false); // State for controlling the mobile menu

  const toggleNavbar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Navbar
      className="header-top-nav custom-navbar"
      expand="lg"
      expanded={expanded} // Control collapse state
    >
      <Container fluid>
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
            <LangOverlay />
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
            <NavDropdown title="Our Services" id="services-dropdown">
              <NavDropdown.Item href="/service">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="/service2">Service 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Our Expertise" id="expertise-dropdown">
              <NavDropdown.Item href="/creative_services">
                Creative Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/video_editing">
                Video Editing
              </NavDropdown.Item>
              <NavDropdown.Item href="/design_services">
                Design Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/our_expertise/view_all_events">
                View All Events
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Solution" id="solution-dropdown">
              <NavDropdown.Item href="/for_brands">For Brands</NavDropdown.Item>
              <NavDropdown.Item href="/for_agencies">
                For Agencies
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_creators">
                For Creators
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_entrepreneurs">
                For Entrepreneurs
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_studios">
                For Studios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/solution/view_all_events">
                View All Events
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* Get Started Button and Language (Desktop Only) */}
        <div className="d-none d-lg-flex align-items-center">
          <LangOverlay />
          <Button variant="warning" className="btn-get-started">
            Get Started Today <HiArrowUpRight size={20} />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
