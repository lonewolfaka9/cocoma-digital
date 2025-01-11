import { useParams } from "react-router-dom";
import Section12 from "../../components/Home/section12";
import BriefAndRequirement from "../../components/SingleVideo/BriefAndRequirement";
import CreativeHouseServices from "../../components/SingleVideo/CreativeHouseServices";
import CreativeSlider from "../../components/SingleVideo/CreativeSlider";
import FinalOutput from "../../components/SingleVideo/FinalOutput";
import HowWeEdit from "../../components/SingleVideo/HowWeEdit";
import InviteForService from "../../components/SingleVideo/InviteForEdit";
import "./videoediting.css";
export default function SingleVideo({ CreativeHouseData }) {
  console.log(CreativeHouseData);

  const { id } = useParams();

  const matchingItem = CreativeHouseData.creative_house
    .flatMap((cat) => cat.items)
    .find((item) => item.id === Number(id)); // Ensure id matches as a number

  return (
    <>
      <InviteForService />
      <HowWeEdit HowWeEditTitle={matchingItem} />
      <BriefAndRequirement RequireMentTitle={matchingItem} />
      <CreativeSlider CreativeSliderData={matchingItem} />
      <FinalOutput FinalOutputData={matchingItem} />
      <Section12
        bannerId={
          CreativeHouseData.creative_house_projects.banner_title_template_id
        }
      />
      <CreativeHouseServices />
    </>
  );
}
