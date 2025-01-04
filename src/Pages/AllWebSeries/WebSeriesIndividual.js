import React, { useEffect, useState } from "react";
import SingleWebSeriesData from "../../components/WebSeries/SingleWebSeriesData";
import Section02 from "../../components/Home/section02";
import ClientRequirement from "../../components/WebSeries/ClientRequirement";
import OtherActivities from "../../components/WebSeries/OtherActivities";
import ContentCreateByTeam from "../../components/WebSeries/ContentCreateByTeam";
import "./AllWebseries.css";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
import Section12 from "../../components/Home/section12";
import ProjectSuccess from "../../components/WebSeries/ProjectSucess";
import { useParams } from "react-router-dom";
import BusinessCareerSection from "../../components/Home/section14";

const WebSeriesIndividual = ({ MarketingHouseData }) => {
  const { id } = useParams(); // Extracting itemId from the URL
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    if (MarketingHouseData?.marketing_house) {
      // Loop through all marketing houses
      const matchingItem = MarketingHouseData.marketing_house
        .flatMap((house) => house.items) // Flatten all items into one array
        .find((item) => item.id.toString() === id); // Match itemId

      // Set the matched item data if found
      if (matchingItem) {
        setItemData(matchingItem); // Set the matched item data
      } else {
        console.log("No item found with this itemId");
      }
    }
  }, [id, MarketingHouseData]);

  console.log("Matched Item Data:", itemData);

  return (
    <>
      {/* Render SingleWebSeriesData with matched item data */}
      {itemData ? (
        <>
          <SingleWebSeriesData itemData={itemData} />
          <Section02 />
          <ClientRequirement itemData={itemData} />
          <OtherActivities itemData={itemData} />
          <ContentCreateByTeam itemData={itemData} />
          <ProjectSuccess />
          <RelatedServicesSlider Haddertitle="Related Services" />
          <Section12 />
          <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />

          <BusinessCareerSection />
        </>
      ) : (
        <p>Item not found</p>
      )}
    </>
  );
};

export default WebSeriesIndividual;
