import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Section01({ bannerData }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 home-main-bg col-md-6 col-sm-6 col-xs-12 col-12 p-lg-5 p-md-5">
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
          <div
            className="col-lg-7 col-md-6 col-sm-6 col-xs-12 col-12 "
            style={{
              padding: "0px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            {/* Video that autoplays */}
            <div
              className="section-image-01"
              style={{
                position: "relative",
                width: "100%",
                height: "500px",
                overflow: "hidden",
              }}
            >
              <ReactPlayer
                url={bannerData?.top_banner?.banner_video_url}
                playing
                loop
                muted
                controls={false} // Hide default controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1, // Hide YouTube branding/logo
                      controls: 0, // Hide controls
                      showinfo: 0, // Hide video title
                      iv_load_policy: 3, // Hide video annotations
                      rel: 0, // Hide related videos at the end
                      fs: 0, // Disable fullscreen button
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
