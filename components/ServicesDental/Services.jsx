
import Image from "next/image";
import "./Services.css";
import Pediatric from "@/public/images/Pediatric-Dentistry.jpg"
import Root from "@/public/images/Root-Canal-Therapy.jpg"
import TeethCleaning from "@/public/images/Teeth-Cleaning.jpg"
import TeethWhitening from "@/public/images/Teeth-Whitening.jpg"
import Orthodontics from "@/public/images/Orthodontics.jpg"
import DentalImplants from "@/public/images/Dental-Implants.jpg"
import EmergencyCare from "@/public/images/Emergency-Care.jpg"
import FillingsAndRestorations from "@/public/images/Fillings-and-Restorations.jpg"

const services = [
  {
    title: "Pediatric Dentistry",
    desc: "Gentle, fun, and friendly dental care for children of all ages to build lifelong healthy habits.",
    img: Pediatric,
  },
  {
    title: "Root Canal Therapy",
    desc: "Save your natural tooth with our painless, advanced root canal treatment.",
    img: Root,
  },
  {
    title: "Teeth Cleaning",
    desc: "Prevent plaque and tartar buildup for healthier gums and a brighter smile.",
    img: TeethCleaning,
  },
  {
    title: "Teeth Whitening",
    desc: "In-office and take-home solutions to restore your smile’s brilliance.",
    img: TeethWhitening,
  },
  {
    title: "Orthodontics",
    desc: "Braces and aligners designed to straighten your teeth discreetly.",
    img: Orthodontics,
  },
  {
    title: "Dental Implants",
    desc: "Permanent solutions for missing teeth with natural-looking results.",
    img: DentalImplants,
  },
  {
    title: "Emergency Care",
    desc: "Same-day treatments for dental emergencies like toothaches or trauma.",
    img: EmergencyCare,
  },
  {
    title: "Fillings & Restorations",
    desc: "Fillings that repair damage while maintaining a natural appearance.",
    img: FillingsAndRestorations,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <Image
              src={service.img}
              alt={service.title}
              className="service-img"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
