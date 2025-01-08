import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CocomaFooter() {
  return (
    <>
      <div className="container-fluid footer-main pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <img
                src="../../Images/logoWhite.svg"
                width={"100%"}
                height={"100%"}
                alt="logo"
              />
            </div>
            <div className="col-lg-4 col-md-3 d-sm-block d-lg-block d-md-block col-sm-2 d-none"></div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-between">
              <div className="social-icon">
                <FaWhatsapp className="social-icon-main" size={60} />
              </div>
              <div className="social-icon">
                <FaInstagram className="social-icon-main" size={60} />
              </div>{" "}
              <div className="social-icon">
                <FaFacebookF className="social-icon-main" size={60} />
              </div>{" "}
              <div className="social-icon">
                <FaYoutube className="social-icon-main" size={60} />
              </div>
            </div>
          </div>

          <div className="row mt-5 footer-menu-item">
            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>Services</h2>
                </li>
                <li>YouTube Services</li>
                <li>Instagram Services</li>
                <li>Video Editing Services</li>
                <li>Motion Graphics</li>
                <li>Graphic Designs</li>
                <li>Influencer Marketing</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>Solutions</h2>
                </li>
                {/* <li>For Brands</li>
                <li>For Agencies</li>
                <li>For Creators</li>
                <li>For Entrepreneurs</li>
                <li>For Studios</li> */}
              </ul>
            </div>

            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>Cocoma Digital</h2>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {" "}
                    About us{" "}
                  </Link>
                </li>
                {/* <li>How it works</li>
                <li>Blog</li> */}
              </ul>
            </div>

            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>Company</h2>
                </li>
                {/* <li>Media kit</li>
                <li>Cocoma for good</li>
                <li>Press</li>
                <li>Customer Stories</li> */}
              </ul>
            </div>
            <div className="col-lg-3"></div>

            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>Expertise</h2>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>Help</h2>
                </li>
                <li>
                  <Link to={"/contact_us"}>Contact us</Link>
                </li>
                {/* <li>FAQs</li>
                <li>Help Centre</li>
                <li>terms & conditions</li>
                <li>Cookie Setting</li> */}
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <h2>resources</h2>
                </li>
                {/* <li>Affiliates</li>
                <li>Partners</li>
                <li>Learning Centre</li> */}
              </ul>
            </div>
          </div>

          <div className="row mt-3 pt-4" style={{ color: "white" }}>
            <center>
              <div>
                <h5>
                  Copyright @ All rights reserved to Cocoma Digital Private
                  Limited
                </h5>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
