import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import "./about.css";
const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container about-us-section my-5">
      <h3 className="text-center mb-4">About Us</h3>

      {/* About Us Content */}
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Person"
            className="about-image img-fluid rounded"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <p className="about-description">
            Welcome to Cocoma, your ultimate destination for top-notch YouTube
            services online. We are passionate about helping creators and brands
            enhance their presence on YouTube, offering a wide range of services
            that cater to your unique needs. Whether you're looking to boost
            your channel's visibility, grow your subscriber base, or improve
            your video content's performance, Cocoma is here to support you
            every step of the way.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="video-thumbnail position-relative">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Team Video"
              className="img-fluid rounded"
            />
            <button
              className="play-button position-absolute"
              onClick={openModal}
            >
              <FaPlay size={50} color="white" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <ReactPlayer
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          playing
          controls
          width="100%"
        />
      </Modal>
    </div>
  );
};

export default AboutUs;
