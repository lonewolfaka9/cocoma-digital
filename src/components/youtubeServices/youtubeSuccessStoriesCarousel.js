import Carousel from "react-bootstrap/Carousel";
import StoriesCarouselItem from "./storiesCarouselItem";

function YoutubeSuccessStoriesCarousel({ data }) {
  return (
    <Carousel>
      {data.map((item, idx) => (
        <Carousel.Item key={`latest-stories-item-${idx}`}>
          <StoriesCarouselItem item={item}></StoriesCarouselItem>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default YoutubeSuccessStoriesCarousel;
