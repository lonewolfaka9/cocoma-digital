import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Arrow90degLeft, ArrowDown, ArrowUpRight } from "react-bootstrap-icons";
import Typography from "../../theme/cocoma/typography";

const worksData = [
  {
    id: 1,
    image: AppImages.youtube,
    title: "become_a_youtube_star",
    subtitle: "supercharge_your_youtube_strategies",
  },
  {
    id: 2,
    image: AppImages.instagram,
    title: "become_a_instagram_star",
    subtitle: "accelerate_your_instagram_content",
  },
  {
    id: 3,
    image: AppImages.linkedin,
    title: "connect_with_industry",
    subtitle: "propel_your_linkedin_goals",
  },
  {
    id: 4,
    image: AppImages.facebook,
    title: "video_editing",
    subtitle: "video_editing_details",
  },
  {
    id: 5,
    image: AppImages.tiktok,
    title: "boast_your_tiktok",
    subtitle: "supercharge_your_tiktok_content",
  },
  {
    id: 6,
    image: AppImages.xIcon,
    title: "lead_the_conversation",
    subtitle: "expand_your_twitter_audience",
  },
];

function ServicesByPlatform() {
  const { t } = useTranslation();

  const onShowMore = () => {
    console.log("onShowMore");
  };
  return (
    <section
      id="servicesByPlatform"
      className="block works-block servicesByPlatform"
    >
      <Container fluid>
        <div className="title-holder">
          <h2>{t("our_services_by_platform")}</h2>
        </div>

        <Row className="portfoliolist align-items-center">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <Container
                  className="portfolio-wrapper servicesByPlatform"
                  style={{
                    backgroundImage: `url(${AppImages.servicesplatformbcg})`,
                    backgroundSize: "100%",
                    height: "auto",
                    minHeight: 300,
                    backgroundRepeat: "no-repeat",
                    boxShadow: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  <Row className="portfolio-span">
                    <Image
                      src={works.image}
                      style={{
                        width: 100,
                      }}
                    />
                    <h6 className="title">{t(`${works.title}`)}</h6>
                    <span className="subtitle">{t(`${works.subtitle}`)}</span>
                    <Button
                      variant="link"
                      className="show-more-btn"
                      onClick={onShowMore}
                    >
                      {t("click_now")}
                      <ArrowUpRight
                        color={Typography.color.background}
                        style={{
                          marginLeft: 5,
                        }}
                      />
                    </Button>
                  </Row>
                </Container>
              </Col>
            );
          })}
          <Button variant="link" className="show-more-btn" onClick={onShowMore}>
            {t("show_more")} <ArrowDown color="#080808"></ArrowDown>
          </Button>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesByPlatform;
