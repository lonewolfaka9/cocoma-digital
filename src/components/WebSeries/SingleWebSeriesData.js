import Carousel from "react-bootstrap/Carousel";

export default function SingleWebSeriesData({ itemData }) {
  console.log(itemData);
  return (
    <>
      {" "}
      <div className="container-fluid text-white bg-black py-5">
        {/* Movie Header */}
        <div className="container">
          <h2 className="fw-bold mb-3">
            {itemData.title} ({itemData.year})
          </h2>
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
                  <a
                    href="/ScheduleMeeting"
                    className="text-warning text-decoration-none"
                  >
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
                <strong>Client :</strong> {itemData.client}
              </p>
              <p>
                <strong>Genre :</strong> {itemData.genre}
              </p>
              <p>
                <strong>Cast :</strong> {itemData.cast}
              </p>
              <p>
                <strong>Directors :</strong> {itemData.directors}
              </p>
              <p>
                <strong>Year :</strong> {itemData.year}
              </p>
              <p>{itemData.description}</p>
            </div>

            {/* Image Slider */}
            <div className="col-md-6">
              <Carousel
                indicators={true}
                arrows={false}
                controls={true}
                interval={3000}
              >
                {itemData.images && itemData.images.length > 0 ? (
                  itemData.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={image.image}
                        alt="Slide 3"
                        className="d-block w-100 img-fluid"
                      />
                    </Carousel.Item>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
