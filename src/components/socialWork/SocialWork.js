import { Button, Row, Tab, Tabs } from "react-bootstrap";
import StoriesCarousel from "../common/storiesCarousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import Typography from "../../theme/cocoma/typography";
const carouselData = [
  [
    {
      id: 11,
      image: AppImages.socialwork,
    },
    {
      id: 12,
      image: AppImages.designworkgraphics,
    },
    {
      id: 13,
      image: AppImages.socialwork,
    },
    {
      id: 14,
      image: AppImages.designworkgraphics,
    },
    {
      id: 15,
      image: AppImages.socialwork,
    },
    {
      id: 16,
      image: AppImages.socialwork,
    },
  ],
  [
    {
      id: 21,
      image: AppImages.socialwork,
    },
    {
      id: 22,
      image: AppImages.designworkgraphics,
    },
    {
      id: 23,
      image: AppImages.socialwork,
    },
    {
      id: 24,
      image: AppImages.designworkgraphics,
    },
    {
      id: 25,
      image: AppImages.socialwork,
    },
    {
      id: 26,
      image: AppImages.designworkgraphics,
    },
  ],
];

const tabsData = [
  {
    name: "home",
    title: "Home",
  },
  {
    name: "profile",
    title: "Profile",
  },
  {
    name: "contact",
    title: "Contact",
  },
  {
    name: "mediaWork",
    title: "Media Work",
  },
];
function SocialTabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="socialTabs"
      className="mb-3"
    >
      {tabsData.map((tab) => {
        return (
          <Tab eventKey={tab.name} title={tab.title}>
            <StoriesCarousel data={carouselData} />
          </Tab>
        );
      })}
    </Tabs>
  );
}
function SocialWork() {
  const { t } = useTranslation();
  return (
    <section
      id="stories_shorts_reels"
      className="block works-block latest-stories latest-work-from"
      style={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Row>
        <p>{t("our_latest")}</p>
        <h2
          style={{
            paddingBottom: 30,
          }}
        >
          {t("social_work")}

          <Button
            variant="link"
            style={{ color: Typography.color.primaryColor }}
          >
            {t("view_all")}
          </Button>
        </h2>
      </Row>
      <SocialTabs />
    </section>
  );
}

export default SocialWork;
