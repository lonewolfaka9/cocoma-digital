import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";

const YouTubeCarouselItem = ({ service }) => {
  const { t } = useTranslation();
  return (
    <Row>
      <Col sm={7}>
        <Image src={AppImages.home_global} />
        <h2 className="carousel-subtitle">{t(service.details)}</h2>
        <p className="carousel-details"> {t(service.subDetails)}</p>
      </Col>
      <Col sm={5}>
        <Image src={service.image} alt={service.subDetails} />
      </Col>
    </Row>
  );
};

export default YouTubeCarouselItem;
