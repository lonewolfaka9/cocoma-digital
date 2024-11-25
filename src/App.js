import "bootstrap/dist/css/bootstrap.min.css";
import "video-react/dist/video-react.css";
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
import MeetComoma from "./components/meetComoma/meetComoma";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import YouTubeServices from "./components/youtubeServices/youtubeServices";
import HowItWork from "./components/youtubeServices/howItwork";
import ServicesList from "./components/youtubeServices/servicesList";
import YoutubeSuccessStories from "./components/youtubeServices/youtubeSuccessStories";
import CartServices from "./components/youtubeServices/cartServices";
import ScheduleMeeting from "./components/youtubeServices/scheduleMeeting";
import ContactUs from "./components/contactUs/contactUs";
import TermCondition from "./components/termCondition/termConditions";
import PrivacyPolicy from "./components/privacyPolicy/privacyPolicy";
import useUserSession from "./services/userSession";
import { useEffect } from "react";
import IndustryWeServe from "./components/industryWeServe/industryWeServe";
import HomeVideo from "./components/homeVideo/homeVideo";

const HomeComponent = () => {
  return (
    <>
      <HomeContainer />
      <TrustedBrand />
      <ExploreServices />
      <ServicesByPlatform />
      <Viewer />
      <HomeVideo />
      <IndustryWeServe />
      <LatestStories />
      <WorkFrom />
      <CreativeHouse />
      <ShortReels />
      <DesignWorks />
      <MonthlyPerformance />
      <SocialWork />
      <MeetComoma />
      <AppFooter />
    </>
  );
};
const YouTubeServiceContainer = () => {
  return (
    <>
      <YouTubeServices />
      <TrustedBrand />
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <HowItWork />
        <ServicesList />
        <YoutubeSuccessStories />
      </div>
      <AppFooter />
    </>
  );
};
const YouTubeCartServiceContainer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <CartServices />
      </div>
      <AppFooter />
    </>
  );
};
const YouTubeScheduleMeetingContainer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <ScheduleMeeting />
      </div>
      <AppFooter />
    </>
  );
};
const ContactUsContainer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <ContactUs />
      </div>
      <AppFooter />
    </>
  );
};
const PrivacyPolicyContainer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <PrivacyPolicy />
      </div>
      <AppFooter />
    </>
  );
};
const TermContainer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <TermCondition />
      </div>
      <AppFooter />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "services/youtube/services",
    element: <YouTubeServiceContainer />,
  },
  {
    path: "services/youtube/cart",
    element: <YouTubeCartServiceContainer />,
  },
  {
    path: "services/youtube/schedules",
    element: <YouTubeScheduleMeetingContainer />,
  },
  {
    path: "digital/help/contact_us",
    element: <ContactUsContainer />,
  },
  {
    path: "digital/help/terms_conditions",
    element: <TermContainer />,
  },
  {
    path: "digital/help/privacy_policy",
    element: <PrivacyPolicyContainer />,
  },
  {
    path: "*",
    element: <HomeComponent />,
  },
]);
function App() {
  const { sessionToken } = useUserSession();

  useEffect(() => {
    console.log("data", sessionToken);
  }, [sessionToken]);

  return (
    <Container fluid>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </Container>
  );
}

export default App;
