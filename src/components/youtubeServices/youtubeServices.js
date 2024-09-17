import { useTranslation } from "react-i18next";
import YouTubeServicesCarousel from "./youTubeServicesCarousel";
import { Row } from "react-bootstrap";
import AppImages from "../../utils/images";

const carouselData = [
  {
    id: 41,
    image: AppImages.youtubeservicepage,
    details: "youtube_service_success_heading",
    subDetails: "youtube_service_success_details",
  },
  {
    id: 41,
    image: AppImages.youtubeservicepage,
    details: "youtube_service_success_heading",
    subDetails: "youtube_service_success_details",
  },
  {
    id: 41,
    image: AppImages.youtubeservicepage,
    details: "youtube_service_success_heading",
    subDetails: "youtube_service_success_details",
  },
  {
    id: 41,
    image: AppImages.youtubeservicepage,
    details: "youtube_service_success_heading",
    subDetails: "youtube_service_success_details",
  },
  {
    id: 41,
    image: AppImages.youtubeservicepage,
    details: "youtube_service_success_heading",
    subDetails: "youtube_service_success_details",
  },
];

const YouTubeServices = () => {
  return (
    <section
      id=" youtube-services"
      className="block works-block youtube-services"
    >
      <YouTubeServicesCarousel data={carouselData} />
    </section>
  );
};

export default YouTubeServices;
