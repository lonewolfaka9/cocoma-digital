import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import { Link } from "react-router-dom";

const ListCarouselItem = ({ list, title }) => {
  const { t } = useTranslation();
  return (
    <Row>
      {list.map((item, idx) => (
        <Col
          key={`stories-item-carousel-items-data-${idx}`}
          className="item-list"
        >
          <Container>
            <Image
              className="d-block w-100"
              src={AppImages[item.image]}
              alt={item.title}
            />
            <p>{t(item.title)}</p>
            <Link
              variant="dark"
              className="link-btn"
              state={{
                item,
                title,
              }}
              to={{
                pathname: "/services/youtube/cart",
              }}
            >
              {t("add")}
            </Link>
          </Container>
        </Col>
      ))}
    </Row>
  );
};
function ListCarousel({ data, title }) {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <ListCarouselItem list={data} title={title}></ListCarouselItem>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ListCarousel;
