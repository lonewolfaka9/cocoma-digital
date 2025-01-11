import React, { useEffect, useState } from "react";
import AdminService from "../../Service/apiService";

const Section12 = ({ bannerData, bannerId }) => {
  const [BookCall, setBookCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the `id` from bannerData or fallback to the route params or default `1`
  const params = bannerId;
  const templateId = bannerData?.top_banner?.book_call_template_id;
  const id = templateId || parseInt(params.id, 10) || 1;

  useEffect(() => {
    setLoading(true); // Reset loading state when fetching new data

    AdminService.BookACall()
      .then((response) => {
        const bookCallData = response?.data?.data?.book_call || [];

        // Find data matching the given `id`
        const selectedData = bookCallData.find((item) => item.id === id);

        // Handle case when no matching data is found
        if (!selectedData) {
          throw new Error(`No data found for id: ${id}`);
        }

        setBookCall(selectedData);
      })
      .catch((err) => {
        setError(err.message || "An error occurred while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // Fetch new data whenever `id` changes

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  if (!BookCall) {
    return <p>No data found.</p>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row border rounded">
        <div className="col-md-6 col-lg-5 d-flex align-items-end">
          <img
            src={BookCall.book_image}
            alt="Book A Call"
            className="bookACall-img"
          />
        </div>

        <div className="col-md-6 col-lg-7 pt-5">
          <h2>{BookCall.book_heading}</h2>

          <div className="my-3 mt-5">
            <h5>{BookCall.book_title1}</h5>
            <p>{BookCall.book_description1}</p>
          </div>

          <div className="my-3 mt-5">
            <h5>{BookCall.book_title2}</h5>
            <p>{BookCall.book_description2}</p>
          </div>

          <a
            href="/contact_us"
            className="btn btn-warning book-a-call-button-width  mt-5 mb-5"
          >
            {BookCall.book_button_text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section12;
