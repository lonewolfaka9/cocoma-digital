import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import AppImages from "../../utils/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const SESSION_KEY = "initiated";
let userInfo = {};

const AddUserInfo = ({ t, isVisible, handleClose, justClose }) => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const validateForm = (fName, lName, phone, emailAddress) => {
    setIsValid(true);
    if (
      fName?.length < 2 ||
      lName?.length < 2 ||
      !validateMobile(phone) ||
      !validateEmail(emailAddress)
    ) {
      setIsValid(false);
    }
  };

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };
  const validateMobile = (email) => {
    return mobileRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
    validateForm(firstName, lastName, mobile, newEmail);
  };
  const handleMobileChange = (e) => {
    const newMobile = e.target.value;
    setMobile(newMobile);
    setIsMobileValid(validateMobile(newMobile));
    validateForm(firstName, lastName, newMobile, email);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    validateForm(e.target.value, lastName, mobile, email);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateForm(firstName, e.target.value, mobile, email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const data = {
        firstName,
        lastName,
        mobile,
        email,
      };
      console.log("Form submitted", data);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
      userInfo = data;
      handleClose();
    } else {
      console.log("Invalid email, form not submitted");
    }
  };

  return (
    <Modal show={isVisible} onHide={justClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t("user_information")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>{t("first_name")}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={t("first_name")}
                value={firstName}
                onChange={handleFirstNameChange}
                isValid={firstName.length > 2}
                // isInvalid={firstName.length === 0}
              />
              <Form.Control.Feedback type="invalid">
                {t("please_enter_your_first_name")}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>{t("last_name")}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={t("last_name")}
                value={lastName}
                onChange={handleLastNameChange}
                isValid={lastName.length > 2}
                // isInvalid={lastName.length === 0}
              />
              <Form.Control.Feedback type="invalid">
                {t("please_enter_your_last_name")}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group
            controlId="formBasicMobile"
            style={{
              paddingBottom: 20,
            }}
          >
            <Form.Label>{t("mobile")}</Form.Label>
            <Form.Control
              type="number"
              placeholder={t("mobile")}
              value={mobile}
              onChange={handleMobileChange}
              isValid={isMobileValid && mobile.length > 0}
              isInvalid={!isMobileValid && mobile.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              {t("please_enter_your_mobile")}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            controlId="formBasicEmail"
            style={{
              paddingBottom: 20,
            }}
          >
            <Form.Label>{t("email_address")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("email_address")}
              value={email}
              name="email"
              onChange={handleEmailChange}
              isValid={isEmailValid && email.length > 0}
              isInvalid={!isEmailValid && email.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              {t("please_enter_your_email")}
            </Form.Control.Feedback>
          </Form.Group>
          <Row
            md={4}
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="primary" type="submit" disabled={!isValid}>
              {t("submit")}
            </Button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const ListCarouselItem = ({ list, title }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const onAdd = (item) => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setIsVisible(true);
    } else {
      navigate("/services/youtube/cart", {
        state: {
          item,
          title,
          userInfo,
        },
      });
    }
  };
  const handleClose = (item) => {
    setIsVisible(false);
    navigate("/services/youtube/cart", {
      state: {
        item,
        title,
        userInfo,
      },
    });
  };
  const savedContent = sessionStorage.getItem("content_id");
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
            <Button
              variant={savedContent === item.content_id ? "success" : "dark"}
              disabled={savedContent === item.content_id ? true : false}
              state={{
                item,
                title,
              }}
              onClick={() => {
                onAdd(item);
              }}
            >
              {savedContent === item.content_id ? t("scheduled") : t("add")}
            </Button>
            {isVisible && (
              <AddUserInfo
                isVisible={isVisible}
                t={t}
                handleClose={() => {
                  handleClose(item);
                }}
                justClose={() => {
                  setIsVisible(false);
                }}
              />
            )}
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
