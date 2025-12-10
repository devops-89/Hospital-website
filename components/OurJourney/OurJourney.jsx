import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation"
import { ArrowUpRight } from "lucide-react";
import "./OurJourney.css";
import Doctorsdiscuss from "@/public/images/meeting-hospital.jpg";
import DoctorXray from "@/public/images/doctor-checking-x-rays.jpg";

export default function AboutJourney() {
  const router = useRouter();
  return (
    <section className="about-journey-section">
      <div className="about-top">
        <div className="about-top-img">
          <Image src={Doctorsdiscuss} alt="Doctors discussing" />
        </div>

        <div className="about-top-card">
          <h3>Our Mission & Vision</h3>
          <p>
            At ApexCare, we are dedicated to providing personalised,
            compassionate dental care using the latest technology. Our goal is
            to help you achieve a healthy, confident smile while building
            lasting relationships based on trust, respect, and excellence.
          </p>
          <div className="new-div-join">
            <div className="about-top">
              <div className="about-top-card1">
                <div className="about-members">
                  <img src="https://i.pravatar.cc/50?img=12" alt="" />
                  <img src="https://i.pravatar.cc/50?img=15" alt="" />
                  <img src="https://i.pravatar.cc/50?img=18" alt="" />
                  <span>Join 5,000+ satisfied members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="journey-container">
        <div className="story-left">
          <h2>
            Our journey and <br />
            commitment to care
          </h2>
        </div>

        <div className="story-right">
          <p>
            Founded in 1995, ApexCare started with a passion for creating
            healthy smiles in a welcoming environment. What began as a small
            clinic has grown into a leading dental practice known for combining
            expert care with advanced technology. Over the years, we have
            expanded our services, embraced innovation, and built a team
            committed to making every visit comfortable and personalized.
          </p>
        </div>
      </div>
      <div className="about-lower">
        <div className="lower-img">
          <Image src={DoctorXray} alt="Doctor holding X-ray" />
        </div>

        <div className="lower-content">
          <span className="lower-tag"># About K.R.N</span>
          <h2 className="lower-title">
            Innovative tools in a <br /> modern environment
          </h2>

          <p className="lower-desc">
            At ApexCare, we believe that cutting-edge technology and a
            comfortable environment are essential to delivering the best dental
            care. Our clinic is equipped with the latest advancements to ensure
            precise diagnoses, effective treatments, and a pain-free experience
            for every patient.
          </p>

          <ul className="lower-list">
            <li>Digital X-Rays</li>
            <li>3D Imaging & Scanning</li>
            <li>Laser Dentistry</li>
            <li>Intraoral Cameras</li>
            <li>Modern, Comfortable Facilities</li>
          </ul>

          <button
            onClick={() => router.push("/contact-us")}
            className="visit-btn"
          >
            Schedule Your Visit <ArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}
