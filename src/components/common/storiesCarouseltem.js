import { Col, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const StoriesCarouselItem = ({ item }) => {
  const { t } = useTranslation();
  return (
    <Row>
      {item.map((data, idx) => (
        <Col key={`stories-item-carousel-items-data-${idx}`}>
          <Image
            className="d-block w-100"
            src={data.image}
            alt={data.subDetails}
          />
        </Col>
      ))}
    </Row>
  );
};

export default StoriesCarouselItem;
