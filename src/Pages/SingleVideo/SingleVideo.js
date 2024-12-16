import Section12 from "../../components/Home/section12";
import BriefAndRequirement from "../../components/SingleVideo/BriefAndRequirement";
import CreativeHouseServices from "../../components/SingleVideo/CreativeHouseServices";
import CreativeSlider from "../../components/SingleVideo/CreativeSlider";
import FinalOutput from "../../components/SingleVideo/FinalOutput";
import HowWeEdit from "../../components/SingleVideo/HowWeEdit";
import InviteForService from "../../components/SingleVideo/InviteForEdit";
import "./videoediting.css";
export default function SingleVideo() {
  return (
    <>
      <InviteForService />
      <HowWeEdit />
      <BriefAndRequirement />
      <CreativeSlider />
      <FinalOutput />
      <Section12 />
      <CreativeHouseServices />
    </>
  );
}
