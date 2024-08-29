import Carousel from "react-bootstrap/Carousel";
import AppImages from "../../utils/images";
import { Col, Row } from "react-bootstrap";
import CarouselItem from "./carouselItem";

function LatestStoriesCarousel({ data }) {
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item>
          <CarouselItem item={item}></CarouselItem>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LatestStoriesCarousel;
