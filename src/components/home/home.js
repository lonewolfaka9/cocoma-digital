import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import Typography from "../../theme/cocoma/typography";
import { Button, Image } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";

function HomeContainer() {
  const { t } = useTranslation();

  return (
    <section id="home" className="block about-block">
      <Container fluid>
        <Row>
          <Col
            sm={7}
            className="about-back"
            style={{
              marginBottom: 8,
              paddingTop: 40,
            }}
          >
            <Image src={AppImages.home_global} />
            {/* 
            <Button
              variant="secondary"
              className="p-2 schedule-btn"
              style={{
                background: Typography.button.secondaryLinear,
              }}
            >
              {t("schedule_a_free_consultation")}
              <ArrowUpRight size={20}></ArrowUpRight>
            </Button> */}
            <p style={Typography.mainHeadingH1}>{t("dominate_heading")}</p>
            <p style={Typography.mainHeadingH2}>{t("cocoma_partner_data")}</p>
            <Button
              variant="warning"
              style={{
                marginBottom: 20,
              }}
            >
              {t("claim_free_consultation")}
              <ArrowUpRight size={20}></ArrowUpRight>
            </Button>
          </Col>
          <Col sm={5} className="about-image">
            <Image src={AppImages.home_image} alt="home image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeContainer;
