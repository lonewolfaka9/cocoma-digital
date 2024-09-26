import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button, Card, Form } from "react-bootstrap";
import { ArrowUp, ArrowUpRight } from "react-bootstrap-icons";

const brandData = [
  "tseriesblack",
  "primeblack",
  "minitvblack",
  "tataevblack",
  "imdbblack",
  "showcardblack",
  "langistanblack",
];
const fightSectionData = [
  {
    title: "cocoma_is_a_strategic_and_insightful_partner",
    details: "dummy_text",
    img: "primeblack",
    partner_name: "partner_name",
    user_photo: "userphoto",
    user_name: "partner_name",
    partner_designation: "partner_designation",
    growth: "879",
  },
  {
    title: "comoma_team_fast_savvy",
    img: "langistanblack",
    details: "dummy_text",
    partner_name: "partner_name",
    user_photo: "userphoto",
    user_name: "partner_name",
    partner_designation: "partner_designation",
    growth: "600",
  },
  {
    title: "passionate_partner",
    img: "minitvblack",
    details: "dummy_text",
    partner_name: "partner_name",
    user_photo: "userphoto",
    user_name: "partner_name",
    partner_designation: "partner_designation",
    growth: "350",
  },
];
const FightSection = ({ t }) => {
  // useEffect(() => {
  //   fetch("https://tidy-lemons-add.loca.lt/api/v1/session")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <Row
      className="portfoliolist"
      style={{
        paddingTop: 30,
      }}
    >
      {fightSectionData.map((item, idx) => {
        return (
          <Col
            className="flex-grow-0 col-md-4 col-lg-4 p-1"
            key={`fight-${idx}`}
          >
            <Container className="user-section">
              <Card>
                <Card.Body
                  style={{
                    background: "#F1F1F1",
                    padding: 20,
                  }}
                >
                  <Card.Title
                    style={{
                      textAlign: "center",
                      borderBottom: "1px dashed #080808",
                    }}
                  >
                    <Image
                      src={AppImages[item.img]}
                      style={{
                        paddingBottom: 20,
                        width: 80,
                      }}
                    ></Image>
                  </Card.Title>
                  <Card.Text>
                    <p
                      style={{
                        fontSize: 15,
                        color: "#080808",
                        fontWeight: "bold",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      {" "}
                      "{t(item.title)}"
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        paddingBottom: 30,
                      }}
                    >
                      {" "}
                      {t(item.details)}
                    </p>
                    <Row
                      style={{
                        background: "transparent",
                      }}
                    >
                      <Col sm={2}>
                        <Image src={AppImages[item.user_photo]}></Image>
                      </Col>
                      <Col>
                        <p
                          style={{
                            color: "#080808",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          {t(item.user_name)}
                        </p>
                        <p>{t(item.partner_designation)}</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        background: "transparent",
                        paddingTop: 20,
                      }}
                    >
                      <Col>
                        <ArrowUp size={20}></ArrowUp>
                        <span
                          style={{
                            color: "#080808",
                            fontWeight: 900,
                            fontSize: 18,
                          }}
                        >
                          {item.growth}%
                        </span>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        background: "transparent",
                      }}
                    >
                      <span>
                        {t("see_how_we_grew")} {item.growth}%
                      </span>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        );
      })}
    </Row>
  );
};

const Brand = ({ cardsrc }) => (
  <Image
    src={AppImages[cardsrc]}
    style={{
      padding: 20,
    }}
  />
);
const BrandPanel = () => {
  return (
    <Col
      className="flex-grow-0 col-md-12 col-lg-12  p-1"
      style={{
        textAlign: "left",
      }}
    >
      {brandData.map((card) => (
        <Brand cardsrc={card} key={`brand-${card}`}></Brand>
      ))}
    </Col>
  );
};
const LeftSection = ({ t }) => {
  return (
    <Container
      fluid
      style={{
        textAlign: "center",
      }}
    >
      <Image src={AppImages.youtubevideo} />
      <h2
        style={{
          paddingBottom: 20,
          textAlign: "left",
        }}
      >
        {t("ready_to meet_your_growth_partner")}
      </h2>
      <p
        style={{
          paddingBottom: 20,
          textAlign: "left",
          fontSize: 16,
        }}
      >
        {t("meet_your_partner_details")}
      </p>
      <BrandPanel />
    </Container>
  );
};
const RightSection = ({ t }) => {
  return (
    <Container
      fluid
      style={{
        background: "#F1F1F1",
        borderRadius: 10,
        padding: 20,
      }}
    >
      <h2>{t("welcoming_serious_inquiries")}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>{t("first_name")}</Form.Label>
          <Form.Control type="text" placeholder={t("first_name")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>{t("last_name")}</Form.Label>
          <Form.Control type="text" placeholder={t("last_name")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{t("individual_business")}</Form.Label>
          <Form.Select>
            <option>{t("individual")}</option>
            <option>{t("business")}</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>{t("work_email")}</Form.Label>
          <Form.Control type="email" placeholder={t("work_email")} />
          <Form.Text className="text-muted">{t("never_share_email")}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{t("monthly_media_budget")}</Form.Label>
          <Form.Select>
            <option>{`500$ to 1000$`}</option>
            <option>{`1000$ to 2000$`}</option>
            <option>{`2000$ to 3000$`}</option>
            <option>{`3000$ to ****`}</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="your_message">
          <Form.Label>{t("your_message")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("your_message")}
            rows={2}
            as="textarea"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={t("contact_us_checkbox")} />
        </Form.Group>
        <Row
          style={{
            background: "transparent",
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          <Col>
            <Button variant="primary">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
function ContactUs() {
  const { t } = useTranslation();

  return (
    <section id="contact-us" className="block works-block contact-us">
      <Container fluid>
        <Container className="phone-call" fluid>
          <div>
            <Image src={AppImages.phonecall}></Image>
            <span>{t("contact_us")}</span>
          </div>
        </Container>
        <Row className="portfoliolist align-items-center">
          <Col sm={5}>
            <LeftSection t={t} />
          </Col>
          <Col sm={7}>
            <RightSection t={t} />
          </Col>
        </Row>
        <FightSection t={t} />
        <Row
          style={{
            background: "transparent",
            textAlign: "center",
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <Col s>
            <Button>{t("see_how_we_grew")}</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
