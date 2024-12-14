import React from "react";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";

const Section05 = ({ VideoData = { video_url: "" } }) => {
  return (
    <section id="works" className="block works-block py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-12">
            <div className="video-wrapper">
              <Player className="video-video w-100">
                <source src={VideoData.video_url} />
                <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
