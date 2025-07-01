import React from "react";
import "../Styles/BookingForm.css";

function BookingForm() {
  const roomOptions = ["Bedrooms", "Bathrooms", "Half Bath", "Den/Office"];
  const extras = ["Extra Heavy Duty", "Blinds", "Interior Windows", "Oven", "Garage"];
  const instructionQuestions = [
    "How Clean Is Your Home?",
    "How Will We Get Inside?",
    "Where Can We Park?",
  ];
  const tipsOptions = ["0%", "10%", "15%", "20%", "Other"];
  const parkingOptions = ["$0", "$5", "$10", "$20", "Other"];

  return (
    <div className="booking-form">
      <div className="form-layout">
        {/* Left Side - Booking Form */}
        <div className="form-wrapper">
          <div className="booking-container">
            <h2>Where Will The Service Be Taking Place?</h2>

            <div className="form-row">
              <label htmlFor="location">Location</label>
              <div className="custom-select-wrapper">
                <select id="location" className="custom-select">
                  <option>Snohomish County</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="services">Services</label>
              <div className="custom-select-wrapper">
                <select id="services" className="custom-select">
                  <option>Maintenance Cleaning</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label>Frequency</label>
              <div className="button-group">
                <button className="active">Weekly</button>
                <button>Every Other Week</button>
                <button>Monthly</button>
                <button>One-Time</button>
              </div>
            </div>

            <h2>What Needs To Be Done?</h2>
            <div className="form-grid">
              {roomOptions.map((label, index) => (
                <div key={index}>
                  <label>{label}</label>
                  <div className="custom-select-wrapper">
                    <select className="custom-select">
                      <option>1 {label}</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <h2>Select Extras</h2>
            <div className="extras-grid">
              {extras.map((extra, index) => (
                <div key={index} className="extra-box">
                  <div className="icon">📦</div>
                  <p>{extra}</p>
                </div>
              ))}
            </div>

            <h2>Instructions for Providers</h2>
            {instructionQuestions.map((question, index) => (
              <div key={index} className="form-row">
                <label>{question}</label>
                <div className="custom-select-wrapper">
                  <select className="custom-select">
                    <option>Select Option</option>
                  </select>
                </div>
              </div>
            ))}

            <h2>Select Date and Time</h2>
            <div className="form-row">
              <label>Select Date</label>
              <input type="date" />
            </div>

            <h2>Tips & Parking (Optional)</h2>

            <div className="form-row">
              <label>Tips</label>
              <div className="button-group">
                {tipsOptions.map((tip, i) => (
                  <button key={i} className={i === 0 ? "active" : ""}>
                    {tip}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <label>Parking</label>
              <div className="button-group">
                {parkingOptions.map((price, i) => (
                  <button key={i} className={i === 0 ? "active" : ""}>
                    {price}
                  </button>
                ))}
              </div>
            </div>

            <h2>Customer Details</h2>
            <div className="form-grid">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Apt No." />
            </div>

            <h2>Special Notes Or Instructions</h2>
            <textarea placeholder="Special Notes or Instructions" />

            <h2>Coupon Code</h2>
            <div className="form-row">
              <input type="text" placeholder="Enter Coupon Code" />
              <button className="apply-btn">Apply</button>
            </div>

            <h2>Payment Information</h2>
            <div className="form-row">
              <label>
                <input type="radio" checked readOnly />
                New Credit Card
              </label>
              <input type="text" placeholder="Card Number" />
            </div>

            <button className="submit-btn">Confirm & Pay</button>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <div className="sidebar-panel">
          <div className="summary-box">
            <h3>Amazonia Green Cleaning LLC</h3>
            <p className="powered">Powered by <span>BookingKoala</span></p>
            <hr />
            <ul className="summary-list">
              <li><strong>Industry:</strong> House cleaning</li>
              <li><strong>Service:</strong> Maintenance Cleaning</li>
              <li><strong>Frequency:</strong> Weekly</li>
              <li><strong>Bedrooms:</strong> 1 Bedroom</li>
              <li><strong>Bathrooms:</strong> 1 Bathroom</li>
              <li><strong>Half Bath:</strong> 0 Half Bath</li>
              <li><strong>Den/Office:</strong> 0 Den/Office</li>
            </ul>
            <div className="total-price">
              <strong>TOTAL</strong>
              <span>$115.99</span>
            </div>
          </div>

          <div className="review-box">
            <h4>Live Reviews</h4>
            <p className="review-text">“I liked their team work.”</p>
            <p className="reviewer">— Megha S</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="faq-box">
            <h4>Popular Questions</h4>
            <br/>
            <ul>
              <li>▶ How to schedule online?</li>
              <li>▶ When will I get a confirmation?</li>
              <li>▶ Do you have a phone number?</li>
              <li>▶ How do I select a date and time?</li>
              <li>▶ Can I later reschedule my booking online?</li>
              <li>▶ Why do I have to enter a zipcode?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
