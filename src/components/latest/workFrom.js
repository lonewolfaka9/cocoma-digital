import { Button, Row } from "react-bootstrap";
import StoriesCarousel from "../common/storiesCarousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import Typography from "../../theme/cocoma/typography";
const carouselData = [
  [
    {
      id: 11,
      image: AppImages.tvshow,
    },
    {
      id: 12,
      image: AppImages.tvshow,
    },
    {
      id: 13,
      image: AppImages.tvshow,
    },
    {
      id: 14,
      image: AppImages.tvshow,
    },
    {
      id: 15,
      image: AppImages.tvshow,
    },
    {
      id: 16,
      image: AppImages.tvshow,
    },
  ],
  [
    {
      id: 21,
      image: AppImages.tvshow,
    },
    {
      id: 22,
      image: AppImages.tvshow,
    },
    {
      id: 23,
      image: AppImages.tvshow,
    },
    {
      id: 24,
      image: AppImages.tvshow,
    },
    {
      id: 25,
      image: AppImages.tvshow,
    },
    {
      id: 26,
      image: AppImages.tvshow,
    },
  ],
];

function WorkFrom() {
  const { t } = useTranslation();
  return (
    <section
      id="stories"
      className="block works-block latest-stories latest-work-from"
    >
      <Row>
        <p>{t("our_latest_work_from")}</p>
        <h2
          style={{
            paddingBottom: 30,
          }}
        >
          {t("film_web_series_tv_shows")}

          <Button
            variant="link"
            style={{ color: Typography.color.primaryColor }}
          >
            {t("view_all")}
          </Button>
        </h2>
      </Row>
      <StoriesCarousel data={carouselData} />
    </section>
  );
}

export default WorkFrom;
