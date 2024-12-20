import React from "react";
import ReactPlayer from "react-player";

const Section05 = ({ VideoData = { video_url: "" } }) => {
  return (
    <section id="works" className="block works-block py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-12">
            <div className="video-wrapper">
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true} // Autoplay enabled
                controls={false} // Hide controls
                loop={true} // Optional: Loop the video
                muted={true} // Optional: Start muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
