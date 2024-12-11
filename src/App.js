import React from "react";
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
function App() {
  const location = useLocation();
  // Pages where Header and Footer should NOT be shown
  const excludeHeaderFooter = ["cart"];

  const showHeaderFooter = !excludeHeaderFooter.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/Single-Service" element={<SingleService />} />
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
