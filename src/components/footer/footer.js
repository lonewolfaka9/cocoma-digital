import React, { useState, useEffect } from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";

const services = [
  "youtube_services",
  "instagram_services",
  "video_editing_services",
  "motion_graphics",
  "graphic_designs",
  "influencer_marketing",
  "digital_marketing",
];
const solutions = [
  "for_brand",
  "for_agencies",
  "for_creators",
  "for_entrepreneurs",
  "for_studios",
];
const digitalData = [
  {
    key: "cocoma_digital",
    value: ["about_us", "how_it_works", "blog"],
  },
  {
    key: "help",
    value: [
      "contact_us",
      "faqs",
      "help_centre",
      "terms_conditions",
      "cookie_setting",
    ],
  },
];
const companyData = [
  {
    key: "company",
    value: ["media_kit", "cocoma_for_good", "press", "customer_stories"],
  },
  {
    key: "resources",
    value: ["affiliates", "partners", "learning_centre"],
  },
];

const ListData = ({ title, data, t }) => {
  return (
    <Col>
      <h2>{t(title)}</h2>
      {data.map((data, idx) => {
        return (
          <Row key={`${title}-${idx}`}>
            <span>{t(data)}</span>
          </Row>
        );
      })}
    </Col>
  );
};
const ListLoopData = ({ data, t }) => {
  return (
    <Col>
      {data.map((subData, idx) => {
        return (
          <Row key={`list-loop-${idx}`}>
            <Col>
              <h2
                style={{
                  paddingTop: idx > 0 ? 40 : 10,
                }}
              >
                {t(subData.key)}
              </h2>
              {subData.value?.map((item, idx) => (
                <Row key={`list-subData-loop-${idx}`}>
                  <span>{t(item)}</span>
                </Row>
              ))}
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};
function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid id="footer">
      <div className="copyright">
        <Row>
          <Col className="social-img-logo">
            <Image src={AppImages.appwhitelogo} />
          </Col>
          <Col className="social-img">
            <Image src={AppImages.whatsapp} />
            <Image src={AppImages.instagramwhite} />
            <Image src={AppImages.facebookwhite} />
            <Image src={AppImages.youtubewhite} />
          </Col>
        </Row>
        <Row className="item-list">
          <ListData data={services} t={t} title={"services"} />
          <ListData data={solutions} t={t} title={"solutions"} />
          <ListLoopData data={digitalData} t={t} />
          <ListLoopData data={companyData} t={t} />
        </Row>
      </div>
      <Row className="copyright-text">
        <div>{t("copyright")}</div>
      </Row>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}

export default AppFooter;
