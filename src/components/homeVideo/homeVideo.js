import { Container } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";

const HomeVideo = () => {
  return (
    <section id="works" className="block works-block">
      <Container>
        <Player className="video-video">
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <BigPlayButton position={"center"} />
        </Player>
      </Container>
    </section>
  );
};
export default HomeVideo;
