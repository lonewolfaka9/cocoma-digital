import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Clock } from "react-bootstrap-icons";

const viewerData = [
  "performancesubscriber",
  "performanceviewes",
  "performancevideoes",
  "performancectr",
];
const performanceHighlights = {
  our_youtube_gathered_user: {
    count: 450,
    nextData: "June 2024",
  },
  our_creative_team_produced_videos: {
    count: 500,
    nextData: "Jun 2024",
  },
  with_an_average_click_artist: {
    count: "8%",
    nextData: 300,
  },
  our_client_progetto_happiness_details: {
    count: "1m",
    nextData: "19th June, 2024",
  },
};

const RenderPerformance = ({ data, trans }) => {
  const listItem = [];

  for (let value in data) {
    listItem.push(
      <li key={`performance-${value}`}>
        {trans(value, {
          count: performanceHighlights[value]["count"],
          nextData: performanceHighlights[value]["nextData"],
        })}
      </li>
    );
  }
  return <ul>{listItem}</ul>;
};
const MonthlyPerformance = () => {
  const { t } = useTranslation();
  const onHistoryClick = () => {};
  return (
    <section
      id="monthly-performance"
      className="block works-block latest-stories monthly-performance"
    >
      <Row>
        <p>{t("monthly_performance_showcase")}</p>
        <Col>
          <h2>{t("monthly_performance", { month: "JUN", year: "2024" })} </h2>
        </Col>
        <Col>
          <Button
            variant="link"
            className="history-btn"
            onClick={onHistoryClick}
          >
            {t("history")}
            <Clock
              style={{
                marginLeft: 10,
              }}
            ></Clock>
          </Button>
        </Col>
      </Row>

      <Container
        fluid
        className="viewerContainer"
        style={{
          backgroundImage: `url(${AppImages.viewerbcg})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        <Row className="align-items-center" sm={0}>
          {viewerData.map((data) => (
            <Col key={`viewer-${data}`}>
              <Image src={AppImages[data]} className="viewer-icon"></Image>
            </Col>
          ))}
        </Row>
      </Container>
      <RenderPerformance data={performanceHighlights} trans={t} />
    </section>
  );
};

export default MonthlyPerformance;
