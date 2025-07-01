import React from "react";
import Doctor from "../Assets/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>About Us</span>
        </h3>
        <p className="ba-description">
          
          Welcome to <strong>Cleanify</strong> — your go-to solution for spotless homes and peace of mind. 
          We specialize in delivering professional, eco-friendly house cleaning services tailored to your needs.
          Our mission is simple: to make your space shine while giving you back the time to enjoy what truly matters. 
         
        
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Fully Trained Cleaners
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Flexible Scheduling
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Customized Plans for Every Home
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Green and Safe Products
        </p>

        
      </div>
    </div>
  );
}

export default BookAppointment;
