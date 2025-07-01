import React, { useEffect, useState } from "react";
import Background from "../Assets/herosection.png"; // Make sure this exists in your Assets folder
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <div className="hero-wrapper" style={{ backgroundImage: `url(${Background})` }}>
      <div className="overlay"></div>
      <div className="hero-content left-aligned">
        <p className="head">Want your home to shine like new?</p>
        <p className="subtitle">Our professional house cleaning brings out the beauty in every room.</p>
        <p className="description">A cleaner home isn’t just a service — it’s a lifestyle upgrade.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>

      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
