"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Teeth Cleaning",
      image: "/images/services/teethcleaning.jpg",
    },
    {
      id: 2,
      title: "Teeth Whitening",
      image: "/images/services/teethwhitening.jpg",
    },
    {
      id: 3,
      title: "Orthodontics",
      image: "/images/services/orthodontics.jpg",
    },
    {
      id: 4,
      title: "Dental Implants",
      image: "/images/services/dentalimplants.jpg",
    },
    {
      id: 5,
      title: "Emergency Care",
      image: "/images/services/emergencycare.jpg",
    },
    {
      id: 6,
      title: "Fillings & Restorations",
      image: "/images/services/filling.jpg",
    },
  ];

  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleSelect = (index) => {
    setAnimate(true);
    setActive(index);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <section className={styles.section}>
      {/**/}
      <div className={styles.topRow}>
        <p className={styles.tag}># SERVICES</p>
      </div>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
          Comprehensive dental care <br /> for your smile
        </h2>
        <button className={styles.moreBtn}>
          More Service <ArrowUpRight size={18} />
        </button>
      </div>
      <div className={styles.wrapper}>
        {/* LEFT LIST */}
        <div className={styles.left}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`${styles.serviceItem} ${
                active === i ? styles.active : ""
              }`}
              onClick={() => handleSelect(i)}
            >
              <span className={styles.number}>
                {String(s.id).padStart(2, "0")}
              </span>
              <span>{s.title}</span>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE + TESTIMONIAL */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <div
              className={`${styles.imageBox} ${
                animate ? styles.fade : styles.show
              }`}
            >
              {/* <Image
        src={services[active].image}
        alt="service"
        width={550}
        height={420}
        className={styles.heroImg}
      /> */}
              <Image
                src={services[active].image}
                alt="service"
                fill
                className={styles.heroImg}
              />
            </div>
          </div>

          <div className={styles.testimonial}>
            <p className={styles.quote}>
              “Best dentist <br />
              experience ever! <br />
              Friendly staff and <br />
              pain free visits.”
            </p>

            <div className={styles.avatars}>
              <Image src="/images/client1.png" width={45} height={45} alt="" />
              <Image src="/images/client2.png" width={45} height={45} alt="" />
              <Image src="/images/client3.png" width={45} height={45} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
