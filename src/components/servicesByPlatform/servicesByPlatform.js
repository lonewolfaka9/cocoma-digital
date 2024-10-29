import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { ArrowDown, ArrowUpRight } from "react-bootstrap-icons";
import Typography from "../../theme/cocoma/typography";

const worksData = [
  {
    id: 1,
    image: AppImages.youtubeservices,
    title: "become_a_youtube_star",
    subtitle: "supercharge_your_youtube_strategies",
  },
  {
    id: 2,
    image: AppImages.instagramservices,
    title: "become_a_instagram_star",
    subtitle: "accelerate_your_instagram_content",
  },
  {
    id: 3,
    image: AppImages.linkedinservices,
    title: "linkedIn_growth_management_services",
    subtitle: "propel_your_linkedin_goals",
  },
  {
    id: 4,
    image: AppImages.facebookservices,
    title: "facebook_growth_management_services",
    subtitle: "video_editing_details",
  },
  {
    id: 5,
    image: AppImages.tiktolkservices,
    title: "boast_your_tiktok",
    subtitle: "supercharge_your_tiktok_content",
  },
  {
    id: 6,
    image: AppImages.twitterservices,
    title: "twitter_growth_management_services",
    subtitle: "expand_your_twitter_audience",
  },
];

function ServicesByPlatform() {
  const { t } = useTranslation();

  const onShowMore = () => {
    console.log("onShowMore");
  };
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>{t("our_services_by_platform")}</h2>
        </div>

        <Row className="portfoliolist align-items-center">
          {worksData.map((works) => {
            return (
              <Col
                sm={4}
                key={works.id}
                style={{
                  border: "none",
                }}
              >
                <Container className="portfolio-wrapper">
                  <Image src={works.image} />

                  <Container className="portfolio-span">
                    <h4>{t(`${works.title}`)}</h4>
                  </Container>

                  {/* <Container className="label text-center">
                    <h3>{t(`${works.title}`)}</h3>
                    <p>{t(`${works.subtitle}`)}</p>
                  </Container> */}
                  <Container className="button-container">
                    <Button
                      variant="dark"
                      className="explore-more-btn"
                      onClick={onShowMore}
                    >
                      {t("explore_now")}
                      <ArrowUpRight
                        color={Typography.color.white}
                        style={{
                          marginLeft: 5,
                        }}
                      />
                    </Button>
                  </Container>
                </Container>
              </Col>
            );
          })}
          <Container className="show-btn-container">
            <Button
              variant="link"
              className="show-more-btn"
              onClick={onShowMore}
            >
              {t("show_more")} <ArrowDown color="#080808"></ArrowDown>
            </Button>
          </Container>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesByPlatform;
