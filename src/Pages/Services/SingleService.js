import RecentlyWorkedWith from "../../components/Services/RecentWork";
import Portfolio from "../../components/Services/ServicePortfolio";
import SingleServiceSlider from "../../components/Services/SingleServiceSlider";
import VideoEditingServices from "../../components/Services/VideoEditingServices";
import "./service.css";
export default function SingleService() {
  return (
    <>
      <SingleServiceSlider />
      <VideoEditingServices />
      <RecentlyWorkedWith />
      <Portfolio />
    </>
  );
}
