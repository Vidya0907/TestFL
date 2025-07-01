import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import ContactMap from "./Pages/ContactMap";
import Booking from "./Pages/Booking";
import Service1Page from "./Pages/Service1Page";
import ScrollUpButton from "./Components/ScrollUpButton"; // ✅ Import it

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<ContactMap />} />
          <Route path="/roof-cleaning" element={<Service1Page />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* ✅ Scroll Up Button shown on all pages */}
        <ScrollUpButton />
      </Router>
    </div>
  );
}

export default App;
