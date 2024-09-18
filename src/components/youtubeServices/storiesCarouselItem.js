import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "react-bootstrap-icons";

const StoriesCarouselItem = ({ item }) => {
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
              <h2
                className="carousel-subtitle"
                style={{
                  paddingBottom: 20,
                }}
              >
                {t(data.heading)}
              </h2>
              <Image src={AppImages[data.image]} alt={data.subDetails} />

              <p className="carousel-details"> {t(data.details)}</p>
              <Button variant="link" className="show-more-btn">
                {t("show_more")}
              </Button>
            </Container>
          </Col>
        </Col>
      ))}
    </Row>
  );
};

export default StoriesCarouselItem;
