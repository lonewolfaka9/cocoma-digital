import CaseStudies from "../../components/Contact_us/CaseStudy";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-3 text-end">
            <button className="btn text-center  contact-us-top-button">
              <span className="btn-inner-phone">
                <FaPhoneAlt size={20} />
              </span>
              <span className="btn-inner-text">Contact Us</span>
            </button>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-5 order-lg-1 order-md-1 order-2">
            <img
              src="../../Images/about/contact_us.svg"
              alt="contact-container"
              width={"100%"}
            />
            <div className="p-4">
              <h3>
                Ready to meet your
                <br /> Growth Partner ?
              </h3>
              <p className="mt-5">
                We seek lasting relationships to help our clients unlock rapid
                growth at efficient economics. Tell us where you are and where
                you want to be
              </p>
            </div>
            <div className="patner-card-contact">
              <img src="../../Images/amazon_dark.svg" alt="" />
              <img src="../../Images/amazon_dark.svg" alt="" />
              <img src="../../Images/amazon_dark.svg" alt="" />
              <img src="../../Images/amazon_dark.svg" alt="" />
              <img src="../../Images/amazon_dark.svg" alt="" />
              <img src="../../Images/amazon_dark.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-1 d-none d-lg-block d-md-block order-lg-2 order-md-2 order-1"></div>
          <div className="col-lg-6 order-lg-2 order-md-2 order-1">
            <div className="contact-us-container pt-5">
              <center>
                <h2>Welcoming serious inquiries.</h2>{" "}
              </center>
              <form>
                <div className="mt-4">
                  <label className="form-label">FIRST NAME *</label>
                  <input
                    type="text"
                    className="form-control  form-control-contactus "
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">LAST NAME *</label>
                  <input
                    type="text"
                    className="form-control  form-control-contactus "
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">INDIVIDUAL OR BUSINESS *</label>
                  <input
                    type="text"
                    className="form-control  form-control-contactus "
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">WORK EMAIL *</label>
                  <input
                    type="text"
                    className="form-control  form-control-contactus "
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">Monthly Media Budget *</label>
                  <input
                    type="text"
                    className="form-control  form-control-contactus "
                  />
                </div>
                <div className="mt-4">
                  <label className="form-label">Your Message *</label>
                  <textarea className="form-control  form-control-contactus "></textarea>
                </div>
                <div className=" d-flex mt-4">
                  <div>
                    <input
                      type="checkbox"
                      checked
                      className="form-check-input form-checkbox-custom p-2"
                    />
                  </div>
                  <lable className="form-label ms-3">
                    Yes, I want to experience the greatest growth newsletter on
                    the internet.
                  </lable>
                </div>
                <div className="p-4 mt-4 text-center border">
                  Google Recapcha
                </div>
                <div className="mt-4 text-center">
                  <button className="btn  m-auto btn-Submit-your-message">
                    Submit Your Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <CaseStudies />
        </div>
      </div>
    </>
  );
}
