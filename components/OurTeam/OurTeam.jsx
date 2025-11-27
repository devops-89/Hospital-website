"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./OurTeam.module.css";

export default function OurTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT TEXT BLOCK */}
        <div className={styles.left}>
          <span className={styles.tag}># OUR TEAM</span>

          <h2 className={styles.heading}>
            Your trusted dental <br /> professionals
          </h2>

          <button className={styles.btn}>
            See a Doctor Today <ArrowUpRight size={18} />
          </button>
        </div>

        {/* RIGHT DOCTOR CARD */}
        <div className={styles.right}>
          <div className={styles.card}>
            <Image
              src="/images/doctor.jpg"
              alt="Doctor"
              width={600}
              height={650}
              className={styles.heroImg}
            />

            <div className={styles.info}>
              <h3>Dr. John Smith</h3>
              <p>Lead Dentist</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
