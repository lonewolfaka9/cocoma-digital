import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "react-bootstrap-icons";
import Typography from "../../theme/cocoma/typography";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: AppImages.videoproduction,
    title: "video_production",
    subtitle: "video_production_details",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: AppImages.designservices,
    title: "design_services",
    subtitle: "design_services_details",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: AppImages.postproduction,
    title: "post_production",
    subtitle: "post_production_details",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: AppImages.videoediting,
    title: "video_editing",
    subtitle: "video_editing_details",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: AppImages.motiongraphics,
    title: "motion_graphics",
    subtitle: "motion_graphics_details",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: AppImages.livematch,
    title: "livematch",
    subtitle: "copywriting_details",
  },
];

const buttonData = [
  "content_service",
  "performance_marketing_services",
  "it_web_services",
];

function ExploreServices() {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState("content_service");
  const onClickService = (service) => {
    setActiveService(service);
  };
  const onShowMore = () => {
    console.log("onShowMore");
  };
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>{t("explore_our_services")}</h2>
          <div className="subtitle">{t("explore_our_awesome_works")}</div>
        </div>
        <Row className="portfoliolist-button align-items-center">
          {buttonData.map((data, idx) => (
            <Col xs="auto" key={`ex-ser-${idx}`}>
              <Button
                variant="none"
                className={data === activeService ? "active-btn" : "none"}
                onClick={() => onClickService(data)}
              >
                {t(data)}
              </Button>
            </Col>
          ))}
        </Row>
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

export default ExploreServices;
