import React, { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function Section01({ bannerData }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 home-main-bg col-md-6 col-sm-6 p-lg-5 p-md-5 ">
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
                <MdOutlineArrowOutward
                  className=" mx-3 clam-free-consultation-button"
                  size={30}
                />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 section-image"
            style={{ padding: "0px", position: "relative" }}
          >
            <img
              src={
                bannerData?.top_banner?.banner_video_thumbnail ||
                "../../Images/section-01.png"
              }
              className="section-image-01"
              alt=""
            />
            <div
              className="playbutton"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
              onClick={handleOpenModal}
            >
              <FaRegPlayCircle size={80} color={"#fff"} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Video */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        backdrop="static"
        size="xl"
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="">
            <strong>Watch Video</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0" closeButton>
          <div
            className="video-container"
            style={{ position: "relative", paddingTop: "56.25%" }}
          >
            <ReactPlayer
              url={bannerData?.top_banner?.banner_video_url}
              controls
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
