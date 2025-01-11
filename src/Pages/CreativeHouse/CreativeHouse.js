import React from "react";
import CreativeProjects from "../../components/CreativeHouseComponent/CreativeHouseHadder";
import CreativeHouseProject from "../../components/CreativeHouseComponent/CreativePorject";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
import Section12 from "../../components/Home/section12";
import Section14 from "../../components/Home/section14";

export default function CreativeHouse({ CreativeHouseData }) {
  return (
    <>
      <CreativeProjects bannerData={CreativeHouseData} />
      <CreativeHouseProject CreativeHouseProjectCategory={CreativeHouseData} />
      <RelatedServicesSlider Haddertitle="related Services" />
      <Section12
        bannerId={
          CreativeHouseData.creative_house_projects.banner_title_template_id
        }
      />
      <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />
      <Section14 />
    </>
  );
}
