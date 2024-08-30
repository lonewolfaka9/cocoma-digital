import { useTranslation } from "react-i18next";
import LatestStoriesCarousel from "./latestStoriesCarousel";
import { Row } from "react-bootstrap";
import AppImages from "../../utils/images";

const carouselData = [
  [
    {
      id: 11,
      image: AppImages.storyimage,
      icon: AppImages.primevideoicon,
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 12,
      image: AppImages.storyimage,
      icon: AppImages.minitvicon,
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 13,
      image: AppImages.storyimage,
      icon: AppImages.tataevicon,
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
  [
    {
      id: 21,
      image: AppImages.storyimage,
      icon: AppImages.primevideoicon,
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 22,
      image: AppImages.storyimage,
      icon: AppImages.minitvicon,
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 23,
      image: AppImages.storyimage,
      icon: AppImages.tataevicon,
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
  [
    {
      id: 31,
      image: AppImages.storyimage,
      icon: AppImages.primevideoicon,
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 32,
      image: AppImages.storyimage,
      icon: AppImages.minitvicon,
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 33,
      image: AppImages.storyimage,
      icon: AppImages.tataevicon,
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
  [
    {
      id: 41,
      image: AppImages.storyimage,
      icon: AppImages.primevideoicon,
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 42,
      image: AppImages.storyimage,
      icon: AppImages.minitvicon,
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 43,
      image: AppImages.storyimage,
      icon: AppImages.tataevicon,
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
];

const LatestStories = () => {
  const { t } = useTranslation();
  return (
    <section id="stories" className="block works-block latest-stories">
      <Row>
        <p>{t("our_clients")}</p>
        <h2>{t("latest_success_stories")}</h2>
      </Row>
      <LatestStoriesCarousel data={carouselData} />
    </section>
  );
};

export default LatestStories;
