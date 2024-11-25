import Carousel from "react-bootstrap/Carousel";
import StoriesCarouselItem from "./storiesCarouseltem";
import { Container } from "react-bootstrap";

function StoriesCarousel({ data }) {
  return (
    <Carousel indicators={false}>
      {data.map((item, idx) => (
        <Carousel.Item key={`stories-carousel-items-data-${idx}`}>
          <StoriesCarouselItem item={item}></StoriesCarouselItem>
          <Container
            style={{
              margin: 10,
            }}
          ></Container>
          <StoriesCarouselItem item={item}></StoriesCarouselItem>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default StoriesCarousel;
