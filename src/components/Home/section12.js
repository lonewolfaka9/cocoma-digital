import React, { useEffect, useState } from "react";
import AdminService from "../../Service/apiService";

const Section12 = ({ bannerData, bannerId }) => {
  const [BookCall, setBookCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Determine the `id` to filter data
  const templateId = bannerData?.top_banner?.book_call_template_id;
  const id = templateId || bannerId || 1; // Priority: templateId > bannerId > default 1

  useEffect(() => {
    setLoading(true); // Start loading state when fetching data
    setError(null); // Reset error state when fetching new data

    AdminService.BookACall()
      .then((response) => {
        const bookCallData = response?.data?.data?.book_call || [];

        // Find data matching the given `id`
        const selectedData = bookCallData.find((item) => item.id === id);

        // Handle no data found for the given `id`
        if (!selectedData) {
          setError(`No data found for id: ${id}`);
          return;
        }

        setBookCall(selectedData); // Update state with the selected data
      })
      .catch((err) => {
        setError(err.message || "An error occurred while fetching data.");
      })
      .finally(() => {
        setLoading(false); // Stop loading state
      });
  }, [id]); // Refetch data if `id` changes

  // Loading state
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  // No data state
  if (!BookCall) {
    return <p>No data found.</p>;
  }

  // Render the BookCall data
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 col-lg-5 d-flex align-items-end">
          <img
            src={BookCall.book_image}
            alt="Book A Call"
            className="bookACall-img"
          />
        </div>

        <div className="col-md-6 col-lg-7 pt-5">
          <h2 className="fw-bold">{BookCall.book_heading}</h2>

          <div className="my-3 mt-5">
            <h5 className="fw-bold">{BookCall.book_title1}</h5>
            <p>{BookCall.book_description1}</p>
          </div>

          <div className="my-3 mt-5">
            <h5 className="fw-bold">{BookCall.book_title2}</h5>
            <p>{BookCall.book_description2}</p>
          </div>

          <a
            href="/ScheduleMeeting"
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
