import { Button, Col, Container, Image, Row } from "react-bootstrap";
import StoriesCarousel from "../common/storiesCarousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import Typography from "../../theme/cocoma/typography";
import { ArrowRightCircle } from "react-bootstrap-icons";
const how_works = [
  {
    title: "explore_our_services",
    image: "exploreservice",
  },
  {
    title: "add_suitable_services",
    image: "addsubtitle",
  },
  {
    title: "schedule_meeting",
    image: "schedulemeeting",
  },
  {
    title: "start_the_project",
    image: "startproject",
  },
];

function HowItWork() {
  const { t } = useTranslation();
  return (
    <section id="how-it-works" className="how-it-works">
      <Row>
        <h1>{t("how_it_work")}</h1>
        <Container>
          <Row className="justify-content-md-center">
            {how_works.map((item, idx) => {
              return (
                <>
                  <Col className="count">
                    <h1>{idx + 1}</h1>
                  </Col>
                  <Col className="detail">
                    <Image src={AppImages[item.image]} />
                    <p> {t(item.title)}</p>
                  </Col>

                  {idx !== how_works.length - 1 ? (
                    <Col className="move-icon">
                      {" "}
                      <Image src={AppImages.arrowright} />{" "}
                    </Col>
                  ) : null}
                </>
              );
            })}
          </Row>
        </Container>
      </Row>
    </section>
  );
}

export default HowItWork;
