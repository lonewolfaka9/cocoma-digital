export default function HireingCard() {
  return (
    <>
      {" "}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-5">
            <div className="card p-4 text-center shadow-sm">
              <div className="mb-3">
                <img
                  src="https://via.placeholder.com/300x200" // Replace with your actual image
                  alt="Find Right For Your Business"
                  className="img-fluid"
                />
              </div>
              <h5 className="fw-bold">Find Right For Your Business</h5>
              <a href="/" className="btn btn-warning mt-3 fw-bold">
                Hire Us <span>&#8599;</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-5">
            <div className="card p-4 text-center shadow-sm">
              <div className="mb-3">
                <img
                  src="https://via.placeholder.com/300x200" // Replace with your actual image
                  alt="Find Right For Your Career"
                  className="img-fluid"
                />
              </div>
              <h5 className="fw-bold">Find Right For Your Career</h5>
              <a href="/" className="btn btn-warning mt-3 fw-bold">
                Join Us <span>&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
