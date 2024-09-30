import { Button, Row } from "react-bootstrap";
import StoriesCarousel from "../common/storiesCarousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import Typography from "../../theme/cocoma/typography";
import { convertArrayForMobile } from "../../utils/utility";
const carouselData = [
  {
    id: 11,
    image: AppImages.latestshort,
  },
  {
    id: 12,
    image: AppImages.lastestshortcat,
  },
  {
    id: 13,
    image: AppImages.latestshort,
  },
  {
    id: 14,
    image: AppImages.lastestshortcat,
  },
  {
    id: 15,
    image: AppImages.latestshort,
  },
  {
    id: 16,
    image: AppImages.latestshort,
  },
  {
    id: 21,
    image: AppImages.latestshort,
  },
  {
    id: 22,
    image: AppImages.lastestshortcat,
  },
  {
    id: 23,
    image: AppImages.latestshort,
  },
  {
    id: 24,
    image: AppImages.lastestshortcat,
  },
  {
    id: 25,
    image: AppImages.latestshort,
  },
  {
    id: 26,
    image: AppImages.lastestshortcat,
  },
];

function ShortReels() {
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
          {t("shorts_reels")}

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

export default ShortReels;
