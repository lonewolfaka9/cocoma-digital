import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ListCarousel from "./listCarousel";
import data from "./youtuberSevices.json";

function ServicesList() {
  const { t } = useTranslation();
  return data.map((item, idx) => {
    return (
      <section
        id="stories_shorts_reels"
        className="block works-block latest-stories latest-work-from youtube-services-list"
        key={`stories-carousel-items-data-${idx}`}
      >
        <Row>
          <h2 style={{ paddingBottom: 30 }}>{t(item.title)}</h2>
        </Row>
        <ListCarousel data={item.services} />
      </section>
    );
  });
}

export default ServicesList;
