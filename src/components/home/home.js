import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import Typography from "../../theme/cocoma/typography";
import { Button, Image, Stack } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";

function HomeContainer() {
  const { t } = useTranslation();

  return (
    <section id="home" className="block about-block">
      <Container fluid>
        <Row fluid>
          <Col
            sm={6}
            style={{
              background: Typography.color.white,
            }}
          >
            <Stack
              direction="horizontal"
              style={{
                marginTop: 10,
              }}
            >
              <Image src={AppImages.home_global} />
            </Stack>
            <Button
              variant="secondary"
              className="p-2"
              style={{
                background: Typography.button.secondaryLinear,
                height: 50,
                marginTop: -100,
                marginLeft: 10,
              }}
            >
              {t("schedule_a_free_consultation")}{" "}
              <ArrowUpRight size={20}></ArrowUpRight>
            </Button>
            <p style={Typography.mainHeadingH1}>{t("dominate_heading")}</p>
            <p style={Typography.mainHeadingH2}>{t("cocoma_partner_data")}</p>
            <Button
              variant="warning"
              style={{
                marginBottom: 20,
              }}
            >
              {t("claim_free_consultation")}{" "}
              <ArrowUpRight size={20}></ArrowUpRight>
            </Button>
          </Col>
          <Col
            sm={6}
            style={{
              paddingLeft: 0,
              marginLeft: -3,
            }}
          >
            <Image src={AppImages.home_image} alt="home image" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeContainer;
