import { Button, Row } from "react-bootstrap";
import StoriesCarousel from "../common/storiesCarousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import Typography from "../../theme/cocoma/typography";
import { convertArrayForMobile } from "../../utils/utility";

const creativeHouse = [
  {
    id: 11,
    image: AppImages.creativehouse,
  },
  {
    id: 12,
    image: AppImages.creativehousedesign,
  },
  {
    id: 13,
    image: AppImages.creativehouse,
  },
  {
    id: 14,
    image: AppImages.tvshow,
  },
  {
    id: 15,
    image: AppImages.creativehouse,
  },
  {
    id: 16,
    image: AppImages.creativehouse,
  },

  {
    id: 21,
    image: AppImages.creativehouse,
  },
  {
    id: 22,
    image: AppImages.creativehousedesign,
  },
  {
    id: 23,
    image: AppImages.creativehouse,
  },
  {
    id: 24,
    image: AppImages.tvshow,
  },
  {
    id: 25,
    image: AppImages.creativehouse,
  },
  {
    id: 26,
    image: AppImages.tvshow,
  },
];
function CreativeHouse() {
  const { t } = useTranslation();
  console.log("creativeHouse");
  return (
    <section
      id="stories_our_creative_house"
      className="block works-block latest-stories latest-work-from"
    >
      <Row>
        <p>{t("latest_videos_from")}</p>
        <h2
          style={{
            paddingBottom: 30,
          }}
        >
          {t("our_creative_house")}

          <Button
            variant="link"
            style={{ color: Typography.color.primaryColor }}
          >
            {t("view_all")}
          </Button>
        </h2>
      </Row>
      <StoriesCarousel data={convertArrayForMobile(creativeHouse)} />
    </section>
  );
}

export default CreativeHouse;
