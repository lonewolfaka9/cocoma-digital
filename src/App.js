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
import Cart from "./Pages/cart/AddToCart";
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
function App() {
  const location = useLocation();
  const [homeData, setHomeData] = useState();
  // console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          "https://admin.cocomadigital.com/public/api/home"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setHomeData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);
  if (loading)
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  // Pages where Header and Footer should NOT be shown
  const excludeHeaderFooter = ["cart"];

  const showHeaderFooter = !excludeHeaderFooter.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home HomePage={homeData} />} />
          <Route path="/service" element={<Services />} />
          <Route path="/Single_Services" element={<SingleService />} />
          <Route
            path="/Creative-House"
            element={<CreativeHouse HomePage={homeData} />}
          />
          <Route path="/Single-Video" element={<SingleVideo />} />
          <Route
            path="All-web-series-portfolio"
            element={<AllWebSeriesPortfolio />}
          />
          <Route path="View-all-Series" element={<ViewAllSeries />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/job-Application" element={<JobApplicationForm />} />
          <Route path="/ThankYou" element={<ThankYouPage />} />
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
