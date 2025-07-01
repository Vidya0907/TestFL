import React, { useState } from "react";
import "../Styles/Service1.css";
import i1 from "../Assets/roofcleaning1.jpg";
import i2 from "../Assets/roofcleaning2.jpg";

function Service1() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments through Stripe after your cleaning is completed. A card is required to be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the roof cleaning?",
      answer:
        "Our team consists of trained, background-checked professionals with specialized experience in soft wash roof cleaning."
    },
    {
      question: "How much does roof cleaning cost?",
      answer:
        "Pricing varies based on the size, material, and condition of your roof. Contact us for a free custom quote."
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "Not necessarily. As long as we have access to your roof and water supply, you don’t need to be home."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "We provide a 2-hour arrival window. You’ll receive a notification before our crew heads your way."
    },
    {
      question: "What don’t you clean?",
      answer:
        "We avoid cleaning hazardous materials, roofs in structural disrepair, or areas requiring mold remediation."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cleaning-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay-content">
          <h1>Roof Cleaning</h1>
          <h2>A Gentle Yet Effective Soft Wash Solution</h2>
          <p>
            Roof cleaning is essential to prolong the life of your roof and prevent
            damage caused by moss, algae, and debris. Our service removes harmful buildup,
            helping to maintain your roof’s appearance and functionality.
          </p>
          <button className="green-btn">INSTANT QUOTE</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Roof Cleaning Service</h2>
            <br/>
            <p className="para01">
              Our roof cleaning service at Amazonia Green Cleaning effectively eliminates moss, algae,
              pollutants, and unsightly stains, revitalizing the natural appearance of your roof. Using
              innovative access techniques and a skilled team, we reach every corner—even challenging areas—
              without relying on costly scaffolding.
            </p>
            <br/>
            <p className="para01">
              Our eco-conscious, gentle cleaning methods, like steam cleaning and specialized biocide treatments,
              ensure long-lasting results without compromising your roof’s integrity. This approach is ideal for
              both historic and contemporary buildings, serving residential and commercial properties with lasting
              care and protection.
            </p>
            <br/>
            <div className="buttons">
              <button className="green-btn">INSTANT QUOTE</button>
              <button className="dark-btn">CALL FOR A QUOTE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Experienced & Professional</div>
        <div>Background Checked</div>
        <div>In Person Interviews</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01"> Why Choose Us for Roof Cleaning?</h2>
            <br/>
            <p className="para02">           
At Amazonia Green Cleaning, our roof cleaning service is based on an innovative 
technique developed from our research in advanced cleaning methods. We carry out a 
thorough cleaning using cutting-edge technology and apply customized solutions tailored to 
each roof’s specific needs. Our expert team ensures complete removal of moss, algae, and other 
organic buildup, restoring the beauty and preserving the integrity of your roof.
            </p>
            <br/>
            <div className="buttons">
              <button className="green-btn">INSTANT QUOTE</button>
              <button className="dark-btn">CALL FOR A QUOTE</button>
            </div>
          </div>
          <img src={i2} alt="About Cleaning" />
        </div>
      </section>

      {/* Services List */}
   <section class="roof-services-section">
  <h1>See What's Included In Roof Cleaning Services</h1>
  <p class="subheading">Customization Options Available!</p>
  
  <ul class="roof-services-list">
    <li>Removal of Moss, Algae, and Lichen</li>
    <li>Gentle Cleaning of Roof Shingles</li>
    <li>Debris Removal from Roof Valleys and Flashing</li>
    <li>Application of Preventative Treatment</li>
    <li>Optional Gutter Debris Removal</li>
  </ul>
</section>


      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-overlay"></div>
        <div className="quote-form">
          <form>
            <h2 className="form-heading">Request Your Free Quote Now</h2>
            <br/>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Zip Code" />
              <input type="text" placeholder="Square Footage" />
            </div>
            <div className="form-row2">
              <input type="text" placeholder="Desired Services" />
              <input type="text" placeholder="How did you hear about us?" />
            </div>
           <div class="checkbox-container">
  <input type="checkbox" id="terms" />
  <label for="terms">Agree to terms and updates</label>
</div>

            <button className="green-btn1">REQUEST A QUOTE NOW</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-icon">💬</div>
          <h2>Common Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-arrow">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>LET'S DO IT!</h2>
        <p>Book your cleaning today and step into a world of spotless serenity...</p>
        <div className="buttons">
          <button className="green-btn">INSTANT QUOTE</button>
          <button className="dark-btn">CALL FOR A QUOTE</button>
        </div>
      </section>
    </div>
  );
}

export default Service1;
