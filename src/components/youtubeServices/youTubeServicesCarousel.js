import Carousel from "react-bootstrap/Carousel";
import YouTubeCarouselItem from "./youTubeCarouselItem";

function YouTubeServicesCarousel({ data }) {
  return (
    <Carousel>
      {data.map((item, idx) => (
        <Carousel.Item key={`latest-stories-item-${idx}`}>
          <YouTubeCarouselItem service={item}></YouTubeCarouselItem>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default YouTubeServicesCarousel;
