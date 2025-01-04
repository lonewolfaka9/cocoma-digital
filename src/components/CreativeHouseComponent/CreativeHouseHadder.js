import React, { useEffect, useState } from "react";
import AdminService from "../../Service/apiService";

const CreativeProjects = ({ bannerData }) => {
  const [bannerApiData, setBannerApiData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(bannerData);

  useEffect(() => {
    AdminService.Banners()
      .then((response) => {
        setBannerApiData(response.data.data.banner_title_template); // Access `banner_title_template`
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  // Match `banner_title_template_id` with `id` in the API data
  const matchedBanner = bannerApiData.find(
    (item) =>
      item.id === bannerData.creative_house_projects.banner_title_template_id
  );

  if (!matchedBanner) {
    return <p>No matching banner data found.</p>;
  }

  return (
    <div
      className="creative-projects d-flex align-items-center text-white"
      style={{
        backgroundImage: `url('${matchedBanner.banner_bg_img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4 fw-bold" style={{ color: "white" }}>
              {matchedBanner.banner_title}
            </h1>
            <p className="lead">{matchedBanner.banner_description} .</p>
          </div>
          <div className="col-md-4 text-md-end">
            <h5 className="display-4 fw-bold">
              {matchedBanner.banner_total_video}
            </h5>
            <p className="fs-5">{matchedBanner.banner_short_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeProjects;
