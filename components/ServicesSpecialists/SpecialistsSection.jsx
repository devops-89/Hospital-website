
import "./SpecialistsSection.css";
import Image from "next/image";
import SpecialistJohn from "@/public/images/Dr. John Smith.jpg";
import SpecialistEmily from "@/public/images/Dr. Emily Lee.jpg";
import SpecialistSarah from "@/public/images/Dr. Sarah Thompson.jpg";
import SpecialistAskary from "@/public/images/Dr. Askary.jpg";

const specialists = [
  {
    name: "Dr. John Smith",
    role: "Lead Dentist",
    img: SpecialistJohn
  },
  {
    name: "Dr. Emily Lee",
    role: "Orthodontist",
    img: SpecialistEmily,
  },
  {
    name: "Dr. Sarah Thompson",
    role: "Registered Hygienist",
    img: SpecialistSarah,
  },
  {
    name: "Dr. Askary",
    role: "Orthodontist",
    img: SpecialistAskary,
  },
];

const SpecialistsSection = () => {
  return (
    <section className="specialists-section">
      <div className="specialists-header">
        <span className="tag"># SPECIALISTS</span>
        <h2>
          Meet our <br /> specialists
        </h2>
      </div>

      <div className="specialists-grid">
        {specialists.map((doc, index) => (
          <div className="specialist-card" key={index}>
            <div className="specialist-img">
              <Image src={doc.img} alt={doc.name} />
            </div>
            <h3>{doc.name}</h3>
            <p>{doc.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialistsSection;
