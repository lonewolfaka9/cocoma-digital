import React, { useEffect, useState } from "react";
import AdminService from "../../Service/apiService";
import { useParams } from "react-router-dom"; // To get the dynamic id from the route

const Section12 = () => {
  const [BookCall, setBookCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Fetch the `id` from the route (e.g., `/section12/:id`)

  useEffect(() => {
    AdminService.BookACall()
      .then((response) => {
        const bookCallData = response.data.data.book_call;

        // If id is provided, fetch the corresponding data; otherwise, fetch id: 1
        const selectedData =
          bookCallData.find((item) => item.id === parseInt(id, 10)) ||
          bookCallData.find((item) => item.id === 1);

        setBookCall(selectedData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
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

          <a href="/contact_us" className="btn btn-warning mt-5 mb-5">
            {BookCall.book_button_text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section12;
