import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./carouselItem";

function LatestStoriesCarousel({ data }) {
  return (
    <Carousel>
      {data.map((item, idx) => (
        <Carousel.Item key={`latest-stories-item-${idx}`}>
          <CarouselItem item={item}></CarouselItem>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LatestStoriesCarousel;
