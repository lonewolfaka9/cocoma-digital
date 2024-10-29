import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const EmptyContainer = ({ t }) => {
  return (
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
  );
};

const ListItem = ({ idx, value, t, onDelete, onOccurrenceClick }) => {
  return (
    <Container className="list-view-item-container">
      <h2>
        {idx + 1}
        {` ${t(value.title)}`}
      </h2>
      <Row>
        {value?.catagories?.map((item, ix) => {
          return (
            <Col className="list-view-col" key={`list-item-cat-${ix}`}>
              <Row>
                <Col className="delete-btn-container">
                  <h2>{`${idx + 1}.${ix + 1}`}</h2>
                  <Image
                    src={
                      item.isDeleted ? AppImages.addBtn : AppImages.deleteBtn
                    }
                    className="delete-btn"
                    onClick={() => onDelete(idx, ix)}
                  />
                </Col>
              </Row>
              <Row
                style={{
                  opacity: item.isDeleted ? 0.3 : 1,
                }}
              >
                <Image
                  src={AppImages[item.image]}
                  style={{
                    width: 300,
                  }}
                />
              </Row>
              <Row
                style={{
                  opacity: item.isDeleted ? 0.5 : 1,
                }}
              >
                <Col>
                  <h2> {t(item.heading)}</h2>
                  <Col>{t(item.title)}</Col>
                  <Col>{t(item.subTitle)}</Col>
                </Col>
              </Row>
              <Row
                style={{
                  opacity: item.isDeleted ? 0.5 : 1,
                }}
              >
                <Col className="activity_btn">
                  <Button
                    variant={
                      item.occurrence === "recurring" ? "warning" : "secondary"
                    }
                    onClick={() => {
                      onOccurrenceClick(idx, ix, "recurring");
                    }}
                  >
                    {t("recurring")}
                  </Button>
                  <Button
                    variant={
                      item.occurrence === "recurring" ? "secondary" : "warning"
                    }
                    onClick={() => {
                      onOccurrenceClick(idx, ix, "oneTime");
                    }}
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
  const [isEmptyCart, setIsEmptyCard] = useState(false);
  const [skuArrays, setSkuArrays] = useState([]);

  useEffect(() => {
    const data = state.item.subServices.map((service, idx) => {
      const catagories = service.catagories?.map((item) => {
        if (!skuArrays.includes(item.sku)) {
          setSkuArrays((countryList) => {
            const arr = [...countryList, item.sku].filter(
              (value, index, array) => array.indexOf(value) === index
            );
            return arr;
          });
        }
        return {
          ...item,
          isDeleted: false,
        };
      });
      return {
        ...service,
        catagories,
        isActive: true,
      };
    });
    setCartData(data);
  }, [state?.subServices]);

  useEffect(() => {
    setIsEmptyCard(
      cartData?.some((t) => t.catagories.some((k) => t.isDeleted))
    );
  }, [cartData]);

  const onDelete = (idx, index) => {
    const actualCart = [...cartData];
    const cData = actualCart[idx];
    setCartData(() => {
      cData.catagories[index].isDeleted = !cData.catagories[index].isDeleted;
      return actualCart;
    });
    setSkuArrays((countryList) => {
      const cIndex = cData.catagories[index]["sku"];
      return countryList.filter((k) => k !== cIndex);
    });
  };
  const onOccurrenceClick = (idx, index, type) => {
    console.log(idx, index, type);
    const actualCart = [...cartData];
    const cData = actualCart[idx];
    setCartData(() => {
      cData.catagories[index].occurrence = type;
      return actualCart;
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
        {!skuArrays.length ? (
          <EmptyContainer t={t} />
        ) : (
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
                      onDelete={onDelete}
                      onOccurrenceClick={onOccurrenceClick}
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
                  selectedSubServices: cartData,
                  userInfo: state.userInfo,
                  id: state.item.content_id,
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
      </Row>
    </section>
  );
}

export default CartServices;
