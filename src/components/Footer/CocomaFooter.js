import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CocomaFooter({ ServiceFooter }) {
  const services = ServiceFooter.services || [];
  const servicePlatformServices = services
    .filter((service) => service.service_category_name === "Service Platform")
    .map((service) => service.service_items)
    .flat();

  // Filter out the "Service Platform" services from the main services list
  const remainingServices = services
    .filter((service) => service.service_category_name !== "Service Platform")
    .map((service) => ({
      ...service,
      service_items: service.service_items.filter(
        (item) => item.category_name !== "Service Platform"
      ),
    }));

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
            <div className="col-lg-3 col-sm-6 col-md-4 col-sm-6 col-6 d-flex justify-content-between">
              <div className="social-icon">
                <a
                  href="https://wa.me/+918655643377?text=Hello,%20I%20need%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp
                    className="social-icon-main"
                    color="black"
                    size={60}
                  />
                </a>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.instagram.com/cocomadigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="social-icon-main"
                    color="black"
                    size={60}
                  />
                </a>
              </div>{" "}
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/Cocoma-Digital-Private-Limited-107521348660701=pages_you_manage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    className="social-icon-main"
                    color="black"
                    size={60}
                  />
                </a>
              </div>{" "}
              <div className="social-icon">
                <a
                  href="https://www.youtube.com/channel/UCP3vqjxVD4VlLxDWiKeq1Mg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    className="social-icon-main"
                    color="black"
                    size={60}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5 footer-menu-item">
            <div className="col-lg-3 col-sm-6 col-md-3">
              <ul>
                <li>
                  <h4>Services</h4>
                </li>
                {remainingServices.slice(0, 3).map((service) =>
                  service.service_items.slice(0, 2).map((item, index) => (
                    <li key={index}>
                      <a href={`/service/${item.id}`}>{item.service_title}</a>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3">
              <ul>
                <li>
                  <h4>By Platform</h4>
                </li>
                {servicePlatformServices.slice(0, 5).map((item, index) => (
                  <li key={index}>
                    <a href={`/service/${item.id}`}>{item.service_title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3">
              <ul>
                <li>
                  <h4>Cocoma Digital</h4>
                </li>
                <li>
                  <Link to="/aboutus"> About us </Link>
                </li>
                <li>
                  {" "}
                  <a href={"/contact_us"}>Contact us</a>
                </li>
                <li>
                  <a href={"/Career"} >
                     Career at cocoma
                  </a>
                  </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 com-md-3">
              {/* <ul>
                <li>
                  <h4>Company</h4>
                </li>
                <li>Media kit</li>
                <li>Cocoma for good</li>
                <li>Press</li>
                <li>Customer Stories</li>
              </ul> */}
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3"></div>

            <div className="col-lg-3 col-sm-6 col-md-3">
              {/* <ul>
                <li>
                  <h4>Expertise</h4>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 ">
              {/* <ul>
                <li>
                  <h4>Help</h4>
                </li>
                <li>
                  <a href={"/contact_us"}>Contact us</a>
                </li>
                <li>FAQs</li>
                <li>Help Centre</li>
                <li>terms & conditions</li>
                <li>Cookie Setting</li>
              </ul> */}
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              {/* <ul>
                <li>
                  <h4>resources</h4>
                </li>
                <li>Affiliates</li>
                <li>Partners</li>
                <li>Learning Centre</li>
              </ul> */}
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
