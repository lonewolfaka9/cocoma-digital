import { Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ListItem = ({ value, t, onDelete }) => {
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
        <Image
          src={AppImages.deleteBtn}
          className="delete-btn"
          onClick={onDelete}
        />
      </Col>
    </Row>
  );
};
function CartServices() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = state.subServices.map((service) => {
      return {
        ...service,
        isActive: true,
      };
    });
    setCartData(data);
  }, [state?.subServices]);

  const onDelete = (item, idx) => {
    setCartData(() => {
      const cData = cartData[idx];
      cData.isActive = false;
      return [...cartData, cData];
    });
  };
  return (
    <section id="cart-services" className="cart-services">
      <Row>
        <Container className="heading-container">
          <h2>{t("your_cart_of_services")}</h2>
          <Link to={"/services/youtube/services"}>
            <Image
              src={AppImages.backBtn}
              style={{
                color: "#080808",
                marginRight: 10,
              }}
            />
          </Link>
        </Container>
        {cartData?.filter((t) => t.isActive).length !== 0 && (
          <Container>
            <Row>
              {cartData?.map((item, idx) => {
                return (
                  item.isActive && (
                    <ListItem
                      idx={idx}
                      value={item}
                      t={t}
                      key={`cart-services-${idx}`}
                      onDelete={() => onDelete(item, idx)}
                    />
                  )
                );
              })}
            </Row>
            <Row className="justify-content-md-center">
              <Link
                variant="dark"
                className="link-btn"
                style={{
                  textAlign: "center",
                  width: 200,
                }}
                state={{
                  selectedSubServices: cartData.filter((t) => t.isActive),
                }}
                to="/services/youtube/schedules"
              >
                {t("schedule_meeting")}
              </Link>
            </Row>
          </Container>
        )}
        {cartData?.filter((t) => t.isActive).length === 0 && (
          <Container className="empty-cart">
            <Row>
              <Col sm={3}>
                <Image src={AppImages.emptycart} />
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  background: "transparent",
                }}
              >
                <div className="empty-text">
                  <h2>{t("your_cart_is")}</h2>
                  <h2 className="empty-val">{t("empty")}</h2>
                </div>
                <span>{t("please_add_services_to_schedule_a_meeting")}</span>
              </Col>
            </Row>
          </Container>
        )}
      </Row>
    </section>
  );
}

export default CartServices;
