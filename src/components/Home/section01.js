import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Section01({ bannerData }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Video Section (Mobile First) */}
          <div
            className="col-lg-7 col-md-6 col-sm-12 order-1 order-lg-2"
            style={{
              padding: "0px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <div
              className="section-image-01"
              style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <ReactPlayer
                url={bannerData?.top_banner?.banner_video_url}
                playing
                loop
                muted
                controls={false}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      controls: 0,
                      showinfo: 0,
                      iv_load_policy: 3,
                      rel: 0,
                      fs: 0,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-5 col-md-6 col-sm-12 order-2 order-lg-1 p-lg-5 p-md-5">
            <div className="section-heading-01">
              {bannerData?.top_banner?.heading}
            </div>
            <div className="section-title">
              {bannerData?.top_banner?.sub_heading}
            </div>
            <div className="section-title mt-5 mb-3">
              <Link
                to={"/ScheduleMeeting"}
                className="btn btn-warning clam-free-consultation-button"
              >
                {bannerData?.top_banner?.banner_button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
