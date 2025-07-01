import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import ContactMap from "./Pages/ContactMap";
import Booking from "./Pages/Booking";
import Service1Page from "./Pages/Service1Page";

// Global Components
import ScrollUpButton from "./Components/ScrollUpButton";

function App() {
  return (
    <div className="App">
      <Router> {/* ✅ Removed basename */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<ContactMap />} />
          <Route path="/roof-cleaning" element={<Service1Page />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Scroll to top button */}
        <ScrollUpButton />
      </Router>
    </div>
  );
}

export default App;
