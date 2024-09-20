import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const ListItem = ({ idx, value, t, onDelete }) => {
  return (
    <Container className="list-view-item-container">
      <h2>
        {idx + 1}
        {` ${t(value.title)}`}
      </h2>
      <Row>
        {value?.catagories?.map((item, ix) => {
          console.log(ix, item);
          return (
            <Col className="list-view-col" key={`list-item-cat-${ix}`}>
              <Row>
                <Col className="delete-btn-container">
                  <h2>{`${idx + 1}.${ix + 1}`}</h2>
                  <Image
                    src={AppImages.deleteBtn}
                    className="delete-btn"
                    onClick={onDelete}
                  />
                </Col>
              </Row>
              <Row>
                <Image
                  src={AppImages[item.image]}
                  style={{
                    width: 300,
                  }}
                />
              </Row>
              <Row>
                <Col>
                  <h2> {t(item.heading)}</h2>
                  <Col>{t(item.title)}</Col>
                  <Col>{t(item.subTitle)}</Col>
                </Col>
              </Row>
              <Row>
                <Col className="activity_btn">
                  <Button
                    variant={
                      item.occurrence === "recurring" ? "warning" : "secondary"
                    }
                  >
                    {t("recurring")}
                  </Button>
                  <Button
                    variant={
                      item.occurrence === "recurring" ? "secondary" : "warning"
                    }
                  >
                    {t("one_time_only")}
                  </Button>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
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
            <Image src={AppImages.backBtn} />
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
                {t("schedule_meeting")}{" "}
                <ArrowRight
                  size={25}
                  style={{
                    marginLeft: 10,
                  }}
                ></ArrowRight>
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
