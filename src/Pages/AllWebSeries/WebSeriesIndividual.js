import React from "react";
import SingleWebSeriesData from "../../components/WebSeries/SingleWebSeriesData";
import Section02 from "../../components/Home/section02";
import ClientRequirement from "../../components/WebSeries/ClientRequirement";
import Section11 from "../../components/Home/section11";
import OtherActivities from "../../components/WebSeries/OtherActivities";
import ContentCreateByTeam from "../../components/WebSeries/ContentCreateByTeam";
import "./AllWebseries.css";
import HireingCard from "../../components/WebSeries/HireingCart";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
import Section12 from "../../components/Home/section12";
import ProjectSuccess from "../../components/WebSeries/ProjectSucess";
const WebSeriesIndividual = ({ HomePage }) => {
  return (
    <>
      <SingleWebSeriesData />
      <Section02 BrandData={HomePage} />
      <ClientRequirement />
      <OtherActivities />
      <ContentCreateByTeam />
      <ProjectSuccess />
      <RelatedServicesSlider Haddertitle="Related Services" />
      <Section12 />
      <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />
      <HireingCard />
    </>
  );
};

export default WebSeriesIndividual;
