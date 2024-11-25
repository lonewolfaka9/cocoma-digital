import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
