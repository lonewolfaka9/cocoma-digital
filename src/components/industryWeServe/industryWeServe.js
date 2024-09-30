import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { Col, Container, Image, Row } from "react-bootstrap";
import AppImages from "../../utils/images";
const brandData = [
  {
    title: "film_media",
    icon: "filmmedia",
  },
  {
    title: "ott_streaming",
    icon: "ott",
  },
  {
    title: "podcast_music",
    icon: "podcast",
  },
  {
    title: "edtech_lms",
    icon: "edtech",
  },
  {
    title: "ev",
    icon: "ev",
  },
  {
    title: "sass_business",
    icon: "sass",
  },
];
const Brand = ({ cardsrc, title, t }) => (
  <Row className="brand">
    <Col>
      <Image src={AppImages[cardsrc]} className="brand-image" />
    </Col>
    <p>{t(title)}</p>
  </Row>
);
const IndustryWeServe = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="industry-serve">
      <h2>{t("industries_we_serve")}</h2>

      <Row>
        {brandData.map((card, idx) => (
          <Col
            className="flex-grow-0 col-md-2 col-lg-2 p-1"
            key={`we-serve-brand-${idx}`}
          >
            <Brand cardsrc={card.icon} title={card.title} t={t}></Brand>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndustryWeServe;
