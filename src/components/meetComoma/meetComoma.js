import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button, Card } from "react-bootstrap";
import { ArrowDown, ArrowUpRight } from "react-bootstrap-icons";
import Typography from "../../theme/cocoma/typography";

const worksData = [
  {
    id: 1,
    leftSection: {
      title: "export_experiences",
      details: "export_experiences_details",
    },
    rightSection: "owner",
    bcgImage: "expert",
  },
  {
    id: 2,
    leftSection: {
      title: "unblock_brand",
      details: "unblock_brand_details",
    },
    rightSection: "home_image",
  },
  {
    id: 3,
    leftSection: {
      title: "get_started_today",
      details: "get_started_today_details",
    },
    rightSection: "home_image",
  },
];

const fightSectionData = [
  {
    title: "find_right_for_your_business",
    img: "yourbusiness",
    buttonTitle: "hire_us",
  },
  {
    title: "find_right_for_your_career",
    img: "wehiring",
    buttonTitle: "join_us",
  },
];
const FightSection = ({ t }) => {
  return (
    <Row className="portfoliolist">
      {fightSectionData.map((item, idx) => {
        return (
          <Col
            sm={6}
            className="portfoliolist align-items-center"
            key={`fight-${idx}`}
          >
            <Container className="fight-section">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col className="count">
                        <Image src={AppImages[item.img]}></Image>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>
                    <span> {t(item.title)}</span>
                    <Button variant="warning" className="fight-btn">
                      {t(item.buttonTitle)}
                      <ArrowUpRight size={20}></ArrowUpRight>
                    </Button>
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
function MeetComoma() {
  const { t } = useTranslation();

  return (
    <section id="meetComoma" className="block works-block meetComoma">
      <Container fluid>
        <div className="title-holder">
          <h2>{t("meet_cocoma")}</h2>
        </div>
        <Row className="portfoliolist align-items-center">
          {worksData.map((works, idx) => {
            return (
              <Row key={`works.id-${works.id}`}>
                <Col sm={6}>
                  <Container className="meetcomoma">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <Row>
                            <Col sm={1} className="count">
                              {idx + 1}
                            </Col>
                            <Col sm={6} className="details">
                              <h4> {t(works.leftSection.title)}</h4>
                            </Col>
                          </Row>
                        </Card.Title>
                        <Card.Text>
                          <span>{t(works.leftSection.details)}</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Container>
                </Col>
                <Col
                  sm={6}
                  key={`works-id-details-${works.id}`}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image src={AppImages[works.rightSection]}></Image>
                </Col>
              </Row>
            );
          })}
        </Row>
        <FightSection t={t} />
      </Container>
    </section>
  );
}

export default MeetComoma;
