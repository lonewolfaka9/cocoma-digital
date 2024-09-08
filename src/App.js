import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Container from "react-bootstrap/Container";
import AppHeader from "./components/header/header";
import HomeContainer from "./components/home/home";
import TrustedBrand from "./components/trustedBrand/trustedBrand";
import ExploreServices from "./components/exploreOurServices/exploreServices";
import ServicesByPlatform from "./components/servicesByPlatform/servicesByPlatform";
import Viewer from "./components/viewer/viewer";
import LatestStories from "./components/latestStories/latestStories";
import WorkFrom from "./components/latest/workFrom";
import AppFooter from "./components/footer/footer";
import CreativeHouse from "./components/latest/creativeHouse";
import ShortReels from "./components/latest/shortReels";
import DesignWorks from "./components/latest/designWorks";
import MonthlyPerformance from "./components/monthlyPerformance/monthlyPerformance";
import SocialWork from "./components/socialWork/SocialWork";

function App() {
  return (
    <Container fluid>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <HomeContainer />
        <TrustedBrand />
        <ExploreServices />
        <ServicesByPlatform />
        <Viewer />
        <LatestStories />
        <WorkFrom />
        <CreativeHouse />
        <ShortReels />
        <DesignWorks />
        <MonthlyPerformance />
        <SocialWork />
        <AppFooter />
      </main>
    </Container>
  );
}

export default App;
