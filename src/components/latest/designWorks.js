import { Button, Row } from "react-bootstrap";
import StoriesCarousel from "../common/storiesCarousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import Typography from "../../theme/cocoma/typography";
import { convertArrayForMobile } from "../../utils/utility";
const carouselData = [
  {
    id: 11,
    image: AppImages.designwork,
  },
  {
    id: 12,
    image: AppImages.designworkgraphics,
  },
  {
    id: 13,
    image: AppImages.designwork,
  },
  {
    id: 14,
    image: AppImages.designworkgraphics,
  },
  {
    id: 15,
    image: AppImages.designwork,
  },
  {
    id: 16,
    image: AppImages.designwork,
  },

  {
    id: 21,
    image: AppImages.designwork,
  },
  {
    id: 22,
    image: AppImages.designworkgraphics,
  },
  {
    id: 23,
    image: AppImages.designwork,
  },
  {
    id: 24,
    image: AppImages.designworkgraphics,
  },
  {
    id: 25,
    image: AppImages.designwork,
  },
  {
    id: 26,
    image: AppImages.designworkgraphics,
  },
];

function DesignWorks() {
  const { t } = useTranslation();
  return (
    <section
      id="stories_shorts_reels"
      className="block works-block latest-stories latest-work-from"
    >
      <Row>
        <p>{t("our_latest")}</p>
        <h2
          style={{
            paddingBottom: 30,
          }}
        >
          {t("designs_work")}

          <Button
            variant="link"
            style={{ color: Typography.color.primaryColor }}
          >
            {t("view_all")}
          </Button>
        </h2>
      </Row>
      <StoriesCarousel data={convertArrayForMobile(carouselData)} />
    </section>
  );
}

export default DesignWorks;
