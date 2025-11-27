"use client";
import "./ContactInfo.css";
import { CONTACT_INFO } from "../../public/assets/data";
export default function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        {CONTACT_INFO.map((val, i) => (
          <div className="contact-info-box" key={i}>
            <div className="icon-box">
              <val.icon size={28} color="#4a8be5" />
            </div>
            <h4>{val.title}</h4>
            <a className="number-link">{val.value}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
