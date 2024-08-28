import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { Container } from "react-bootstrap";
import Brand from "./brand";
const brandData = [
  "showcard",
  "amazontv",
  "primevideo",
  "imdb",
  "tataev",
  "langistan",
];
const TrustedBrand = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="trusted-brand">
      <p>{t("trusted_brand_heading")}</p>
      <Marquee>
        {brandData.map((card) => (
          <Brand cardsrc={card}></Brand>
        ))}
      </Marquee>
    </Container>
  );
};

export default TrustedBrand;
