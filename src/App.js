import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import CocomaFooter from "./components/Footer/CocomaFooter";

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
      <CocomaFooter />
    </Router>
  );
}

export default App;
