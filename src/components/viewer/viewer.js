import { Col, Container, Image, Row } from "react-bootstrap";
import AppImages from "../../utils/images";

const viewerData = ["viewer", "subscribercount", "videoproduced"];
const Viewer = () => {
  return (
    <Container
      fluid
      className="viewerContainer"
      style={{
        backgroundImage: `url(${AppImages.viewerbcg})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        marginBottom: 30,
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
  );
};

export default Viewer;
