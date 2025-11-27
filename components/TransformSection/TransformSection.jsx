import { Phone } from "lucide-react";
import "./TransformSection.css";
import Image from "next/image";
import DoctorImage from "@/public/images/doctor-image.webp";
const TransformSection = () => {
  return (
    <section className="transform-section">
      <div className="transform-container">
        <div className="transform-image">
          <Image src={DoctorImage} alt="Doctor" />
        </div>
        <div className="transform-content">
          <h2>Ready to transform your smile?</h2>
          <p>
            Don’t wait to give your smile the care it deserves. Schedule your
            appointment today and experience personalized dental care designed
            just for you.
          </p>

          <div className="contact-info">
            <div className="phone-icon">
              <Phone size={30} />
            </div>
            <div>
              <p className="call-label">Call us</p>
              <p className="phone-number"><b> +1(555)123–4567</b></p>
            </div>
          </div>

          <button className="schedule-btn">
            Schedule Your Visit <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
