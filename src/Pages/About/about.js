import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import "./about.css";
import Slider from "react-slick";
import LifeAtCocoma from "../../components/AboutUs/LifeAtCocoma";
import SocialWorkSlider from "../../components/AboutUs/SocialWork";
import Section14 from "../../components/Home/section14";
import Timeline from "../../components/AboutUs/timeline";
const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Adjust to control the number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { id: 1, url: "../../Images/about/aboutStory.png" },
    { id: 2, url: "../../Images/about/aboutStory.png" },
    { id: 3, url: "../../Images/about/aboutStory.png" },
    { id: 4, url: "../../Images/about/aboutStory.png" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container about-us-section my-5">
        {/* About Us Content */}
        <div className="row ">
          <div className="col-md-6 img-yellow-bg col-lg-5">
            <img
              src="../../Images/about/aboutmainimg.svg"
              alt="Person"
              className="about-image img-fluid"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h3 className="text-center mb-4">About Us</h3>
            <p className="about-description">
              Welcome to Cocoma, your ultimate destination for top-notch YouTube
              services online. We are passionate about helping creators and
              brands enhance their presence on YouTube, offering a wide range of
              services that cater to your unique needs. Whether you're looking
              to boost your channel's visibility, grow your subscriber base, or
              improve your video content's performance, Cocoma is here to
              support you every step of the way.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="video-thumbnail position-relative">
              <img
                src="../../Images/about/videothumbanil.svg"
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
        <div className="row mt-5">
          <div className="col-lg-12">
            <h1 className="fw-bold text-center">Our Story</h1>
          </div>
          <div className="col-lg-10 m-auto text-center">
            Cocoma's journey began with a simple idea: to empower creators and
            brands to thrive on YouTube. As avid fans and participants in the
            digital space, our founders recognized the challenges that many face
            in growing and sustaining a successful YouTube channel. With a deep
            understanding of the platform's potential and complexities, Cocoma
            was born to bridge the gap between creators' aspirations and their
            actual achievements.
          </div>
          <div className="col-lg-12 mt-5">
            <Slider {...settings}>
              {images.map((image) => (
                <div key={image.id} className="slide">
                  <img
                    src={image.url}
                    alt={`Slide ${image.id}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <h1 className="fw-bold text-center">Our Mission</h1>
          </div>
          <div className="col-lg-10 m-auto text-center">
            Cocoma's journey began with a simple idea: to empower creators and
            brands to thrive on YouTube. As avid fans and participants in the
            digital space, our founders recognized the challenges that many face
            in growing and sustaining a successful YouTube channel. With a deep
            understanding of the platform's potential and complexities, Cocoma
            was born to bridge the gap between creators' aspirations and their
            actual achievements.
          </div>
          <div className="col-lg-12 mt-5">
            <Slider {...settings}>
              {images.map((image) => (
                <div key={image.id} className="slide">
                  <img
                    src={image.url}
                    alt={`Slide ${image.id}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </Slider>
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
      <Timeline />
      <LifeAtCocoma />
      <SocialWorkSlider />
      <Section14 />
    </>
  );
};

export default AboutUs;
