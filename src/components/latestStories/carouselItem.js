import { Col, Container, Image, Row } from "react-bootstrap";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";

const CarouselItem = ({ item }) => {
  const { t } = useTranslation();
  return (
    <Row>
      {item.map((data, idx) => (
        <Col key={`carousel-items-data-${idx}`}>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Image
              src={AppImages.commenticon}
              style={{
                width: 50,
                height: 50,
                marginBottom: -20,
              }}
            />
          </Col>
          <Col>
            <Container fluid className="store-carousel-item">
              <Image
                src={data.icon}
                alt={data.subDetails}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
              <Image
                className="d-block w-100"
                src={AppImages.storyimage}
                alt={data.subDetails}
              />

              <p className="carousel-details"> {t(data.details)}</p>
              <h2 className="carousel-subtitle">{t(data.subDetails)}</h2>
            </Container>
          </Col>
        </Col>
      ))}
    </Row>
  );
};

export default CarouselItem;
