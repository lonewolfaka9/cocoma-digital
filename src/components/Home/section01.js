import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Section01() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="section-heading-01">
              Dominate YouTube & social Media with proven strategies
            </div>
            <div className="section-title">
              Partner with cocoma digital to create, optimize, and amplify your
              content on the world’s leading social platforms .let’s make your
              brand the next big things.
            </div>

            <div className="section-title mt-4 mb-3">
              <button
                className="btn btn-warning"
                style={{ fontSize: "20px", fontWeight: 700 }}
              >
                Claim free consultation <MdOutlineArrowOutward size={30} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 section-image"
            style={{ padding: "0px" }}
          >
            <img
              src="../../Images/section-01.png"
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
