import React from "react";
import "./AllWebseries.css";
import Section12 from "../../components/Home/section12";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
// import CreativeProjects from "../../components/SingleVideo/";
import AllSeriesData from "../../components/WebSeries/AllSeriesData";
// import HireingCard from "../../components/WebSeries/HireingCart";
import ProjectSucess from "../../components/WebSeries/ProjectSucess";
// import Section11 from "../../components/Home/section11";
import MarkatingHouseBanner from "../../components/SingleVideo/MarkatingHouseBanner";

const ViewAllSeries = ({ MarketingHouseData }) => {
  return (
    <>
      {/* <CreativeProjects bannerData={CreativeHouseData} /> */}
      <MarkatingHouseBanner bannerData={MarketingHouseData} />
      <AllSeriesData allFilmData={MarketingHouseData} />
      <RelatedServicesSlider Haddertitle="Related Services" />
      <Section12
        bannerId={
          MarketingHouseData.marketing_house_projects.banner_title_template_id
        }
      />
      {/* <Section11 /> */}
      <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />

      <ProjectSucess />
    </>
  );
};

export default ViewAllSeries;
