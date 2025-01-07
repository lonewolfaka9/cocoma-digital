import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import CocomaFooter from "./components/Footer/CocomaFooter";
import AddToCart from "./Pages/cart/AddToCart";
import ContactUs from "./Pages/contactUs/ContactUs";
import Career from "./Pages/Jobs/Career";
import JobDetails from "./Pages/Jobs/JobDetails";
import JobApplicationForm from "./Pages/Jobs/JobApplication";
import ThankYouPage from "./Pages/Jobs/FormSubmitSuccess";
import SingleService from "./Pages/Services/SingleService";
import AboutUs from "./Pages/About/about";
import CreativeHouse from "./Pages/CreativeHouse/CreativeHouse";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";
import AllWebSeriesPortfolio from "./Pages/AllWebSeries/AllWebSeriesPortfolio";
import ViewAllSeries from "./Pages/AllWebSeries/ViewAllSeries";
import WebSeriesIndividual from "./Pages/AllWebSeries/WebSeriesIndividual";
import AdminService from "./Service/apiService";
import NotFound from "./Pages/PageNotFound";
function App() {
  const location = useLocation();
  // SET DATA WITH USESTATE
  const [homeData, setHomeData] = useState();
  const [servicesData, setServicesData] = useState();
  const [creativeData, setCreativeData] = useState();
  const [MarketingHouseData, setMarketingHouseData] = useState();

  // FOR LOADING DATA
  const [loadingHome, setLoadingHome] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingCreative, setLoadingCreative] = useState(true);
  const [loadingMarkating, setLoadingMarkating] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch home page data
    AdminService.HomePage()
      .then((response) => {
        setHomeData(response.data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoadingHome(false));

    // Fetch service data
    AdminService.service()
      .then((response) => {
        setServicesData(response.data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoadingServices(false));
    // Fetch Creative house data
    AdminService.CreativeHouse()
      .then((response) => {
        setCreativeData(response.data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoadingCreative(false));
    // Fetch Markating House data

    AdminService.MarkatingHouse()
      .then((response) => {
        setMarketingHouseData(response.data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoadingMarkating(false));
  }, []);

  // Show loading screen until all data is fetched
  const isLoading =
    loadingHome || loadingServices || loadingCreative || loadingMarkating;

  if (isLoading)
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  // Pages where Header and Footer should NOT be shown
  const excludeHeaderFooter = ["/*"];

  // Check if the current route should display header/footer
  const showHeaderFooter = !excludeHeaderFooter.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header ServiceData={servicesData} />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                HomePage={homeData}
                ServiceData={servicesData}
                CreativeHouseData={creativeData}
                MarketingHouseData={MarketingHouseData}
              />
            }
          />
          <Route
            path="/service/:id"
            element={
              <Services HomePage={homeData} ServicesPage={servicesData} />
            }
          />
          <Route
            path="/Single_Services/:id"
            element={<SingleService ServicesPage={servicesData} />}
          />

          <Route
            path="/Creative-House"
            element={
              <CreativeHouse
                HomePage={homeData}
                CreativeHouseData={creativeData}
              />
            }
          />
          <Route
            path="/Single-Video/:id"
            element={<SingleVideo CreativeHouseData={creativeData} />}
          />

          <Route
            path="/View-all-Series"
            element={<ViewAllSeries MarketingHouseData={MarketingHouseData} />}
          />
          <Route
            path="/Web-Series-Individual/:id"
            element={
              <WebSeriesIndividual MarketingHouseData={MarketingHouseData} />
            }
          />
          <Route
            path="/All-web-series-portfolio"
            element={<AllWebSeriesPortfolio />}
          />

          <Route path="/cart" element={<AddToCart />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/job-Application" element={<JobApplicationForm />} />
          <Route path="/ThankYou" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showHeaderFooter && <CocomaFooter />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
