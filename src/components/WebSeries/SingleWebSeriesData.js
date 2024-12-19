import Carousel from "react-bootstrap/Carousel";

export default function SingleWebSeriesData() {
  return (
    <>
      {" "}
      <div className="container-fluid text-white bg-black py-5">
        {/* Movie Header */}
        <div className="container">
          <h1 className="fw-bold mb-3">Teri Baton Mein Uljah Jiya ( 2024 )</h1>
          <p>YouTube Marketing</p>

          {/* Author Section */}
          <div className=" row d-flex align-items-center mb-4">
            <div className="col-lg-1">
              <img
                src="../../Images/Owner.svg" // Replace with the actual image URL
                alt="Author"
                className="rounded-circle me-3"
              />
            </div>

            <div className="col-lg-11">
              <p>
                I hope you‘re enjoying browsing this page. If you want my team
                to do your marketing for you &nbsp;
                <span>
                  <a href="/" className="text-warning text-decoration-none">
                    click here.
                  </a>
                </span>
              </p>
              <p className="mb-0">
                Author:{" "}
                <span className="fw-bold text-warning">Anil Mahato</span> |
                Founder -{" "}
                <span className="text-warning">Cocoma Digital, Langistan</span>{" "}
                & CTO - <span className="text-warning">vShowcards</span>
              </p>
            </div>
          </div>

          {/* Movie Details */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <p>
                <strong>Client :</strong> Excel Entertainment
              </p>
              <p>
                <strong>Genre :</strong> Crime, Thriller, Drama
              </p>
              <p>
                <strong>Cast :</strong> Pankaj Tripathi, Ali Fazal, Divyendu
                Sharma
              </p>
              <p>
                <strong>Directors :</strong> Directed By Karan Anshuman, Gurmeet
                Singh
              </p>
              <p>
                <strong>Year :</strong> 2020
              </p>
              <p>
                Mirzapur Is A City In Uttar Pradesh, India, Known For Its
                Carpets And Brassware Industries, As Well As........{" "}
                <a href="/" className="text-warning text-decoration-none">
                  See More
                </a>
              </p>
            </div>

            {/* Image Slider */}
            <div className="col-md-6">
              <Carousel
                indicators={true}
                arrows={false}
                controls={true}
                interval={3000}
              >
                <Carousel.Item>
                  <img
                    src="../../Images/SingleWebSeriesDataImg.svg" // Replace with actual image 1
                    alt="Slide 1"
                    className="d-block w-100 img-fluid"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../../Images/SingleWebSeriesDataImg.svg" // Replace with actual image 2
                    alt="Slide 2"
                    className="d-block w-100 img-fluid"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="../../Images/SingleWebSeriesDataImg.svg" // Replace with actual image 3
                    alt="Slide 3"
                    className="d-block w-100 img-fluid"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
