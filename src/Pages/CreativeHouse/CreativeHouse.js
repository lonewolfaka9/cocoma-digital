import CreativeProjects from "../../components/CreativeHouseComponent/CreativeHouseHadder";
import CreativeHouseProject from "../../components/CreativeHouseComponent/CreativePorject";
import RelatedServicesSlider from "../../components/CreativeHouseComponent/relatedServices";
import Section12 from "../../components/Home/section12";
import Section14 from "../../components/Home/section14";

export default function CreativeHouse({ HomePage }) {
  return (
    <>
      <CreativeProjects />
      <CreativeHouseProject />
      <RelatedServicesSlider Haddertitle="related Services" />
      <Section12 />
      <RelatedServicesSlider Haddertitle="Explore More Film & Media Services" />
      <Section14 HireUsData={HomePage.hire_us} />
    </>
  );
}
