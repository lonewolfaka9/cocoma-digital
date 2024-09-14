import React, { useState, useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import {
  Link,
  ScrollRestoration,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";

const services = [
  {
    title: "youtube_services",
    url: "/services/youtube/services",
  },
  {
    title: "instagram_services",
    url: "/services/instagram/services",
  },
  {
    title: "video_editing_services",
    url: "/services/video/editing/services",
  },
  {
    title: "motion_graphics",
    url: "/services/motion/graphics",
  },
  {
    title: "graphic_designs",
    url: "/services/graphic/design",
  },
  {
    title: "influencer_marketing",
    url: "/services/influencer/marketing",
  },
  {
    title: "digital_marketing",
    url: "/services/digital/marketing",
  },
];
const solutions = [
  {
    title: "for_brand",
    url: "/solutions/for_brand",
  },
  {
    title: "for_agencies",
    url: "/solutions/for_agencies",
  },
  {
    title: "for_creators",
    url: "/solutions/for_creators",
  },
  {
    title: "for_entrepreneurs",
    url: "/solutions/for_entrepreneurs",
  },
  {
    title: "for_studios",
    url: "/solutions/for_studios",
  },
];
const digitalData = [
  {
    key: "cocoma_digital",
    value: [
      {
        title: "about_us",
        url: "/digital/about_us",
      },
      {
        title: "how_it_works",
        url: "/digital/how_it_works",
      },
      {
        title: "blog",
        url: "/digital/blog",
      },
    ],
  },
  {
    key: "help",
    value: [
      {
        title: "contact_us",
        url: "/digital/help/contact_us",
      },
      {
        title: "faqs",
        url: "/digital/help/faqs",
      },
      {
        title: "help_centre",
        url: "/digital/help/help_centre",
      },
      {
        title: "terms_conditions",
        url: "/digital/help/terms_conditions",
      },
      {
        title: "cookie_setting",
        url: "/digital/help/cookie_setting",
      },
    ],
  },
];
const companyData = [
  {
    key: "company",
    value: [
      {
        title: "media_kit",
        url: "/company/media_kit",
      },
      {
        title: "cocoma_for_good",
        url: "/company/cocoma_for_good",
      },

      {
        title: "press",
        url: "/company/press",
      },
      {
        title: "customer_stories",
        url: "/company/customer_stories",
      },
    ],
  },
  {
    key: "resources",
    value: [
      {
        title: "affiliates",
        url: "/company/resources/affiliates",
      },
      {
        title: "partners",
        url: "/company/resources/partners",
      },
      {
        title: "learning_centre",
        url: "/company/resources/learning_centre",
      },
    ],
  },
];
const getLink = {};
const onItemClick = (data, navigate) => {
  console.log(getLink[data]);
  navigate(getLink[data]);
};

const ListData = ({ title, data, t, navigate }) => {
  return (
    <Col>
      <h2>{t(title)}</h2>
      {data.map((data, idx) => {
        return (
          <Row key={`${title}-${idx}`}>
            <Link to={data.url}>{t(data.title)}</Link>
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
                  <Link to={item.url}>{t(item.title)}</Link>
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
  const navigate = useNavigate();

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
          <ListData
            data={services}
            t={t}
            title={"services"}
            navigate={navigate}
          />
          <ListData data={solutions} t={t} title={"solutions"} />
          <ListLoopData data={digitalData} t={t} />
          <ListLoopData data={companyData} t={t} />
        </Row>
      </div>
      <Row className="copyright-text">
        <div>{t("copyright")}</div>
      </Row>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
      <ScrollRestoration />
    </Container>
  );
}

export default AppFooter;
