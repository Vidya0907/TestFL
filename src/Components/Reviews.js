import React from "react";
import "../Styles/Reviews.css";

// Import images
import user1 from "../Assets/testimonial1.jpg";
import user2 from "../Assets/testimonial2.jpg";
import user3 from "../Assets/testimonial3.jpg";

const testimonials = [
  {
    quoteTitle: "Love the simplicity",
    quoteText:
      "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
    userImage: user1,
    name: "Allan Collins",
    position: "Managing Director",
  },
  {
    quoteTitle: "Excellent Designs",
    quoteText:
      "Efficient, reliable, and results-oriented. Visually appealing website and improved online visibility. Very Highly recommended!",
    userImage: user2,
    name: "Tanya Grant",
    position: "Ceo & Founder",
  },
  {
    quoteTitle: "Efficient and Reliable",
    quoteText:
      "Best decision we made. Stunning website, exceptional support. Always available and prompt issue resolution. Hassle-free experience!",
    userImage: user3,
    name: "Clay Washington",
    position: "Fashion Designer",
  },
];

function Testimonial() {
  return (
<section className="section__container testimonial-section" style={{ backgroundColor: "white" }}>
      <h2>Testimonials</h2>
      <h1>What Our Customers Say</h1>
      <div className="section__grid">
        {testimonials.map((item, index) => (
          <div className="section__card" key={index}>
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <h4>{item.quoteTitle}</h4>
            <p>{item.quoteText}</p>
            <img src={item.userImage} alt={`User ${index + 1}`} />
            <h5>{item.name}</h5>
            <h6>{item.position}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
