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

const ListItem = ({ idx, item, t }) => {
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
};
function HowItWork() {
  const { t } = useTranslation();
  return (
    <section id="how-it-works" className="how-it-works">
      <Row>
        <h2>{t("how_it_work")}</h2>
        <Container>
          <Row className="justify-content-md-center">
            {how_works.map((item, idx) => {
              return (
                <ListItem
                  idx={idx}
                  item={item}
                  t={t}
                  key={`how-it-work-${idx}`}
                />
              );
            })}
          </Row>
        </Container>
      </Row>
    </section>
  );
}

export default HowItWork;
