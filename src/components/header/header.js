import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button, Image, NavDropdown } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";
import { useState } from "react";
import LangOverlay from "../langOverlay/langOverlay";
import { isMobile } from "react-device-detect";

const bottomPanelCss = {
  color: "#131313",
  background: "#F5C518",
  height: 50,
  padding: 10,
  right: 0,
  textAlign: "center",
};
function AppHeader() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" style={{ paddingLeft: 10 }}>
        <img src={AppImages.app_logo} alt="app logo"></img>
        <img src={AppImages.app_name} alt="app name" />
      </Navbar.Brand>
      <Container style={{ justifyContent: isMobile ? "flex-end" : "center" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Image src={AppImages.menubtn} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            paddingTop: 10,
          }}
        >
          <Nav className="me-auto">
            <Nav.Link href="/home">{t("menu.home")}</Nav.Link>
            <NavDropdown
              title={t("menu.our_services")}
              id="basic-nav-dropdown"
            ></NavDropdown>
            <NavDropdown title={t("menu.our_expertise")} id="our_expertise">
              <NavDropdown.Divider />
              <NavDropdown.Item href="creative_services">
                {t("menu.creative_services")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/video_editing">
                {t("menu.video_editing")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/design_services">
                {t("menu.design_services")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/our_expertise/view_all_events"
                style={bottomPanelCss}
              >
                {t("menu.view_all_events")}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("menu.solution")} id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="/for_brands">
                {t("menu.for_brands")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_agencies">
                {t("menu.for_agencies")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_creators">
                {t("menu.for_creators")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_entrepreneurs">
                {t("menu.for_entrepreneurs")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/for_studios">
                {t("menu.for_studios")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/solution/view_all_events"
                style={bottomPanelCss}
              >
                {t("menu.view_all_events")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container
        style={{
          width: 350,
          paddingTop: 10,
        }}
      >
        <LangOverlay />
        <Button variant="warning" style={{ width: 200, marginLeft: 10 }}>
          {t("get_started_today")} <ArrowUpRight size={20}></ArrowUpRight>
        </Button>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
