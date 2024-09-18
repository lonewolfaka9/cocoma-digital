import { Button, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";

function ScheduleMeeting() {
  const { t } = useTranslation();
  const { state } = useLocation();
  return (
    <section id="cart-services" className="cart-services">
      <Row>
        <Container className="heading-container">
          <h2>{t("schedule_a_meeting")}</h2>
          <Link to={"/services/youtube/cart"} state={state}>
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

export default ScheduleMeeting;
