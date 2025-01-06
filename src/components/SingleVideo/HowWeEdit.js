import React, { useState } from "react";

export default function HowWeEdit({ HowWeEditTitle }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Handler to play the video
  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Handler to reset to the thumbnail when the video is paused or ends
  const handleReset = () => {
    setIsPlaying(false);
  };

  return (
    <div className="container-fluid edit-bg">
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h1 className="fw-bold">
            {HowWeEditTitle.creative_house_video_title}
          </h1>
        </div>

        <div className="video-edit-container mt-4 position-relative">
          {/* Thumbnail Image */}
          {!isPlaying && (
            <div className="position-relative">
              <img
                src={"../../Images/VideoEditing.svg"}
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />
              {/* Play Button */}
              <button
                className="btn btn-light position-absolute play-btn"
                onClick={handlePlay}
              >
                ▶
              </button>
            </div>
          )}

          {/* Video Player */}
          {isPlaying && (
            <video
              src={HowWeEditTitle.creative_house_video_url}
              controls={false}
              autoPlay
              className="w-100 rounded"
              onPause={handleReset} // Handle pause event
              onEnded={handleReset} // Handle end event
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}
