import "./PricingCards.css";

const PricingCards = () => {
  return (
    <section className="pricing-cards-section">
      <div className="pricing-card light">
        <h3 className="card-title">General Dentistry</h3>
        <ul className="card-list">
          <li><span>Routine Checkup & Cleaning</span><span>$75</span></li>
          <li><span>Teeth Whitening (In-office)</span><span>$150</span></li>
          <li><span>X-Rays & Diagnostic Exam</span><span>$50</span></li>
          <li><span>Fillings (Tooth-colored)</span><span>$80</span></li>
        </ul>
        <button className="book-btn">Book Now ↗</button>
      </div>

      <div className="pricing-card dark">
        <h3 className="card-title" style={{ color: "white" }}>Advanced Treatments</h3>
        <ul className="card-list">
          <li><span>Root Canal Therapy</span><span>$75</span></li>
          <li><span>Dental Implants</span><span>$150</span></li>
          <li><span>Orthodontic Braces</span><span>$50</span></li>
          <li><span>Wisdom Tooth Extraction</span><span>$80</span></li>
        </ul>
        <button className="book-btn dark-btn">Book Now ↗</button>
      </div>

      <div className="pricing-card light">
        <h3 className="card-title">Pediatric & Emergency</h3>
        <ul className="card-list">
          <li><span>Pediatric Consultation</span><span>$75</span></li>
          <li><span>Emergency Dental Visit</span><span>$150</span></li>
          <li><span>Fluoride Treatment</span><span>$50</span></li>
          <li><span>Family Checkup Pack (3 Members)</span><span>$80</span></li>
        </ul>
        <button className="book-btn">Book Now ↗</button>
      </div>
    </section>
  );
};

export default PricingCards;
