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
import Timeline from "./Pages/About/about";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/aboutus" element={<Timeline />} />
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
