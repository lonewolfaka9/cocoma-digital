import React from "react";
import AllWebSeries from "../../components/WebSeries/WebSeriesPortfolio";
import WebSeriesGrid from "../../components/WebSeries/WebSeriesGrid";
import "./AllWebseries.css";
import Section12 from "../../components/Home/section12";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
import CreativeProjects from "../../components/CreativeHouseComponent/CreativeHouseHadder";
const AllWebSeriesPortfolio = () => {
  return (
    <>
      {/* <CreativeProjects /> */}
      <AllWebSeries />
      <WebSeriesGrid />
      <AllWebSeries />
      <WebSeriesGrid />
      <AllWebSeries />
      <WebSeriesGrid />
      <RelatedServicesSlider Haddertitle="Related Services" />
      <Section12 />
      <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />
    </>
  );
};

export default AllWebSeriesPortfolio;
