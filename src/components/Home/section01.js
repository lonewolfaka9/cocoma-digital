import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Section01({ bannerData }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="section-heading-01">
              {bannerData.top_banner.heading}
            </div>
            <div className="section-title">
              {bannerData.top_banner.sub_heading}
            </div>

            <div className="section-title mt-4 mb-3">
              <button
                className="btn btn-warning"
                style={{ fontSize: "24px", fontWeight: 700 }}
              >
                {bannerData.top_banner.banner_button_text}{" "}
                <MdOutlineArrowOutward size={30} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 section-image"
            style={{ padding: "0px" }}
          >
            <img
              src={
                bannerData?.top_banner?.banner_video_thumbnail ||
                "../../Images/section-01.png"
              }
              className="section-image-01"
              alt=""
            />
            <div className="playbutton">
              <FaRegPlayCircle size={80} color={"#ffff"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
