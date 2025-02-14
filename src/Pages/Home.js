import React, { useState } from "react";
import Section01 from "../components/Home/section01";
import Section02 from "../components/Home/section02";
import Section03 from "../components/Home/section03";
import Section04 from "../components/Home/section04";
import Section05 from "../components/Home/section05";
import Section06 from "../components/Home/section06";
import Section07 from "../components/Home/section07";
import Section08 from "../components/Home/section08";
import Section09 from "../components/Home/Section09";
import Section11 from "../components/Home/section11";
import Section12 from "../components/Home/section12";
import { RiFunctionAddLine } from "react-icons/ri";

export default function Home({
  HomePage,
  ServiceData,
  CreativeHouseData,
  MarketingHouseData,
  MonthlyPerformanaceData,
}) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar - Conditionally Rendered */}
          {sidebarVisible && (
            <div
              className="col-3 pt-2 d-block d-lg-none d-md-none d-sm-none d-xl-none"
              style={{ background: "#F1F1F1" }}
            >
              <ul className="list-unstyled text-center" style={{ padding: "0px" }}>
                <li>
                  <img
                    alt=""
                    className="home-sidebar-image"
                    src="../../Images/content.svg"
                  />
                  <p className="home-sidebar-text">Content Marketing</p>
                </li>
                <li>
                  <img
                    alt=""
                    className="home-sidebar-image"
                    src="../../Images/markating.svg"
                  />
                  <p className="home-sidebar-text">Marketing</p>
                </li>
                <li>
                  <img
                    alt=""
                    className="home-sidebar-image"
                    src="../../Images/web-app.svg"
                  />
                  <p className="home-sidebar-text">Web & App</p>
                </li>
                <li>
                  <img
                    alt=""
                    className="home-sidebar-image"
                    src="../../Images/content.svg"
                  />
                  <p className="home-sidebar-text">
                    Game <br /> Development
                  </p>
                </li>
              </ul>
            </div>
          )}

          {/* Main Content */}
          <div
            className={`${
              sidebarVisible ? "col-9" : "col-12"
            } col-lg-12 col-md-12 col-sm-12 position-relative`}
            style={{ padding: "0px" }}
          >
            {/* Toggle Button */}
            <div className="menu-open-button" onClick={toggleSidebar}>
              <RiFunctionAddLine size={40} style={{ cursor: "pointer" }} />
            </div>

            <Section01 bannerData={HomePage} />
            <Section02 />
            <Section03 ServidcesToShow={ServiceData} />
            <Section04 ServidcesToShow={ServiceData} />
            <Section05 VideoData={HomePage} />
            <Section06 />
            <Section07 ClientData={HomePage} />
            <Section08 MarketingHouseData={MarketingHouseData} />
            <Section09 CreativeHouseSection={CreativeHouseData} />
            <Section11 MonthlyPerformanaceData={MonthlyPerformanaceData} />
            <Section12 bannerData={HomePage} />
          </div>
        </div>
      </div>
    </>
  );
}
