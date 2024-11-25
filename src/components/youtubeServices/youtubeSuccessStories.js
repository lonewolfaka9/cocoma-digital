import { useTranslation } from "react-i18next";
import YoutubeSuccessStoriesCarousel from "./youtubeSuccessStoriesCarousel";
import { Row } from "react-bootstrap";

const carouselData = [
  [
    {
      id: 11,
      image: "emilybrown",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 12,
      image: "emilybrown2",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 13,
      image: "emilybrown3",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
  [
    {
      id: 21,
      image: "emilybrown",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 22,
      image: "emilybrown2",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 23,
      image: "emilybrown3",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
  [
    {
      id: 31,
      image: "emilybrown",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 32,
      image: "emilybrown2",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 33,
      image: "emilybrown3",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
  [
    {
      id: 41,
      image: "emilybrown",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_prime_videos",
    },
    {
      id: 42,
      image: "emilybrown2",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "amazon_minitv_videos",
    },
    {
      id: 43,
      image: "emilybrown3",
      heading: "youtube_user",
      details: "dummy_text",
      subDetails: "tata_ev_videos",
    },
  ],
];

const YoutubeSuccessStories = () => {
  const { t } = useTranslation();
  return (
    <section id="stories" className="block works-block latest-stories">
      <Row>
        <p>{t("our_clients")}</p>
        <h2>{t("youtube_success_stories")}</h2>
      </Row>
      <YoutubeSuccessStoriesCarousel data={carouselData} />
    </section>
  );
};

export default YoutubeSuccessStories;
