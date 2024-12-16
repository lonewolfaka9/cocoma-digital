import React, { useState } from "react";

export default function HowWeEdit() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Handler to play the video
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container-fluid edit-bg">
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h1 className="fw-bold">
            How we edited Pushpa Official Movie Trailers
          </h1>
        </div>

        <div className="video-edit-container mt-4 position-relative">
          {/* Thumbnail Image */}
          {!isPlaying && (
            <div className="position-relative">
              <img
                src="../../Images/VideoEditing.svg"
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
              src="https://youtu.be/b50zSyLiCYQ?si=fdyFB0tqJ-J-qjmp"
              controls
              autoPlay
              className="w-100 rounded"
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}
