import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";

const ListItem = ({ idx, value, t }) => {
  return (
    <Row className="list-view">
      <Col sm={2}>
        <Image src={AppImages[value.image]} />
      </Col>
      <Col sm={8}>
        <h2> {t(value.heading)}</h2>
        <Row>
          <Col>{t(value.title)}</Col>
          <Col>{t(value.subTitle)}</Col>
        </Row>
      </Col>
      <Col sm={2} className="delete-btn-container">
        <Image src={AppImages.deleteBtn} className="delete-btn" />
      </Col>
    </Row>
  );
};
function CartServices() {
  const { t } = useTranslation();
  const { state } = useLocation();
  return (
    <section id="cart-services" className="cart-services">
      <Row>
        <Container className="heading-container">
          <h2>{t("your_cart_of_services")}</h2>
          <Link to={"/services/youtube/services"}>
            <ArrowLeftCircle
              size={30}
              style={{
                color: "#080808",
                marginRight: 10,
              }}
            />
          </Link>
        </Container>
        <Container>
          <Row>
            {state?.subServices?.map((item, idx) => {
              return (
                <ListItem
                  idx={idx}
                  value={item}
                  t={t}
                  key={`cart-services-${idx}`}
                />
              );
            })}
          </Row>
          <Row className="justify-content-md-center">
            <Button
              variant="dark"
              style={{
                marginBottom: 20,
                width: 200,
              }}
            >
              {t("schedule_meeting")}
            </Button>
          </Row>
        </Container>
      </Row>
    </section>
  );
}

export default CartServices;
