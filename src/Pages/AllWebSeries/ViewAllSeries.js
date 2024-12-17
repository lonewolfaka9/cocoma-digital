import React from "react";
import "./AllWebseries.css";
import Section12 from "../../components/Home/section12";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
import CreativeProjects from "../../components/CreativeHouseComponent/CreativeHouseHadder";
import AllSeriesData from "../../components/WebSeries/AllSeriesData";
import HireingCard from "../../components/WebSeries/HireingCart";
import ProjectSucess from "../../components/WebSeries/ProjectSucess";
const ViewAllSeries = () => {
  return (
    <>
      <CreativeProjects />
      <AllSeriesData />
      <RelatedServicesSlider Haddertitle="Related Services" />
      <Section12 />
      <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />
      <HireingCard />
      <ProjectSucess />
    </>
  );
};

export default ViewAllSeries;
